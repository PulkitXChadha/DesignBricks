import{j as a,a as i,F as x}from"./jsx-runtime-D2eXtamC.js";import{r as d}from"./index-SE77F2UD.js";import{c as I}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const l=d.forwardRef(({tabs:e,activeTab:n,onChange:r,variant:b="default",size:c="medium",fullWidth:o=!1,className:h,...G},J)=>{var P;const[K,X]=d.useState(n||((P=e[0])==null?void 0:P.id)),S=n!==void 0?n:K,Z=(s,aa)=>{aa||(n===void 0&&X(s),r==null||r(s))};return a("div",{ref:J,className:I("db-tabs",`db-tabs--${b}`,`db-tabs--${c}`,{"db-tabs--full-width":o},h),role:"tablist",...G,children:e.map(s=>i("button",{className:I("db-tabs__tab",{"db-tabs__tab--active":S===s.id,"db-tabs__tab--disabled":s.disabled}),role:"tab","aria-selected":S===s.id,"aria-disabled":s.disabled,onClick:()=>Z(s.id,s.disabled),disabled:s.disabled,children:[s.icon&&a("span",{className:"db-tabs__icon",children:s.icon}),a("span",{className:"db-tabs__label",children:s.label}),s.badge!==void 0&&a("span",{className:"db-tabs__badge",children:s.badge})]},s.id))})});l.displayName="Tabs";const t=d.forwardRef(({tabId:e,activeTab:n,children:r,className:b,...c},o)=>n!==e?null:a("div",{ref:o,role:"tabpanel",className:I("db-tab-panel",b),...c,children:r}));t.displayName="TabPanel";try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{tabs:{defaultValue:null,description:"Array of tabs",name:"tabs",required:!0,type:{name:"Tab[]"}},activeTab:{defaultValue:null,description:"Currently active tab",name:"activeTab",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Tab change handler",name:"onChange",required:!1,type:{name:"((_tabId: string) => void)"}},variant:{defaultValue:{value:"default"},description:"Tab variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"pills"'},{value:'"underlined"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width tabs",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TabPanel",t.__docgenInfo={description:"",displayName:"TabPanel",props:{tabId:{defaultValue:null,description:"Tab ID this panel belongs to",name:"tabId",required:!0,type:{name:"string"}},activeTab:{defaultValue:null,description:"Currently active tab",name:"activeTab",required:!0,type:{name:"string"}}}}}catch{}const sa={title:"Navigation/Tabs",component:l,parameters:{docs:{description:{component:"Tabs organize content into multiple sections and allow users to navigate between them."}}},tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Array of tab configurations"},activeTab:{control:"text",description:"Currently active tab ID"},variant:{control:"select",options:["default","pills","underlined"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Tab size",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Full width tabs",table:{defaultValue:{summary:!1}}},onChange:{action:"changed",description:"Tab change handler"}},args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],variant:"default",size:"medium"}},p={render:e=>{const[n,r]=d.useState("tab1");return i(x,{children:[a(l,{...e,activeTab:n,onChange:r}),a(t,{tabId:"tab1",activeTab:n,children:a("p",{children:"Content for Tab 1"})}),a(t,{tabId:"tab2",activeTab:n,children:a("p",{children:"Content for Tab 2"})}),a(t,{tabId:"tab3",activeTab:n,children:a("p",{children:"Content for Tab 3"})})]})}},u={render:()=>{const[e,n]=d.useState("tab1"),[r,b]=d.useState("tab1"),[c,o]=d.useState("tab1"),h=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Details"},{id:"tab3",label:"Settings"}];return i("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[i("div",{children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Default"}),a(l,{tabs:h,variant:"default",activeTab:e,onChange:n})]}),i("div",{children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Pills"}),a(l,{tabs:h,variant:"pills",activeTab:r,onChange:b})]}),i("div",{children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Underlined"}),a(l,{tabs:h,variant:"underlined",activeTab:c,onChange:o})]})]})}},v={render:()=>{const e=[{id:"tab1",label:"Small"},{id:"tab2",label:"Tab"},{id:"tab3",label:"Size"}];return i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a(l,{tabs:e,size:"small"}),a(l,{tabs:e,size:"medium"}),a(l,{tabs:e,size:"large"})]})}},T={render:()=>{const[e,n]=d.useState("dashboard");return i(x,{children:[a(l,{tabs:[{id:"dashboard",label:"Dashboard",icon:a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a("path",{d:"M8 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4zm5 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1zM2 11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"})})},{id:"analytics",label:"Analytics",icon:a("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a("path",{d:"M11 2a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM7 4a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z"})})},{id:"settings",label:"Settings",icon:i("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[a("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),a("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"})]})}],activeTab:e,onChange:n}),a(t,{tabId:"dashboard",activeTab:e,children:a("p",{children:"Dashboard content goes here"})}),a(t,{tabId:"analytics",activeTab:e,children:a("p",{children:"Analytics content goes here"})}),a(t,{tabId:"settings",activeTab:e,children:a("p",{children:"Settings content goes here"})})]})}},m={render:()=>{const[e,n]=d.useState("messages");return i(x,{children:[a(l,{tabs:[{id:"messages",label:"Messages",badge:5},{id:"notifications",label:"Notifications",badge:12},{id:"updates",label:"Updates",badge:"99+"},{id:"archived",label:"Archived"}],activeTab:e,onChange:n}),a(t,{tabId:"messages",activeTab:e,children:a("p",{children:"You have 5 new messages"})}),a(t,{tabId:"notifications",activeTab:e,children:a("p",{children:"12 new notifications"})}),a(t,{tabId:"updates",activeTab:e,children:a("p",{children:"More than 99 updates available"})}),a(t,{tabId:"archived",activeTab:e,children:a("p",{children:"Archived items"})})]})}},g={render:()=>{const[e,n]=d.useState("tab1");return i(x,{children:[a(l,{tabs:[{id:"tab1",label:"Active Tab"},{id:"tab2",label:"Disabled Tab",disabled:!0},{id:"tab3",label:"Another Tab"}],activeTab:e,onChange:n}),a(t,{tabId:"tab1",activeTab:e,children:a("p",{children:"This tab is active and clickable"})}),a(t,{tabId:"tab2",activeTab:e,children:a("p",{children:"This content won't be shown as the tab is disabled"})}),a(t,{tabId:"tab3",activeTab:e,children:a("p",{children:"This tab is also clickable"})})]})}},f={render:()=>{const[e,n]=d.useState("tab1");return i("div",{style:{width:"600px"},children:[a(l,{tabs:[{id:"tab1",label:"First"},{id:"tab2",label:"Second"},{id:"tab3",label:"Third"},{id:"tab4",label:"Fourth"}],activeTab:e,onChange:n,fullWidth:!0}),a(t,{tabId:"tab1",activeTab:e,children:a("p",{children:"Full width tabs stretch to fill the container"})}),a(t,{tabId:"tab2",activeTab:e,children:a("p",{children:"Each tab gets equal width"})}),a(t,{tabId:"tab3",activeTab:e,children:a("p",{children:"Useful for responsive layouts"})}),a(t,{tabId:"tab4",activeTab:e,children:a("p",{children:"Works with any number of tabs"})})]})}},y={render:()=>{const[e,n]=d.useState("sql");return i("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:[a("h3",{style:{margin:"0 0 16px 0"},children:"Data Analysis"}),a(l,{tabs:[{id:"sql",label:"SQL Editor"},{id:"queries",label:"Queries",badge:3},{id:"dashboards",label:"Dashboards"},{id:"alerts",label:"Alerts",badge:1}],activeTab:e,onChange:n,variant:"default"}),i("div",{style:{backgroundColor:"white",padding:"20px",marginTop:"16px",borderRadius:"4px"},children:[i(t,{tabId:"sql",activeTab:e,children:[a("h4",{style:{margin:"0 0 12px 0"},children:"SQL Editor"}),a("p",{children:"Write and execute SQL queries against your data warehouse."}),i("div",{style:{backgroundColor:"#f0f0f0",padding:"12px",borderRadius:"4px",fontFamily:"monospace",fontSize:"12px"},children:["SELECT * FROM users",a("br",{}),"WHERE created_at > '2024-01-01'",a("br",{}),"ORDER BY created_at DESC",a("br",{}),"LIMIT 100;"]})]}),i(t,{tabId:"queries",activeTab:e,children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Recent Queries"}),i("ul",{style:{margin:0,paddingLeft:"20px"},children:[a("li",{children:"User activity analysis"}),a("li",{children:"Revenue by month"}),a("li",{children:"Product performance metrics"})]})]}),i(t,{tabId:"dashboards",activeTab:e,children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Dashboards"}),a("p",{children:"Create and manage visual dashboards for your data."})]}),i(t,{tabId:"alerts",activeTab:e,children:[a("h4",{style:{margin:"0 0 12px 0"},children:"Active Alerts"}),a("p",{children:"1 alert triggered: Database connection timeout"})]})]})]})}};var A,C,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = useState('tab1');
    return <>
        <Tabs {...args} activeTab={activeTab} onChange={setActiveTab} />
        <TabPanel tabId="tab1" activeTab={activeTab}>
          <p>Content for Tab 1</p>
        </TabPanel>
        <TabPanel tabId="tab2" activeTab={activeTab}>
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel tabId="tab3" activeTab={activeTab}>
          <p>Content for Tab 3</p>
        </TabPanel>
      </>;
  }
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var z,_,D;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');
    const [activeTab3, setActiveTab3] = useState('tab1');
    const tabs = [{
      id: 'tab1',
      label: 'Overview'
    }, {
      id: 'tab2',
      label: 'Details'
    }, {
      id: 'tab3',
      label: 'Settings'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <h4 style={{
          margin: '0 0 12px 0'
        }}>Default</h4>
          <Tabs tabs={tabs} variant="default" activeTab={activeTab1} onChange={setActiveTab1} />
        </div>
        <div>
          <h4 style={{
          margin: '0 0 12px 0'
        }}>Pills</h4>
          <Tabs tabs={tabs} variant="pills" activeTab={activeTab2} onChange={setActiveTab2} />
        </div>
        <div>
          <h4 style={{
          margin: '0 0 12px 0'
        }}>Underlined</h4>
          <Tabs tabs={tabs} variant="underlined" activeTab={activeTab3} onChange={setActiveTab3} />
        </div>
      </div>;
  }
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var M,V,q;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const tabs = [{
      id: 'tab1',
      label: 'Small'
    }, {
      id: 'tab2',
      label: 'Tab'
    }, {
      id: 'tab3',
      label: 'Size'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Tabs tabs={tabs} size="small" />
        <Tabs tabs={tabs} size="medium" />
        <Tabs tabs={tabs} size="large" />
      </div>;
  }
}`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,R,W;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const tabs = [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4zm5 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1zM2 11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
          </svg>
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM7 4a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z" />
          </svg>
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" />
          </svg>
    }];
    return <>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <TabPanel tabId="dashboard" activeTab={activeTab}>
          <p>Dashboard content goes here</p>
        </TabPanel>
        <TabPanel tabId="analytics" activeTab={activeTab}>
          <p>Analytics content goes here</p>
        </TabPanel>
        <TabPanel tabId="settings" activeTab={activeTab}>
          <p>Settings content goes here</p>
        </TabPanel>
      </>;
  }
}`,...(W=(R=T.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var F,N,k;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('messages');
    const tabs = [{
      id: 'messages',
      label: 'Messages',
      badge: 5
    }, {
      id: 'notifications',
      label: 'Notifications',
      badge: 12
    }, {
      id: 'updates',
      label: 'Updates',
      badge: '99+'
    }, {
      id: 'archived',
      label: 'Archived'
    }];
    return <>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <TabPanel tabId="messages" activeTab={activeTab}>
          <p>You have 5 new messages</p>
        </TabPanel>
        <TabPanel tabId="notifications" activeTab={activeTab}>
          <p>12 new notifications</p>
        </TabPanel>
        <TabPanel tabId="updates" activeTab={activeTab}>
          <p>More than 99 updates available</p>
        </TabPanel>
        <TabPanel tabId="archived" activeTab={activeTab}>
          <p>Archived items</p>
        </TabPanel>
      </>;
  }
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var L,B,Q;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [{
      id: 'tab1',
      label: 'Active Tab'
    }, {
      id: 'tab2',
      label: 'Disabled Tab',
      disabled: true
    }, {
      id: 'tab3',
      label: 'Another Tab'
    }];
    return <>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <TabPanel tabId="tab1" activeTab={activeTab}>
          <p>This tab is active and clickable</p>
        </TabPanel>
        <TabPanel tabId="tab2" activeTab={activeTab}>
          <p>This content won&apos;t be shown as the tab is disabled</p>
        </TabPanel>
        <TabPanel tabId="tab3" activeTab={activeTab}>
          <p>This tab is also clickable</p>
        </TabPanel>
      </>;
  }
}`,...(Q=(B=g.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var U,O,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [{
      id: 'tab1',
      label: 'First'
    }, {
      id: 'tab2',
      label: 'Second'
    }, {
      id: 'tab3',
      label: 'Third'
    }, {
      id: 'tab4',
      label: 'Fourth'
    }];
    return <div style={{
      width: '600px'
    }}>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} fullWidth />
        <TabPanel tabId="tab1" activeTab={activeTab}>
          <p>Full width tabs stretch to fill the container</p>
        </TabPanel>
        <TabPanel tabId="tab2" activeTab={activeTab}>
          <p>Each tab gets equal width</p>
        </TabPanel>
        <TabPanel tabId="tab3" activeTab={activeTab}>
          <p>Useful for responsive layouts</p>
        </TabPanel>
        <TabPanel tabId="tab4" activeTab={activeTab}>
          <p>Works with any number of tabs</p>
        </TabPanel>
      </div>;
  }
}`,...(H=(O=f.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var j,Y,$;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('sql');
    const tabs = [{
      id: 'sql',
      label: 'SQL Editor'
    }, {
      id: 'queries',
      label: 'Queries',
      badge: 3
    }, {
      id: 'dashboards',
      label: 'Dashboards'
    }, {
      id: 'alerts',
      label: 'Alerts',
      badge: 1
    }];
    return <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>Data Analysis</h3>
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} variant="default" />

        <div style={{
        backgroundColor: 'white',
        padding: '20px',
        marginTop: '16px',
        borderRadius: '4px'
      }}>
          <TabPanel tabId="sql" activeTab={activeTab}>
            <h4 style={{
            margin: '0 0 12px 0'
          }}>SQL Editor</h4>
            <p>Write and execute SQL queries against your data warehouse.</p>
            <div style={{
            backgroundColor: '#f0f0f0',
            padding: '12px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '12px'
          }}>
              SELECT * FROM users<br />
              WHERE created_at &gt; &apos;2024-01-01&apos;<br />
              ORDER BY created_at DESC<br />
              LIMIT 100;
            </div>
          </TabPanel>

          <TabPanel tabId="queries" activeTab={activeTab}>
            <h4 style={{
            margin: '0 0 12px 0'
          }}>Recent Queries</h4>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>User activity analysis</li>
              <li>Revenue by month</li>
              <li>Product performance metrics</li>
            </ul>
          </TabPanel>

          <TabPanel tabId="dashboards" activeTab={activeTab}>
            <h4 style={{
            margin: '0 0 12px 0'
          }}>Dashboards</h4>
            <p>Create and manage visual dashboards for your data.</p>
          </TabPanel>

          <TabPanel tabId="alerts" activeTab={activeTab}>
            <h4 style={{
            margin: '0 0 12px 0'
          }}>Active Alerts</h4>
            <p>1 alert triggered: Database connection timeout</p>
          </TabPanel>
        </div>
      </div>;
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const la=["Playground","Variants","Sizes","WithIcons","WithBadges","DisabledTab","FullWidth","RealWorldExample"];export{g as DisabledTab,f as FullWidth,p as Playground,y as RealWorldExample,v as Sizes,u as Variants,m as WithBadges,T as WithIcons,la as __namedExportsOrder,sa as default};
