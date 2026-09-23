/* ============================================================
   项目数据（黄梦辉）
   ------------------------------------------------------------
   新增项目：在数组中追加一个对象即可，版式按渲染顺序自动
   交替（第 1 个为全宽大图，其后左图右文 / 左文右图交替）。
   字段说明：
     title    项目名称
     subtitle 一句话定位
     desc     项目简介
     tech     技术栈数组
     date     完成时间
     category 类别（用于顶部筛选，可自定义新类别）
     image    项目图片地址
   ============================================================ */

var PROJECTS = [
  {
    title: "课语通",
    subtitle: "基于大语言模型的课程问答助手",
    desc: "“课语通”是一个基于大语言模型的课程问答助手。用户上传课程资料后，系统能够建立知识索引，根据课程内容回答问题，并提供引用出处和知识点小测，帮助学生快速复习和整理课程重点。",
    tech: ["Python", "FastAPI", "RAG", "向量检索", "大语言模型 API", "Streamlit"],
    date: "2026.07",
    category: "AI 应用",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20course%20question%20answering%20assistant%20web%20interface%2C%20chat%20layout%20with%20cited%20references%2C%20warm%20beige%20and%20terracotta%20palette%2C%20laptop%20screen%20mockup%2C%20editorial%20magazine%20photography&image_size=landscape_16_9"
  },
  {
    title: "城市脉搏",
    subtitle: "城市交通与天气数据可视化大屏",
    desc: "“城市脉搏”是一个城市实时交通与天气数据可视化大屏，用于集中展示交通、天气和城市运行信息。项目通过多数据源轮询聚合数据，并结合 SVG 图表、Canvas 粒子地图和响应式布局实现大屏可视化展示。",
    tech: ["TypeScript", "HTML/CSS", "Canvas", "SVG", "ECharts"],
    date: "2026.03",
    category: "数据可视化",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=city%20traffic%20and%20weather%20data%20visualization%20dashboard%20on%20large%20screen%2C%20maps%20and%20charts%2C%20dark%20charcoal%20with%20warm%20amber%20accents%2C%20modern%20editorial%20design&image_size=landscape_4_3"
  },
  {
    title: "拾光集市",
    subtitle: "校园二手交易平台",
    desc: "“拾光集市”是一个面向校园场景的二手交易平台，提供商品发布、关键词检索、站内私信和信用评分等功能。从需求梳理、界面设计到主要接口开发均独立完成，上线测试后累计注册用户超过 300 人。",
    tech: ["Java", "Spring Boot", "MySQL", "TypeScript", "Vue"],
    date: "2025.09",
    category: "Web 应用",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=campus%20second-hand%20marketplace%20web%20interface%20on%20laptop%2C%20product%20grid%20layout%2C%20warm%20beige%20palette%2C%20minimal%20desk%20scene%2C%20editorial%20photography&image_size=landscape_4_3"
  },
  {
    title: "轻记账",
    subtitle: "极简记账微信小程序",
    desc: "“轻记账”是一款面向日常生活场景的极简记账微信小程序，重点解决快速记录和查看个人收支的问题。项目支持语音快捷记账、月度收支统计和预算提醒，并使用微信云开发完成数据存储与后端能力。",
    tech: ["TypeScript", "微信小程序", "微信云开发", "ECharts"],
    date: "2025.04",
    category: "小程序",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimal%20expense%20tracking%20mini%20program%20interface%20on%20smartphone%2C%20clean%20typography%20and%20simple%20charts%2C%20warm%20cream%20background%2C%20soft%20lighting%2C%20editorial%20product%20photography&image_size=landscape_4_3"
  }
];
