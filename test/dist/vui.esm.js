import { defineAsyncComponent as i } from "vue";
import p from "mitt";
const m = [
  {
    icon: "fa-brands fa-vuejs",
    label: "Alert",
    name: "vui-alert",
    path: "/components/ui/alert/alert.vue",
    type: "ui",
    doc: {
      name: "view-alert",
      path: "/views/component/ui/alert/alert.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Button",
    name: "vui-button",
    path: "/components/html/button/button.vue",
    type: "html",
    doc: {
      name: "view-button",
      path: "/views/component/html/button/button.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Card",
    name: "vui-card",
    path: "/components/ui/card/card.vue",
    type: "ui",
    doc: {
      name: "view-card",
      path: "/views/component/ui/card/card.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Checkbox",
    name: "vui-checkbox",
    path: "/components/html/checkbox/checkbox.vue",
    type: "html",
    doc: {
      name: "view-checkbox",
      path: "/views/component/html/checkbox/checkbox.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Dropdown",
    name: "vui-dropdown",
    path: "/components/ui/dropdown/dropdown.vue",
    type: "ui",
    doc: {
      name: "view-dropdown",
      path: "/views/component/ui/dropdown/dropdown.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Footer",
    name: "vui-footer",
    path: "/components/html/footer/footer.vue",
    type: "html",
    doc: {
      name: "view-footer",
      path: "/views/component/html/footer/footer.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Form",
    name: "vui-form",
    path: "/components/html/form/form.vue",
    type: "html",
    doc: {
      name: "view-form",
      path: "/views/component/html/form/form.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Header",
    name: "vui-header",
    path: "/components/html/header/header.vue",
    type: "html",
    doc: {
      name: "view-header",
      path: "/views/component/html/header/header.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Grid",
    name: "vui-grid",
    path: "/components/layout/grid/grid.vue",
    type: "layout",
    doc: {
      name: "view-grid",
      path: "/views/component/layout/grid/grid.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Grid unit",
    name: "vui-grid-unit",
    path: "/components/layout/unit/unit.vue",
    type: "layout",
    doc: {
      name: "view-grid-unit",
      path: "/views/component/layout/unit/unit.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Input",
    name: "vui-input",
    path: "/components/html/input/input.vue",
    type: "html",
    doc: {
      name: "view-input",
      path: "/views/component/html/input/input.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "List",
    name: "vui-list",
    path: "/components/ui/list/list.vue",
    type: "ui",
    doc: {
      name: "view-list",
      path: "/views/component/ui/list/list.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Loader",
    name: "vui-loader",
    path: "/components/ui/loader/loader.vue",
    type: "ui",
    doc: {
      name: "view-loader",
      path: "/views/component/ui/loader/loader.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Modal",
    name: "vui-modal",
    path: "/components/ui/modal/modal.vue",
    type: "ui",
    doc: {
      name: "view-modal",
      path: "/views/component/ui/modal/modal.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Nav",
    name: "vui-nav",
    path: "/components/ui/nav/nav.vue",
    type: "ui",
    doc: {
      name: "view-nav",
      path: "/views/component/ui/nav/nav.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Page",
    name: "vui-page",
    path: "/components/ui/page/page.vue",
    type: "ui",
    doc: {
      name: "view-page",
      path: "/views/component/ui/page/page.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Pager",
    name: "vui-pager",
    path: "/components/ui/pager/pager.vue",
    type: "ui",
    doc: {
      name: "view-pager",
      path: "/views/component/ui/pager/pager.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Progress",
    name: "vui-progress",
    path: "/components/ui/progress/progress.vue",
    type: "ui",
    doc: {
      name: "view-progress",
      path: "/views/component/ui/progress/progress.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Table",
    name: "vui-table",
    path: "/components/html/table/table.vue",
    type: "html",
    doc: {
      name: "view-table",
      path: "/views/component/html/table/table.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Tabs",
    name: "vui-tabs",
    path: "/components/ui/tabs/tabs.vue",
    type: "ui",
    doc: {
      name: "view-tabs",
      path: "/views/component/ui/tabs/tabs.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Tag",
    name: "vui-tag",
    path: "/components/ui/tag/tag.vue",
    type: "ui",
    doc: {
      name: "view-tag",
      path: "/views/component/ui/tag/tag.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Toggle",
    name: "vui-toggle",
    path: "/components/ui/toggle/toggle.vue",
    type: "ui",
    doc: {
      name: "view-toggle",
      path: "/views/component/ui/toggle/toggle.vue"
    }
  },
  {
    icon: "fa-brands fa-vuejs",
    label: "Tooltip",
    name: "vui-tooltip",
    path: "/components/ui/tooltip/tooltip.vue",
    type: "ui",
    doc: {
      name: "view-tooltip",
      path: "/views/component/ui/tooltip/tooltip.vue"
    }
  }
], s = {
  install(t) {
    t.provide("$bus", p());
    const o = /* @__PURE__ */ Object.assign({
      "/components/html/button/button.vue": () => import("./button-Dall4PZ6.js").then((e) => e.default),
      "/components/html/checkbox/checkbox.vue": () => import("./checkbox-C0XHmyOW.js").then((e) => e.default),
      "/components/html/footer/footer.vue": () => import("./footer-51s_zdw3.js").then((e) => e.default),
      "/components/html/form/form.vue": () => import("./form-BZpgCWGA.js").then((e) => e.default),
      "/components/html/header/header.vue": () => import("./header-DcGPzeye.js").then((e) => e.default),
      "/components/html/input/input.vue": () => import("./input-Dy5fCJhT.js").then((e) => e.default),
      "/components/html/table/table.vue": () => import("./table-DuvV-g2p.js").then((e) => e.default),
      "/components/layout/grid/grid.vue": () => import("./grid-CurHW85o.js").then((e) => e.default),
      "/components/layout/unit/unit.vue": () => import("./unit-Xp1FHc7U.js").then((e) => e.default),
      "/components/ui/alert/alert.vue": () => import("./alert-CL20mS-E.js").then((e) => e.default),
      "/components/ui/card/card.vue": () => import("./card-C6zVjHN0.js").then((e) => e.default),
      "/components/ui/dropdown/dropdown.vue": () => import("./dropdown-BVllpyAN.js").then((e) => e.default),
      "/components/ui/list/list.vue": () => import("./list-BH719nj8.js").then((e) => e.default),
      "/components/ui/loader/loader.vue": () => import("./loader-D-dknzvs.js").then((e) => e.default),
      "/components/ui/modal/modal.vue": () => import("./modal-DkygZY00.js").then((e) => e.default),
      "/components/ui/nav/nav.vue": () => import("./nav-DdIBrD1b.js").then((e) => e.default),
      "/components/ui/page/page.vue": () => import("./page-BRl9PzR6.js").then((e) => e.default),
      "/components/ui/pager/pager.vue": () => import("./pager-CBJ3CiCZ.js").then((e) => e.default),
      "/components/ui/progress/progress.vue": () => import("./progress-DsA7oWSK.js").then((e) => e.default),
      "/components/ui/tabs/tabs.vue": () => import("./tabs-X0RMcNvq.js").then((e) => e.default),
      "/components/ui/tag/tag.vue": () => import("./tag-D4iZf3-b.js").then((e) => e.default),
      "/components/ui/toggle/toggle.vue": () => import("./toggle-BjGdBPSz.js").then((e) => e.default),
      "/components/ui/tooltip/tooltip.vue": () => import("./tooltip-CIoZoCZY.js").then((e) => e.default)
    });
    for (const e in o) {
      const n = e.replace("..", ""), a = m.find((u) => u.path === n);
      a && t.component(
        a.name,
        i(o[e])
      );
    }
  }
};
export {
  s as default
};
