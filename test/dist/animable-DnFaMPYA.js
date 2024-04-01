const i = {
  duration: 125
}, s = {
  data() {
    return {
      toggled: !1,
      animating: !1
    };
  },
  created() {
    this.$bus.on("outclick", (t) => {
      this.toggled && this.componentGroupId !== t && this.blur();
    });
  },
  methods: {
    animate() {
      this.animating || (this.animating = !0, setTimeout(() => {
        this.animating = !1;
      }, i.duration));
    },
    blur() {
      this.toggled = !1;
    },
    focus() {
      this.toggled = !0, this.$bus.emit("outclick", this.componentGroupId);
    },
    onAnimate(t = null) {
      this.animate(), t || t === null && !this.toggled ? this.focus() : this.blur();
    }
  }
};
export {
  s as a
};
