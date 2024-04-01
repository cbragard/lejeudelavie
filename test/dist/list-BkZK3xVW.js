"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const p=require("./animable-ChJEXlsE.js"),m=require("./_plugin-vue_export-helper-DeDoBcDj.js"),t=require("vue");require("highlight.js");function c(e){return e!=null&&typeof e=="object"&&e["@@functional/placeholder"]===!0}function d(e){return function l(i){return arguments.length===0||c(i)?l:e.apply(this,arguments)}}function f(e){return function l(i,o){switch(arguments.length){case 0:return l;case 1:return c(i)?l:d(function(a){return e(i,a)});default:return c(i)&&c(o)?l:c(i)?d(function(a){return e(a,o)}):c(o)?d(function(a){return e(i,a)}):e(i,o)}}}var b=f(function(l,i){for(var o={},a={},s=0,r=l.length;s<r;)a[l[s]]=1,s+=1;for(var n in i)a.hasOwnProperty(n)||(o[n]=i[n]);return o});const y={},g={},k={en:y,fr:g},V={autoclose:{type:Boolean,default:!0},disableFiltering:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},keyword:{type:String},items:{type:Array,required:!0},itemLabel:{type:String,default:"label"},itemValue:{type:String,default:"value"},modelValue:{default:void 0,types:[Boolean,Number,Object,String]},selectable:{type:Boolean},title:{type:String},value:{default:void 0,types:[Boolean,Number,Object,String]}},v={name:"VuiList",mixins:[p.animable,m.composable],props:V,emits:["update:model-value"],data(){return{last:null,open:{},selected:null}},computed:{hasKeyword(){var e;return!this.disableFiltering&&((e=this.keyword)==null?void 0:e.length)},list(){return this.items.reduce((e,l)=>(this.isGroup(l)?e.push({...l,$$id:this.newId(),value:l[this.itemValue].reduce((i,o)=>!this.hasKeyword||this.match(o)?[...i,this.mapItem(o,this.newId())]:i,[])}):(!this.hasKeyword||this.match(l))&&e.push(this.mapItem(l,this.newId())),e),[])}},watch:{items(){this.autoexpand()},modelValue(e){this.selected=this.mapItem(e)},value(e){this.selected=this.mapItem(e)}},created(){m.translatable(k),this.hasModelValue?this.selected=this.mapItem(this.modelValue):this.hasValue&&(this.selected=this.mapItem(this.value)),this.autoexpand()},methods:{autoexpand(){this.open=this.items.reduce((e,l,i)=>{if(this.isGroup(l)){const a=l[this.itemValue].findIndex(s=>this.isSelected(s));if(this.expanded||a>-1)return{...e,[i]:!0}}return e},{})},isAnimating(e){const{animating:l,last:i}=this;return i===e&&l},isGroup(e){return Array.isArray(e==null?void 0:e[this.itemValue])},isObject(e){const l=this.itemValue;return this.isGroup(e)?typeof e[l][0]=="object":typeof e=="object"},isSelected(e){return!e.disabled&&typeof this.selected<"u"?typeof e=="object"?this.selected&&this.selected[this.itemValue]===e[this.itemValue]:this.selected&&this.selected===e:!1},isToggled(e){const{last:l,open:i,toggled:o}=this;return l===e&&i[e]&&o},match(e){return typeof e=="object"?`${e[this.itemLabel]}`.includes(this.keyword):`${e}`.includes(this.keyword)},mapItem(e,l){const i=typeof e=="object"?e:{[this.itemLabel]:e,[this.itemValue]:e};return l?{...i,$$id:l}:i},onClick(e){if(!this.disabled&&this.selectable){const l=b(["$$id"],e),i=this.isObject(l)&&this.hasAttribute("return-object")?l:l[this.itemValue];this.selected=this.isSelected(l)?null:l,l.route&&this.$router.push(l.route),this.$emit("update:model-value",i)}},onToggle(e){this.disabled||(this.last=e,this.autoclose?this.open={[e]:!this.open[e]}:this.open[e]=!this.open[e],this.onAnimate(this.open[e]))}}},B=["id"],S={key:0,class:"vui-list-title"},C={class:"vui-list-items"},w=["onClick"],L=["onClick"],N=["onClick"];function E(e,l,i,o,a,s){return t.openBlock(),t.createElementBlock("div",{id:e.componentId,class:t.normalizeClass(["vui-list",{"vui-list--flat":e.hasAttribute("flat")},e.$props.class])},[t.renderSlot(e.$slots,"prepend"),e.title?(t.openBlock(),t.createElementBlock("div",S,[t.renderSlot(e.$slots,"placeholder",{item:e.title},()=>[t.createTextVNode(t.toDisplayString(e.title),1)])])):t.createCommentVNode("",!0),t.createElementVNode("div",C,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(s.list,(r,n)=>(t.openBlock(),t.createElementBlock("div",{key:r.$$id,class:t.normalizeClass([{"vui-list-items-item":!s.isGroup(r)},{"vui-list-items-group-item":s.isGroup(r)}])},[s.isGroup(r)?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("div",{key:0,class:t.normalizeClass([{"vui-list-items-item-label":!s.isGroup(r)},{"vui-list-items-item-label--selectable":e.selectable},{"vui-list-items-item-label--selected":s.isSelected(r)}]),onClick:()=>s.onClick(r)},[r.icon?(t.openBlock(),t.createElementBlock("i",{key:0,class:t.normalizeClass(["vui-list-items-item-label-icon",r.icon])},null,2)):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"item",{index:n,item:r,itemLabel:e.itemLabel,itemValue:e.itemValue},()=>[t.createTextVNode(t.toDisplayString(r[e.itemLabel]),1)])],10,w)),s.isGroup(r)?(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.createElementVNode("div",{class:t.normalizeClass(["vui-list-items-item-group-label",{"vui-list-items-item-group-label--toggled":s.isToggled(n)},{"vui-list-items-item-group-label--animating":s.isAnimating(n)},{"vui-list-items-item-group-label--open":a.open[n]||s.hasKeyword}]),onClick:t.withModifiers(()=>s.onToggle(n),["stop"])},[t.renderSlot(e.$slots,"group-item",{index:n,item:r,itemLabel:e.itemLabel,itemValue:e.itemValue},()=>[t.createTextVNode(t.toDisplayString(r[e.itemLabel]),1)])],10,L),a.open[n]||s.hasKeyword?(t.openBlock(!0),t.createElementBlock(t.Fragment,{key:0},t.renderList(r[e.itemValue],(u,h)=>(t.openBlock(),t.createElementBlock("div",{key:u.$$id,class:t.normalizeClass(["vui-list-items-item-label",{"vui-list-items-item-label--selectable":e.selectable},{"vui-list-items-item-label--selected":s.isSelected(u)}]),onClick:()=>s.onClick(u)},[u.icon?(t.openBlock(),t.createElementBlock("i",{key:0,class:t.normalizeClass(["vui-list-items-item-label-icon",u.icon])},null,2)):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"item",{index:h,item:u,itemLabel:e.itemLabel,itemValue:e.itemValue},()=>[t.createTextVNode(t.toDisplayString(u[e.itemLabel]),1)])],10,N))),128)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],2))),128))]),t.renderSlot(e.$slots,"append")],10,B)}const I=m._export_sfc(v,[["render",E]]);exports.default=I;