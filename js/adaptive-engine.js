/**
 * 现代汉语虚词练习平台 - 自适应难度引擎
 * 
 * 难度规则：
 * - 初始难度：基础题
 * - 连续答对 3 道基础题 → 切换为进阶题
 * - 答错 2 道进阶题 → 切回基础题
 * - 同难度下题目随机抽取，已答题目不重复
 */

const AdaptiveEngine = {
    // 难度配置
    config: {
        initialLevel: 'L1',
        upgradeThreshold: 3,      // 连续答对3道L1题升级
        downgradeThreshold: 2     // 累计答错2道L2题降级
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
        levelHistory: []          // 难度变化历史
    },

    /**
     * 初始化引擎
     */
    init() {
        this.state = {
            currentLevel: this.config.initialLevel,
            consecutiveCorrect: 0,
            advancedWrongCount: 0,
            answeredIds: [],
            levelHistory: [{
                level: this.config.initialLevel,
                reason: '初始难度',
                timestamp: new Date().toISOString()
            }]
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
            this.state = { ...savedState };
        }
    },

    /**
     * 处理答题结果，更新难度状态
     * @param {string} questionId - 题目ID
     * @param {boolean} isCorrect - 是否答对
     * @param {string} questionLevel - 题目难度
     * @returns {object} 包含是否升级/降级的信息
     */
    processAnswer(questionId, isCorrect, questionLevel) {
        // 记录已答题目
        if (!this.state.answeredIds.includes(questionId)) {
            this.state.answeredIds.push(questionId);
        }

        const result = {
            levelChanged: false,
            previousLevel: this.state.currentLevel,
            newLevel: this.state.currentLevel,
            reason: ''
        };

        // 根据当前难度处理
        if (this.state.currentLevel === 'L1') {
            result.levelChanged = this._processBasicAnswer(isCorrect, result);
        } else {
            result.levelChanged = this._processAdvancedAnswer(isCorrect, result);
        }

        // 记录难度变化
        if (result.levelChanged) {
            this.state.levelHistory.push({
                level: result.newLevel,
                reason: result.reason,
                timestamp: new Date().toISOString()
            });
        }

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
     */
    _processAdvancedAnswer(isCorrect, result) {
        if (!isCorrect) {
            this.state.advancedWrongCount++;
            
            // 检查是否达到降级条件
            if (this.state.advancedWrongCount >= this.config.downgradeThreshold) {
                this.state.currentLevel = 'L1';
                this.state.advancedWrongCount = 0;
                this.state.consecutiveCorrect = 0;  // 重置L1题连续正确计数
                
                result.newLevel = 'L1';
                result.reason = `答错${this.config.downgradeThreshold}道L2题，降级为L1题`;
                return true;
            }
        }
        return false;
    },

    /**
     * 获取下一道题目
     * @param {Array} questions - 题库
     * @returns {object|null} 下一道题目，如果没有可用题目则返回null
     */
    getNextQuestion(questions) {
        const currentLevel = this.state.currentLevel;
        
        // 筛选当前难度且未答过的题目
        const availableQuestions = questions.filter(q => 
            q.level === currentLevel && 
            !this.state.answeredIds.includes(q.id)
        );

        if (availableQuestions.length === 0) {
            // 当前难度无题目，尝试获取另一难度的题目
            const otherLevel = currentLevel === 'L1' ? 'L2' : 'L1';
            const otherQuestions = questions.filter(q => 
                q.level === otherLevel && 
                !this.state.answeredIds.includes(q.id)
            );
            
            if (otherQuestions.length > 0) {
                // 自动切换到另一难度
                this.state.currentLevel = otherLevel;
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
                : null
        };
    },

    /**
     * 获取难度显示名称
     * @param {string} level - 难度级别 (L1/L2)
     * @returns {string} 中文名称
     */
    getLevelName(level) {
        return this.levelNames[level] || level;
    }
};

// 导出
window.AdaptiveEngine = AdaptiveEngine;
