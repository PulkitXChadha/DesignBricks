import{a,j as e}from"./jsx-runtime-D2eXtamC.js";import{B as n}from"./Badge-DkeaqQl8.js";import{B as p}from"./Button-Ch83UTUf.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const A={title:"Feedback/Badge",component:n,parameters:{layout:"centered",docs:{description:{component:"Badges are used to highlight status, counts, or labels in a compact format."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info","new"],description:"Badge variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Badge size",table:{defaultValue:{summary:"medium"}}},dot:{control:"boolean",description:"Show as dot indicator",table:{defaultValue:{summary:!1}}},count:{control:"number",description:"Count value to display"},max:{control:"number",description:"Maximum count before showing +",table:{defaultValue:{summary:99}}},children:{control:"text",description:"Badge content"}},args:{variant:"default",size:"medium",children:"Badge"}},r={args:{children:"Badge"}},i={render:()=>a("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e(n,{variant:"default",children:"Default"}),e(n,{variant:"primary",children:"Primary"}),e(n,{variant:"success",children:"Success"}),e(n,{variant:"warning",children:"Warning"}),e(n,{variant:"error",children:"Error"}),e(n,{variant:"info",children:"Info"}),e(n,{variant:"new",children:"New"})]})},t={render:()=>a("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e(n,{size:"small",children:"Small"}),e(n,{size:"medium",children:"Medium"}),e(n,{size:"large",children:"Large"})]})},s={render:()=>a("div",{style:{display:"flex",gap:"16px"},children:[e(n,{count:5,variant:"primary"}),e(n,{count:42,variant:"error"}),e(n,{count:99,variant:"warning"}),e(n,{count:150,max:99,variant:"success"}),e(n,{count:1e3,max:999,variant:"info"})]})},d={render:()=>a("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(n,{dot:!0,size:"small",variant:"error"}),e(n,{dot:!0,size:"medium",variant:"success"}),e(n,{dot:!0,size:"large",variant:"warning"})]})},l={render:()=>a("div",{style:{display:"flex",gap:"16px"},children:[a(p,{children:["Inbox ",e(n,{count:5,variant:"primary",style:{marginLeft:"8px"}})]}),a(p,{children:["Notifications ",e(n,{dot:!0,variant:"error",style:{marginLeft:"8px"}})]}),a(p,{variant:"secondary",children:["Updates ",e(n,{variant:"new",children:"New"})]})]})},o={render:()=>a("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e("span",{children:"Server Status:"}),e(n,{variant:"success",children:"Online"})]}),a("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e("span",{children:"Build Status:"}),e(n,{variant:"warning",children:"Building"})]}),a("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e("span",{children:"Deploy Status:"}),e(n,{variant:"error",children:"Failed"})]}),a("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e("span",{children:"Feature Status:"}),e(n,{variant:"info",children:"Beta"})]})]})},c={render:()=>a("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"400px"},children:[a("div",{style:{marginBottom:"16px"},children:[a("h4",{style:{margin:"0 0 8px 0",display:"flex",alignItems:"center",gap:"8px"},children:["Jobs & Pipelines ",e(n,{variant:"new",children:"New"})]}),e("p",{style:{margin:0,fontSize:"13px",color:"#666"},children:"Manage your data workflows"})]}),a("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e("span",{children:"Active Jobs"}),e(n,{count:12,variant:"primary"})]}),a("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e("span",{children:"Failed Runs"}),e(n,{count:3,variant:"error"})]}),a("div",{style:{padding:"12px",backgroundColor:"white",borderRadius:"4px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e("span",{children:"Pending Tasks"}),e(n,{count:45,variant:"warning"})]})]})]})};var g,u,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,B,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <Badge size="small">Small</Badge>
      <Badge size="medium">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
}`,...(h=(B=t.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var w,b,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,z,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Badge dot size="small" variant="error" />
      <Badge dot size="medium" variant="success" />
      <Badge dot size="large" variant="warning" />
    </div>
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var k,R,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var D,j,N;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,F,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const U=["Playground","Variants","Sizes","WithCount","DotIndicator","WithButtons","StatusBadges","RealWorldExample"];export{d as DotIndicator,r as Playground,c as RealWorldExample,t as Sizes,o as StatusBadges,i as Variants,l as WithButtons,s as WithCount,U as __namedExportsOrder,A as default};
