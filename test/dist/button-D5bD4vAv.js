"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("./animable-ChJEXlsE.js"),n=require("./_plugin-vue_export-helper-DeDoBcDj.js"),t=require("vue");require("highlight.js");const a={},u={},r={en:a,fr:u},d={icon:{type:String},route:{type:Object},text:{type:String},type:{type:String,default:"button"}},b={name:"VuiButton",mixins:[l.animable,n.composable],props:d,computed:{hasLabel(){var e;return((e=this.text)==null?void 0:e.length)>0||this.$slots.default}},created(){n.translatable(r)},methods:{onClick(){this.disabled||(this.onAnimate(),this.route&&this.$router.push(this.route))}}},p=["id"],c=["disabled","type"],m=t.createElementVNode("div",{class:"vui-button-loader"},null,-1);function h(e,i,v,f,y,o){return t.openBlock(),t.createElementBlock("div",{id:e.componentId,class:t.normalizeClass(["vui-button",`vui-button--${e.layout}`,{"vui-button--flat":e.hasAttribute("flat")},{"vui-button--with-label":o.hasLabel},{"vui-button--with-icon":e.icon},{"vui-button--toggled":e.toggled},{"vui-button--animating":!e.disabled&&e.animating},{"vui-button--loading":!e.disabled&&e.loading},{"vui-button--disabled":e.disabled},e.$props.class]),onClick:i[0]||(i[0]=t.withModifiers((...s)=>o.onClick&&o.onClick(...s),["stop"]))},[t.renderSlot(e.$slots,"prepend"),t.createElementVNode("button",{class:"vui-button-holder",disabled:e.disabled,type:e.type},[e.icon?(t.openBlock(),t.createElementBlock("i",{key:0,class:t.normalizeClass(["vui-button-icon",e.icon])},null,2)):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"default",{},()=>[t.createTextVNode(t.toDisplayString(e.text),1)])],8,c),m,t.renderSlot(e.$slots,"append")],10,p)}const g=n._export_sfc(b,[["render",h]]);exports.default=g;