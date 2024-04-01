import { a as d } from "./animable-DnFaMPYA.js";
import { _ as r, c as b, t as p } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as n, createElementBlock as s, normalizeClass as a, withModifiers as m, renderSlot as o, createElementVNode as l, createCommentVNode as c, createTextVNode as h, toDisplayString as f } from "vue";
import "highlight.js";
const g = {}, v = {}, y = {
  en: g,
  fr: v
}, $ = {
  icon: {
    type: String
  },
  route: {
    type: Object
  },
  text: {
    type: String
  },
  type: {
    type: String,
    default: "button"
  }
}, k = {
  name: "VuiButton",
  mixins: [
    d,
    b
  ],
  props: $,
  computed: {
    hasLabel() {
      var t;
      return ((t = this.text) == null ? void 0 : t.length) > 0 || this.$slots.default;
    }
  },
  created() {
    p(y);
  },
  methods: {
    onClick() {
      this.disabled || (this.onAnimate(), this.route && this.$router.push(this.route));
    }
  }
}, C = ["id"], S = ["disabled", "type"], V = /* @__PURE__ */ l("div", { class: "vui-button-loader" }, null, -1);
function B(t, i, w, N, A, e) {
  return n(), s("div", {
    id: t.componentId,
    class: a([
      "vui-button",
      `vui-button--${t.layout}`,
      { "vui-button--flat": t.hasAttribute("flat") },
      { "vui-button--with-label": e.hasLabel },
      { "vui-button--with-icon": t.icon },
      { "vui-button--toggled": t.toggled },
      { "vui-button--animating": !t.disabled && t.animating },
      { "vui-button--loading": !t.disabled && t.loading },
      { "vui-button--disabled": t.disabled },
      t.$props.class
    ]),
    onClick: i[0] || (i[0] = m((...u) => e.onClick && e.onClick(...u), ["stop"]))
  }, [
    o(t.$slots, "prepend"),
    l("button", {
      class: "vui-button-holder",
      disabled: t.disabled,
      type: t.type
    }, [
      t.icon ? (n(), s("i", {
        key: 0,
        class: a(["vui-button-icon", t.icon])
      }, null, 2)) : c("", !0),
      o(t.$slots, "default", {}, () => [
        h(f(t.text), 1)
      ])
    ], 8, S),
    V,
    o(t.$slots, "append")
  ], 10, C);
}
const D = /* @__PURE__ */ r(k, [["render", B]]);
export {
  D as default
};
