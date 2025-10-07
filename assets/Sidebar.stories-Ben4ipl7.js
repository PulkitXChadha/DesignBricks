import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-Dz3UJJSw.js";import{T as ce}from"./TopBar-DN2nUJ7E.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const l=({items:n,activeItem:s,onItemClick:i,collapsed:o=!1,header:r,footer:c,width:y=240,variant:S="light"})=>{const[se,ae]=a.useState(new Set),le=t=>{t.disabled||(t.children&&t.children.length>0&&ae(m=>{const d=new Set(m);return d.has(t.id)?d.delete(t.id):d.add(t.id),d}),t.onClick&&t.onClick(),i&&i(t))},B=(t,m=0)=>{const d=se.has(t.id),re=s===t.id,W=t.children&&t.children.length>0;return t.type==="header"?o?null:e.jsx("div",{className:"db-sidebar__section-header",children:e.jsx("span",{className:"db-sidebar__section-title",children:t.label})},t.id):e.jsxs("div",{className:"db-sidebar__item-wrapper",children:[e.jsxs("button",{className:`db-sidebar__item db-sidebar__item--level-${m} ${re?"db-sidebar__item--active":""} ${t.disabled?"db-sidebar__item--disabled":""}`,onClick:()=>le(t),disabled:t.disabled,title:o?t.label:void 0,children:[t.icon&&e.jsx("span",{className:"db-sidebar__item-icon",children:t.icon}),!o&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"db-sidebar__item-label",children:t.label}),t.badge&&e.jsx("span",{className:"db-sidebar__item-badge",children:t.badge}),W&&e.jsx("svg",{className:`db-sidebar__item-chevron ${d?"db-sidebar__item-chevron--expanded":""}`,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M6 4L10 8L6 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),W&&d&&!o&&e.jsx("div",{className:"db-sidebar__children",children:t.children.map(de=>B(de,m+1))})]},t.id)};return e.jsxs("aside",{className:`db-sidebar db-sidebar--${S} ${o?"db-sidebar--collapsed":""}`,style:{width:o?64:y},children:[r&&e.jsx("div",{className:"db-sidebar__header",children:r}),e.jsx("nav",{className:"db-sidebar__nav",children:n.map(t=>B(t))}),c&&e.jsx("div",{className:"db-sidebar__footer",children:c})]})};l.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SidebarItem"}],raw:"SidebarItem[]"},description:""},activeItem:{required:!1,tsType:{name:"string"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(_item: SidebarItem) => void",signature:{arguments:[{type:{name:"SidebarItem"},name:"_item"}],return:{name:"void"}}},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}}}};const ke={title:"Navigation/Sidebar",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"Sidebar navigation for application layouts."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["light","dark"],description:"Visual variant",table:{defaultValue:{summary:"light"}}},collapsed:{control:"boolean",description:"Collapsed state (controlled externally)",table:{defaultValue:{summary:!1}}},width:{control:"number",description:"Width when expanded (px)",table:{defaultValue:{summary:240}}}}},j=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),C=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})}),w=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),ie=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[e.jsx("path",{fillRule:"evenodd",d:"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",clipRule:"evenodd"}),e.jsx("path",{d:"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"})]}),f=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"})}),oe=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"})}),A=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),me=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),pe=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),M=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12,6 12,12 16,14"})]}),D=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),e.jsx("path",{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}),e.jsx("path",{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"})]}),L=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),k=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"3",width:"20",height:"4",rx:"1",ry:"1"}),e.jsx("rect",{x:"2",y:"9",width:"20",height:"4",rx:"1",ry:"1"}),e.jsx("rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",ry:"1"}),e.jsx("line",{x1:"6",y1:"5",x2:"6",y2:"5"}),e.jsx("line",{x1:"6",y1:"11",x2:"6",y2:"11"}),e.jsx("line",{x1:"6",y1:"17",x2:"6",y2:"17"})]}),he=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),be=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),z=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14,2 14,8 20,8"})]}),xe=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"10"}),e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"16"})]}),ue=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),e.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),T=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polygon",{points:"5,3 19,12 5,21"})}),ve=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),E=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polygon",{points:"12,2 2,7 12,12 22,7"}),e.jsx("polyline",{points:"2,17 12,22 22,17"}),e.jsx("polyline",{points:"2,12 12,17 22,12"})]}),I=[{id:"home",label:"Home",icon:e.jsx(j,{})},{id:"catalog",label:"Catalog",icon:e.jsx(C,{})},{id:"workflows",label:"Workflows",icon:e.jsx(w,{}),badge:"3"},{id:"jobs",label:"Jobs",icon:e.jsx(ie,{})},{id:"models",label:"Models",icon:e.jsx(f,{})},{id:"compute",label:"Compute",icon:e.jsx(oe,{})},{id:"settings",label:"Settings",icon:e.jsx(A,{})}],p={render:()=>{const[n,s]=a.useState("home");return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:I,activeItem:n,onItemClick:i=>s(i.id)}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{source:{code:`import { Sidebar, SidebarItem } from '@designbricks/core';
import { useState } from 'react';

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <CatalogIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: <WorkflowIcon />,
    badge: '3',
  },
  {
    id: 'jobs',
    label: 'Jobs',
    icon: <JobsIcon />,
  },
  {
    id: 'models',
    label: 'Models',
    icon: <ModelsIcon />,
  },
  {
    id: 'compute',
    label: 'Compute',
    icon: <ComputeIcon />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`}}}},h={render:()=>{const[n,s]=a.useState("home");return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:I,activeItem:n,onItemClick:i=>s(i.id),variant:"dark"}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{source:{code:`import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      variant="dark"
    />
  );
}`}}}},b={render:()=>{const[n,s]=a.useState("overview"),i=[{id:"home",label:"Home",icon:e.jsx(j,{})},{id:"catalog",label:"Catalog",icon:e.jsx(C,{}),children:[{id:"databases",label:"Databases"},{id:"schemas",label:"Schemas"},{id:"tables",label:"Tables",badge:"12"}]},{id:"workflows",label:"Workflows",icon:e.jsx(w,{}),children:[{id:"pipelines",label:"Pipelines"},{id:"schedules",label:"Schedules"},{id:"runs",label:"Runs",badge:"NEW"}]},{id:"models",label:"Models",icon:e.jsx(f,{}),children:[{id:"registered",label:"Registered Models"},{id:"experiments",label:"Experiments"}]},{id:"settings",label:"Settings",icon:e.jsx(A,{})}];return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:i,activeItem:n,onItemClick:o=>s(o.id)}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{source:{code:`import { Sidebar, SidebarItem } from '@designbricks/core';

