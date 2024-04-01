import { _ as o, c as a, t as r } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as n, createElementBlock as t, normalizeClass as p, renderSlot as s } from "vue";
import "highlight.js";
const c = {}, d = {}, l = {
  en: c,
  fr: d
}, i = {
  name: "VuiHeader",
  mixins: [
    a
  ],
  created() {
    r(l);
  }
}, m = ["id"];
function f(e, $, u, _, h, b) {
  return n(), t("header", {
    id: e.componentId,
    class: p(["vui-header", e.$props.class])
  }, [
    s(e.$slots, "prepend"),
    s(e.$slots, "default"),
    s(e.$slots, "append")
  ], 10, m);
}
const v = /* @__PURE__ */ o(i, [["render", f]]);
export {
  v as default
};
