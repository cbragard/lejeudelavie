import V from "./list-BH719nj8.js";
import { _ as y, c as k, t as g } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { resolveComponent as m, openBlock as s, createElementBlock as i, normalizeClass as c, renderSlot as n, createVNode as N, withCtx as p, createCommentVNode as r, toDisplayString as f, createBlock as B, createTextVNode as C } from "vue";
import "highlight.js";
const S = {}, _ = {}, $ = {
  en: S,
  fr: _
}, w = {
  items: {
    type: Array,
    required: !0
  },
  itemLabel: {
    type: String
  },
  itemValue: {
    type: String
  },
  modelValue: {
    default: void 0,
    types: [
      Boolean,
      Number,
      Object,
      String
    ]
  },
  showIcons: {
    type: Boolean,
    default: !0
  },
  value: {
    default: void 0,
    types: [
      Boolean,
      Number,
      Object,
      String
    ]
  }
}, I = {
  name: "VuiNav",
  components: {
    VuiList: V
  },
  mixins: [
    k
  ],
  props: w,
  emits: ["update:model-value"],
  data() {
    return {
      selected: null
    };
  },
  watch: {
    modelValue(e) {
      this.selected = e;
    },
    value(e) {
      this.selected = e;
    }
  },
  created() {
    g($), this.hasModelValue ? this.selected = this.modelValue : this.hasValue && (this.selected = this.value);
  },
  methods: {
    onClick(e) {
      this.disabled || this.$emit("update:model-value", e);
    }
  }
}, j = ["id"], A = {
  key: 1,
  class: "vui-list-items-item-label-text"
};
function L(e, d, O, U, u, v) {
  const h = m("router-link"), b = m("vui-list");
  return s(), i("div", {
    id: e.componentId,
    class: c([
      "vui-nav",
      { "vui-nav--flat": e.hasAttribute("flat") },
      e.$props.class
    ])
  }, [
    n(e.$slots, "prepend"),
    N(b, {
      modelValue: u.selected,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (l) => u.selected = l),
        v.onClick
      ],
      class: "vui-nav-list",
      "group-id": e.componentGroupId,
      disabled: e.disabled,
      "item-label": e.itemLabel,
      "item-value": e.itemValue,
      items: e.items,
      selectable: !e.disabled
    }, {
      item: p(({
        index: l,
        item: t,
        itemValue: o,
        itemLabel: a
      }) => [
        n(e.$slots, "item", {
          index: l,
          item: t,
          itemLabel: a,
          itemValue: o
        }, () => [
          e.showIcons ? (s(), i("i", {
            key: 0,
            class: c([
              "fa-solid",
              { "fa-location-dot": !l },
              { "fa-chevron-right": l }
            ])
          }, null, 2)) : r("", !0),
          t.route ? r("", !0) : (s(), i("span", A, f(o ? t[a] : t), 1)),
          t.route ? (s(), B(h, {
            key: 2,
            to: t.route,
            class: "vui-list-items-item-label-text"
          }, {
            default: p(() => [
              C(f(o ? t[a] : t), 1)
            ]),
            _: 2
          }, 1032, ["to"])) : r("", !0)
        ])
      ]),
      _: 3
    }, 8, ["modelValue", "group-id", "disabled", "item-label", "item-value", "items", "selectable", "onUpdate:modelValue"]),
    n(e.$slots, "append")
  ], 10, j);
}
const G = /* @__PURE__ */ y(I, [["render", L]]);
export {
  G as default
};
