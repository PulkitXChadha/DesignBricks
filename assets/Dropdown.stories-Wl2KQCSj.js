import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as d}from"./index-CWnxZbJP.js";import{r as Se}from"./index-BCUrj1sd.js";import{c as P}from"./clsx-B-dksMZM.js";import{B as o}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dgl0PtG8.js";const l=d.forwardRef(({children:i,items:u=[],content:$,open:x,onOpenChange:m,onSelect:b,placement:D="bottom-start",trigger:R="click",closeOnSelect:W=!0,width:je="auto",maxHeight:De=300,disabled:g=!1,offset:h=4,className:Ie,...Be},Ce)=>{const[ke,U]=d.useState(!1),[K,_e]=d.useState({top:0,left:0}),[I,w]=d.useState(-1),v=d.useRef(null),B=d.useRef(null),A=d.useRef([]),c=x!==void 0?x:ke,N=R==="manual",V=d.useCallback(()=>{if(!v.current||!B.current||!c)return;const t=v.current.getBoundingClientRect(),n=B.current.getBoundingClientRect(),s={width:window.innerWidth,height:window.innerHeight};let a=0,r=0;switch(D){case"bottom-start":a=t.bottom+h,r=t.left;break;case"bottom-end":a=t.bottom+h,r=t.right-n.width;break;case"top-start":a=t.top-n.height-h,r=t.left;break;case"top-end":a=t.top-n.height-h,r=t.right-n.width;break;case"left":a=t.top+(t.height-n.height)/2,r=t.left-n.width-h;break;case"right":a=t.top+(t.height-n.height)/2,r=t.right+h;break}r=Math.max(8,Math.min(r,s.width-n.width-8)),a=Math.max(8,Math.min(a,s.height-n.height-8)),_e({top:a,left:r})},[c,D,h]),q=()=>{if(g||N)return;const t=!0;x===void 0&&U(t),m==null||m(t),w(-1)},f=d.useCallback(()=>{if(g||N)return;const t=!1;x===void 0&&U(t),m==null||m(t),w(-1)},[g,N,x,m]),Te=()=>{c?f():q()},Ee=(t,n)=>{var s;t.disabled||(n.preventDefault(),n.stopPropagation(),(s=t.onClick)==null||s.call(t,t),b==null||b(t),W&&f())},F=t=>{var s,a;if(!c){(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),q());return}const n=u.filter(r=>!r.disabled);switch(t.key){case"Escape":t.preventDefault(),f(),(s=v.current)==null||s.focus();break;case"ArrowDown":t.preventDefault(),w(r=>{var j;const y=r<n.length-1?r+1:0;return(j=A.current[y])==null||j.focus(),y});break;case"ArrowUp":t.preventDefault(),w(r=>{var j;const y=r>0?r-1:n.length-1;return(j=A.current[y])==null||j.focus(),y});break;case"Enter":if(t.preventDefault(),I>=0&&n[I]){const r=n[I];(a=r.onClick)==null||a.call(r,r),b==null||b(r),W&&f()}break}};d.useEffect(()=>{if(!c)return;const t=n=>{var s,a;(s=v.current)!=null&&s.contains(n.target)||(a=B.current)!=null&&a.contains(n.target)||f()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[c,f]),d.useEffect(()=>{if(c){V();const t=()=>V();return window.addEventListener("resize",t),window.addEventListener("scroll",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("scroll",t)}}},[c,D,V]);const Le={...R==="click"&&{onClick:Te},...R==="hover"&&{onMouseEnter:q,onMouseLeave:f}},Me=c&&!g?Se.createPortal(e.jsx("div",{ref:B,role:"menu",tabIndex:-1,className:P("db-dropdown",`db-dropdown--${D}`,Ie),style:{position:"fixed",top:K.top,left:K.left,width:je,maxHeight:De,zIndex:1500},onKeyDown:F,children:e.jsx("div",{className:"db-dropdown__content",children:$||e.jsx("ul",{className:"db-dropdown__list",role:"none",children:u.map((t,n)=>e.jsxs("li",{role:"none",children:[e.jsxs("button",{ref:s=>A.current[n]=s,type:"button",role:"menuitem",className:P("db-dropdown__item",`db-dropdown__item--${t.variant||"default"}`,{"db-dropdown__item--disabled":t.disabled,"db-dropdown__item--focused":n===I}),disabled:t.disabled,onClick:s=>Ee(t,s),onFocus:()=>w(n),children:[t.icon&&e.jsx("span",{className:"db-dropdown__item-icon",children:t.icon}),e.jsxs("div",{className:"db-dropdown__item-content",children:[e.jsx("span",{className:"db-dropdown__item-label",children:t.label}),t.description&&e.jsx("span",{className:"db-dropdown__item-description",children:t.description})]})]}),t.divider&&e.jsx("div",{className:"db-dropdown__divider"})]},t.id))})})}),document.body):null;return e.jsxs("div",{ref:Ce,className:P("db-dropdown__trigger",{"db-dropdown__trigger--open":c,"db-dropdown__trigger--disabled":g}),...Be,children:[e.jsx("div",{ref:v,tabIndex:g?-1:0,role:"button","aria-haspopup":"menu","aria-expanded":c,"aria-disabled":g,onKeyDown:F,...Le,children:i}),Me]})});l.displayName="Dropdown";l.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger element"},items:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:"Array of dropdown items",defaultValue:{value:"[]",computed:!1}},content:{required:!1,tsType:{name:"ReactNode"},description:"Custom dropdown content"},open:{required:!1,tsType:{name:"boolean"},description:"Whether dropdown is open (controlled)"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"_open"}],return:{name:"void"}}},description:"Open state change handler"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(_item: DropdownItem) => void",signature:{arguments:[{type:{name:"DropdownItem"},name:"_item"}],return:{name:"void"}}},description:"Item selection handler"},placement:{required:!1,tsType:{name:"union",raw:"'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left' | 'right'",elements:[{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Dropdown placement",defaultValue:{value:"'bottom-start'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'manual'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'manual'"}]},description:"Dropdown trigger",defaultValue:{value:"'click'",computed:!1}},closeOnSelect:{required:!1,tsType:{name:"boolean"},description:"Whether to close on item selection",defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Custom dropdown width",defaultValue:{value:"'auto'",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Max height before scrolling",defaultValue:{value:"300",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable dropdown",defaultValue:{value:"false",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"Offset from trigger",defaultValue:{value:"4",computed:!1}}},composes:["Omit"]};const We={title:"Overlays/Dropdown",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end","left","right"]},trigger:{control:{type:"select"},options:["click","hover","manual"]},closeOnSelect:{control:"boolean"},disabled:{control:"boolean"},width:{control:"text"},maxHeight:{control:"number"}}},H=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),ve=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),e.jsx("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"})]}),ye=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),e.jsx("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),p=[{id:"1",label:"Profile",icon:e.jsx(H,{}),onClick:i=>alert(`Clicked: ${i.label}`)},{id:"2",label:"Settings",icon:e.jsx(ve,{}),onClick:i=>alert(`Clicked: ${i.label}`)},{id:"3",label:"Logout",icon:e.jsx(ye,{}),variant:"danger",onClick:i=>alert(`Clicked: ${i.label}`)}],C={args:{items:p,children:e.jsx(o,{children:"Click me"})}},k={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",padding:"100px"},children:[e.jsx(l,{items:p,placement:"top-start",children:e.jsx(o,{children:"Top Start"})}),e.jsx(l,{items:p,placement:"top-end",children:e.jsx(o,{children:"Top End"})}),e.jsx("div",{})," ",e.jsx(l,{items:p,placement:"left",children:e.jsx(o,{children:"Left"})}),e.jsx("div",{})," ",e.jsx(l,{items:p,placement:"right",children:e.jsx(o,{children:"Right"})}),e.jsx(l,{items:p,placement:"bottom-start",children:e.jsx(o,{children:"Bottom Start"})}),e.jsx(l,{items:p,placement:"bottom-end",children:e.jsx(o,{children:"Bottom End"})}),e.jsx("div",{})," "]})},_={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[e.jsx(l,{items:p,trigger:"click",children:e.jsx(o,{children:"Click Trigger"})}),e.jsx(l,{items:p,trigger:"hover",children:e.jsx(o,{children:"Hover Trigger"})})]})},T={args:{items:[{id:"1",label:"Profile",description:"View and edit your profile",icon:e.jsx(H,{})},{id:"2",label:"Settings",description:"Configure your preferences",icon:e.jsx(ve,{})},{id:"divider1",label:"",divider:!0},{id:"3",label:"Logout",description:"Sign out of your account",icon:e.jsx(ye,{}),variant:"danger"}],children:e.jsx(o,{children:"User Menu"})}},E={args:{items:[{id:"1",label:"Default Item"},{id:"2",label:"Success Item",variant:"success"},{id:"3",label:"Danger Item",variant:"danger"},{id:"4",label:"Disabled Item",disabled:!0}],children:e.jsx(o,{children:"Item Variants"})}},ze=()=>{const[i,u]=d.useState(!1);return e.jsxs("div",{style:{padding:"40px"},children:[e.jsx("div",{style:{display:"flex",gap:"12px",marginBottom:"20px"},children:e.jsxs(o,{onClick:()=>u(!i),children:[i?"Close":"Open"," Dropdown"]})}),e.jsx(l,{items:p,trigger:"manual",open:i,onOpenChange:u,children:e.jsx(o,{children:"Manually Controlled"})})]})},L={render:()=>e.jsx(ze,{})},M={args:{content:e.jsxs("div",{style:{padding:"16px",minWidth:"200px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:"Custom Content"}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#6B7280"},children:"You can put any custom content here"}),e.jsx(o,{size:"small",style:{width:"100%"},children:"Action Button"})]}),children:e.jsx(o,{children:"Custom Content"})}},S={args:{items:Array.from({length:20},(i,u)=>({id:`item-${u}`,label:`Menu Item ${u+1}`,icon:u%3===0?e.jsx(H,{}):void 0})),maxHeight:200,children:e.jsx(o,{children:"Long List"})}},z={args:{items:p,disabled:!0,children:e.jsx(o,{disabled:!0,children:"Disabled Dropdown"})}};var O,Y,G;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    children: <Button>Click me</Button>
  }
}`,...(G=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '100px'
  }}>
      <Dropdown items={basicItems} placement="top-start">
        <Button>Top Start</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="top-end">
        <Button>Top End</Button>
      </Dropdown>
      <div /> {/* Empty space */}
      
      <Dropdown items={basicItems} placement="left">
        <Button>Left</Button>
      </Dropdown>
      <div /> {/* Empty space */}
      <Dropdown items={basicItems} placement="right">
        <Button>Right</Button>
      </Dropdown>
      
      <Dropdown items={basicItems} placement="bottom-start">
        <Button>Bottom Start</Button>
      </Dropdown>
      <Dropdown items={basicItems} placement="bottom-end">
        <Button>Bottom End</Button>
      </Dropdown>
      <div /> {/* Empty space */}
    </div>
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    padding: '40px'
  }}>
      <Dropdown items={basicItems} trigger="click">
        <Button>Click Trigger</Button>
      </Dropdown>
      <Dropdown items={basicItems} trigger="hover">
        <Button>Hover Trigger</Button>
      </Dropdown>
    </div>
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Profile',
      description: 'View and edit your profile',
      icon: <UserIcon />
    }, {
      id: '2',
      label: 'Settings',
      description: 'Configure your preferences',
      icon: <SettingsIcon />
    }, {
      id: 'divider1',
      label: '',
      divider: true
    }, {
      id: '3',
      label: 'Logout',
      description: 'Sign out of your account',
      icon: <LogoutIcon />,
      variant: 'danger' as const
    }],
    children: <Button>User Menu</Button>
  }
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ae,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Default Item'
    }, {
      id: '2',
      label: 'Success Item',
      variant: 'success' as const
    }, {
      id: '3',
      label: 'Danger Item',
      variant: 'danger' as const
    }, {
      id: '4',
      label: 'Disabled Item',
      disabled: true
    }],
    children: <Button>Item Variants</Button>
  }
}`,...(ie=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var de,le,ce;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ManualControlComponent />
}`,...(ce=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,me;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    content: <div style={{
      padding: '16px',
      minWidth: '200px'
    }}>
        <h4 style={{
        margin: '0 0 8px 0',
        fontSize: '14px'
      }}>Custom Content</h4>
        <p style={{
        margin: '0 0 12px 0',
        fontSize: '12px',
        color: '#6B7280'
      }}>
          You can put any custom content here
        </p>
        <Button size="small" style={{
        width: '100%'
      }}>
          Action Button
        </Button>
      </div>,
    children: <Button>Custom Content</Button>
  }
}`,...(me=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,he,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 20
    }, (_, i) => ({
      id: \`item-\${i}\`,
      label: \`Menu Item \${i + 1}\`,
      icon: i % 3 === 0 ? <UserIcon /> : undefined
    })),
    maxHeight: 200,
    children: <Button>Long List</Button>
  }
}`,...(fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,xe,we;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    disabled: true,
    children: <Button disabled>Disabled Dropdown</Button>
  }
}`,...(we=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};const Ue=["Default","Placements","Triggers","WithDescriptions","ItemVariants","ManualControl","CustomContent","LongList","DisabledDropdown"];export{M as CustomContent,C as Default,z as DisabledDropdown,E as ItemVariants,S as LongList,L as ManualControl,k as Placements,_ as Triggers,T as WithDescriptions,Ue as __namedExportsOrder,We as default};
