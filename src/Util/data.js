// import rlvr from '../assets/limit_of_rlvr.jpg';
import adaptivenn from '../assets/adaptivenn.png';
import rlvr from '../assets/limit_of_rlvr.gif';
import flexibilityTrap from '../assets/flexibility_trap.png';
import move from '../assets/move.png';
import azr from '../assets/azr.jpg';
import deer from '../assets/deer.jpg';
import seem from '../assets/seem.png';
import law from '../assets/teaser2x.gif';
import surgery from '../assets/surgery.jpg';
import vcr from '../assets/vcr.jpg';
import benchmark from '../assets/benchmark.jpg';
import red from '../assets/red.jpg';
import odpr from '../assets/odpr.jpg';
import soccer_img from '../assets/soccer.jpg';
// import soccer2_img from '../assets/soccer2.jpg';

export const FULL_NAME = "Yang Yue 乐洋";
export const RESUME_LINK = "https://Andrewzh112.github.io/resume/resume.pdf";
export const FOOTER_TEXT = {
    text: "The web is heavily inspired by ",
    link: "https://andrewzh112.github.io/",
    linkText: "Andrew Zhao's website"
};
export const SOCIAL_LINKS = [
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:le-y22@mails.tsinghua.edu.cn",
        text: "le-y22@mails.tsinghua.edu.cn",
        showText: true
    },
    {
        name: "Email",
        icon: "far fa-lg fa-envelope",
        link: "mailto:yueyang22f@gmail.com",
        text: "yueyang22f@gmail.com",
        showText: true
    },
    {
        name: "Google Scholar",
        icon: "fas fa-graduation-cap",
        link: "https://scholar.google.com/citations?user=tE1oVQ4AAAAJ&hl=zh",
        showText: false
    },
    {
        name: "Github",
        icon: "fab fa-lg fa-github",
        link: "https://github.com/yueyang130",
        showText: false
    },
    {
        name: "Twitter",
        icon: "fab fa-lg fa-twitter",
        link: "https://x.com/YangYue_THU",
        showText: false
    },
];

export const NEWS = [
    {
        date: "Sep 2025",
        content: "Three papers are accepted by NeurIPS 2025. Limit-of-RLVR is as <span style=\"color: red; font-weight: bold;\">Oral (0.35%) and is the only paper to receive a perfect score 6666 this year (1/21,575)</span>. Absolute Zero is as <span style=\"color: red; font-weight: bold;\">Spotlight (3%)</span>.",
    },
    {
        date: "Jul 2025",
        content: "Our paper AdaptiveNN is accepted by <span style=\"color: red; font-weight: bold;\">Nature Machine Intelligence</span>. It models visual reasoning using reinforcement learning, similar to OpenAI o1 Thinking with Image.",
    },
    {
        date: "Jul 2025",
        content: "Limit-of-RLVR is awarded as the <span style=\"color: red; font-weight: bold;\">Best Paper</span> at the <span style=\"color: red; font-weight: bold;\">ICML 2025</span> Workshop AI4Math (among 172 papers).",
    },
    {
        date: "Jun 2025",
        content: "We released two interesting paper about RLVR for LLM reasoning, <span style=\"color: red; font-weight: bold;\">Absolute Zero</span> and <span style=\"color: red; font-weight: bold;\">Beyond the 80/20 Rule</span>.",
    },
    {
        date: "April 2025",
        content: "Our paper \"<span style=\"color: red; font-weight: bold;\">Limit-of-RLVR</span>\" is released. It sparked active discussion on X, highlighted by many researchers, and reached over <span style=\"color: red; font-weight: bold;\">1 million views</span>.",
    },
    {
        date: "Nov 2024",
        content: "\"How Far is Video Generation from World Model: A Physical Law Perspective\" is selected as the representative project for <span style=\"color: red; font-weight: bold;\">Bytedance Topseed</span>. Its twitter is repost by Yann LeCun.",
    },
    // {
    //     date: "Oct 2024",
    //     content: "Awarded the National Scholarship for graduate students. (研究生国家奖学金, <span style=\"color: red; font-weight: bold;\">Top 2%</span> at Tsinghua University. Ranked <span style=\"color: red; font-weight: bold;\">2nd</span> in the first batch of selection.)",
    // },
    // {
    //     date: "Jun 2022",
    //     content: "Awarded Honor Graduate of Beijing.",
    // },
    // {
    //     date: "2018-2020",
    //     content: "Awarded the National Scholarship <span style=\"color: red; font-weight: bold;\">three times</span>. (本科生国家奖学金, <span style=\"color: red; font-weight: bold;\">Top 2%</span>)",
    // },
    // {
    //     date: "Nov 2018",
    //     content: "Won the first prize in Mathematics competition of Chinese College Student (Ranked <span style=\"color: red; font-weight: bold;\">No.9</span> in China)",
    // },
];

