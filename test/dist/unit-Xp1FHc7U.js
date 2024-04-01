import { _ as o, c as n, t } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as r, createElementBlock as a, normalizeClass as i, renderSlot as e } from "vue";
import "highlight.js";
const l = {}, p = {}, c = {
  en: l,
  fr: p
}, d = {
  col: {
    default: void 0,
    types: [
      String,
      Number
    ]
  }
}, u = {
  name: "VuiGridUnit",
  mixins: [
    n
  ],
  props: d,
  created() {
    t(c);
  }
};
function m(s, f, $, g, b, v) {
  return r(), a("div", {
    class: i([
      "vui-grid-unit",
      { [`vui-grid-unit-col--${s.col}`]: s.col },
      s.$props.class
    ])
  }, [
    e(s.$slots, "prepend"),
    e(s.$slots, "default"),
    e(s.$slots, "append")
  ], 2);
}
const S = /* @__PURE__ */ o(u, [["render", m]]);
export {
  S as default
};
