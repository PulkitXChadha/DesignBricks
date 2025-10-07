import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-Dz3UJJSw.js";import{c as f}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const r=n.forwardRef(({tabs:e,activeTab:t,onChange:i,variant:d="default",size:b="medium",fullWidth:c=!1,className:o,...Y},$)=>{var y;const[G,J]=n.useState(t||((y=e[0])==null?void 0:y.id)),j=t!==void 0?t:G,K=(l,X)=>{X||(t===void 0&&J(l),i==null||i(l))};return a.jsx("div",{ref:$,className:f("db-tabs",`db-tabs--${d}`,`db-tabs--${b}`,{"db-tabs--full-width":c},o),role:"tablist",...Y,children:e.map(l=>a.jsxs("button",{className:f("db-tabs__tab",{"db-tabs__tab--active":j===l.id,"db-tabs__tab--disabled":l.disabled}),role:"tab","aria-selected":j===l.id,"aria-disabled":l.disabled,onClick:()=>K(l.id,l.disabled),disabled:l.disabled,children:[l.icon&&a.jsx("span",{className:"db-tabs__icon",children:l.icon}),a.jsx("span",{className:"db-tabs__label",children:l.label}),l.badge!==void 0&&a.jsx("span",{className:"db-tabs__badge",children:l.badge})]},l.id))})});r.displayName="Tabs";const s=n.forwardRef(({tabId:e,activeTab:t,children:i,className:d,...b},c)=>t!==e?null:a.jsx("div",{ref:c,role:"tabpanel",className:f("db-tab-panel",d),...b,children:i}));s.displayName="TabPanel";r.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:"Array of tabs"},activeTab:{required:!1,tsType:{name:"string"},description:"Currently active tab"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"_tabId"}],return:{name:"void"}}},description:"Tab change handler"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pills' | 'underlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'underlined'"}]},description:"Tab variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width tabs",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};s.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{tabId:{required:!0,tsType:{name:"string"},description:"Tab ID this panel belongs to"},activeTab:{required:!0,tsType:{name:"string"},description:"Currently active tab"}},composes:["HTMLAttributes"]};const sa={title:"Navigation/Tabs",component:r,parameters:{docs:{description:{component:"Tabs organize content into multiple sections and allow users to navigate between them."}}},tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Array of tab configurations"},activeTab:{control:"text",description:"Currently active tab ID"},variant:{control:"select",options:["default","pills","underlined"],description:"Visual variant",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Tab size",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Full width tabs",table:{defaultValue:{summary:!1}}},onChange:{action:"changed",description:"Tab change handler"}},args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],variant:"default",size:"medium"}},h={render:e=>{const[t,i]=n.useState("tab1");return a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,activeTab:t,onChange:i}),a.jsx(s,{tabId:"tab1",activeTab:t,children:a.jsx("p",{children:"Content for Tab 1"})}),a.jsx(s,{tabId:"tab2",activeTab:t,children:a.jsx("p",{children:"Content for Tab 2"})}),a.jsx(s,{tabId:"tab3",activeTab:t,children:a.jsx("p",{children:"Content for Tab 3"})})]})}},p={render:()=>{const[e,t]=n.useState("tab1"),[i,d]=n.useState("tab1"),[b,c]=n.useState("tab1"),o=[{id:"tab1",label:"Overview"},{id:"tab2",label:"Details"},{id:"tab3",label:"Settings"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Default"}),a.jsx(r,{tabs:o,variant:"default",activeTab:e,onChange:t})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Pills"}),a.jsx(r,{tabs:o,variant:"pills",activeTab:i,onChange:d})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Underlined"}),a.jsx(r,{tabs:o,variant:"underlined",activeTab:b,onChange:c})]})]})}},u={render:()=>{const e=[{id:"tab1",label:"Small"},{id:"tab2",label:"Tab"},{id:"tab3",label:"Size"}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(r,{tabs:e,size:"small"}),a.jsx(r,{tabs:e,size:"medium"}),a.jsx(r,{tabs:e,size:"large"})]})}},v={render:()=>{const[e,t]=n.useState("dashboard"),i=[{id:"dashboard",label:"Dashboard",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M8 1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h4zm5 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1zM2 11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z"})})},{id:"analytics",label:"Analytics",icon:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M11 2a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zM7 4a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1z"})})},{id:"settings",label:"Settings",icon:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[a.jsx("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),a.jsx("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"})]})}];return a.jsxs(a.Fragment,{children:[a.jsx(r,{tabs:i,activeTab:e,onChange:t}),a.jsx(s,{tabId:"dashboard",activeTab:e,children:a.jsx("p",{children:"Dashboard content goes here"})}),a.jsx(s,{tabId:"analytics",activeTab:e,children:a.jsx("p",{children:"Analytics content goes here"})}),a.jsx(s,{tabId:"settings",activeTab:e,children:a.jsx("p",{children:"Settings content goes here"})})]})}},T={render:()=>{const[e,t]=n.useState("messages"),i=[{id:"messages",label:"Messages",badge:5},{id:"notifications",label:"Notifications",badge:12},{id:"updates",label:"Updates",badge:"99+"},{id:"archived",label:"Archived"}];return a.jsxs(a.Fragment,{children:[a.jsx(r,{tabs:i,activeTab:e,onChange:t}),a.jsx(s,{tabId:"messages",activeTab:e,children:a.jsx("p",{children:"You have 5 new messages"})}),a.jsx(s,{tabId:"notifications",activeTab:e,children:a.jsx("p",{children:"12 new notifications"})}),a.jsx(s,{tabId:"updates",activeTab:e,children:a.jsx("p",{children:"More than 99 updates available"})}),a.jsx(s,{tabId:"archived",activeTab:e,children:a.jsx("p",{children:"Archived items"})})]})}},m={render:()=>{const[e,t]=n.useState("tab1"),i=[{id:"tab1",label:"Active Tab"},{id:"tab2",label:"Disabled Tab",disabled:!0},{id:"tab3",label:"Another Tab"}];return a.jsxs(a.Fragment,{children:[a.jsx(r,{tabs:i,activeTab:e,onChange:t}),a.jsx(s,{tabId:"tab1",activeTab:e,children:a.jsx("p",{children:"This tab is active and clickable"})}),a.jsx(s,{tabId:"tab2",activeTab:e,children:a.jsx("p",{children:"This content won't be shown as the tab is disabled"})}),a.jsx(s,{tabId:"tab3",activeTab:e,children:a.jsx("p",{children:"This tab is also clickable"})})]})}},g={render:()=>{const[e,t]=n.useState("tab1"),i=[{id:"tab1",label:"First"},{id:"tab2",label:"Second"},{id:"tab3",label:"Third"},{id:"tab4",label:"Fourth"}];return a.jsxs("div",{style:{width:"600px"},children:[a.jsx(r,{tabs:i,activeTab:e,onChange:t,fullWidth:!0}),a.jsx(s,{tabId:"tab1",activeTab:e,children:a.jsx("p",{children:"Full width tabs stretch to fill the container"})}),a.jsx(s,{tabId:"tab2",activeTab:e,children:a.jsx("p",{children:"Each tab gets equal width"})}),a.jsx(s,{tabId:"tab3",activeTab:e,children:a.jsx("p",{children:"Useful for responsive layouts"})}),a.jsx(s,{tabId:"tab4",activeTab:e,children:a.jsx("p",{children:"Works with any number of tabs"})})]})}},x={render:()=>{const[e,t]=n.useState("sql"),i=[{id:"sql",label:"SQL Editor"},{id:"queries",label:"Queries",badge:3},{id:"dashboards",label:"Dashboards"},{id:"alerts",label:"Alerts",badge:1}];return a.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:[a.jsx("h3",{style:{margin:"0 0 16px 0"},children:"Data Analysis"}),a.jsx(r,{tabs:i,activeTab:e,onChange:t,variant:"default"}),a.jsxs("div",{style:{backgroundColor:"white",padding:"20px",marginTop:"16px",borderRadius:"4px"},children:[a.jsxs(s,{tabId:"sql",activeTab:e,children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"SQL Editor"}),a.jsx("p",{children:"Write and execute SQL queries against your data warehouse."}),a.jsxs("div",{style:{backgroundColor:"#f0f0f0",padding:"12px",borderRadius:"4px",fontFamily:"monospace",fontSize:"12px"},children:["SELECT * FROM users",a.jsx("br",{}),"WHERE created_at > '2024-01-01'",a.jsx("br",{}),"ORDER BY created_at DESC",a.jsx("br",{}),"LIMIT 100;"]})]}),a.jsxs(s,{tabId:"queries",activeTab:e,children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Recent Queries"}),a.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[a.jsx("li",{children:"User activity analysis"}),a.jsx("li",{children:"Revenue by month"}),a.jsx("li",{children:"Product performance metrics"})]})]}),a.jsxs(s,{tabId:"dashboards",activeTab:e,children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Dashboards"}),a.jsx("p",{children:"Create and manage visual dashboards for your data."})]}),a.jsxs(s,{tabId:"alerts",activeTab:e,children:[a.jsx("h4",{style:{margin:"0 0 12px 0"},children:"Active Alerts"}),a.jsx("p",{children:"1 alert triggered: Database connection timeout"})]})]})]})}};var I,S,A;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(S=h.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var P,w,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var z,D,M;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var _,E,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,V,F;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(V=T.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var W,k,L;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(k=m.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,B,Q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Q=(B=g.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var O,U,H;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(U=x.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const ia=["Playground","Variants","Sizes","WithIcons","WithBadges","DisabledTab","FullWidth","RealWorldExample"];export{m as DisabledTab,g as FullWidth,h as Playground,x as RealWorldExample,u as Sizes,p as Variants,T as WithBadges,v as WithIcons,ia as __namedExportsOrder,sa as default};
