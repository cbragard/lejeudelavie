import { _ as i, c as n, t as u } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as s, createElementBlock as o, normalizeClass as r, renderSlot as d, createElementVNode as h, createCommentVNode as c } from "vue";
import "highlight.js";
const m = {}, g = {}, p = {
  en: m,
  fr: g
}, f = {
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
    default: void 0,
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
}, k = {
  name: "VuiCheckbox",
  mixins: [
    n
  ],
  props: f,
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
    u(p), this.hasModelValue ? this.toggled = this.modelValue : this.hasValue && (this.toggled = this.value);
  },
  methods: {
    onToggle() {
      this.disabled || (this.hasProp("checkedValue") ? this.toggled = this.isChecked ? this.uncheckedValue : this.checkedValue : this.toggled = !this.isChecked, this.$emit("update:model-value", this.toggled));
    }
  }
}, b = ["id"], V = ["name", "disabled", "required"], v = ["for"];
function y(e, l, C, B, $, t) {
  return s(), o("div", {
    id: e.componentId,
    class: r([
      "vui-checkbox",
      { "vui-checkbox--checked": t.isChecked },
      { "vui-checkbox--disabled": e.disabled },
      e.$props.class
    ]),
    onClick: l[0] || (l[0] = (...a) => t.onToggle && t.onToggle(...a))
  }, [
    d(e.$slots, "prepend"),
    h("input", {
      name: e.name,
      disabled: e.disabled,
      required: e.hasAttribute("required"),
      type: "checkbox"
    }, null, 8, V),
    e.$slots.default ? (s(), o("label", {
      key: 0,
      for: e.componentId
    }, [
      d(e.$slots, "default")
    ], 8, v)) : c("", !0),
    d(e.$slots, "append")
  ], 10, b);
}
const P = /* @__PURE__ */ i(k, [["render", y]]);
export {
  P as default
};