const nestedItems: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <CatalogIcon />,
    children: [
      { id: 'databases', label: 'Databases' },
      { id: 'schemas', label: 'Schemas' },
      { id: 'tables', label: 'Tables', badge: '12' },
    ],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: <WorkflowIcon />,
    children: [
      { id: 'pipelines', label: 'Pipelines' },
      { id: 'schedules', label: 'Schedules' },
      { id: 'runs', label: 'Runs', badge: 'NEW' },
    ],
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('overview');

  return (
    <Sidebar
      items={nestedItems}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`}}}},x={render:()=>{const[n,s]=a.useState("home"),[i,o]=a.useState(!1);return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:I,activeItem:n,onItemClick:r=>s(r.id),collapsed:i}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Externally Controlled Sidebar"}),e.jsx("p",{children:"The sidebar is controlled by an external button."}),e.jsxs("button",{onClick:()=>o(!i),style:{padding:"8px 16px",marginBottom:"16px",borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#fff",cursor:"pointer"},children:[i?"Expand":"Collapse"," Sidebar"]}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{description:{story:"The sidebar should be controlled externally via the `collapsed` prop. Typically, this would be controlled by the TopBar menu button."},source:{code:`import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button onClick={() => setCollapsed(!collapsed)}>
        Toggle Sidebar
      </button>
      <Sidebar
        items={items}
        activeItem={activeItem}
        onItemClick={(item) => setActiveItem(item.id)}
        collapsed={collapsed}
      />
    </>
  );
}`}}}},u={render:()=>{const[n,s]=a.useState("home"),i=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"4px",backgroundColor:"#2272B4",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",fontWeight:"bold"},children:"DB"}),e.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500"},children:"Databricks"}),e.jsx("div",{style:{fontSize:"11px",color:"#6B7280"},children:"Workspace"})]})]}),o=e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#EDEFF2",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:"12px"},children:"JD"})}),e.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:"500"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"11px",color:"#6B7280"},children:"john@example.com"})]})]});return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:I,activeItem:n,onItemClick:r=>s(r.id),header:i,footer:o}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Main Content Area"}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{source:{code:`import { Sidebar } from '@designbricks/core';

