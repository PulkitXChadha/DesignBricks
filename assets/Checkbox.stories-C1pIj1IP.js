import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as K,R as h}from"./index-Dz3UJJSw.js";import{c as Q}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const t=K.forwardRef(({label:a,size:l="medium",error:o=!1,indeterminate:n=!1,helperText:r,disabled:c=!1,className:i,id:p,...d},s)=>{const m=p||`checkbox-${Math.random().toString(36).substr(2,9)}`;return h.useEffect(()=>{s&&"current"in s&&s.current&&(s.current.indeterminate=n)},[n,s]),e.jsxs("div",{className:Q("db-checkbox",`db-checkbox--${l}`,{"db-checkbox--error":o,"db-checkbox--disabled":c},i),children:[e.jsxs("label",{htmlFor:m,className:"db-checkbox__wrapper",children:[e.jsx("input",{ref:s,type:"checkbox",id:m,className:"db-checkbox__input",disabled:c,...d}),e.jsxs("span",{className:"db-checkbox__box",children:[e.jsx("svg",{className:"db-checkbox__checkmark",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 4.5L4.5 8L11 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("svg",{className:"db-checkbox__indeterminate",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 1H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]}),a&&e.jsx("span",{className:"db-checkbox__label",children:a})]}),r&&e.jsx("div",{className:"db-checkbox__helper",children:r})]})});t.displayName="Checkbox";t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Label for the checkbox"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the checkbox",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ae={title:"Inputs/Checkbox",component:t,parameters:{docs:{description:{component:"Checkboxes allow users to select multiple options from a set."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label"},size:{control:"select",options:["small","medium","large"],description:"Checkbox size",table:{defaultValue:{summary:"medium"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Indeterminate state",table:{defaultValue:{summary:!1}}},helperText:{control:"text",description:"Helper text below checkbox"},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},checked:{control:"boolean",description:"Checked state"},onChange:{action:"changed",description:"Change handler"}},args:{label:"Checkbox",size:"medium"}},u={args:{label:"I agree to the terms and conditions"}},x={args:{label:"Basic checkbox"}},b={args:{label:"Subscribe to newsletter",helperText:"You can unsubscribe at any time"}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{size:"small",label:"Small checkbox"}),e.jsx(t,{size:"medium",label:"Medium checkbox"}),e.jsx(t,{size:"large",label:"Large checkbox"})]}),parameters:{docs:{description:{story:"Different checkbox sizes."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Indeterminate",indeterminate:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0}),e.jsx(t,{label:"Error state",error:!0})]}),parameters:{docs:{description:{story:"Various checkbox states."}}}},C={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.jsx(t,{label:"Accept terms",error:!0,helperText:"You must accept the terms to continue"})}),parameters:{docs:{description:{story:"Checkbox with error state and helper text."}}}},f={render:()=>{const[a,l]=h.useState(["option2"]),o=n=>r=>{r.target.checked?l([...a,n]):l(a.filter(c=>c!==n))};return e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Select your preferences:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Email notifications",checked:a.includes("option1"),onChange:o("option1")}),e.jsx(t,{label:"SMS notifications",checked:a.includes("option2"),onChange:o("option2")}),e.jsx(t,{label:"Push notifications",checked:a.includes("option3"),onChange:o("option3")}),e.jsx(t,{label:"Marketing emails",checked:a.includes("option4"),onChange:o("option4"),helperText:"Receive updates about new features and promotions"})]}),e.jsxs("p",{style:{marginTop:"16px",fontSize:"13px",color:"#6B7280"},children:["Selected: ",a.length>0?a.join(", "):"None"]})]})},parameters:{docs:{description:{story:"Multiple checkboxes working together as a group."}}}},y={render:()=>{const[a,l]=h.useState(!1),[o,n]=h.useState(!1),[r,c]=h.useState([!1,!1,!1]);h.useEffect(()=>{const d=r.every(Boolean),s=r.some(Boolean);l(d),n(s&&!d)},[r]);const i=d=>{const s=d.target.checked;l(s),c([s,s,s]),n(!1)},p=d=>s=>{const m=[...r];m[d]=s.target.checked,c(m)};return e.jsxs("div",{children:[e.jsx(t,{label:"Select all",checked:a,indeterminate:o,onChange:i}),e.jsxs("div",{style:{marginLeft:"24px",marginTop:"8px",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(t,{label:"Option 1",checked:r[0],onChange:p(0)}),e.jsx(t,{label:"Option 2",checked:r[1],onChange:p(1)}),e.jsx(t,{label:"Option 3",checked:r[2],onChange:p(2)})]})]})},parameters:{docs:{description:{story:"Indeterminate state example with parent-child checkboxes."}}}},S={render:()=>{const[a,l]=h.useState({terms:!1,newsletter:!1,updates:!1}),[o,n]=h.useState({}),r=i=>{if(i.preventDefault(),!a.terms){n({terms:!0});return}alert(`Form submitted!
${JSON.stringify(a,null,2)}`)},c=i=>p=>{l({...a,[i]:p.target.checked}),n({...o,[i]:!1})};return e.jsxs("form",{onSubmit:r,style:{maxWidth:"400px"},children:[e.jsx("h4",{style:{margin:"0 0 16px 0"},children:"Complete your registration"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[e.jsx(t,{label:"I accept the terms and conditions",checked:a.terms,onChange:c("terms"),error:o.terms,helperText:o.terms?"You must accept the terms to continue":void 0}),e.jsx(t,{label:"Subscribe to newsletter",checked:a.newsletter,onChange:c("newsletter"),helperText:"Get weekly updates about new features"}),e.jsx(t,{label:"Receive product updates",checked:a.updates,onChange:c("updates")})]}),e.jsx("button",{type:"submit",className:"db-button db-button--primary db-button--medium",children:"Submit"})]})},parameters:{docs:{description:{story:"Checkboxes in a form with validation."}}}};var v,j,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions'
  }
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var D,E,T;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Basic checkbox'
  }
}`,...(T=(E=x.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var I,R,_;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time'
  }
}`,...(_=(R=b.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var z,N,M;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(N=k.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var P,B,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,V,F;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(V=C.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,q,W;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['option2']);
    const handleChange = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelected([...selected, option]);
      } else {
        setSelected(selected.filter(item => item !== option));
      }
    };
    return <div>
        <h4 style={{
        margin: '0 0 12px 0'
      }}>Select your preferences:</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Checkbox label="Email notifications" checked={selected.includes('option1')} onChange={handleChange('option1')} />
          <Checkbox label="SMS notifications" checked={selected.includes('option2')} onChange={handleChange('option2')} />
          <Checkbox label="Push notifications" checked={selected.includes('option3')} onChange={handleChange('option3')} />
          <Checkbox label="Marketing emails" checked={selected.includes('option4')} onChange={handleChange('option4')} helperText="Receive updates about new features and promotions" />
        </div>
        <p style={{
        marginTop: '16px',
        fontSize: '13px',
        color: '#6B7280'
      }}>
          Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes working together as a group.'
      }
    }
  }
}`,...(W=(q=f.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var Y,G,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [parentChecked, setParentChecked] = React.useState(false);
    const [parentIndeterminate, setParentIndeterminate] = React.useState(false);
    const [childChecked, setChildChecked] = React.useState([false, false, false]);
    React.useEffect(() => {
      const allChecked = childChecked.every(Boolean);
      const someChecked = childChecked.some(Boolean);
      setParentChecked(allChecked);
      setParentIndeterminate(someChecked && !allChecked);
    }, [childChecked]);
    const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setParentChecked(checked);
      setChildChecked([checked, checked, checked]);
      setParentIndeterminate(false);
    };
    const handleChildChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChildChecked = [...childChecked];
      newChildChecked[index] = e.target.checked;
      setChildChecked(newChildChecked);
    };
    return <div>
        <Checkbox label="Select all" checked={parentChecked} indeterminate={parentIndeterminate} onChange={handleParentChange} />
        <div style={{
        marginLeft: '24px',
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Checkbox label="Option 1" checked={childChecked[0]} onChange={handleChildChange(0)} />
          <Checkbox label="Option 2" checked={childChecked[1]} onChange={handleChildChange(1)} />
          <Checkbox label="Option 3" checked={childChecked[2]} onChange={handleChildChange(2)} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate state example with parent-child checkboxes.'
      }
    }
  }
}`,...($=(G=y.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var A,J,U;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      terms: false,
      newsletter: false,
      updates: false
    });
    const [errors, setErrors] = React.useState<Record<string, boolean>>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.terms) {
        setErrors({
          terms: true
        });
        return;
      }
      alert(\`Form submitted!\\n\${JSON.stringify(formData, null, 2)}\`);
    };
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.checked
      });
      setErrors({
        ...errors,
        [field]: false
      });
    };
    return <form onSubmit={handleSubmit} style={{
      maxWidth: '400px'
    }}>
        <h4 style={{
        margin: '0 0 16px 0'
      }}>Complete your registration</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '24px'
      }}>
          <Checkbox label="I accept the terms and conditions" checked={formData.terms} onChange={handleChange('terms')} error={errors.terms} helperText={errors.terms ? 'You must accept the terms to continue' : undefined} />
          <Checkbox label="Subscribe to newsletter" checked={formData.newsletter} onChange={handleChange('newsletter')} helperText="Get weekly updates about new features" />
          <Checkbox label="Receive product updates" checked={formData.updates} onChange={handleChange('updates')} />
        </div>
        <button type="submit" className="db-button db-button--primary db-button--medium">
          Submit
        </button>
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes in a form with validation.'
      }
    }
  }
}`,...(U=(J=S.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const se=["Playground","Basic","WithHelperText","Sizes","States","ErrorState","CheckboxGroup","IndeterminateExample","FormExample"];export{x as Basic,f as CheckboxGroup,C as ErrorState,S as FormExample,y as IndeterminateExample,u as Playground,k as Sizes,g as States,b as WithHelperText,se as __namedExportsOrder,ae as default};
