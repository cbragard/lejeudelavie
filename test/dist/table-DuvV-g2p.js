import { a as y } from "./animable-DnFaMPYA.js";
import { _ as V, c as L, t as g } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as i, createElementBlock as o, normalizeClass as u, renderSlot as s, createElementVNode as t, Fragment as d, renderList as p, toDisplayString as f } from "vue";
import "highlight.js";
const h = {
  headers: {
    type: Array,
    default: () => []
  },
  itemLabel: {
    type: String,
    default: "label"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  items: {
    type: Array,
    default: () => [],
    required: !0
  }
}, k = {}, I = {}, S = {
  en: k,
  fr: I
}, v = {
  name: "VuiTable",
  mixins: [
    y,
    L
  ],
  props: h,
  created() {
    g(S);
  },
  methods: {
    leaf(e, b) {
      return b.split(".").reduce((n, m) => n && n[m] ? n[m] : null, e);
    }
  }
}, A = ["id"], B = ["data-label"];
function E(e, b, n, m, q, c) {
  return i(), o("div", {
    id: e.componentId,
    class: u(["vui-table", e.$props.class])
  }, [
    s(e.$slots, "prepend"),
    t("table", null, [
      t("thead", null, [
        t("tr", null, [
          (i(!0), o(d, null, p(e.headers, (l, a) => s(e.$slots, `header.${l[e.itemValue]}`, {
            key: `table-${e.componentId}-header--${a}`,
            item: l,
            itemLabel: e.itemLabel,
            itemValue: e.itemValue,
            index: a
          }, () => [
            t("th", {
              class: u(l.class)
            }, f(l[e.itemLabel]), 3)
          ])), 128))
        ])
      ]),
      t("tbody", null, [
        (i(!0), o(d, null, p(e.items, (l, a) => s(e.$slots, "default", {
          key: `table-${e.componentId}-item--${a}`,
          index: a,
          item: l,
          itemLabel: e.itemLabel,
          itemValue: e.itemValue
        }, () => [
          t("tr", null, [
            (i(!0), o(d, null, p(e.headers, (r, $) => s(e.$slots, `item.${r[e.itemValue]}`, {
              key: `table-${e.componentId}-item-td--${$}`,
              index: $,
              item: l,
              itemLabel: e.itemLabel,
              itemValue: e.itemValue
            }, () => [
              t("td", {
                "data-label": r.label,
                class: u(r.class)
              }, f(c.leaf(l, r.value)), 11, B)
            ])), 128))
          ])
        ])), 128))
      ])
    ]),
    s(e.$slots, "append")
  ], 10, A);
}
const N = /* @__PURE__ */ V(v, [["render", E]]);
export {
  N as default
};
