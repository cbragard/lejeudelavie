import { _ as e, c as r, t as n } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as t, createElementBlock as a, normalizeClass as p, renderSlot as s } from "vue";
import "highlight.js";
const c = {}, l = {}, m = {
  en: c,
  fr: l
}, i = {
  name: "VuiForm",
  mixins: [
    r
  ],
  created() {
    n(m);
  }
}, d = ["id"];
function f(o, $, u, _, b, h) {
  return t(), a("form", {
    id: o.componentId,
    class: p(["vui-form", o.$props.class])
  }, [
    s(o.$slots, "prepend"),
    s(o.$slots, "default"),
    s(o.$slots, "append")
  ], 10, d);
}
const v = /* @__PURE__ */ e(i, [["render", f]]);
export {
  v as default
};