export const FEATUREDPUBLICATIONS = [
    {
        id: "flexibility-trap",
        name: "The Flexibility Trap: Why Arbitrary Order Limits Reasoning Potential in Diffusion Language Models",
        journal: "International Conference on Machine Learning (ICML), 2026 Spotlight",
        date: "Jan 2026",
        authors: "Zanlin Ni, Shenzhi Wang, Yang Yue, Tianyu Yu, Weilin Zhao, Yeguo Hua, Tianyi Chen, Jun Song, Cheng Yu, Bo Zheng, Gao Huang",
        image: flexibilityTrap,
        link: "https://arxiv.org/pdf/2601.15165",
        code: "https://github.com/LeapLabTHU/JustGRPO",
        projectPage: "https://nzl-thu.github.io/the-flexibility-trap",
    },
    {
        id: "move",
        name: "MOVE: A Simple Motion-Based Data Collection Paradigm for Spatial Generalization in Robotic Manipulation",
        journal: "IEEE International Conference on Robotics and Automation (ICRA), 2026",
        date: "Dec 2025",
        authors: "Huanqian Wang*, Chi Bene Chen*, Yang Yue*§ (*: Equal contribution; §: Project Lead), Danhua Tao, Tong Guo, Shaoxuan Xie, Denghang Huang, Shiji Song, Guocai Yao, Gao Huang",
        image: move,
        link: "https://arxiv.org/abs/2512.04813",
        code: "https://github.com/lucywang720/MOVE",
    },
    {
        name: "Emulating Human-like Adaptive Vision for Efficient and Flexible Machine Visual Perception",
        journal: "<span style=\"color: red; font-weight: bold;\">Nature Machine Intelligence</span>",
        date: "Sep 2025",
        authors: "Yulin Wang*, Yang Yue* (Equal contribution), Yang  Yue*, Huanqian Wang, Haojun Jiang, Yizeng Han, Zanlin Ni, Yifan Pu, Minglei Shi, Rui Lu, Qisen Yang, Andrew Zhao, Zhuofan Xia, Shiji Song, Gao Huang",
        image: adaptivenn,
        link: "https://arxiv.org/abs/2509.15333",
        code: "https://github.com/LeapLabTHU/AdaptiveNN", // Optional
    },
    {
        name: "Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?",
        journal: "<span style=\"color: red; font-weight: bold;\">NeurIPS 2025 Best Paper Runner-up Award</span> (7/21,575)<br/>The only paper to receive <span style=\"color: red; font-weight: bold;\">a perfect score 6666</span> at NeurIPS 2025 (1/21,575)<br/>ICML 2025 Workshop AI4MATH Best Paper Award (2/172)",
        date: "April 2025",
        authors: "Yang Yue*† (†: Project Lead), Zhiqi Chen*, Rui Lu, Andrew Zhao, Zhaokai Wang, Yang  Yue, Shiji Song, Gao Huang",
        image: rlvr,
        link: "https://arxiv.org/pdf/2504.13837",
        code: "https://github.com/LeapLabTHU/limit-of-RLVR", // Optional
        projectPage: "https://limit-of-rlvr.github.io/", // Optional
        twitter: "https://x.com/iruletheworldmo/status/1915338995707359274",
    },
    {
        name: "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
        journal: "NeurIPS 2025 Spotlight (3%)",
        date: "May 2025",
        authors: "Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Yang  Yue, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang",
        image: azr,
        link: "https://arxiv.org/pdf/2505.03335",
        code: "https://github.com/LeapLabTHU/Absolute-Zero-Reasoner", // Optional
        projectPage: "https://andrewzh112.github.io/absolute-zero-reasoner/", // Optional
        twitter: "https://x.com/_AndrewZhao/status/1919920459748909288",
        
    },
    {
        name: "Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing",
        journal: "Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL), 2025",
        date: "Jan 2025",
        authors: "Huanqian Wang*, Yang Yue*, Rui Lu, Jingxin Shi, Andrew Zhao, Shenzhi Wang, Shiji Song, Gao Huang",
        image: surgery,
        link: "https://arxiv.org/pdf/2407.08770",
        code: "https://github.com/lucywang720/model-surgery",
    },
    {
        id: 1,
        name: "How Far is Video Generation from World Model: A Physical Law Perspective",
        journal: "International Conference on Machine Learning (ICML), 2025",
        date: "Oct 2024",
        authors: "Bingyi Kang*, Yang Yue* (Equal contribution in alphabetical order), Rui Lu, Zhijie Lin, Yang Zhao, Kaixin Wang, Gao Huang, Jiashi Feng ",
        image: law, // Optional
        link: "https://arxiv.org/abs/2411.02385",
        code: "https://github.com/phyworld/phyworld", // Optional
        projectPage: "https://phyworld.github.io/", // Optional
        twitter: "https://x.com/bingyikang/status/1853635009611219019",
    },
    {
        name: "DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2024",
        date: "Sep 2024",
        authors: "Yang Yue*, Yulin Wang*, Bingyi Kang, Yizeng Han, Shenzhi Wang, Shiji Song, Jiashi Feng, Gao Huang",
        image: deer,
        link: "https://arxiv.org/abs/2411.02359",
        code: "https://github.com/yueyang130/DeeR-VLA",
        // projectPage: "https://andrewzh112.github.io/#expel"
    },
    {
        name: "Understanding, Predicting and Better Resolving Q-Value Divergence in Offline-RL",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2023",
        date: "Sep 2023",
        authors: "Yang Yue*, Rui Lu*, Bingyi Kang*, Shiji Song, Gao Huang",
        image: seem,
        link: "https://arxiv.org/abs/2310.04411",
        code: "https://github.com/yueyang130/SEEM/",
        projectPage: "https://offrl-seem.github.io/"
    },
    {
        name: "Decoupled Prioritized Resampling for Offline RL",
        journal: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
        date: "Jun 2023",
        authors: "Yang Yue, Bingyi Kang, Xiao Ma, Qisen Yang, Gao Huang, Shiji Song, Shuicheng Yan",
        image: odpr,
        link: "https://arxiv.org/abs/2306.05412",
        code: "https://github.com/yueyang130/ODPR",
    },
    {
        name: "Value-consistent Representation Learning for Data-Efficient Reinforcement Learning",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2023) (Oral)",
        date: "Jun 2022",
        authors: "Yang Yue, Bingyi Kang, Zhongwen Xu, Gao Huang, Shuicheng Yan",
        image: vcr,
        link: "https://arxiv.org/abs/2206.12542",
    },
]

