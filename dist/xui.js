import { ref as v, openBlock as n, createElementBlock as i, Fragment as f, createElementVNode as e, toDisplayString as m, pushScopeId as b, popScopeId as g, createTextVNode as r, h as T, resolveComponent as h, createBlock as k, normalizeStyle as I, createCommentVNode as S, renderList as C } from "vue";
const y = (t, l) => {
  const o = t.__vccOpts || t;
  for (const [s, c] of l)
    o[s] = c;
  return o;
}, d = (t) => (b("data-v-4b8d1567"), t = t(), g(), t), V = { class: "card" }, j = /* @__PURE__ */ d(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ r(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ r(" to test HMR ")
], -1)), x = /* @__PURE__ */ d(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ r(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ r(", the official Vue + Vite starter ")
], -1)), $ = /* @__PURE__ */ d(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ r(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ r(" in your IDE for a better DX ")
], -1)), B = /* @__PURE__ */ d(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), O = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(t) {
    const l = v(0);
    return (o, s) => (n(), i(f, null, [
      e("h1", null, m(t.msg), 1),
      e("div", V, [
        e("button", {
          type: "button",
          onClick: s[0] || (s[0] = (c) => l.value++)
        }, "count is " + m(l.value), 1),
        j
      ]),
      x,
      $,
      B
    ], 64));
  }
}, R = /* @__PURE__ */ y(O, [["__scopeId", "data-v-4b8d1567"]]), E = {
  name: "ToolSlot",
  inject: ["toolRoot"],
  props: {
    tool: {
      type: Object,
      default: null
    }
  },
  render() {
    return T(
      "div",
      {
        class: {
          toolItem: !1
        },
        style: {
          display: "inline-block"
        }
      },
      this.toolRoot.$slots[this.tool.slot]({
        tool: this.tool
      })
    );
  }
}, H = {
  components: { ToolBarSlot: E },
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
function D(t, l, o, s, c, a) {
  const u = h("tool-bar-slot"), _ = h("Icon");
  return c.renderType === "slot" ? (n(), k(u, {
    key: 0,
    tool: o.tool
  }, null, 8, ["tool"])) : (n(), i("div", {
    key: 1,
    class: "toolItem",
    onClick: l[0] || (l[0] = (...p) => a.handleClick && a.handleClick(...p))
  }, [
    o.tool.icon ? (n(), k(_, {
      key: 0,
      type: o.tool.icon,
      style: I("background-color:" + o.tool.icolor + " !important;")
    }, null, 8, ["type", "style"])) : S("", !0),
    r(" " + m(o.tool.title), 1)
  ]));
}
const N = /* @__PURE__ */ y(H, [["render", D]]), W = {
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
  components: { ToolItem: N },
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
}, q = { class: "toolbar" };
function w(t, l, o, s, c, a) {
  const u = h("ToolItem");
  return n(), i("div", q, [
    (n(!0), i(f, null, C(c.tools, (_, p) => (n(), k(u, {
      onOnClick: a.reciveSelect,
      onSelectTool: a.reciveSelect,
      tool: _,
      key: p
    }, null, 8, ["onOnClick", "onSelectTool", "tool"]))), 128))
  ]);
}
const z = /* @__PURE__ */ y(W, [["render", w]]), F = {
  HelloWorld: R,
  ToolBar: z
};
export {
  F as default
};
