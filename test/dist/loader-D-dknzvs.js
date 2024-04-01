import { _ as n, c as r, t as l } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { resolveComponent as i, openBlock as p, createBlock as d, normalizeClass as t, withCtx as c, renderSlot as e, createElementVNode as s, toDisplayString as m } from "vue";
import "highlight.js";
import u from "./alert-CL20mS-E.js";
const f = {
  "component.loader.text": "It's loading..."
}, $ = {}, v = {
  en: f,
  fr: $
}, g = {
  icon: {
    type: String,
    default: "fa-sharp fa-solid fa-spinner"
  },
  text: {
    type: String
  }
}, h = {
  name: "VuiLoader",
  components: {
    VuiAlert: u
  },
  mixins: [
    r
  ],
  props: g,
  created() {
    l(v);
  }
}, y = { class: "vui-loader-body" };
function b(o, S, C, V, _, k) {
  const a = i("vui-alert");
  return p(), d(a, {
    id: o.componentId,
    class: t([
      "vui-loader",
      `vui-loader--${o.layout}`,
      { "vui-loader--flat": o.hasAttribute("flat") },
      o.$props.class
    ])
  }, {
    default: c(() => [
      e(o.$slots, "prepend"),
      e(o.$slots, "icon", {}, () => [
        s("i", {
          class: t(["vui-loader-icon", o.icon])
        }, null, 2)
      ]),
      e(o.$slots, "default", {}, () => [
        s("span", y, m(o.text ? o.text : o.$t("component.loader.text")), 1)
      ]),
      e(o.$slots, "append")
    ]),
    _: 3
  }, 8, ["id", "class"]);
}
const z = /* @__PURE__ */ n(h, [["render", b]]);
export {
  z as default
};
