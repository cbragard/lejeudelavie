import{l as t}from"./index-7pe20t8n.js";import{c as d}from"./composable-CshUTKfl.js";import{t as l}from"./translatable-CDagqyqv.js";import{_ as i,a as e,j as o,f as r,n,o as a}from"./index-DOX8ZtlD.js";const p={name:"VuiCard",mixins:[d],created(){l(t)}},c=["id"],f={key:0,class:"vui-card-header"},m={key:1,class:"vui-card-body"},u={key:2,class:"vui-card-footer"};function $(s,h,v,b,y,k){return a(),e("div",{id:s.componentId,class:n(["vui-card",{"vui-card--flat":s.hasAttribute("flat")},s.$props.class])},[o(s.$slots,"prepend"),s.$slots.header?(a(),e("div",f,[o(s.$slots,"header")])):r("",!0),s.$slots.body||s.$slots.default?(a(),e("div",m,[o(s.$slots,"body"),o(s.$slots,"default")])):r("",!0),s.$slots.footer?(a(),e("div",u,[o(s.$slots,"footer")])):r("",!0),o(s.$slots,"append")],10,c)}const g=i(p,[["render",$]]);export{g as default};