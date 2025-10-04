import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as u}from"./index-CWnxZbJP.js";import{c as _}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const _e=""+new URL("small-scale-lockup-full-color-rgb-as0G_h6K.svg",import.meta.url).href,Be=""+new URL("small-scale-lockup-full-color-white-rgb-1iR72zlD.svg",import.meta.url).href,Te=({variant:n="light"})=>{const a=n==="dark"?Be:_e;return e.jsx("div",{className:"db-topbar__default-brand",children:e.jsx("img",{src:a,alt:"Databricks",className:_("db-topbar__logo-image",`db-topbar__logo-image--${n}`)})})},We=({user:n,variant:a="light"})=>{const l=o=>o.split(" ").map(c=>c.charAt(0).toUpperCase()).join("").slice(0,2),p=n.initials||l(n.name);return e.jsxs("div",{className:_("db-topbar__user-profile",n.onClick&&"db-topbar__user-profile--clickable"),onClick:n.onClick,role:n.onClick?"button":void 0,tabIndex:n.onClick?0:void 0,onKeyDown:n.onClick?o=>{var c;(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),(c=n.onClick)==null||c.call(n))}:void 0,children:[e.jsx("div",{className:"db-topbar__user-avatar",children:n.avatar?e.jsx("img",{src:n.avatar,alt:`${n.name}'s avatar`,className:"db-topbar__user-avatar-image"}):e.jsx("div",{className:"db-topbar__user-avatar-initials",children:p})}),e.jsxs("div",{className:"db-topbar__user-details",children:[e.jsx("span",{className:"db-topbar__user-name",children:n.name}),n.email&&e.jsx("span",{className:"db-topbar__user-email",children:n.email}),n.role&&e.jsx("span",{className:"db-topbar__user-role",children:n.role})]})]})},r=u.forwardRef(({brand:n,showMenuButton:a=!0,onMenuClick:l,searchPlaceholder:p="Search...",searchValue:o="",onSearchChange:c,onSearchSubmit:h,user:m,userSection:t,actions:s,notificationCount:g,onNotificationClick:W,sidebarCollapsed:A=!1,height:Ce=64,variant:B="light",className:je,children:R,...we},De)=>{const Me=T=>{T.key==="Enter"&&(h==null||h(o))},Ne=()=>{l==null||l()};return e.jsxs("header",{ref:De,className:_("db-topbar",`db-topbar--${B}`,je),style:{height:Ce},...we,children:[e.jsxs("div",{className:"db-topbar__container",children:[e.jsxs("div",{className:"db-topbar__left",children:[a&&e.jsx("button",{type:"button",className:_("db-topbar__menu-button",A&&"db-topbar__menu-button--collapsed"),onClick:Ne,"aria-label":A?"Open menu":"Close menu",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),e.jsx("div",{className:"db-topbar__brand",children:n||e.jsx(Te,{variant:B})})]}),e.jsx("div",{className:"db-topbar__center",children:e.jsxs("div",{className:"db-topbar__search",children:[e.jsxs("svg",{className:"db-topbar__search-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),e.jsx("input",{type:"text",className:"db-topbar__search-input",placeholder:p,value:o,onChange:T=>c==null?void 0:c(T.target.value),onKeyDown:Me})]})}),e.jsxs("div",{className:"db-topbar__right",children:[W&&e.jsxs("button",{type:"button",className:"db-topbar__notification-button",onClick:W,"aria-label":"Notifications",children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),g&&g>0&&e.jsx("span",{className:"db-topbar__notification-badge",children:g>99?"99+":g})]}),s&&e.jsx("div",{className:"db-topbar__actions",children:s}),(t||m)&&e.jsx("div",{className:"db-topbar__user",children:t||m&&e.jsx(We,{user:m,variant:B})})]})]}),R&&e.jsx("div",{className:"db-topbar__content",children:R})]})});r.displayName="TopBar";r.__docgenInfo={description:`TopBar component provides a flexible navigation header for Databricks applications.

Features:
- Official Databricks branding (full-color logo for light mode, white logo for dark mode)
- Hamburger menu integration with sidebar
- Global search functionality 
- Notification system with badge counts
- User profile section
- Custom action buttons
- Responsive design for all screen sizes
- Light and dark theme variants

@example
\`\`\`tsx
// Default with official Databricks logo (auto-switches based on theme)
<TopBar
  variant="light" // Uses full-color logo
  searchValue={searchValue}
  onSearchChange={setSearchValue}
  onMenuClick={() => toggleSidebar()}
  notificationCount={3}
  onNotificationClick={handleNotifications}
  user={{
    name: 'John Doe',
    email: 'john.doe@databricks.com',
    role: 'Data Scientist',
    onClick: () => openUserMenu()
  }}
/>

// Dark mode with official white logo
<TopBar
  variant="dark"
  user={user}
/>

// Custom brand override
<TopBar
  brand="My Company"
  user={user}
/>
\`\`\``,methods:[],displayName:"TopBar",props:{brand:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Brand name or logo to display. If not provided, shows the official Databricks logo (full-color for light mode, white for dark mode)"},showMenuButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the hamburger menu button",defaultValue:{value:"true",computed:!1}},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when hamburger menu is clicked"},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search...'",computed:!1}},searchValue:{required:!1,tsType:{name:"string"},description:"Search value",defaultValue:{value:"''",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search change handler"},onSearchSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search submit handler"},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},userSection:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom user section (overrides user prop if provided)"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional actions/buttons on the right"},notificationCount:{required:!1,tsType:{name:"number"},description:"Notification count for notification icon"},onNotificationClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Notification click handler"},sidebarCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar is currently collapsed",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the top bar",defaultValue:{value:"64",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Variant styling",defaultValue:{value:"'light'",computed:!1}}}};const Ve={title:"Navigation/TopBar",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"A flexible top navigation bar component for Databricks applications with search, notifications, and user actions."}}},tags:["autodocs"],argTypes:{brand:{control:{type:"text"},description:"Brand name or custom brand component to display. If not provided, shows official Databricks logo (full-color for light mode, white for dark mode)."},showMenuButton:{control:{type:"boolean"},description:"Whether to show the hamburger menu button"},searchPlaceholder:{control:{type:"text"},description:"Placeholder text for the search input"},notificationCount:{control:{type:"number"},description:"Number of notifications to show in badge"},variant:{control:{type:"radio"},options:["light","dark"],description:"Visual variant of the top bar"},height:{control:{type:"number"},description:"Height of the top bar in pixels"},user:{control:{type:"object"},description:"User profile information to display"},"user.name":{control:{type:"text"},description:"User's full name"},"user.email":{control:{type:"text"},description:"User's email address"},"user.role":{control:{type:"text"},description:"User's role or title"},"user.avatar":{control:{type:"text"},description:"URL to user's avatar image"}}},d={name:"John Doe",email:"john.doe@databricks.com",onClick:()=>alert("User profile clicked!")},Ae={name:"Jane Smith",email:"jane.smith@databricks.com",role:"Admin",onClick:()=>alert("Admin profile clicked!")},Re={name:"Alex Johnson",email:"alex.johnson@company.com",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",onClick:()=>alert("User with avatar clicked!")},Le=()=>{const[n,a]=u.useState(""),[l,p]=u.useState(!1);return e.jsx(r,{searchValue:n,onSearchChange:a,onSearchSubmit:o=>alert(`Searching for: ${o}`),onMenuClick:()=>p(!l),sidebarCollapsed:l,onNotificationClick:()=>alert("Notifications clicked"),notificationCount:3,user:d})},i={args:{showMenuButton:!0,searchPlaceholder:"Search data, notebooks, recents, and more...",notificationCount:0,variant:"light",height:64,user:d},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},f={args:{...i.args,notificationCount:5,user:d},render:n=>e.jsx(r,{...n,onNotificationClick:()=>alert("5 new notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},x={args:{...i.args,variant:"dark",notificationCount:12,user:d},render:n=>e.jsx("div",{style:{backgroundColor:"#11171C",minHeight:"100vh"},children:e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})})},b={args:{...i.args,user:Re,notificationCount:2},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},v={args:{...i.args,user:Ae,variant:"light"},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},k={parameters:{docs:{description:{story:"Comparison showing the official Databricks logos for light (full-color) and dark (white) themes."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600"},children:"Light Mode (Full Color Logo)"}),e.jsx(r,{variant:"light",user:d,onMenuClick:()=>alert("Light mode menu"),onSearchSubmit:n=>alert(`Light mode search: ${n}`)})]}),e.jsxs("div",{style:{backgroundColor:"#11171C",padding:"20px",borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:"600",color:"white"},children:"Dark Mode (Official White Logo)"}),e.jsx(r,{variant:"dark",user:d,onMenuClick:()=>alert("Dark mode menu"),onSearchSubmit:n=>alert(`Dark mode search: ${n}`)})]})]})},y={args:{...i.args,brand:"Databricks Analytics",user:d},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},S={args:{...i.args,user:{name:"Jane Smith",email:"jane.smith@company.com",onClick:()=>alert("Custom brand user clicked!")}},render:n=>e.jsx(r,{...n,brand:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",background:"linear-gradient(45deg, #FF6B6B, #4ECDC4)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"white",fontWeight:"bold",fontSize:"16px"},children:"DB"})}),e.jsx("span",{style:{fontWeight:"700",fontSize:"18px",color:"#1F272D"},children:"My Analytics Platform"})]}),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},C={args:{...i.args,notificationCount:2,user:d},render:n=>e.jsx(r,{...n,actions:e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("button",{style:{padding:"8px 12px",border:"1px solid #4299E0",backgroundColor:"transparent",color:"#4299E0",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Settings"}),e.jsx("button",{style:{padding:"8px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Create"})]}),onNotificationClick:()=>alert("Notifications"),onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},j={args:{showMenuButton:!1,variant:"light",user:{name:"John Doe",initials:"JD",onClick:()=>alert("Minimal user clicked!")}},render:n=>e.jsx(r,{...n,onSearchSubmit:a=>alert(`Searching: ${a}`)})},w={args:{...i.args,user:d},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onSearchSubmit:a=>alert(`Searching: ${a}`),children:e.jsx("div",{style:{padding:"12px 0",borderTop:"1px solid #E8ECF0"},children:e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"14px"},children:[e.jsx("span",{style:{color:"#4299E0",cursor:"pointer"},children:"Dashboards"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"SQL Editor"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Alerts"}),e.jsx("span",{style:{color:"#8396A5",cursor:"pointer"},children:"Data Sources"})]})})})},D={parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}}},defaultViewport:"mobile"}},args:{...i.args,notificationCount:3,user:{name:"John Doe",initials:"JD",onClick:()=>alert("Responsive user clicked!")}},render:n=>e.jsx(r,{...n,onMenuClick:()=>alert("Menu clicked"),onNotificationClick:()=>alert("Notifications"),onSearchSubmit:a=>alert(`Searching: ${a}`)})},M={render:()=>e.jsx(Le,{}),parameters:{docs:{description:{story:"Interactive example with search functionality and sidebar toggle."}}}},Ee=()=>{const[n,a]=u.useState(!1),[l,p]=u.useState(""),[o,c]=u.useState(3),h=[{id:"home",label:"Home",icon:"🏠"},{id:"dashboards",label:"Dashboards",icon:"📊"},{id:"sql-editor",label:"SQL Editor",icon:"📝"},{id:"data-sources",label:"Data Sources",icon:"🗄️"},{id:"alerts",label:"Alerts",icon:"🔔",badge:"2"},{id:"admin",label:"Administration",icon:"⚙️",children:[{id:"users",label:"Users",icon:"👥"},{id:"permissions",label:"Permissions",icon:"🔐"},{id:"settings",label:"Settings",icon:"⚙️"}]}],m=()=>{alert(`${o} notifications`),c(0)};return e.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[e.jsx(r,{brand:"Databricks Analytics",showMenuButton:!0,searchValue:l,onSearchChange:p,onSearchSubmit:t=>alert(`Searching for: ${t}`),onMenuClick:()=>a(!n),sidebarCollapsed:n,onNotificationClick:m,notificationCount:o,actions:e.jsx("button",{style:{padding:"6px 12px",border:"none",backgroundColor:"#4299E0",color:"white",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500"},children:"Create"}),user:d}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx("div",{style:{width:n?"64px":"240px",transition:"width 0.2s ease",borderRight:"1px solid #E8ECF0",backgroundColor:"#F6F7F9"},children:e.jsxs("div",{style:{padding:"16px 12px"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:"600",color:"#8396A5",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:"8px",display:n?"none":"block"},children:"Navigation"}),h.map(t=>e.jsxs("div",{role:"button",tabIndex:0,style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",marginBottom:"2px",borderRadius:"6px",cursor:"pointer",fontSize:"14px",color:"#445461",transition:"background-color 0.15s ease"},onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&s.preventDefault()},onMouseEnter:s=>{s.currentTarget.style.backgroundColor="#E8ECF0"},onMouseLeave:s=>{s.currentTarget.style.backgroundColor="transparent"},title:n?t.label:void 0,children:[e.jsx("span",{style:{fontSize:"16px",width:"20px",textAlign:"center"},children:t.icon}),!n&&e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{flex:1},children:t.label}),t.badge&&e.jsx("span",{style:{backgroundColor:"#E65B77",color:"white",fontSize:"11px",padding:"2px 6px",borderRadius:"10px",fontWeight:"600"},children:t.badge})]})]},t.id))]})}),e.jsx("div",{style:{flex:1,padding:"24px",backgroundColor:"#FFFFFF",overflow:"auto"},children:e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx("h1",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Dashboard Overview"}),e.jsx("p",{style:{fontSize:"16px",color:"#445461",lineHeight:"1.5",marginBottom:"24px"},children:"Welcome to your Databricks Analytics workspace. This layout demonstrates how the TopBar component integrates seamlessly with the sidebar navigation to provide a complete application framework."}),e.jsx("div",{style:{display:"grid",gap:"16px",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[{title:"Active Dashboards",value:"12",change:"+2 this week"},{title:"SQL Queries",value:"247",change:"+15% this month"},{title:"Data Sources",value:"8",change:"All healthy"},{title:"Team Members",value:"23",change:"3 new users"}].map((t,s)=>e.jsxs("div",{style:{padding:"20px",border:"1px solid #E8ECF0",borderRadius:"8px",backgroundColor:"#FFFFFF",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("h3",{style:{fontSize:"14px",color:"#8396A5",marginBottom:"8px",fontWeight:"500"},children:t.title}),e.jsx("div",{style:{fontSize:"24px",fontWeight:"600",color:"#1F272D",marginBottom:"4px"},children:t.value}),e.jsx("div",{style:{fontSize:"12px",color:"#3BA65E",fontWeight:"500"},children:t.change})]},s))}),e.jsxs("div",{style:{marginTop:"32px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#1F272D"},children:"Integration Features"}),e.jsxs("ul",{style:{fontSize:"14px",color:"#445461",lineHeight:"1.6"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Responsive Design:"})," The layout adapts to different screen sizes automatically"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Sidebar Toggle:"})," Click the hamburger menu to collapse/expand the sidebar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Global Search:"})," Use the search bar to find data, notebooks, and more"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Notifications:"})," Real-time notification badge with click handling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"User Context:"})," Integrated user profile section"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Custom Actions:"})," Extensible action buttons for application-specific features"]})]})]})]})})]})]})},N={parameters:{layout:"fullscreen",docs:{description:{story:"Complete application layout showing TopBar integration with sidebar navigation and main content area."}}},render:()=>e.jsx(Ee,{})};var L,E,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showMenuButton: true,
    searchPlaceholder: 'Search data, notebooks, recents, and more...',
    notificationCount: 0,
    variant: 'light',
    height: 64,
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var U,$,z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    notificationCount: 5,
    user: defaultUser
  },
  render: args => <TopBar {...args} onNotificationClick={() => alert('5 new notifications')} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(z=($=f.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var I,V,q;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,P,H;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: userWithAvatar,
    notificationCount: 2
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onNotificationClick={() => alert('Notifications')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(H=(P=b.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var O,K,Q;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    user: adminUser,
    variant: 'light'
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var G,X,Y;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    brand: 'Databricks Analytics',
    user: defaultUser
  },
  render: args => <TopBar {...args} onMenuClick={() => alert('Menu clicked')} onSearchSubmit={value => alert(\`Searching: \${value}\`)} />
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,te;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ie,se;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ce,de;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,ge,fe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var xe,be,ve;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <SearchableTopBar />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with search functionality and sidebar toggle.'
      }
    }
  }
}`,...(ve=(be=M.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var ke,ye,Se;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete application layout showing TopBar integration with sidebar navigation and main content area.'
      }
    }
  },
  render: () => <CompleteLayout />
}`,...(Se=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};const qe=["Default","WithNotifications","DarkVariant","WithUserAvatar","AdminUser","LogoComparison","WithTextBrand","WithCustomBrand","WithCustomActions","Minimal","WithCustomContent","Responsive","Interactive","CompleteLayoutIntegration"];export{v as AdminUser,N as CompleteLayoutIntegration,x as DarkVariant,i as Default,M as Interactive,k as LogoComparison,j as Minimal,D as Responsive,C as WithCustomActions,S as WithCustomBrand,w as WithCustomContent,f as WithNotifications,y as WithTextBrand,b as WithUserAvatar,qe as __namedExportsOrder,Ve as default};
