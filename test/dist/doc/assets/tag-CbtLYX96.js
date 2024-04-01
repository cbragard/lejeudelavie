import{d as f}from"./demonstrable-C-PdKjR2.js";import{t as h}from"./translatable-CDagqyqv.js";import v from"./tag-Ct8315Zd.js";import{_,a as s,b as a,w as n,r as p,o,F as r,g as y,h as x,e as b,t as i,f as k,k as w,l as S,i as $,d as c}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const T={"page.component.tag.doc.prop.disabled":"Binds the disabled state","page.component.tag.doc.prop.error":"Error type tag","page.component.tag.doc.prop.success":"Success type tag","page.component.tag.doc.prop.warning":"Warning type tag","page.component.tag.doc.prop.icon":"Class name of the icon to prepend","page.component.tag.doc.prop.text":"Text content of the tag","page.component.tag.doc.prop.layout":"Layout of the tag","page.component.card.doc.slot.default":"Default type slot"},V={},B={en:T,fr:V},g={examples:[{markup:`
                <vui-tag
                    icon="fa-solid fa-tag"
                >
                    Default type tag
                </vui-tag>
            `,props:{id:"vui-tag-1",icon:"fa-solid fa-tag"},text:"page.component.tag.default"},{markup:`
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Error type tag"
                    type="error"
                />
            `,props:{id:"vui-tag-2",icon:"fa-solid fa-tag",layout:"error",text:"page.component.tag.error"}},{markup:`
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Success type tag"
                    type="success"
                />
            `,props:{id:"vui-tag-2",icon:"fa-solid fa-tag",layout:"success",text:"page.component.tag.success"}},{markup:`
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Warning type tag"
                    type="warning"
                />
            `,props:{id:"vui-tag-2",icon:"fa-solid fa-tag",layout:"warning",text:"page.component.tag.warning"}}],props:[{tag:"disabled",type:"String",text:"page.component.tag.doc.prop.disabled"},{tag:"icon",type:"String",text:"page.component.tag.doc.prop.icon"},{tag:"text",type:"String",text:"page.component.tag.doc.prop.text"}],slots:[{name:"default",text:"page.component.card.doc.slot.default"}]},C={name:"ViewTag",mixins:[f],setup(){return h(B),{}},computed:{doc(){return g},examples(){return this.docExamples(v,{attrs:g.attrs,examples:g.examples.map(t=>({...t,props:{...t.props,text:t.props.text?this.$t(t.props.text):null}}))})}}},D={class:"view-tag"},E=["innerHTML"],H={class:"title"},L={class:"title"};function N(t,P,F,M,W,u){const d=p("vui-grid-unit"),l=p("vui-table"),m=p("vui-grid");return o(),s("div",D,[a(m,{"col-sm":"1","col-md":"2"},{default:n(()=>[a(d,{class:"examples"},{default:n(()=>[(o(!0),s(r,null,y(u.examples,e=>(o(),s(r,{key:`tag-${e.props.id}`},[(o(),x($(e.component),w(S(e.props)),{default:n(()=>[e.text?(o(),s(r,{key:0},[b(i(t.$t(e.text)),1)],64)):k("",!0)]),_:2},1040)),c("div",{class:"highlighted-code",innerHTML:e.highlighted},null,8,E)],64))),128))]),_:1}),a(d,{class:"api-options"},{default:n(()=>[c("h2",H,i(t.$t("page.component.h2.api")),1),a(l,{"item-label":"label","item-value":"value",headers:t.docPropsHeaders,items:t.docProps},null,8,["headers","items"]),c("h2",L,i(t.$t("page.component.h2.slots")),1),a(l,{"item-label":"label","item-value":"value",headers:t.docSlotsHeaders,items:t.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const G=_(C,[["render",N]]);export{G as default};
