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

    iconAssets: "//at.alicdn.com/t/c/font_3803930_fgt387wz8y5.css",
    // logo: "/logo.jpg",

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

            footer: "默认页脚",

            displayFooter: true,

            // page meta
            metaLocales: {
                editLink: "在 gitee 上编辑此页",

            },
        },
    },

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
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
