var z=Object.defineProperty;var u=(e,t)=>z(e,"name",{value:t,configurable:!0});import{a as B}from"./index-4e6cec1b.js";import{a as l,j as r,F as a}from"./jsx-runtime-da4cfb3b.js";import{r as h}from"./index-34e51894.js";import"./index-75cd1920.js";import"./es.object.get-own-property-descriptor-64192e07.js";var _=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),S=u(function(t,o,i){var n=i.get(t);return n?n(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function p(e,t){if(e==null)return{};var o={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}u(p,"_objectWithoutPropertiesLoose");var x=h.forwardRef(function(e,t){var o=e.alt,i=e.color,n=e.size,s=e.weight,v=e.mirrored,L=e.children,j=e.renderPath,W=p(e,["alt","color","size","weight","mirrored","children","renderPath"]),c=h.useContext(_),f=c.color,k=f===void 0?"currentColor":f,g=c.size,y=c.weight,C=y===void 0?"regular":y,m=c.mirrored,b=m===void 0?!1:m,P=p(c,["color","size","weight","mirrored"]);return l("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n??g,height:n??g,fill:i??k,viewBox:"0 0 256 256",transform:v||b?"scale(-1, 1)":void 0},P,W),children:[!!o&&r("title",{children:o}),L,r("rect",{width:"256",height:"256",fill:"none"}),j(s??C,i??k)]})});x.displayName="IconBase";const A=x;var d=new Map;d.set("bold",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});d.set("duotone",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});d.set("fill",function(){return r(a,{children:r("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"})})});d.set("light",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});d.set("thin",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});d.set("regular",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var I=u(function(t,o){return S(t,o,d)},"renderPath"),w=h.forwardRef(function(e,t){return r(A,{...Object.assign({ref:t},e,{renderPath:I})})});w.displayName="ArrowRight";const F=w,D={title:"Form/Button",component:B,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},E={},V={args:{variant:"secondary",children:"Create new"}},H={args:{variant:"tertiary",children:"Cancel"}},K={args:{size:"sm"}},U={args:{disabled:!0}},Z={args:{children:l(a,{children:["Next Step",r(F,{weight:"bold"})]})}},q=["Primary","Secondary","Tertiary","Small","Disabled","WithIcon"];export{U as Disabled,E as Primary,V as Secondary,K as Small,H as Tertiary,Z as WithIcon,q as __namedExportsOrder,D as default};
//# sourceMappingURL=Button.stories-b94d0b6f.js.map
