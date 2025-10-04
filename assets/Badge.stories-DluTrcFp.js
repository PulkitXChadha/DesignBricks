import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{B as a}from"./Badge-CJZMY-UQ.js";import{B as c}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./index-CWnxZbJP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const A={title:"Feedback/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"Badges are used to highlight status, counts, or labels in a compact format."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info","new"],description:"Badge variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Badge size",table:{defaultValue:{summary:"medium"}}},dot:{control:"boolean",description:"Show as dot indicator",table:{defaultValue:{summary:!1}}},count:{control:"number",description:"Count value to display"},max:{control:"number",description:"Maximum count before showing +",table:{defaultValue:{summary:99}}},children:{control:"text",description:"Badge content"}},args:{variant:"default",size:"medium",children:"Badge"}},r={args:{children:"Badge"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"new",children:"New"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(a,{count:5,variant:"primary"}),e.jsx(a,{count:42,variant:"error"}),e.jsx(a,{count:99,variant:"warning"}),e.jsx(a,{count:150,max:99,variant:"success"}),e.jsx(a,{count:1e3,max:999,variant:"info"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{dot:!0,size:"small",variant:"error"}),e.jsx(a,{dot:!0,size:"medium",variant:"success"}),e.jsx(a,{dot:!0,size:"large",variant:"warning"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsxs(c,{children:["Inbox ",e.jsx(a,{count:5,variant:"primary",style:{marginLeft:"8px"}})]}),e.jsxs(c,{children:["Notifications ",e.jsx(a,{dot:!0,variant:"error",style:{marginLeft:"8px"}})]}),e.jsxs(c,{variant:"secondary",children:["Updates ",e.jsx(a,{variant:"new",children:"New"})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"Server Status:"}),e.jsx(a,{variant:"success",children:"Online"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"Build Status:"}),e.jsx(a,{variant:"warning",children:"Building"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"Deploy Status:"}),e.jsx(a,{variant:"error",children:"Failed"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{children:"Feature Status:"}),e.jsx(a,{variant:"info",children:"Beta"})]})]})},o={render:()=>e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"400px"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("h4",{style:{margin:"0 0 8px 0",display:"flex",alignItems:"center",gap:"8px"},children:["Jobs & Pipelines ",e.jsx(a,{variant:"new",children:"New"})]}),e.jsx("p",{style:{margin:0,fontSize:"13px",color:"#666"},children:"Manage your data workflows"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Active Jobs"}),e.jsx(a,{count:12,variant:"primary"})]}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Failed Runs"}),e.jsx(a,{count:3,variant:"error"})]}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{children:"Pending Tasks"}),e.jsx(a,{count:45,variant:"warning"})]})]})]})};var p,g,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,m,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="new">New</Badge>
    </div>
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var y,f,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,j,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Badge count={5} variant="primary" />
      <Badge count={42} variant="error" />
      <Badge count={99} variant="warning" />
      <Badge count={150} max={99} variant="success" />
      <Badge count={1000} max={999} variant="info" />
    </div>
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,S,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Badge dot size="small" variant="error" />
      <Badge dot size="medium" variant="success" />
      <Badge dot size="large" variant="warning" />
    </div>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,C,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Button>
        Inbox <Badge count={5} variant="primary" style={{
        marginLeft: '8px'
      }} />
      </Button>
      <Button>
        Notifications <Badge dot variant="error" style={{
        marginLeft: '8px'
      }} />
      </Button>
      <Button variant="secondary">
        Updates <Badge variant="new">New</Badge>
      </Button>
    </div>
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,W,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span>Server Status:</span>
        <Badge variant="success">Online</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span>Build Status:</span>
        <Badge variant="warning">Building</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span>Deploy Status:</span>
        <Badge variant="error">Failed</Badge>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span>Feature Status:</span>
        <Badge variant="info">Beta</Badge>
      </div>
    </div>
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,P,F;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    maxWidth: '400px'
  }}>
      <div style={{
      marginBottom: '16px'
    }}>
        <h4 style={{
        margin: '0 0 8px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          Jobs & Pipelines <Badge variant="new">New</Badge>
        </h4>
        <p style={{
        margin: 0,
        fontSize: '13px',
        color: '#666'
      }}>
          Manage your data workflows
        </p>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <div style={{
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Active Jobs</span>
          <Badge count={12} variant="primary" />
        </div>

        <div style={{
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Failed Runs</span>
          <Badge count={3} variant="error" />
        </div>

        <div style={{
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <span>Pending Tasks</span>
          <Badge count={45} variant="warning" />
        </div>
      </div>
    </div>
}`,...(F=(P=o.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const U=["Playground","Variants","Sizes","WithCount","DotIndicator","WithButtons","StatusBadges","RealWorldExample"];export{n as DotIndicator,r as Playground,o as RealWorldExample,i as Sizes,l as StatusBadges,s as Variants,d as WithButtons,t as WithCount,U as __namedExportsOrder,A as default};
