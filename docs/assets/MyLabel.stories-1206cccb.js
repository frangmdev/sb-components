import{j as M}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const c=({label:e="No Label",size:q="normal",color:S="primary",allCaps:h=!1,fontColor:T})=>M("span",{className:`label ${q} text-${S}`,style:{color:T},children:h?e.toUpperCase():e});try{c.displayName="MyLabel",c.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Texto que aparecera en la etiqueta",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Tamaño de la etiqueta",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Color de la fuente",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalizacion de la fuente",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"Color personalizado",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const F={title:"UI/MyLabel",component:c,argTypes:{size:{control:{type:"select"}},color:{control:{type:"radio"}},fontColor:{control:{type:"color"}}},tags:["autodocs"]},t=e=>M(c,{...e}),a=t.bind({});a.args={size:"normal",allCaps:!1};const r=t.bind({});r.args={size:"normal",allCaps:!0};const o=t.bind({});o.args={size:"normal",color:"secondary"};const s=t.bind({});s.args={size:"normal",color:"tertiary"};const l=t.bind({});l.args={size:"h1",fontColor:"#5517ac"};var n,i,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <MyLabel {...args} />",...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"args => <MyLabel {...args} />",...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,g,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"args => <MyLabel {...args} />",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,C,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"args => <MyLabel {...args} />",...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var L,_,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:"args => <MyLabel {...args} />",...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const j=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{r as AllCaps,a as Basic,l as CustomFontColor,o as Secondary,s as Tertiary,j as __namedExportsOrder,F as default};
//# sourceMappingURL=MyLabel.stories-1206cccb.js.map