import{j as e,a as r,F as N}from"./jsx-runtime-D2eXtamC.js";import{r as se}from"./index-SE77F2UD.js";import{c as L}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const ne=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L7.43934 8.5L4.96967 10.9697C4.67678 11.2626 4.67678 11.7374 4.96967 12.0303C5.26256 12.3232 5.73744 12.3232 6.03033 12.0303L9.03033 9.03033C9.32322 8.73744 9.32322 8.26256 9.03033 7.96967L6.03033 4.96967Z",fill:"currentColor"})}),a=se.forwardRef(({items:n,separator:t=e(ne,{}),size:Y="medium",maxItems:_,itemsBeforeCollapse:I=1,itemsAfterCollapse:y=1,className:ee,...le},re)=>{const B=_&&n.length>_;let S=n,w=!1;if(B){const l=n.slice(0,I),s=n.slice(-y);S=[...l,...s],w=!0}const x=(l,s,i)=>{const c=r(N,{children:[l.icon&&e("span",{className:"db-breadcrumbs__icon",children:l.icon}),e("span",{className:"db-breadcrumbs__text",children:l.label})]}),o=L("db-breadcrumbs__item",{"db-breadcrumbs__item--current":i,"db-breadcrumbs__item--disabled":l.disabled,"db-breadcrumbs__item--clickable":(l.href||l.onClick)&&!l.disabled});return i||l.disabled?e("span",{className:o,children:c},l.id):l.href?e("a",{href:l.href,className:o,onClick:l.onClick,children:c},l.id):l.onClick?e("button",{type:"button",className:o,onClick:l.onClick,children:c},l.id):e("span",{className:o,children:c},l.id)},ae=()=>e("span",{className:"db-breadcrumbs__ellipsis",children:e("span",{className:"db-breadcrumbs__text",children:"…"})},"ellipsis");return e("nav",{ref:re,"aria-label":"Breadcrumb",className:L("db-breadcrumbs",`db-breadcrumbs--${Y}`,ee),...le,children:e("ol",{className:"db-breadcrumbs__list",children:B?r(N,{children:[n.slice(0,I).map((l,s)=>r("li",{className:"db-breadcrumbs__list-item",children:[x(l,s,!1),e("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:t})]},l.id)),w&&r("li",{className:"db-breadcrumbs__list-item",children:[ae(),e("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:t})]}),n.slice(-y).map((l,s,i)=>r("li",{className:"db-breadcrumbs__list-item",children:[x(l,s,s===i.length-1),s!==i.length-1&&e("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:t})]},l.id))]}):S.map((l,s,i)=>r("li",{className:"db-breadcrumbs__list-item",children:[x(l,s,s===i.length-1),s!==i.length-1&&e("span",{className:"db-breadcrumbs__separator","aria-hidden":"true",children:t})]},l.id))})})});a.displayName="Breadcrumbs";try{a.displayName="Breadcrumbs",a.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},separator:{defaultValue:{value:"<ChevronRightIcon />"},description:"Custom separator between items",name:"separator",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"Size of the breadcrumbs",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},maxItems:{defaultValue:null,description:"Maximum number of items to display before collapsing",name:"maxItems",required:!1,type:{name:"number"}},itemsBeforeCollapse:{defaultValue:{value:"1"},description:"How to handle overflow when maxItems is exceeded",name:"itemsBeforeCollapse",required:!1,type:{name:"number"}},itemsAfterCollapse:{defaultValue:{value:"1"},description:"How many items to show after collapse",name:"itemsAfterCollapse",required:!1,type:{name:"number"}}}}}catch{}const me={title:"Navigation/Breadcrumbs",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},maxItems:{control:"number"},itemsBeforeCollapse:{control:"number"},itemsAfterCollapse:{control:"number"}}},C=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"})}),ie=()=>r("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e("path",{d:"M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h4.672a2 2 0 0 1 2 2l-.04.87a1.99 1.99 0 0 1-.342 1.311l-1.446 2.169a1 1 0 0 1-.831.448H1.5a1 1 0 0 1-.946-1.316l1.394-4.182a1 1 0 0 1 .946-.684H15v-.5a.5.5 0 0 0-.5-.5H9.828a.5.5 0 0 1-.354-.146L8.646 2.5A.5.5 0 0 0 8.293 2.354L7.465 1.5H2.5a.5.5 0 0 0-.5.5v.5h13z"}),e("path",{d:"m1.719 4.058.686 2.057h11.19l-.686-2.057H1.72z"})]}),d=[{id:"1",label:"Home",icon:e(C,{}),href:"/"},{id:"2",label:"Products",href:"/products"},{id:"3",label:"Electronics",href:"/products/electronics"},{id:"4",label:"Laptops"}],m={args:{items:d}},u={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"500px"},children:[r("div",{children:[e("h4",{children:"Small"}),e(a,{items:d,size:"small"})]}),r("div",{children:[e("h4",{children:"Medium (Default)"}),e(a,{items:d,size:"medium"})]}),r("div",{children:[e("h4",{children:"Large"}),e(a,{items:d,size:"large"})]})]})},p={render:()=>e(a,{items:[{id:"1",label:"Home",icon:e(C,{}),onClick:()=>alert("Home clicked")},{id:"2",label:"Workspace",icon:e(ie,{}),onClick:()=>alert("Workspace clicked")},{id:"3",label:"Current Page"}]})},b={render:()=>{const n=[{id:"1",label:"Root",icon:e(C,{}),href:"/"},{id:"2",label:"Level 1",href:"/level1"},{id:"3",label:"Level 2",href:"/level1/level2"},{id:"4",label:"Level 3",href:"/level1/level2/level3"},{id:"5",label:"Level 4",href:"/level1/level2/level3/level4"},{id:"6",label:"Level 5",href:"/level1/level2/level3/level4/level5"},{id:"7",label:"Current Page"}];return r("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"600px"},children:[r("div",{children:[e("h4",{children:"No Collapse (Full breadcrumbs)"}),e(a,{items:n})]}),r("div",{children:[e("h4",{children:"Collapsed (maxItems: 4)"}),e(a,{items:n,maxItems:4,itemsBeforeCollapse:1,itemsAfterCollapse:2})]}),r("div",{children:[e("h4",{children:"Collapsed (maxItems: 3, equal distribution)"}),e(a,{items:n,maxItems:3,itemsBeforeCollapse:1,itemsAfterCollapse:1})]})]})}},h={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"500px"},children:[r("div",{children:[e("h4",{children:"Default Separator (Chevron)"}),e(a,{items:d})]}),r("div",{children:[e("h4",{children:"Slash Separator"}),e(a,{items:d,separator:"/"})]}),r("div",{children:[e("h4",{children:"Bullet Separator"}),e(a,{items:d,separator:"•"})]}),r("div",{children:[e("h4",{children:"Arrow Separator"}),e(a,{items:d,separator:"→"})]})]})},v={args:{items:[{id:"1",label:"Home",icon:e(C,{}),href:"/"},{id:"2",label:"Restricted Area",disabled:!0},{id:"3",label:"Accessible Page",href:"/page"},{id:"4",label:"Current Page"}]}},f={args:{items:[{id:"1",label:"Dashboard"},{id:"2",label:"Analytics"},{id:"3",label:"Reports"},{id:"4",label:"Monthly Sales"}]}},g={args:{items:[{id:"1",label:"Current Page"}]}};var k,H,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...(A=(H=m.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var D,z,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var P,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,q,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(q=b.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var E,j,O;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(j=h.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var T,Z,$;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Current Page'
    }]
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ue=["Default","Sizes","WithClickHandlers","WithCollapse","CustomSeparator","WithDisabledItems","OnlyText","SingleItem"];export{h as CustomSeparator,m as Default,f as OnlyText,g as SingleItem,u as Sizes,p as WithClickHandlers,b as WithCollapse,v as WithDisabledItems,ue as __namedExportsOrder,me as default};
