import { useI18n as o } from "vue-i18n";
const a = {
  inject: ["$bus"],
  props: {
    class: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: null
    },
    groupId: {
      type: String,
      default: null
    },
    layout: {
      type: String,
      default: "default"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String
    }
  },
  deactivated() {
    this.$bus.off("outclick");
  },
  created() {
    this.uuid = this.newId();
  },
  data() {
    return {
      uuid: null
    };
  },
  computed: {
    componentId() {
      return this.id ? this.id : this.uuid;
    },
    componentGroupId() {
      return this.groupId ? this.groupId : this.uuid;
    },
    hasModelValue() {
      return typeof this.modelValue < "u";
    },
    hasValue() {
      return typeof this.value < "u";
    }
  },
  methods: {
    hasAttribute(t) {
      return Object.keys(this.$attrs).find((e) => e === t);
    },
    hasProp(t) {
      return typeof this[t] < "u";
    },
    newId() {
      return Math.random().toString(36).slice(-6);
    }
  }
}, d = (t) => {
  const e = o();
  return Object.keys(t).forEach((n) => {
    e.mergeLocaleMessage(n, t[n]);
  }), e;
}, i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, u] of e)
    n[r] = u;
  return n;
};
export {
  i as _,
  a as c,
  d as t
};