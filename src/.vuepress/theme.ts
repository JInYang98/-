import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar/index.js";
import {zhSidebar} from "./sidebar/index.js";

export default hopeTheme({

    hostname: "https://gitee.com/jinYang98",
    /**
     主题风格
     "switch": 在深色模式，浅色模式和自动之间切换 (默认)
     "toggle": 在深色模式和浅色模式之间切换
     "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
     "enable": 强制深色模式
     "disable": 禁用深色模式
     # 全局变量
     */
    darkmode: "toggle",
    author: {
        name: "锦洋",
        url: "https://gitee.com/jinYang98/jin-yang-note/",
    },

    logo: "/logo.png",

    // 全屏按钮
    fullscreen: true,
    // 图标样式
    iconAssets: "//at.alicdn.com/t/c/font_3803930_cpfy182bxy.css",

    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "https://gitee.com/jinYang98/jin-yang-note",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Gitee",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // 仓库分支
    docsBranch: "master",
    //仓库相对路径
    docsDir: "src",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
        /**
         * 中文配置
         */
        "/": {
            // 当行条
            navbar: zhNavbar,

            // 侧边栏
            sidebar: zhSidebar,

            footer: "锦洋的学习笔记",

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: "在 gitee 上编辑此页",
            },
        },
    },

    encrypt: {
        config: {
            "/": ["1234"],
        },
    },
    // 主题色
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
        purple: "#ae36ca",
    },
    plugins: {
        // 在MD文件中启用的组件
        components: [
            // 为站点提供了在MD文档中自定义颜色的徽章
            "Badge",
            // 为站点提供了在MD文档中加载B站视频的功能，但是不建议使用
            "BiliBili",
            // 为站点提供了在MD文档中加载PDF阅读器的功能，但是不建议使用
            // 原因一：PDF书籍较大，上传到码云后会大量占用码云空间
            // 原因二：当PDF阅读器较多的时候，将MD文档渲染成HTML页面比较耗费性能，使页面加载速度变慢
            "PDF",
        ],
        // 代码复制
        copyCode: {
            // 纯净模式
            pure: true,
            // 是否在移动端展示
            showInMobile: true
        },
        // 是否默认启用评论功能。
        comment: {
            /**
             * Using Waline
             */
            provider: "Waline",
            serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        // Disable features you don’t want here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            flowchart: true,
            gfm: true,
            imageLazyload: true,
            imageTitle: true,
            imageSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,

        },
        // 打开博客功能
        blog: {
            // 在文章列表页面自动提取文章的摘要进行显示
            autoExcerpt: true,
        },
        // 开启git实现编辑此页面-最后更新时间-贡献者功能
        git: true,
        // 关闭sitemap插件
        sitemap: false,

        pwa: {
            favicon: "/favicon.ico",
            cacheHTML: true,
            cachePic: true,
            appendBase: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "Demo",
                        short_name: "Demo",
                        url: "/demo/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
