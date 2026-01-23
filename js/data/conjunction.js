/**
 * 连词题库
 * 
 * 题目数据格式：
 * - id: 唯一标识符（建议格式：conjunction_L1_001 或 conjunction_L2_001）
 * - type: 题目类型 (single=单选, multiple=多选, judgment=判断)
 * - level: 难度级别 (L1=基础, L2=进阶)
 * - category: 固定为 'conjunction'
 * - tag: 考点标签（需要在 question-config.js 中注册）
 * - stem: 题干
 * - options: 选项数组 (判断题可省略)
 * - answer: 正确答案数组
 * - analysis: 解析说明
 * - fixed: 可选，设为 true 表示该题为固定题目，将在每次练习开始时优先展示
 * 
 * 固定题目示例：
 * {
 *     id: 'conjunction_L1_001',
 *     type: 'single',
 *     level: 'L1',
 *     category: 'conjunction',
 *     tag: '连词/词类识别',
 *     stem: '...',
 *     options: [...],
 *     answer: ['A'],
 *     analysis: '...',
 *     fixed: true  // 标记为固定题目
 * }
 */

const CONJUNCTION_QUESTIONS = [
    {
        id: 'conjunction_L1_001',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列词语中，属于连词的是（ ）',
        options: [
            { key: 'A', text: '因为' },
            { key: 'B', text: '已经' },
            { key: 'C', text: '正在' },
            { key: 'D', text: '非常' }
        ],
        answer: ['A'],
        analysis: '“因为”起连接作用，表示原因，是连词。',
        fixed: true
    },

    {
        id: 'conjunction_L1_002',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列句子中，划线词是连词的是（ ）',
        options: [
            { key: 'A', text: '他因为生病请了假' },
            { key: 'B', text: '他正在写作业' },
            { key: 'C', text: '他已经回家了' },
            { key: 'D', text: '他非常认真' }
        ],
        answer: ['A'],
        analysis: '“因为”连接原因和结果，是连词。'
    },

    {
        id: 'conjunction_L1_003',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '句子“我想去，但是时间不够”中，“但是”表示（ ）',
        options: [
            { key: 'A', text: '并列关系' },
            { key: 'B', text: '选择关系' },
            { key: 'C', text: '转折关系' },
            { key: 'D', text: '因果关系' }
        ],
        answer: ['C'],
        analysis: '“但是”表示前后意思相反或相对，表转折。'
    },

    {
        id: 'conjunction_L1_004',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“他努力学习，所以成绩很好”中，“所以”表示（ ）',
        options: [
            { key: 'A', text: '并列' },
            { key: 'B', text: '因果' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '条件' }
        ],
        answer: ['B'],
        analysis: '“所以”引出结果，表示因果关系。'
    },

    {
        id: 'conjunction_L1_005',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列词语中，只能作连词的是（ ）',
        options: [
            { key: 'A', text: '但是' },
            { key: 'B', text: '在' },
            { key: 'C', text: '给' },
            { key: 'D', text: '往' }
        ],
        answer: ['A'],
        analysis: '“但是”只能作连词，其余词语可兼作其他词类。'
    },

    {
        id: 'conjunction_L1_006',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '下列句子中，“和”用作连词的是（ ）',
        options: [
            { key: 'A', text: '我和小明是同学' },
            { key: 'B', text: '他和我商量这件事' },
            { key: 'C', text: '他和我对答案' },
            { key: 'D', text: '他和过老师打招呼' }
        ],
        answer: ['A'],
        analysis: 'A 中“和”连接两个名词，表示并列，是连词'
    },

    {
        id: 'conjunction_L1_007',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词的主要作用是连接词、短语或句子。',
        options: [],
        answer: ['T'],
        analysis: '连词的核心功能就是连接语言单位，表示逻辑关系。'
    },
    {
        id: 'conjunction_L1_008',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词本身可以单独作句子的谓语。',
        options: [],
        answer: ['F'],
        analysis: '连词不能独立作谓语，只起连接作用。'
    },
    {
        id: 'conjunction_L1_009',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“或者”主要表示（ ）关系',
        options: [
            { key: 'A', text: '并列' },
            { key: 'B', text: '选择' },
            { key: 'C', text: '因果' },
            { key: 'D', text: '转折' }
        ],
        answer: ['B'],
        analysis: '“或者”用于表示选择关系。'
    },

    {
        id: 'conjunction_L1_010',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“虽然下雨，但是我们还是出发了”中，“虽然……但是……”表示（ ）',
        options: [
            { key: 'A', text: '并列关系' },
            { key: 'B', text: '因果关系' },
            { key: 'C', text: '转折让步关系' },
            { key: 'D', text: '选择关系' }
        ],
        answer: ['C'],
        analysis: '“虽然……但是……”是典型的让步转折结构。'
    },
    {
        id: 'conjunction_L1_011',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列句子中，“而且”用作连词的是（ ）',
        options: [
            { key: 'A', text: '他而且很努力' },
            { key: 'B', text: '他聪明而且勤奋' },
            { key: 'C', text: '而且，他来了' },
            { key: 'D', text: '他学习而且吃饭' }
        ],
        answer: ['B'],
        analysis: '“而且”连接两个形容词性成分，表示递进，是连词。'
    },

    {
        id: 'conjunction_L1_012',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“他不但会英语，而且会法语”中，“而且”表示（ ）',
        options: [
            { key: 'A', text: '并列' },
            { key: 'B', text: '递进' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '因果' }
        ],
        answer: ['B'],
        analysis: '“不但……而且……”表示在原有基础上更进一步。'
    },
    {
        id: 'conjunction_L1_013',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词一般放在被连接的成分之间。',
        options: [],
        answer: ['T'],
        analysis: '连词通常位于连接对象之间，如词、短语或分句之间。'
    },

    {
        id: 'conjunction_L1_014',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列词语中，不是连词的是（ ）',
        options: [
            { key: 'A', text: '但是' },
            { key: 'B', text: '因为' },
            { key: 'C', text: '如果' },
            { key: 'D', text: '已经' }
        ],
        answer: ['D'],
        analysis: '“已经”是副词，不是连词。'
    },

    {
        id: 'conjunction_L1_015',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“如果下雨，我们就不去了”中，“如果”表示（ ）',
        options: [
            { key: 'A', text: '因果' },
            { key: 'B', text: '假设' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '并列' }
        ],
        answer: ['B'],
        analysis: '“如果”引出假设条件。'
    },
    {
        id: 'conjunction_L1_016',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词一般不和动态助词"了、着、过"搭配。',
        options: [],
        answer: ['T'],
        analysis: '连词不表示动作，不具备带动态助词的能力。'
    },

    {
        id: 'conjunction_L1_017',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“他很想来，可是没时间”中，“可是”表示（ ）',
        options: [
            { key: 'A', text: '并列' },
            { key: 'B', text: '转折' },
            { key: 'C', text: '选择' },
            { key: 'D', text: '条件' }
        ],
        answer: ['B'],
        analysis: '“可是”表示前后意思相对，属转折关系。'
    },
    {
        id: 'conjunction_L1_018',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列句子中，“和”作连词的是（ ）',
        options: [
            { key: 'A', text: '我和他一起去' },
            { key: 'B', text: '他和我商量问题' },
            { key: 'C', text: '他在和弟弟聊天' },
            { key: 'D', text: '他和爸爸一样高了' }
        ],
        answer: ['A'],
        analysis: '“和”连接两个名词性成分，表示并列。'
    },

    {
        id: 'conjunction_L1_019',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词本身一般不充当句子成分。',
        options: [],
        answer: ['T'],
        analysis: '连词只起连接作用，不作主语、谓语、宾语等。'
    },
    {
        id: 'conjunction_L1_020',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“不是你，就是我去”中，“不是……就是……”表示（ ）',
        options: [
            { key: 'A', text: '并列' },
            { key: 'B', text: '选择' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '因果' }
        ],
        answer: ['B'],
        analysis: '“不是……就是……”表示二选一的选择关系。'
    },
    {
        id: 'conjunction_L1_021',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列词语中，属于连词的是（ ）',
        options: [
            { key: 'A', text: '然而' },
            { key: 'B', text: '正在' },
            { key: 'C', text: '已经' },
            { key: 'D', text: '非常' }
        ],
        answer: ['A'],
        analysis: '“然而”表示转折，是书面语常用连词。'
    },
    {
        id: 'conjunction_L1_022',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '"因为……所以……"是一种常见的因果连词结构。',
        options: [],
        answer: ['T'],
        analysis: '“因为”引出原因，“所以”引出结果。'
    },
    {
        id: 'conjunction_L1_023',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“他既聪明又努力”中，“既……又……”表示（ ）',
        options: [
            { key: 'A', text: '选择' },
            { key: 'B', text: '并列' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '因果' }
        ],
        answer: ['B'],
        analysis: '“既……又……”表示并列关系。'
    },
    {
        id: 'conjunction_L1_024',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列哪一项不是连词的基本特点？（ ）',
        options: [
            { key: 'A', text: '表示语义关系' },
            { key: 'B', text: '起连接作用' },
            { key: 'C', text: '可以单独作谓语' },
            { key: 'D', text: '连接词或句子' }
        ],
        answer: ['C'],
        analysis: '连词不能单独作谓语。'
    },
    {
        id: 'conjunction_L1_025',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '"但是""可是""不过"都可以表示转折关系。',
        options: [],
        answer: ['T'],
        analysis: '这三者都属于转折连词，只是语体和语气不同。'
    },
    {
        id: 'conjunction_L1_026',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“不管刮风下雨，他都来”中，“不管”表示（ ）',
        options: [
            { key: 'A', text: '因果' },
            { key: 'B', text: '条件' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '并列' }
        ],
        answer: ['B'],
        analysis: '“不管”引出条件，表示在任何条件下结果不变。'
    },
    {
        id: 'conjunction_L1_027',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词通常不修饰动词或形容词。',
        options: [],
        answer: ['T'],
        analysis: '修饰功能主要由副词承担，连词只连接。'
    },
    {
        id: 'conjunction_L1_028',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/作用辨析',
        stem: '“除非下雨，否则比赛照常进行”中，“除非……否则……”表示（ ）',
        options: [
            { key: 'A', text: '选择' },
            { key: 'B', text: '条件' },
            { key: 'C', text: '并列' },
            { key: 'D', text: '转折' }
        ],
        answer: ['B'],
        analysis: '“除非……否则……”表示必要条件关系。'
    },
    {
        id: 'conjunction_L1_029',
        type: 'single',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/词类识别',
        stem: '下列句子中，划线词不是连词的是（ ）',
        options: [
            { key: 'A', text: '他想去，但是没时间' },
            { key: 'B', text: '如果下雨，我们就不去' },
            { key: 'C', text: '他也在写作业' },
            { key: 'D', text: '他迟到，因为下雨' }
        ],
        answer: ['C'],
        analysis: '“也”是副词，作状语，不是连词。'
    },
    {
        id: 'conjunction_L1_030',
        type: 'judgment',
        level: 'L1',
        category: 'conjunction',
        tag: '连词/特征',
        stem: '连词主要用于表达句子之间或成分之间的逻辑关系。',
        options: [],
        answer: ['T'],
        analysis: '这是连词最核心的功能。'
    },
    // 进阶题
    {
        id: 'conjunction_L2_001',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“而且”的是（ ）',
        options: [
            { key: 'A', text: '他生病了，___没来上课' },
            { key: 'B', text: '他聪明___努力' },
            { key: 'C', text: '天气不好，___我们出发了' },
            { key: 'D', text: '他迟到了，___被批评了' }
        ],
        answer: ['B'],
        analysis: '“而且”用于递进，连接性质相近的成分，如“聪明—努力”。'
    },
    {
        id: 'conjunction_L2_002',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“但是”的是（ ）',
        options: [
            { key: 'A', text: '他不但会英语，___会法语' },
            { key: 'B', text: '天气很冷，___他还是出门了' },
            { key: 'C', text: '他一边吃饭，___看书' },
            { key: 'D', text: '他因为生病，___没请假' }
        ],
        answer: ['B'],
        analysis: '“但是”表示转折，对前一情况进行反向补充。'
    },

    {
        id: 'conjunction_L2_003',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“或者”的是（ ）',
        options: [
            { key: 'A', text: '他不是老师，___学生' },
            { key: 'B', text: '或者你去，___我去' },
            { key: 'C', text: '他虽然累，___坚持完成任务' },
            { key: 'D', text: '他既聪明，___努力' }
        ],
        answer: ['B'],
        analysis: '“或者”表示选择关系，二者可并存。'
    },

    {
        id: 'conjunction_L2_004',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“还是”的是（ ）',
        options: [
            { key: 'A', text: '这件事你___我来做？' },
            { key: 'B', text: '你喝茶___喝咖啡？' },
            { key: 'C', text: '他不是来晚了，___忘了时间' },
            { key: 'D', text: '今天下雨，___我们不去了' }
        ],
        answer: ['B'],
        analysis: '“还是”常用于疑问句中表示选择；A应为：这件事是你来，还是我来做；D的还是应给做副词，放在不去之前'
    },

    {
        id: 'conjunction_L2_005',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，表示递进关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '他不但会英语，而且会法语' },
            { key: 'B', text: '他很努力，但是成绩一般' },
            { key: 'C', text: '天气冷，并且下雨了' },
            { key: 'D', text: '不是你，就是我去' }
        ],
        answer: ['A', 'C'],
        analysis: '“不但……而且”“并且”都表示递进；B 为转折，D 为选择。'
    },

    {
        id: 'conjunction_L2_006',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“因为”的是（ ）',
        options: [
            { key: 'A', text: '___天气不好，比赛取消了' },
            { key: 'B', text: '___学习很努力，他取得了好成绩' },
            { key: 'C', text: '___完成任务，他加班到深夜' },
            { key: 'D', text: '___下雨，所以路很滑' }
        ],
        answer: ['A', 'B', 'D'],
        analysis: '“因为”引出原因，A B D符合因果关系。C 应用为了，表目的'
    },

    {
        id: 'conjunction_L2_007',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“所以”的是（ ）',
        options: [
            { key: 'A', text: '他努力学习，___成绩提高了' },
            { key: 'B', text: '___他努力学习，成绩提高了' },
            { key: 'C', text: '他努力学习，___不想放弃' },
            { key: 'D', text: '他努力学习，___失败了' }
        ],
        answer: ['A'],
        analysis: '“所以”引出结果，通常位于原因之后。'
    },

    {
        id: 'conjunction_L2_008',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列连词中，可用于转折关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '但是' },
            { key: 'B', text: '不过' },
            { key: 'C', text: '而且' },
            { key: 'D', text: '却' }
        ],
        answer: ['A', 'B', 'D'],
        analysis: '“但是、不过、却”均表示转折；“而且”表示递进。'
    },

    {
        id: 'conjunction_L2_009',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“尽管天气不好，他还是出门了”中，“尽管”表示（ ）',
        options: [
            { key: 'A', text: '条件' },
            { key: 'B', text: '让步' },
            { key: 'C', text: '因果' },
            { key: 'D', text: '选择' }
        ],
        answer: ['B'],
        analysis: '“尽管”用于让步复句，先承认事实，再转折。'
    },

    {
        id: 'conjunction_L2_010',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“不管”的是（ ）',
        options: [
            { key: 'A', text: '___你同意不同意，我们都要做' },
            { key: 'B', text: '___他生病了，所以没来' },
            { key: 'C', text: '___努力学习，他通过了考试' },
            { key: 'D', text: '___天气好，我们就出发' }
        ],
        answer: ['A'],
        analysis: '“不管”引出条件，表示在任何情况下结果不变。'
    },

    {
        id: 'conjunction_L2_011',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“只有……才……”的是（ ）',
        options: [
            { key: 'A', text: '___努力学习，___能取得好成绩' },
            { key: 'B', text: '___他努力学习，成绩___提高了' },
            { key: 'C', text: '___下雨，___比赛取消' },
            { key: 'D', text: '___他来了，___我们开始' }
        ],
        answer: ['A'],
        analysis: '“只有……才……”表示必要条件。BCD都可以表条件，但副词才的位置错误'
    },

    {
        id: 'conjunction_L2_012',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，表示选择关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '你喝茶还是喝咖啡' },
            { key: 'B', text: '不是你，就是我去' },
            { key: 'C', text: '他既聪明又努力' },
            { key: 'D', text: '或者今天，或者明天出发' }
        ],
        answer: ['A', 'B', 'D'],
        analysis: 'A、B、D 均表示选择；C 表示并列。'
    },

    {
        id: 'conjunction_L2_013',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“而是”的是（ ）',
        options: [
            { key: 'A', text: '他不是生气，___担心' },
            { key: 'B', text: '他努力学习，___成绩不好' },
            { key: 'C', text: '他一边吃饭，___一边看书' },
            { key: 'D', text: '他既聪明，___努力' }
        ],
        answer: ['A'],
        analysis: '“不是……而是……”表示否定前者、肯定后者的对比关系。'
    },

    {
        id: 'conjunction_L2_014',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他没生气，反而笑了”中，“反而”表示（ ）',
        options: [
            { key: 'A', text: '递进' },
            { key: 'B', text: '转折' },
            { key: 'C', text: '因果' },
            { key: 'D', text: '并列' }
        ],
        answer: ['B'],
        analysis: '“反而”表示与预期相反的转折。'
    },

    {
        id: 'conjunction_L2_015',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列连词中，可用于条件关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '如果' },
            { key: 'B', text: '不管' },
            { key: 'C', text: '但是' },
            { key: 'D', text: '除非' }
        ],
        answer: ['A', 'B', 'D'],
        analysis: '“如果、不管、除非”均可引出条件；“但是”表转折。'
    },

    {
        id: 'conjunction_L2_016',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他努力学习，因此取得了好成绩”中，“因此”表示（ ）',
        options: [
            { key: 'A', text: '条件' },
            { key: 'B', text: '因果' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '并列' }
        ],
        answer: ['B'],
        analysis: '“因此”引出结果，表示因果关系。'
    },

    {
        id: 'conjunction_L2_017',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“况且”的是（ ）',
        options: [
            { key: 'A', text: '他工作能力很强，___态度也很认真' },
            { key: 'B', text: '路不远，___还有直达车' },
            { key: 'C', text: '他基础扎实，___学习方法也很科学' },
            { key: 'D', text: '他迟到了，___被批评了' }
        ],
        answer: ['B'],
        analysis: '“况且”用于补充次要理由。'
    },

    {
        id: 'conjunction_L2_018',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，表示转折和让步关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '虽然下雨，他还是来了' },
            { key: 'B', text: '尽管很累，他仍然坚持' },
            { key: 'C', text: '因为下雨，所以没来' },
            { key: 'D', text: '他很努力，而且很认真' }
        ],
        answer: ['A', 'B'],
        analysis: 'A、B 为让步；C 为因果；D 为递进。'
    },

    {
        id: 'conjunction_L2_019',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“要不是你提醒，我就忘了”中，“要不是”表示（ ）',
        options: [
            { key: 'A', text: '因果' },
            { key: 'B', text: '假设' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '并列' }
        ],
        answer: ['B'],
        analysis: '“要不是”表示与事实相反的假设。这里可以和如果替换'
    },
    {
        id: 'conjunction_L2_20',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“并且”的是（ ）',
        options: [
            { key: 'A', text: '他工作能力很强，___对同事也十分负责' },
            { key: 'B', text: '房间已经收拾好了，___还准备了晚饭' },
            { key: 'C', text: '他运动天赋突出, ____ 身体素质也很好' },
            { key: 'D', text: '他生病住院，___没来参加会议' }
        ],
        answer: ['B'],
        analysis: '“并且”用于在前一事实基础上补充说明另一事实，侧重“补充而非强化”。B 中“收拾好了房间”是已完成事实，“还准备了晚饭”是额外补充，最符合“并且”的功能；A 属递进强化，更偏“而且”；D 表因果，应使用“所以/因此”。'
    },
    {
        id: 'conjunction_L2_021',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他之所以迟到，是因为下雨”中，整体表示（ ）',
        options: [
            { key: 'A', text: '转折' },
            { key: 'B', text: '因果' },
            { key: 'C', text: '条件' },
            { key: 'D', text: '选择' }
        ],
        answer: ['B'],
        analysis: '“之所以……是因为……”是典型因果结构。'
    },

    {
        id: 'conjunction_L2_022',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列连词中，常用于书面语的是（多选）（ ）',
        options: [
            { key: 'A', text: '然而' },
            { key: 'B', text: '况且' },
            { key: 'C', text: '不过' },
            { key: 'D', text: '可是' }
        ],
        answer: ['A', 'B'],
        analysis: '“然而、况且”多用于书面语；“不过、可是”偏口语。'
    },

    {
        id: 'conjunction_L2_023',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他不但没生气，反而笑了”中，后半句的功能是（ ）',
        options: [
            { key: 'A', text: '递进' },
            { key: 'B', text: '转折' },
            { key: 'C', text: '并列' },
            { key: 'D', text: '条件' }
        ],
        answer: ['B'],
        analysis: '“反而”强调与预期相反的转折。'
    },

    {
        id: 'conjunction_L2_024',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“要是”的是（ ）',
        options: [
            { key: 'A', text: '___明天再下雨，这项工程就只能延期了' },
            { key: 'B', text: '___连续降雨，道路出现了积水现象' },
            { key: 'C', text: '___他平时努力学习，这次考试成绩不错' },
            { key: 'D', text: '___没有他当初的坚持，这个件事肯定没办法完成 ' }
        ],
        answer: ['A', 'D'],
        analysis: 'A D表为对未来或过去情况的假设，符合“要是”的假设用法；B、C 为已然原因关系，应使用“由于 / 因为”'
    },
    {
        id: 'conjunction_L2_025',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，表示因果关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '因为下雨，所以没来' },
            { key: 'B', text: '之所以失败，是因为准备不足' },
            { key: 'C', text: '虽然下雨，他还是来了' },
            { key: 'D', text: '要是下雨，我们就不去' }
        ],
        answer: ['A', 'B'],
        analysis: 'A、B 为因果；C 为让步；D 为假设。'
    },
    {
        id: 'conjunction_L2_026',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他不是来晚了，而是记错了时间”中，后半句的功能是（ ）',
        options: [
            { key: 'A', text: '递进' },
            { key: 'B', text: '否定' },
            { key: 'C', text: '肯定对比项' },
            { key: 'D', text: '选择' }
        ],
        answer: ['C'],
        analysis: '“不是……而是……”先否定前项，再肯定后项。'
    },

    {
        id: 'conjunction_L2_027',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“无论谁来，我都欢迎”中，“无论”表示（ ）',
        options: [
            { key: 'A', text: '假设' },
            { key: 'B', text: '条件' },
            { key: 'C', text: '让步' },
            { key: 'D', text: '因果' }
        ],
        answer: ['B'],
        analysis: '“无论”引出条件，表示在任何条件下结果不变。'
    },

    {
        id: 'conjunction_L2_028',
        type: 'multiple',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列连词中，可用于假设关系的是（多选）（ ）',
        options: [
            { key: 'A', text: '如果' },
            { key: 'B', text: '要是' },
            { key: 'C', text: '然而' },
            { key: 'D', text: '若' }
        ],
        answer: ['A', 'B', 'D'],
        analysis: '“如果、要是、若”均表示假设。'
    },

    {
        id: 'conjunction_L2_029',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '“他努力学习，结果没拿到好成绩，可能是学习方法的问题。”，其中“结果”表示（ ）',
        options: [
            { key: 'A', text: '递进' },
            { key: 'B', text: '因果' },
            { key: 'C', text: '转折' },
            { key: 'D', text: '条件' }
        ],
        answer: ['C'],
        analysis: '“结果”引出行为产生的结果，属于因果关系。'
    },

    {
        id: 'conjunction_L2_030',
        type: 'single',
        level: 'L2',
        category: 'conjunction',
        tag: '连词/功能对比',
        stem: '下列句子中，应使用“反而”的是（ ）',
        options: [
            { key: 'A', text: '他努力学习，___成绩提高了' },
            { key: 'B', text: '他没生气，___笑了起来' },
            { key: 'C', text: '他提前做了充分的准备，___事情进行得很顺利' },
            { key: 'D', text: '他下雨了，___没来' }
        ],
        answer: ['B'],
        analysis: '“反而”用于强调结果与预期相反。'
    }
];

// 注册到题库
window.CONJUNCTION_QUESTIONS = CONJUNCTION_QUESTIONS;
