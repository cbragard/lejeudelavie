import c from "./input-Dy5fCJhT.js";
import b from "./list-BH719nj8.js";
import { a as f } from "./animable-DnFaMPYA.js";
import { _ as g, c as y, t as v } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { resolveComponent as u, openBlock as p, createElementBlock as w, normalizeClass as m, renderSlot as r, createElementVNode as V, withModifiers as k, createVNode as C, createBlock as I, mergeProps as L, createSlots as S, withCtx as s, createCommentVNode as B } from "vue";
import "highlight.js";
const $ = {
  "component.dropdown.placeholder": "Select a value ..."
}, F = {}, N = {
  en: $,
  fr: F
}, A = {
  disableFiltering: {
    type: Boolean,
    default: !1
  },
  items: {
    type: Array,
    required: !0
  },
  itemLabel: {
    type: String,
    default: "label"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    default: void 0,
    types: [
      Boolean,
      Number,
      Object,
      String,
      null
    ]
  },
  placeholder: {
    types: [
      Boolean,
      Number,
      String
    ]
  },
  value: {
    default: void 0,
    types: [
      Boolean,
      Object,
      Number,
      String,
      null
    ]
  }
}, T = {
  name: "VuiDropdown",
  components: {
    VuiInput: c,
    VuiList: b
  },
  mixins: [
    f,
    y
  ],
  props: A,
  emits: ["input", "update:model-value"],
  data() {
    return {
      keyword: null,
      selected: null
    };
  },
  computed: {
    listTitle() {
      return this.selected ? this.placeholderLabel : null;
    },
    placeholderValue() {
      const { itemValue: e, selected: l } = this, i = typeof (l == null ? void 0 : l[e]) < "u" ? l[e] : l;
      return i === null ? this.placeholderLabel : this.labelFromItem(i);
    },
    placeholderLabel() {
      return this.placeholder ? this.placeholder : this.$t("component.dropdown.placeholder");
    }
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
    v(N), this.hasModelValue ? this.selected = this.modelValue : this.hasValue && (this.selected = this.value);
  },
  methods: {
    labelFromChild(e, l, i) {
      const { itemValue: d, itemLabel: t } = this;
      return e[d].reduce((o, a) => a[d] === i ? a[t] : o, l);
    },
    labelFromItem(e) {
      const { itemValue: l, itemLabel: i } = this;
      return this.items.reduce((d, t) => Array.isArray(t[l]) ? this.labelFromChild(t, d, e) : t[l] === e ? t[i] : d, e);
    },
    onClick() {
      this.disabled || this.onAnimate();
    },
    onInput(e) {
      this.$emit("input", e), this.onAnimate(!0), this.keyword = e.target.value ? e.target.value : null;
    },
    onToggle(e) {
      this.selected = e, this.keyword = null, this.blur(), this.$emit("update:model-value", e);
    }
  }
}, U = ["id"];
function j(e, l, i, d, t, o) {
  const a = u("vui-input"), h = u("vui-list");
  return p(), w("div", {
    id: e.componentId,
    class: m(["vui-dropdown", e.$props.class])
  }, [
    r(e.$slots, "prepend"),
    V("div", {
      class: m([
        "vui-dropdown-placeholder",
        { "vui-dropdown-placeholder--toggled": e.toggled },
        { "vui-dropdown-placeholder--animating": e.animating },
        { "vui-dropdown-placeholder--disabled": e.disabled }
      ]),
      onClick: l[0] || (l[0] = k((...n) => o.onClick && o.onClick(...n), ["stop"]))
    }, [
      r(e.$slots, "keyword", { keyword: t.keyword }, () => [
        C(a, {
          value: t.keyword,
          type: "text",
          class: "vui-dropdown-placeholder-label",
          placeholder: o.placeholderValue,
          onInput: o.onInput
        }, null, 8, ["value", "placeholder", "onInput"])
      ])
    ], 2),
    e.toggled ? (p(), I(h, L({
      key: 0,
      modelValue: t.selected,
      "onUpdate:modelValue": l[1] || (l[1] = (n) => t.selected = n)
    }, e.$attrs, {
      class: "vui-dropdown-list",
      "group-id": e.componentGroupId,
      "disable-filtering": e.disableFiltering,
      disabled: e.disabled,
      items: e.items,
      "item-label": e.itemLabel,
      "item-value": e.itemValue,
      keyword: t.keyword,
      selectable: !0,
      title: o.listTitle,
      "onUpdate:modelValue": o.onToggle
    }), S({ _: 2 }, [
      e.$slots.placeholder ? {
        name: "placeholder",
        fn: s(() => [
          r(e.$slots, "placeholder")
        ]),
        key: "0"
      } : void 0,
      e.$slots["group-item"] ? {
        name: "group-item",
        fn: s(() => [
          r(e.$slots, "group-item")
        ]),
        key: "1"
      } : void 0,
      e.$slots.item ? {
        name: "item",
        fn: s(() => [
          r(e.$slots, "item")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["modelValue", "group-id", "disable-filtering", "disabled", "items", "item-label", "item-value", "keyword", "title", "onUpdate:modelValue"])) : B("", !0),
    r(e.$slots, "append")
  ], 10, U);
}
const G = /* @__PURE__ */ g(T, [["render", j]]);
export {
  G as default
};
