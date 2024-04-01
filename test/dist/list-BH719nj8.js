import { a as w } from "./animable-DnFaMPYA.js";
import { _ as L, c as S, t as I } from "./_plugin-vue_export-helper-BSl1dQT6.js";
import { openBlock as n, createElementBlock as o, normalizeClass as h, renderSlot as c, createTextVNode as f, toDisplayString as b, createCommentVNode as m, createElementVNode as v, Fragment as y, renderList as V, withModifiers as C } from "vue";
import "highlight.js";
function p(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function g(e) {
  return function t(i) {
    return arguments.length === 0 || p(i) ? t : e.apply(this, arguments);
  };
}
function j(e) {
  return function t(i, r) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return p(i) ? t : g(function(a) {
          return e(i, a);
        });
      default:
        return p(i) && p(r) ? t : p(i) ? g(function(a) {
          return e(a, r);
        }) : p(r) ? g(function(a) {
          return e(i, a);
        }) : e(i, r);
    }
  };
}
var G = /* @__PURE__ */ j(function(t, i) {
  for (var r = {}, a = {}, s = 0, l = t.length; s < l; )
    a[t[s]] = 1, s += 1;
  for (var u in i)
    a.hasOwnProperty(u) || (r[u] = i[u]);
  return r;
});
const A = {}, B = {}, K = {
  en: A,
  fr: B
}, N = {
  autoclose: {
    type: Boolean,
    default: !0
  },
  disableFiltering: {
    type: Boolean,
    default: !1
  },
  expanded: {
    type: Boolean,
    default: !1
  },
  keyword: {
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
    default: void 0,
    types: [
      Boolean,
      Number,
      Object,
      String
    ]
  },
  selectable: {
    type: Boolean
  },
  title: {
    type: String
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
}, O = {
  name: "VuiList",
  mixins: [
    w,
    S
  ],
  props: N,
  emits: ["update:model-value"],
  data() {
    return {
      last: null,
      open: {},
      selected: null
    };
  },
  computed: {
    hasKeyword() {
      var e;
      return !this.disableFiltering && ((e = this.keyword) == null ? void 0 : e.length);
    },
    list() {
      return this.items.reduce((e, t) => (this.isGroup(t) ? e.push({
        ...t,
        $$id: this.newId(),
        value: t[this.itemValue].reduce((i, r) => !this.hasKeyword || this.match(r) ? [...i, this.mapItem(r, this.newId())] : i, [])
      }) : (!this.hasKeyword || this.match(t)) && e.push(this.mapItem(t, this.newId())), e), []);
    }
  },
  watch: {
    items() {
      this.autoexpand();
    },
    modelValue(e) {
      this.selected = this.mapItem(e);
    },
    value(e) {
      this.selected = this.mapItem(e);
    }
  },
  created() {
    I(K), this.hasModelValue ? this.selected = this.mapItem(this.modelValue) : this.hasValue && (this.selected = this.mapItem(this.value)), this.autoexpand();
  },
  methods: {
    autoexpand() {
      this.open = this.items.reduce((e, t, i) => {
        if (this.isGroup(t)) {
          const a = t[this.itemValue].findIndex((s) => this.isSelected(s));
          if (this.expanded || a > -1)
            return { ...e, [i]: !0 };
        }
        return e;
      }, {});
    },
    isAnimating(e) {
      const { animating: t, last: i } = this;
      return i === e && t;
    },
    isGroup(e) {
      return Array.isArray(e == null ? void 0 : e[this.itemValue]);
    },
    isObject(e) {
      const t = this.itemValue;
      return this.isGroup(e) ? typeof e[t][0] == "object" : typeof e == "object";
    },
    isSelected(e) {
      return !e.disabled && typeof this.selected < "u" ? typeof e == "object" ? this.selected && this.selected[this.itemValue] === e[this.itemValue] : this.selected && this.selected === e : !1;
    },
    isToggled(e) {
      const { last: t, open: i, toggled: r } = this;
      return t === e && i[e] && r;
    },
    match(e) {
      return typeof e == "object" ? `${e[this.itemLabel]}`.includes(this.keyword) : `${e}`.includes(this.keyword);
    },
    mapItem(e, t) {
      const i = typeof e == "object" ? e : { [this.itemLabel]: e, [this.itemValue]: e };
      return t ? { ...i, $$id: t } : i;
    },
    onClick(e) {
      if (!this.disabled && this.selectable) {
        const t = G(["$$id"], e), i = this.isObject(t) && this.hasAttribute("return-object") ? t : t[this.itemValue];
        this.selected = this.isSelected(t) ? null : t, t.route && this.$router.push(t.route), this.$emit("update:model-value", i);
      }
    },
    onToggle(e) {
      this.disabled || (this.last = e, this.autoclose ? this.open = { [e]: !this.open[e] } : this.open[e] = !this.open[e], this.onAnimate(this.open[e]));
    }
  }
}, T = ["id"], $ = {
  key: 0,
  class: "vui-list-title"
}, F = { class: "vui-list-items" }, E = ["onClick"], M = ["onClick"], P = ["onClick"];
function q(e, t, i, r, a, s) {
  return n(), o("div", {
    id: e.componentId,
    class: h([
      "vui-list",
      { "vui-list--flat": e.hasAttribute("flat") },
      e.$props.class
    ])
  }, [
    c(e.$slots, "prepend"),
    e.title ? (n(), o("div", $, [
      c(e.$slots, "placeholder", { item: e.title }, () => [
        f(b(e.title), 1)
      ])
    ])) : m("", !0),
    v("div", F, [
      (n(!0), o(y, null, V(s.list, (l, u) => (n(), o("div", {
        key: l.$$id,
        class: h([
          { "vui-list-items-item": !s.isGroup(l) },
          { "vui-list-items-group-item": s.isGroup(l) }
        ])
      }, [
        s.isGroup(l) ? m("", !0) : (n(), o("div", {
          key: 0,
          class: h([
            { "vui-list-items-item-label": !s.isGroup(l) },
            { "vui-list-items-item-label--selectable": e.selectable },
            { "vui-list-items-item-label--selected": s.isSelected(l) }
          ]),
          onClick: () => s.onClick(l)
        }, [
          l.icon ? (n(), o("i", {
            key: 0,
            class: h([
              "vui-list-items-item-label-icon",
              l.icon
            ])
          }, null, 2)) : m("", !0),
          c(e.$slots, "item", {
            index: u,
            item: l,
            itemLabel: e.itemLabel,
            itemValue: e.itemValue
          }, () => [
            f(b(l[e.itemLabel]), 1)
          ])
        ], 10, E)),
        s.isGroup(l) ? (n(), o(y, { key: 1 }, [
          v("div", {
            class: h([
              "vui-list-items-item-group-label",
              { "vui-list-items-item-group-label--toggled": s.isToggled(u) },
              { "vui-list-items-item-group-label--animating": s.isAnimating(u) },
              { "vui-list-items-item-group-label--open": a.open[u] || s.hasKeyword }
            ]),
            onClick: C(() => s.onToggle(u), ["stop"])
          }, [
            c(e.$slots, "group-item", {
              index: u,
              item: l,
              itemLabel: e.itemLabel,
              itemValue: e.itemValue
            }, () => [
              f(b(l[e.itemLabel]), 1)
            ])
          ], 10, M),
          a.open[u] || s.hasKeyword ? (n(!0), o(y, { key: 0 }, V(l[e.itemValue], (d, k) => (n(), o("div", {
            key: d.$$id,
            class: h([
              "vui-list-items-item-label",
              { "vui-list-items-item-label--selectable": e.selectable },
              { "vui-list-items-item-label--selected": s.isSelected(d) }
            ]),
            onClick: () => s.onClick(d)
          }, [
            d.icon ? (n(), o("i", {
              key: 0,
              class: h([
                "vui-list-items-item-label-icon",
                d.icon
              ])
            }, null, 2)) : m("", !0),
            c(e.$slots, "item", {
              index: k,
              item: d,
              itemLabel: e.itemLabel,
              itemValue: e.itemValue
            }, () => [
              f(b(d[e.itemLabel]), 1)
            ])
          ], 10, P))), 128)) : m("", !0)
        ], 64)) : m("", !0)
      ], 2))), 128))
    ]),
    c(e.$slots, "append")
  ], 10, T);
}
const Q = /* @__PURE__ */ L(O, [["render", q]]);
export {
  Q as default
};
