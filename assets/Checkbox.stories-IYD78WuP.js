import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as K,R as p}from"./index-CWnxZbJP.js";import{c as Q}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const t=K.forwardRef(({label:r,size:l="medium",error:o=!1,indeterminate:c=!1,helperText:a,disabled:n=!1,className:i,id:m,...d},s)=>{const h=m||`checkbox-${Math.random().toString(36).substr(2,9)}`;return p.useEffect(()=>{s&&"current"in s&&s.current&&(s.current.indeterminate=c)},[c,s]),e.jsxs("div",{className:Q("db-checkbox",`db-checkbox--${l}`,{"db-checkbox--error":o,"db-checkbox--disabled":n},i),children:[e.jsxs("label",{htmlFor:h,className:"db-checkbox__wrapper",children:[e.jsx("input",{ref:s,type:"checkbox",id:h,className:"db-checkbox__input",disabled:n,...d}),e.jsxs("span",{className:"db-checkbox__box",children:[e.jsx("svg",{className:"db-checkbox__checkmark",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 4.5L4.5 8L11 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("svg",{className:"db-checkbox__indeterminate",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 1H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]}),r&&e.jsx("span",{className:"db-checkbox__label",children:r})]}),a&&e.jsx("div",{className:"db-checkbox__helper",children:a})]})});t.displayName="Checkbox";t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Label for the checkbox"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the checkbox",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ce={title:"Inputs/Checkbox",component:t,parameters:{docs:{description:{component:"Checkboxes allow users to select multiple options from a set."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label"},size:{control:"select",options:["small","medium","large"],description:"Checkbox size",table:{defaultValue:{summary:"medium"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Indeterminate state",table:{defaultValue:{summary:!1}}},helperText:{control:"text",description:"Helper text below checkbox"},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},checked:{control:"boolean",description:"Checked state"},onChange:{action:"changed",description:"Change handler"}},args:{label:"Checkbox",size:"medium"}},u={args:{label:"I agree to the terms and conditions"}},x={args:{label:"Basic checkbox"}},b={args:{label:"Subscribe to newsletter",helperText:"You can unsubscribe at any time"}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{size:"small",label:"Small checkbox"}),e.jsx(t,{size:"medium",label:"Medium checkbox"}),e.jsx(t,{size:"large",label:"Large checkbox"})]}),parameters:{docs:{description:{story:"Different checkbox sizes."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0}),e.jsx(t,{label:"Error state",error:!0})]}),parameters:{docs:{description:{story:"Various checkbox states."}}}},g={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.jsx(t,{label:"Accept terms",error:!0,helperText:"You must accept the terms to continue"})}),parameters:{docs:{description:{story:"Checkbox with error state and helper text."}}}},X=()=>{const[r,l]=p.useState(["option2"]),o=c=>a=>{a.target.checked?l([...r,c]):l(r.filter(n=>n!==c))};return e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Select your preferences:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Email notifications",checked:r.includes("option1"),onChange:o("option1")}),e.jsx(t,{label:"SMS notifications",checked:r.includes("option2"),onChange:o("option2")}),e.jsx(t,{label:"Push notifications",checked:r.includes("option3"),onChange:o("option3")}),e.jsx(t,{label:"Marketing emails",checked:r.includes("option4"),onChange:o("option4"),helperText:"Receive updates about new features and promotions"})]}),e.jsxs("p",{style:{marginTop:"16px",fontSize:"13px",color:"#6B7280"},children:["Selected: ",r.length>0?r.join(", "):"None"]})]})},C={render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:"Multiple checkboxes working together as a group."}}}},Z=()=>{const[r,l]=p.useState(!1),[o,c]=p.useState(!1),[a,n]=p.useState([!1,!1,!1]);p.useEffect(()=>{const d=a.every(Boolean),s=a.some(Boolean);l(d),c(s&&!d)},[a]);const i=d=>{const s=d.target.checked;l(s),n([s,s,s]),c(!1)},m=d=>s=>{const h=[...a];h[d]=s.target.checked,n(h)};return e.jsxs("div",{children:[e.jsx(t,{label:"Select all",checked:r,indeterminate:o,onChange:i}),e.jsxs("div",{style:{marginLeft:"24px",marginTop:"8px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{label:"Option 1",checked:a[0],onChange:m(0)}),e.jsx(t,{label:"Option 2",checked:a[1],onChange:m(1)}),e.jsx(t,{label:"Option 3",checked:a[2],onChange:m(2)})]})]})},y={render:()=>e.jsx(Z,{}),parameters:{docs:{description:{story:"Indeterminate state example with parent-child checkboxes."}}}},ee=()=>{const[r,l]=p.useState({terms:!1,newsletter:!1,updates:!1}),[o,c]=p.useState({}),a=i=>{if(i.preventDefault(),!r.terms){c({terms:!0});return}alert(`Form submitted!
${JSON.stringify(r,null,2)}`)},n=i=>m=>{l({...r,[i]:m.target.checked}),c({...o,[i]:!1})};return e.jsxs("form",{onSubmit:a,style:{maxWidth:"400px"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0"},children:"Complete your registration"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[e.jsx(t,{label:"I accept the terms and conditions",checked:r.terms,onChange:n("terms"),error:o.terms,helperText:o.terms?"You must accept the terms to continue":void 0}),e.jsx(t,{label:"Subscribe to newsletter",checked:r.newsletter,onChange:n("newsletter"),helperText:"Get weekly updates about new features"}),e.jsx(t,{label:"Receive product updates",checked:r.updates,onChange:n("updates")})]}),e.jsx("button",{type:"submit",className:"db-button db-button--primary db-button--medium",children:"Submit"})]})},j={render:()=>e.jsx(ee,{}),parameters:{docs:{description:{story:"Checkboxes in a form with validation."}}}};var S,v,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions'
  }
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,D,I;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Basic checkbox'
  }
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,_,z;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time'
  }
}`,...(z=(_=b.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var N,B,V;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox size="small" label="Small checkbox" />
      <Checkbox size="medium" label="Medium checkbox" />
      <Checkbox size="large" label="Large checkbox" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different checkbox sizes.'
      }
    }
  }
}`,...(V=(B=k.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var L,M,F;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
      <Checkbox label="Error state" error />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various checkbox states.'
      }
    }
  }
}`,...(F=(M=f.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var q,O,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox label="Accept terms" error helperText="You must accept the terms to continue" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with error state and helper text.'
      }
    }
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,G,H;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <CheckboxGroupComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes working together as a group.'
      }
    }
  }
}`,...(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var W,Y,$;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <IndeterminateExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate state example with parent-child checkboxes.'
      }
    }
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var A,U,J;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <FormExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes in a form with validation.'
      }
    }
  }
}`,...(J=(U=j.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const ne=["Playground","Basic","WithHelperText","Sizes","States","ErrorState","CheckboxGroup","IndeterminateExample","FormExample"];export{x as Basic,C as CheckboxGroup,g as ErrorState,j as FormExample,y as IndeterminateExample,u as Playground,k as Sizes,f as States,b as WithHelperText,ne as __namedExportsOrder,ce as default};
