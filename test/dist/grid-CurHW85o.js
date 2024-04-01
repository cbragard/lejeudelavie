import { _ as s, c as l, t as n } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as r, createElementBlock as d, normalizeClass as i, renderSlot as o } from "vue";
import "highlight.js";
const t = {}, a = {}, c = {
  en: t,
  fr: a
}, p = {
  colXs: {
    default: void 0,
    types: [
      Number,
      String
    ]
  },
  colSm: {
    default: void 0,
    types: [
      Number,
      String
    ]
  },
  colMd: {
    default: void 0,
    types: [
      Number,
      String
    ]
  },
  colXl: {
    default: void 0,
    types: [
      Number,
      String
    ]
  }
}, u = {
  name: "VuiGrid",
  mixins: [
    l
  ],
  props: p,
  created() {
    n(c);
  }
}, m = ["id"];
function f(e, $, g, S, b, v) {
  return r(), d("div", {
    id: e.componentId,
    class: i([
      "vui-grid",
      { [`vui-grid--col-xs--${e.colXs}`]: e.colXs },
      { [`vui-grid--col-sm--${e.colSm}`]: e.colSm },
      { [`vui-grid--col-md--${e.colMd}`]: e.colMd },
      { [`vui-grid--col-xl--${e.colXl}`]: e.colXl },
      e.$props.class
    ])
  }, [
    o(e.$slots, "prepend"),
    o(e.$slots, "default"),
    o(e.$slots, "append")
  ], 10, m);
}
const M = /* @__PURE__ */ s(u, [["render", f]]);
export {
  M as default
};
