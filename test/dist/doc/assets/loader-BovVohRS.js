import{d as h}from"./demonstrable-C-PdKjR2.js";import{t as f}from"./translatable-CDagqyqv.js";import y from"./loader-2ppI-bXO.js";import{_,a as r,b as t,w as l,r as d,o as a,F as i,g as v,h as b,k as x,l as k,i as S,d as n,t as p}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";import"./alert-CqIIiZPY.js";const m={attrs:[{name:"flat",text:"page.component.loader.doc.attr.flat"}],examples:[{markup:`
                <vui-loader
                    text="It's loading..."
                >
            `,props:{text:"It's loading..."}},{markup:`
                <vui-loader
                    layout="success"
                    text="It's loading..."
                >
            `,props:{layout:"success",text:"It's loading..."}},{markup:`
                <vui-loader
                    layout="error"
                    text="It's loading..."
                >
            `,props:{layout:"error",text:"It's loading..."}},{markup:`
                <vui-loader
                    flat
                    layout="warning"
                    text="It's loading..."
                >
            `,props:{flat:!0,layout:"warning",text:"It's loading..."}}],props:[{tag:"icon",type:"String",text:"page.component.list.doc.prop.icon"},{tag:"layout",type:"String",text:"page.component.list.doc.prop.layout"},{tag:"text",type:"String",text:"page.component.list.doc.prop.text"}],slots:[{name:"#prepend",text:"page.component.loader.doc.slot.prepend"},{name:"#icon",text:"page.component.loader.doc.slot.icon"},{name:"default|#body",text:"page.component.loader.doc.slot.body"},{name:"#append",text:"page.component.loader.doc.slot.append"}]},I={"page.component.loader.doc.attr.flat":"Enables the flat style layout","page.component.loader.example.header":"My card header content","page.component.loader.example.body":"My card body content","page.component.loader.example.footer":"My card footer content","page.component.loader.doc.slot.header":"Slot embedding the card header content","page.component.loader.doc.slot.body":"Slot for body content","page.component.loader.doc.slot.footer":"Slot for footer content"},$={},w={en:I,fr:$},H={name:"ViewLoader",mixins:[h],setup(){return f(w),{}},computed:{doc(){return m},examples(){return this.docExamples(y,m)}}},L={class:"view-loader"},M=["innerHTML"],B={class:"title"},P={class:"title"},V={class:"title"};function C(e,E,A,D,F,u){const c=d("vui-grid-unit"),s=d("vui-table"),g=d("vui-grid");return a(),r("div",L,[t(g,{"col-sm":"1","col-md":"2"},{default:l(()=>[t(c,{class:"examples"},{default:l(()=>[(a(!0),r(i,null,v(u.examples,o=>(a(),r(i,{key:`loader-${o.props.id}`},[(a(),b(S(o.component),x(k(o.props)),null,16)),n("div",{class:"highlighted-code",innerHTML:o.highlighted},null,8,M)],64))),128))]),_:1}),t(c,{class:"api-options"},{default:l(()=>[n("h2",B,p(e.$t("page.component.h2.api")),1),t(s,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),n("h2",P,p(e.$t("page.component.h2.attrs")),1),t(s,{"item-label":"label","item-value":"value",headers:e.docAttrsHeaders,items:e.docAttrs},null,8,["headers","items"]),n("h2",V,p(e.$t("page.component.h2.slots")),1),t(s,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const G=_(H,[["render",C]]);export{G as default};
