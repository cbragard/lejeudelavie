import { _ as p, c as v, t as b } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as s, createElementBlock as i, normalizeClass as a, renderSlot as l, createElementVNode as o, Fragment as n, renderList as d, createCommentVNode as m, toDisplayString as f } from "vue";
import "highlight.js";
const V = {}, g = {}, y = {
  en: V,
  fr: g
}, $ = {
  icon: {
    type: String
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
    type: String
  },
  value: {
    type: String
  }
}, k = {
  name: "VuiTabs",
  mixins: [
    v
  ],
  props: $,
  emits: ["update:model-value"],
  data() {
    return {
      active: null
    };
  },
  computed: {
    tabs() {
      return this.items.map((e) => ({
        ...e,
        $$id: this.newId()
      }));
    }
  },
  watch: {
    modelValue(e) {
      this.active = e;
    },
    value(e) {
      this.active = e;
    }
  },
  created() {
    var e;
    if (b(y), this.hasModelValue)
      this.active = this.modelValue;
    else if (this.hasValue)
      this.active = this.value;
    else if ((e = this.items) != null && e.length) {
      const r = this.items[0];
      this.active = r[this.itemValue];
    }
  },
  methods: {
    toggle(e) {
      this.disabled || (this.active = e, this.$emit("update:model-value", this.active));
    }
  }
}, S = ["id"], _ = { class: "vui-tabs-tabs" }, C = ["onClick"], w = { class: "label" }, L = { class: "vui-tabs-slots" };
function B(e, r, E, I, u, c) {
  return s(), i("div", {
    id: e.componentId,
    class: a(["vui-tabs", e.$props.class])
  }, [
    l(e.$slots, "prepend"),
    o("div", _, [
      (s(!0), i(n, null, d(c.tabs, (t) => (s(), i("div", {
        key: t.$$id,
        class: a([
          "vui-tabs-tabs-tab",
          { "vui-tabs-tabs-tab--with-icon": e.icon },
          { "vui-tabs-tabs-tab--active": t[e.itemValue] === u.active }
        ]),
        onClick: () => c.toggle(t[e.itemValue])
      }, [
        e.icon ? (s(), i("i", {
          key: 0,
          class: a(["vui-tabs-tabs-tab-icon", e.icon])
        }, null, 2)) : m("", !0),
        o("span", w, f(t[e.itemLabel]), 1)
      ], 10, C))), 128))
    ]),
    o("div", L, [
      (s(!0), i(n, null, d(e.items, (t, h) => (s(), i(n, {
        key: `slot-${t.$$id}`
      }, [
        t[e.itemValue] === u.active ? l(e.$slots, t[e.itemValue], {
          key: 0,
          index: h
        }) : m("", !0)
      ], 64))), 128))
    ]),
    l(e.$slots, "append")
  ], 10, S);
}
const A = /* @__PURE__ */ p(k, [["render", B]]);
export {
  A as default
};
