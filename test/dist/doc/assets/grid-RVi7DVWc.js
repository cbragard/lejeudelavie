import{d as f}from"./demonstrable-C-PdKjR2.js";import{t as _}from"./translatable-CDagqyqv.js";import v from"./grid-Cm54xVJ-.js";import{_ as h,a as s,b as o,w as e,r as l,o as c,F as p,g as x,d as r,t as d}from"./index-DOX8ZtlD.js";import"./composable-CshUTKfl.js";const b={"page.component.grid.left":"Col 1 content","page.component.grid.right":"Col 2 content","page.component.grid.doc.prop.col-xs":"Defines number of columns for xs class","page.component.grid.doc.prop.col-sm":"Defines number of columns for sm class","page.component.grid.doc.prop.col-md":"Defines number of columns for md class","page.component.grid.doc.prop.col-xl":"Defines number of columns for xl class"},$={},y={en:b,fr:$},m={attrs:[],examples:[{markup:`
                <vui-grid
                    id="example-grid-1"
                    col-md="2"
                    col-sm="1"
                >
                    <vui-grid-unit>
                        Col 1 content
                    </vui-grid-unit>
                    <vui-grid-unit>
                        Col 2 content
                    </vui-grid-unit>
                </vui-grid>
            `,props:{colMd:2,colSm:1},gridid:"vui-grid-1"}],props:[{tag:"col-xs",type:"Number",text:"page.component.grid.doc.prop.col-xs"},{tag:"col-sm",type:"Number",text:"page.component.grid.doc.prop.col-sm"},{tag:"col-md",type:"Number",text:"page.component.grid.doc.prop.col-md"},{tag:"col-xl",type:"Number",text:"page.component.grid.doc.prop.col-xl"}],slots:[]},C={name:"ViewGrid",mixins:[f],setup(){return _(y),{}},computed:{doc(){return m},examples(){return this.docExamples(v,m)}}},N={class:"view-grid"},D=["innerHTML"],k={class:"title"};function w(t,V,B,H,L,u){const n=l("vui-grid-unit"),a=l("vui-grid"),g=l("vui-table");return c(),s("div",N,[o(a,{"col-sm":"1","col-md":"2"},{default:e(()=>[o(n,{class:"examples"},{default:e(()=>[(c(!0),s(p,null,x(u.examples,i=>(c(),s(p,{key:`grid-${i.gridid}`},[o(a,{id:i.gridid,"col-sm":"1","col-md":"2"},{default:e(()=>[o(n,null,{default:e(()=>[r("p",null,d(t.$t("page.component.grid.left")),1)]),_:1}),o(n,null,{default:e(()=>[r("p",null,d(t.$t("page.component.grid.right")),1)]),_:1})]),_:2},1032,["id"]),r("div",{class:"highlighted-code",innerHTML:i.highlighted},null,8,D)],64))),128))]),_:1}),o(n,{class:"api-options"},{default:e(()=>[r("h2",k,d(t.$t("page.component.h2.api")),1),o(g,{"item-label":"label","item-value":"value",headers:t.docPropsHeaders,items:t.docProps},null,8,["headers","items"])]),_:1})]),_:1})])}const S=h(C,[["render",w]]);export{S as default};
