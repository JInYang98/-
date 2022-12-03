import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            icon: "daohanglan",
            text: "导航栏",
            children: "structure",
            // 可选的, 设置分组是否可以折叠，默认值是 false,
            collapsible: true
        },
        "slides",
    ],
});
