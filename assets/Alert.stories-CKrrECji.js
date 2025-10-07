import{a as t,j as e}from"./jsx-runtime-D2eXtamC.js";import{r as G,R as J}from"./index-SE77F2UD.js";import{c as K}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const Q={success:e("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),info:e("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),warning:e("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),error:e("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})},r=G.forwardRef(({severity:n="info",variant:f="standard",icon:s,title:a,onClose:i,className:$,children:h,...U},X)=>{const g=s!==void 0?s:Q[n];return t("div",{ref:X,className:K("db-alert",`db-alert--${n}`,`db-alert--${f}`,$),role:"alert",...U,children:[g&&e("span",{className:"db-alert__icon",children:g}),t("div",{className:"db-alert__content",children:[a&&e("div",{className:"db-alert__title",children:a}),h&&e("div",{className:"db-alert__message",children:h})]}),i&&e("button",{className:"db-alert__close",onClick:i,"aria-label":"Close alert",children:e("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})});r.displayName="Alert";try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{severity:{defaultValue:{value:"info"},description:"Alert severity",name:"severity",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variant:{defaultValue:{value:"standard"},description:"Alert variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"standard"'}]}},icon:{defaultValue:null,description:"Icon to display",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Alert title",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Close button",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ae={title:"Feedback/Alert",component:r,parameters:{docs:{description:{component:"Alerts provide contextual feedback messages for user actions."}}},tags:["autodocs"],argTypes:{severity:{control:"select",options:["success","info","warning","error"],description:"Alert severity level",table:{defaultValue:{summary:"info"}}},variant:{control:"select",options:["filled","outlined","standard"],description:"Visual variant",table:{defaultValue:{summary:"standard"}}},title:{control:"text",description:"Alert title"},children:{control:"text",description:"Alert message"},onClose:{action:"closed",description:"Close handler - shows X button when provided"}},args:{severity:"info",variant:"standard",children:"This is an alert message"}},o={args:{title:"Alert Title",children:"This is an alert message with controls to customize.",onClose:()=>alert("Alert closed")}},l={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(r,{severity:"success",children:"Success! Your changes have been saved."}),e(r,{severity:"info",children:"Info: This is an informational message."}),e(r,{severity:"warning",children:"Warning: Please review before proceeding."}),e(r,{severity:"error",children:"Error: Something went wrong. Please try again."})]}),parameters:{docs:{description:{story:"Different severity levels for various use cases."}}}},c={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(r,{severity:"info",variant:"standard",children:"Standard variant with subtle background"}),e(r,{severity:"info",variant:"outlined",children:"Outlined variant with border"}),e(r,{severity:"info",variant:"filled",children:"Filled variant with solid background"})]}),parameters:{docs:{description:{story:"Different visual variants."}}}},d={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(r,{severity:"success",title:"Success",children:"Your account has been created successfully."}),e(r,{severity:"info",title:"Information",children:"New features are now available in your dashboard."}),e(r,{severity:"warning",title:"Warning",children:"Your session will expire in 5 minutes."}),e(r,{severity:"error",title:"Error",children:"Failed to connect to the database."})]}),parameters:{docs:{description:{story:"Alerts with titles for better context."}}}},Z=()=>{const[n,f]=J.useState([{id:1,severity:"success",message:"File uploaded successfully"},{id:2,severity:"info",message:"Processing your request..."},{id:3,severity:"warning",message:"Low disk space detected"},{id:4,severity:"error",message:"Network connection lost"}]),s=a=>{f(n.filter(i=>i.id!==a))};return t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.map(a=>e(r,{severity:a.severity,onClose:()=>s(a.id),children:a.message},a.id)),n.length===0&&e(r,{severity:"info",children:"All alerts have been dismissed"})]})},u={render:()=>e(Z,{}),parameters:{docs:{description:{story:"Dismissible alerts with close functionality."}}}},p={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:["success","info","warning","error"].map(n=>t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e("h4",{style:{margin:"0",textTransform:"capitalize"},children:n}),t(r,{severity:n,variant:"standard",children:["Standard ",n," alert"]}),t(r,{severity:n,variant:"outlined",children:["Outlined ",n," alert"]}),t(r,{severity:n,variant:"filled",children:["Filled ",n," alert"]})]},n))}),parameters:{docs:{description:{story:"All combinations of severities and variants."}}}},m={render:()=>e(r,{severity:"info",icon:e("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 012 0v4a1 1 0 01-2 0V7zm1 6a1 1 0 100 2 1 1 0 000-2z"})}),children:"Alert with a custom icon"}),parameters:{docs:{description:{story:"Alert with a custom icon."}}}},v={render:()=>e(r,{severity:"info",icon:null,children:"Alert without an icon for a cleaner look"}),parameters:{docs:{description:{story:"Alert without an icon."}}}},y={render:()=>e(r,{severity:"info",title:"System Maintenance Notice",onClose:()=>{},children:"We will be performing scheduled maintenance on our systems from 2:00 AM to 6:00 AM EST on Saturday. During this time, some services may be temporarily unavailable. We apologize for any inconvenience this may cause and appreciate your patience. If you have any urgent issues, please contact our support team at support@example.com."}),parameters:{docs:{description:{story:"Alert with long content."}}}};var A,w,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Alert Title',
    children: 'This is an alert message with controls to customize.',
    onClose: () => alert('Alert closed') // Using alert for demo purposes
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,S,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Alert severity="success">
        Success! Your changes have been saved.
      </Alert>
      <Alert severity="info">
        Info: This is an informational message.
      </Alert>
      <Alert severity="warning">
        Warning: Please review before proceeding.
      </Alert>
      <Alert severity="error">
        Error: Something went wrong. Please try again.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different severity levels for various use cases.'
      }
    }
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var C,D,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Alert severity="info" variant="standard">
        Standard variant with subtle background
      </Alert>
      <Alert severity="info" variant="outlined">
        Outlined variant with border
      </Alert>
      <Alert severity="info" variant="filled">
        Filled variant with solid background
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants.'
      }
    }
  }
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var M,N,V;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Alert severity="success" title="Success">
        Your account has been created successfully.
      </Alert>
      <Alert severity="info" title="Information">
        New features are now available in your dashboard.
      </Alert>
      <Alert severity="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>
      <Alert severity="error" title="Error">
        Failed to connect to the database.
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alerts with titles for better context.'
      }
    }
  }
}`,...(V=(N=d.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var I,R,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DismissibleAlertsExample />,
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close functionality.'
      }
    }
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var k,L,E;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {(['success', 'info', 'warning', 'error'] as const).map(severity => <div key={severity} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
          <h4 style={{
        margin: '0',
        textTransform: 'capitalize'
      }}>{severity}</h4>
          <Alert severity={severity} variant="standard">
            Standard {severity} alert
          </Alert>
          <Alert severity={severity} variant="outlined">
            Outlined {severity} alert
          </Alert>
          <Alert severity={severity} variant="filled">
            Filled {severity} alert
          </Alert>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All combinations of severities and variants.'
      }
    }
  }
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var W,B,F;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Alert severity="info" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 012 0v4a1 1 0 01-2 0V7zm1 6a1 1 0 100 2 1 1 0 000-2z" />
        </svg>}>
      Alert with a custom icon
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: 'Alert with a custom icon.'
      }
    }
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var P,q,Y;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Alert severity="info" icon={null}>
      Alert without an icon for a cleaner look
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: 'Alert without an icon.'
      }
    }
  }
}`,...(Y=(q=v.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var O,j,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Alert severity="info" title="System Maintenance Notice" onClose={() => {}}>
      We will be performing scheduled maintenance on our systems from 2:00 AM to 6:00 AM EST on Saturday.
      During this time, some services may be temporarily unavailable. We apologize for any inconvenience
      this may cause and appreciate your patience. If you have any urgent issues, please contact our
      support team at support@example.com.
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: 'Alert with long content.'
      }
    }
  }
}`,...(H=(j=y.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const se=["Playground","Severities","Variants","WithTitle","Dismissible","AllVariantsBySeverity","CustomIcon","NoIcon","LongContent"];export{p as AllVariantsBySeverity,m as CustomIcon,u as Dismissible,y as LongContent,v as NoIcon,o as Playground,l as Severities,c as Variants,d as WithTitle,se as __namedExportsOrder,ae as default};
