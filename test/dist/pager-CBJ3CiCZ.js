import h from "./nav-DdIBrD1b.js";
import f from "./button-Dall4PZ6.js";
import { a as b } from "./animable-DnFaMPYA.js";
import { _ as v, c as V, t as k } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { resolveComponent as u, openBlock as C, createElementBlock as N, normalizeClass as r, renderSlot as a, createElementVNode as d, createVNode as i, mergeProps as l } from "vue";
import "highlight.js";
const P = {
  "page.component.pager.doc.prop.count": "Total number of paginated items",
  "page.component.pager.doc.prop.disabled": "Binds the disabled state condition",
  "page.component.pager.doc.prop.loading": "Binds the loading state",
  "page.component.pager.doc.prop.size": "Number of paginated items per page",
  "page.component.pager.doc.prop.value": "Selected item in the pager",
  "page.component.pager.doc.prop.v-model": "Binds the model changes of pager",
  "page.component.pager.doc.slot.first": "Slot for first page button",
  "page.component.pager.doc.slot.last": "Slot for last page button",
  "page.component.pager.doc.slot.previous": "Slot for previous page button",
  "page.component.pager.doc.slot.next": "Slot for next page button"
}, L = {}, B = {
  en: P,
  fr: L
}, S = {
  count: {
    type: Number,
    default: 0
  },
  modelValue: {
    default: void 0,
    type: Number
  },
  value: {
    default: void 0,
    type: Number
  },
  size: {
    type: Number,
    default: 25
  }
}, y = {
  name: "VuiPager",
  components: {
    VuiButton: f,
    VuiNav: h
  },
  mixins: [
    b,
    V
  ],
  props: S,
  emits: ["update:model-value"],
  data() {
    return {
      page: 1
    };
  },
  computed: {
    isLast() {
      return this.page === this.last;
    },
    last() {
      return Math.ceil(this.count / this.size);
    },
    pages() {
      if (this.last) {
        const e = [...Array.from({ length: this.last }, (g, s) => s + 1)], o = e.slice(0, this.page), n = e.slice(this.page, e.length);
        return [
          ...o.slice(-(n.length > 2 ? 2 : 2 + (2 - n.length))),
          ...n.slice(0, o.length > 2 ? 2 : 2 + (2 - o.length))
        ];
      }
      return [];
    }
  },
  watch: {
    modelValue(e) {
      this.page = e;
    },
    value(e) {
      this.page = e;
    }
  },
  created() {
    k(B), this.hasModelValue ? this.page = this.modelValue : this.hasValue && (this.page = this.value);
  },
  methods: {
    onFirst() {
      !this.disabled && this.page > 1 && (this.page = 1, this.onPage());
    },
    onLast() {
      !this.disabled && !this.isLast && (this.page = this.last, this.onPage());
    },
    onNext() {
      !this.disabled && !this.isLast && (this.page++, this.onPage());
    },
    onPrevious() {
      !this.disabled && this.page > 1 && (this.page--, this.onPage());
    },
    onPage() {
      this.$emit("update:model-value", this.page);
    }
  }
}, z = ["id"], U = { class: "vui-pager-content" };
function _(e, o, n, g, s, t) {
  const p = u("vui-button"), c = u("vui-nav");
  return C(), N("div", {
    id: e.componentId,
    class: r(["vui-pager", e.$props.class])
  }, [
    a(e.$slots, "prepend"),
    d("div", U, [
      a(e.$slots, "first", {}, () => [
        i(p, l(e.$attrs, {
          disabled: s.page === 1,
          icon: "fa-solid fa-angles-left",
          class: "vui-button--first",
          onClick: t.onFirst
        }), null, 16, ["disabled", "onClick"])
      ]),
      a(e.$slots, "previous", {}, () => [
        i(p, l(e.$attrs, {
          disabled: s.page === 1,
          icon: "fa-solid fa-chevron-left",
          class: "vui-button--previous",
          onClick: t.onPrevious
        }), null, 16, ["disabled", "onClick"])
      ]),
      a(e.$slots, "pages", {}, () => [
        d("div", {
          class: r([
            "ellipse",
            { visible: t.last > 4 && s.page + 2 > 4 }
          ])
        }, " ... ", 2),
        i(c, l({
          modelValue: s.page,
          "onUpdate:modelValue": o[0] || (o[0] = (m) => s.page = m)
        }, e.$attrs, {
          flat: e.hasAttribute("flat"),
          items: t.pages,
          "show-icons": !1,
          "onUpdate:modelValue": t.onPage
        }), null, 16, ["modelValue", "flat", "items", "onUpdate:modelValue"]),
        d("div", {
          class: r([
            "ellipse",
            { visible: t.last > 4 && s.page + 2 < t.last }
          ])
        }, " ... ", 2)
      ]),
      a(e.$slots, "next", {}, () => [
        i(p, l(e.$attrs, {
          disabled: t.isLast,
          icon: "fa-solid fa-chevron-right",
          class: "vui-button--next",
          onClick: t.onNext
        }), null, 16, ["disabled", "onClick"])
      ]),
      a(e.$slots, "previous", {}, () => [
        i(p, l(e.$attrs, {
          disabled: t.isLast,
          icon: "fa-solid fa-angles-right",
          class: "vui-button--last",
          onClick: t.onLast
        }), null, 16, ["disabled", "onClick"])
      ])
    ]),
    a(e.$slots, "append")
  ], 10, z);
}
const T = /* @__PURE__ */ v(y, [["render", _]]);
export {
  T as default
};
