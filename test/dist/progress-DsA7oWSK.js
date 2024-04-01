import { _ as p, c, t as l } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as u, createElementBlock as d, normalizeClass as t, renderSlot as o, createElementVNode as a, normalizeStyle as m } from "vue";
import "highlight.js";
const h = {}, b = {}, v = {
  en: h,
  fr: b
}, f = {
  min: {
    type: Number,
    required: !0
  },
  max: {
    type: Number,
    required: !0
  },
  value: {
    type: Number,
    required: !0
  }
}, $ = {
  name: "VuiProgress",
  mixins: [
    c
  ],
  props: f,
  computed: {
    width() {
      const e = Math.abs(this.value), s = Math.abs(this.min), r = Math.abs(this.max);
      return `${Math.round(e / (s + r) * 100)}%`;
    }
  },
  created() {
    l(v);
  }
}, g = ["id"];
function y(e, s, r, n, _, i) {
  return u(), d("div", {
    id: e.componentId,
    class: t(["vui-progress", e.$props.class])
  }, [
    o(e.$slots, "prepend"),
    a("div", {
      class: t([
        "vui-progress-bar",
        `vui-progress-bar--${e.layout}`
      ])
    }, [
      a("div", {
        class: "vui-progress-bar-cursor",
        style: m({ width: i.width })
      }, null, 4)
    ], 2),
    o(e.$slots, "append")
  ], 10, g);
}
const w = /* @__PURE__ */ p($, [["render", y]]);
export {
  w as default
};
