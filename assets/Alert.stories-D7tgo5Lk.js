import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as X,R as G}from"./index-Dz3UJJSw.js";import{c as J}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const K={success:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),info:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),warning:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),error:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})},r=X.forwardRef(({severity:s="info",variant:y="standard",icon:i,title:t,onClose:a,className:H,children:f,...$},U)=>{const h=i!==void 0?i:K[s];return e.jsxs("div",{ref:U,className:J("db-alert",`db-alert--${s}`,`db-alert--${y}`,H),role:"alert",...$,children:[h&&e.jsx("span",{className:"db-alert__icon",children:h}),e.jsxs("div",{className:"db-alert__content",children:[t&&e.jsx("div",{className:"db-alert__title",children:t}),f&&e.jsx("div",{className:"db-alert__message",children:f})]}),a&&e.jsx("button",{className:"db-alert__close",onClick:a,"aria-label":"Close alert",children:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Alert severity",defaultValue:{value:"'info'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'standard'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'standard'"}]},description:"Alert variant",defaultValue:{value:"'standard'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display"},title:{required:!1,tsType:{name:"string"},description:"Alert title"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button"}},composes:["HTMLAttributes"]};const te={title:"Feedback/Alert",component:r,parameters:{docs:{description:{component:"Alerts provide contextual feedback messages for user actions."}}},tags:["autodocs"],argTypes:{severity:{control:"select",options:["success","info","warning","error"],description:"Alert severity level",table:{defaultValue:{summary:"info"}}},variant:{control:"select",options:["filled","outlined","standard"],description:"Visual variant",table:{defaultValue:{summary:"standard"}}},title:{control:"text",description:"Alert title"},children:{control:"text",description:"Alert message"},onClose:{action:"closed",description:"Close handler - shows X button when provided"}},args:{severity:"info",variant:"standard",children:"This is an alert message"}},n={args:{title:"Alert Title",children:"This is an alert message with controls to customize.",onClose:()=>alert("Alert closed")}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{severity:"success",children:"Success! Your changes have been saved."}),e.jsx(r,{severity:"info",children:"Info: This is an informational message."}),e.jsx(r,{severity:"warning",children:"Warning: Please review before proceeding."}),e.jsx(r,{severity:"error",children:"Error: Something went wrong. Please try again."})]}),parameters:{docs:{description:{story:"Different severity levels for various use cases."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{severity:"info",variant:"standard",children:"Standard variant with subtle background"}),e.jsx(r,{severity:"info",variant:"outlined",children:"Outlined variant with border"}),e.jsx(r,{severity:"info",variant:"filled",children:"Filled variant with solid background"})]}),parameters:{docs:{description:{story:"Different visual variants."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{severity:"success",title:"Success",children:"Your account has been created successfully."}),e.jsx(r,{severity:"info",title:"Information",children:"New features are now available in your dashboard."}),e.jsx(r,{severity:"warning",title:"Warning",children:"Your session will expire in 5 minutes."}),e.jsx(r,{severity:"error",title:"Error",children:"Failed to connect to the database."})]}),parameters:{docs:{description:{story:"Alerts with titles for better context."}}}},Q=()=>{const[s,y]=G.useState([{id:1,severity:"success",message:"File uploaded successfully"},{id:2,severity:"info",message:"Processing your request..."},{id:3,severity:"warning",message:"Low disk space detected"},{id:4,severity:"error",message:"Network connection lost"}]),i=t=>{y(s.filter(a=>a.id!==t))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[s.map(t=>e.jsx(r,{severity:t.severity,onClose:()=>i(t.id),children:t.message},t.id)),s.length===0&&e.jsx(r,{severity:"info",children:"All alerts have been dismissed"})]})},d={render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"Dismissible alerts with close functionality."}}}},u={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:["success","info","warning","error"].map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("h4",{style:{margin:"0",textTransform:"capitalize"},children:s}),e.jsxs(r,{severity:s,variant:"standard",children:["Standard ",s," alert"]}),e.jsxs(r,{severity:s,variant:"outlined",children:["Outlined ",s," alert"]}),e.jsxs(r,{severity:s,variant:"filled",children:["Filled ",s," alert"]})]},s))}),parameters:{docs:{description:{story:"All combinations of severities and variants."}}}},p={render:()=>e.jsx(r,{severity:"info",icon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 012 0v4a1 1 0 01-2 0V7zm1 6a1 1 0 100 2 1 1 0 000-2z"})}),children:"Alert with a custom icon"}),parameters:{docs:{description:{story:"Alert with a custom icon."}}}},m={render:()=>e.jsx(r,{severity:"info",icon:null,children:"Alert without an icon for a cleaner look"}),parameters:{docs:{description:{story:"Alert without an icon."}}}},v={render:()=>e.jsx(r,{severity:"info",title:"System Maintenance Notice",onClose:()=>{},children:"We will be performing scheduled maintenance on our systems from 2:00 AM to 6:00 AM EST on Saturday. During this time, some services may be temporarily unavailable. We apologize for any inconvenience this may cause and appreciate your patience. If you have any urgent issues, please contact our support team at support@example.com."}),parameters:{docs:{description:{story:"Alert with long content."}}}};var x,g,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Alert Title',
    children: 'This is an alert message with controls to customize.',
    onClose: () => alert('Alert closed') // Using alert for demo purposes
  }
}`,...(A=(g=n.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var w,b,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,z,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(z=l.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var C,T,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(T=c.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var R,N,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <DismissibleAlertsExample />,
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alerts with close functionality.'
      }
    }
  }
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,L,k;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(L=u.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var V,E,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var B,F,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var q,Y,O;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const ie=["Playground","Severities","Variants","WithTitle","Dismissible","AllVariantsBySeverity","CustomIcon","NoIcon","LongContent"];export{u as AllVariantsBySeverity,p as CustomIcon,d as Dismissible,v as LongContent,m as NoIcon,n as Playground,o as Severities,l as Variants,c as WithTitle,ie as __namedExportsOrder,te as default};