const header = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '4px',
      backgroundColor: '#2272B4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    }}>
      DB
    </div>
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Databricks</div>
      <div style={{ fontSize: '11px', color: '#6B7280' }}>Workspace</div>
    </div>
  </div>
);

const footer = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#EDEFF2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ fontSize: '12px' }}>JD</span>
    </div>
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <div style={{ fontSize: '13px', fontWeight: '500' }}>John Doe</div>
      <div style={{ fontSize: '11px', color: '#6B7280' }}>john@example.com</div>
    </div>
  </div>
);

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      header={header}
      footer={footer}
    />
  );
}`}}}},v={render:()=>{const[n,s]=a.useState("home"),i=[{id:"home",label:"Home",icon:e.jsx(j,{})},{id:"catalog",label:"Catalog",icon:e.jsx(C,{})},{id:"workflows",label:"Workflows (Coming Soon)",icon:e.jsx(w,{}),disabled:!0},{id:"jobs",label:"Jobs",icon:e.jsx(ie,{})},{id:"models",label:"Models (Beta)",icon:e.jsx(f,{}),badge:"BETA",disabled:!0},{id:"compute",label:"Compute",icon:e.jsx(oe,{})},{id:"settings",label:"Settings",icon:e.jsx(A,{})}];return e.jsxs("div",{style:{display:"flex",height:"100vh"},children:[e.jsx(l,{items:i,activeItem:n,onItemClick:o=>s(o.id)}),e.jsxs("div",{style:{flex:1,padding:"24px",backgroundColor:"#f9f9f9"},children:[e.jsx("h2",{children:"Sidebar with Disabled Items"}),e.jsx("p",{children:"Some items are disabled and cannot be selected."}),e.jsxs("p",{children:["Selected item: ",n]})]})]})},parameters:{docs:{source:{code:`import { Sidebar, SidebarItem } from '@designbricks/core';

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows (Coming Soon)',
    icon: <WorkflowIcon />,
    disabled: true,
  },
  {
    id: 'models',
    label: 'Models (Beta)',
    icon: <ModelsIcon />,
    badge: 'BETA',
    disabled: true,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}`}}}},g={render:()=>{const[n,s]=a.useState("workspace"),[i,o]=a.useState(!1),[r,c]=a.useState(""),y=[{id:"new",label:"New",icon:e.jsx(me,{})},{id:"workspace",label:"Workspace",icon:e.jsx(pe,{})},{id:"recents",label:"Recents",icon:e.jsx(M,{})},{id:"catalog",label:"Catalog",icon:e.jsx(D,{})},{id:"jobs-pipelines",label:"Jobs & Pipelines",icon:e.jsx(L,{})},{id:"compute",label:"Compute",icon:e.jsx(k,{})},{id:"discover",label:"Discover",icon:e.jsx(he,{})},{id:"marketplace",label:"Marketplace",icon:e.jsx(be,{})},{id:"sql-header",label:"SQL",type:"header"},{id:"sql-editor",label:"SQL Editor",icon:e.jsx(z,{})},{id:"queries",label:"Queries",icon:e.jsx(z,{})},{id:"dashboards",label:"Dashboards",icon:e.jsx(xe,{})},{id:"genie",label:"Genie",icon:e.jsx(T,{})},{id:"alerts",label:"Alerts",icon:e.jsx(ue,{})},{id:"query-history",label:"Query History",icon:e.jsx(M,{})},{id:"sql-warehouses",label:"SQL Warehouses",icon:e.jsx(k,{})},{id:"data-eng-header",label:"Data Engineering",type:"header"},{id:"job-runs",label:"Job Runs",icon:e.jsx(L,{})},{id:"data-ingestion",label:"Data Ingestion",icon:e.jsx(D,{})},{id:"aiml-header",label:"AI/ML",type:"header"},{id:"playground",label:"Playground",icon:e.jsx(T,{})},{id:"agents",label:"Agents",icon:e.jsx(ve,{}),badge:"Beta"},{id:"experiments",label:"Experiments",icon:e.jsx(E,{})},{id:"features",label:"Features",icon:e.jsx(E,{})},{id:"models",label:"Models",icon:e.jsx(f,{})},{id:"serving",label:"Serving",icon:e.jsx(k,{})}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[e.jsx(ce,{showMenuButton:!0,onMenuClick:()=>o(!i),sidebarCollapsed:i,searchValue:r,onSearchChange:c,notificationCount:5,onNotificationClick:()=>console.log("Notifications clicked"),user:{name:"John Doe",email:"john.doe@databricks.com",role:"Data Engineer"},variant:"light"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{items:y,activeItem:n,onItemClick:S=>s(S.id),collapsed:i,variant:"light",width:280}),e.jsx("div",{style:{flex:1,padding:"24px",backgroundColor:"#f8fafc",overflow:"auto"},children:e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"8px",padding:"24px",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsx("h1",{style:{fontSize:"24px",fontWeight:"600",margin:"0 0 8px 0",color:"#1f2937"},children:"Databricks Workspace"}),e.jsx("p",{style:{color:"#6b7280",margin:"0 0 24px 0"},children:"A complete analytics platform for data teams"}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8fafc",borderRadius:"6px",border:"1px solid #e5e7eb"},children:[e.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#374151"},children:[e.jsx("strong",{children:"Selected:"})," ",n]}),e.jsx("p",{style:{margin:"8px 0 0 0",fontSize:"14px",color:"#6b7280"},children:"Click the menu button in the TopBar to toggle the sidebar"})]})]})})]})]})},parameters:{docs:{description:{story:"Integration example showing how the TopBar menu button controls the Sidebar collapse state. This is the recommended pattern for using Sidebar with TopBar."},source:{code:`import { Sidebar, TopBar } from '@designbricks/core';

