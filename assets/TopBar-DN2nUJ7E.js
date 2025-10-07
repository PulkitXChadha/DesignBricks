import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-Dz3UJJSw.js";import{c as s}from"./clsx-B-dksMZM.js";const T=""+new URL("small-scale-lockup-full-color-rgb-as0G_h6K.svg",import.meta.url).href,C=""+new URL("small-scale-lockup-full-color-white-rgb-1iR72zlD.svg",import.meta.url).href,R=({variant:a="light"})=>{const i=a==="dark"?C:T;return e.jsx("div",{className:"db-topbar__default-brand",children:e.jsx("img",{src:i,alt:"Databricks",className:s("db-topbar__logo-image",`db-topbar__logo-image--${a}`)})})},D=({user:a,variant:i="light"})=>{const n=t=>t.split(" ").map(r=>r.charAt(0).toUpperCase()).join("").slice(0,2),l=a.initials||n(a.name);return e.jsxs("div",{className:s("db-topbar__user-profile",a.onClick&&"db-topbar__user-profile--clickable"),onClick:a.onClick,role:a.onClick?"button":void 0,tabIndex:a.onClick?0:void 0,onKeyDown:a.onClick?t=>{var r;(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),(r=a.onClick)==null||r.call(a))}:void 0,children:[e.jsx("div",{className:"db-topbar__user-avatar",children:a.avatar?e.jsx("img",{src:a.avatar,alt:`${a.name}'s avatar`,className:"db-topbar__user-avatar-image"}):e.jsx("div",{className:"db-topbar__user-avatar-initials",children:l})}),e.jsxs("div",{className:"db-topbar__user-details",children:[e.jsx("span",{className:"db-topbar__user-name",children:a.name}),a.email&&e.jsx("span",{className:"db-topbar__user-email",children:a.email}),a.role&&e.jsx("span",{className:"db-topbar__user-role",children:a.role})]})]})},v=w.forwardRef(({brand:a,showMenuButton:i=!0,onMenuClick:n,searchPlaceholder:l="Search...",searchValue:t="",onSearchChange:r,onSearchSubmit:d,user:c,userSection:m,actions:h,notificationCount:o,onNotificationClick:b,sidebarCollapsed:f=!1,height:_=64,variant:p="light",className:x,children:g,...k},y)=>{const j=u=>{u.key==="Enter"&&(d==null||d(t))},N=()=>{n==null||n()};return e.jsxs("header",{ref:y,className:s("db-topbar",`db-topbar--${p}`,x),style:{height:_},...k,children:[e.jsxs("div",{className:"db-topbar__container",children:[e.jsxs("div",{className:"db-topbar__left",children:[i&&e.jsx("button",{type:"button",className:s("db-topbar__menu-button",f&&"db-topbar__menu-button--collapsed"),onClick:N,"aria-label":f?"Open menu":"Close menu",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),e.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),e.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),e.jsx("div",{className:"db-topbar__brand",children:a||e.jsx(R,{variant:p})})]}),e.jsx("div",{className:"db-topbar__center",children:e.jsxs("div",{className:"db-topbar__search",children:[e.jsxs("svg",{className:"db-topbar__search-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("path",{d:"m21 21-4.35-4.35"})]}),e.jsx("input",{type:"text",className:"db-topbar__search-input",placeholder:l,value:t,onChange:u=>r==null?void 0:r(u.target.value),onKeyDown:j})]})}),e.jsxs("div",{className:"db-topbar__right",children:[b&&e.jsxs("button",{type:"button",className:"db-topbar__notification-button",onClick:b,"aria-label":"Notifications",children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),o&&o>0&&e.jsx("span",{className:"db-topbar__notification-badge",children:o>99?"99+":o})]}),h&&e.jsx("div",{className:"db-topbar__actions",children:h}),(m||c)&&e.jsx("div",{className:"db-topbar__user",children:m||c&&e.jsx(D,{user:c,variant:p})})]})]}),g&&e.jsx("div",{className:"db-topbar__content",children:g})]})});v.displayName="TopBar";v.__docgenInfo={description:`TopBar component provides a flexible navigation header for Databricks applications.

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
\`\`\``,methods:[],displayName:"TopBar",props:{brand:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Brand name or logo to display. If not provided, shows the official Databricks logo (full-color for light mode, white for dark mode)"},showMenuButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the hamburger menu button",defaultValue:{value:"true",computed:!1}},onMenuClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when hamburger menu is clicked"},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder text",defaultValue:{value:"'Search...'",computed:!1}},searchValue:{required:!1,tsType:{name:"string"},description:"Search value",defaultValue:{value:"''",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search change handler"},onSearchSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search submit handler"},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},userSection:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom user section (overrides user prop if provided)"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional actions/buttons on the right"},notificationCount:{required:!1,tsType:{name:"number"},description:"Notification count for notification icon"},onNotificationClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Notification click handler"},sidebarCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the sidebar is currently collapsed",defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the top bar",defaultValue:{value:"64",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Variant styling",defaultValue:{value:"'light'",computed:!1}}}};export{v as T};
