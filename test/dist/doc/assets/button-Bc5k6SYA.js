import{d as h}from"./demonstrable-C-PdKjR2.js";import{t as v}from"./translatable-CDagqyqv.js";import _ from"./button-IzxFWyK4.js";import{_ as y,a as i,b as a,w as p,r as d,o as s,F as l,g as x,h as k,e as w,t as c,f as B,m as C,i as D,d as b}from"./index-DOX8ZtlD.js";import"./animable-S5zFcxd4.js";import"./composable-CshUTKfl.js";const S={"page.component.button.default":"Default button","page.component.button.error":"Error submit button","page.component.button.disabled":"Disabled button","page.component.button.success":"Success submit button","page.component.button.warning":"Warning submit button","page.component.button.doc.prop.disabled":"Binds the disabled state","page.component.button.doc.prop.icon":"Class name of the icon to prepend","page.component.button.doc.prop.loading":"Binds the loading state","page.component.button.doc.prop.type":"Type of button: submit or button","page.component.button.doc.slot.default":"Default slot for button content"},V={},$={en:S,fr:V},r={attrs:[],examples:[{markup:`
                <vui-button
                    type="button"
                >
                    Default button
                </vui-button>
            `,props:{id:"vui-button-1",icon:"fa-sharp fa-solid fa-file-arrow-up"},text:"page.component.button.default"},{markup:`
                <vui-button
                    flat
                    text="Default button"
                />
            `,props:{id:"vui-button-1",icon:"fa-sharp fa-solid fa-file-arrow-up",flat:!0},text:"page.component.button.default"},{markup:`
                <vui-button
                    layout="error"
                    text="Error submit button"
                    icon="fa-sharp fa-solid fa-bug"
                />
            `,props:{id:"vui-button-2",icon:"fa-sharp fa-solid fa-bug",text:"page.component.button.error",layout:"error"}},{markup:`
                <vui-button
                    layout="success"
                    text="submit button"
                    icon="fa-sharp fa-solid fa-check"
                />
            `,props:{id:"vui-button-3",icon:"fa-sharp fa-solid fa-check",text:"page.component.button.success",layout:"success"}},{markup:`
                <vui-button
                    layout="warning"
                    text="submit button"
                    icon="fa-sharp fa-solid fa-warning"
                />
            `,props:{id:"vui-button-4",icon:"fa-sharp fa-solid fa-warning",text:"page.component.button.warning",layout:"warning"}},{markup:`
                <vui-button
                    :disabled="true"
                    text="disabled button"
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                />
            `,props:{id:"vui-button-5",icon:"fa-sharp fa-solid fa-file-arrow-up",text:"page.component.button.disabled",disabled:!0}}],props:[{tag:"disabled",type:"Boolean",text:"page.component.button.doc.prop.disabled"},{tag:"icon",type:"String",text:"page.component.button.doc.prop.icon"},{tag:"loading",type:"Boolean",text:"page.component.button.doc.prop.loading"},{tag:"type",type:"String",text:"page.component.button.doc.prop.type"}],slots:[{name:"default",text:"page.component.button.doc.slot.default"}]},L={name:"ViewButton",mixins:[h],setup(){return v($),{}},data(){return{buttons:[]}},computed:{doc(){return r},examples(){return this.docExamples(_,{attrs:r.attrs,examples:r.examples.map(t=>({...t,props:{...t.props,text:t.props.text?this.$t(t.props.text):void 0}}))})}},mounted(){this.buttons=r.examples.map(t=>({id:t.props.id}))},methods:{isLoading(t){const n=this.buttons.find(e=>e.id===t);return n==null?void 0:n.loading},onClick(t){const{buttons:n}=this;this.buttons=n.map(e=>e.id===t?{...e,loading:!e.loading}:e)}}},E={class:"view-button"},H=["innerHTML"],N={class:"title"},T={class:"title"};function P(t,n,e,F,M,u){const m=d("vui-grid-unit"),f=d("vui-table"),g=d("vui-grid");return s(),i("div",E,[a(g,{"col-sm":"1","col-md":"2"},{default:p(()=>[a(m,{class:"examples"},{default:p(()=>[(s(!0),i(l,null,x(u.examples,o=>(s(),i(l,{key:`button-${o.props.id}`},[(s(),k(D(o.component),C({loading:u.isLoading(o.props.id)},o.props,{onClick:()=>u.onClick(o.props.id)}),{default:p(()=>[o.text?(s(),i(l,{key:0},[w(c(t.$t(o.text)),1)],64)):B("",!0)]),_:2},1040,["loading","onClick"])),b("div",{class:"highlighted-code",innerHTML:o.highlighted},null,8,H)],64))),128))]),_:1}),a(m,{class:"api-options"},{default:p(()=>[b("h2",N,c(t.$t("page.component.h2.api")),1),a(f,{"item-label":"label","item-value":"value",headers:t.docPropsHeaders,items:t.docProps},null,8,["headers","items"]),b("h2",T,c(t.$t("page.component.h2.slots")),1),a(f,{"item-label":"label","item-value":"value",headers:t.docSlotsHeaders,items:t.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const I=y(L,[["render",P]]);export{I as default};
