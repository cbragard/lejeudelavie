import V from"./list-D1vLadOc.js";import{c as y}from"./composable-CshUTKfl.js";import{t as k}from"./translatable-CDagqyqv.js";import{_ as g,a as i,j as n,b as N,w as m,n as p,r as c,o as l,f as r,t as f,h as B,e as C}from"./index-DOX8ZtlD.js";import"./animable-S5zFcxd4.js";const S={},_={},$={en:S,fr:_},w={items:{type:Array,required:!0},itemLabel:{type:String},itemValue:{type:String},modelValue:{default:void 0,types:[Boolean,Number,Object,String]},showIcons:{type:Boolean,default:!0},value:{default:void 0,types:[Boolean,Number,Object,String]}},I={name:"VuiNav",components:{VuiList:V},mixins:[y],props:w,emits:["update:model-value"],data(){return{selected:null}},watch:{modelValue(e){this.selected=e},value(e){this.selected=e}},created(){k($),this.hasModelValue?this.selected=this.modelValue:this.hasValue&&(this.selected=this.value)},methods:{onClick(e){this.disabled||this.$emit("update:model-value",e)}}},j=["id"],A={key:1,class:"vui-list-items-item-label-text"};function L(e,d,O,U,u,h){const v=c("router-link"),b=c("vui-list");return l(),i("div",{id:e.componentId,class:p(["vui-nav",{"vui-nav--flat":e.hasAttribute("flat")},e.$props.class])},[n(e.$slots,"prepend"),N(b,{modelValue:u.selected,"onUpdate:modelValue":[d[0]||(d[0]=s=>u.selected=s),h.onClick],class:"vui-nav-list","group-id":e.componentGroupId,disabled:e.disabled,"item-label":e.itemLabel,"item-value":e.itemValue,items:e.items,selectable:!e.disabled},{item:m(({index:s,item:t,itemValue:o,itemLabel:a})=>[n(e.$slots,"item",{index:s,item:t,itemLabel:a,itemValue:o},()=>[e.showIcons?(l(),i("i",{key:0,class:p(["fa-solid",{"fa-location-dot":!s},{"fa-chevron-right":s}])},null,2)):r("",!0),t.route?r("",!0):(l(),i("span",A,f(o?t[a]:t),1)),t.route?(l(),B(v,{key:2,to:t.route,class:"vui-list-items-item-label-text"},{default:m(()=>[C(f(o?t[a]:t),1)]),_:2},1032,["to"])):r("",!0)])]),_:3},8,["modelValue","group-id","disabled","item-label","item-value","items","selectable","onUpdate:modelValue"]),n(e.$slots,"append")],10,j)}const M=g(I,[["render",L]]);export{M as default};