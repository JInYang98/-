import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 9090,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "个人知识库",
      description: "锦洋の个人知识库",
    },
  },

  theme,

  shouldPrefetch: false,
});
