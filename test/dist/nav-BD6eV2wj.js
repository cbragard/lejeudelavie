"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("./list-BkZK3xVW.js"),i=require("./_plugin-vue_export-helper-DeDoBcDj.js"),e=require("vue");require("highlight.js");const p={},v={},f={en:p,fr:v},h={items:{type:Array,required:!0},itemLabel:{type:String},itemValue:{type:String},modelValue:{default:void 0,types:[Boolean,Number,Object,String]},showIcons:{type:Boolean,default:!0},value:{default:void 0,types:[Boolean,Number,Object,String]}},b={name:"VuiNav",components:{VuiList:m.default},mixins:[i.composable],props:h,emits:["update:model-value"],data(){return{selected:null}},watch:{modelValue(t){this.selected=t},value(t){this.selected=t}},created(){i.translatable(f),this.hasModelValue?this.selected=this.modelValue:this.hasValue&&(this.selected=this.value)},methods:{onClick(t){this.disabled||this.$emit("update:model-value",t)}}},V=["id"],k={key:1,class:"vui-list-items-item-label-text"};function y(t,n,B,C,r,u){const d=e.resolveComponent("router-link"),c=e.resolveComponent("vui-list");return e.openBlock(),e.createElementBlock("div",{id:t.componentId,class:e.normalizeClass(["vui-nav",{"vui-nav--flat":t.hasAttribute("flat")},t.$props.class])},[e.renderSlot(t.$slots,"prepend"),e.createVNode(c,{modelValue:r.selected,"onUpdate:modelValue":[n[0]||(n[0]=o=>r.selected=o),u.onClick],class:"vui-nav-list","group-id":t.componentGroupId,disabled:t.disabled,"item-label":t.itemLabel,"item-value":t.itemValue,items:t.items,selectable:!t.disabled},{item:e.withCtx(({index:o,item:l,itemValue:s,itemLabel:a})=>[e.renderSlot(t.$slots,"item",{index:o,item:l,itemLabel:a,itemValue:s},()=>[t.showIcons?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(["fa-solid",{"fa-location-dot":!o},{"fa-chevron-right":o}])},null,2)):e.createCommentVNode("",!0),l.route?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("span",k,e.toDisplayString(s?l[a]:l),1)),l.route?(e.openBlock(),e.createBlock(d,{key:2,to:l.route,class:"vui-list-items-item-label-text"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(s?l[a]:l),1)]),_:2},1032,["to"])):e.createCommentVNode("",!0)])]),_:3},8,["modelValue","group-id","disabled","item-label","item-value","items","selectable","onUpdate:modelValue"]),e.renderSlot(t.$slots,"append")],10,V)}const g=i._export_sfc(b,[["render",y]]);exports.default=g;