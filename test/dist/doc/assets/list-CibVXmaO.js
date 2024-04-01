import{d as b}from"./demonstrable-C-PdKjR2.js";import{t as v}from"./translatable-CDagqyqv.js";import h from"./list-D1vLadOc.js";import{_ as f,a,b as l,w as i,r as s,o,F as c,g as y,h as x,m as _,i as L,d as p,t as m}from"./index-DOX8ZtlD.js";import"./animable-S5zFcxd4.js";import"./composable-CshUTKfl.js";const S={"page.component.list.text-1":"List an array of strings, numbers, ...","page.component.list.text-2":"List an array of objects","page.component.list.text-3":"List with groups of objects arrays","page.component.list.doc.prop.autoclose":"Closes automatically opened group when a new one is opened","page.component.list.doc.prop.disable-filtering":"Disable the internal filtering even a keyword props is provided, useful serverside filtering is needed","page.component.list.doc.prop.disabled":"Binds the disabled state condition","page.component.list.doc.prop.expanded":"Start with all items groups opened","page.component.list.doc.prop.icon":"Class name of the icon to display before each item label","page.component.list.doc.prop.keyword":"Used to filter the items list","page.component.list.doc.prop.loading":"Binds the loading state","page.component.list.doc.prop.item-label":"Label key foreach list item","page.component.list.doc.prop.item-value":"Value key foreach list item","page.component.list.doc.prop.items":"Array of values that composes the list","page.component.list.doc.prop.selectable":"Determines if list items are selectable","page.component.list.doc.prop.title":"Display a title above the list items","page.component.list.doc.prop.value":"Selected item in the list","page.component.list.doc.prop.v-model":"Binds the model value of dropdown","page.component.list.doc.slot.group-item":"Slot to iterates over each item group","page.component.list.doc.slot.item":"Slot to iterates over each item of the list","page.component.list.doc.slot.placeholder":"Slot for the placeholder"},B={},k={en:S,fr:B},d={attrs:[],examples:[{markup:`
                <vui-list
                    :items=[1, 2, 3, 4]
                    :selectable="true"
                />
            `,props:{disabled:!1,id:"vui-list-1",items:[1,2,3,4],selectable:!0},title:"page.component.list.text-1"},{markup:`
                <vui-list
                    :items=[
                        { label: "label 1", value: "value 1" },
                        { label: "label 2", value: "value 2" }
                    ]
                    item-label="label"
                    item-value="value"
                />
            `,props:{disabled:!1,id:"vui-list-2",items:[{label:"Label 1",value:"value 1"},{label:"Label 2",value:"value 2"}],itemLabel:"label",itemValue:"value",selectable:!0},title:"page.component.list.text-2"},{markup:`
                <vui-list
                    :items=[
                        { label: "Label Group 1", value: [
                            { label: "label 1", value: "value 1" },
                            { label: "label 2", value: "value 2" }
                        ]},
                        { label: 'Label Group 2', value: [
                            { label: "label 3", value: "value 3" },
                            { label: "label 3", value: "value 4" }
                        ]}
                    ],
                    item-label="label"
                    item-value="value"
                />
            `,props:{disabled:!1,id:"vui-list-3",items:[{label:"Label Group 1",value:[{label:"label 1",value:"value 1"},{label:"label 2",value:"value 2"}]},{label:"Label Group 2",value:[{label:"label 3",value:"value 3"},{label:"label 3",value:"value 4"}]}],itemLabel:"label",itemValue:"value",selectable:!0},title:"page.component.list.text-3"}],props:[{tag:"autoclose",type:"Boolean",text:"page.component.list.doc.prop.autoclose"},{tag:"disabled",type:"Boolean",text:"page.component.list.doc.prop.disabled"},{tag:"disable-filtering",type:"Boolean",text:"page.component.list.doc.prop.disable-filtering"},{tag:"expanded",type:"Boolean",text:"page.component.list.doc.prop.expanded"},{tag:"icon",type:"String",text:"page.component.list.doc.prop.icon"},{tag:"item-label",type:"String",text:"page.component.list.doc.prop.item-label"},{tag:"item-value",type:"String",text:"page.component.list.doc.prop.item-value"},{tag:"items",type:"String",text:"page.component.list.doc.prop.items"},{tag:"loading",type:"Boolean",text:"page.component.list.doc.prop.loading"},{tag:"selectable",type:"Boolean",text:"page.component.list.doc.prop.selectable"},{tag:"title",type:"String",text:"page.component.list.doc.prop.title"},{tag:"value",type:"[Object, Number, String]",text:"page.component.list.doc.prop.value"},{tag:"v-model",type:"[Object, Number, String]",text:"page.component.list.doc.prop.v-model"}],slots:[{name:"group-item",text:"page.component.list.doc.slot.group-item"},{name:"item",text:"page.component.list.doc.slot.item"},{name:"placeholder",text:"page.component.list.doc.slot.placeholder"}]},w={name:"ViewList",mixins:[b],setup(){return v(k),{}},computed:{doc(){return d},examples(){return this.docExamples(h,d)}}},V={class:"view-list"},$=["innerHTML"],C={class:"title"},D={class:"title"};function j(e,G,H,N,P,u){const n=s("vui-grid-unit"),r=s("vui-table"),g=s("vui-grid");return o(),a("div",V,[l(g,{"col-sm":"1","col-md":"2"},{default:i(()=>[l(n,{class:"examples"},{default:i(()=>[(o(!0),a(c,null,y(u.examples,t=>(o(),a(c,{key:`list-${t.props.id}`},[(o(),x(L(t.component),_(t.props,{title:e.$t(t.title)}),null,16,["title"])),p("div",{class:"highlighted-code",innerHTML:t.highlighted},null,8,$)],64))),128))]),_:1}),l(n,{class:"api-options"},{default:i(()=>[p("h2",C,m(e.$t("page.component.h2.api")),1),l(r,{"item-label":"label","item-value":"value",headers:e.docPropsHeaders,items:e.docProps},null,8,["headers","items"]),p("h2",D,m(e.$t("page.component.h2.slots")),1),l(r,{"item-label":"label","item-value":"value",headers:e.docSlotsHeaders,items:e.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const U=f(w,[["render",j]]);export{U as default};
