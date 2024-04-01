import{d as g}from"./demonstrable-C-PdKjR2.js";import{t as v}from"./translatable-CDagqyqv.js";import _ from"./progress-bwwNA_E8.js";import{_ as h,a as t,b as s,w as a,r as p,o as r,F as c,g as x,h as b,k as f,l as y,i as k,d as l,t as w}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const B={"page.component.progress.doc.prop.disabled":"Bind the disabled state","page.component.progress.doc.prop.layout":"The progress-bar layout: [error, success, warning]","page.component.progress.doc.prop.min":"Minimum value of progressbar","page.component.progress.doc.prop.max":"Maximum value of progressbar","page.component.progress.doc.prop.value":"current value of progressbar"},P={},$={en:B,fr:P},n={examples:[{markup:`
                <vui-progress
                    min="0"
                    max="100"
                    :value="10"
                />
            `,props:{id:"vui-progress-1",min:0,max:100,value:10}},{markup:`
                <vui-progress
                    layout="warning"
                    min="0"
                    max="100"
                    :value="50",
                />
            `,props:{id:"vui-progress-2",min:0,max:100,value:50,layout:"warning"}}],props:[{tag:"disabled",type:"Boolean",text:"page.component.progress.doc.prop.disabled"},{tag:"layout",type:"String",text:"page.component.progress.doc.prop.layout"},{tag:"min",type:"Number",text:"page.component.progress.doc.prop.min"},{tag:"max",type:"Number",text:"page.component.progress.doc.prop.max"},{tag:"value",type:"Number",text:"page.component.progress.doc.prop.value"}],slots:[]},N={name:"ViewProgress",mixins:[g],setup(){return v($),{}},computed:{doc(){return n},examples(){return this.docExamples(_,{attrs:n.attrs,examples:n.examples.map(e=>({...e,props:{...e.props,text:e.props.text?this.$t(e.props.text):null}}))})}}},M={class:"view-progress"},V=["innerHTML"],C={class:"title"};function H(e,L,T,D,E,m){const i=p("vui-grid-unit"),u=p("vui-table"),d=p("vui-grid");return r(),t("div",M,[s(d,{"col-sm":"1","col-md":"2"},{default:a(()=>[s(i,{class:"examples"},{default:a(()=>[(r(!0),t(c,null,x(m.examples,o=>(r(),t(c,{key:`card-${o.props.id}`},[(r(),b(k(o.component),f(y(o.props)),null,16)),l("div",{class:"highlighted-code",innerHTML:o.highlighted},null,8,V)],64))),128))]),_:1}),s(i,{class:"api-options"},{default:a(()=>[l("h2",C,w(e.$t("page.component.h2.api")),1),s(u,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"])]),_:1})]),_:1})])}const q=h(N,[["render",H]]);export{q as default};
