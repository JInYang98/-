import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {text: "快速导航", icon: "wentiquestions1", link: "/demo/"},
    {text: "代码笔记", icon: "code", link: "/codeNotes"},
    {text: "我的问题", icon: "wentiquestions1", link: "/problems/Problem"},
    {
        text: "资源宝库",
        icon: "ziyuan",
        children: [
            {
                text: "项目",
                icon: "xiangmu",
                link: '/projects'
            },
            {
                text: "书籍",
                icon: "shuji",
                link: "/book"
            },
        ],
    },
    {
        text: "搭建文档",
        icon: "note",
        link: "https://vuepress-theme-hope.github.io/v2/zh/",
    },
]);
