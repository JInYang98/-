import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        {
            icon: "daohanglan",
            text: "导航栏",
            children: "structure",
        },
        "slides",
    ],
});
