import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as H}from"./index-CWnxZbJP.js";import{c as K}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const n=H.forwardRef(({variant:v="info",title:o,closable:s=!1,onClose:g,icon:x,className:i,children:t,...a},b)=>{const J={info:e.jsx("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8.75 4.5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4zM8 10.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),success:e.jsx("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.03-9.97L6.5 9.56 4.97 8.03l-1.06 1.06L6.5 11.69l5.59-5.59-1.06-1.07z",clipRule:"evenodd"})}),warning:e.jsx("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.865.23a1 1 0 0 0-1.73 0L.632 13.346A1 1 0 0 0 1.498 15h13.004a1 1 0 0 0 .866-1.654L8.865.23zM8.75 5.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3zM8 10.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z",clipRule:"evenodd"})}),error:e.jsx("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5.47 5.47a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06z",clipRule:"evenodd"})})};return e.jsxs("div",{ref:b,role:"alert","aria-live":"polite",className:K("db-notification",`db-notification--${v}`,i),...a,children:[e.jsx("div",{className:"db-notification__icon",children:x||J[v]}),e.jsxs("div",{className:"db-notification__content",children:[o&&e.jsx("div",{className:"db-notification__title",children:o}),t&&e.jsx("div",{className:"db-notification__description",children:t})]}),s&&e.jsx("button",{type:"button",className:"db-notification__close",onClick:g,"aria-label":"Close notification",children:e.jsx("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.97 4.47a.75.75 0 0 0-1.06-1.06L8 7.32 4.09 3.41a.75.75 0 1 0-1.06 1.06L6.94 8.5 3.03 12.41a.75.75 0 1 0 1.06 1.06L8 9.56l3.91 3.91a.75.75 0 1 0 1.06-1.06L9.06 8.5l3.91-3.91z",clipRule:"evenodd"})})})]})});n.displayName="Notification";n.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Notification variant",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Title of the notification"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether to show close button",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close button is clicked"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display - if not provided, variant-appropriate icon is used"},position:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-center'"}]},description:"Position for toast notifications"}}};const ie={title:"Feedback/Notification",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"The visual style variant of the notification"},title:{control:"text",description:"The title of the notification"},closable:{control:"boolean",description:"Whether the notification can be dismissed"},children:{control:"text",description:"The description/content of the notification"}}},r={args:{title:"Notification Title",children:"This is a default notification message with some helpful information."}},l={args:{variant:"info",title:"Information",children:"Your data has been synchronized successfully.",closable:!0}},c={args:{variant:"success",title:"Success!",children:"Your changes have been saved successfully.",closable:!0}},d={args:{variant:"warning",title:"Warning",children:"Your session will expire in 5 minutes. Please save your work.",closable:!0}},u={args:{variant:"error",title:"Error",children:"Failed to save changes. Please try again or contact support.",closable:!0}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"500px"},children:[e.jsx(n,{variant:"info",title:"Info",closable:!0,children:"This is an informational message."}),e.jsx(n,{variant:"success",title:"Success",closable:!0,children:"Operation completed successfully."}),e.jsx(n,{variant:"warning",title:"Warning",closable:!0,children:"Please review your settings."}),e.jsx(n,{variant:"error",title:"Error",closable:!0,children:"Something went wrong."})]})},p={args:{variant:"info",children:"This notification only has a description without a title.",closable:!0}},m={args:{variant:"info",title:"Custom Icon",children:"This notification uses a custom icon.",closable:!0,icon:e.jsxs("svg",{width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:[e.jsx("path",{fill:"currentColor",d:"M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5A5.5 5.5 0 1 1 8 2a5.5 5.5 0 0 1 0 11z"}),e.jsx("path",{fill:"currentColor",d:"M8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5z"}),e.jsx("path",{fill:"currentColor",d:"M8 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"})]})}},h={render:function(){const[o,s]=H.useState([{id:1,variant:"info",title:"Info",message:"This is an info notification."},{id:2,variant:"success",title:"Success",message:"This is a success notification."},{id:3,variant:"warning",title:"Warning",message:"This is a warning notification."}]),g=i=>{s(t=>t.filter(a=>a.id!==i))},x=()=>{const i=["info","success","warning","error"],t=i[Math.floor(Math.random()*i.length)],a=Date.now();s(b=>[...b,{id:a,variant:t,title:`New ${t}`,message:`This is a new ${t} notification.`}])};return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("button",{onClick:x,style:{padding:"8px 16px",marginBottom:"16px",backgroundColor:"#007acc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Add Notification"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:o.map(i=>e.jsx(n,{variant:i.variant,title:i.title,closable:!0,onClose:()=>g(i.id),children:i.message},i.id))}),o.length===0&&e.jsx("p",{style:{color:"#666",fontStyle:"italic"},children:'All notifications have been dismissed. Click "Add Notification" to create new ones.'})]})}};var w,y,N;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Notification Title',
    children: 'This is a default notification message with some helpful information.'
  }
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var j,T,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'Your data has been synchronized successfully.',
    closable: true
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,z,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your changes have been saved successfully.',
    closable: true
  }
}`,...(M=(z=c.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var I,R,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Your session will expire in 5 minutes. Please save your work.',
    closable: true
  }
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,_,k;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Failed to save changes. Please try again or contact support.',
    closable: true
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var L,B,E;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '500px'
  }}>
      <Notification variant="info" title="Info" closable>
        This is an informational message.
      </Notification>
      <Notification variant="success" title="Success" closable>
        Operation completed successfully.
      </Notification>
      <Notification variant="warning" title="Warning" closable>
        Please review your settings.
      </Notification>
      <Notification variant="error" title="Error" closable>
        Something went wrong.
      </Notification>
    </div>
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var q,D,P;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This notification only has a description without a title.',
    closable: true
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var Y,$,V;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Custom Icon',
    children: 'This notification uses a custom icon.',
    closable: true,
    icon: <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5A5.5 5.5 0 1 1 8 2a5.5 5.5 0 0 1 0 11z" />
        <path fill="currentColor" d="M8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5z" />
        <path fill="currentColor" d="M8 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
      </svg>
  }
}`,...(V=($=m.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var F,O,G;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function InteractiveNotification() {
    const [notifications, setNotifications] = useState([{
      id: 1,
      variant: 'info' as const,
      title: 'Info',
      message: 'This is an info notification.'
    }, {
      id: 2,
      variant: 'success' as const,
      title: 'Success',
      message: 'This is a success notification.'
    }, {
      id: 3,
      variant: 'warning' as const,
      title: 'Warning',
      message: 'This is a warning notification.'
    }]);
    const removeNotification = (id: number) => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    };
    const addNotification = () => {
      const variants = ['info', 'success', 'warning', 'error'] as const;
      const variant = variants[Math.floor(Math.random() * variants.length)];
      const id = Date.now();
      setNotifications(prev => [...prev, {
        id,
        variant,
        title: \`New \${variant}\`,
        message: \`This is a new \${variant} notification.\`
      }]);
    };
    return <div style={{
      maxWidth: '500px'
    }}>
        <button onClick={addNotification} style={{
        padding: '8px 16px',
        marginBottom: '16px',
        backgroundColor: '#007acc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Add Notification
        </button>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          {notifications.map(notification => <Notification key={notification.id} variant={notification.variant} title={notification.title} closable onClose={() => removeNotification(notification.id)}>
              {notification.message}
            </Notification>)}
        </div>
        {notifications.length === 0 && <p style={{
        color: '#666',
        fontStyle: 'italic'
      }}>
            All notifications have been dismissed. Click &quot;Add Notification&quot; to create new ones.
          </p>}
      </div>;
  }
}`,...(G=(O=h.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const te=["Default","Info","Success","Warning","Error","AllVariants","WithoutTitle","WithCustomIcon","Interactive"];export{f as AllVariants,r as Default,u as Error,l as Info,h as Interactive,c as Success,d as Warning,m as WithCustomIcon,p as WithoutTitle,te as __namedExportsOrder,ie as default};