export const PUBLICATIONS = [
    {
        name: "The Flexibility Trap: Why Arbitrary Order Limits Reasoning Potential in Diffusion Language Models",
        journal: "International Conference on Machine Learning (ICML), 2026 Spotlight",
        date: "Jan 2026",
        authors: "Zanlin Ni, Shenzhi Wang, Yang Yue, Tianyu Yu, Weilin Zhao, Yeguo Hua, Tianyi Chen, Jun Song, Cheng Yu, Bo Zheng, Gao Huang",
        link: "https://arxiv.org/pdf/2601.15165",
        code: "https://github.com/LeapLabTHU/JustGRPO",
        projectPage: "https://nzl-thu.github.io/the-flexibility-trap",
    },
    {
        name: "MOVE: A Simple Motion-Based Data Collection Paradigm for Spatial Generalization in Robotic Manipulation",
        journal: "IEEE International Conference on Robotics and Automation (ICRA), 2026",
        date: "Dec 2025",
        authors: "Huanqian Wang*, Chi Bene Chen*, Yang Yue*§ (*: Equal contribution; §: Project Lead), Danhua Tao, Tong Guo, Shaoxuan Xie, Denghang Huang, Shiji Song, Guocai Yao, Gao Huang",
        link: "https://arxiv.org/abs/2512.04813",
        code: "https://github.com/lucywang720/MOVE",
    },
    {
        name: "Emulating Human-like Adaptive Vision for Efficient and Flexible Machine Visual Perception",
        journal: "Nature Machine Intelligence",
        date: "Sep 2025",
        authors: "Yulin Wang*, Yang Yue* (Equal contribution), Yang  Yue*, Huanqian Wang, Haojun Jiang, Yizeng Han, Zanlin Ni, Yifan Pu, Minglei Shi, Rui Lu, Qisen Yang, Andrew Zhao, Zhuofan Xia, Shiji Song, Gao Huang",
        image: adaptivenn,
        link: "https://arxiv.org/abs/2509.15333",
        code: "https://github.com/LeapLabTHU/AdaptiveNN", // Optional
    },
    {
        name: "Beyond the 80/20 Rule: High-Entropy Minority Tokens Drive Effective Reinforcement Learning for LLM Reasoning",
        journal: "NeurIPS 2025",
        date: "Jun 2025",
        authors: "Shenzhi Wang, Le Yu, Chang Gao, Chujie Zheng, Shixuan Liu, Rui Lu, Kai Dang, Xionghui Chen, Jianxin Yang, Zhenru Zhang, Yuqiong Liu, An Yang, Andrew Zhao, Yang Yue, Shiji Song, Bowen Yu, Gao Huang, Junyang Lin",
        // image: rlvr,
        link: "https://arxiv.org/abs/2506.01939",
        // code: "https://github.com/LeapLabTHU/limit-of-RLVR", // Optional
        projectPage: "https://shenzhi-wang.github.io/high-entropy-minority-tokens-rlvr/", // Optional
        twitter: "https://x.com/ShenzhiWang_THU/status/1929752966246158363",
    },
    {
        name: "Absolute Zero: Reinforced Self-play Reasoning with Zero Data",
        journal: "NeurIPS 2025 Spotlight (3%)",
        date: "May 2025",
        authors: "Andrew Zhao, Yiran Wu, Yang Yue, Tong Wu, Quentin Xu, Yang  Yue, Matthieu Lin, Shenzhi Wang, Qingyun Wu, Zilong Zheng, Gao Huang",
        image: azr,
        link: "https://arxiv.org/pdf/2505.03335",
        code: "https://github.com/LeapLabTHU/Absolute-Zero-Reasoner", // Optional
        projectPage: "https://andrewzh112.github.io/absolute-zero-reasoner/", // Optional
        twitter: "https://x.com/_AndrewZhao/status/1919920459748909288",
        
    },
    {
        name: "Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?",
        journal: "Best Paper Runner-up Award (7/21,575); ICML 2025 Workshop AI4MATH Best Paper Award (2/172)",
        date: "April 2025",
        authors: "Yang Yue*† (†: Project Lead), Zhiqi Chen*, Rui Lu, Andrew Zhao, Zhaokai Wang, Yang  Yue, Shiji Song, Gao Huang",
        image: rlvr,
        link: "https://arxiv.org/pdf/2504.13837",
        code: "https://github.com/LeapLabTHU/limit-of-RLVR", // Optional
        projectPage: "https://limit-of-rlvr.github.io/", // Optional
        twitter: "https://x.com/iruletheworldmo/status/1915338995707359274",
    },
    {
        name: "Towards Understanding the Benefit of Multitask Representation Learning in Decision Process",
        journal: "arXiv Preprint",
        date: "March 2025",
        authors: "Rui Lu, Yang Yue, Andrew Zhao, Simon Du, Gao Huang",
        image: rlvr,
        link: "https://arxiv.org/abs/2503.00345",
        // code: "https://github.com/lucywang720/model-surgery",
    },
    {
        name: "Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing",
        journal: "Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL), 2025",
        date: "Jan 2025",
        authors: "Huanqian Wang*, Yang Yue*, Rui Lu, Jingxin Shi, Andrew Zhao, Shenzhi Wang, Shiji Song, Gao Huang",
        image: surgery,
        link: "https://arxiv.org/pdf/2407.08770",
        code: "https://github.com/lucywang720/model-surgery",
    },
    {
        id: 1,
        name: "How Far is Video Generation from World Model: A Physical Law Perspective",
        journal: "International Conference on Machine Learning (ICML), 2025",
        date: "Oct 2024",
        authors: "Bingyi Kang*, Yang Yue* (Equal contribution in alphabetical order), Rui Lu, Zhijie Lin, Yang Zhao, Kaixin Wang, Gao Huang, Jiashi Feng ",
        image: law, // Optional
        link: "https://arxiv.org/abs/2411.02385",
        code: "https://github.com/phyworld/phyworld", // Optional
        projectPage: "https://phyworld.github.io/", // Optional
        twitter: "https://x.com/bingyikang/status/1853635009611219019",
    },
    {
        name: "DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2024",
        date: "Sep 2024",
        authors: "Yang Yue*, Yulin Wang*, Bingyi Kang, Yizeng Han, Shenzhi Wang, Shiji Song, Jiashi Feng, Gao Huang",
        image: deer,
        link: "https://arxiv.org/abs/2411.02359",
        code: "https://github.com/yueyang130/DeeR-VLA",
        // projectPage: "https://andrewzh112.github.io/#expel"
    },
    {
        name: "Understanding, Predicting and Better Resolving Q-Value Divergence in Offline-RL",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2023",
        date: "Sep 2023",
        authors: "Yang Yue*, Rui Lu*, Bingyi Kang*, Shiji Song, Gao Huang",
        image: seem,
        link: "https://arxiv.org/abs/2310.04411",
        code: "https://github.com/yueyang130/SEEM/",
        projectPage: "https://offrl-seem.github.io/"
    },
    {
        name: "Decoupled Prioritized Resampling for Offline RL",
        journal: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
        date: "Jun 2023",
        authors: "Yang Yue, Bingyi Kang, Xiao Ma, Qisen Yang, Gao Huang, Shiji Song, Shuicheng Yan",
        image: odpr,
        link: "https://arxiv.org/abs/2306.05412",
        code: "https://github.com/yueyang130/ODPR",
    },
    {
        name: "Improving and benchmarking offline reinforcement learning algorithms",
        journal: "arXiv Preprint",
        date: "Jun 2023",
        authors: "Bingyi Kang, Xiao Ma, Yirui Wang, Yang Yue, Shuicheng Yan",
        image: benchmark,
        link: "https://arxiv.org/pdf/2306.00972",
        code: "https://github.com/sail-sg/offbench",
    },
    {
        name: "Boosting Offline Reinforcement Learning via Data Rebalancing",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2022, Offline RL Workshop",
        date: "Oct 2022",
        authors: "Yang Yue, Bingyi Kang, Xiao Ma, Zhongwen Xu, Gao Huang, Shuicheng Yan",
        image: red,
        link: "https://arxiv.org/pdf/2210.09241",
    },
    {
        name: "Value-consistent Representation Learning for Data-Efficient Reinforcement Learning",
        journal: "Thirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2023) (Oral)",
        date: "Jun 2022",
        authors: "Yang Yue, Bingyi Kang, Zhongwen Xu, Gao Huang, Shuicheng Yan",
        image: vcr,
        link: "https://arxiv.org/abs/2206.12542",
    },
];

