import{d as f}from"./demonstrable-C-PdKjR2.js";import{t as h}from"./translatable-CDagqyqv.js";import v from"./alert-CqIIiZPY.js";import{_,a as r,b as o,w as n,r as s,o as a,F as l,g as x,h as y,e as b,t as p,f as w,k,l as B,i as S,d as c}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const $={"page.component.alert.default":"Default alert","page.component.alert.error":"Error custom alert","page.component.alert.success":"Success custom alert","page.component.alert.warning":"Warning custom alert","page.component.alert.text-2":"Advanced alert","page.component.alert.doc.prop.disabled":"Binds the disabled state","page.component.alert.doc.prop.icon":"Class name of the icon to prepend","page.component.alert.doc.prop.loading":"Binds the loading state","page.component.alert.doc.prop.text":"Text content of the alert","page.component.alert.doc.prop.layout":"The alert layout: [error, success, warning]","page.component.card.doc.slot.default":"Default slot content"},V={},C={en:$,fr:V},i={examples:[{markup:`
                <vui-alert
                    icon="fa-solid fa-warning"
                >
                    Default alert
                </vui-alert>
            `,props:{id:"vui-alert-1",icon:"fa-solid fa-warning"},text:"page.component.alert.default"},{markup:`
                <vui-alert
                    icon="fa-solid fa-bug"
                    text="Error custom alert"
                    layout="error"
                />
            `,props:{id:"vui-alert-2",icon:"fa-solid fa-bug",layout:"error",text:"page.component.alert.error"}},{markup:`
                <vui-alert
                    icon="fa-solid fa-check"
                    text="Success custom alert"
                    layout="success"
                />
            `,props:{id:"vui-alert-2",icon:"fa-solid fa-check",layout:"success",text:"page.component.alert.success"}},{markup:`
                <vui-alert
                    icon="fa-solid fa-warning"
                    text="Warning custom alert"
                    layout="warning"
                />
            `,props:{id:"vui-alert-2",icon:"fa-solid fa-warning",layout:"warning",text:"page.component.alert.warning"}}],props:[{tag:"disabled",type:"Boolean",text:"page.component.alert.doc.prop.disabled"},{tag:"icon",type:"String",text:"page.component.alert.doc.prop.icon"},{tag:"loading",type:"Boolean",text:"page.component.alert.doc.prop.loading"},{tag:"text",type:"String",text:"page.component.alert.doc.prop.text"},{tag:"layout",type:"String",text:"page.component.alert.doc.prop.layout"}],slots:[{name:"default",text:"page.component.alert.doc.slot.default"}]},D={name:"ViewAlert",mixins:[f],setup(){return h(C),{}},computed:{doc(){return i},examples(){return this.docExamples(v,{attrs:i.attrs,examples:i.examples.map(e=>({...e,props:{...e.props,text:e.props.text?this.$t(e.props.text):null}}))})}}},T={class:"view-alert"},E=["innerHTML"],H={class:"title"},N={class:"title"};function P(e,A,L,F,M,m){const d=s("vui-grid-unit"),u=s("vui-table"),g=s("vui-grid");return a(),r("div",T,[o(g,{"col-sm":"1","col-md":"2"},{default:n(()=>[o(d,{class:"examples"},{default:n(()=>[(a(!0),r(l,null,x(m.examples,t=>(a(),r(l,{key:`card-${t.props.id}`},[(a(),y(S(t.component),k(B(t.props)),{default:n(()=>[t.text?(a(),r(l,{key:0},[b(p(e.$t(t.text)),1)],64)):w("",!0)]),_:2},1040)),c("div",{class:"highlighted-code",innerHTML:t.highlighted},null,8,E)],64))),128))]),_:1}),o(d,{class:"api-options"},{default:n(()=>[c("h2",H,p(e.$t("page.component.h2.api")),1),o(u,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),c("h2",N,p(e.$t("page.component.h2.slots")),1),o(u,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const G=_(D,[["render",P]]);export{G as default};
