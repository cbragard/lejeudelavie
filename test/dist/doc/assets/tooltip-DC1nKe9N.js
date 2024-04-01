import{d as x}from"./demonstrable-C-PdKjR2.js";import{t as _}from"./translatable-CDagqyqv.js";import V from"./tooltip-DPMeKlbl.js";import{_ as w,a as l,b as e,w as i,r as p,o as n,F as g,g as k,h as y,m as T,i as C,d as a,t as h}from"./index-DOX8ZtlD.js";import"./index-7pe20t8n.js";import"./composable-CshUTKfl.js";const M={"page.component.tooltip.button.show-bottom":"show tooltip on bottom","page.component.tooltip.button.show-right":"show tooltip on right","page.component.tooltip.button.show-left":"show tooltip on left","page.component.tooltip.button.show-top":"show tooltip on top","page.component.tooltip.text":"My tooltip content My tooltip content My tooltip content My tooltip content My tooltip content My tooltip content","page.component.tooltip.doc.prop.text":"Text of the tooltip","page.component.tooltip.doc.prop.icon":"Class name of the icon to prepend","page.component.tooltip.doc.prop.holder":"Id of the element which tooltip refers to","page.component.tooltip.doc.prop.position":"Position of the tooltip from holder","page.component.tooltip.doc.prop.v-model":"Binds the visible state of the tooltip","page.component.tooltip.doc.slot.default":"Default slot for tooltip content"},S={},$={en:M,fr:S},s={attrs:[],examples:[{markup:`
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="right"
                    >
                        <span>Tooltip right position</span>
                    </vui-tooltip>
                </vui-button>
            `,props:{id:"vui-tooltip-1",icon:"fa-solid fa-message",text:"page.component.tooltip.text",position:"right"},button:"page.component.tooltip.button.show-right"},{markup:`
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="top"
                        text="Tooltip top position"
                    />
            </vui-button>
            `,props:{id:"vui-tooltip-2",icon:"fa-solid fa-message",text:"page.component.tooltip.text",position:"top"},button:"page.component.tooltip.button.show-top"},{markup:`
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="bottom"
                    >
                        <span>Tooltip bottom position</span>
                    </vui-tooltip>
                </vui-button>
            `,props:{id:"vui-tooltip-3",icon:"fa-solid fa-message",text:"page.component.tooltip.text",position:"bottom"},button:"page.component.tooltip.button.show-bottom"},{markup:`
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="left"
                    >
                        <span>Tooltip left position</span>
                    </vui-tooltip>
                </vui-button>
            `,props:{id:"vui-tooltip-4",icon:"fa-solid fa-message",text:"page.component.tooltip.text",position:"left"},button:"page.component.tooltip.button.show-left"}],props:[{tag:"holder",type:"String",text:"page.component.tooltip.doc.prop.holder"},{tag:"icon",type:"String",text:"page.component.tooltip.doc.prop.icon"},{tag:"position",type:"String",text:"page.component.tooltip.doc.prop.position"},{tag:"text",type:"String",text:"page.component.tooltip.doc.prop.text"},{tag:"v-model",type:"String",text:"page.component.tooltip.doc.prop.v-model"}],slots:[{name:"default",text:"page.component.tooltip.doc.slot.default"}]},B={name:"ViewTooltip",mixins:[x],setup(){return _($),{}},data(){return{tooltips:[]}},computed:{doc(){return s},examples(){return this.docExamples(V,{attrs:s.attrs,examples:s.examples.map(o=>({...o,props:{...o.props,text:o.props.text?this.$t(o.props.text):null}}))})}},mounted(){this.tooltips=s.examples.map(()=>!1)},methods:{onClick(o){const c=this.tooltips[o];this.tooltips[o]=!c}}},H={class:"view-tooltip"},P=["innerHTML"],D={class:"title"},L={class:"title"};function E(o,c,F,N,r,m){const b=p("vui-button"),d=p("vui-grid-unit"),u=p("vui-table"),f=p("vui-grid");return n(),l("div",H,[e(f,{"col-sm":"1","col-md":"2"},{default:i(()=>[e(d,{class:"examples"},{default:i(()=>[(n(!0),l(g,null,k(m.examples,t=>(n(),l(g,{key:`tooltip-${t.props.id}`},[e(b,{id:`button-tooltip-${t.props.id}`,text:o.$t(t.button),onClick:()=>m.onClick(t.props.id)},{prepend:i(()=>[(n(),y(C(t.component),T({modelValue:r.tooltips[t.props.id],"onUpdate:modelValue":v=>r.tooltips[t.props.id]=v},t.props),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["id","text","onClick"]),a("div",{class:"highlighted-code",innerHTML:t.highlighted},null,8,P)],64))),128))]),_:1}),e(d,{class:"api-options"},{default:i(()=>[a("h2",D,h(o.$t("page.component.h2.api")),1),e(u,{"item-label":"label","item-value":"value",headers:o.docPropsHeaders,items:o.docProps},null,8,["headers","items"]),a("h2",L,h(o.$t("page.component.h2.slots")),1),e(u,{"item-label":"label","item-value":"value",headers:o.docSlotsHeaders,items:o.docSlots},null,8,["headers","items"])]),_:1})]),_:1})])}const G=w(B,[["render",E]]);export{G as default};
