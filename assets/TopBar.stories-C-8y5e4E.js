import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-Dz3UJJSw.js";import{T as t}from"./TopBar-DN2nUJ7E.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const Me={title:"Navigation/TopBar",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"A flexible top navigation bar component for Databricks applications with search, notifications, and user actions."}}},tags:["autodocs"],argTypes:{brand:{control:{type:"text"},description:"Brand name or custom brand component to display. If not provided, shows official Databricks logo (full-color for light mode, white for dark mode)."},showMenuButton:{control:{type:"boolean"},description:"Whether to show the hamburger menu button"},searchPlaceholder:{control:{type:"text"},description:"Placeholder text for the search input"},notificationCount:{control:{type:"number"},description:"Number of notifications to show in badge"},variant:{control:{type:"radio"},options:["light","dark"],description:"Visual variant of the top bar"},height:{control:{type:"number"},description:"Height of the top bar in pixels"},user:{control:{type:"object"},description:"User profile information to display"},"user.name":{control:{type:"text"},description:"User's full name"},"user.email":{control:{type:"text"},description:"User's email address"},"user.role":{control:{type:"text"},description:"User's role or title"},"user.avatar":{control:{type:"text"},description:"URL to user's avatar image"}}},i={name:"John Doe",email:"john.doe@databricks.com",onClick:()=>alert("User profile clicked!")},xe={name:"Jane Smith",email:"jane.smith@databricks.com",role:"Admin",onClick:()=>alert("Admin profile clicked!")},fe={name:"Alex Johnson",email:"alex.johnson@company.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",onClick:()=>alert("User with avatar clicked!")},be=()=>{const[n,r]=l.useState(""),[c,j]=l.useState(!1);return e.jsx(t,{searchValue:n,onSearchChange:r,onSearchSubmit:d=>alert(`Searching for: ${d}`),onMenuClick:()=>j(!c),sidebarCollapsed:c,onNotificationClick:()=>alert("Notifications clicked"),notificationCount:3,user:i})},a={args:{showMenuButton:!0,searchPlaceholder:"Search data, notebooks, recents, and more...",notificationCount:0,variant:"light",height:64,user:i},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},p={args:{...a.args,notificationCount:5,user:i},render:n=>e.jsx(t,{...n,onNotificationClick:()=>alert("5 new notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},u={args:{...a.args,variant:"dark",notificationCount:12,user:i},render:n=>e.jsx("div",{style:{backgroundColor:"#11171C",minHeight:"100vh"},children:e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})})},h={args:{...a.args,user:fe,notificationCount:2},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},g={args:{...a.args,user:xe,variant:"light"},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},m={parameters:{docs:{description:{story:"Comparison showing the official Databricks logos for light (full-color) and dark (white) themes."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600"},children:"Light Mode (Full Color Logo)"}),e.jsx(t,{variant:"light",user:i,onMenuClick:()=>alert("Light mode menu"),onSearchSubmit:n=>alert(`Light mode search: ${n}`)})]}),e.jsxs("div",{style:{backgroundColor:"#11171C",padding:"20px",borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600",color:"white"},children:"Dark Mode (Official White Logo)"}),e.jsx(t,{variant:"dark",user:i,onMenuClick:()=>alert("Dark mode menu"),onSearchSubmit:n=>alert(`Dark mode search: ${n}`)})]})]})},x={args:{...a.args,brand:"Databricks Analytics",user:i},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},f={args:{...a.args,user:{name:"Jane Smith",email:"jane.smith@company.com",onClick:()=>alert("Custom brand user clicked!")}},render:n=>e.jsx(t,{...n,brand:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(45deg, #FF6B6B, #4ECDC4)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"white",fontWeight:"bold",fontSize:"16px"},children:"DB"})}),e.jsx("span",{style:{fontWeight:"700",fontSize:"18px",color:"#1F272D"},children:"My Analytics Platform"})]}),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},b={args:{...a.args,notificationCount:2,user:i},render:n=>e.jsx(t,{...n,actions:e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("button",{style:{padding:"8px 12px",border:"1px solid #4299E0",backgroundColor:"transparent",color:"#4299E0",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Settings"}),e.jsx("button",{style:{padding:"8px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Create"})]}),onNotificationClick:()=>alert("Notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},S={args:{showMenuButton:!1,variant:"light",user:{name:"John Doe",initials:"JD",onClick:()=>alert("Minimal user clicked!")}},render:n=>e.jsx(t,{...n,onSearchSubmit:r=>alert(`Searching: ${r}`)})},k={args:{...a.args,user:i},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:r=>alert(`Searching: ${r}`),children:e.jsx("div",{style:{padding:"12px 0",borderTop:"1px solid #E8ECF0"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"14px"},children:[e.jsx("span",{style:{color:"#4299E0",cursor:"pointer"},children:"Dashboards"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"SQL Editor"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Alerts"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Data Sources"})]})})})},C={parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}}},defaultViewport:"mobile"}},args:{...a.args,notificationCount:3,user:{name:"John Doe",initials:"JD",onClick:()=>alert("Responsive user clicked!")}},render:n=>e.jsx(t,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:r=>alert(`Searching: ${r}`)})},y={render:()=>e.jsx(be,{}),parameters:{docs:{description:{story:"Interactive example with search functionality and sidebar toggle."}}}},Se=()=>{const[n,r]=l.useState(!1),[c,j]=l.useState(""),[d,he]=l.useState(3),ge=[{id:"home",label:"Home",icon:"🏠"},{id:"dashboards",label:"Dashboards",icon:"📊"},{id:"sql-editor",label:"SQL Editor",icon:"📝"},{id:"data-sources",label:"Data Sources",icon:"🗄️"},{id:"alerts",label:"Alerts",icon:"🔔",badge:"2"},{id:"admin",label:"Administration",icon:"⚙️",children:[{id:"users",label:"Users",icon:"👥"},{id:"permissions",label:"Permissions",icon:"🔐"},{id:"settings",label:"Settings",icon:"⚙️"}]}],me=()=>{alert(`${d} notifications`),he(0)};return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx(t,{brand:"Databricks Analytics",showMenuButton:!0,searchValue:c,onSearchChange:j,onSearchSubmit:o=>alert(`Searching for: ${o}`),onMenuClick:()=>r(!n),sidebarCollapsed:n,onNotificationClick:me,notificationCount:d,actions:e.jsx("button",{style:{padding:"6px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Create"}),user:i}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx("div",{style:{width:n?"64px":"240px",transition:"width 0.2s ease",borderRight:"1px solid #E8ECF0",backgroundColor:"#F6F7F9"},children:e.jsxs("div",{style:{padding:"16px 12px"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"#8396A5",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px",display:n?"none":"block"},children:"Navigation"}),ge.map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",marginBottom:"2px",borderRadius:"6px",cursor:"pointer",fontSize:"14px",color:"#445461",transition:"background-color 0.15s ease"},onMouseEnter:s=>{s.currentTarget.style.backgroundColor="#E8ECF0"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent"},title:n?o.label:void 0,children:[e.jsx("span",{style:{fontSize:"16px",width:"20px",textAlign:"center"},children:o.icon}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{flex:1},children:o.label}),o.badge&&e.jsx("span",{style:{backgroundColor:"#E65B77",color:"white",fontSize:"11px",padding:"2px 6px",borderRadius:"10px",fontWeight:"600"},children:o.badge})]})]},o.id))]})}),e.jsx("div",{style:{flex:1,padding:"24px",backgroundColor:"#FFFFFF",overflow:"auto"},children:e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx("h1",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Dashboard Overview"}),e.jsx("p",{style:{fontSize:"16px",color:"#445461",lineHeight:"1.5",marginBottom:"24px"},children:"Welcome to your Databricks Analytics workspace. This layout demonstrates how the TopBar component integrates seamlessly with the sidebar navigation to provide a complete application framework."}),e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[{title:"Active Dashboards",value:"12",change:"+2 this week"},{title:"SQL Queries",value:"247",change:"+15% this month"},{title:"Data Sources",value:"8",change:"All healthy"},{title:"Team Members",value:"23",change:"3 new users"}].map((o,s)=>e.jsxs("div",{style:{padding:"20px",border:"1px solid #E8ECF0",borderRadius:"8px",backgroundColor:"#FFFFFF",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("h3",{style:{fontSize:"14px",color:"#8396A5",marginBottom:"8px",fontWeight:"500"},children:o.title}),e.jsx("div",{style:{fontSize:"24px",fontWeight:"600",color:"#1F272D",marginBottom:"4px"},children:o.value}),e.jsx("div",{style:{fontSize:"12px",color:"#3BA65E",fontWeight:"500"},children:o.change})]},s))}),e.jsxs("div",{style:{marginTop:"32px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Integration Features"}),e.jsxs("ul",{style:{fontSize:"14px",color:"#445461",lineHeight:"1.6"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Responsive Design:"})," The layout adapts to different screen sizes automatically"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sidebar Toggle:"})," Click the hamburger menu to collapse/expand the sidebar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Global Search:"})," Use the search bar to find data, notebooks, and more"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notifications:"})," Real-time notification badge with click handling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"User Context:"})," Integrated user profile section"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Actions:"})," Extensible action buttons for application-specific features"]})]})]})]})})]})]})},v={parameters:{layout:"fullscreen",docs:{description:{story:"Complete application layout showing TopBar integration with sidebar navigation and main content area."}}},render:()=>e.jsx(Se,{})};var M,w,D;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showMenuButton: true,
    searchPlaceholder: 'Search data, notebooks, recents, and more...',
    notificationCount: 0,
    variant: 'light',
    height: 64,
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(D=(w=a.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var B,T,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notificationCount: 5,
    user: defaultUser
  },
  render: args => <TopBar {...args} onNotificationClick={() => alert('5 new notifications')} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var W,F,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var E,$,z;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: userWithAvatar,
    notificationCount: 2
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(z=($=h.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var U,L,R;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: adminUser,
    variant: 'light'
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(R=(L=g.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var I,J,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(J=m.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var P,H,Q;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    brand: 'Databricks Analytics',
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(Q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var O,_,q;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(_=f.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,K,X;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(K=b.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,te;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,ie;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,le,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <SearchableTopBar />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with search functionality and sidebar toggle.'
      }
    }
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete application layout showing TopBar integration with sidebar navigation and main content area.'
      }
    }
  },
  render: () => <CompleteLayout />
}`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const we=["Default","WithNotifications","DarkVariant","WithUserAvatar","AdminUser","LogoComparison","WithTextBrand","WithCustomBrand","WithCustomActions","Minimal","WithCustomContent","Responsive","Interactive","CompleteLayoutIntegration"];export{g as AdminUser,v as CompleteLayoutIntegration,u as DarkVariant,a as Default,y as Interactive,m as LogoComparison,S as Minimal,C as Responsive,b as WithCustomActions,f as WithCustomBrand,k as WithCustomContent,p as WithNotifications,x as WithTextBrand,h as WithUserAvatar,we as __namedExportsOrder,Me as default};
