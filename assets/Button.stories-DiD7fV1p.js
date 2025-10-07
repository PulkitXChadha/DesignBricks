import{j as r,a as y}from"./jsx-runtime-D2eXtamC.js";import{B as e}from"./Button-Ch83UTUf.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const ur={title:"Foundation/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"Buttons are clickable elements that trigger actions. They communicate what will happen when users interact with them."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","danger"],description:"The visual style of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width of its container",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Shows a loading spinner and disables the button",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:!1}}},children:{control:"text",description:"Button label"},onClick:{action:"clicked",description:"Click handler"}},args:{children:"Button",variant:"primary",size:"medium"}},a={args:{children:"Click me"}},t={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"tertiary",children:"Tertiary Button"}},o={args:{variant:"danger",children:"Danger Button"}},i={args:{size:"small",children:"Small Button"}},l={args:{size:"large",children:"Large Button"}},d={args:{loading:!0,children:"Loading..."}},c={args:{disabled:!0,children:"Disabled"}},u={args:{iconBefore:r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:r("path",{d:"M8 2a6 6 0 100 12A6 6 0 008 2zM7 9V5h2v4H7zm0 2v2h2v-2H7z"})}),children:"Button with Icon"}},p={args:{fullWidth:!0,children:"Full Width Button"},decorators:[sr=>r("div",{style:{width:"400px"},children:r(sr,{})})]},m={render:()=>y("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(e,{variant:"primary",children:"Primary"}),r(e,{variant:"secondary",children:"Secondary"}),r(e,{variant:"tertiary",children:"Tertiary"}),r(e,{variant:"danger",children:"Danger"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},g={render:()=>y("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r(e,{size:"small",children:"Small"}),r(e,{size:"medium",children:"Medium"}),r(e,{size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}},h={render:()=>y("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r(e,{children:"Default"}),r(e,{disabled:!0,children:"Disabled"}),r(e,{loading:!0,children:"Loading"})]}),parameters:{docs:{description:{story:"Different button states."}}}};var B,v,f;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Click me'
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,S,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(x=(S=t.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,w,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,A,L;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var T,V,P;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...(P=(V=o.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var k,C,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var M,F,H;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var j,_,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading...'
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,q,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,N;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    iconBefore: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 9V5h2v4H7zm0 2v2h2v-2H7z" />
      </svg>,
    children: 'Button with Icon'
  }
}`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,R,U;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together for comparison.'
      }
    }
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All button sizes displayed together for comparison.'
      }
    }
  }
}`,...(er=(rr=g.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,tr,nr;h.parameters={...h.parameters,docs:{...(ar=h.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different button states.'
      }
    }
  }
}`,...(nr=(tr=h.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};const pr=["Playground","Primary","Secondary","Tertiary","Danger","Small","Large","Loading","Disabled","WithIcon","FullWidth","AllVariants","AllSizes","AllStates"];export{g as AllSizes,h as AllStates,m as AllVariants,o as Danger,c as Disabled,p as FullWidth,l as Large,d as Loading,a as Playground,t as Primary,n as Secondary,i as Small,s as Tertiary,u as WithIcon,pr as __namedExportsOrder,ur as default};
