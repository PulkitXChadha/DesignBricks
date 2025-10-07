import{j as n,a as u}from"./jsx-runtime-D2eXtamC.js";import{r as d}from"./index-SE77F2UD.js";import{r as Re}from"./index-Bkzk5JSy.js";import{c as W}from"./clsx-B-dksMZM.js";import{B as o}from"./Button-Ch83UTUf.js";import"./_commonjsHelpers-DM6icglO.js";const l=d.forwardRef(({children:s,items:m=[],content:U,open:w,onOpenChange:g,onSelect:v,placement:I="bottom-start",trigger:q="click",closeOnSelect:$=!0,width:Be="auto",maxHeight:Ie=300,disabled:h=!1,offset:f=4,className:Ce,...ke},_e)=>{const[Se,j]=d.useState(!1),[K,Le]=d.useState({top:0,left:0}),[C,y]=d.useState(-1),D=d.useRef(null),k=d.useRef(null),A=d.useRef([]),c=w!==void 0?w:Se,_=q==="manual",H=d.useCallback(()=>{if(!D.current||!k.current||!c)return;const e=D.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),a={width:window.innerWidth,height:window.innerHeight};let i=0,r=0;switch(I){case"bottom-start":i=e.bottom+f,r=e.left;break;case"bottom-end":i=e.bottom+f,r=e.right-t.width;break;case"top-start":i=e.top-t.height-f,r=e.left;break;case"top-end":i=e.top-t.height-f,r=e.right-t.width;break;case"left":i=e.top+(e.height-t.height)/2,r=e.left-t.width-f;break;case"right":i=e.top+(e.height-t.height)/2,r=e.right+f;break}r=Math.max(8,Math.min(r,a.width-t.width-8)),i=Math.max(8,Math.min(i,a.height-t.height-8)),Le({top:i,left:r})},[c,I,f]),P=d.useCallback(()=>{if(h||_)return;const e=!0;w===void 0&&j(e),g==null||g(e),y(-1)},[h,_,w,g]),b=d.useCallback(()=>{if(h||_)return;const e=!1;w===void 0&&j(e),g==null||g(e),y(-1)},[h,_,w,g]),Ee=()=>{c?b():P()},Me=(e,t)=>{var a;e.disabled||(t.preventDefault(),t.stopPropagation(),(a=e.onClick)==null||a.call(e,e),v==null||v(e),$&&b())},F=e=>{var a,i;if(!c){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),P());return}const t=m.filter(r=>!r.disabled);switch(e.key){case"Escape":e.preventDefault(),b(),(a=D.current)==null||a.focus();break;case"ArrowDown":e.preventDefault(),y(r=>{var B;const x=r<t.length-1?r+1:0;return(B=A.current[x])==null||B.focus(),x});break;case"ArrowUp":e.preventDefault(),y(r=>{var B;const x=r>0?r-1:t.length-1;return(B=A.current[x])==null||B.focus(),x});break;case"Enter":if(e.preventDefault(),C>=0&&t[C]){const r=t[C];(i=r.onClick)==null||i.call(r,r),v==null||v(r),$&&b()}break}};d.useEffect(()=>{if(!c)return;const e=t=>{var a,i;(a=D.current)!=null&&a.contains(t.target)||(i=k.current)!=null&&i.contains(t.target)||b()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[c,b]),d.useEffect(()=>{if(c){H();const e=()=>H();return window.addEventListener("resize",e),window.addEventListener("scroll",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}}},[c,I,H]);const ze={...q==="click"&&{onClick:Ee},...q==="hover"&&{onMouseEnter:P,onMouseLeave:b}},Ve=c&&!h?Re.createPortal(n("div",{ref:k,className:W("db-dropdown",`db-dropdown--${I}`,Ce),style:{position:"fixed",top:K.top,left:K.left,width:Be,maxHeight:Ie,zIndex:1500},role:"menu",tabIndex:-1,onKeyDown:F,children:n("div",{className:"db-dropdown__content",children:U||n("ul",{className:"db-dropdown__list",role:"none",children:m.map((e,t)=>u("li",{role:"none",children:[u("button",{ref:a=>A.current[t]=a,type:"button",role:"menuitem",className:W("db-dropdown__item",`db-dropdown__item--${e.variant||"default"}`,{"db-dropdown__item--disabled":e.disabled,"db-dropdown__item--focused":t===C}),disabled:e.disabled,onClick:a=>Me(e,a),onFocus:()=>y(t),children:[e.icon&&n("span",{className:"db-dropdown__item-icon",children:e.icon}),u("div",{className:"db-dropdown__item-content",children:[n("span",{className:"db-dropdown__item-label",children:e.label}),e.description&&n("span",{className:"db-dropdown__item-description",children:e.description})]})]}),e.divider&&n("div",{className:"db-dropdown__divider"})]},e.id))})})}),document.body):null;return u("div",{ref:_e,className:W("db-dropdown__trigger",{"db-dropdown__trigger--open":c,"db-dropdown__trigger--disabled":h}),...ke,children:[n("div",{ref:D,tabIndex:h?-1:0,role:"button","aria-haspopup":"menu","aria-expanded":c,"aria-disabled":h,onKeyDown:F,...ze,children:s}),Ve]})});l.displayName="Dropdown";try{l.displayName="Dropdown",l.__docgenInfo={description:"",displayName:"Dropdown",props:{children:{defaultValue:null,description:"Trigger element",name:"children",required:!0,type:{name:"ReactNode"}},items:{defaultValue:{value:"[]"},description:"Array of dropdown items",name:"items",required:!1,type:{name:"DropdownItem[]"}},content:{defaultValue:null,description:"Custom dropdown content",name:"content",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"Whether dropdown is open (controlled)",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Open state change handler",name:"onOpenChange",required:!1,type:{name:"((_open: boolean) => void)"}},onSelect:{defaultValue:null,description:"Item selection handler",name:"onSelect",required:!1,type:{name:"((_item: DropdownItem) => void)"}},placement:{defaultValue:{value:"bottom-start"},description:"Dropdown placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'}]}},trigger:{defaultValue:{value:"click"},description:"Dropdown trigger",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"manual"'}]}},closeOnSelect:{defaultValue:{value:"true"},description:"Whether to close on item selection",name:"closeOnSelect",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"auto"},description:"Custom dropdown width",name:"width",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:{value:"300"},description:"Max height before scrolling",name:"maxHeight",required:!1,type:{name:"string | number"}},disabled:{defaultValue:{value:"false"},description:"Disable dropdown",name:"disabled",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"4"},description:"Offset from trigger",name:"offset",required:!1,type:{name:"number"}}}}}catch{}const We={title:"Overlays/Dropdown",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["bottom-start","bottom-end","top-start","top-end","left","right"]},trigger:{control:{type:"select"},options:["click","hover","manual"]},closeOnSelect:{control:"boolean"},disabled:{control:"boolean"},width:{control:"text"},maxHeight:{control:"number"}}},O=()=>n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:n("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),De=()=>u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[n("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),n("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"})]}),xe=()=>u("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[n("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"}),n("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),p=[{id:"1",label:"Profile",icon:n(O,{}),onClick:s=>console.log("Clicked:",s.label)},{id:"2",label:"Settings",icon:n(De,{}),onClick:s=>console.log("Clicked:",s.label)},{id:"3",label:"Logout",icon:n(xe,{}),variant:"danger",onClick:s=>console.log("Clicked:",s.label)}],S={args:{items:p,children:n(o,{children:"Click me"})}},L={render:()=>u("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",padding:"100px"},children:[n(l,{items:p,placement:"top-start",children:n(o,{children:"Top Start"})}),n(l,{items:p,placement:"top-end",children:n(o,{children:"Top End"})}),n("div",{})," ",n(l,{items:p,placement:"left",children:n(o,{children:"Left"})}),n("div",{})," ",n(l,{items:p,placement:"right",children:n(o,{children:"Right"})}),n(l,{items:p,placement:"bottom-start",children:n(o,{children:"Bottom Start"})}),n(l,{items:p,placement:"bottom-end",children:n(o,{children:"Bottom End"})}),n("div",{})," "]})},E={render:()=>u("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[n(l,{items:p,trigger:"click",children:n(o,{children:"Click Trigger"})}),n(l,{items:p,trigger:"hover",children:n(o,{children:"Hover Trigger"})})]})},M={args:{items:[{id:"1",label:"Profile",description:"View and edit your profile",icon:n(O,{})},{id:"2",label:"Settings",description:"Configure your preferences",icon:n(De,{})},{id:"divider1",label:"",divider:!0},{id:"3",label:"Logout",description:"Sign out of your account",icon:n(xe,{}),variant:"danger"}],children:n(o,{children:"User Menu"})}},z={args:{items:[{id:"1",label:"Default Item"},{id:"2",label:"Success Item",variant:"success"},{id:"3",label:"Danger Item",variant:"danger"},{id:"4",label:"Disabled Item",disabled:!0}],children:n(o,{children:"Item Variants"})}},V={render:()=>{const[s,m]=d.useState(!1);return u("div",{style:{padding:"40px"},children:[n("div",{style:{display:"flex",gap:"12px",marginBottom:"20px"},children:u(o,{onClick:()=>m(!s),children:[s?"Close":"Open"," Dropdown"]})}),n(l,{items:p,trigger:"manual",open:s,onOpenChange:m,children:n(o,{children:"Manually Controlled"})})]})}},R={args:{content:u("div",{style:{padding:"16px",minWidth:"200px"},children:[n("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:"Custom Content"}),n("p",{style:{margin:"0 0 12px 0",fontSize:"12px",color:"#6B7280"},children:"You can put any custom content here"}),n(o,{size:"small",style:{width:"100%"},children:"Action Button"})]}),children:n(o,{children:"Custom Content"})}},N={args:{items:Array.from({length:20},(s,m)=>({id:`item-${m}`,label:`Menu Item ${m+1}`,icon:m%3===0?n(O,{}):void 0})),maxHeight:200,children:n(o,{children:"Long List"})}},T={args:{items:p,disabled:!0,children:n(o,{disabled:!0,children:"Disabled Dropdown"})}};var Y,G,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    children: <Button>Click me</Button>
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,oe,ae;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,se,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(se=z.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,ce,pe;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: '40px'
    }}>
        <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px'
      }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} Dropdown
          </Button>
        </div>
        
        <Dropdown items={basicItems} trigger="manual" open={open} onOpenChange={setOpen}>
          <Button>Manually Controlled</Button>
        </Dropdown>
      </div>;
  }
}`,...(pe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,ge;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,fe,be;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var we,ve,ye;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    disabled: true,
    children: <Button disabled>Disabled Dropdown</Button>
  }
}`,...(ye=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const Oe=["Default","Placements","Triggers","WithDescriptions","ItemVariants","ManualControl","CustomContent","LongList","DisabledDropdown"];export{R as CustomContent,S as Default,T as DisabledDropdown,z as ItemVariants,N as LongList,V as ManualControl,L as Placements,E as Triggers,M as WithDescriptions,Oe as __namedExportsOrder,We as default};
