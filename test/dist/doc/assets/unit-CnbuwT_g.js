import{d as _}from"./demonstrable-C-PdKjR2.js";import{t as f}from"./translatable-CDagqyqv.js";import v from"./unit-DiJGR-or.js";import{_ as h,a as s,b as t,w as e,r as a,o as d,F as u,g as b,d as n,t as l}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const $={"page.component.grid-unit.left":"Col 1 content","page.component.grid-unit.right":"Col 2 content","page.component.grid-unit.doc.tag.col":"Defines flex basis percentage for grid-unit column"},x={},C={en:$,fr:x},p={attrs:[],examples:[{markup:`
                <vui-grid
                    id="example-grid-1"
                    col-md="2"
                    col-sm="1"
                >
                    <vui-grid-unit
                        col="30"
                    >
                        Col 1 content
                    </vui-grid-unit>
                    <vui-grid-unit
                        col="70"
                    >
                        Col 2 content
                    </vui-grid-unit>
                </vui-grid>
            `,props:{colMd:2,colSm:1},gridid:"vui-grid-1"}],props:[{tag:"col",type:"Number",text:"page.component.grid-unit.doc.tag.col"}],slots:[]},k={name:"ViewGridUnit",mixins:[_],setup(){return f(C),{}},computed:{doc(){return p},examples(){return this.docExamples(v,p)}}},w={class:"view-grid-unit"},V=["innerHTML"],y={class:"title"};function B(i,H,L,M,N,g){const o=a("vui-grid-unit"),c=a("vui-grid"),m=a("vui-table");return d(),s("div",w,[t(c,{"col-sm":"1","col-md":"2"},{default:e(()=>[t(o,{class:"examples"},{default:e(()=>[(d(!0),s(u,null,b(g.examples,r=>(d(),s(u,{key:`grid-unit-${r.gridid}`},[t(c,{id:r.gridid,"col-sm":"1","col-md":"2"},{default:e(()=>[t(o,{col:"30"},{default:e(()=>[n("p",null,l(i.$t("page.component.grid-unit.left")),1)]),_:1}),t(o,{col:"70"},{default:e(()=>[n("p",null,l(i.$t("page.component.grid-unit.right")),1)]),_:1})]),_:2},1032,["id"]),n("div",{class:"highlighted-code",innerHTML:r.highlighted},null,8,V)],64))),128))]),_:1}),t(o,{class:"api-options"},{default:e(()=>[n("h2",y,l(i.$t("page.component.h2.api")),1),t(m,{"item-label":"label","item-value":"value",headers:i.docPropsHeaders,items:i.docProps},null,8,["headers","items"])]),_:1})]),_:1})])}const S=h(k,[["render",B]]);export{S as default};