export const SERVICES = [
    {
        title: "Does Reinforcement Learning Really Incentivize Reasoning Capacity in LLMs Beyond the Base Model?",
        description: "Invited talk at Kimi, Zhipu AI, Bytendance Seed, Alibaba, Meituan, MSRA, Tufalabs, Fireside Talk, GuoQiang Institute, etc.",
    },
    {
        title: "Conference Reviewers",
        description: "ICML 2023<br> NeurIPS 2023, 2024, 2025<br>",
    },
    {
        title: "Value-Consistent Representation Learning for Data-Efficient Reinforcement Learning",
        date: "February 2023",
        venue: "AAAI 2023",
        description: "Oral Presentation"
    },
    {
        title: "Understanding Predicting and Better Resolving Value Divergence",
        date: "January 2024",
        venue: "ReadPaper Invited Talk",
        // description: "Presented by Rui Lu, featuring collaborative work between both of us.",
        // link: "https://www.bilibili.com/video/BV1LK411Y7Tc/?vd_source=75411458a4aa446f7fbc441211e20421#reply204791770480",
    },
];

export const WORK_EXPERIENCE = [
    {
        date: "2022",
        content: "Interned at <span style=\"color: red; font-weight: bold;\">Sea AI Lab Singapore</span>, working under the guidance of Prof. <a href='https://yanshuicheng.info/' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>Shuicheng Yan</a> and collaborating closely with <a href='https://bingykang.github.io/' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>Bingyi Kang</a>."
    },
    {
        date: "2024",
        content: "Interned at <span style=\"color: red; font-weight: bold;\">ByteDance Seed</span>, advised by Prof. <a href='https://scholar.google.com/citations?user=Q8iay0gAAAAJ&hl=en' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>Jiashi Feng</a>."
    },
    {
        date: "2025",
        content: "Interned at <span style=\"color: red; font-weight: bold;\">Moonshot Kimi</span>, contributed to the development of <a href='https://github.com/MoonshotAI/Kimi-K2.5/blob/master/tech_report.pdf' target='_blank' rel='noopener noreferrer' style='color: #2563eb; text-decoration: underline;'>Kimi K2.5</a>'s <span style=\"color: red; font-weight: bold;\">Agent Swarm</span>."
    }
];

