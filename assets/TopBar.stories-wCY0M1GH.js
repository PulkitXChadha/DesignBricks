import{j as e,a as t,F as me}from"./jsx-runtime-D2eXtamC.js";import{r as c}from"./index-SE77F2UD.js";import{T as a}from"./TopBar-CnrJyZeZ.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const Be={title:"Navigation/TopBar",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"A flexible top navigation bar component for Databricks applications with search, notifications, and user actions."}}},tags:["autodocs"],argTypes:{brand:{control:{type:"text"},description:"Brand name or custom brand component to display. If not provided, shows official Databricks logo (full-color for light mode, white for dark mode)."},showMenuButton:{control:{type:"boolean"},description:"Whether to show the hamburger menu button"},searchPlaceholder:{control:{type:"text"},description:"Placeholder text for the search input"},notificationCount:{control:{type:"number"},description:"Number of notifications to show in badge"},variant:{control:{type:"radio"},options:["light","dark"],description:"Visual variant of the top bar"},height:{control:{type:"number"},description:"Height of the top bar in pixels"},user:{control:{type:"object"},description:"User profile information to display"},"user.name":{control:{type:"text"},description:"User's full name"},"user.email":{control:{type:"text"},description:"User's email address"},"user.role":{control:{type:"text"},description:"User's role or title"},"user.avatar":{control:{type:"text"},description:"URL to user's avatar image"}}},s={name:"John Doe",email:"john.doe@databricks.com",onClick:()=>alert("User profile clicked!")},fe={name:"Jane Smith",email:"jane.smith@databricks.com",role:"Admin",onClick:()=>alert("Admin profile clicked!")},be={name:"Alex Johnson",email:"alex.johnson@company.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",onClick:()=>alert("User with avatar clicked!")},xe=()=>{const[n,r]=c.useState(""),[d,w]=c.useState(!1);return e(a,{searchValue:n,onSearchChange:r,onSearchSubmit:p=>alert(`Searching for: ${p}`),onMenuClick:()=>w(!d),sidebarCollapsed:d,onNotificationClick:()=>alert("Notifications clicked"),notificationCount:3,user:s})},o={args:{showMenuButton:!0,searchPlaceholder:"Search data, notebooks, recents, and more...",notificationCount:0,variant:"light",height:64,user:s},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},u={args:{...o.args,notificationCount:5,user:s},render:n=>e(a,{...n,onNotificationClick:()=>alert("5 new notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},h={args:{...o.args,variant:"dark",notificationCount:12,user:s},render:n=>e("div",{style:{backgroundColor:"#11171C",minHeight:"100vh"},children:e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})})},g={args:{...o.args,user:be,notificationCount:2},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},m={args:{...o.args,user:fe,variant:"light"},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},f={parameters:{docs:{description:{story:"Comparison showing the official Databricks logos for light (full-color) and dark (white) themes."}}},render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t("div",{children:[e("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600"},children:"Light Mode (Full Color Logo)"}),e(a,{variant:"light",user:s,onMenuClick:()=>alert("Light mode menu"),onSearchSubmit:n=>alert(`Light mode search: ${n}`)})]}),t("div",{style:{backgroundColor:"#11171C",padding:"20px",borderRadius:"8px"},children:[e("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600",color:"white"},children:"Dark Mode (Official White Logo)"}),e(a,{variant:"dark",user:s,onMenuClick:()=>alert("Dark mode menu"),onSearchSubmit:n=>alert(`Dark mode search: ${n}`)})]})]})},b={args:{...o.args,brand:"Databricks Analytics",user:s},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},x={args:{...o.args,user:{name:"Jane Smith",email:"jane.smith@company.com",onClick:()=>alert("Custom brand user clicked!")}},render:n=>e(a,{...n,brand:t("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e("div",{style:{width:"32px",height:"32px",background:"linear-gradient(45deg, #FF6B6B, #4ECDC4)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e("span",{style:{color:"white",fontWeight:"bold",fontSize:"16px"},children:"DB"})}),e("span",{style:{fontWeight:"700",fontSize:"18px",color:"#1F272D"},children:"My Analytics Platform"})]}),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},S={args:{...o.args,notificationCount:2,user:s},render:n=>e(a,{...n,actions:t("div",{style:{display:"flex",gap:"4px"},children:[e("button",{style:{padding:"8px 12px",border:"1px solid #4299E0",backgroundColor:"transparent",color:"#4299E0",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Settings"}),e("button",{style:{padding:"8px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Create"})]}),onNotificationClick:()=>alert("Notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},k={args:{showMenuButton:!1,variant:"light",user:{name:"John Doe",initials:"JD",onClick:()=>alert("Minimal user clicked!")}},render:n=>e(a,{...n,onSearchSubmit:r=>alert(`Searching: ${r}`)})},C={args:{...o.args,user:s},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`),children:e("div",{style:{padding:"12px 0",borderTop:"1px solid #E8ECF0"},children:t("div",{style:{display:"flex",gap:"16px",fontSize:"14px"},children:[e("span",{style:{color:"#4299E0",cursor:"pointer"},children:"Dashboards"}),e("span",{style:{color:"#8396A5",cursor:"pointer"},children:"SQL Editor"}),e("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Alerts"}),e("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Data Sources"})]})})})},y={parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}}},defaultViewport:"mobile"}},args:{...o.args,notificationCount:3,user:{name:"John Doe",initials:"JD",onClick:()=>alert("Responsive user clicked!")}},render:n=>e(a,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},v={render:()=>e(xe,{}),parameters:{docs:{description:{story:"Interactive example with search functionality and sidebar toggle."}}}},Se=()=>{const[n,r]=c.useState(!1),[d,w]=c.useState(""),[p,ge]=c.useState(3);return t("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e(a,{brand:"Databricks Analytics",showMenuButton:!0,searchValue:d,onSearchChange:w,onSearchSubmit:i=>alert(`Searching for: ${i}`),onMenuClick:()=>r(!n),sidebarCollapsed:n,onNotificationClick:()=>{alert(`${p} notifications`),ge(0)},notificationCount:p,actions:e("button",{style:{padding:"6px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Create"}),user:s}),t("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e("div",{style:{width:n?"64px":"240px",transition:"width 0.2s ease",borderRight:"1px solid #E8ECF0",backgroundColor:"#F6F7F9"},children:t("div",{style:{padding:"16px 12px"},children:[e("div",{style:{fontSize:"12px",fontWeight:"600",color:"#8396A5",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px",display:n?"none":"block"},children:"Navigation"}),[{id:"home",label:"Home",icon:"🏠"},{id:"dashboards",label:"Dashboards",icon:"📊"},{id:"sql-editor",label:"SQL Editor",icon:"📝"},{id:"data-sources",label:"Data Sources",icon:"🗄️"},{id:"alerts",label:"Alerts",icon:"🔔",badge:"2"},{id:"admin",label:"Administration",icon:"⚙️",children:[{id:"users",label:"Users",icon:"👥"},{id:"permissions",label:"Permissions",icon:"🔐"},{id:"settings",label:"Settings",icon:"⚙️"}]}].map(i=>t("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",marginBottom:"2px",borderRadius:"6px",cursor:"pointer",fontSize:"14px",color:"#445461",transition:"background-color 0.15s ease"},onMouseEnter:l=>{l.currentTarget.style.backgroundColor="#E8ECF0"},onMouseLeave:l=>{l.currentTarget.style.backgroundColor="transparent"},title:n?i.label:void 0,children:[e("span",{style:{fontSize:"16px",width:"20px",textAlign:"center"},children:i.icon}),!n&&t(me,{children:[e("span",{style:{flex:1},children:i.label}),i.badge&&e("span",{style:{backgroundColor:"#E65B77",color:"white",fontSize:"11px",padding:"2px 6px",borderRadius:"10px",fontWeight:"600"},children:i.badge})]})]},i.id))]})}),e("div",{style:{flex:1,padding:"24px",backgroundColor:"#FFFFFF",overflow:"auto"},children:t("div",{style:{maxWidth:"800px"},children:[e("h1",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Dashboard Overview"}),e("p",{style:{fontSize:"16px",color:"#445461",lineHeight:"1.5",marginBottom:"24px"},children:"Welcome to your Databricks Analytics workspace. This layout demonstrates how the TopBar component integrates seamlessly with the sidebar navigation to provide a complete application framework."}),e("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[{title:"Active Dashboards",value:"12",change:"+2 this week"},{title:"SQL Queries",value:"247",change:"+15% this month"},{title:"Data Sources",value:"8",change:"All healthy"},{title:"Team Members",value:"23",change:"3 new users"}].map((i,l)=>t("div",{style:{padding:"20px",border:"1px solid #E8ECF0",borderRadius:"8px",backgroundColor:"#FFFFFF",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e("h3",{style:{fontSize:"14px",color:"#8396A5",marginBottom:"8px",fontWeight:"500"},children:i.title}),e("div",{style:{fontSize:"24px",fontWeight:"600",color:"#1F272D",marginBottom:"4px"},children:i.value}),e("div",{style:{fontSize:"12px",color:"#3BA65E",fontWeight:"500"},children:i.change})]},l))}),t("div",{style:{marginTop:"32px"},children:[e("h2",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Integration Features"}),t("ul",{style:{fontSize:"14px",color:"#445461",lineHeight:"1.6"},children:[t("li",{children:[e("strong",{children:"Responsive Design:"})," The layout adapts to different screen sizes automatically"]}),t("li",{children:[e("strong",{children:"Sidebar Toggle:"})," Click the hamburger menu to collapse/expand the sidebar"]}),t("li",{children:[e("strong",{children:"Global Search:"})," Use the search bar to find data, notebooks, and more"]}),t("li",{children:[e("strong",{children:"Notifications:"})," Real-time notification badge with click handling"]}),t("li",{children:[e("strong",{children:"User Context:"})," Integrated user profile section"]}),t("li",{children:[e("strong",{children:"Custom Actions:"})," Extensible action buttons for application-specific features"]})]})]})]})})]})]})},M={parameters:{layout:"fullscreen",docs:{description:{story:"Complete application layout showing TopBar integration with sidebar navigation and main content area."}}},render:()=>e(Se,{})};var D,B,T;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showMenuButton: true,
    searchPlaceholder: 'Search data, notebooks, recents, and more...',
    notificationCount: 0,
    variant: 'light',
    height: 64,
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var A,W,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notificationCount: 5,
    user: defaultUser
  },
  render: args => <TopBar {...args} onNotificationClick={() => alert('5 new notifications')} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var N,E,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'dark',
    notificationCount: 12,
    user: defaultUser
  },
  render: args => <div style={{
    backgroundColor: '#11171C',
    minHeight: '100vh'
  }}>
      <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
    </div>
}`,...($=(E=h.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var z,U,L;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: userWithAvatar,
    notificationCount: 2
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(L=(U=g.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var R,I,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: adminUser,
    variant: 'light'
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var j,V,P;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Comparison showing the official Databricks logos for light (full-color) and dark (white) themes.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      {/* Light Mode */}
      <div>
        <h3 style={{
        margin: '0 0 10px 0',
        fontSize: '16px',
        fontWeight: '600'
      }}>Light Mode (Full Color Logo)</h3>
        <TopBar variant="light" user={defaultUser} onMenuClick={() => alert('Light mode menu')} onSearchSubmit={value => alert(\`Light mode search: \${value}\`)} />
      </div>
      
      {/* Dark Mode */}
      <div style={{
      backgroundColor: '#11171C',
      padding: '20px',
      borderRadius: '8px'
    }}>
        <h3 style={{
        margin: '0 0 10px 0',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white'
      }}>Dark Mode (Official White Logo)</h3>
        <TopBar variant="dark" user={defaultUser} onMenuClick={() => alert('Dark mode menu')} onSearchSubmit={value => alert(\`Dark mode search: \${value}\`)} />
      </div>
    </div>
}`,...(P=(V=f.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var H,Q,O;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    brand: 'Databricks Analytics',
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(O=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:O.source}}};var _,q,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      onClick: () => alert('Custom brand user clicked!')
    }
  },
  render: args => <TopBar {...args} brand={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
          <div style={{
      width: '32px',
      height: '32px',
      background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
            <span style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px'
      }}>DB</span>
          </div>
          <span style={{
      fontWeight: '700',
      fontSize: '18px',
      color: '#1F272D'
    }}>
            My Analytics Platform
          </span>
        </div>} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,X,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notificationCount: 2,
    user: defaultUser
  },
  render: args => <TopBar {...args} actions={<div style={{
    display: 'flex',
    gap: '4px'
  }}>
          <button style={{
      padding: '8px 12px',
      border: '1px solid #4299E0',
      backgroundColor: 'transparent',
      color: '#4299E0',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
            Settings
          </button>
          <button style={{
      padding: '8px 12px',
      border: 'none',
      backgroundColor: '#4299E0',
      color: 'white',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px'
    }}>
            Create
          </button>
        </div>} onNotificationClick={() => alert('Notifications')} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    showMenuButton: false,
    variant: 'light',
    user: {
      name: 'John Doe',
      initials: 'JD',
      onClick: () => alert('Minimal user clicked!')
    }
  },
  render: args => <TopBar {...args} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,ae;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)}>
      <div style={{
      padding: '12px 0',
      borderTop: '1px solid #E8ECF0'
    }}>
        <div style={{
        display: 'flex',
        gap: '16px',
        fontSize: '14px'
      }}>
          <span style={{
          color: '#4299E0',
          cursor: 'pointer'
        }}>Dashboards</span>
          <span style={{
          color: '#8396A5',
          cursor: 'pointer'
        }}>SQL Editor</span>
          <span style={{
          color: '#8396A5',
          cursor: 'pointer'
        }}>Alerts</span>
          <span style={{
          color: '#8396A5',
          cursor: 'pointer'
        }}>Data Sources</span>
        </div>
      </div>
    </TopBar>
}`,...(ae=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        }
      },
      defaultViewport: 'mobile'
    }
  },
  args: {
    ...Default.args,
    notificationCount: 3,
    user: {
      name: 'John Doe',
      initials: 'JD',
      onClick: () => alert('Responsive user clicked!')
    }
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(se=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,de;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SearchableTopBar />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with search functionality and sidebar toggle.'
      }
    }
  }
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,he;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete application layout showing TopBar integration with sidebar navigation and main content area.'
      }
    }
  },
  render: () => <CompleteLayout />
}`,...(he=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Te=["Default","WithNotifications","DarkVariant","WithUserAvatar","AdminUser","LogoComparison","WithTextBrand","WithCustomBrand","WithCustomActions","Minimal","WithCustomContent","Responsive","Interactive","CompleteLayoutIntegration"];export{m as AdminUser,M as CompleteLayoutIntegration,h as DarkVariant,o as Default,v as Interactive,f as LogoComparison,k as Minimal,y as Responsive,S as WithCustomActions,x as WithCustomBrand,C as WithCustomContent,u as WithNotifications,b as WithTextBrand,g as WithUserAvatar,Te as __namedExportsOrder,Be as default};
