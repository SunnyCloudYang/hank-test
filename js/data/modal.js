/**
 * 语气词题库
 * 
 * 题目数据格式：
 * - id: 唯一标识符（建议格式：modal_L1_001 或 modal_L2_001）
 * - type: 题目类型 (single=单选, multiple=多选, judgment=判断)
 * - level: 难度级别 (L1=基础, L2=进阶)
 * - category: 固定为 'modal'
 * - tag: 考点标签（需要在 question-config.js 中注册）
 * - stem: 题干
 * - options: 选项数组 (判断题可省略)
 * - answer: 正确答案数组
 * - analysis: 解析说明
 */

const MODAL_QUESTIONS = [
    {
        id: 'mo da l_L1_001',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，句末“呢”用于【强调陈述】的是（ ）',
        options: [
            { key: 'A', text: '他现在在哪呢' },
            { key: 'B', text: '材料已经交上去了呢' },
            { key: 'C', text: '你怎么还不走呢' },
            { key: 'D', text: '明天是不是下雨呢' }
        ],
        answer: ['B'],
        analysis: 'B 为已然事实的补充强调；A、D 为疑问语气；C 带有责怪意味，偏反问。'
    },
    {
        id: 'modal_L1_003',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，“吧”表示揣测语气的是（ ）',
        options: [
            { key: 'A', text: '我们走吧' },
            { key: 'B', text: '你已经知道结果吧' },
            { key: 'C', text: '别说话吧' },
            { key: 'D', text: '休息一下吧' }
        ],
        answer: ['B'],
        analysis: 'B 中“吧”用于判断性陈述，表示说话人的推测。'
    },
    {
        id: 'modal_L1_005',
        type: 'judgment',
        level: 'L1',
        category: 'modal',
        tag: '语气词/特征',
        stem: '语气词一般位于句末，用来表达说话人的态度或语气。（ ）',
        options: [],
        answer: ['T'],
        analysis: '语气词主要附着于句末或句中，表达语气而不改变句子语义。',
        fixed: true 
    },
    {
        id: 'modal_L1_006',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，“吗”用于一般疑问句的是（ ）',
        options: [
            { key: 'A', text: '你什么时候走吗？' },
            { key: 'B', text: '他是谁吗？' },
            { key: 'C', text: '你已经准备好了吗？' },
            { key: 'D', text: '他去哪呢？' }
        ],
        answer: ['C'],
        analysis: '“吗”用于是非问句；A、B 为特殊疑问句，不用“吗”。'
    },
    {
        id: 'modal_L1_009',
        type: 'judgment',
        level: 'L1',
        category: 'modal',
        tag: '语气词/特征',
        stem: '语气词会改变句子的基本语义内容。（ ）',
        options: [],
        answer: ['F'],
        analysis: '语气词只影响语气类型，不改变句子语义。'
    },
    {
        id: 'modal_L1_011',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，加点词“吗”用于构成是非问的是（ ）',
        options: [
            { key: 'A', text: '你怎么还不走吗？' },
            { key: 'B', text: '你已经提交作业了吗？' },
            { key: 'C', text: '他难道会同意吗？' },
            { key: 'D', text: '难道你不知道吗？' }
        ],
        answer: ['B'],
        analysis: 'B 中“吗”用于中性的是非问；A带反诘色彩（并非真正求“是/否”信息）；C、D 为反问句式“难道…吗”，语气偏强调。'
    },
    {
        id: 'modal_L1_012',
        type: 'multiple',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，“呢”主要用于停顿、舒缓语气的有（ ）',
        options: [
            { key: 'A', text: '其实呢，他早就知道结果了' },
            { key: 'B', text: '你说的那个人呢？' },
            { key: 'C', text: '我呢，也只是随口一提' },
            { key: 'D', text: '你打算怎么办啊？' }
        ],
        answer: ['A', 'C'],
        analysis: 'A、C 的“呢”用于话题提示/句中停顿，起舒缓作用；B、D 为疑问语气（追问/特指问）。'
    },
    {
        id: 'modal_L1_015',
        type: 'multiple',
        level: 'L1',
        category: 'modal',
        tag: '语气词/词类识别',
        stem: '下列句子中，加点词属于语气词“吧”用于缓和语气/提出建议的是（ ）',
        options: [
            { key: 'A', text: '把门关好吧，外面风大' },
            { key: 'B', text: '把作业写完了吧' },
            { key: 'C', text: '这两份资料是合在一起的吧' },
            { key: 'D', text: '把他说的话记下来吧' }
        ],
        answer: ['A', 'D'],
        analysis: 'A 句末“吧”为语气词，缓和祈使/建议；B、C 为表揣测。'
    },
    
    {
        id: 'modal_L1_017',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，“呢”最符合“特指问中标记疑问语气”的用法的是（ ）',
        options: [
            { key: 'A', text: '他还没回消息呢' },
            { key: 'B', text: '你把钥匙放哪儿呢？' },
            { key: 'C', text: '我呢，已经考虑过了' },
            { key: 'D', text: '这事呢，其实不难处理' }
        ],
        answer: ['B'],
        analysis: 'B 为特指问句，“呢”标记疑问语气；A 为强调状态；C、D 为话题提示/停顿。'
    },
    {
        id: 'modal_L1_019',
        type: 'single',
        level: 'L1',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，最符合“轻描淡写/弱化评价”的语气的是（ ）',
        options: [
            { key: 'A', text: '我只是提醒你一下罢了' },
            { key: 'B', text: '我已经提醒你啦' },
            { key: 'C', text: '我才提醒你一下了' },
            { key: 'D', text: '我提醒你一下呀' }
        ],
        answer: ['A'],
        analysis: '“罢了”用于弱化陈述、表示“不算什么/仅此而已”；B、C、D 均无弱化语气'
    },
    {
        id: 'modal_L1_020',
        type: 'judgment',
        level: 'L1',
        category: 'modal',
        tag: '语气词/特征',
        stem: '判断正误：语气词既可以出现在句末，也可以出现在句中（如“你啊”“其实呢”），句中用法多用于停顿、提示话题或缓和语气。（ ）',
        options: [],
        answer: ['T'],
        analysis: '语气词典型位置是句末；但“啊/呢/吧”等也可用于句中停顿与话题提示，起舒缓和强调作用。'
    },
    // 助词与语气词 L2
   
    {
        id: 'modal_L2_04',
        type: 'multiple',
        level: 'L2',
        category: 'modal',
        tag: '语气词/作用辨析',
        stem: '下列句子中，“啊”主要用于加强感叹语气的是（ ）',
        options: [
            { key: 'A', text: '这么巧啊！你也在这里' },
            { key: 'B', text: '你啊，就是太急了' },
            { key: 'C', text: '这道题好难啊！我得再想想' },
            { key: 'D', text: '原来是你啊，我还以为认错人了' }
        ],
        answer: ['A', 'C', 'D'],
        analysis: 'A、C 、D 的“啊”加强感叹（惊讶/感慨）；B 多为句中停顿、带评价。',
        fixed: true 
    }
];

// 注册到题库
window.MODAL_QUESTIONS = MODAL_QUESTIONS;
