/**
 * 现代汉语虚词练习平台 - 测评报告生成器
 * 
 * 生成精细化学习测评报告，包括：
 * - 基础数据统计
 * - 虚词类别分析
 * - 薄弱点精准定位
 * - 个性化学习建议
 */

const ReportGenerator = {
    /**
     * 生成完整的测评报告
     * @param {Array} records - 答题记录数组
     * @returns {object} 测评报告对象
     */
    generate(records) {
        if (!records || records.length === 0) {
            return this._getEmptyReport();
        }

        const report = {
            // 生成时间
            generatedTime: this._formatDateTime(new Date()),
            
            // 基础统计
            ...this._calculateBasicStats(records),
            
            // 类别分析
            categoryAnalysis: this._analyzeCategoryPerformance(records),
            
            // 薄弱点定位
            weakPoints: this._identifyWeakPoints(records),
            
            // 学习建议
            suggestions: this._generateSuggestions(records)
        };

        return report;
    },

    /**
     * 计算基础统计数据
     * @private
     */
    _calculateBasicStats(records) {
        const totalCount = records.length;
        const correctCount = records.filter(r => r.isCorrect).length;
        
        // 按难度统计
        const basicRecords = records.filter(r => r.level === 'basic');
        const advancedRecords = records.filter(r => r.level === 'advanced');
        
        const basicCorrect = basicRecords.filter(r => r.isCorrect).length;
        const advancedCorrect = advancedRecords.filter(r => r.isCorrect).length;

        return {
            totalCount,
            correctCount,
            wrongCount: totalCount - correctCount,
            accuracy: this._calcPercent(correctCount, totalCount),
            basicCount: basicRecords.length,
            basicCorrect,
            basicAccuracy: this._calcPercent(basicCorrect, basicRecords.length),
            advancedCount: advancedRecords.length,
            advancedCorrect,
            advancedAccuracy: this._calcPercent(advancedCorrect, advancedRecords.length)
        };
    },

    /**
     * 分析各虚词类别的表现
     * @private
     */
    _analyzeCategoryPerformance(records) {
        const categories = ['preposition', 'particle', 'conjunction', 'modal'];
        const analysis = {};

        categories.forEach(category => {
            const categoryRecords = records.filter(r => r.category === category);
            const correct = categoryRecords.filter(r => r.isCorrect).length;
            const total = categoryRecords.length;
            
            analysis[category] = {
                total,
                correct,
                wrong: total - correct,
                accuracy: this._calcPercent(correct, total)
            };
        });

        return analysis;
    },

    /**
     * 识别薄弱点（按考点tag聚合）
     * @private
     */
    _identifyWeakPoints(records) {
        // 按tag聚合错误
        const tagStats = {};
        
        records.forEach(record => {
            const tag = record.tag;
            if (!tagStats[tag]) {
                tagStats[tag] = {
                    tag,
                    category: record.category,
                    totalCount: 0,
                    wrongCount: 0
                };
            }
            tagStats[tag].totalCount++;
            if (!record.isCorrect) {
                tagStats[tag].wrongCount++;
            }
        });

        // 筛选出薄弱点（错误率 > 40% 或 错误次数 >= 2）
        const weakPoints = Object.values(tagStats)
            .filter(stat => {
                const errorRate = (stat.wrongCount / stat.totalCount) * 100;
                return stat.wrongCount >= 1 && (errorRate >= 40 || stat.wrongCount >= 2);
            })
            .map(stat => ({
                ...stat,
                errorRate: Math.round((stat.wrongCount / stat.totalCount) * 100),
                description: this._getTagDescription(stat.tag)
            }))
            .sort((a, b) => b.errorRate - a.errorRate); // 按错误率降序

        return weakPoints;
    },

    /**
     * 生成学习建议
     * @private
     */
    _generateSuggestions(records) {
        const weakPoints = this._identifyWeakPoints(records);
        const suggestions = [];

        // 根据薄弱点生成建议
        weakPoints.forEach(point => {
            const suggestion = this._getSuggestionForTag(point.tag);
            if (suggestion && !suggestions.find(s => s.title === suggestion.title)) {
                suggestions.push(suggestion);
            }
        });

        // 如果没有明显薄弱点，给出通用建议
        if (suggestions.length === 0) {
            const stats = this._calculateBasicStats(records);
            if (stats.accuracy < 80) {
                suggestions.push({
                    title: '继续巩固虚词基础知识',
                    content: '建议系统复习虚词的基本分类和用法，通过大量例句加深理解。可以尝试整理错题本，分析错误原因。'
                });
            } else {
                suggestions.push({
                    title: '保持良好学习状态',
                    content: '您的虚词掌握情况良好！建议继续保持学习习惯，可以尝试更多进阶题目来进一步提升。'
                });
            }
        }

        // 根据类别分析补充建议
        const categoryAnalysis = this._analyzeCategoryPerformance(records);
        Object.entries(categoryAnalysis).forEach(([category, data]) => {
            if (data.total >= 2 && data.accuracy < 60) {
                const categoryName = this._getCategoryName(category);
                const existingSuggestion = suggestions.find(s => 
                    s.title.includes(categoryName)
                );
                if (!existingSuggestion) {
                    suggestions.push({
                        title: `重点加强${categoryName}学习`,
                        content: this._getCategorySuggestion(category)
                    });
                }
            }
        });

        return suggestions.slice(0, 5); // 最多返回5条建议
    },

    /**
     * 获取考点描述
     * @private
     */
    _getTagDescription(tag) {
        return window.TAG_DESCRIPTIONS && window.TAG_DESCRIPTIONS[tag] 
            ? window.TAG_DESCRIPTIONS[tag]
            : `"${tag}"相关知识点需要加强练习。`;
    },

    /**
     * 获取考点对应的学习建议
     * @private
     */
    _getSuggestionForTag(tag) {
        return window.STUDY_SUGGESTIONS && window.STUDY_SUGGESTIONS[tag]
            ? { ...window.STUDY_SUGGESTIONS[tag] }
            : null;
    },

    /**
     * 获取类别中文名
     * @private
     */
    _getCategoryName(category) {
        const map = {
            preposition: '介词',
            particle: '助词',
            conjunction: '连词',
            modal: '语气词'
        };
        return map[category] || category;
    },

    /**
     * 获取类别学习建议
     * @private
     */
    _getCategorySuggestion(category) {
        const suggestions = {
            preposition: '介词用于表示时间、处所、方向、对象等关系。建议重点学习常用介词"在、从、向、对、把、被"的用法差异，通过造句练习加深理解。',
            particle: '助词分为结构助词、动态助词和语气助词。建议重点掌握"的、地、得"的区分规则，以及"了、着、过"的时态表达功能。',
            conjunction: '连词用于连接词、短语或句子。建议系统学习关联词的搭配规则，区分表示并列、递进、转折、因果、条件等不同关系的关联词。',
            modal: '语气词表达说话人的态度和情感。建议通过朗读练习培养语感，注意"吗、呢、吧、啊"等语气词在不同语境中的使用。'
        };
        return suggestions[category] || '建议多做练习，加强对该类虚词的理解。';
    },

    /**
     * 计算百分比
     * @private
     */
    _calcPercent(part, total) {
        if (total === 0) return 0;
        return Math.round((part / total) * 100);
    },

    /**
     * 格式化日期时间
     * @private
     */
    _formatDateTime(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}年${month}月${day}日 ${hours}:${minutes}`;
    },

    /**
     * 返回空报告
     * @private
     */
    _getEmptyReport() {
        return {
            generatedTime: this._formatDateTime(new Date()),
            totalCount: 0,
            correctCount: 0,
            wrongCount: 0,
            accuracy: 0,
            basicCount: 0,
            basicCorrect: 0,
            basicAccuracy: 0,
            advancedCount: 0,
            advancedCorrect: 0,
            advancedAccuracy: 0,
            categoryAnalysis: {
                preposition: { total: 0, correct: 0, wrong: 0, accuracy: 0 },
                particle: { total: 0, correct: 0, wrong: 0, accuracy: 0 },
                conjunction: { total: 0, correct: 0, wrong: 0, accuracy: 0 },
                modal: { total: 0, correct: 0, wrong: 0, accuracy: 0 }
            },
            weakPoints: [],
            suggestions: [{
                title: '开始练习',
                content: '您还没有答题记录，请先完成一些练习题目。'
            }]
        };
    },

    /**
     * 导出报告为文本格式（用于保存/打印）
     * @param {object} report - 报告对象
     * @returns {string} 文本格式的报告
     */
    exportToText(report) {
        let text = '';
        text += '═══════════════════════════════════════\n';
        text += '        现代汉语虚词学习测评报告\n';
        text += '═══════════════════════════════════════\n\n';
        text += `生成时间：${report.generatedTime}\n\n`;

        // 基础数据
        text += '【基础数据】\n';
        text += `总答题数：${report.totalCount} 题\n`;
        text += `总正确率：${report.accuracy}%\n`;
        text += `基础题：${report.basicCorrect}/${report.basicCount} 正确（${report.basicAccuracy}%）\n`;
        text += `进阶题：${report.advancedCorrect}/${report.advancedCount} 正确（${report.advancedAccuracy}%）\n\n`;

        // 类别分析
        text += '【虚词类别分析】\n';
        const categoryNames = { preposition: '介词', particle: '助词', conjunction: '连词', modal: '语气词' };
        Object.entries(report.categoryAnalysis).forEach(([cat, data]) => {
            if (data.total > 0) {
                text += `${categoryNames[cat]}：${data.correct}/${data.total} 正确（${data.accuracy}%）\n`;
            }
        });
        text += '\n';

        // 薄弱点
        text += '【薄弱点定位】\n';
        if (report.weakPoints.length === 0) {
            text += '恭喜！本次练习未发现明显薄弱点。\n';
        } else {
            report.weakPoints.forEach((point, index) => {
                text += `${index + 1}. ${this._getCategoryName(point.category)} - ${point.tag}\n`;
                text += `   错误 ${point.wrongCount}/${point.totalCount} 题（错误率 ${point.errorRate}%）\n`;
                text += `   ${point.description}\n\n`;
            });
        }

        // 学习建议
        text += '【学习建议】\n';
        report.suggestions.forEach((sug, index) => {
            text += `${index + 1}. ${sug.title}\n`;
            text += `   ${sug.content}\n\n`;
        });

        text += '═══════════════════════════════════════\n';
        return text;
    }
};

// 导出
window.ReportGenerator = ReportGenerator;
