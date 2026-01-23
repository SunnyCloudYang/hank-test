/**
 * 现代汉语虚词练习平台 - 自适应难度引擎
 * 
 * 难度规则：
 * - 初始难度：基础题
 * - 连续答对 3 道基础题 → 切换为进阶题
 * - 答错 2 道进阶题 → 切回基础题
 * - 同难度下题目随机抽取，已答题目不重复
 * - 连错两道同类别L2题目时，接下来两道L1题从该类别抽取
 * - 支持固定题目优先展示
 */

const AdaptiveEngine = {
    // 难度配置
    config: {
        initialLevel: 'L1',
        upgradeThreshold: 3,      // 连续答对3道L1题升级
        downgradeThreshold: 2,    // 累计答错2道L2题降级
        categoryForcedCount: 2    // 降级后从同类别抽取的L1题目数量
    },

    // 难度显示名称映射
    levelNames: {
        'L1': '基础题',
        'L2': '进阶题'
    },

    // 当前状态
    state: {
        currentLevel: 'L1',
        consecutiveCorrect: 0,    // L1题连续正确数
        advancedWrongCount: 0,    // L2题错误计数
        answeredIds: [],          // 已答题目ID列表
        levelHistory: [],         // 难度变化历史
        // 新增：追踪L2错误题目的类别
        advancedWrongCategories: [],  // 记录连续答错的L2题目类别
        // 新增：类别强制抽取状态
        forcedCategory: null,         // 强制抽取的类别
        forcedCategoryRemaining: 0,   // 剩余强制抽取题目数
        // 新增：固定题目队列
        fixedQuestionIds: [],         // 固定题目ID队列
        fixedQuestionsCompleted: false // 固定题目是否已全部完成
    },

    /**
     * 初始化引擎
     * @param {Array} questions - 可选，题库数组，用于初始化固定题目队列
     */
    init(questions = []) {
        // 初始化固定题目队列
        const fixedQuestions = questions.filter(q => q.fixed === true);
        const fixedQuestionIds = fixedQuestions.map(q => q.id);

        this.state = {
            currentLevel: this.config.initialLevel,
            consecutiveCorrect: 0,
            advancedWrongCount: 0,
            answeredIds: [],
            levelHistory: [{
                level: this.config.initialLevel,
                reason: '初始难度',
                timestamp: new Date().toISOString()
            }],
            // 新增状态
            advancedWrongCategories: [],
            forcedCategory: null,
            forcedCategoryRemaining: 0,
            fixedQuestionIds: fixedQuestionIds,
            fixedQuestionsCompleted: fixedQuestionIds.length === 0
        };
        return this;
    },

    /**
     * 获取当前难度
     * @returns {string} 'L1' 或 'L2'
     */
    getCurrentLevel() {
        return this.state.currentLevel;
    },

    /**
     * 获取当前状态
     * @returns {object} 当前引擎状态
     */
    getState() {
        return { ...this.state };
    },

    /**
     * 从状态恢复
     * @param {object} savedState - 保存的状态
     */
    restoreState(savedState) {
        if (savedState) {
            // 合并保存的状态，同时确保新属性有默认值（兼容旧版本的保存数据）
            this.state = {
                currentLevel: savedState.currentLevel || this.config.initialLevel,
                consecutiveCorrect: savedState.consecutiveCorrect || 0,
                advancedWrongCount: savedState.advancedWrongCount || 0,
                answeredIds: savedState.answeredIds || [],
                levelHistory: savedState.levelHistory || [],
                // 新增属性的默认值
                advancedWrongCategories: savedState.advancedWrongCategories || [],
                forcedCategory: savedState.forcedCategory || null,
                forcedCategoryRemaining: savedState.forcedCategoryRemaining || 0,
                fixedQuestionIds: savedState.fixedQuestionIds || [],
                fixedQuestionsCompleted: savedState.fixedQuestionsCompleted !== undefined 
                    ? savedState.fixedQuestionsCompleted 
                    : true  // 如果没有这个属性，假设固定题目已完成
            };
        }
    },

    /**
     * 处理答题结果，更新难度状态
     * @param {string} questionId - 题目ID
     * @param {boolean} isCorrect - 是否答对
     * @param {string} questionLevel - 题目难度
     * @param {string} questionCategory - 题目类别（用于追踪同类别错误）
     * @returns {object} 包含是否升级/降级的信息
     */
    processAnswer(questionId, isCorrect, questionLevel, questionCategory = null) {
        // 记录已答题目
        if (!this.state.answeredIds.includes(questionId)) {
            this.state.answeredIds.push(questionId);
        }

        const result = {
            levelChanged: false,
            previousLevel: this.state.currentLevel,
            newLevel: this.state.currentLevel,
            reason: '',
            forcedCategory: null  // 新增：返回强制类别信息
        };

        // 根据当前难度处理
        if (this.state.currentLevel === 'L1') {
            result.levelChanged = this._processBasicAnswer(isCorrect, result);
            // L1题目答题后，减少强制类别计数
            if (this.state.forcedCategoryRemaining > 0) {
                this.state.forcedCategoryRemaining--;
                if (this.state.forcedCategoryRemaining === 0) {
                    this.state.forcedCategory = null;
                }
            }
        } else {
            result.levelChanged = this._processAdvancedAnswer(isCorrect, result, questionCategory);
        }

        // 记录难度变化
        if (result.levelChanged) {
            this.state.levelHistory.push({
                level: result.newLevel,
                reason: result.reason,
                timestamp: new Date().toISOString()
            });
        }

        // 返回强制类别信息
        result.forcedCategory = this.state.forcedCategory;

        return result;
    },

    /**
     * 处理L1题答案
     * @private
     */
    _processBasicAnswer(isCorrect, result) {
        if (isCorrect) {
            this.state.consecutiveCorrect++;
            
            // 检查是否达到升级条件
            if (this.state.consecutiveCorrect >= this.config.upgradeThreshold) {
                this.state.currentLevel = 'L2';
                this.state.consecutiveCorrect = 0;
                this.state.advancedWrongCount = 0;  // 重置L2题错误计数
                
                result.newLevel = 'L2';
                result.reason = `连续答对${this.config.upgradeThreshold}道L1题，升级为L2题`;
                return true;
            }
        } else {
            // 答错L1题，重置连续正确计数
            this.state.consecutiveCorrect = 0;
        }
        return false;
    },

    /**
     * 处理L2题答案
     * @private
     * @param {boolean} isCorrect - 是否答对
     * @param {object} result - 结果对象
     * @param {string} category - 题目类别
     */
    _processAdvancedAnswer(isCorrect, result, category = null) {
        if (!isCorrect) {
            this.state.advancedWrongCount++;
            
            // 记录错误题目的类别
            if (category) {
                this.state.advancedWrongCategories.push(category);
            }
            
            // 检查是否达到降级条件
            if (this.state.advancedWrongCount >= this.config.downgradeThreshold) {
                // 检查连续错误的题目是否为同一类别
                const wrongCategories = this.state.advancedWrongCategories;
                const lastN = wrongCategories.slice(-this.config.downgradeThreshold);
                const allSameCategory = lastN.length === this.config.downgradeThreshold && 
                                       lastN.every(cat => cat === lastN[0]);
                
                if (allSameCategory && lastN[0]) {
                    // 设置强制类别
                    this.state.forcedCategory = lastN[0];
                    this.state.forcedCategoryRemaining = this.config.categoryForcedCount;
                    result.reason = `连续答错${this.config.downgradeThreshold}道${this._getCategoryName(lastN[0])}L2题，降级为L1题，接下来${this.config.categoryForcedCount}道L1题将从${this._getCategoryName(lastN[0])}中抽取`;
                } else {
                    result.reason = `答错${this.config.downgradeThreshold}道L2题，降级为L1题`;
                }
                
                this.state.currentLevel = 'L1';
                this.state.advancedWrongCount = 0;
                this.state.consecutiveCorrect = 0;  // 重置L1题连续正确计数
                this.state.advancedWrongCategories = [];  // 重置错误类别记录
                
                result.newLevel = 'L1';
                return true;
            }
        } else {
            // 答对L2题，清空错误类别记录
            this.state.advancedWrongCategories = [];
        }
        return false;
    },

    /**
     * 获取类别中文名称
     * @private
     */
    _getCategoryName(category) {
        return window.CATEGORY_MAP && window.CATEGORY_MAP[category] 
            ? window.CATEGORY_MAP[category] 
            : category;
    },

    /**
     * 获取下一道题目
     * @param {Array} questions - 题库
     * @returns {object|null} 下一道题目，如果没有可用题目则返回null
     */
    getNextQuestion(questions) {
        // 1. 优先处理固定题目
        if (!this.state.fixedQuestionsCompleted && this.state.fixedQuestionIds.length > 0) {
            const nextFixedId = this.state.fixedQuestionIds[0];
            const fixedQuestion = questions.find(q => 
                q.id === nextFixedId && !this.state.answeredIds.includes(q.id)
            );
            
            if (fixedQuestion) {
                // 从队列中移除
                this.state.fixedQuestionIds.shift();
                if (this.state.fixedQuestionIds.length === 0) {
                    this.state.fixedQuestionsCompleted = true;
                }
                return fixedQuestion;
            } else {
                // 该固定题目已答过或不存在，跳过
                this.state.fixedQuestionIds.shift();
                if (this.state.fixedQuestionIds.length === 0) {
                    this.state.fixedQuestionsCompleted = true;
                }
                // 递归获取下一道
                return this.getNextQuestion(questions);
            }
        }

        // 标记固定题目已完成
        if (!this.state.fixedQuestionsCompleted) {
            this.state.fixedQuestionsCompleted = true;
        }

        const currentLevel = this.state.currentLevel;
        
        // 2. 检查是否有强制类别限制
        let availableQuestions;
        if (this.state.forcedCategory && this.state.forcedCategoryRemaining > 0 && currentLevel === 'L1') {
            // 从强制类别中抽取L1题目
            availableQuestions = questions.filter(q => 
                q.level === 'L1' && 
                q.category === this.state.forcedCategory &&
                !this.state.answeredIds.includes(q.id) &&
                q.fixed !== true  // 排除固定题目
            );
            
            // 如果强制类别的L1题目不足，则从所有L1题目中补充
            if (availableQuestions.length === 0) {
                availableQuestions = questions.filter(q => 
                    q.level === 'L1' && 
                    !this.state.answeredIds.includes(q.id) &&
                    q.fixed !== true
                );
                // 重置强制类别状态
                this.state.forcedCategory = null;
                this.state.forcedCategoryRemaining = 0;
            }
        } else {
            // 正常筛选：当前难度且未答过的题目（排除固定题目，它们已在前面处理）
            availableQuestions = questions.filter(q => 
                q.level === currentLevel && 
                !this.state.answeredIds.includes(q.id) &&
                q.fixed !== true
            );
        }

        if (availableQuestions.length === 0) {
            // 当前难度无题目，尝试获取另一难度的题目
            const otherLevel = currentLevel === 'L1' ? 'L2' : 'L1';
            const otherQuestions = questions.filter(q => 
                q.level === otherLevel && 
                !this.state.answeredIds.includes(q.id) &&
                q.fixed !== true
            );
            
            if (otherQuestions.length > 0) {
                // 自动切换到另一难度
                this.state.currentLevel = otherLevel;
                // 重置强制类别状态
                this.state.forcedCategory = null;
                this.state.forcedCategoryRemaining = 0;
                this.state.levelHistory.push({
                    level: otherLevel,
                    reason: `${this.levelNames[currentLevel]}已做完，自动切换`,
                    timestamp: new Date().toISOString()
                });
                return this._randomSelect(otherQuestions);
            }
            
            return null; // 所有题目都已答完
        }

        return this._randomSelect(availableQuestions);
    },

    /**
     * 随机选择一道题目
     * @private
     */
    _randomSelect(questions) {
        const index = Math.floor(Math.random() * questions.length);
        return questions[index];
    },

    /**
     * 获取剩余题目数量
     * @param {Array} questions - 题库
     * @returns {object} 剩余题目数量统计
     */
    getRemainingCount(questions) {
        const L1Remaining = questions.filter(q => 
            q.level === 'L1' && !this.state.answeredIds.includes(q.id)
        ).length;
        
        const L2Remaining = questions.filter(q => 
            q.level === 'L2' && !this.state.answeredIds.includes(q.id)
        ).length;

        return {
            L1: L1Remaining,
            L2: L2Remaining,
            total: L1Remaining + L2Remaining,
            currentLevel: this.state.currentLevel === 'L1' ? L1Remaining : L2Remaining
        };
    },

    /**
     * 检查是否还有题目可做
     * @param {Array} questions - 题库
     * @returns {boolean}
     */
    hasMoreQuestions(questions) {
        return this.getRemainingCount(questions).total > 0;
    },

    /**
     * 获取当前进度信息
     * @returns {object} 进度信息
     */
    getProgressInfo() {
        return {
            currentLevel: this.state.currentLevel,
            consecutiveCorrect: this.state.consecutiveCorrect,
            advancedWrongCount: this.state.advancedWrongCount,
            answeredCount: this.state.answeredIds.length,
            upgradeProgress: this.state.currentLevel === 'L1' 
                ? `${this.state.consecutiveCorrect}/${this.config.upgradeThreshold}`
                : null,
            downgradeProgress: this.state.currentLevel === 'L2'
                ? `${this.state.advancedWrongCount}/${this.config.downgradeThreshold}`
                : null,
            // 新增：强制类别信息
            forcedCategory: this.state.forcedCategory,
            forcedCategoryRemaining: this.state.forcedCategoryRemaining,
            // 新增：固定题目信息
            fixedQuestionsRemaining: this.state.fixedQuestionIds.length,
            fixedQuestionsCompleted: this.state.fixedQuestionsCompleted
        };
    },

    /**
     * 获取难度显示名称
     * @param {string} level - 难度级别 (L1/L2)
     * @returns {string} 中文名称
     */
    getLevelName(level) {
        return this.levelNames[level] || level;
    },

    /**
     * 检查是否处于固定题目阶段
     * @returns {boolean}
     */
    isInFixedQuestionsPhase() {
        return !this.state.fixedQuestionsCompleted && this.state.fixedQuestionIds.length > 0;
    },

    /**
     * 检查是否处于强制类别抽取模式
     * @returns {boolean}
     */
    isInForcedCategoryMode() {
        return this.state.forcedCategory !== null && this.state.forcedCategoryRemaining > 0;
    },

    /**
     * 获取当前强制类别信息
     * @returns {object|null}
     */
    getForcedCategoryInfo() {
        if (!this.isInForcedCategoryMode()) {
            return null;
        }
        return {
            category: this.state.forcedCategory,
            categoryName: this._getCategoryName(this.state.forcedCategory),
            remaining: this.state.forcedCategoryRemaining
        };
    }
};

// 导出
window.AdaptiveEngine = AdaptiveEngine;
