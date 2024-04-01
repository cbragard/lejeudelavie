import{d as y}from"./demonstrable-C-PdKjR2.js";import{t as h}from"./translatable-CDagqyqv.js";import g from"./table-D2Pkmz6r.js";import{_,a as n,b as t,w as l,r as s,o as i,F as m,g as f,h as Q,d as o,t as r,k as x,l as S,i as D}from"./index-DOX8ZtlD.js";import"./animable-S5zFcxd4.js";import"./composable-CshUTKfl.js";const k={"page.component.table.doc.prop.headers":"Array containing text / value foreach item header","page.component.table.doc.prop.item-label":"Label key for each item in table","page.component.table.doc.prop.item-value":"Value key for each item in table","page.component.table.doc.prop.items":"Array of items to display in table","page.component.table.doc.slot.header":"Slot to replace header row default rendering","page.component.table.doc.slot.item":"Slot to replace item row default rendering"},V={},L={en:k,fr:V},u={attrs:[],examples:[{markup:`
                <vui-table
                    itemLabel="label",
                    itemValue="value"
                    headers="[
                        {
                            label: 'Start date',
                            value: 'startDate'
                        },
                        {
                            label: 'Start Quantity',
                            value: 'startQuantity'
                        },
                        {
                            label: 'End date',
                            value: 'endDate'
                        },
                        {
                            label: 'End Quantity',
                            value: 'endQuantity'
                        }
                    ]",
                    items="[
                        {
                            startDate: '2022-01-01',
                            startQuantity: '2 187',
                            endDate: '2022-12-01',
                            endQuantity: '1 239'
                        }
                    ]"
                >
                    <template #item.endQuantity="{ item }">
                        <td>{{ item.endQuantity }} units</td>
                    </template>
                </vui-table>
            `,props:{id:"vui-table-1",headers:[{label:"Start date",value:"startDate"},{label:"Start Quantity",value:"startQuantity"},{label:"End date",value:"endDate"},{label:"End Quantity",value:"endQuantity"}],items:[{startDate:"2022-01-01",startQuantity:"723",endDate:"2022-12-01",endQuantity:"1 239"}],itemLabel:"label",itemValue:"value"}},{markup:`
                <vui-table
                    itemLabel="label",
                    itemValue="value"
                    headers="[
                        {
                            label: 'Id',
                            value: 'id'
                        },
                        {
                            label: 'City Name',
                            value: 'city.name'
                        },
                        {
                            label: 'Population',
                            value: 'city.population'
                        }
                    ]"
                    items="[
                        {
                            id: 1,
                            city: {
                                name: 'Paris',
                                population: 2161000
                            }
                        },
                        {
                            id: 1,
                            city: {
                                name: 'Mexico',
                                population: 126700000
                            }
                        }
                    ]"
                >
                    <template #item.endQuantity="{ item }">
                        <td>{{ item.endQuantity }} units</td>
                    </template>
                </vui-table>
            `,props:{id:"vui-table-2",headers:[{label:"Id",value:"id",class:"text-center"},{label:"City Name",value:"city.name"},{label:"Population",value:"city.population"}],items:[{id:1,city:{name:"Paris",population:2161e3}},{id:2,city:{name:"Mexico",population:1267e5}}],itemLabel:"label",itemValue:"value"}}],props:[{tag:"headers",type:"Array",text:"page.component.table.doc.prop.headers"},{tag:"item-label",type:"String",text:"page.component.table.doc.prop.item-label"},{tag:"item-value",type:"String",text:"page.component.table.doc.prop.item-value"},{tag:"items",type:"Array",text:"page.component.table.doc.prop.items"}],slots:[{name:"header",text:"page.component.table.doc.slot.header"},{name:"item",text:"page.component.table.doc.slot.item"}]},P={name:"ViewTable",mixins:[y],setup(){return h(L),{}},computed:{doc(){return u},examples(){return this.docExamples(g,u)}}},w={class:"view-table"},E=["innerHTML"],$={class:"title"},C={class:"title"};function A(e,B,H,M,N,c){const p=s("vui-grid-unit"),d=s("vui-table"),b=s("vui-grid");return i(),n("div",w,[t(b,{"col-sm":"1","col-md":"2"},{default:l(()=>[t(p,{class:"examples"},{default:l(()=>[(i(!0),n(m,null,f(c.examples,a=>(i(),n(m,{key:`table-${a.props.id}`},[(i(),Q(D(a.component),x(S(a.props)),{"item.endQuantity":l(({item:v})=>[o("td",null,r(v.endQuantity)+" units",1)]),_:2},1040)),o("div",{class:"highlighted-code",innerHTML:a.highlighted},null,8,E)],64))),128))]),_:1}),t(p,{class:"api-options"},{default:l(()=>[o("h2",$,r(e.$t("page.component.h2.api")),1),t(d,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),o("h2",C,r(e.$t("page.component.h2.slots")),1),t(d,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const q=_(P,[["render",A]]);export{q as default};
