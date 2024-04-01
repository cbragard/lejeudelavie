import { _ as r, c as a, t as i } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as t, createElementBlock as s, normalizeClass as n, renderSlot as o, createCommentVNode as l, createTextVNode as p, toDisplayString as c } from "vue";
import "highlight.js";
const d = {}, m = {}, u = {
  en: d,
  fr: m
}, $ = {
  icon: {
    type: String
  },
  text: {
    type: String
  }
}, f = {
  name: "VuiAlert",
  mixins: [
    a
  ],
  props: $,
  created() {
    i(u);
  }
}, y = ["id"];
function g(e, v, S, V, k, b) {
  return t(), s("div", {
    id: e.componentId,
    class: n([
      "vui-alert",
      `vui-alert--${e.layout}`,
      e.$props.class
    ])
  }, [
    o(e.$slots, "prepend"),
    o(e.$slots, "icon", {}, () => [
      e.icon ? (t(), s("i", {
        key: 0,
        class: n(["vui-alert-icon", e.icon])
      }, null, 2)) : l("", !0)
    ]),
    o(e.$slots, "default", {}, () => [
      p(c(e.text), 1)
    ]),
    o(e.$slots, "append")
  ], 10, y);
}
const C = /* @__PURE__ */ r(f, [["render", g]]);
export {
  C as default
};
