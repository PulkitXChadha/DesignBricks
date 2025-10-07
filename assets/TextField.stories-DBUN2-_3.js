import{a as n,j as e}from"./jsx-runtime-D2eXtamC.js";import{r as S,R as L}from"./index-SE77F2UD.js";import{c as A}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const a=S.forwardRef(({label:t,description:i,validationState:s,message:l,size:p="default",fullWidth:U=!1,prefix:h,suffix:f,required:b=!1,disabled:o=!1,readOnly:d=!1,optional:v=!1,showClear:x=!1,onClear:u,onPressEnter:c,className:r,id:Le,value:y,onKeyDown:k,onChange:B,...ke},Be)=>{const[Oe,j]=S.useState(!1),[Me,H]=S.useState(y??""),Ae=S.useId(),w=Le||Ae,g=s==="error",O=s==="warning",M=s==="success",$=y!==void 0?y:Me,Ue=x&&$&&!o&&!d,je=m=>{m.key==="Enter"&&c&&c(m),k==null||k(m)},He=()=>{H(""),u==null||u()},$e=m=>{y===void 0&&H(m.target.value),B==null||B(m)},Y=i?`${w}-description`:void 0,G=l?`${w}-message`:void 0,Ye=[Y,G].filter(Boolean).join(" ")||void 0;return n("div",{className:A("db-textfield",`db-textfield--${p}`,{"db-textfield--full-width":U,"db-textfield--disabled":o,"db-textfield--readonly":d,"db-textfield--error":g,"db-textfield--warning":O,"db-textfield--success":M},r),children:[t&&n("label",{htmlFor:w,className:"db-textfield__label",children:[t,b&&e("span",{className:"db-textfield__required","aria-label":"required",children:" *"}),v&&e("span",{className:"db-textfield__optional",children:" (optional)"})]}),n("div",{className:A("db-textfield__wrapper",{"db-textfield__wrapper--focused":Oe,"db-textfield__wrapper--error":g,"db-textfield__wrapper--warning":O,"db-textfield__wrapper--success":M,"db-textfield__wrapper--disabled":o,"db-textfield__wrapper--readonly":d}),children:[h&&e("span",{className:"db-textfield__prefix","aria-hidden":"true",children:h}),e("input",{ref:Be,id:w,className:"db-textfield__input",disabled:o,readOnly:d,value:$,required:b,onFocus:()=>j(!0),onBlur:()=>j(!1),onKeyDown:je,onChange:$e,"aria-invalid":g||void 0,"aria-describedby":Ye,...ke}),Ue&&e("button",{type:"button",className:"db-textfield__clear",onClick:He,"aria-label":"Clear input",tabIndex:-1,children:e("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true",children:e("path",{d:"M6 4.586L9.293 1.293a1 1 0 111.414 1.414L7.414 6l3.293 3.293a1 1 0 01-1.414 1.414L6 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 6 1.293 2.707a1 1 0 011.414-1.414L6 4.586z"})})}),f&&e("span",{className:"db-textfield__suffix","aria-hidden":"true",children:f})]}),i&&!l&&e("div",{className:"db-textfield__description",id:Y,children:i}),l&&e("div",{className:A("db-textfield__message",{"db-textfield__message--error":g,"db-textfield__message--warning":O,"db-textfield__message--success":M}),id:G,role:g?"alert":void 0,children:l})]})});a.displayName="TextField";try{a.displayName="TextField",a.__docgenInfo={description:"",displayName:"TextField",props:{label:{defaultValue:null,description:"Field label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description text (helper text displayed below input)",name:"description",required:!1,type:{name:"ReactNode"}},validationState:{defaultValue:null,description:"Validation state",name:"validationState",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},message:{defaultValue:null,description:"Error message displayed below input when validationState is 'error'",name:"message",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"Field size - Databricks standard sizes",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width",name:"fullWidth",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"Prefix content (icon or text before input)",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"Suffix content (icon or text after input)",name:"suffix",required:!1,type:{name:"ReactNode"}},required:{defaultValue:{value:"false"},description:"Required field indicator",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Read-only state (focusable but not editable)",name:"readOnly",required:!1,type:{name:"boolean"}},optional:{defaultValue:{value:"false"},description:"Optional field indicator",name:"optional",required:!1,type:{name:"boolean"}},showClear:{defaultValue:{value:"false"},description:"Show clear button when input has value",name:"showClear",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"Callback when clear button is clicked",name:"onClear",required:!1,type:{name:"(() => void)"}},onPressEnter:{defaultValue:null,description:"Callback when Enter key is pressed",name:"onPressEnter",required:!1,type:{name:"((_event: KeyboardEvent<HTMLInputElement>) => void)"}}}}}catch{}const Ze={title:"Inputs/TextField",component:a,parameters:{docs:{description:{component:"A TextField (Input) component refactored to align with the Databricks design system. Features validation states, prefix/suffix content, read-only state, and enhanced accessibility."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Field label"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed below the field"},validationState:{control:"select",options:[void 0,"error","warning","success"],description:"Validation state"},message:{control:"text",description:"Message displayed below the field (typically with validation state)"},size:{control:"select",options:["small","default"],description:"Field size - small = 24px, default = 32px",table:{defaultValue:{summary:"default"}}},fullWidth:{control:"boolean",description:"Take full width of container",table:{defaultValue:{summary:!1}}},required:{control:"boolean",description:"Required field indicator",table:{defaultValue:{summary:!1}}},optional:{control:"boolean",description:"Optional field indicator",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disable the field",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",description:"Read-only state (focusable but not editable)",table:{defaultValue:{summary:!1}}},showClear:{control:"boolean",description:"Show clear button when input has value",table:{defaultValue:{summary:!1}}},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Input type",table:{defaultValue:{summary:"text"}}}},args:{label:"Label",placeholder:"Enter text...",size:"default"}},T={args:{label:"Email Address",placeholder:"name@example.com",type:"email"}},N={args:{label:"Username",placeholder:"Enter your username"}},V={args:{label:"Password",type:"password",description:"Must be at least 8 characters"},parameters:{docs:{description:{story:"Description text provides additional instructions for an Input."}}}},F={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(a,{label:"Error State",value:"invalid-email",validationState:"error",message:"Please enter a valid email address"}),e(a,{label:"Warning State",value:"password123",validationState:"warning",message:"Consider using a stronger password"}),e(a,{label:"Success State",value:"user@example.com",validationState:"success",message:"Email address is valid"})]}),parameters:{docs:{description:{story:"Input supports error, warning, and success validation states aligned with the Databricks design system."}}}},_={args:{label:"Required Field",required:!0,placeholder:"This field is required"}},E={args:{label:"Optional Field",optional:!0,placeholder:"This field is optional"},parameters:{docs:{description:{story:"Use the optional prop to explicitly mark a field as optional."}}}},q={args:{label:"Disabled Field",value:"Cannot edit this",disabled:!0},parameters:{docs:{description:{story:"Avoid using a disabled Input whenever possible. It is low-contrast and outside the tab order."}}}},C={args:{label:"Read-Only Field",value:"You can select and copy this value",readOnly:!0},parameters:{docs:{description:{story:"Use a read-only input to help users read and copy a value they can't edit. Read-only inputs can still receive focus in the tab order, unlike disabled inputs."}}}},z={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(a,{size:"small",label:"Small (24px height)",placeholder:"Small size field"}),e(a,{size:"default",label:"Default (32px height)",placeholder:"Default size field"})]}),parameters:{docs:{description:{story:"Two sizes are available: small (24px) for constrained spaces, and default (32px) as the standard size."}}}},R={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(a,{label:"Search",placeholder:"Search...",prefix:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}),e(a,{label:"Email",placeholder:"Enter email",type:"email",prefix:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})}),e(a,{label:"Amount",placeholder:"0.00",type:"number",prefix:e("span",{children:"$"}),suffix:e("span",{children:"USD"})})]}),parameters:{docs:{description:{story:"An Input can have prefix or suffix content (icon or text). This is most helpful when the icon is commonly recognized."}}}},D={render:()=>{const[t,i]=L.useState("You can clear this text");return e("div",{style:{width:"300px"},children:e(a,{label:"Clearable Input",value:t,onChange:s=>i(s.target.value),onClear:()=>i(""),showClear:!0,placeholder:"Type something..."})})},parameters:{docs:{description:{story:"When showClear is true, a clear button appears when the input has a value."}}}},I={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(a,{label:"Text",type:"text",placeholder:"Regular text input"}),e(a,{label:"Email",type:"email",placeholder:"name@example.com"}),e(a,{label:"Password",type:"password",placeholder:"Enter password"}),e(a,{label:"Number",type:"number",placeholder:"123"}),e(a,{label:"Phone",type:"tel",placeholder:"+1 (555) 000-0000"}),e(a,{label:"URL",type:"url",placeholder:"https://example.com"}),e(a,{label:"Search",type:"search",placeholder:"Search..."})]}),parameters:{docs:{description:{story:"Different input types."}}}},P={render:()=>{const[t,i]=L.useState([]);return n("div",{style:{width:"300px"},children:[e(a,{label:"Press Enter to Submit",placeholder:"Type and press Enter...",onPressEnter:s=>{const l=s.currentTarget.value;i([...t,l]),s.currentTarget.value=""}}),t.length>0&&n("div",{style:{marginTop:"16px",fontSize:"13px"},children:[e("strong",{children:"Submitted values:"}),e("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:t.map((s,l)=>e("li",{children:s},l))})]})]})},parameters:{docs:{description:{story:"The onPressEnter callback is triggered when the user presses Enter."}}}},W={render:()=>{var h,f,b,o,d,v,x,u;const[t,i]=L.useState({firstName:"",lastName:"",email:"",password:""}),[s,l]=L.useState({}),p=c=>r=>{i({...t,[c]:r.target.value}),l({...s,[c]:{}})};return n("form",{onSubmit:c=>{c.preventDefault();const r={};t.firstName||(r.firstName={state:"error",message:"First name is required"}),t.lastName||(r.lastName={state:"error",message:"Last name is required"}),t.email?t.email.includes("@")||(r.email={state:"error",message:"Invalid email format"}):r.email={state:"error",message:"Email is required"},t.password?t.password.length<8&&(r.password={state:"error",message:"Password must be at least 8 characters"}):r.password={state:"error",message:"Password is required"},l(r),Object.keys(r).length===0&&alert("Form submitted successfully!")},style:{maxWidth:"400px"},children:[n("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e(a,{label:"First Name",required:!0,fullWidth:!0,value:t.firstName,onChange:p("firstName"),validationState:(h=s.firstName)==null?void 0:h.state,message:(f=s.firstName)==null?void 0:f.message}),e(a,{label:"Last Name",required:!0,fullWidth:!0,value:t.lastName,onChange:p("lastName"),validationState:(b=s.lastName)==null?void 0:b.state,message:(o=s.lastName)==null?void 0:o.message})]}),e("div",{style:{marginBottom:"16px"},children:e(a,{label:"Email",type:"email",required:!0,fullWidth:!0,value:t.email,onChange:p("email"),validationState:(d=s.email)==null?void 0:d.state,message:(v=s.email)==null?void 0:v.message,description:"We'll never share your email"})}),e("div",{style:{marginBottom:"24px"},children:e(a,{label:"Password",type:"password",required:!0,fullWidth:!0,value:t.password,onChange:p("password"),validationState:(x=s.password)==null?void 0:x.state,message:(u=s.password)==null?void 0:u.message,description:"Must be at least 8 characters"})}),e("button",{type:"submit",className:"db-button db-button--primary db-button--medium",children:"Submit"})]})},parameters:{docs:{description:{story:"Interactive form example with validation using validationState and message props."}}}};var J,Q,X;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'name@example.com',
    type: 'email'
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,K,ee;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(ee=(K=N.parameters)==null?void 0:K.docs)==null?void 0:ee.source}}};var ae,te,se;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    description: 'Must be at least 8 characters'
  },
  parameters: {
    docs: {
      description: {
        story: 'Description text provides additional instructions for an Input.'
      }
    }
  }
}`,...(se=(te=V.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,le,ne;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextField label="Error State" value="invalid-email" validationState="error" message="Please enter a valid email address" />
      <TextField label="Warning State" value="password123" validationState="warning" message="Consider using a stronger password" />
      <TextField label="Success State" value="user@example.com" validationState="success" message="Email address is valid" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input supports error, warning, and success validation states aligned with the Databricks design system.'
      }
    }
  }
}`,...(ne=(le=F.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,oe,de;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required'
  }
}`,...(de=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Optional Field',
    optional: true,
    placeholder: 'This field is optional'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the optional prop to explicitly mark a field as optional.'
      }
    }
  }
}`,...(ue=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,fe;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using a disabled Input whenever possible. It is low-contrast and outside the tab order.'
      }
    }
  }
}`,...(fe=(he=q.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ge,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'Read-Only Field',
    value: 'You can select and copy this value',
    readOnly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use a read-only input to help users read and copy a value they can\\'t edit. Read-only inputs can still receive focus in the tab order, unlike disabled inputs.'
      }
    }
  }
}`,...(ve=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var xe,ye,we;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextField size="small" label="Small (24px height)" placeholder="Small size field" />
      <TextField size="default" label="Default (32px height)" placeholder="Default size field" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Two sizes are available: small (24px) for constrained spaces, and default (32px) as the standard size.'
      }
    }
  }
}`,...(we=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Se,Te,Ne;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextField label="Search" placeholder="Search..." prefix={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>} />
      <TextField label="Email" placeholder="Enter email" type="email" prefix={<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg>} />
      <TextField label="Amount" placeholder="0.00" type="number" prefix={<span>$</span>} suffix={<span>USD</span>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'An Input can have prefix or suffix content (icon or text). This is most helpful when the icon is commonly recognized.'
      }
    }
  }
}`,...(Ne=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Ve,Fe,_e;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('You can clear this text');
    return <div style={{
      width: '300px'
    }}>
        <TextField label="Clearable Input" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} showClear placeholder="Type something..." />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'When showClear is true, a clear button appears when the input has a value.'
      }
    }
  }
}`,...(_e=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};var Ee,qe,Ce;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <TextField label="Text" type="text" placeholder="Regular text input" />
      <TextField label="Email" type="email" placeholder="name@example.com" />
      <TextField label="Password" type="password" placeholder="Enter password" />
      <TextField label="Number" type="number" placeholder="123" />
      <TextField label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
      <TextField label="URL" type="url" placeholder="https://example.com" />
      <TextField label="Search" type="search" placeholder="Search..." />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different input types.'
      }
    }
  }
}`,...(Ce=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Ce.source}}};var ze,Re,De;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = React.useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <TextField label="Press Enter to Submit" placeholder="Type and press Enter..." onPressEnter={e => {
        const value = e.currentTarget.value;
        setLog([...log, value]);
        e.currentTarget.value = '';
      }} />
        {log.length > 0 && <div style={{
        marginTop: '16px',
        fontSize: '13px'
      }}>
            <strong>Submitted values:</strong>
            <ul style={{
          marginTop: '8px',
          paddingLeft: '20px'
        }}>
              {log.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The onPressEnter callback is triggered when the user presses Enter.'
      }
    }
  }
}`,...(De=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Ie,Pe,We;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
    const [validationStates, setValidationStates] = React.useState<Record<string, {
      state?: 'error' | 'warning' | 'success';
      message?: string;
    }>>({});
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [field]: e.target.value
      });
      setValidationStates({
        ...validationStates,
        [field]: {}
      });
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newValidation: Record<string, {
        state: 'error' | 'warning' | 'success';
        message: string;
      }> = {};
      if (!values.firstName) {
        newValidation.firstName = {
          state: 'error',
          message: 'First name is required'
        };
      }
      if (!values.lastName) {
        newValidation.lastName = {
          state: 'error',
          message: 'Last name is required'
        };
      }
      if (!values.email) {
        newValidation.email = {
          state: 'error',
          message: 'Email is required'
        };
      } else if (!values.email.includes('@')) {
        newValidation.email = {
          state: 'error',
          message: 'Invalid email format'
        };
      }
      if (!values.password) {
        newValidation.password = {
          state: 'error',
          message: 'Password is required'
        };
      } else if (values.password.length < 8) {
        newValidation.password = {
          state: 'error',
          message: 'Password must be at least 8 characters'
        };
      }
      setValidationStates(newValidation);
      if (Object.keys(newValidation).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    return <form onSubmit={handleSubmit} style={{
      maxWidth: '400px'
    }}>
        <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '16px'
      }}>
          <TextField label="First Name" required fullWidth value={values.firstName} onChange={handleChange('firstName')} validationState={validationStates.firstName?.state} message={validationStates.firstName?.message} />
          <TextField label="Last Name" required fullWidth value={values.lastName} onChange={handleChange('lastName')} validationState={validationStates.lastName?.state} message={validationStates.lastName?.message} />
        </div>
        <div style={{
        marginBottom: '16px'
      }}>
          <TextField label="Email" type="email" required fullWidth value={values.email} onChange={handleChange('email')} validationState={validationStates.email?.state} message={validationStates.email?.message} description="We'll never share your email" />
        </div>
        <div style={{
        marginBottom: '24px'
      }}>
          <TextField label="Password" type="password" required fullWidth value={values.password} onChange={handleChange('password')} validationState={validationStates.password?.state} message={validationStates.password?.message} description="Must be at least 8 characters" />
        </div>
        <button type="submit" className="db-button db-button--primary db-button--medium">
          Submit
        </button>
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form example with validation using validationState and message props.'
      }
    }
  }
}`,...(We=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:We.source}}};const Ke=["Playground","Basic","WithDescription","ValidationStates","Required","Optional","Disabled","ReadOnly","Sizes","WithPrefixAndSuffix","WithClearButton","InputTypes","OnPressEnter","FormExample"];export{N as Basic,q as Disabled,W as FormExample,I as InputTypes,P as OnPressEnter,E as Optional,T as Playground,C as ReadOnly,_ as Required,z as Sizes,F as ValidationStates,D as WithClearButton,V as WithDescription,R as WithPrefixAndSuffix,Ke as __namedExportsOrder,Ze as default};
