import{d as N}from"./demonstrable-C-PdKjR2.js";import{t as V}from"./translatable-CDagqyqv.js";import C from"./checkbox-CmqbO7bm.js";import{_ as S,a as c,b as s,w as a,r as l,o as t,F as p,g as $,h as x,e as r,t as n,f as i,m as g,i as v,d as h}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const D={"page.component.checkbox.default":"Default checkbox","page.component.checkbox.binded":"Binded checkbox","page.component.checkbox.label":"Checked","page.component.checkbox.doc.prop.checked":"Binds the conditions of checked state","page.component.checkbox.doc.prop.checked-value":"Checked value of the checkbox","page.component.checkbox.doc.prop.disabled":"Binds the disabled state of the checkbox","page.component.checkbox.doc.prop.unchecked-value":"Unchecked value of the checkbox","page.component.checkbox.doc.prop.value":"Value of the checkbox","page.component.checkbox.doc.prop.v-model":"Binds the model value of checkbox","page.component.checkbox.doc.slot.default":"Default slot for label content"},w={},H={en:D,fr:w},u={examples:[{markup:`
                <vui-checkbox
                    v-model="states['mycheckbox']"
                >
                    Default checkbox label
                </vui-checkbox>
            `,props:{id:"vui-checkbox-1"},text:"page.component.checkbox.default"},{markup:`
                <vui-checkbox
                    disabled
                    :checked="states['mycheckbox']
                >
                   Binded checkbox state
                </vui-checkbox>
            `,props:{id:"vui-checkbox-2"},text:"page.component.checkbox.binded"}],props:[{tag:"checked-value",type:"[Boolean, String, Number, null]",text:"page.component.checkbox.doc.prop.checked-value"},{tag:"disabled",type:"Boolean",text:"page.component.checkbox.doc.prop.disabled"},{tag:"checked",type:"[Boolean, String, Number, null]",text:"page.component.checkbox.doc.prop.checked"},{tag:"unchecked-value",type:"[Boolean, String, Number, null]",text:"page.component.checkbox.doc.prop.unchecked-value"},{tag:"value",type:"[Boolean, String, Number, null]",text:"page.component.checkbox.doc.prop.value"},{tag:"v-model",type:"[Boolean, String, Number, null]",text:"page.component.checkbox.doc.prop.v-model"}],slots:[{name:"default",text:"page.component.checkbox.doc.slot.default"}]},L={name:"ViewCheckbox",mixins:[N],setup(){return V(H),{}},data(){return{states:{}}},computed:{doc(){return u},examples(){return this.docExamples(C,{attrs:u.attrs,examples:u.examples.map(e=>({...e,props:{...e.props,text:e.props.text?this.$t(e.props.text):null}}))})}},mounted(){this.states=this.examples.reduce((e,m)=>({...e,[m.props.id]:!1}),{})},methods:{}},P={class:"view-checkbox"},T=["innerHTML"],U={class:"title"},E={class:"title"};function F(e,m,M,j,d,f){const _=l("vui-tag"),b=l("vui-grid-unit"),k=l("vui-table"),y=l("vui-grid");return t(),c("div",P,[s(y,{"col-sm":"1","col-md":"2"},{default:a(()=>[s(b,{class:"examples"},{default:a(()=>[(t(!0),c(p,null,$(f.examples,o=>(t(),c(p,{key:`checkbox-${o.props.id}`},[o.props.id==="vui-checkbox-1"?(t(),c(p,{key:0},[(t(),x(v(o.component),g(o.props,{value:d.states[o.props.id],"onUpdate:modelValue":B=>d.states[o.props.id]=B}),{default:a(()=>[o.text?(t(),c(p,{key:0},[r(n(e.$t(o.text)),1)],64)):i("",!0)]),_:2},1040,["value","onUpdate:modelValue"])),r("   "),s(_,null,{default:a(()=>[r(n(e.$t("page.component.checkbox.label"))+": "+n(d.states[o.props.id]),1)]),_:2},1024)],64)):i("",!0),o.props.id==="vui-checkbox-2"?(t(),x(v(o.component),g({key:1,disabled:""},o.props,{checked:d.states["vui-checkbox-1"]}),{default:a(()=>[o.text?(t(),c(p,{key:0},[r(n(e.$t(o.text)),1)],64)):i("",!0)]),_:2},1040,["checked"])):i("",!0),h("div",{class:"highlighted-code",innerHTML:o.highlighted},null,8,T)],64))),128))]),_:1}),s(b,{class:"api-options"},{default:a(()=>[h("h2",U,n(e.$t("page.component.h2.api")),1),s(k,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),h("h2",E,n(e.$t("page.component.h2.slots")),1),s(k,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const J=S(L,[["render",F]]);export{J as default};
