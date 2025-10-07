import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w,R as P}from"./index-Dz3UJJSw.js";import{c as O}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=w.forwardRef(({label:t,description:i,validationState:s,message:l,size:c="default",fullWidth:L=!1,prefix:m,suffix:h,required:f=!1,disabled:n=!1,readOnly:o=!1,optional:b=!1,showClear:g=!1,onClear:p,onPressEnter:d,className:r,id:Pe,value:v,onKeyDown:W,onChange:k,...Le},We)=>{const[ke,A]=w.useState(!1),[Be,U]=w.useState(v??""),Me=w.useId(),y=Pe||Me,x=s==="error",B=s==="warning",M=s==="success",H=v!==void 0?v:Be,Oe=g&&H&&!n&&!o,Ae=u=>{u.key==="Enter"&&d&&d(u),W==null||W(u)},Ue=()=>{U(""),p==null||p()},He=u=>{v===void 0&&U(u.target.value),k==null||k(u)},$=i?`${y}-description`:void 0,Y=l?`${y}-message`:void 0,$e=[$,Y].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:O("db-textfield",`db-textfield--${c}`,{"db-textfield--full-width":L,"db-textfield--disabled":n,"db-textfield--readonly":o,"db-textfield--error":x,"db-textfield--warning":B,"db-textfield--success":M},r),children:[t&&e.jsxs("label",{htmlFor:y,className:"db-textfield__label",children:[t,f&&e.jsx("span",{className:"db-textfield__required","aria-label":"required",children:" *"}),b&&e.jsx("span",{className:"db-textfield__optional",children:" (optional)"})]}),e.jsxs("div",{className:O("db-textfield__wrapper",{"db-textfield__wrapper--focused":ke,"db-textfield__wrapper--error":x,"db-textfield__wrapper--warning":B,"db-textfield__wrapper--success":M,"db-textfield__wrapper--disabled":n,"db-textfield__wrapper--readonly":o}),children:[m&&e.jsx("span",{className:"db-textfield__prefix","aria-hidden":"true",children:m}),e.jsx("input",{ref:We,id:y,className:"db-textfield__input",disabled:n,readOnly:o,value:H,required:f,onFocus:()=>A(!0),onBlur:()=>A(!1),onKeyDown:Ae,onChange:He,"aria-invalid":x||void 0,"aria-describedby":$e,...Le}),Oe&&e.jsx("button",{type:"button",className:"db-textfield__clear",onClick:Ue,"aria-label":"Clear input",tabIndex:-1,children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M6 4.586L9.293 1.293a1 1 0 111.414 1.414L7.414 6l3.293 3.293a1 1 0 01-1.414 1.414L6 7.414l-3.293 3.293a1 1 0 01-1.414-1.414L4.586 6 1.293 2.707a1 1 0 011.414-1.414L6 4.586z"})})}),h&&e.jsx("span",{className:"db-textfield__suffix","aria-hidden":"true",children:h})]}),i&&!l&&e.jsx("div",{className:"db-textfield__description",id:$,children:i}),l&&e.jsx("div",{className:O("db-textfield__message",{"db-textfield__message--error":x,"db-textfield__message--warning":B,"db-textfield__message--success":M}),id:Y,role:x?"alert":void 0,children:l})]})});a.displayName="TextField";a.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Field label"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Description text (helper text displayed below input)"},validationState:{required:!1,tsType:{name:"union",raw:"'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"Validation state"},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error message displayed below input when validationState is 'error'"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:"Field size - Databricks standard sizes",defaultValue:{value:"'default'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width",defaultValue:{value:"false",computed:!1}},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Prefix content (icon or text before input)"},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Suffix content (icon or text after input)"},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only state (focusable but not editable)",defaultValue:{value:"false",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:"Optional field indicator",defaultValue:{value:"false",computed:!1}},showClear:{required:!1,tsType:{name:"boolean"},description:"Show clear button when input has value",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when clear button is clicked"},onPressEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(_event: KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLInputElement"}],raw:"KeyboardEvent<HTMLInputElement>"},name:"_event"}],return:{name:"void"}}},description:"Callback when Enter key is pressed"},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const Qe={title:"Inputs/TextField",component:a,parameters:{docs:{description:{component:"A TextField (Input) component refactored to align with the Databricks design system. Features validation states, prefix/suffix content, read-only state, and enhanced accessibility."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Field label"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed below the field"},validationState:{control:"select",options:[void 0,"error","warning","success"],description:"Validation state"},message:{control:"text",description:"Message displayed below the field (typically with validation state)"},size:{control:"select",options:["small","default"],description:"Field size - small = 24px, default = 32px",table:{defaultValue:{summary:"default"}}},fullWidth:{control:"boolean",description:"Take full width of container",table:{defaultValue:{summary:!1}}},required:{control:"boolean",description:"Required field indicator",table:{defaultValue:{summary:!1}}},optional:{control:"boolean",description:"Optional field indicator",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disable the field",table:{defaultValue:{summary:!1}}},readOnly:{control:"boolean",description:"Read-only state (focusable but not editable)",table:{defaultValue:{summary:!1}}},showClear:{control:"boolean",description:"Show clear button when input has value",table:{defaultValue:{summary:!1}}},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Input type",table:{defaultValue:{summary:"text"}}}},args:{label:"Label",placeholder:"Enter text...",size:"default"}},S={args:{label:"Email Address",placeholder:"name@example.com",type:"email"}},T={args:{label:"Username",placeholder:"Enter your username"}},j={args:{label:"Password",type:"password",description:"Must be at least 8 characters"},parameters:{docs:{description:{story:"Description text provides additional instructions for an Input."}}}},N={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{label:"Error State",value:"invalid-email",validationState:"error",message:"Please enter a valid email address"}),e.jsx(a,{label:"Warning State",value:"password123",validationState:"warning",message:"Consider using a stronger password"}),e.jsx(a,{label:"Success State",value:"user@example.com",validationState:"success",message:"Email address is valid"})]}),parameters:{docs:{description:{story:"Input supports error, warning, and success validation states aligned with the Databricks design system."}}}},F={args:{label:"Required Field",required:!0,placeholder:"This field is required"}},E={args:{label:"Optional Field",optional:!0,placeholder:"This field is optional"},parameters:{docs:{description:{story:"Use the optional prop to explicitly mark a field as optional."}}}},R={args:{label:"Disabled Field",value:"Cannot edit this",disabled:!0},parameters:{docs:{description:{story:"Avoid using a disabled Input whenever possible. It is low-contrast and outside the tab order."}}}},V={args:{label:"Read-Only Field",value:"You can select and copy this value",readOnly:!0},parameters:{docs:{description:{story:"Use a read-only input to help users read and copy a value they can't edit. Read-only inputs can still receive focus in the tab order, unlike disabled inputs."}}}},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{size:"small",label:"Small (24px height)",placeholder:"Small size field"}),e.jsx(a,{size:"default",label:"Default (32px height)",placeholder:"Default size field"})]}),parameters:{docs:{description:{story:"Two sizes are available: small (24px) for constrained spaces, and default (32px) as the standard size."}}}},_={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{label:"Search",placeholder:"Search...",prefix:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}),e.jsx(a,{label:"Email",placeholder:"Enter email",type:"email",prefix:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})}),e.jsx(a,{label:"Amount",placeholder:"0.00",type:"number",prefix:e.jsx("span",{children:"$"}),suffix:e.jsx("span",{children:"USD"})})]}),parameters:{docs:{description:{story:"An Input can have prefix or suffix content (icon or text). This is most helpful when the icon is commonly recognized."}}}},z={render:()=>{const[t,i]=P.useState("You can clear this text");return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{label:"Clearable Input",value:t,onChange:s=>i(s.target.value),onClear:()=>i(""),showClear:!0,placeholder:"Type something..."})})},parameters:{docs:{description:{story:"When showClear is true, a clear button appears when the input has a value."}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{label:"Text",type:"text",placeholder:"Regular text input"}),e.jsx(a,{label:"Email",type:"email",placeholder:"name@example.com"}),e.jsx(a,{label:"Password",type:"password",placeholder:"Enter password"}),e.jsx(a,{label:"Number",type:"number",placeholder:"123"}),e.jsx(a,{label:"Phone",type:"tel",placeholder:"+1 (555) 000-0000"}),e.jsx(a,{label:"URL",type:"url",placeholder:"https://example.com"}),e.jsx(a,{label:"Search",type:"search",placeholder:"Search..."})]}),parameters:{docs:{description:{story:"Different input types."}}}},D={render:()=>{const[t,i]=P.useState([]);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(a,{label:"Press Enter to Submit",placeholder:"Type and press Enter...",onPressEnter:s=>{const l=s.currentTarget.value;i([...t,l]),s.currentTarget.value=""}}),t.length>0&&e.jsxs("div",{style:{marginTop:"16px",fontSize:"13px"},children:[e.jsx("strong",{children:"Submitted values:"}),e.jsx("ul",{style:{marginTop:"8px",paddingLeft:"20px"},children:t.map((s,l)=>e.jsx("li",{children:s},l))})]})]})},parameters:{docs:{description:{story:"The onPressEnter callback is triggered when the user presses Enter."}}}},I={render:()=>{var m,h,f,n,o,b,g,p;const[t,i]=P.useState({firstName:"",lastName:"",email:"",password:""}),[s,l]=P.useState({}),c=d=>r=>{i({...t,[d]:r.target.value}),l({...s,[d]:{}})},L=d=>{d.preventDefault();const r={};t.firstName||(r.firstName={state:"error",message:"First name is required"}),t.lastName||(r.lastName={state:"error",message:"Last name is required"}),t.email?t.email.includes("@")||(r.email={state:"error",message:"Invalid email format"}):r.email={state:"error",message:"Email is required"},t.password?t.password.length<8&&(r.password={state:"error",message:"Password must be at least 8 characters"}):r.password={state:"error",message:"Password is required"},l(r),Object.keys(r).length===0&&alert("Form submitted successfully!")};return e.jsxs("form",{onSubmit:L,style:{maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"16px"},children:[e.jsx(a,{label:"First Name",required:!0,fullWidth:!0,value:t.firstName,onChange:c("firstName"),validationState:(m=s.firstName)==null?void 0:m.state,message:(h=s.firstName)==null?void 0:h.message}),e.jsx(a,{label:"Last Name",required:!0,fullWidth:!0,value:t.lastName,onChange:c("lastName"),validationState:(f=s.lastName)==null?void 0:f.state,message:(n=s.lastName)==null?void 0:n.message})]}),e.jsx("div",{style:{marginBottom:"16px"},children:e.jsx(a,{label:"Email",type:"email",required:!0,fullWidth:!0,value:t.email,onChange:c("email"),validationState:(o=s.email)==null?void 0:o.state,message:(b=s.email)==null?void 0:b.message,description:"We'll never share your email"})}),e.jsx("div",{style:{marginBottom:"24px"},children:e.jsx(a,{label:"Password",type:"password",required:!0,fullWidth:!0,value:t.password,onChange:c("password"),validationState:(g=s.password)==null?void 0:g.state,message:(p=s.password)==null?void 0:p.message,description:"Must be at least 8 characters"})}),e.jsx("button",{type:"submit",className:"db-button db-button--primary db-button--medium",children:"Submit"})]})},parameters:{docs:{description:{story:"Interactive form example with validation using validationState and message props."}}}};var K,G,J;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'name@example.com',
    type: 'email'
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,le;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(re=N.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ne,oe;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required'
  }
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var de,ce,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,he;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,xe,be;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ge,ve,ye;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var we,Se,Te;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var je,Ne,Fe;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var Ee,Re,Ve;C.parameters={...C.parameters,docs:{...(Ee=C.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ve=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var qe,_e,ze;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};var Ce,De,Ie;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ie=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};const Xe=["Playground","Basic","WithDescription","ValidationStates","Required","Optional","Disabled","ReadOnly","Sizes","WithPrefixAndSuffix","WithClearButton","InputTypes","OnPressEnter","FormExample"];export{T as Basic,R as Disabled,I as FormExample,C as InputTypes,D as OnPressEnter,E as Optional,S as Playground,V as ReadOnly,F as Required,q as Sizes,N as ValidationStates,z as WithClearButton,j as WithDescription,_ as WithPrefixAndSuffix,Xe as __namedExportsOrder,Qe as default};