const databricksItems: SidebarItem[] = [
  {
    id: 'new',
    label: 'New',
    icon: <PlusIcon />,
  },
  {
    id: 'workspace',
    label: 'Workspace',
    icon: <FolderIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <DatabaseIcon />,
  },
  // SQL Section
  {
    id: 'sql-header',
    label: 'SQL',
    type: 'header',
  },
  {
    id: 'sql-editor',
    label: 'SQL Editor',
    icon: <FileIcon />,
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: <BarChartIcon />,
  },
  // AI/ML Section
  {
    id: 'aiml-header',
    label: 'AI/ML',
    type: 'header',
  },
  {
    id: 'agents',
    label: 'Agents',
    icon: <UserIcon />,
    badge: 'Beta',
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('workspace');
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar
        showMenuButton
        onMenuClick={() => setCollapsed(!collapsed)}
        sidebarCollapsed={collapsed}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        user={{
          name: 'John Doe',
          email: 'john.doe@databricks.com',
          role: 'Data Engineer',
        }}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar
          items={databricksItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          collapsed={collapsed}
          variant="light"
          width={280}
        />
        <main style={{ flex: 1 }}>
          {/* Your main content */}
        </main>
      </div>
    </div>
  );
}`}}}};var R,H,_;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={basicItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { Sidebar, SidebarItem } from '@designbricks/core';
import { useState } from 'react';

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <CatalogIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: <WorkflowIcon />,
    badge: '3',
  },
  {
    id: 'jobs',
    label: 'Jobs',
    icon: <JobsIcon />,
  },
  {
    id: 'models',
    label: 'Models',
    icon: <ModelsIcon />,
  },
  {
    id: 'compute',
    label: 'Compute',
    icon: <ComputeIcon />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}\`
      }
    }
  }
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var V,N,J;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={basicItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} variant="dark" />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      variant="dark"
    />
  );
}\`
      }
    }
  }
}`,...(J=(N=h.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var q,F,P;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('overview');
    const nestedItems: SidebarItem[] = [{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />
    }, {
      id: 'catalog',
      label: 'Catalog',
      icon: <CatalogIcon />,
      children: [{
        id: 'databases',
        label: 'Databases'
      }, {
        id: 'schemas',
        label: 'Schemas'
      }, {
        id: 'tables',
        label: 'Tables',
        badge: '12'
      }]
    }, {
      id: 'workflows',
      label: 'Workflows',
      icon: <WorkflowIcon />,
      children: [{
        id: 'pipelines',
        label: 'Pipelines'
      }, {
        id: 'schedules',
        label: 'Schedules'
      }, {
        id: 'runs',
        label: 'Runs',
        badge: 'NEW'
      }]
    }, {
      id: 'models',
      label: 'Models',
      icon: <ModelsIcon />,
      children: [{
        id: 'registered',
        label: 'Registered Models'
      }, {
        id: 'experiments',
        label: 'Experiments'
      }]
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />
    }];
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={nestedItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { Sidebar, SidebarItem } from '@designbricks/core';

const nestedItems: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <CatalogIcon />,
    children: [
      { id: 'databases', label: 'Databases' },
      { id: 'schemas', label: 'Schemas' },
      { id: 'tables', label: 'Tables', badge: '12' },
    ],
  },
  {
    id: 'workflows',
    label: 'Workflows',
    icon: <WorkflowIcon />,
    children: [
      { id: 'pipelines', label: 'Pipelines' },
      { id: 'schedules', label: 'Schedules' },
      { id: 'runs', label: 'Runs', badge: 'NEW' },
    ],
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('overview');

  return (
    <Sidebar
      items={nestedItems}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}\`
      }
    }
  }
}`,...(P=(F=b.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var Q,$,G;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    const [collapsed, setCollapsed] = useState(false);
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={basicItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} collapsed={collapsed} />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Externally Controlled Sidebar</h2>
          <p>The sidebar is controlled by an external button.</p>
          <button onClick={() => setCollapsed(!collapsed)} style={{
          padding: '8px 16px',
          marginBottom: '16px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}>
            {collapsed ? 'Expand' : 'Collapse'} Sidebar
          </button>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'The sidebar should be controlled externally via the \`collapsed\` prop. Typically, this would be controlled by the TopBar menu button.'
      },
      source: {
        code: \`import { Sidebar } from '@designbricks/core';

function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button onClick={() => setCollapsed(!collapsed)}>
        Toggle Sidebar
      </button>
      <Sidebar
        items={items}
        activeItem={activeItem}
        onItemClick={(item) => setActiveItem(item.id)}
        collapsed={collapsed}
      />
    </>
  );
}\`
      }
    }
  }
}`,...(G=($=x.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var U,Y,O;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    const header = <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '4px',
        backgroundColor: '#2272B4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
          DB
        </div>
        <div style={{
        flex: 1,
        overflow: 'hidden'
      }}>
          <div style={{
          fontSize: '14px',
          fontWeight: '500'
        }}>Databricks</div>
          <div style={{
          fontSize: '11px',
          color: '#6B7280'
        }}>Workspace</div>
        </div>
      </div>;
    const footer = <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
        <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#EDEFF2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <span style={{
          fontSize: '12px'
        }}>JD</span>
        </div>
        <div style={{
        flex: 1,
        overflow: 'hidden'
      }}>
          <div style={{
          fontSize: '13px',
          fontWeight: '500'
        }}>John Doe</div>
          <div style={{
          fontSize: '11px',
          color: '#6B7280'
        }}>john@example.com</div>
        </div>
      </div>;
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={basicItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} header={header} footer={footer} />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Main Content Area</h2>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { Sidebar } from '@designbricks/core';

const header = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '4px',
      backgroundColor: '#2272B4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
    }}>
      DB
    </div>
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Databricks</div>
      <div style={{ fontSize: '11px', color: '#6B7280' }}>Workspace</div>
    </div>
  </div>
);

const footer = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#EDEFF2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ fontSize: '12px' }}>JD</span>
    </div>
    <div style={{ flex: 1, overflow: 'hidden' }}>
      <div style={{ fontSize: '13px', fontWeight: '500' }}>John Doe</div>
      <div style={{ fontSize: '11px', color: '#6B7280' }}>john@example.com</div>
    </div>
  </div>
);

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
      header={header}
      footer={footer}
    />
  );
}\`
      }
    }
  }
}`,...(O=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var K,X,Z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    const itemsWithDisabled: SidebarItem[] = [{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />
    }, {
      id: 'catalog',
      label: 'Catalog',
      icon: <CatalogIcon />
    }, {
      id: 'workflows',
      label: 'Workflows (Coming Soon)',
      icon: <WorkflowIcon />,
      disabled: true
    }, {
      id: 'jobs',
      label: 'Jobs',
      icon: <JobsIcon />
    }, {
      id: 'models',
      label: 'Models (Beta)',
      icon: <ModelsIcon />,
      badge: 'BETA',
      disabled: true
    }, {
      id: 'compute',
      label: 'Compute',
      icon: <ComputeIcon />
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />
    }];
    return <div style={{
      display: 'flex',
      height: '100vh'
    }}>
        <Sidebar items={itemsWithDisabled} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} />
        <div style={{
        flex: 1,
        padding: '24px',
        backgroundColor: '#f9f9f9'
      }}>
          <h2>Sidebar with Disabled Items</h2>
          <p>Some items are disabled and cannot be selected.</p>
          <p>Selected item: {activeItem}</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { Sidebar, SidebarItem } from '@designbricks/core';

const items: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'workflows',
    label: 'Workflows (Coming Soon)',
    icon: <WorkflowIcon />,
    disabled: true,
  },
  {
    id: 'models',
    label: 'Models (Beta)',
    icon: <ModelsIcon />,
    badge: 'BETA',
    disabled: true,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <Sidebar
      items={items}
      activeItem={activeItem}
      onItemClick={(item) => setActiveItem(item.id)}
    />
  );
}\`
      }
    }
  }
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('workspace');
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const databricksItems: SidebarItem[] = [{
      id: 'new',
      label: 'New',
      icon: <PlusIcon />
    }, {
      id: 'workspace',
      label: 'Workspace',
      icon: <FolderIcon />
    }, {
      id: 'recents',
      label: 'Recents',
      icon: <ClockIcon />
    }, {
      id: 'catalog',
      label: 'Catalog',
      icon: <DatabaseIcon />
    }, {
      id: 'jobs-pipelines',
      label: 'Jobs & Pipelines',
      icon: <PipelinesIcon />
    }, {
      id: 'compute',
      label: 'Compute',
      icon: <ServerIcon />
    }, {
      id: 'discover',
      label: 'Discover',
      icon: <GlobeIcon />
    }, {
      id: 'marketplace',
      label: 'Marketplace',
      icon: <ShoppingIcon />
    },
    // SQL Section
    {
      id: 'sql-header',
      label: 'SQL',
      type: 'header'
    }, {
      id: 'sql-editor',
      label: 'SQL Editor',
      icon: <FileIcon />
    }, {
      id: 'queries',
      label: 'Queries',
      icon: <FileIcon />
    }, {
      id: 'dashboards',
      label: 'Dashboards',
      icon: <BarChartIcon />
    }, {
      id: 'genie',
      label: 'Genie',
      icon: <PlayIcon />
    }, {
      id: 'alerts',
      label: 'Alerts',
      icon: <BellIcon />
    }, {
      id: 'query-history',
      label: 'Query History',
      icon: <ClockIcon />
    }, {
      id: 'sql-warehouses',
      label: 'SQL Warehouses',
      icon: <ServerIcon />
    },
    // Data Engineering Section
    {
      id: 'data-eng-header',
      label: 'Data Engineering',
      type: 'header'
    }, {
      id: 'job-runs',
      label: 'Job Runs',
      icon: <PipelinesIcon />
    }, {
      id: 'data-ingestion',
      label: 'Data Ingestion',
      icon: <DatabaseIcon />
    },
    // AI/ML Section
    {
      id: 'aiml-header',
      label: 'AI/ML',
      type: 'header'
    }, {
      id: 'playground',
      label: 'Playground',
      icon: <PlayIcon />
    }, {
      id: 'agents',
      label: 'Agents',
      icon: <UserIcon />,
      badge: 'Beta'
    }, {
      id: 'experiments',
      label: 'Experiments',
      icon: <LayersIcon />
    }, {
      id: 'features',
      label: 'Features',
      icon: <LayersIcon />
    }, {
      id: 'models',
      label: 'Models',
      icon: <ModelsIcon />
    }, {
      id: 'serving',
      label: 'Serving',
      icon: <ServerIcon />
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
        <TopBar showMenuButton onMenuClick={() => setCollapsed(!collapsed)} sidebarCollapsed={collapsed} searchValue={searchValue} onSearchChange={setSearchValue} notificationCount={5} onNotificationClick={() => console.log('Notifications clicked')} user={{
        name: 'John Doe',
        email: 'john.doe@databricks.com',
        role: 'Data Engineer'
      }} variant="light" />
        <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
          <Sidebar items={databricksItems} activeItem={activeItem} onItemClick={item => setActiveItem(item.id)} collapsed={collapsed} variant="light" width={280} />
          <div style={{
          flex: 1,
          padding: '24px',
          backgroundColor: '#f8fafc',
          overflow: 'auto'
        }}>
            <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
              <h1 style={{
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 8px 0',
              color: '#1f2937'
            }}>
                Databricks Workspace
              </h1>
              <p style={{
              color: '#6b7280',
              margin: '0 0 24px 0'
            }}>
                A complete analytics platform for data teams
              </p>
              <div style={{
              padding: '16px',
              backgroundColor: '#f8fafc',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}>
                <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#374151'
              }}>
                  <strong>Selected:</strong> {activeItem}
                </p>
                <p style={{
                margin: '8px 0 0 0',
                fontSize: '14px',
                color: '#6b7280'
              }}>
                  Click the menu button in the TopBar to toggle the sidebar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Integration example showing how the TopBar menu button controls the Sidebar collapse state. This is the recommended pattern for using Sidebar with TopBar.'
      },
      source: {
        code: \`import { Sidebar, TopBar } from '@designbricks/core';

const databricksItems: SidebarItem[] = [
  {
    id: 'new',
    label: 'New',
    icon: <PlusIcon />,
  },
  {
    id: 'workspace',
    label: 'Workspace',
    icon: <FolderIcon />,
  },
  {
    id: 'catalog',
    label: 'Catalog',
    icon: <DatabaseIcon />,
  },
  // SQL Section
  {
    id: 'sql-header',
    label: 'SQL',
    type: 'header',
  },
  {
    id: 'sql-editor',
    label: 'SQL Editor',
    icon: <FileIcon />,
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: <BarChartIcon />,
  },
  // AI/ML Section
  {
    id: 'aiml-header',
    label: 'AI/ML',
    type: 'header',
  },
  {
    id: 'agents',
    label: 'Agents',
    icon: <UserIcon />,
    badge: 'Beta',
  },
];

function App() {
  const [activeItem, setActiveItem] = useState('workspace');
  const [collapsed, setCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar
        showMenuButton
        onMenuClick={() => setCollapsed(!collapsed)}
        sidebarCollapsed={collapsed}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        user={{
          name: 'John Doe',
          email: 'john.doe@databricks.com',
          role: 'Data Engineer',
        }}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar
          items={databricksItems}
          activeItem={activeItem}
          onItemClick={(item) => setActiveItem(item.id)}
          collapsed={collapsed}
          variant="light"
          width={280}
        />
        <main style={{ flex: 1 }}>
          {/* Your main content */}
        </main>
      </div>
    </div>
  );
}\`
      }
    }
  }
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const je=["Basic","Dark","WithNestedItems","WithExternalControl","WithHeaderAndFooter","DisabledItems","WithTopBar"];export{p as Basic,h as Dark,v as DisabledItems,x as WithExternalControl,u as WithHeaderAndFooter,b as WithNestedItems,g as WithTopBar,je as __namedExportsOrder,ke as default};
