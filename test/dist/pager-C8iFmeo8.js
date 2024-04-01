"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("./nav-BD6eV2wj.js"),g=require("./button-D5bD4vAv.js"),c=require("./animable-ChJEXlsE.js"),i=require("./_plugin-vue_export-helper-DeDoBcDj.js"),e=require("vue");require("highlight.js");const m={"page.component.pager.doc.prop.count":"Total number of paginated items","page.component.pager.doc.prop.disabled":"Binds the disabled state condition","page.component.pager.doc.prop.loading":"Binds the loading state","page.component.pager.doc.prop.size":"Number of paginated items per page","page.component.pager.doc.prop.value":"Selected item in the pager","page.component.pager.doc.prop.v-model":"Binds the model changes of pager","page.component.pager.doc.slot.first":"Slot for first page button","page.component.pager.doc.slot.last":"Slot for last page button","page.component.pager.doc.slot.previous":"Slot for previous page button","page.component.pager.doc.slot.next":"Slot for next page button"},h={},f={en:m,fr:h},b={count:{type:Number,default:0},modelValue:{default:void 0,type:Number},value:{default:void 0,type:Number},size:{type:Number,default:25}},v={name:"VuiPager",components:{VuiButton:g.default,VuiNav:u.default},mixins:[c.animable,i.composable],props:b,emits:["update:model-value"],data(){return{page:1}},computed:{isLast(){return this.page===this.last},last(){return Math.ceil(this.count/this.size)},pages(){if(this.last){const t=[...Array.from({length:this.last},(r,o)=>o+1)],a=t.slice(0,this.page),l=t.slice(this.page,t.length);return[...a.slice(-(l.length>2?2:2+(2-l.length))),...l.slice(0,a.length>2?2:2+(2-a.length))]}return[]}},watch:{modelValue(t){this.page=t},value(t){this.page=t}},created(){i.translatable(f),this.hasModelValue?this.page=this.modelValue:this.hasValue&&(this.page=this.value)},methods:{onFirst(){!this.disabled&&this.page>1&&(this.page=1,this.onPage())},onLast(){!this.disabled&&!this.isLast&&(this.page=this.last,this.onPage())},onNext(){!this.disabled&&!this.isLast&&(this.page++,this.onPage())},onPrevious(){!this.disabled&&this.page>1&&(this.page--,this.onPage())},onPage(){this.$emit("update:model-value",this.page)}}},V=["id"],N={class:"vui-pager-content"};function P(t,a,l,r,o,s){const n=e.resolveComponent("vui-button"),p=e.resolveComponent("vui-nav");return e.openBlock(),e.createElementBlock("div",{id:t.componentId,class:e.normalizeClass(["vui-pager",t.$props.class])},[e.renderSlot(t.$slots,"prepend"),e.createElementVNode("div",N,[e.renderSlot(t.$slots,"first",{},()=>[e.createVNode(n,e.mergeProps(t.$attrs,{disabled:o.page===1,icon:"fa-solid fa-angles-left",class:"vui-button--first",onClick:s.onFirst}),null,16,["disabled","onClick"])]),e.renderSlot(t.$slots,"previous",{},()=>[e.createVNode(n,e.mergeProps(t.$attrs,{disabled:o.page===1,icon:"fa-solid fa-chevron-left",class:"vui-button--previous",onClick:s.onPrevious}),null,16,["disabled","onClick"])]),e.renderSlot(t.$slots,"pages",{},()=>[e.createElementVNode("div",{class:e.normalizeClass(["ellipse",{visible:s.last>4&&o.page+2>4}])}," ... ",2),e.createVNode(p,e.mergeProps({modelValue:o.page,"onUpdate:modelValue":a[0]||(a[0]=d=>o.page=d)},t.$attrs,{flat:t.hasAttribute("flat"),items:s.pages,"show-icons":!1,"onUpdate:modelValue":s.onPage}),null,16,["modelValue","flat","items","onUpdate:modelValue"]),e.createElementVNode("div",{class:e.normalizeClass(["ellipse",{visible:s.last>4&&o.page+2<s.last}])}," ... ",2)]),e.renderSlot(t.$slots,"next",{},()=>[e.createVNode(n,e.mergeProps(t.$attrs,{disabled:s.isLast,icon:"fa-solid fa-chevron-right",class:"vui-button--next",onClick:s.onNext}),null,16,["disabled","onClick"])]),e.renderSlot(t.$slots,"previous",{},()=>[e.createVNode(n,e.mergeProps(t.$attrs,{disabled:s.isLast,icon:"fa-solid fa-angles-right",class:"vui-button--last",onClick:s.onLast}),null,16,["disabled","onClick"])])]),e.renderSlot(t.$slots,"append")],10,V)}const S=i._export_sfc(v,[["render",P]]);exports.default=S;
