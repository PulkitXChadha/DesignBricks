import{a as s,j as e}from"./jsx-runtime-D2eXtamC.js";import{r as Q,R as p}from"./index-SE77F2UD.js";import{c as X}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const t=Q.forwardRef(({label:n,size:i="medium",error:o=!1,indeterminate:c=!1,helperText:r,disabled:l=!1,className:d,id:m,...h},a)=>{const u=m||`checkbox-${Math.random().toString(36).substr(2,9)}`;return p.useEffect(()=>{a&&"current"in a&&a.current&&(a.current.indeterminate=c)},[c,a]),s("div",{className:X("db-checkbox",`db-checkbox--${i}`,{"db-checkbox--error":o,"db-checkbox--disabled":l},d),children:[s("label",{htmlFor:u,className:"db-checkbox__wrapper",children:[e("input",{ref:a,type:"checkbox",id:u,className:"db-checkbox__input",disabled:l,...h}),s("span",{className:"db-checkbox__box",children:[e("svg",{className:"db-checkbox__checkmark",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1 4.5L4.5 8L11 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e("svg",{className:"db-checkbox__indeterminate",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M1 1H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]}),n&&e("span",{className:"db-checkbox__label",children:n})]}),r&&e("div",{className:"db-checkbox__helper",children:r})]})});t.displayName="Checkbox";try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Label for the checkbox",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Size of the checkbox",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},error:{defaultValue:{value:"false"},description:"Error state",name:"error",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate state",name:"indeterminate",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"Helper text",name:"helperText",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"Inputs/Checkbox",component:t,parameters:{docs:{description:{component:"Checkboxes allow users to select multiple options from a set."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Checkbox label"},size:{control:"select",options:["small","medium","large"],description:"Checkbox size",table:{defaultValue:{summary:"medium"}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Indeterminate state",table:{defaultValue:{summary:!1}}},helperText:{control:"text",description:"Helper text below checkbox"},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},checked:{control:"boolean",description:"Checked state"},onChange:{action:"changed",description:"Change handler"}},args:{label:"Checkbox",size:"medium"}},b={args:{label:"I agree to the terms and conditions"}},k={args:{label:"Basic checkbox"}},x={args:{label:"Subscribe to newsletter",helperText:"You can unsubscribe at any time"}},g={render:()=>s("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(t,{size:"small",label:"Small checkbox"}),e(t,{size:"medium",label:"Medium checkbox"}),e(t,{size:"large",label:"Large checkbox"})]}),parameters:{docs:{description:{story:"Different checkbox sizes."}}}},C={render:()=>s("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(t,{label:"Unchecked"}),e(t,{label:"Checked",checked:!0}),e(t,{label:"Indeterminate",indeterminate:!0}),e(t,{label:"Disabled",disabled:!0}),e(t,{label:"Disabled Checked",disabled:!0,checked:!0}),e(t,{label:"Error state",error:!0})]}),parameters:{docs:{description:{story:"Various checkbox states."}}}},f={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e(t,{label:"Accept terms",error:!0,helperText:"You must accept the terms to continue"})}),parameters:{docs:{description:{story:"Checkbox with error state and helper text."}}}},y={render:()=>{const[n,i]=p.useState(["option2"]),o=c=>r=>{r.target.checked?i([...n,c]):i(n.filter(l=>l!==c))};return s("div",{children:[e("h4",{style:{margin:"0 0 12px 0"},children:"Select your preferences:"}),s("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(t,{label:"Email notifications",checked:n.includes("option1"),onChange:o("option1")}),e(t,{label:"SMS notifications",checked:n.includes("option2"),onChange:o("option2")}),e(t,{label:"Push notifications",checked:n.includes("option3"),onChange:o("option3")}),e(t,{label:"Marketing emails",checked:n.includes("option4"),onChange:o("option4"),helperText:"Receive updates about new features and promotions"})]}),s("p",{style:{marginTop:"16px",fontSize:"13px",color:"#6B7280"},children:["Selected: ",n.length>0?n.join(", "):"None"]})]})},parameters:{docs:{description:{story:"Multiple checkboxes working together as a group."}}}},S={render:()=>{const[n,i]=p.useState(!1),[o,c]=p.useState(!1),[r,l]=p.useState([!1,!1,!1]);p.useEffect(()=>{const h=r.every(Boolean),a=r.some(Boolean);i(h),c(a&&!h)},[r]);const d=h=>{const a=h.target.checked;i(a),l([a,a,a]),c(!1)},m=h=>a=>{const u=[...r];u[h]=a.target.checked,l(u)};return s("div",{children:[e(t,{label:"Select all",checked:n,indeterminate:o,onChange:d}),s("div",{style:{marginLeft:"24px",marginTop:"8px",display:"flex",flexDirection:"column",gap:"8px"},children:[e(t,{label:"Option 1",checked:r[0],onChange:m(0)}),e(t,{label:"Option 2",checked:r[1],onChange:m(1)}),e(t,{label:"Option 3",checked:r[2],onChange:m(2)})]})]})},parameters:{docs:{description:{story:"Indeterminate state example with parent-child checkboxes."}}}},v={render:()=>{const[n,i]=p.useState({terms:!1,newsletter:!1,updates:!1}),[o,c]=p.useState({}),r=d=>{if(d.preventDefault(),!n.terms){c({terms:!0});return}alert(`Form submitted!
${JSON.stringify(n,null,2)}`)},l=d=>m=>{i({...n,[d]:m.target.checked}),c({...o,[d]:!1})};return s("form",{onSubmit:r,style:{maxWidth:"400px"},children:[e("h4",{style:{margin:"0 0 16px 0"},children:"Complete your registration"}),s("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"24px"},children:[e(t,{label:"I accept the terms and conditions",checked:n.terms,onChange:l("terms"),error:o.terms,helperText:o.terms?"You must accept the terms to continue":void 0}),e(t,{label:"Subscribe to newsletter",checked:n.newsletter,onChange:l("newsletter"),helperText:"Get weekly updates about new features"}),e(t,{label:"Receive product updates",checked:n.updates,onChange:l("updates")})]}),e("button",{type:"submit",className:"db-button db-button--primary db-button--medium",children:"Submit"})]})},parameters:{docs:{description:{story:"Checkboxes in a form with validation."}}}};var w,D,E;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions'
  }
}`,...(E=(D=b.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,_,T;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Basic checkbox'
  }
}`,...(T=(_=k.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var R,z,N;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time'
  }
}`,...(N=(z=x.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var M,P,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var L,V,F;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(V=C.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,O,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(O=f.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var W,Y,q;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var G,$,A;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(A=($=S.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var J,U,K;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(U=v.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};const re=["Playground","Basic","WithHelperText","Sizes","States","ErrorState","CheckboxGroup","IndeterminateExample","FormExample"];export{k as Basic,y as CheckboxGroup,f as ErrorState,v as FormExample,S as IndeterminateExample,b as Playground,g as Sizes,C as States,x as WithHelperText,re as __namedExportsOrder,ae as default};
