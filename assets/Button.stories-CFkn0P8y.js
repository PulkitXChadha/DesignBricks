import{j as r}from"./jsx-runtime-LnmZrwv1.js";import{B as e}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./index-CWnxZbJP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const ur={title:"Foundation/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"Buttons are clickable elements that trigger actions. They communicate what will happen when users interact with them."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","danger"],description:"The visual style of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Whether the button should take full width of its container",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Shows a loading spinner and disables the button",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:!1}}},children:{control:"text",description:"Button label"},onClick:{action:"clicked",description:"Click handler"}},args:{children:"Button",variant:"primary",size:"medium"}},a={args:{children:"Click me"}},t={args:{variant:"primary",children:"Primary Button"}},s={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"tertiary",children:"Tertiary Button"}},o={args:{variant:"danger",children:"Danger Button"}},i={args:{size:"small",children:"Small Button"}},l={args:{size:"large",children:"Large Button"}},d={args:{loading:!0,children:"Loading..."}},c={args:{disabled:!0,children:"Disabled"}},u={args:{iconBefore:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:r.jsx("path",{d:"M8 2a6 6 0 100 12A6 6 0 008 2zM7 9V5h2v4H7zm0 2v2h2v-2H7z"})}),children:"Button with Icon"}},p={args:{fullWidth:!0,children:"Full Width Button"},decorators:[sr=>r.jsx("div",{style:{width:"400px"},children:r.jsx(sr,{})})]},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"tertiary",children:"Tertiary"}),r.jsx(e,{variant:"danger",children:"Danger"})]}),parameters:{docs:{description:{story:"All button variants displayed together for comparison."}}}},g={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{size:"small",children:"Small"}),r.jsx(e,{size:"medium",children:"Medium"}),r.jsx(e,{size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"All button sizes displayed together for comparison."}}}},h={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{children:"Default"}),r.jsx(e,{disabled:!0,children:"Disabled"}),r.jsx(e,{loading:!0,children:"Loading"})]}),parameters:{docs:{description:{story:"Different button states."}}}};var y,B,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Click me'
  }
}`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var f,x,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,z,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var w,D,W;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...(W=(D=n.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var A,L,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger Button'
  }
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var V,P,k;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: 'Small Button'
  }
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,I,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: 'Large Button'
  }
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var F,H,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading...'
  }
}`,...(E=(H=d.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var _,O,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,G,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    iconBefore: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM7 9V5h2v4H7zm0 2v2h2v-2H7z" />
      </svg>,
    children: 'Button with Icon'
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...(Q=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(rr=($=g.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,tr;h.parameters={...h.parameters,docs:{...(er=h.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(tr=(ar=h.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};const pr=["Playground","Primary","Secondary","Tertiary","Danger","Small","Large","Loading","Disabled","WithIcon","FullWidth","AllVariants","AllSizes","AllStates"];export{g as AllSizes,h as AllStates,m as AllVariants,o as Danger,c as Disabled,p as FullWidth,l as Large,d as Loading,a as Playground,t as Primary,s as Secondary,i as Small,n as Tertiary,u as WithIcon,pr as __namedExportsOrder,ur as default};
