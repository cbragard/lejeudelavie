import { l as r } from "./index-BYlXFZ1a.js";
import { _ as d, c as l, t as i } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as e, createElementBlock as t, normalizeClass as n, renderSlot as o, createCommentVNode as a } from "vue";
import "highlight.js";
const c = {
  name: "VuiCard",
  mixins: [
    l
  ],
  created() {
    i(r);
  }
}, p = ["id"], m = {
  key: 0,
  class: "vui-card-header"
}, u = {
  key: 1,
  class: "vui-card-body"
}, f = {
  key: 2,
  class: "vui-card-footer"
};
function $(s, h, v, b, y, k) {
  return e(), t("div", {
    id: s.componentId,
    class: n([
      "vui-card",
      { "vui-card--flat": s.hasAttribute("flat") },
      s.$props.class
    ])
  }, [
    o(s.$slots, "prepend"),
    s.$slots.header ? (e(), t("div", m, [
      o(s.$slots, "header")
    ])) : a("", !0),
    s.$slots.body || s.$slots.default ? (e(), t("div", u, [
      o(s.$slots, "body"),
      o(s.$slots, "default")
    ])) : a("", !0),
    s.$slots.footer ? (e(), t("div", f, [
      o(s.$slots, "footer")
    ])) : a("", !0),
    o(s.$slots, "append")
  ], 10, p);
}
const g = /* @__PURE__ */ d(c, [["render", $]]);
export {
  g as default
};
