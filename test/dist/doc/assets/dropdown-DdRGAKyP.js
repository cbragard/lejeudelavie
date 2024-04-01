import{d as b}from"./demonstrable-C-PdKjR2.js";import{t as w}from"./translatable-CDagqyqv.js";import v from"./dropdown-BZc3VZMd.js";import{_ as h,a as p,b as t,w as l,r as n,o as a,F as s,g as f,h as x,m as y,i as _,d,t as m}from"./index-DOX8ZtlD.js";import"./input-CUbhKO2p.js";import"./composable-CshUTKfl.js";import"./list-D1vLadOc.js";import"./animable-S5zFcxd4.js";const L={"page.component.dropdown.text-1":"Dropdown with an array of strings or numbers","page.component.dropdown.text-2":"Dropdown with an array of objects","page.component.dropdown.text-3":"Dropdown with groups of array of objects","page.component.dropdown.doc.prop.disabled":"Binds the disabled state","page.component.dropdown.doc.prop.disable-filtering":"Disable the internal filtering when keyword input is provided, useful serverside filtering is needed","page.component.dropdown.doc.prop.icon":"Class name of the icon to prepend","page.component.dropdown.doc.prop.loading":"Binds the loading state","page.component.dropdown.doc.prop.item-label":"Label key foreach list item","page.component.dropdown.doc.prop.item-value":"Value key foreach list item","page.component.dropdown.doc.prop.items":"Array of values or objects of the dropdown items","page.component.dropdown.doc.prop.placeholder":"Set the placeholder of dropdown","page.component.dropdown.doc.prop.value":"Selected item in the dropdown","page.component.dropdown.doc.prop.v-model":"Binds the model value of dropdown","page.component.dropdown.doc.slot.group-item":"Slot to custom each items group of the list","page.component.dropdown.doc.slot.keyword":"Slot for the keyword input text keyword","page.component.dropdown.doc.slot.item":"Slot iterates over each item of the list","page.component.dropdown.doc.slot.placeholder":"Slot for the placeholder"},S={},k={en:L,fr:S},c={attrs:[],examples:[{markup:`
                <vui-dropdown
                    id="example-dropdown-1",
                    :items="[-1, 0, 1, 2, 3, 4]"
                />
            `,props:{id:"example-dropdown-1",items:[-1,0,1,2,3,4]},title:"page.component.dropdown.text-1"},{markup:`
                <vui-dropdown
                    id="example-dropdown-2",
                    :items: [
                        { label: "Label 1", value: "value 1" },
                        { label: "Label 2", value: "value 2" }
                    ]
                    item-label="label",
                    item-value="value"
                />
            `,props:{id:"example-dropdown-2",items:[{label:"Label 1",value:"value 1"},{label:"Label 2",value:"value 2"}],itemLabel:"label",itemValue:"value"},title:"page.component.dropdown.text-2"},{markup:`
                <vui-dropdown
                    id="example-dropdown-3",
                    :items: [
                        { label: "Group label 1", value: [
                            { label: "Label 1", value: "value 1" },
                            { label: "Label 2", value: "value 2" }
                        ]},
                        { label: 'Group label 2', value: [
                            { label: "Label 3", value: "value 3" },
                            { label: "Label 4", value: "value 4" }
                        ]}
                    ]
                    item-label="label",
                    item-value="value"
                />
            `,props:{id:"example-dropdown-3",items:[{label:"Group label 1",value:[{label:"Label 1",value:"value 1"},{label:"Label 2",value:"value 2"}]},{label:"Group label 2",value:[{label:"Label 3",value:"value 3"},{label:"Label 4",value:"value 4"}]}],itemLabel:"label",itemValue:"value"},title:"page.component.dropdown.text-3"}],props:[{tag:"disabled",type:"Boolean",text:"page.component.dropdown.doc.prop.disabled"},{tag:"disable-filtering",type:"Boolean",text:"page.component.dropdown.doc.prop.disable-filtering"},{tag:"icon",type:"String",text:"page.component.dropdown.doc.prop.icon"},{tag:"item-label",type:"String",text:"page.component.dropdown.doc.prop.item-label"},{tag:"item-value",type:"String",text:"page.component.dropdown.doc.prop.item-value"},{tag:"items",type:"String",text:"page.component.dropdown.doc.prop.items"},{tag:"loading",type:"Boolean",text:"page.component.dropdown.doc.prop.loading"},{tag:"placeholder",type:"String",text:"page.component.dropdown.doc.prop.placeholder"},{tag:"value",type:"[Object, Number, String]",text:"page.component.dropdown.doc.prop.value"},{tag:"v-model",type:"[Object, Number, String]",text:"page.component.dropdown.doc.prop.v-model"}],slots:[{name:"group-item",text:"page.component.dropdown.doc.slot.group-item"},{name:"keyword",text:"page.component.dropdown.doc.slot.keyword"},{name:"item",text:"page.component.dropdown.doc.slot.item"},{name:"placeholder",text:"page.component.dropdown.doc.slot.placeholder"}]},B={name:"ViewDropdown",mixins:[b],setup(){return w(k),{}},computed:{doc(){return c},examples(){return this.docExamples(v,c)}}},D={class:"view-dropdown"},V=["innerHTML"],$={class:"title"},j={class:"title"};function C(e,G,H,N,P,u){const r=n("vui-grid-unit"),i=n("vui-table"),g=n("vui-grid");return a(),p("div",D,[t(g,{"col-sm":"1","col-md":"2"},{default:l(()=>[t(r,{class:"examples"},{default:l(()=>[(a(!0),p(s,null,f(u.examples,o=>(a(),p(s,{key:`dropdown-${o.props.id}`},[(a(),x(_(o.component),y(o.props,{placeholder:e.$t(o.title)}),null,16,["placeholder"])),d("div",{class:"highlighted-code",innerHTML:o.highlighted},null,8,V)],64))),128))]),_:1}),t(r,{class:"api-options"},{default:l(()=>[d("h2",$,m(e.$t("page.component.h2.api")),1),t(i,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),d("h2",j,m(e.$t("page.component.h2.slots")),1),t(i,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const I=h(B,[["render",C]]);export{I as default};
