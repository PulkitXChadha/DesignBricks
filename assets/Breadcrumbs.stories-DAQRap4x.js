import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as le}from"./index-CWnxZbJP.js";import{c as B}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const re=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L7.43934 8.5L4.96967 10.9697C4.67678 11.2626 4.67678 11.7374 4.96967 12.0303C5.26256 12.3232 5.73744 12.3232 6.03033 12.0303L9.03033 9.03033C9.32322 8.73744 9.32322 8.26256 9.03033 7.96967L6.03033 4.96967Z",fill:"currentColor"})}),l=le.forwardRef(({items:a,separator:d=e.jsx(re,{}),size:U="medium",maxItems:j,itemsBeforeCollapse:C=1,itemsAfterCollapse:I=1,className:X,...Y},ee)=>{const _=j&&a.length>j;let y=a,S=!1;if(_){const s=a.slice(0,C),r=a.slice(-I);y=[...s,...r],S=!0}const g=(s,r,i)=>{const t=e.jsxs(e.Fragment,{children:[s.icon&&e.jsx("span",{className:"db-breadcrumbs__icon",children:s.icon}),e.jsx("span",{className:"db-breadcrumbs__text",children:s.label})]}),c=B("db-breadcrumbs__item",{"db-breadcrumbs__item--current":i,"db-breadcrumbs__item--disabled":s.disabled,"db-breadcrumbs__item--clickable":(s.href||s.onClick)&&!s.disabled});return i||s.disabled?e.jsx("span",{className:c,children:t},s.id):s.href?e.jsx("a",{href:s.href,className:c,onClick:s.onClick,children:t},s.id):s.onClick?e.jsx("button",{type:"button",className:c,onClick:s.onClick,children:t},s.id):e.jsx("span",{className:c,children:t},s.id)},se=()=>e.jsx("span",{className:"db-breadcrumbs__ellipsis",children:e.jsx("span",{className:"db-breadcrumbs__text",children:"…"})},"ellipsis");return e.jsx("nav",{ref:ee,"aria-label":"Breadcrumb",className:B("db-breadcrumbs",`db-breadcrumbs--${U}`,X),...Y,children:e.jsx("ol",{className:"db-breadcrumbs__list",children:_?e.jsxs(e.Fragment,{children:[a.slice(0,C).map((s,r)=>e.jsxs("li",{className:"db-breadcrumbs__list-item",children:[g(s,r,!1),e.jsx("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:d})]},s.id)),S&&e.jsxs("li",{className:"db-breadcrumbs__list-item",children:[se(),e.jsx("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:d})]}),a.slice(-I).map((s,r,i)=>e.jsxs("li",{className:"db-breadcrumbs__list-item",children:[g(s,r,r===i.length-1),r!==i.length-1&&e.jsx("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:d})]},s.id))]}):y.map((s,r,i)=>e.jsxs("li",{className:"db-breadcrumbs__list-item",children:[g(s,r,r===i.length-1),r!==i.length-1&&e.jsx("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:d})]},s.id))})})});l.displayName="Breadcrumbs";l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items"},separator:{required:!1,tsType:{name:"ReactNode"},description:"Custom separator between items",defaultValue:{value:"<ChevronRightIcon />",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the breadcrumbs",defaultValue:{value:"'medium'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum number of items to display before collapsing"},itemsBeforeCollapse:{required:!1,tsType:{name:"number"},description:"How to handle overflow when maxItems is exceeded",defaultValue:{value:"1",computed:!1}},itemsAfterCollapse:{required:!1,tsType:{name:"number"},description:"How many items to show after collapse",defaultValue:{value:"1",computed:!1}}},composes:["Omit"]};const oe={title:"Navigation/Breadcrumbs",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"}}},f=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"})}),ae=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{d:"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h4.672a2 2 0 0 1 2 2l-.04.87a1.99 1.99 0 0 1-.342 1.311l-1.446 2.169a1 1 0 0 1-.831.448H1.5a1 1 0 0 1-.946-1.316l1.394-4.182a1 1 0 0 1 .946-.684H15v-.5a.5.5 0 0 0-.5-.5H9.828a.5.5 0 0 1-.354-.146L8.646 2.5A.5.5 0 0 0 8.293 2.354L7.465 1.5H2.5a.5.5 0 0 0-.5.5v.5h13z"}),e.jsx("path",{d:"m1.719 4.058.686 2.057h11.19l-.686-2.057H1.72z"})]}),n=[{id:"1",label:"Home",icon:e.jsx(f,{}),href:"/"},{id:"2",label:"Products",href:"/products"},{id:"3",label:"Electronics",href:"/products/electronics"},{id:"4",label:"Laptops"}],o={args:{items:n}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(l,{items:n,size:"small"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (Default)"}),e.jsx(l,{items:n,size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsx(l,{items:n,size:"large"})]})]})},p={render:()=>e.jsx(l,{items:[{id:"1",label:"Home",icon:e.jsx(f,{}),onClick:()=>alert("Home clicked")},{id:"2",label:"Workspace",icon:e.jsx(ae,{}),onClick:()=>alert("Workspace clicked")},{id:"3",label:"Current Page"}]})},u={render:()=>{const a=[{id:"1",label:"Root",icon:e.jsx(f,{}),href:"/"},{id:"2",label:"Level 1",href:"/level1"},{id:"3",label:"Level 2",href:"/level1/level2"},{id:"4",label:"Level 3",href:"/level1/level2/level3"},{id:"5",label:"Level 4",href:"/level1/level2/level3/level4"},{id:"6",label:"Level 5",href:"/level1/level2/level3/level4/level5"},{id:"7",label:"Current Page"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"600px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"No Collapse (Full breadcrumbs)"}),e.jsx(l,{items:a})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Collapsed (maxItems: 4)"}),e.jsx(l,{items:a,maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:2})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Collapsed (maxItems: 3, equal distribution)"}),e.jsx(l,{items:a,maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:1})]})]})}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Default Separator (Chevron)"}),e.jsx(l,{items:n})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Slash Separator"}),e.jsx(l,{items:n,separator:"/"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Bullet Separator"}),e.jsx(l,{items:n,separator:"•"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Arrow Separator"}),e.jsx(l,{items:n,separator:"→"})]})]})},h={args:{items:[{id:"1",label:"Home",icon:e.jsx(f,{}),href:"/"},{id:"2",label:"Restricted Area",disabled:!0},{id:"3",label:"Accessible Page",href:"/page"},{id:"4",label:"Current Page"}]}},x={args:{items:[{id:"1",label:"Dashboard"},{id:"2",label:"Analytics"},{id:"3",label:"Reports"},{id:"4",label:"Monthly Sales"}]}},v={args:{items:[{id:"1",label:"Current Page"}]}};var w,N,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(L=(N=o.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var k,H,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '500px'
  }}>
      <div>
        <h4>Small</h4>
        <Breadcrumbs items={basicItems} size="small" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <Breadcrumbs items={basicItems} size="medium" />
      </div>
      <div>
        <h4>Large</h4>
        <Breadcrumbs items={basicItems} size="large" />
      </div>
    </div>
}`,...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,z,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Breadcrumbs items={[{
    id: '1',
    label: 'Home',
    icon: <HomeIcon />,
    onClick: () => alert('Home clicked')
  }, {
    id: '2',
    label: 'Workspace',
    icon: <FolderIcon />,
    onClick: () => alert('Workspace clicked')
  }, {
    id: '3',
    label: 'Current Page'
  }]} />
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var P,W,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const longItems = [{
      id: '1',
      label: 'Root',
      icon: <HomeIcon />,
      href: '/'
    }, {
      id: '2',
      label: 'Level 1',
      href: '/level1'
    }, {
      id: '3',
      label: 'Level 2',
      href: '/level1/level2'
    }, {
      id: '4',
      label: 'Level 3',
      href: '/level1/level2/level3'
    }, {
      id: '5',
      label: 'Level 4',
      href: '/level1/level2/level3/level4'
    }, {
      id: '6',
      label: 'Level 5',
      href: '/level1/level2/level3/level4/level5'
    }, {
      id: '7',
      label: 'Current Page'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '600px'
    }}>
        <div>
          <h4>No Collapse (Full breadcrumbs)</h4>
          <Breadcrumbs items={longItems} />
        </div>
        <div>
          <h4>Collapsed (maxItems: 4)</h4>
          <Breadcrumbs items={longItems} maxItems={4} itemsBeforeCollapse={1} itemsAfterCollapse={2} />
        </div>
        <div>
          <h4>Collapsed (maxItems: 3, equal distribution)</h4>
          <Breadcrumbs items={longItems} maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1} />
        </div>
      </div>;
  }
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var T,V,q;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '500px'
  }}>
      <div>
        <h4>Default Separator (Chevron)</h4>
        <Breadcrumbs items={basicItems} />
      </div>
      <div>
        <h4>Slash Separator</h4>
        <Breadcrumbs items={basicItems} separator="/" />
      </div>
      <div>
        <h4>Bullet Separator</h4>
        <Breadcrumbs items={basicItems} separator="•" />
      </div>
      <div>
        <h4>Arrow Separator</h4>
        <Breadcrumbs items={basicItems} separator="→" />
      </div>
    </div>
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,F,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Home',
      icon: <HomeIcon />,
      href: '/'
    }, {
      id: '2',
      label: 'Restricted Area',
      disabled: true
    }, {
      id: '3',
      label: 'Accessible Page',
      href: '/page'
    }, {
      id: '4',
      label: 'Current Page'
    }]
  }
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var Z,$,G;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Dashboard'
    }, {
      id: '2',
      label: 'Analytics'
    }, {
      id: '3',
      label: 'Reports'
    }, {
      id: '4',
      label: 'Monthly Sales'
    }]
  }
}`,...(G=($=x.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Current Page'
    }]
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const me=["Default","Sizes","WithClickHandlers","WithCollapse","CustomSeparator","WithDisabledItems","OnlyText","SingleItem"];export{b as CustomSeparator,o as Default,x as OnlyText,v as SingleItem,m as Sizes,p as WithClickHandlers,u as WithCollapse,h as WithDisabledItems,me as __namedExportsOrder,oe as default};
