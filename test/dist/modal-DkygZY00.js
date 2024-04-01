import u from "./button-Dall4PZ6.js";
import { _ as h, c as m, t as c } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { resolveComponent as p, openBlock as o, createElementBlock as t, normalizeClass as f, renderSlot as l, createElementVNode as b, toDisplayString as V, createCommentVNode as s, createBlock as v } from "vue";
import "highlight.js";
const y = {
  "component.button.close": "Close"
}, k = {}, g = {
  en: y,
  fr: k
}, C = {
  loading: {
    type: Boolean
  },
  modelValue: {
    default: void 0,
    type: Boolean
  },
  showFooter: {
    type: Boolean
  },
  showFooterClose: {
    type: Boolean
  },
  showHeader: {
    type: Boolean
  },
  showHeaderClose: {
    type: Boolean
  },
  title: {
    type: String
  },
  value: {
    default: void 0,
    type: Boolean
  }
}, w = {
  name: "VuiModal",
  components: {
    VuiButton: u
  },
  mixins: [
    m
  ],
  props: C,
  emits: ["update:model-value"],
  data() {
    return {
      isVisible: !1
    };
  },
  computed: {
    isHeaderVisible() {
      return this.$slots.header || this.showHeader || this.showHeaderClose;
    },
    isFooterVisible() {
      return this.$slots.footer || this.showFooter || this.showFooterClose;
    }
  },
  watch: {
    modelValue(e) {
      this.isVisible = e;
    },
    value(e) {
      this.isVisible = e;
    }
  },
  created() {
    c(g), this.hasModelValue ? this.isVisible = this.modelValue : this.hasValue && (this.isVisible = this.value);
  },
  methods: {
    onToggle() {
      this.disabled || (this.isVisible = !this.isVisible, this.$emit("update:model-value", this.isVisible));
    }
  }
}, B = ["id"], $ = { class: "vui-modal-content" }, H = {
  key: 0,
  class: "vui-modal-content-header"
}, _ = {
  key: 0,
  class: "vui-modal-content-header-title"
}, F = {
  key: 1,
  class: "vui-modal-content-body"
}, T = {
  key: 2,
  class: "vui-modal-content-footer"
};
function S(e, a, E, M, n, i) {
  const r = p("vui-button");
  return n.isVisible ? (o(), t("div", {
    key: 0,
    id: e.componentId,
    class: f(["vui-modal", e.$props.class])
  }, [
    l(e.$slots, "prepend"),
    b("div", $, [
      i.isHeaderVisible ? (o(), t("div", H, [
        e.title ? (o(), t("span", _, V(e.title), 1)) : s("", !0),
        e.showHeaderClose ? (o(), t("i", {
          key: 1,
          class: "fa-regular fa-circle-xmark",
          onClick: a[0] || (a[0] = (...d) => i.onToggle && i.onToggle(...d))
        })) : s("", !0),
        l(e.$slots, "header")
      ])) : s("", !0),
      e.$slots.body || e.$slots.default ? (o(), t("div", F, [
        l(e.$slots, "body"),
        l(e.$slots, "default")
      ])) : s("", !0),
      i.isFooterVisible ? (o(), t("div", T, [
        e.showHeaderClose ? (o(), v(r, {
          key: 0,
          text: e.$t("component.button.close"),
          onClick: i.onToggle
        }, null, 8, ["text", "onClick"])) : s("", !0),
        l(e.$slots, "footer")
      ])) : s("", !0)
    ]),
    l(e.$slots, "append")
  ], 10, B)) : s("", !0);
}
const j = /* @__PURE__ */ h(w, [["render", S]]);
export {
  j as default
};
