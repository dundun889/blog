import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "敦敦博客",
  description: "爱分享的前端攻城狮",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
