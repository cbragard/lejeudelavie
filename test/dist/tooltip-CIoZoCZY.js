import { l as r } from "./index-BYlXFZ1a.js";
import { _ as h, c as d, t as p } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as o, createElementBlock as s, normalizeClass as n, normalizeStyle as c, createElementVNode as u, createCommentVNode as l, renderSlot as f, Fragment as m, createTextVNode as g, toDisplayString as y } from "vue";
import "highlight.js";
const w = {
  icon: {
    type: String
  },
  position: {
    type: String,
    default: "right"
  },
  text: {
    type: String
  },
  modelValue: {
    default: void 0,
    type: Boolean
  },
  value: {
    default: void 0,
    type: Boolean
  }
}, $ = {
  name: "VuiTooltip",
  mixins: [
    d
  ],
  props: w,
  emits: ["update:model-value"],
  data() {
    return {
      dimension: {
        content: {},
        holder: {}
      },
      show: !1
    };
  },
  computed: {
    display() {
      return this.show ? "block" : "none";
    },
    left() {
      const { content: t, holder: e } = this.dimension;
      switch (this.position) {
        case "left":
          return e.left - (t.width + 15);
        case "bottom":
        case "top": {
          const a = t.width - e.width;
          return e.left - a / 2;
        }
        case "right":
        default:
          return e.right + 15;
      }
    },
    top() {
      const { content: t, holder: e } = this.dimension;
      switch (this.position) {
        case "bottom":
          return e.top + e.height + 15;
        case "top":
          return e.top - t.height - 15;
        case "left":
        case "right":
        default:
          return e.top - e.height / 2;
      }
    }
  },
  watch: {
    async modelValue(t) {
      this.show = t, t && (await this.$nextTick(), this.setPosition());
    },
    async value(t) {
      this.show = t, t && (await this.$nextTick(), this.setPosition());
    }
  },
  created() {
    p(r), this.hasModelValue && (this.show = this.modelValue), this.hasValue && (this.show = this.value), this.$bus.on("outclick", () => {
      this.disabled || (this.show = !1, this.$emit("update:model-value", this.show));
    });
  },
  methods: {
    setPosition() {
      this.dimension.content = this.$refs.tooltip.getBoundingClientRect(), this.dimension.holder = this.$parent.$el.getBoundingClientRect();
    }
  }
}, v = ["id"];
function k(t, e, a, V, b, i) {
  return o(), s("div", {
    id: t.componentId,
    ref: "tooltip",
    class: n([
      "vui-tooltip",
      { "vui-tooltip--with-icon": t.icon },
      t.$props.class
    ]),
    style: c({
      position: "fixed",
      display: i.display,
      top: `${i.top}px`,
      left: `${i.left}px`
    })
  }, [
    u("i", {
      class: n([
        "vui-tooltip-pointer",
        `vui-tooltip-pointer--${t.position}`
      ])
    }, null, 2),
    t.icon ? (o(), s("i", {
      key: 0,
      class: n(["vui-tooltip-icon", t.icon])
    }, null, 2)) : l("", !0),
    t.$slots.default ? f(t.$slots, "default", { key: 1 }) : l("", !0),
    t.text ? (o(), s(m, { key: 2 }, [
      g(y(t.text), 1)
    ], 64)) : l("", !0)
  ], 14, v);
}
const x = /* @__PURE__ */ h($, [["render", k]]);
export {
  x as default
};
