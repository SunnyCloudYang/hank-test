/**
 * 助词题库
 * 
 * 题目数据格式：
 * - id: 唯一标识符（建议格式：particle_L1_001 或 particle_L2_001）
 * - type: 题目类型 (single=单选, multiple=多选, judgment=判断)
 * - level: 难度级别 (L1=基础, L2=进阶)
 * - category: 固定为 'particle'
 * - tag: 考点标签（需要在 question-config.js 中注册）
 * - stem: 题干
 * - options: 选项数组 (判断题可省略)
 * - answer: 正确答案数组
 * - analysis: 解析说明
 */

const PARTICLE_QUESTIONS = [
    {
        id: 'particle_L1_001',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“他刚才和我说会议已经结束了”中，“了”的词类是（ ）',
        options: [
            { key: 'A', text: '结构助词' },
            { key: 'B', text: '动态助词' },
            { key: 'C', text: '副词' },
            { key: 'D', text: '语气词' }
        ],
        answer: ['B'],
        analysis: '“了”附着在动词“结束”后，表示动作实现，是动态助词。',
 
    },

    {
        id: 'particle_L1_003',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '句子“她把材料整理得很清楚”中，“得”的作用是（ ）',
        options: [
            { key: 'A', text: '引出定语' },
            { key: 'B', text: '标记状语' },
            { key: 'C', text: '引出补语' },
            { key: 'D', text: '表示完成' }
        ],
        answer: ['C'],
        analysis: '“得”引出对动作结果的补充说明，是补语标记。'
    },

    {
        id: 'particle_L1_004',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“着”表示状态持续的是（ ）',
        options: [
            { key: 'A', text: '孩子们唱着歌走进教室' },
            { key: 'B', text: '教室的灯还亮着' },
            { key: 'C', text: '他弯着腰搬箱子' },
            { key: 'D', text: '她沿着河边散步' }
        ],
        answer: ['B'],
        analysis: 'B 中“亮着” 形容词+着，表状态持续；A、C为动作的持续；D 沿着为介词，并非动态助词',
    },

    {
        id: 'particle_L1_005',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '句子“我以前看过这部纪录片”中，“过”表示（ ）',
        options: [
            { key: 'A', text: '动作完成' },
            { key: 'B', text: '状态变化' },
            { key: 'C', text: '过去经历' },
            { key: 'D', text: '持续进行' }
        ],
        answer: ['C'],
        analysis: '“过”强调曾经发生的经历，不关注是否影响现在。',
    },

    {
        id: 'particle_L1_006',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '下列关于助词的说法，正确的是（ ）',
        options: [
            { key: 'A', text: '助词可以单独充当谓语' },
            { key: 'B', text: '助词具有完整词汇意义' },
            { key: 'C', text: '助词必须依附其他成分使用' },
            { key: 'D', text: '助词可以自由重叠' }
        ],
        answer: ['C'],
        analysis: '助词无词汇意义，不能独立成句，必须依附使用。',
        fixed: true 
    },

    {
        id: 'particle_L1_007',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“学生们认真地完成了作业”中，“地”的词类是（ ）',
        options: [
            { key: 'A', text: '动态助词' },
            { key: 'B', text: '结构助词' },
            { key: 'C', text: '副词' },
            { key: 'D', text: '语气词' }
        ],
        answer: ['B'],
        analysis: '“地”附着在状语后，标记状语与动词的关系，是结构助词。'
    },

    {
        id: 'particle_L1_008',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“了”表示状态变化的是（ ）',
        options: [
            { key: 'A', text: '他已经看了那份报告' },
            { key: 'B', text: '天气突然冷了' },
            { key: 'C', text: '她吃了午饭再出门' },
            { key: 'D', text: '等他到了再说' }
        ],
        answer: ['B'],
        analysis: 'B 中“了”标记性状变化，不是单纯动作完成。'
    },

    {
        id: 'particle_L1_009',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“着”表示动作方式的是（ ）',
        options: [
            { key: 'A', text: '窗外亮着灯' },
            { key: 'B', text: '他低着头思考问题' },
            { key: 'C', text: '公告一直贴着' },
            { key: 'D', text: '墙上挂着照片' }
        ],
        answer: ['B'],
        analysis: '“低着头”说明思考时的方式和姿态。'
    },

    {
        id: 'particle_L1_010',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '下列哪一项不是动态助词的共同特征？（ ）',
        options: [
            { key: 'A', text: '表示动作或状态的体貌' },
            { key: 'B', text: '附着在动词或形容词后' },
            { key: 'C', text: '改变句子结构关系 ' },
            { key: 'D', text: '不表示具体时间' }
        ],
        answer: ['C'],
        analysis: '改变句子结构特征的是结构助词 ',
        fixed: true 
    },


    {
        id: 'particle_L1_012',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '句子“她昨天到的上海”中，“的”的作用是（ ）',
        options: [
            { key: 'A', text: '定语标记' },
            { key: 'B', text: '补语标记' },
            { key: 'C', text: '时间强调' },
            { key: 'D', text: '语气缓和' }
        ],
        answer: ['C'],
        analysis: '这里的“的”强调动作发生的时间，并非结构助词。'
    },

    {
        id: 'particle_L1_013',
        type: 'multiple',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“过”不能替换为“了”的是（ ）',
        options: [
            { key: 'A', text: '我已经看过那本书了' },
            { key: 'B', text: '这种情况以前发生过' },
            { key: 'C', text: '他刚刚吃过午饭' },
            { key: 'D', text: '我曾经去过意大利' }
        ],
        answer: ['B', 'D'],
        analysis: 'B 强调“经历”，不能用“了”替换。'
    },

    {
        id: 'particle_L1_014',
        type: 'judgment',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '句子"他说得很清楚"中的"得"不能单独使用，必须依附在动词之后，这体现了助词的附着性。（ ）',
        options: [],
        answer: ['T'],
        analysis: '“得”是结构助词，只能附着在动词或形容词后，引出补语，不能单独成句，也不能充当句子成分，体现了助词的附着性这一核心特征。'
    },

    {
        id: 'particle_L1_015',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“请你试试看这个办法”中，“看”的词类是（ ）',
        options: [
            { key: 'A', text: '动词' },
            { key: 'B', text: '动态助词' },
            { key: 'C', text: '尝试助词' },
            { key: 'D', text: '语气词' }
        ],
        answer: ['C'],
        analysis: '“看”轻读，附着在动词后，表示尝试，是特殊功能助词。'
    },

    {
        id: 'particle_L1_016',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“给”用作强调助词的是（ ）',
        options: [
            { key: 'A', text: '他给朋友写了一封信' },
            { key: 'B', text: '他把文件给整理好了' },
            { key: 'C', text: '给我拿杯水' },
            { key: 'D', text: '他给我一本书' }
        ],
        answer: ['B'],
        analysis: '“给”在此不表示动作对象，而是强调处理结果; A C为介词；D为动词'
    },

    {
        id: 'particle_L1_018',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“这本书是他昨天买的”中，“的”属于（ ）',
        options: [
            { key: 'A', text: '动态助词' },
            { key: 'B', text: '结构助词' },
            { key: 'C', text: '语气词' },
            { key: 'D', text: '副词' }
        ],
        answer: ['B'],
        analysis: '“的”用于“是……的”结构中，属于结构助词，的字后面可以加中心语'
    },

    {
        id: 'particle_L1_020',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '下列关于动态助词“过”的说法，正确的是（ ）',
        options: [
            { key: 'A', text: '“过”表示动作发生的具体时间' },
            { key: 'B', text: '“过”只表示动作已经完成并结束' },
            { key: 'C', text: '“过”只表示曾经有过某种经历或动作已经完成，与具体时间无关' },
            { key: 'D', text: '“过”只能用于肯定句' }
        ],
        answer: ['C'],
        analysis: '“过”是动态助词，核心功能是表示经历或曾经发生或动作完成，不承担具体时间定位；时间信息需由时间词或语境补充。'
    },

    {
        id: 'particle_L1_026',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“他已经处理过类似问题”中，“过”的词类是（ ）',
        options: [
            { key: 'A', text: '副词' },
            { key: 'B', text: '动态助词' },
            { key: 'C', text: '结构助词' },
            { key: 'D', text: '语气词' }
        ],
        answer: ['B'],
        analysis: '“过”附着在动词后，表示经历，是动态助词。'
    },
    
    {
        id: 'particle_L1_028',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '从语法功能看，助词最主要的作用是（ ）',
        options: [
            { key: 'A', text: '表达具体意义' },
            { key: 'B', text: '充当句子成分' },
            { key: 'C', text: '标记语法关系' },
            { key: 'D', text: '承载情感态度' }
        ],
        answer: ['C'],
        analysis: '助词本身不表意义，核心功能是标记语法关系。',
    },
    {
        id: 'particle_L2_001',
        type: 'multiple',
        level: 'L2',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“的”用于构成“的”字短语的是（ ）',
        options: [
            { key: 'A', text: '红色的更显眼' },
            { key: 'B', text: '他买了一本新的词典' },
            { key: 'C', text: '吃的已经准备好了' },
            { key: 'D', text: '安静的环境有助于思考' }
        ],
        answer: ['A', 'C'],
        analysis: 'A、C 中“的”构成名词性“的”字短语，起代指作用；B、D 为普通定中结构。'
    },
    {
        id: 'particle_L2_002',
        type: 'multiple',
        level: 'L2',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“的”不能省略的是（ ）',
        options: [
            { key: 'A', text: '新的电脑' },
            { key: 'B', text: '对工作认真负责的态度' },
            { key: 'C', text: '对这个问题的看法' },
            { key: 'D', text: '大的花园' }
        ],
        answer: ['B', 'C'],
        analysis: 'C 中“对这个问题的看法”属于“介词短语 + 的 + 名词”的定语结构；介词短语作定语时必须带“的”，否则结构不成立或语义关系不清。A、B、D 分别是“形容词/名词/程度词 + 名词”的常见省略形式，更自然不带“的”。'
    },
];

// 注册到题库
window.PARTICLE_QUESTIONS = PARTICLE_QUESTIONS;
