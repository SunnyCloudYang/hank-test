# 现代汉语虚词练习平台

面向中文教育专业本科生的自适应虚词学习系统，涵盖介词、助词、连词、语气词四大虚词类别。

## 功能特点

### 自适应难度机制
- **初始难度**：L1 基础题
- **升级条件**：连续答对 3 道 L1 题 → 切换为 L2 进阶题
- **降级条件**：答错 2 道 L2 题 → 切回 L1 基础题
- 同难度下题目随机抽取，已答题目不重复

### 完整练习流程
1. **开始前**：显示平台说明、难度规则、答题须知
2. **练习中**：
   - 单题展示（含题干、选项/判断）
   - 实时反馈（对错 + 简要解析）
   - 进度条显示
   - 暂停/重置功能
   - 连续答对庆祝效果（5题/10题）
3. **结束后**：自动生成精细化学习测评报告

### 精细化测评报告
- **基础数据**：总答题数、正确率、各难度正确率
- **类别分析**：介词、助词、连词、语气词错误率
- **薄弱点定位**：按具体考点精准定位问题
- **学习建议**：针对薄弱点给出改进建议

## 快速开始

### 方法一：直接打开
双击 `index.html` 文件，在浏览器中打开即可使用。

### 方法二：本地服务器（推荐）
```bash
# 使用 Python
python -m http.server 8080

# 或使用 Node.js
npx serve .

# 然后访问 http://localhost:8080
```

## 项目结构

```
├── index.html                  # 主入口文件
├── css/
│   └── style.css               # 全局样式（响应式布局）
├── js/
│   ├── data/                   # 📁 题库数据目录
│   │   ├── preposition.js      # 介词题库
│   │   ├── particle.js         # 助词题库
│   │   ├── conjunction.js      # 连词题库
│   │   └── modal.js            # 语气词题库
│   ├── question-config.js      # 类别配置（考点描述、学习建议）
│   ├── questions.js            # 题库加载器
│   ├── adaptive-engine.js      # 自适应难度算法
│   ├── report-generator.js     # 测评报告生成逻辑
│   └── app.js                  # Vue 应用主逻辑
└── README.md                   # 使用说明
```

## 题库数据格式

每道题目包含以下字段：

```javascript
{
  "id": "preposition_L1_001",   // 唯一标识符（建议格式：类别_难度_序号）
  "type": "single",             // 题目类型：single(单选)/multiple(多选)/judgment(判断)
  "level": "L1",                // 难度级别：L1(基础)/L2(进阶)
  "category": "preposition",    // 虚词类别ID
  "tag": "把字句",              // 具体考点标签
  "stem": "题干内容...",        // 题目内容
  "options": [                  // 选项（判断题可省略）
    {"key": "A", "text": "选项A"},
    {"key": "B", "text": "选项B"}
  ],
  "answer": ["A"],              // 正确答案（数组格式）
  "analysis": "解析内容..."     // 答案解析
}
```

### 现有虚词类别

| 类别ID | 中文名 | 考点标签 |
|--------|--------|---------|
| `preposition` | 介词 | 对/对于混淆、把字句、被字句、在/于用法、向/朝/往 |
| `particle` | 助词 | 的地得误用、了/过/着时态、所字结构、结构助词综合 |
| `conjunction` | 连词 | 虽然但是/即使也、因为所以、不但而且、或者还是、并列连词 |
| `modal` | 语气词 | 吗/呢/吧疑问语气、啊/呀感叹语气、了/的语气、语气词综合 |

## 扩展题库

### 方式一：添加题目到现有类别

1. 打开对应的题库文件（如 `js/data/preposition.js`）
2. 在数组中添加新题目
3. 确保 `tag` 已在 `js/question-config.js` 中注册

### 方式二：添加全新的虚词类别

以添加"副词"类别为例：

**步骤 1：在 `js/question-config.js` 中注册新类别**

```javascript
// 1. 在 CATEGORIES 中添加类别基本信息
const CATEGORIES = {
    // ... 现有类别 ...
    adverb: {
        id: 'adverb',
        name: '副词',
        icon: '⚡',
        description: '副词用于修饰动词、形容词等',
        color: '#6a4c93'
    }
};

// 2. 在 TAG_DESCRIPTIONS 中添加考点描述
const TAG_DESCRIPTIONS = {
    // ... 现有考点 ...
    '副词/程度副词': '"很、非常、太、极"等表示程度的副词用法...'
};

// 3. 在 STUDY_SUGGESTIONS 中添加学习建议
const STUDY_SUGGESTIONS = {
    // ... 现有建议 ...
    '副词/程度副词': {
        title: '掌握程度副词的语义差异',
        content: '建议学习各程度副词表达程度的细微差别...'
    }
};
```

**步骤 2：创建题库文件 `js/data/adverb.js`**

```javascript
const ADVERB_QUESTIONS = [
    {
        id: 'adverb_L1_001',
        type: 'single',
        level: 'L1',
        category: 'adverb',
        tag: '程度副词',
        stem: '题干...',
        options: [...],
        answer: ['A'],
        analysis: '解析...'
    }
    // 更多题目...
];

window.ADVERB_QUESTIONS = ADVERB_QUESTIONS;
```

**步骤 3：在 `js/questions.js` 中注册题库**

```javascript
const QUESTION_BANKS = [
    'PREPOSITION_QUESTIONS',
    'PARTICLE_QUESTIONS',
    'CONJUNCTION_QUESTIONS',
    'MODAL_QUESTIONS',
    'ADVERB_QUESTIONS'  // 添加新题库
];
```

**步骤 4：在 `index.html` 中引入新文件**

```html
<script src="js/data/adverb.js"></script>
```

## 技术栈

- **框架**：Vue 3 (CDN版本，无需构建)
- **样式**：原生 CSS + CSS Variables
- **存储**：localStorage（前端临时存储）

## 浏览器兼容性

支持所有现代浏览器：
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 注意事项

1. 答题数据仅保存在本地浏览器中，清除浏览器数据会导致记录丢失
2. 建议在练习结束后及时保存测评报告（支持 PDF 导出）
3. 题库内容可根据教学需要自行扩展
4. 新增考点标签时，务必在 `question-config.js` 中同时添加描述和学习建议

## License

MIT License
