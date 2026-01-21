/**
 * 现代汉语虚词练习平台 - Vue 3 主应用
 * 
 * 功能模块：
 * - 页面状态管理（欢迎页/练习页/报告页）
 * - 答题交互逻辑
 * - 数据持久化（localStorage）
 * - 报告生成与展示
 */

const { createApp, ref, computed, reactive, onMounted, watch } = Vue;

// localStorage 键名
const STORAGE_KEY = 'xuci_practice_session';

// 每次测试的题目数量限制
const SESSION_QUESTION_LIMIT = 30;

// 创建 Vue 应用
const app = createApp({
    setup() {
        // ========== 页面状态 ==========
        const currentPage = ref('welcome'); // welcome | practice | report

        // ========== 题库数据 ==========
        const questions = ref(window.QUESTIONS || []);
        const totalQuestions = computed(() => questions.value.length);

        // ========== 练习状态 ==========
        const currentQuestion = ref(null);
        const userAnswer = ref([]);
        const showFeedback = ref(false);
        const showAnalysis = ref(false);
        const isCorrect = ref(false);
        const showPauseModal = ref(false);

        // ========== 连续答对与庆祝效果 ==========
        const consecutiveCorrect = ref(0);
        const showCelebration = ref(false);
        const celebrationClosing = ref(false);
        const celebrationType = ref(''); // 'minor' | 'major'

        // ========== 答题记录 ==========
        const session = reactive({
            sessionId: '',
            startTime: '',
            records: []
        });

        // ========== 自适应引擎状态 ==========
        const currentLevel = ref('L1');
        const answeredCount = computed(() => session.records.length);

        // ========== 报告数据 ==========
        const reportData = ref({});

        // ========== 计算属性 ==========
        const sessionLimit = computed(() => {
            // 如果题库总数少于限制，则使用题库总数
            return Math.min(SESSION_QUESTION_LIMIT, totalQuestions.value);
        });

        const progressPercent = computed(() => {
            if (sessionLimit.value === 0) return 0;
            return Math.round((answeredCount.value / sessionLimit.value) * 100);
        });

        const questionTypeLabel = computed(() => {
            if (!currentQuestion.value) return '';
            const typeMap = {
                single: '单选题',
                multiple: '多选题',
                judgment: '判断题'
            };
            return typeMap[currentQuestion.value.type] || '';
        });

        const categoryLabel = computed(() => {
            if (!currentQuestion.value) return '';
            return window.CATEGORY_MAP[currentQuestion.value.category] || '';
        });

        const currentAccuracy = computed(() => {
            if (session.records.length === 0) return 0;
            const correct = session.records.filter(r => r.isCorrect).length;
            return Math.round((correct / session.records.length) * 100);
        });

        const hasMoreQuestions = computed(() => {
            // 达到本次测试题目上限时结束
            if (answeredCount.value >= sessionLimit.value) {
                return false;
            }
            return AdaptiveEngine.hasMoreQuestions(questions.value);
        });

        // ========== 方法 ==========

        /**
         * 开始练习
         */
        function startPractice() {
            // 初始化会话
            session.sessionId = generateSessionId();
            session.startTime = new Date().toISOString();
            session.records = [];

            // 重置连续答对计数
            consecutiveCorrect.value = 0;

            // 初始化自适应引擎
            AdaptiveEngine.init();
            currentLevel.value = AdaptiveEngine.getCurrentLevel();

            // 获取第一道题
            loadNextQuestion();

            // 切换到练习页
            currentPage.value = 'practice';

            // 保存到 localStorage
            saveSession();
        }

        /**
         * 加载下一道题目
         */
        function loadNextQuestion() {
            const nextQ = AdaptiveEngine.getNextQuestion(questions.value);
            currentQuestion.value = nextQ;
            currentLevel.value = AdaptiveEngine.getCurrentLevel();

            // 重置答题状态
            userAnswer.value = [];
            showFeedback.value = false;
            showAnalysis.value = false;
            isCorrect.value = false;
        }

        /**
         * 选择选项
         */
        function selectOption(optionKey) {
            if (showFeedback.value) return; // 已提交答案后不能修改

            const type = currentQuestion.value.type;

            if (type === 'single' || type === 'judgment') {
                // 单选或判断：直接替换
                userAnswer.value = [optionKey];
            } else if (type === 'multiple') {
                // 多选：切换选中状态
                const index = userAnswer.value.indexOf(optionKey);
                if (index > -1) {
                    userAnswer.value.splice(index, 1);
                } else {
                    userAnswer.value.push(optionKey);
                }
            }
        }

        /**
         * 提交答案
         */
        function submitAnswer() {
            if (userAnswer.value.length === 0) return;

            const q = currentQuestion.value;

            // 判断是否正确
            const correctAnswer = [...q.answer].sort();
            const userAnswerSorted = [...userAnswer.value].sort();
            isCorrect.value = JSON.stringify(correctAnswer) === JSON.stringify(userAnswerSorted);

            // 记录答题结果
            const record = {
                questionId: q.id,
                level: q.level,
                category: q.category,
                tag: q.tag,
                type: q.type,
                userAnswer: [...userAnswer.value],
                correctAnswer: [...q.answer],
                isCorrect: isCorrect.value,
                timestamp: new Date().toISOString()
            };
            session.records.push(record);

            // 处理自适应逻辑
            const result = AdaptiveEngine.processAnswer(q.id, isCorrect.value, q.level);
            currentLevel.value = AdaptiveEngine.getCurrentLevel();

            // 更新连续答对计数并检查庆祝效果
            if (isCorrect.value) {
                consecutiveCorrect.value++;
                checkCelebration();
            } else {
                consecutiveCorrect.value = 0;
            }

            // 显示反馈
            showFeedback.value = true;

            // 保存到 localStorage
            saveSession();
        }

        /**
         * 检查是否触发庆祝效果
         */
        function checkCelebration() {
            if (consecutiveCorrect.value === 10) {
                // Major celebration: 10 consecutive correct
                triggerCelebration('major');
            } else if (consecutiveCorrect.value === 5) {
                // Minor celebration: 5 consecutive correct
                triggerCelebration('minor');
            }
        }

        /**
         * 触发庆祝效果
         */
        function triggerCelebration(type) {
            celebrationType.value = type;
            showCelebration.value = true;

            // 自动关闭庆祝效果
            const duration = type === 'major' ? 2500 : 1500;
            setTimeout(() => {
                closeCelebration();
            }, duration);
        }

        /**
         * 关闭庆祝效果（带淡出动画）
         */
        function closeCelebration() {
            if (celebrationClosing.value) return; // 防止重复触发
            celebrationClosing.value = true;
            setTimeout(() => {
                showCelebration.value = false;
                celebrationClosing.value = false;
            }, 300); // 与 CSS 动画时长匹配
        }

        /**
         * 下一题
         */
        function nextQuestion() {
            if (hasMoreQuestions.value) {
                loadNextQuestion();
            } else {
                finishPractice();
            }
        }

        /**
         * 结束练习并生成报告
         */
        function finishPractice() {
            // 生成报告
            reportData.value = ReportGenerator.generate(session.records);

            // 切换到报告页
            currentPage.value = 'report';

            // 清除 localStorage 中的练习会话
            clearSession();
        }

        /**
         * 确认重置练习
         */
        function confirmReset() {
            if (confirm('确定要重置练习吗？当前答题进度将丢失。')) {
                showPauseModal.value = false;
                restartPractice();
            }
        }

        /**
         * 重新开始练习
         */
        function restartPractice() {
            // 清除状态
            session.records = [];
            currentQuestion.value = null;
            reportData.value = {};
            consecutiveCorrect.value = 0;

            // 返回欢迎页
            currentPage.value = 'welcome';

            // 清除 localStorage
            clearSession();
        }

        /**
         * 下载报告（PDF格式）
         * 使用浏览器打印功能导出为PDF
         */
        function downloadReport() {
            // 设置打印标题
            const originalTitle = document.title;
            document.title = `虚词练习报告_${formatDate(new Date())}`;

            // 触发打印对话框（用户可选择"另存为PDF"）
            window.print();

            // 恢复原标题
            setTimeout(() => {
                document.title = originalTitle;
            }, 1000);
        }

        /**
         * 获取正确率对应的样式类
         */
        function getAccuracyClass(accuracy) {
            if (accuracy >= 80) return 'high';
            if (accuracy >= 60) return 'medium';
            return 'low';
        }

        /**
         * 获取虚词类别中文名
         */
        function getCategoryName(category) {
            return window.CATEGORY_MAP[category] || category;
        }

        // ========== 工具函数 ==========

        function generateSessionId() {
            const date = new Date();
            const dateStr = date.toISOString().split('T')[0];
            const random = Math.random().toString(36).substring(2, 8);
            return `${dateStr}-${random}`;
        }

        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}${month}${day}`;
        }

        function saveSession() {
            const data = {
                session: { ...session },
                engineState: AdaptiveEngine.getState()
            };
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch (e) {
                console.warn('无法保存到 localStorage:', e);
            }
        }

        function loadSession() {
            try {
                const data = localStorage.getItem(STORAGE_KEY);
                if (data) {
                    const parsed = JSON.parse(data);
                    // 恢复会话数据
                    Object.assign(session, parsed.session);
                    // 恢复引擎状态
                    AdaptiveEngine.restoreState(parsed.engineState);
                    currentLevel.value = AdaptiveEngine.getCurrentLevel();
                    return true;
                }
            } catch (e) {
                console.warn('无法从 localStorage 加载:', e);
            }
            return false;
        }

        function clearSession() {
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch (e) {
                console.warn('无法清除 localStorage:', e);
            }
        }

        // ========== 生命周期 ==========

        onMounted(() => {
            // 检查是否有未完成的练习
            if (loadSession() && session.records.length > 0) {
                const resumeConfirm = confirm(
                    `发现未完成的练习（已答 ${session.records.length} 题），是否继续？\n\n点击"确定"继续练习，点击"取消"开始新练习。`
                );
                if (resumeConfirm) {
                    // 恢复练习
                    currentPage.value = 'practice';
                    loadNextQuestion();
                } else {
                    // 开始新练习
                    clearSession();
                }
            }
        });

        // ========== 返回模板使用的数据和方法 ==========
        return {
            // 页面状态
            currentPage,

            // 题库
            questions,
            totalQuestions,
            sessionLimit,

            // 练习状态
            currentQuestion,
            userAnswer,
            showFeedback,
            showAnalysis,
            isCorrect,
            showPauseModal,
            currentLevel,
            answeredCount,

            // 庆祝效果
            consecutiveCorrect,
            showCelebration,
            celebrationClosing,
            celebrationType,

            // 计算属性
            progressPercent,
            questionTypeLabel,
            categoryLabel,
            currentAccuracy,
            hasMoreQuestions,

            // 报告
            reportData,

            // 方法
            startPractice,
            selectOption,
            submitAnswer,
            nextQuestion,
            finishPractice,
            confirmReset,
            restartPractice,
            downloadReport,
            getAccuracyClass,
            getCategoryName,
            closeCelebration
        };
    }
});

// 挂载应用
app.mount('#app');
