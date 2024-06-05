import { openBlock as l, createElementBlock as s, normalizeClass as $, resolveComponent as _, createBlock as f, normalizeStyle as k, createCommentVNode as T, createTextVNode as v, toDisplayString as C, Fragment as I, renderList as S } from "vue";
const a = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, c] of o)
    e[r] = c;
  return e;
}, b = {
  name: "my-button",
  props: {
    type: {
      type: String,
      default: "default"
    }
  }
};
function x(t, o, e, r, c, n) {
  return l(), s("button", {
    class: $(["my_button--" + e.type])
  }, null, 2);
}
const u = /* @__PURE__ */ a(b, [["render", x]]), B = {
  name: "ToolItem",
  // components:{ToolBarSlot},
  inject: ["toolRoot"],
  data() {
    return {
      renderType: ""
    };
  },
  props: {
    tool: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("selectTool", this.tool);
    }
  },
  created() {
    this.tool.slot ? this.renderType = "slot" : this.renderType = "normal";
  }
};
function g(t, o, e, r, c, n) {
  const i = _("Icon");
  return l(), s("div", {
    class: "toolItem",
    onClick: o[0] || (o[0] = (...m) => n.handleClick && n.handleClick(...m))
  }, [
    e.tool.icon ? (l(), f(i, {
      key: 0,
      type: e.tool.icon,
      style: k("background-color:" + e.tool.icolor + " !important;")
    }, null, 8, ["type", "style"])) : T("", !0),
    v(" " + C(e.tool.title), 1)
  ]);
}
const O = /* @__PURE__ */ a(B, [["render", g]]), j = {
  name: "ToolBar",
  provide() {
    return {
      toolRoot: this
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { ToolItem: O },
  data() {
    return {
      tools: this.data
    };
  },
  methods: {
    reciveSelect(t) {
      this.$emit("selectTool", t), this.$emit("on-click", t);
    }
  }
}, z = { class: "toolbar" };
function A(t, o, e, r, c, n) {
  const i = _("ToolItem");
  return l(), s("div", z, [
    (l(!0), s(I, null, S(c.tools, (m, h) => (l(), f(i, {
      onOnClick: n.reciveSelect,
      onSelectTool: n.reciveSelect,
      tool: m,
      key: h
    }, null, 8, ["onOnClick", "onSelectTool", "tool"]))), 128))
  ]);
}
const d = /* @__PURE__ */ a(j, [["render", A]]), N = {
  name: "my-input"
};
function R(t, o, e, r, c, n) {
  return l(), s("div", null, "input");
}
const p = /* @__PURE__ */ a(N, [["render", R]]), y = function(t, o) {
  y.installed || (t.component(u.name, u), t.component(p.name, p), t.component(d.name, d));
}, D = { install: y, ToolBar: d, Input: p, Button: u };
export {
  D as default,
  y as install
};
