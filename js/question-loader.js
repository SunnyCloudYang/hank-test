/**
 * 现代汉语虚词练习平台 - 题库加载器
 * 
 * 自动合并所有类别的题库数据
 * 支持动态添加新类别
 */

(function() {
    'use strict';

    // 收集所有题库
    const questionBanks = [];

    // 已注册的题库列表
    const registeredBanks = [
        'PREPOSITION_QUESTIONS',  // 介词
        'PARTICLE_QUESTIONS',     // 助词
        'CONJUNCTION_QUESTIONS',  // 连词
        'MODAL_QUESTIONS'         // 语气词
        // 添加新类别时，在此添加对应的变量名
        // 'ADVERB_QUESTIONS',    // 副词（示例）
    ];

    /**
     * 合并所有题库
     */
    function loadAllQuestions() {
        const allQuestions = [];

        registeredBanks.forEach(bankName => {
            if (window[bankName] && Array.isArray(window[bankName])) {
                allQuestions.push(...window[bankName]);
                console.log(`[题库加载] ${bankName}: ${window[bankName].length} 题`);
            } else {
                console.warn(`[题库加载] 未找到题库: ${bankName}`);
            }
        });

        console.log(`[题库加载] 总计: ${allQuestions.length} 题`);
        return allQuestions;
    }

    /**
     * 注册新的题库
     * @param {string} bankName - 题库全局变量名
     */
    function registerQuestionBank(bankName) {
        if (!registeredBanks.includes(bankName)) {
            registeredBanks.push(bankName);
            // 重新加载
            window.QUESTIONS = loadAllQuestions();
        }
    }

    /**
     * 动态添加题目
     * @param {array} questions - 题目数组
     */
    function addQuestions(questions) {
        if (Array.isArray(questions)) {
            window.QUESTIONS = window.QUESTIONS || [];
            window.QUESTIONS.push(...questions);
            console.log(`[题库加载] 动态添加 ${questions.length} 题`);
        }
    }

    /**
     * 获取指定类别的题目
     * @param {string} category - 类别ID
     * @returns {array} 题目列表
     */
    function getQuestionsByCategory(category) {
        return (window.QUESTIONS || []).filter(q => q.category === category);
    }

    /**
     * 获取指定难度的题目
     * @param {string} level - 难度级别 (L1/L2)
     * @returns {array} 题目列表
     */
    function getQuestionsByLevel(level) {
        return (window.QUESTIONS || []).filter(q => q.level === level);
    }

    /**
     * 获取题库统计信息
     * @returns {object} 统计信息
     */
    function getQuestionStats() {
        const questions = window.QUESTIONS || [];
        const stats = {
            total: questions.length,
            byCategory: {},
            byLevel: {
                L1: 0,
                L2: 0
            },
            byType: {
                single: 0,
                multiple: 0,
                judgment: 0
            }
        };

        questions.forEach(q => {
            // 按类别统计
            if (!stats.byCategory[q.category]) {
                stats.byCategory[q.category] = { L1: 0, L2: 0, total: 0 };
            }
            stats.byCategory[q.category][q.level]++;
            stats.byCategory[q.category].total++;

            // 按难度统计
            stats.byLevel[q.level]++;

            // 按题型统计
            stats.byType[q.type]++;
        });

        return stats;
    }

    /**
     * 打印题库统计信息
     */
    function printStats() {
        const stats = getQuestionStats();
        console.log('========== 题库统计 ==========');
        console.log(`总题数: ${stats.total}`);
        console.log(`L1 基础: ${stats.byLevel.L1}, L2 进阶: ${stats.byLevel.L2}`);
        console.log(`单选: ${stats.byType.single}, 多选: ${stats.byType.multiple}, 判断: ${stats.byType.judgment}`);
        console.log('按类别:');
        Object.entries(stats.byCategory).forEach(([cat, data]) => {
            const catName = window.CATEGORY_MAP ? window.CATEGORY_MAP[cat] : cat;
            console.log(`  ${catName}: ${data.total} 题 (L1: ${data.L1}, L2: ${data.L2})`);
        });
        console.log('==============================');
    }

    // 初始化：合并所有题库
    window.QUESTIONS = loadAllQuestions();

    // 导出工具函数
    window.QuestionLoader = {
        registerQuestionBank,
        addQuestions,
        getQuestionsByCategory,
        getQuestionsByLevel,
        getQuestionStats,
        printStats,
        reload: function() {
            window.QUESTIONS = loadAllQuestions();
            return window.QUESTIONS;
        }
    };

    // 打印统计信息（开发模式）
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        printStats();
    }

})();
