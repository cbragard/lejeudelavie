import{d as b}from"./demonstrable-C-PdKjR2.js";import{t as f}from"./translatable-CDagqyqv.js";import x from"./pager-DTsvkIO7.js";import{_ as V,a as s,b as o,w as r,r as n,o as a,F as c,g as y,h as k,m as z,i as B,d as i,t as u}from"./index-DOX8ZtlD.js";import"./nav-BRWBwUsP.js";import"./list-D1vLadOc.js";import"./animable-S5zFcxd4.js";import"./composable-CshUTKfl.js";import"./button-IzxFWyK4.js";const g={attrs:[],examples:[{markup:`
                <vui-pager
                    id="vui-page-1"
                    :count="9"
                    :size="25"
                />
            `,props:{id:"example-pager-1",count:9,size:25},modelValue:1},{markup:`
                <vui-pager
                    id="vui-page-2"
                    :count="100"
                    :size="10"
                    :value="5"
                />
            `,props:{id:"example-pager-2",count:100,size:10},modelValue:5},{markup:`
                <vui-pager
                    flat
                    id="vui-page-3"
                    :count="100"
                    :size="10"
                    :value="1"
                />
            `,props:{flat:!0,id:"example-pager-3",count:100,size:10},modelValue:1}],props:[{tag:"count",type:"Number",text:"page.component.pager.doc.prop.count"},{tag:"disabled",type:"Boolean",text:"page.component.pager.doc.prop.disabled"},{tag:"loading",type:"Boolean",text:"page.component.pager.doc.prop.loading"},{tag:"size",type:"Number",text:"page.component.pager.doc.prop.loading"},{tag:"value",type:"[Object, Number, String]",text:"page.component.pager.doc.prop.value"},{tag:"v-model",type:"[Object, Number, String]",text:"page.component.pager.doc.prop.v-model"}],slots:[{name:"first",text:"page.component.pager.doc.slot.first"},{name:"previous",text:"page.component.pager.doc.slot.previous"},{name:"next",text:"page.component.pager.doc.slot.next"},{name:"last",text:"page.component.pager.doc.slot.last"}]},N={},P={},S={en:N,fr:P},w={name:"ViewPager",mixins:[b],setup(){return f(S),{}},data(){return{pages:{}}},computed:{doc(){return g},examples(){return this.docExamples(x,g)}},mounted(){this.pages=this.examples.reduce((e,p)=>({...e,[p.props.id]:p.modelValue}),{})},methods:{}},H={class:"view-pager"},$=["innerHTML"],C={class:"title"},L={class:"title"};function j(e,p,D,E,l,v){const d=n("vui-grid-unit"),m=n("vui-table"),h=n("vui-grid");return a(),s("div",H,[o(h,{"col-sm":"1","col-md":"2"},{default:r(()=>[o(d,{class:"examples"},{default:r(()=>[(a(!0),s(c,null,y(v.examples,t=>(a(),s(c,{key:`pager-${t.props.id}`},[(a(),k(B(t.component),z(t.props,{modelValue:l.pages[t.props.id],"onUpdate:modelValue":_=>l.pages[t.props.id]=_}),null,16,["modelValue","onUpdate:modelValue"])),i("div",{class:"highlighted-code",innerHTML:t.highlighted},null,8,$)],64))),128))]),_:1}),o(d,{class:"api-options"},{default:r(()=>[i("h2",C,u(e.$t("page.component.h2.api")),1),o(m,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),i("h2",L,u(e.$t("page.component.h2.slots")),1),o(m,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const J=V(w,[["render",j]]);export{J as default};
