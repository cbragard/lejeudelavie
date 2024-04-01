import { _ as s, c as t, t as r } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as n, createElementBlock as a, normalizeClass as p, renderSlot as e } from "vue";
import "highlight.js";
const c = {}, l = {}, i = {
  en: c,
  fr: l
}, d = {
  name: "VuiFooter",
  mixins: [
    t
  ],
  created() {
    r(i);
  }
}, f = ["id"];
function m(o, $, u, _, b, h) {
  return n(), a("footer", {
    id: o.componentId,
    class: p(["vui-footer", o.$props.class])
  }, [
    e(o.$slots, "prepend"),
    e(o.$slots, "default"),
    e(o.$slots, "append")
  ], 10, f);
}
const v = /* @__PURE__ */ s(d, [["render", m]]);
export {
  v as default
};
