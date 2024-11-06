import deer from '../assets/deer.jpg';
import seem from '../assets/seem.png';
import law from '../assets/physical_law.jpg';
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
        date: "Oct 2024",
        content: "Awarded the National Scholarship. (国家奖学金, <span style=\"color: red; font-weight: bold;\">Top 2%</span> in Tsinghua University)",
    },
];

export const FEATUREDPUBLICATIONS = [
    {
        id: 1,
        name: "HOW FAR IS VIDEO GENERATION FROM WORLD MODEL: A PHYSICAL LAW PERSPECTIVE",
        journal: "arXiv Preprint",
        date: "Oct 2024",
        authors: "Bingyi Kang*, Yang Yue* (Equal Contribution in alphabetical order), Rui Lu, Zhijie Lin, Yang Zhao, Kaixin Wang, Gao Huang, Jiashi Feng ",
        image: law, // Optional
        // link: "https://openreview.net/forum?id=ZyLkNVHBZF",
        // code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
    {
        name: "DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2024",
        date: "Sep 2024",
        authors: "Yang Yue*, Yulin Wang*, Bingyi Kang, Yizeng Han, Shenzhi Wang, Shiji Song, Jiashi Feng, Gao Huang",
        image: deer,
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
        name: "Value-consistent Representation Learning for Data-Efficient Reinforcement Learning",
        journal: "hirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2023) (Oral)",
        date: "Jun 2022",
        authors: "Yang Yue, Bingyi Kang, Zhongwen Xu, Gao Huang, Shuicheng Yan",
        image: vcr,
        link: "https://arxiv.org/abs/2206.12542",
    },
]

export const PUBLICATIONS = [
    {
        id: 1,
        name: "HOW FAR IS VIDEO GENERATION FROM WORLD MODEL: A PHYSICAL LAW PERSPECTIVE",
        journal: "arXiv Preprint",
        date: "Oct 2024",
        authors: "Bingyi Kang*, Yang Yue* (Equal Contribution in alphabetical order), Rui Lu, Zhijie Lin, Yang Zhao, Kaixin Wang, Gao Huang, Jiashi Feng ",
        image: law, // Optional
        // link: "https://openreview.net/forum?id=ZyLkNVHBZF",
        // code: "https://github.com/LeapLabTHU/MOSS", // Optional
        // projectPage: "https://example.com/projects/project1" // Optional
    },
    {
        name: "DeeR-VLA: Dynamic Inference of Multimodal Large Language Models for Efficient Robot Execution",
        journal: "Advances in Neural Information Processing Systems (NeurIPS), 2024",
        date: "Sep 2024",
        authors: "Yang Yue*, Yulin Wang*, Bingyi Kang, Yizeng Han, Shenzhi Wang, Shiji Song, Jiashi Feng, Gao Huang",
        image: deer,
        code: "https://github.com/yueyang130/DeeR-VLA",
        // projectPage: "https://andrewzh112.github.io/#expel"
    },
    {
        name: "Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing",
        journal: "arXiv Preprint",
        date: "Jul 2024",
        authors: "Huanqian Wang*, Yang Yue*, Rui Lu, Jingxin Shi, Andrew Zhao, Shenzhi Wang, Shiji Song, Gao Huang",
        image: surgery,
        link: "https://arxiv.org/pdf/2407.08770",
        code: "https://github.com/lucywang720/model-surgery",
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
        journal: "arXiv Preprint",
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
        journal: "hirty-Eighth AAAI Conference on Artificial Intelligence (AAAI 2023) (Oral)",
        date: "Jun 2022",
        authors: "Yang Yue, Bingyi Kang, Zhongwen Xu, Gao Huang, Shuicheng Yan",
        image: vcr,
        link: "https://arxiv.org/abs/2206.12542",
    },
];

export const SERVICES = [
    {
        title: "Conference Reviewers",
        description: "ICML 2023<br> NeurIPS 2023<br>NeurIPS 2024<br>",
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

export const ABOUT_TEXT = `
<p>I am a third-year Ph.D. candidate in the Department of Automation at Tsinghua University, supervised by Prof. <a href='https://www.gaohuang.net/' target='_blank' rel='noopener noreferrer'>Gao Huang</a>.
I earned my bachelor's degree in Computer Science in 2022 from Beihang University, and during my undergraduate years, I also studied Electrical Engineering.
Previously, I interned at Sea AI Lab Singapore for over a year, working under the guidance of Prof. <a href='https://yanshuicheng.info/' target='_blank' rel='noopener noreferrer'>Shuicheng Yan</a> and collaborating closely with Dr. <a href='https://bingykang.github.io/' target='_blank' rel='noopener noreferrer'>Bingyi Kang</a>.</p>
<p>My research primarily focuses on developing AI generalist decision-making systems. My interests include:</p>
<ul>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Reinforcement Learning</span> for skill acquisition and self-improvement</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Multimodal LLMs</span> for generalized perception and advanced reasoning</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">World Models</span> for planning and scalable data generation</li>
    <li><span style="color: #4CAF50; background-color: #E8F5E9; padding: 2px 4px; border-radius: 3px;">Embodied AI</span> for real-world interactions and applications</li>
</ul>
`

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
