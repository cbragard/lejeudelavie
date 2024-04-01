import { _ as u, c as s, t as o } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as d, createElementBlock as r, normalizeClass as i, renderSlot as a, createElementVNode as m } from "vue";
import "highlight.js";
const h = {
  "component.input.placeholder": "Type a value ..."
}, c = {}, y = {
  en: h,
  fr: c
}, f = {
  modelValue: {
    default: void 0,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  },
  maxlength: {
    type: Number
  },
  name: {
    type: String
  },
  placeholder: {
    default: null,
    types: [
      Boolean,
      String,
      Number,
      null
    ]
  },
  type: {
    type: String,
    default: "text"
  },
  value: {
    default: void 0,
    types: [
      Boolean,
      Number,
      String,
      null
    ]
  }
}, b = {
  name: "VuiInput",
  mixins: [
    s
  ],
  props: f,
  emits: ["input", "update:model-value"],
  data() {
    return {
      typed: null
    };
  },
  computed: {
    placeholderValue() {
      return this.placeholder ? this.placeholder : this.$t("component.input.placeholder");
    }
  },
  watch: {
    value(e) {
      this.typed = e;
    },
    modelValue(e) {
      this.typed = e;
    }
  },
  created() {
    o(y), this.hasModelValue ? this.typed = this.modelValue : this.hasValue && (this.typed = this.value);
  },
  methods: {
    onInput(e) {
      this.typed = this.type === "number" ? e.target.valueAsNumber : e.target.value, this.$emit("input", e), this.$emit("update:model-value", this.typed);
    }
  }
}, g = ["id"], v = ["value", "disabled", "maxlength", "name", "placeholder", "required", "type"];
function V(e, l, I, N, n, t) {
  return d(), r("div", {
    id: e.componentId,
    class: i(["vui-input", e.$props.class])
  }, [
    a(e.$slots, "prepend"),
    m("input", {
      value: n.typed,
      disabled: e.disabled,
      maxlength: e.maxlength,
      name: e.name,
      placeholder: t.placeholderValue,
      required: e.hasAttribute("required"),
      type: e.type,
      onInput: l[0] || (l[0] = (...p) => t.onInput && t.onInput(...p))
    }, null, 40, v),
    a(e.$slots, "append")
  ], 10, g);
}
const q = /* @__PURE__ */ u(b, [["render", V]]);
export {
  q as default
};
