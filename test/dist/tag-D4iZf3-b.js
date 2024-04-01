import { _ as a, c as i, t as r } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as t, createElementBlock as s, normalizeClass as n, renderSlot as o, createCommentVNode as p, createTextVNode as c, toDisplayString as l } from "vue";
import "highlight.js";
const d = {}, m = {}, u = {
  en: d,
  fr: m
}, g = {
  icon: {
    type: String
  },
  text: {
    type: String
  }
}, f = {
  name: "VuiTag",
  mixins: [
    i
  ],
  props: g,
  created() {
    r(u);
  }
}, $ = ["id"];
function v(e, y, S, h, k, V) {
  return t(), s("div", {
    id: e.componentId,
    class: n([
      "vui-tag",
      `vui-tag--${e.layout}`,
      { "vui-tag--with-icon": e.icon },
      e.$props.class
    ])
  }, [
    o(e.$slots, "prepend"),
    e.icon ? (t(), s("i", {
      key: 0,
      class: n(["vui-tag-icon", e.icon])
    }, null, 2)) : p("", !0),
    o(e.$slots, "default", {}, () => [
      c(l(e.text), 1)
    ]),
    o(e.$slots, "append")
  ], 10, $);
}
const N = /* @__PURE__ */ a(f, [["render", v]]);
export {
  N as default
};
