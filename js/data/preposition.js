/**
 * 介词题库
 * 
 * 题目数据格式：
 * - id: 唯一标识符（建议格式：preposition_L1_001 或 preposition_L2_001）
 * - type: 题目类型 (single=单选, multiple=多选, judgment=判断)
 * - level: 难度级别 (L1=基础, L2=进阶)
 * - category: 固定为 'preposition'
 * - tag: 考点标签（需要在 question-config.js 中注册）
 * - stem: 题干
 * - options: 选项数组 (判断题可省略)
 * - answer: 正确答案数组
 * - analysis: 解析说明
 */

const PREPOSITION_QUESTIONS = [
    // 介词 L1
    {
        id: 'preposition_L1_001',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '句子"他为祖国的发展奉献了毕生精力"中，"为"的词类是（ ）',
        options: [
            { key: 'A', text: '介词' },
            { key: 'B', text: '连词' },
            { key: 'C', text: '副词' },
            { key: 'D', text: '语气词' }
        ],
        answer: ['A'],
        analysis: '"为"后接名词性短语，构成介词短语，表示对象或目的，是介词。'
    },
    {
        id: 'preposition_L1_002',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '句子"我们从清晨等到日暮"中，介词"从"的作用是（ ）',
        options: [
            { key: 'A', text: '引出处所' },
            { key: 'B', text: '引出时间' },
            { key: 'C', text: '引出对象' },
            { key: 'D', text: '引出原因' }
        ],
        answer: ['B'],
        analysis: '"从"后接时间名词"清晨"，表示动作开始的时间。'
    },
    {
        id: 'preposition_L1_003',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '句子"大家对这个决策有不同看法"中，介词"对"的作用是（ ）',
        options: [
            { key: 'A', text: '引出对象' },
            { key: 'B', text: '引出时间' },
            { key: 'C', text: '引出原因' },
            { key: 'D', text: '引出凭借' }
        ],
        answer: ['A'],
        analysis: '"对"用于引出动作或态度的对象。'
    },
    {
        id: 'preposition_L1_004',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '介词短语的核心语法功能是（ ）',
        options: [
            { key: 'A', text: '充当主语' },
            { key: 'B', text: '充当谓语' },
            { key: 'C', text: '修饰谓词性词语' },
            { key: 'D', text: '充当宾语' }
        ],
        answer: ['C'],
        analysis: '介词短语不能独立作主语或谓语，其核心功能是修饰谓词性词语。'
    },
    {
        id: 'preposition_L1_005',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '句子"他比我高五厘米"中，"比"的作用是（ ）',
        options: [
            { key: 'A', text: '引出比较对象' },
            { key: 'B', text: '引出时间' },
            { key: 'C', text: '引出原因' },
            { key: 'D', text: '引出凭借' }
        ],
        answer: ['A'],
        analysis: '"比"是表比较的介词，引出比较对象。'
    },
    {
        id: 'preposition_L1_006',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '下列句子中，画线词属于介词的是（ ）',
        options: [
            { key: 'A', text: '他从不计较个人得失' },
            { key: 'B', text: '我们从昨天起开始放假' },
            { key: 'C', text: '他已经完成作业' },
            { key: 'D', text: '大家都同意这个方案' }
        ],
        answer: ['B'],
        analysis: '"从"后接时间名词"昨天"，构成介词短语"从昨天起"；A项"从不"中的"从"是副词。'
    },
    {
        id: 'preposition_L1_007',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '下列词语中，只能作介词的是（ ）',
        options: [
            { key: 'A', text: '在' },
            { key: 'B', text: '给' },
            { key: 'C', text: '从' },
            { key: 'D', text: '比' }
        ],
        answer: ['C'],
        analysis: '"从"是典型介词；其余词语既可作介词，也可作动词。'
    },
    {
        id: 'preposition_L1_008',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '句子"我们在大学的时候学过法语"中，"在"的作用是（ ）',
        options: [
            { key: 'A', text: '引出对象' },
            { key: 'B', text: '引出时间' },
            { key: 'C', text: '引出处所' },
            { key: 'D', text: '引出原因' }
        ],
        answer: ['B'],
        analysis: '"在大学的时候"表示动作发生的时间，"在"引出时间。'
    },
    {
        id: 'preposition_L1_009',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '下列介词短语中，表示处所的是（ ）',
        options: [
            { key: 'A', text: '从昨天起' },
            { key: 'B', text: '对老师' },
            { key: 'C', text: '在新加坡' },
            { key: 'D', text: '为朋友' }
        ],
        answer: ['C'],
        analysis: '"在新加坡"表示地点，属于引出处所的介词短语。'
    },
    {
        id: 'preposition_L1_010',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '下列句子中，介词短语作状语的是（ ）',
        options: [
            { key: 'A', text: '我们讨论了关于旅行的计划' },
            { key: 'B', text: '他毕业于北京大学' },
            { key: 'C', text: '为了锻炼身体，他每天跑步' },
            { key: 'D', text: '这是对你的建议' }
        ],
        answer: ['C'],
        analysis: '"为了锻炼身体"位于动词前，修饰"跑步"，作状语。'
    },
    {
        id: 'preposition_L1_011',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '"爸爸比妈妈大五岁"中，"比"引出的是（ ）',
        options: [
            { key: 'A', text: '时间' },
            { key: 'B', text: '对象' },
            { key: 'C', text: '原因' },
            { key: 'D', text: '处所' }
        ],
        answer: ['B'],
        analysis: '"比"用于比较，引出比较对象。'
    },
    {
        id: 'preposition_L1_012',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '下列句子中，"为"表示目的的是（ ）',
        options: [
            { key: 'A', text: '他为老师服务' },
            { key: 'B', text: '大家为他鼓掌' },
            { key: 'C', text: '为了完成任务，他加班了' },
            { key: 'D', text: '他为我着想' }
        ],
        answer: ['C'],
        analysis: '"为了完成任务"明确表示行为目的。'
    },
    {
        id: 'preposition_L1_013',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '下列介词中，常用于引出方向的是（ ）',
        options: [
            { key: 'A', text: '对' },
            { key: 'B', text: '从' },
            { key: 'C', text: '朝' },
            { key: 'D', text: '为' }
        ],
        answer: ['C'],
        analysis: '"朝"常用于表示方向，如"朝东走"。'
    },
    {
        id: 'preposition_L1_014',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '句子"老王每天沿着湖边跑步"中，介词短语"沿着湖边"在句中作（ ）',
        options: [
            { key: 'A', text: '定语' },
            { key: 'B', text: '状语' },
            { key: 'C', text: '补语' },
            { key: 'D', text: '宾语' }
        ],
        answer: ['B'],
        analysis: '"沿着湖边"位于动词前，修饰"跑步"，作状语。'
    },
    {
        id: 'preposition_L1_015',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '下列句子中，介词短语作补语的是（ ）',
        options: [
            { key: 'A', text: '在图书馆学习' },
            { key: 'B', text: '信放在桌子上了' },
            { key: 'C', text: '为了朋友努力' },
            { key: 'D', text: '关于这件事讨论' }
        ],
        answer: ['B'],
        analysis: '"在桌子上"位于动词后，补充说明"放"的结果位置。'
    },
    {
        id: 'preposition_L1_016',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '例句"这位售货员对顾客很热情"中，"对"引出的是（ ）',
        options: [
            { key: 'A', text: '时间' },
            { key: 'B', text: '处所' },
            { key: 'C', text: '对象' },
            { key: 'D', text: '原因' }
        ],
        answer: ['C'],
        analysis: '"对顾客"说明态度所指向的对象。'
    },
    {
        id: 'preposition_L1_017',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '下列短语中，属于介词短语的是（ ）',
        options: [
            { key: 'A', text: '慢慢地走' },
            { key: 'B', text: '非常认真' },
            { key: 'C', text: '从上海来' },
            { key: 'D', text: '已经完成' }
        ],
        answer: ['C'],
        analysis: '"从上海"是"介词+名词"构成的介词短语。'
    },
    {
        id: 'preposition_L1_018',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '"根据同学们的要求，我们调整了计划"中，"根据"引出的是（ ）',
        options: [
            { key: 'A', text: '原因' },
            { key: 'B', text: '依据' },
            { key: 'C', text: '目的' },
            { key: 'D', text: '对象' }
        ],
        answer: ['B'],
        analysis: '"根据"用于说明行动依据。'
    },
    {
        id: 'preposition_L1_019',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '下列介词短语中，表示原因的是（ ）',
        options: [
            { key: 'A', text: '为朋友' },
            { key: 'B', text: '由于身体问题' },
            { key: 'C', text: '从北京' },
            { key: 'D', text: '朝前走' }
        ],
        answer: ['B'],
        analysis: '"由于"用于引出原因。'
    },
    {
        id: 'preposition_L1_020',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '下列句子中，划线词作介词的是（ ）',
        options: [
            { key: 'A', text: '他在家看书' },
            { key: 'B', text: '他给了我一本书' },
            { key: 'C', text: '灯还亮着' },
            { key: 'D', text: '他还在想问题' }
        ],
        answer: ['A'],
        analysis: '"在家"引出处所，"看书"承担核心谓语功能，因此"在"作介词；其余为副词或动词用法。'
    },
    {
        id: 'preposition_L1_021',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '介词的一个基本特点是（ ）',
        options: [
            { key: 'A', text: '能独立作谓语' },
            { key: 'B', text: '可单独成句' },
            { key: 'C', text: '必须和其他成分构成介词短语' },
            { key: 'D', text: '可以重叠使用' }
        ],
        answer: ['C'],
        analysis: '介词不能单独使用，必须依附实词构成介词短语。'
    },
    {
        id: 'preposition_L1_022',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '"我们第一次见面是在图书馆"中，介词短语作的是（ ）',
        options: [
            { key: 'A', text: '定语' },
            { key: 'B', text: '状语' },
            { key: 'C', text: '补语' },
            { key: 'D', text: '宾语' }
        ],
        answer: ['C'],
        analysis: '"在图书馆"位于"是"后，作补语。'
    },
    {
        id: 'preposition_L1_023',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/句法功能',
        stem: '下列介词短语中，作定语的是（ ）',
        options: [
            { key: 'A', text: '在教室学习' },
            { key: 'B', text: '关于旅行的计划' },
            { key: 'C', text: '为了理想奋斗' },
            { key: 'D', text: '从家里来' }
        ],
        answer: ['B'],
        analysis: '介词短语作定语时需加"的"。'
    },
    {
        id: 'preposition_L1_024',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/作用辨析',
        stem: '下列介词中，常用于引出凭借的是（ ）',
        options: [
            { key: 'A', text: '对' },
            { key: 'B', text: '按' },
            { key: 'C', text: '朝' },
            { key: 'D', text: '于' }
        ],
        answer: ['B'],
        analysis: '"按""根据""凭"常用于引出依据或凭借。'
    },
    {
        id: 'preposition_L1_025',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '下列关于介词的说法，正确的是（ ）',
        options: [
            { key: 'A', text: '介词通常在名词性词语的后面' },
            { key: 'B', text: '介词通常依附实词，构成介词短语' },
            { key: 'C', text: '介词可以重叠使用' },
            { key: 'D', text: '介词本身具有完整词汇意义' }
        ],
        answer: ['B'],
        analysis: '介词不能单独使用，必须依附名词或名词性短语之前，构成介词短语，这是介词的基本特征。'
    },
    {
        id: 'preposition_L1_026',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '介词在句子中最主要的作用是（ ）',
        options: [
            { key: 'A', text: '表示动作或行为' },
            { key: 'B', text: '表示事物性质' },
            { key: 'C', text: '标记语义关系' },
            { key: 'D', text: '表达说话人的情感' }
        ],
        answer: ['C'],
        analysis: '介词本身不表示动作或情感，主要用于标记时间、处所、对象等语义关系。'
    },
    {
        id: 'preposition_L1_027',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '下列哪一项不符合介词的基本特点？（ ）',
        options: [
            { key: 'A', text: '介词后面常跟名词性成分' },
            { key: 'B', text: '介词不能独立作谓语' },
            { key: 'C', text: '介词可以单独回答问题' },
            { key: 'D', text: '介词常被看作语义成分的标记' }
        ],
        answer: ['C'],
        analysis: '介词不能单独使用，也不能单独回答问题。'
    },
    {
        id: 'preposition_L1_028',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '下列短语中，最能体现介词"依附性"的是（ ）',
        options: [
            { key: 'A', text: '已经完成' },
            { key: 'B', text: '从昨天起' },
            { key: 'C', text: '非常认真' },
            { key: 'D', text: '慢慢地走' }
        ],
        answer: ['B'],
        analysis: '"从"必须依附时间名词"昨天"，共同构成介词短语，体现介词的依附性。'
    },
    {
        id: 'preposition_L1_029',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '下列关于介词短语的说法，正确的是（ ）',
        options: [
            { key: 'A', text: '介词短语只能出现在动词前' },
            { key: 'B', text: '介词短语不能作定语' },
            { key: 'C', text: '介词短语由介词和实词共同构成' },
            { key: 'D', text: '介词短语可以充当句子的谓语' }
        ],
        answer: ['C'],
        analysis: '介词短语由介词和名词、代词或名词性短语构成。'
    },
    {
        id: 'preposition_L1_030',
        type: 'single',
        level: 'L1',
        category: 'preposition',
        tag: '介词/特征',
        stem: '从词类功能看，介词最接近下列哪一类词的特点？（ ）',
        options: [
            { key: 'A', text: '名词（表事物）' },
            { key: 'B', text: '动词（表动作）' },
            { key: 'C', text: '形容词（表性质）' },
            { key: 'D', text: '虚词（表语法关系）' }
        ],
        answer: ['D'],
        analysis: '介词属于虚词，主要功能是表示语法和语义关系，而不是具体意义。'
    },
    // 介词 L2
    {
        id: 'preposition_L2_001',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"从"作介词的是（ ）',
        options: [
            { key: 'A', text: '他从不迟到' },
            { key: 'B', text: '他从北京回来' },
            { key: 'C', text: '他从来没见过' },
            { key: 'D', text: '从前这里很热闹' }
        ],
        answer: ['B'],
        analysis: '"从北京回来"中，"从"后接名词性成分，作介词；其余为副词或时间名词。'
    },
    {
        id: 'preposition_L2_002',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"给"用作介词的是（ ）',
        options: [
            { key: 'A', text: '他给了我一本书' },
            { key: 'B', text: '给我打个电话' },
            { key: 'C', text: '他给我看了照片' },
            { key: 'D', text: '他把书给了我' }
        ],
        answer: ['B', 'C'],
        analysis: '"给我打个电话"中，"给"不能带"了"，作介词；A、D 中"给"是动词。'
    },
    {
        id: 'preposition_L2_003',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"到"用作介词的是（ ）',
        options: [
            { key: 'A', text: '他已经到了上海' },
            { key: 'B', text: '到上海去出差' },
            { key: 'C', text: '时间到了' },
            { key: 'D', text: '到那时，我们已经毕业了' }
        ],
        answer: ['B', 'D'],
        analysis: '"到上海去"中，"到"不能带动态助词，作介词；D 中"到"引出时间名词；A、C 为动词。'
    },
    {
        id: 'preposition_L2_004',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"比"用作介词的是（ ）',
        options: [
            { key: 'A', text: '我比你高' },
            { key: 'B', text: '我们比比看' },
            { key: 'C', text: '比赛开始了' },
            { key: 'D', text: '他比你努力' }
        ],
        answer: ['A', 'D'],
        analysis: '"比"作介词时不能重叠、不能带助词；B 为动词。'
    },
    {
        id: 'preposition_L2_005',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/功能对比',
        stem: '下列句子中，应选用"对于"的是（ ）',
        options: [
            { key: 'A', text: '___这次考试，他已经做好准备' },
            { key: 'B', text: '他___我很客气' },
            { key: 'C', text: '___这件事的处理方式，大家意见不一' },
            { key: 'D', text: '文章标题：___环境保护的几点思考' }
        ],
        answer: ['C'],
        analysis: '"对于"强调谈论对象。'
    },
    {
        id: 'preposition_L2_006',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/功能对比',
        stem: '下列句子中，"关于"使用最恰当的是（ ）',
        options: [
            { key: 'A', text: '关于他对我，很客气' },
            { key: 'B', text: '关于这次旅行，我们已经讨论过' },
            { key: 'C', text: '他关于我很尊重' },
            { key: 'D', text: '关于天气，我们都很满意' }
        ],
        answer: ['B'],
        analysis: '"关于"多用于句首，引出谈论范围。'
    },
    {
        id: 'preposition_L2_007',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/功能对比',
        stem: '下列句子中，应使用"为了"的是（ ）',
        options: [
            { key: 'A', text: '___身体原因，他请了假' },
            { key: 'B', text: '___完成任务，他加班到深夜' },
            { key: 'C', text: '___下雨，比赛取消了' },
            { key: 'D', text: '___天气不好，我们没出门' }
        ],
        answer: ['B'],
        analysis: '"为了"表示目的。'
    },
    {
        id: 'preposition_L2_008',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/功能对比',
        stem: '下列句子中，"由于"和"因为"使用错误的是（ ）',
        options: [
            { key: 'A', text: '由于天气原因，航班延误' },
            { key: 'B', text: '因为工作需要，他常出差' },
            { key: 'C', text: '因为锻炼身体，他每天跑步' },
            { key: 'D', text: '由于身体不好，他提前退休' }
        ],
        answer: ['C'],
        analysis: '目的句不能用"因为"。'
    },
    {
        id: 'preposition_L2_009',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，介词使用错误的是（ ）',
        options: [
            { key: 'A', text: '她比我一高点' },
            { key: 'B', text: '他比了我一下身高' },
            { key: 'C', text: '他跟过回家' },
            { key: 'D', text: '他跟在我后面' }
        ],
        answer: ['B'],
        analysis: '"比"作介词不能加动态助词。'
    },
    {
        id: 'preposition_L2_010',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/结构选择',
        stem: '下列句子中，必须使用"把"字句的是（ ）',
        options: [
            { key: 'A', text: '他整理房间' },
            { key: 'B', text: '他把弟弟抱在怀里' },
            { key: 'C', text: '他看书' },
            { key: 'D', text: '他写作业' }
        ],
        answer: ['B'],
        analysis: '动词后带处所补语必须用"把"。'
    },
    {
        id: 'preposition_L2_011',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/结构选择',
        stem: '下列句子中，介词短语不能后置的是（ ）',
        options: [
            { key: 'A', text: '他把书放在桌子上' },
            { key: 'B', text: '他在教室学习' },
            { key: 'C', text: '为了理想而奋斗' },
            { key: 'D', text: '关于这件事的讨论' }
        ],
        answer: ['C'],
        analysis: '表示目的的介词短语一般不能后置。'
    },
    {
        id: 'preposition_L2_012',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"在"不是介词的是（ ）',
        options: [
            { key: 'A', text: '他在家休息' },
            { key: 'B', text: '他在看书' },
            { key: 'C', text: '书在桌子上' },
            { key: 'D', text: '会议在明天举行' }
        ],
        answer: ['B', 'C'],
        analysis: 'B 为副词；C 为动词。'
    },
    {
        id: 'preposition_L2_013',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/结构选择',
        stem: '下列句子中，介词短语作句子成分的位置使用正确的是（ ）',
        options: [
            { key: 'A', text: '他学习汉语是为了提高水平' },
            { key: 'B', text: '他是为了提高汉语学习' },
            { key: 'C', text: '他为了很努力学习汉语' },
            { key: 'D', text: '他是学习汉语为了提高水平' }
        ],
        answer: ['A'],
        analysis: 'A 中介词短语作目的状语，位置正确。'
    },
    {
        id: 'preposition_L2_014',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/功能对比',
        stem: '下列句子中，应使用"朝"而不是"向"的是（ ）',
        options: [
            { key: 'A', text: '他___我走过来' },
            { key: 'B', text: '窗户___南开' },
            { key: 'C', text: '他___老师请教问题' },
            { key: 'D', text: '汽车___前行驶' }
        ],
        answer: ['B'],
        analysis: '"朝"用于定向状态。'
    },
    {
        id: 'preposition_L2_015',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/结构选择',
        stem: '下列句子中，介词"从"的结构和位置使用正确的是（ ）',
        options: [
            { key: 'A', text: '他从已经北京回来了' },
            { key: 'B', text: '他从没北京回来' },
            { key: 'C', text: '他从北京回来了' },
            { key: 'D', text: '他回来了从北京' }
        ],
        answer: ['C'],
        analysis: '"从北京"作状语，位置正确。'
    },
    {
        id: 'preposition_L2_016',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"从"用作介词的是（ ）',
        options: [
            { key: 'A', text: '他从不迟到' },
            { key: 'B', text: '她从未后悔过' },
            { key: 'C', text: '他从北京回来了' },
            { key: 'D', text: '我们从来不抱怨' }
        ],
        answer: ['C'],
        analysis: '"从北京"引出处所。'
    },
    {
        id: 'preposition_L2_017',
        type: 'single',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"在"用作介词的是（ ）',
        options: [
            { key: 'A', text: '他在认真思考' },
            { key: 'B', text: '她在努力学习' },
            { key: 'C', text: '他们在会议室讨论问题' },
            { key: 'D', text: '我在想这个办法' }
        ],
        answer: ['C'],
        analysis: '"在会议室"构成介词短语。'
    },
    {
        id: 'preposition_L2_018',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"自"用作介词的是（ ）',
        options: [
            { key: 'A', text: '他自小就喜欢音乐' },
            { key: 'B', text: '她自觉完成了任务' },
            { key: 'C', text: '自那天起，他再也没出现过' },
            { key: 'D', text: '他一直自认为很努力' }
        ],
        answer: ['A', 'C'],
        analysis: 'A、C 中"自"引出时间。'
    },
    {
        id: 'preposition_L2_019',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类辨析',
        stem: '下列句子中，"往"用作介词的是（ ）',
        options: [
            { key: 'A', text: '往前走，别回头' },
            { key: 'B', text: '情绪紧张时，人往往容易说错话' },
            { key: 'C', text: '他往学校去了' },
            { key: 'D', text: '事情往好处发展' }
        ],
        answer: ['A', 'C'],
        analysis: 'A、C 中"往"引出方向。'
    },
    {
        id: 'preposition_L2_020',
        type: 'multiple',
        level: 'L2',
        category: 'preposition',
        tag: '介词/词类识别',
        stem: '下列句子中，加点词语用作介词的是',
        options: [
            { key: 'A', text: '他从家里出发' },
            { key: 'B', text: '他从不迟到' },
            { key: 'C', text: '她自小就喜欢音乐' },
            { key: 'D', text: '他在看书' },
            { key: 'E', text: '爸爸比妈妈高一点' }
        ],
        answer: ['A', 'C', 'E'],
        analysis: 'A："从"后接名词性成分；B：副词用法；C："自"引出时间；D：进行体副词；E："比"引出比较对象。'
    }
];

// 注册到题库
window.PREPOSITION_QUESTIONS = PREPOSITION_QUESTIONS;
