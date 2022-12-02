import {defineUserConfig} from "vuepress";
import {searchPlugin} from '@vuepress/plugin-search';
import theme from "./theme.js";


export default defineUserConfig({
    base: "/",
    port: 9090,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: "个人知识库",
            description: "锦洋の个人知识库",
            // 设置favicon
            head: [['link', {rel: 'icon', href: '/favicon.ico'}]]
        }
    },
    plugins: [
        searchPlugin({
            // 配置项
            locales: {
                '/': {
                    placeholder: '搜索'
                }
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/',
            // 允许搜索 Frontmatter 中的 `tags`
            // getExtraFields: (page) => page.frontmatter.tags ?? [],
            hotKeys: ['Ctrl', 'r']
        }),
    ],
    // 主体设置
    theme,

    shouldPrefetch: false,
});
