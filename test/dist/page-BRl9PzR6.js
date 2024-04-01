import { a as n } from "./animable-DnFaMPYA.js";
import { _ as d, c as p, t as c } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as e, createElementBlock as t, normalizeClass as m, renderSlot as o, createCommentVNode as a } from "vue";
import "highlight.js";
const u = {}, f = {}, $ = {
  en: u,
  fr: f
}, k = {
  name: "VuiPage",
  mixins: [
    n,
    p
  ],
  created() {
    c($);
  },
  methods: {
    outclick() {
      this.$bus.emit("outclick", this.componentGroupId);
    }
  }
}, h = ["id"], v = {
  key: 0,
  class: "vui-page-header"
}, b = {
  key: 1,
  class: "vui-page-body"
}, g = {
  key: 2,
  class: "vui-page-footer"
};
function y(s, r, C, _, B, l) {
  return e(), t("div", {
    id: s.componentId,
    class: m(["vui-page", s.$props.class]),
    onClick: r[0] || (r[0] = (...i) => l.outclick && l.outclick(...i))
  }, [
    o(s.$slots, "prepend"),
    s.$slots.header ? (e(), t("div", v, [
      o(s.$slots, "header")
    ])) : a("", !0),
    s.$slots.body || s.$slots.default ? (e(), t("div", b, [
      o(s.$slots, "body"),
      o(s.$slots, "default")
    ])) : a("", !0),
    s.$slots.footer ? (e(), t("div", g, [
      o(s.$slots, "footer")
    ])) : a("", !0),
    o(s.$slots, "append")
  ], 10, h);
}
const G = /* @__PURE__ */ d(k, [["render", y]]);
export {
  G as default
};
