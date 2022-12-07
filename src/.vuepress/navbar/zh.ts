import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {text: "快速导航", icon: "daohang", link: "/quicknav/"},
    {text: "代码笔记", icon: "code", link: "/代码笔记"},
    {text: "我的问题", icon: "wentiquestions1", link: "/我的问题/Problem"},
    {
        text: "资源宝库",
        icon: "ziyuan",
        children: [
            {
                text: "项目",
                icon: "xiangmu",
                link: '/我的项目'
            },
            {
                text: "书籍",
                icon: "shuji",
                link: "/我的书籍"
            },
        ],
    },
    {
        text: "花花世界",
        icon: "yinle",
        prefix: "/花花世界",
        children: [
            {
                text: "音乐收录",
                icon: "xiangmu",
                link: '/音乐收录'
            },
            {
                text: "影视收录",
                icon: "shuji",
                link: "/影视收录"
            },
        ],
    },
    {
        text: "搭建文档",
        icon: "note",
        link: "https://vuepress-theme-hope.github.io/v2/zh/",
    },
]);
