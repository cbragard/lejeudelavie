import { _ as n, c as u, t as r } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as o, createElementBlock as d, normalizeClass as h, withModifiers as c, renderSlot as l, createCommentVNode as g, createElementVNode as i } from "vue";
import "highlight.js";
const m = {}, p = {}, f = {
  en: m,
  fr: p
}, k = {
  checked: {
    default: void 0,
    type: Boolean
  },
  checkedValue: {
    default: void 0,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  },
  modelValue: {
    default: void 0,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  },
  name: {
    type: String
  },
  uncheckedValue: {
    default: void 0,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  },
  value: {
    default: void 0,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  }
}, V = {
  name: "VuiToggle",
  mixins: [
    u
  ],
  props: k,
  emits: ["update:model-value"],
  data() {
    return {
      toggled: !1
    };
  },
  computed: {
    isChecked() {
      return this.hasProp("checked") ? this.checked : this.hasProp("checkedValue") ? this.toggled === this.checkedValue : this.toggled;
    }
  },
  watch: {
    modelValue(e) {
      this.toggled = e;
    },
    value(e) {
      this.toggled = e;
    }
  },
  created() {
    r(f), this.hasModelValue ? this.toggled = this.modelValue : this.hasValue && (this.toggled = this.value);
  },
  methods: {
    onToggle() {
      this.disabled || (this.hasProp("checkedValue") ? this.toggled = this.isChecked ? this.uncheckedValue : this.checkedValue : this.toggled = !this.isChecked, this.$emit("update:model-value", this.toggled));
    }
  }
}, v = ["id", "name"], b = /* @__PURE__ */ i("div", { class: "vui-toggle-slider" }, [
  /* @__PURE__ */ i("div", { class: "vui-toggle-slider-button" })
], -1), y = ["for"];
function B(e, s, C, $, N, t) {
  return o(), d("div", {
    id: e.componentId,
    name: e.componentId,
    class: h([
      "vui-toggle",
      { "vui-toggle--checked": t.isChecked },
      { "vui-toggle--disabled": e.disabled },
      e.$props.class
    ]),
    onClick: s[0] || (s[0] = c((...a) => t.onToggle && t.onToggle(...a), ["stop"]))
  }, [
    l(e.$slots, "prepend"),
    b,
    e.$slots.default ? (o(), d("label", {
      key: 0,
      class: "vui-toggle-label",
      for: e.componentId
    }, [
      l(e.$slots, "default")
    ], 8, y)) : g("", !0),
    l(e.$slots, "append")
  ], 10, v);
}
const I = /* @__PURE__ */ n(V, [["render", B]]);
export {
  I as default
};