export const ABOUT_TEXT = `
<p>I am a fourth-year Ph.D. candidate in the Department of Automation at Tsinghua University, supervised by Prof. <a href='https://www.gaohuang.net/' target='_blank' rel='noopener noreferrer'>Gao Huang</a>.
I earned my bachelor's degree in Computer Science in 2022, and during my undergraduate years, I also studied Electrical Engineering.
</p>
<p>My research primarily focuses on developing AI generalist decision-making systems. My interests include:</p>
<ul>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Reinforcement Learning</span> for skill acquisition and self-improvement</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">LLM Reasoning and Agent</span> for generalized reasoning and long-horizon execution</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Embodied AI</span> for real-world interactions and applications</li>
</ul>
<p></p>
<p>
<span style="color: #BDD8E6; font-style: italic;">
 </span>
</p>
`

// I am currently focused on developing new paradigms beyond RLVR for incentivizing LLM/MLLM reasoning. 
// I am seeking active collaboration with companies that offer the freedom to explore these frontier and fundamental questions, alongside abundant resources and a strong technical atmosphere.
//  Additionally, 

export const AWARDS = [
    {
        date: "2025",
        content: "<span style=\"color: red; font-weight: bold;\">NeurIPS 2025 Best Paper Runner-up Award</span> for Limit-of-RLVR paper. (<span style=\"color: red; font-weight: bold;\">4 Best Paper and 3 Best Paper Runner-up Awards</span> selected from over 21,000 submissions)"
    },
    {
        date: "2025",
        content: "Awarded the National Scholarship for Ph.D. Students. (Top 2% at Tsinghua University)"
    },
    {
        date: "2025",
        content: "Won the <span style=\"color: red; font-weight: bold;\">ICML 2025 Workshop Best Paper Award</span> for Limit-of-RLVR at AI4Math Workshop. (<span style=\"color: red; font-weight: bold;\">2 out of 172</span> papers)"
    },
    {
        date: "2024",
        content: "National Scholarship for Graduate Students. (Top 2% at Tsinghua, Ranked 2nd)"
    },
    {
        date: "2022",
        content: "Awarded Honor Graduate of Beijing. (City-level honor)"
    },
    {
        date: "2018-2020",
        content: "Awarded the National Scholarship three times. (本科生国家奖学金, <span style=\"color: red; font-weight: bold;\">Top 2% for three consecutive years</span>)"
    },
    {
        date: "2018",
        content: "Won the <span style=\"color: red; font-weight: bold;\">First Prize</span> in National Mathematics Competition for College Students. (Ranked <span style=\"color: red; font-weight: bold;\">No.9</span> in China)"
    }
];

export const LIFE_ACTIVITIES = [
    {
        id: 1,
        name: "Soccer",
        description: "I love soccer and play as a midfielder. I also serve as the captain of the men's football team for the Department of Automation.",
        image: soccer_img,
        // image: soccer2_img,
        link: "https://mp.weixin.qq.com/s/BYEamDPgS9FkJTYyquDNXg"
    },
    // Add more life activities here
];
