import {defineUserConfig} from "vuepress";
import {searchPlugin} from '@vuepress/plugin-search';
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: "/JinYangNote",
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
        // 根据组件文件或目录自动注册 Vue 组件。
        registerComponentsPlugin({
            // 配置项
            componentsDir: path.resolve(__dirname, './components'),
        }),
        // 全局搜索
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
