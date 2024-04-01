import{d as f}from"./demonstrable-C-PdKjR2.js";import{t as b}from"./translatable-CDagqyqv.js";import x from"./input-CUbhKO2p.js";import{_ as B,a as i,b as t,w as p,r as n,o as a,F as d,g as T,d as l,t as u,h as V,m as k,i as S}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const $={"page.component.input.title-1":"Input type as text","page.component.input.title-2":"Input type as email","page.component.input.vmodel":"v-model","page.component.input.vmodel.none":"none","page.component.input.doc.prop.disabled":"Binds the disabled state","page.component.input.doc.prop.icon":"Class name of the icon to prepend","page.component.input.doc.prop.loading":"Binds the loading state","page.component.input.doc.prop.type":"Type of input: email, text, number","page.component.input.doc.prop.value":"Value of the input","page.component.input.doc.prop.v-model":"Binds the value of input"},w={},C={en:$,fr:w},c={attrs:[],examples:[{markup:`
                <vui-input
                    id="example-input-1"
                    maxlength="15"
                    placeholder="Type a value"
                    type="text"
                />
            `,props:{id:"example-input-1",name:"example-input-1",placeholder:"Type a value",type:"text"},title:"page.component.input.title-1"},{markup:`
                <vui-input
                    id="example-input-2"
                    maxlength="15"
                    placeholder="Type a value"
                    type="email"
                />
            `,props:{id:"example-input-2",name:"example-input-2",placeholder:"Type a value",type:"email"},title:"page.component.input.title-2"}],props:[{tag:"disabled",type:"Boolean",text:"page.component.input.doc.prop.disabled"},{tag:"icon",type:"String",text:"page.component.input.doc.prop.icon"},{tag:"loading",type:"Boolean",text:"page.component.input.doc.prop.loading"},{tag:"type",type:"String",text:"page.component.input.doc.prop.type"},{tag:"value",type:"Number, String",text:"page.component.input.doc.prop.value"},{tag:"v-model",type:"Number, String",text:"page.component.input.doc.prop.v-model"}],slots:[]},I={name:"ViewInput",mixins:[f],setup(){return b(C),{}},data(){return{form:{}}},computed:{doc(){return c},examples(){return this.docExamples(x,c)}}},N={class:"view-input"},H={class:"title"},L=["innerHTML"],P={class:"title"};function D(o,E,F,M,s,m){const g=n("vui-input"),v=n("vui-card"),r=n("vui-grid-unit"),h=n("vui-table"),_=n("vui-grid");return a(),i("div",N,[t(_,{"col-sm":"1","col-md":"2"},{default:p(()=>[t(r,{class:"examples"},{default:p(()=>[(a(!0),i(d,null,T(m.examples,e=>(a(),i(d,{key:`button-${e.props.id}`},[t(v,null,{header:p(()=>[l("span",H,u(o.$t(e.title)),1)]),body:p(()=>[t(g,{disabled:"",placeholder:o.$t("page.component.input.vmodel"),value:s.form[e.props.id]},null,8,["placeholder","value"]),(a(),V(S(e.component),k(e.props,{id:e.props.id,required:"",class:"test","onUpdate:modelValue":y=>s.form[e.props.id]=y}),null,16,["id","onUpdate:modelValue"]))]),_:2},1024),l("div",{class:"highlighted-code",innerHTML:e.highlighted},null,8,L)],64))),128))]),_:1}),t(r,{class:"api-options"},{default:p(()=>[l("h2",P,u(o.$t("page.component.h2.api")),1),t(h,{"item-label":"label","item-value":"value",headers:o.docPropsHeaders,items:o.docProps},null,8,["headers","items"])]),_:1})]),_:1})])}const G=B(I,[["render",D]]);export{G as default};