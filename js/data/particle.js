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
        analysis: '“了”附着在动词“结束”后，表示动作实现，是动态助词。'
    },

    {
        id: 'particle_L1_002',
        type: 'multiple',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '下列句子中，划线词“的”用作结构助词的是（ ）',
        options: [
            { key: 'A', text: '他昨天来的北京' },
            { key: 'B', text: '认真负责的老师' },
            { key: 'C', text: '你说的是对的' },
            { key: 'D', text: '他来的很早' }
        ],
        answer: ['A', 'B', 'C'],
        analysis: 'A中“的”为结构助词，属于动词+的结构，表强调；B 中“的”连接定语与中心语，标记名词性结构，是结构助词。C中“说的”构成的字短语，即说话的内容，也是结构助词；D为误用，应用“得”'
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
        analysis: 'B 中“亮着” 形容词+着，表状态持续；A、C为动作的持续；D 沿着为介词，并非动态助词'
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
        analysis: '“过”强调曾经发生的经历，不关注是否影响现在。'
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
        analysis: '助词无词汇意义，不能独立成句，必须依附使用。'
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
        analysis: '改变句子结构特征的是结构助词 '
    },

    {
        id: 'particle_L1_011',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '下列句子中，“所”用作助词的是（ ）',
        options: [
            { key: 'A', text: '他所说的话很有道理' },
            { key: 'B', text: '所有同学都到齐了' },
            { key: 'C', text: '住所离学校不远' },
            { key: 'D', text: '所以我们要齐心协力' }
        ],
        answer: ['A'],
        analysis: '“所”与动词构成名词性结构，是结构助词。'
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
            { key: 'D', text: '我曾今去过意大利' }
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
        id: 'particle_L1_017',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '句子“他刚才站着等了半个小时”中，“着”的作用是（ ）',
        options: [
            { key: 'A', text: '表示完成' },
            { key: 'B', text: '表示经历' },
            { key: 'C', text: '表示动作持续状态' },
            { key: 'D', text: '表示动作正在进行' }
        ],
        answer: ['C'],
        analysis: '“站着”表示等候时持续保持的状态。D不符合“刚才”的语境'
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
        id: 'particle_L1_019',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，画线处只能使用“得”，不能使用“地”的是（ ）',
        options: [
            { key: 'A', text: '他解释___非常详细，大家都听懂了' },
            { key: 'B', text: '她小心___整理着实验记录' },
            { key: 'C', text: '孩子兴奋___跳了起来' },
            { key: 'D', text: '老师耐心___回答了学生的问题' }
        ],
        answer: ['A'],
        analysis: 'A 中“解释得非常详细”，“得”引出的是程度补语，属于补语标记；B、C、D 中“地”标记状语 '
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
        id: 'particle_L1_021',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/词类识别',
        stem: '句子“这些问题为大家所关注”中，“所”的作用是（ ）',
        options: [
            { key: 'A', text: '引出时间' },
            { key: 'B', text: '构成被动结构' },
            { key: 'C', text: '表示程度' },
            { key: 'D', text: '引出结果' }
        ],
        answer: ['B'],
        analysis: '“所”与“为”搭配，构成书面被动结构。'
    },

    {
        id: 'particle_L1_022',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，动态助词“来着”使用正确的是（ ）',
        options: [
            { key: 'A', text: '他来着呢' },
            { key: 'B', text: '你刚才说什么来着？' },
            { key: 'C', text: '事情早就已经解决来着' },
            { key: 'D', text: '他来着北京工作' }
        ],
        answer: ['B'],
        analysis: '“来着”用于口语，表示不久前发生的动作回忆。'
    },

    {
        id: 'particle_L1_023',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '下列哪一项不符合助词“着”的使用规则？（ ）',
        options: [
            { key: 'A', text: '孩子抱着玩具睡觉' },
            { key: 'B', text: '他躺着床上休息' },
            { key: 'C', text: '门一直关着' },
            { key: 'D', text: '她穿着外套出门' }
        ],
        answer: ['B'],
        analysis: '动词后带处所词时，应使用“在”，不能用“着”。'
    },

    {
        id: 'particle_L1_024',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，表完成体助词“了”使用不符合语法规则的是（ ）',
        options: [
            { key: 'A', text: '他没把真实情况告诉了我' },
            { key: 'B', text: '会议讨论了三个多小时才结束' },
            { key: 'C', text: '天气突然冷了下来' },
            { key: 'D', text: '她看了那份报告以后，提出了新的建议' }
        ],
        answer: ['A'],
        analysis: 'A 中是否定结构，“没”与表完成体的“了₁”不能共现；B 为动作过程完成，C 为状态变化，D 为连动结构中前一动作完成，均符合“了”的使用规则。'
    },

    {
        id: 'particle_L1_025',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/特征',
        stem: '下列关于结构助词“地”的说法，正确的是（ ）',
        options: [
            { key: 'A', text: '可引出补语' },
            { key: 'B', text: '可标记状语' },
            { key: 'C', text: '可单独成句' },
            { key: 'D', text: '表示动作完成' }
        ],
        answer: ['B'],
        analysis: '“地”标记状语与动词之间的修饰关系。'
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
        id: 'particle_L1_027',
        type: 'multiple',
        level: 'L1',
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
        analysis: '助词本身不表意义，核心功能是标记语法关系。'
    },
    {
        id: 'particle_L1_029',
        type: 'single',
        level: 'L1',
        category: 'particle',
        tag: '助词/作用辨析',
        stem: '下列句子中，“的”起强调时间作用、不能省略的是（ )',
        options: [
            { key: 'A', text: '昨天买的书已经看完了' },
            { key: 'B', text: '刚来的学生还不熟悉情况' },
            { key: 'C', text: '他是在北京读的大学' },
            { key: 'D', text: '认真准备的计划得到了认可' }
        ],
        answer: ['C'],
        analysis: 'C 属于“是……的”句式，用于强调动作发生的时间或处所，“的”为句式核心成分，不能省略。'
    },
    {
        id: 'particle_L1_030',
        type: 'multiple',
        level: 'L1',
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
    }
];

// 注册到题库
window.PARTICLE_QUESTIONS = PARTICLE_QUESTIONS;
