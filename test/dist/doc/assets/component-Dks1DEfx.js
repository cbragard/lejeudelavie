import{t as u}from"./translatable-CDagqyqv.js";import{_,c as a,a as s,b as p,d as c,e as g,t as m,f as v,r,o as l}from"./index-DOX8ZtlD.js";const h={"page.component.nav.start":"Get started","page.component.h1":"component","page.component.h2.api":"API options","page.component.h2.attrs":"Attributes","page.component.h2.slots":"Slots","page.component.doc.attr.name":"Name","page.component.doc.attr.text":"Description","page.component.doc.prop.tag":"Prop","page.component.doc.prop.type":"Values","page.component.doc.prop.text":"Description","page.component.doc.slot.name":"Name","page.component.doc.slot.text":"Description"},f={},b={en:h,fr:f},V={name:"ViewComponent",computed:{component(){const{$route:e}=this;return a.find(({doc:o})=>o.name===e.name)},components(){return a}},created(){u(b)},methods:{onRoute(e){const o=e==="ViewStart"?{doc:{name:e}}:a.find(({name:n})=>n===n);this.$router.push(o.doc)}}},w={class:"view-component"},N={class:"h1"},x=c("i",{class:"fa-brands fa-vuejs"},null,-1),D={key:0,class:"view-component-name"};function S(e,o,n,k,y,t){const d=r("vui-nav"),i=r("router-view");return l(),s("div",w,[p(d,{flat:"","item-label":"label","item-value":"name",items:[{label:e.$t("page.component.nav.start"),name:"ViewStart"},{label:t.component.label,name:t.component.name}],value:t.component,"onUpdate:modelValue":t.onRoute},null,8,["items","value","onUpdate:modelValue"]),c("div",N,[c("h1",null,[x,g(" "+m(e.$t("page.component.h1"))+" ",1),t.component?(l(),s("span",D,m(t.component.label),1)):v("",!0)])]),p(i)])}const A=_(V,[["render",S]]);export{A as default};
