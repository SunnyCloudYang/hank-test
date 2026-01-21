/**
 * 现代汉语虚词练习平台 - 题库加载器
 * 
 * 本文件负责：
 * 1. 合并各类别的题库数据
 * 2. 生成全局配置映射
 * 3. 提供题库管理 API
 * 
 * 扩展新类别步骤：
 * 1. 在 js/question-config.js 中添加类别配置和考点描述
 * 2. 创建 js/data/[category].js 题库文件
 * 3. 在 index.html 中引入新的题库文件
 * 4. 在下方 QUESTION_BANKS 数组中注册新题库
 */

// ========== 题库注册表 ==========
// 添加新类别时，在此数组中注册对应的题库变量名
const QUESTION_BANKS = [
    'PREPOSITION_QUESTIONS',  // 介词
    'PARTICLE_QUESTIONS',      // 助词
    'CONJUNCTION_QUESTIONS',   // 连词
    'MODAL_QUESTIONS'          // 语气词
    // 添加新类别示例：
    // 'ADVERB_QUESTIONS',     // 副词（如果将来添加）
];

/**
 * 合并所有题库
 * @returns {Array} 合并后的题目数组
 */
function loadAllQuestions() {
    const allQuestions = [];

    QUESTION_BANKS.forEach(bankName => {
        const bank = window[bankName];
        if (bank && Array.isArray(bank)) {
            allQuestions.push(...bank);
        } else {
            console.warn(`题库 ${bankName} 未找到或格式不正确`);
        }
    });

    // 验证题目数据完整性
    const validQuestions = allQuestions.filter(q => {
        const isValid = q.id && q.type && q.level && q.category && q.tag && q.stem && q.answer;
        if (!isValid) {
            console.warn('无效题目数据:', q);
        }
        return isValid;
    });

    console.log(`题库加载完成: 共 ${validQuestions.length} 道题目`);
    return validQuestions;
}

/**
 * 获取题库统计信息
 * @param {Array} questions - 题目数组
 * @returns {Object} 统计信息
 */
function getQuestionStats(questions) {
    const stats = {
        total: questions.length,
        byCategory: {},
        byLevel: { L1: 0, L2: 0 },
        byType: { single: 0, multiple: 0, judgment: 0 }
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
 * 按类别筛选题目
 * @param {Array} questions - 题目数组
 * @param {string} category - 类别ID
 * @returns {Array} 筛选后的题目
 */
function filterByCategory(questions, category) {
    return questions.filter(q => q.category === category);
}

/**
 * 按难度筛选题目
 * @param {Array} questions - 题目数组
 * @param {string} level - 难度级别
 * @returns {Array} 筛选后的题目
 */
function filterByLevel(questions, level) {
    return questions.filter(q => q.level === level);
}

/**
 * 按考点标签筛选题目
 * @param {Array} questions - 题目数组
 * @param {string} tag - 考点标签
 * @returns {Array} 筛选后的题目
 */
function filterByTag(questions, tag) {
    return questions.filter(q => q.tag === tag);
}

// ========== 初始化 ==========

// 等待所有题库脚本加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 合并所有题库
    const QUESTIONS = loadAllQuestions();

    // 从 question-config.js 获取配置映射
    const CATEGORY_MAP = typeof getCategoryMap === 'function' ? getCategoryMap() : {};
    const TAG_DESCRIPTIONS = typeof getTagDescriptions === 'function' ? getTagDescriptions() : {};
    const STUDY_SUGGESTIONS = typeof getStudySuggestions === 'function' ? getStudySuggestions() : {};

    // 导出全局变量
    window.QUESTIONS = QUESTIONS;
    window.CATEGORY_MAP = CATEGORY_MAP;
    window.TAG_DESCRIPTIONS = TAG_DESCRIPTIONS;
    window.STUDY_SUGGESTIONS = STUDY_SUGGESTIONS;

    // 导出工具函数
    window.getQuestionStats = getQuestionStats;
    window.filterByCategory = filterByCategory;
    window.filterByLevel = filterByLevel;
    window.filterByTag = filterByTag;

    // 输出统计信息（开发调试用）
    if (console && console.table) {
        const stats = getQuestionStats(QUESTIONS);
        console.log('题库统计:');
        console.table(stats.byCategory);
    }
});

// 为了向后兼容，也在脚本加载时立即尝试初始化
(function immediateInit() {
    // 检查依赖是否已加载
    if (typeof getCategoryMap !== 'function') {
        return; // 等待 DOMContentLoaded
    }

    const QUESTIONS = loadAllQuestions();
    const CATEGORY_MAP = getCategoryMap();
    const TAG_DESCRIPTIONS = getTagDescriptions();
    const STUDY_SUGGESTIONS = getStudySuggestions();

    window.QUESTIONS = QUESTIONS;
    window.CATEGORY_MAP = CATEGORY_MAP;
    window.TAG_DESCRIPTIONS = TAG_DESCRIPTIONS;
    window.STUDY_SUGGESTIONS = STUDY_SUGGESTIONS;
})();
