import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as p}from"./index-CWnxZbJP.js";import{c as de}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const ce=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),pe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})}),r=p.forwardRef(({size:c="medium",fullWidth:l=!1,clearable:o=!0,loading:n=!1,shortcut:u,onSearch:a,onClear:x,value:h,onChange:i,onKeyDown:m,disabled:d=!1,className:y,placeholder:b="Search...",...L},t)=>{const[s,g]=p.useState(""),S=h!==void 0?h:s,se=f=>{const ie=f.target.value;h===void 0&&g(ie),i==null||i(f)},oe=()=>{h===void 0&&g(""),x==null||x(),a==null||a("")},le=f=>{f.key==="Enter"&&(a==null||a(S)),m==null||m(f)},ne=o&&S&&!n&&!d;return e.jsx("div",{className:de("db-search",`db-search--${c}`,{"db-search--full-width":l,"db-search--disabled":d},y),children:e.jsxs("div",{className:"db-search__wrapper",children:[e.jsx("span",{className:"db-search__icon",children:e.jsx(ce,{})}),e.jsx("input",{ref:t,type:"search",className:"db-search__input",value:S,onChange:se,onKeyDown:le,disabled:d,placeholder:b,...L}),u&&!S&&e.jsx("span",{className:"db-search__shortcut",children:u}),n&&e.jsx("span",{className:"db-search__loading",children:e.jsx("svg",{className:"db-search__spinner",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",strokeWidth:"2",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeDasharray:"30",strokeDashoffset:"10"})})}),ne&&e.jsx("button",{className:"db-search__clear",onClick:oe,"aria-label":"Clear search",type:"button",children:e.jsx(pe,{})})]})})});r.displayName="SearchInput";r.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show clear button",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},shortcut:{required:!1,tsType:{name:"string"},description:"Keyboard shortcut hint"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search handler"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear handler"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1}},composes:["Omit"]};const Se={title:"Inputs/SearchInput",component:r,parameters:{docs:{description:{component:"Search input component with clear button, loading state, and keyboard shortcuts."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Full width",table:{defaultValue:{summary:!1}}},clearable:{control:"boolean",description:"Show clear button",table:{defaultValue:{summary:!0}}},loading:{control:"boolean",description:"Loading state",table:{defaultValue:{summary:!1}}},shortcut:{control:"text",description:"Keyboard shortcut hint"},placeholder:{control:"text",description:"Placeholder text",table:{defaultValue:{summary:"Search..."}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},onSearch:{action:"searched",description:"Search handler (triggered on Enter)"},onClear:{action:"cleared",description:"Clear handler"}},args:{size:"medium",placeholder:"Search..."}},v={args:{placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ P"}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{size:"small",placeholder:"Small search input"}),e.jsx(r,{size:"medium",placeholder:"Medium search input"}),e.jsx(r,{size:"large",placeholder:"Large search input"})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{placeholder:"Default state"}),e.jsx(r,{placeholder:"With value",value:"Databricks"}),e.jsx(r,{placeholder:"Loading state",loading:!0,value:"Searching..."}),e.jsx(r,{placeholder:"Disabled state",disabled:!0})]})},k={render:()=>e.jsx(r,{placeholder:"Quick search...",shortcut:"⌘ K",style:{width:"300px"}}),parameters:{docs:{description:{story:"Shows keyboard shortcut hint when empty."}}}},ue=()=>{const[c,l]=p.useState(!1),[o,n]=p.useState(""),u=a=>{l(!0),setTimeout(()=>{l(!1)},2e3)};return e.jsx(r,{value:o,onChange:a=>n(a.target.value),onSearch:u,loading:c,placeholder:"Press Enter to search...",style:{width:"300px"}})},C={render:()=>e.jsx(ue,{}),parameters:{docs:{description:{story:"Simulates loading state after search."}}}},D={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(r,{placeholder:"Full width search...",fullWidth:!0})})},W={render:()=>e.jsx(r,{placeholder:"No clear button...",clearable:!1,value:"Cannot be cleared with button",style:{width:"300px"}}),parameters:{docs:{description:{story:"Search input without clear button."}}}},he=()=>{const[c,l]=p.useState(""),[o,n]=p.useState([]),[u,a]=p.useState(!1),x=["Dashboard Analytics","User Reports","Sales Dashboard","Product Metrics","Customer Insights","Revenue Analysis","Performance Metrics","Data Pipeline Status"],h=i=>{a(!0),setTimeout(()=>{if(i){const m=x.filter(d=>d.toLowerCase().includes(i.toLowerCase()));n(m)}else n([]);a(!1)},500)};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(r,{value:c,onChange:i=>l(i.target.value),onSearch:h,onClear:()=>{l(""),n([])},loading:u,placeholder:"Search for dashboards...",shortcut:"⌘ P",fullWidth:!0}),o.length>0&&e.jsx("div",{style:{marginTop:"8px",border:"1px solid #DDE0E5",borderRadius:"4px",backgroundColor:"white",padding:"8px 0"},children:o.map((i,m)=>e.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"13px"},onMouseEnter:d=>{d.currentTarget.style.backgroundColor="#F6F7F9"},onMouseLeave:d=>{d.currentTarget.style.backgroundColor="transparent"},children:i},m))}),c&&o.length===0&&!u&&e.jsxs("div",{style:{marginTop:"8px",padding:"16px",textAlign:"center",color:"#6B7280",fontSize:"13px"},children:['No results found for "',c,'"']})]})},z={render:()=>e.jsx(he,{}),parameters:{docs:{description:{story:"Interactive search with mock results."}}}},me=()=>{const[c,l]=p.useState(""),[o,n]=p.useState([]),[u,a]=p.useState(!1),[x,h]=p.useState(!0),i=[{title:"Customer data analysis",type:"Notebook",path:"/Workspace/Analytics"},{title:"Sales pipeline dashboard",type:"Dashboard",path:"/Workspace/Sales"},{title:"User activity logs",type:"Table",path:"/data/logs"},{title:"Revenue dashboard",type:"Dashboard",path:"/Workspace/Finance"},{title:"ETL pipelines config",type:"Notebook",path:"/Workspace/Data Engineering"},{title:"ML model training",type:"Notebook",path:"/Workspace/ML"},{title:"Product metrics query",type:"Query",path:"/Workspace/Product"},{title:"Customer segmentation",type:"Notebook",path:"/Workspace/Analytics"}],m=["Customer data analysis","Sales pipeline","User activity logs"],d=["Revenue dashboard","ETL pipelines","ML models"],y=["Create notebook","New SQL query","Import data"],b=t=>{if(!t.trim()){n([]),h(!0);return}a(!0),h(!1),setTimeout(()=>{const s=i.filter(g=>g.title.toLowerCase().includes(t.toLowerCase())||g.type.toLowerCase().includes(t.toLowerCase()));n(s),a(!1)},500)},L=()=>{l(""),n([]),h(!0)};return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#F6F7F9",borderRadius:"8px",maxWidth:"900px",minHeight:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:600,color:"#1F2937"},children:"Databricks Search"}),e.jsx(r,{value:c,onChange:t=>l(t.target.value),onSearch:b,onClear:L,placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ + P",loading:u,fullWidth:!0,style:{marginBottom:"20px"}}),x&&!c&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Recent Searches"}),e.jsx("div",{style:{margin:0,padding:0},children:m.map((t,s)=>e.jsxs("button",{type:"button",style:{width:"100%",padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",border:"none",background:"none",textAlign:"left",borderBottom:s<m.length-1?"1px solid #F3F4F6":"none"},onClick:()=>{l(t),b(t)},children:["🔍 ",t]},s))})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Popular"}),e.jsx("div",{style:{margin:0,padding:0},children:d.map((t,s)=>e.jsxs("button",{type:"button",style:{width:"100%",padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",border:"none",background:"none",textAlign:"left",borderBottom:s<d.length-1?"1px solid #F3F4F6":"none"},onClick:()=>{l(t),b(t)},children:["⭐ ",t]},s))})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Quick Actions"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:y.map((t,s)=>e.jsxs("li",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:s<y.length-1?"1px solid #F3F4F6":"none"},children:["⚡ ",t]},s))})]})]}),!x&&o.length>0&&e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid #E5E7EB",fontSize:"13px",fontWeight:600,color:"#6B7280"},children:[o.length," ",o.length===1?"result":"results"," found"]}),o.map((t,s)=>e.jsx("div",{style:{padding:"16px",borderBottom:s<o.length-1?"1px solid #F3F4F6":"none",cursor:"pointer",transition:"background-color 0.15s"},onMouseEnter:g=>{g.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:g=>{g.currentTarget.style.backgroundColor="transparent"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"20px"},children:t.type==="Notebook"?"📓":t.type==="Dashboard"?"📊":t.type==="Table"?"📋":"🔍"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:500,color:"#1F2937",marginBottom:"4px"},children:t.title}),e.jsxs("div",{style:{fontSize:"12px",color:"#6B7280"},children:[t.type," • ",t.path]})]}),e.jsx("span",{style:{fontSize:"12px",padding:"4px 8px",backgroundColor:"#F3F4F6",color:"#6B7280",borderRadius:"4px",fontWeight:500},children:t.type})]})},s))]}),!x&&c&&o.length===0&&!u&&e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",padding:"48px 24px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🔍"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:500,color:"#374151",marginBottom:"8px"},children:"No results found"}),e.jsx("div",{style:{fontSize:"14px",color:"#6B7280"},children:"Try searching for notebooks, dashboards, or tables"})]})]})},F={render:()=>e.jsx(me,{}),parameters:{docs:{description:{story:"Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search."}}}};var E,I,B;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search data, notebooks, recents, and more...',
    shortcut: '⌘ P'
  }
}`,...(B=(I=v.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var T,N,R;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <SearchInput size="small" placeholder="Small search input" />
      <SearchInput size="medium" placeholder="Medium search input" />
      <SearchInput size="large" placeholder="Large search input" />
    </div>
}`,...(R=(N=w.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,V,M;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <SearchInput placeholder="Default state" />
      <SearchInput placeholder="With value" value="Databricks" />
      <SearchInput placeholder="Loading state" loading value="Searching..." />
      <SearchInput placeholder="Disabled state" disabled />
    </div>
}`,...(M=(V=j.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var P,q,A;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SearchInput placeholder="Quick search..." shortcut="⌘ K" style={{
    width: '300px'
  }} />,
  parameters: {
    docs: {
      description: {
        story: 'Shows keyboard shortcut hint when empty.'
      }
    }
  }
}`,...(A=(q=k.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var Q,U,K;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <LoadingStateComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Simulates loading state after search.'
      }
    }
  }
}`,...(K=(U=C.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var O,H,$;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchInput placeholder="Full width search..." fullWidth />
    </div>
}`,...($=(H=D.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,J,X;W.parameters={...W.parameters,docs:{...(G=W.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SearchInput placeholder="No clear button..." clearable={false} value="Cannot be cleared with button" style={{
    width: '300px'
  }} />,
  parameters: {
    docs: {
      description: {
        story: 'Search input without clear button.'
      }
    }
  }
}`,...(X=(J=W.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <InteractiveComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive search with mock results.'
      }
    }
  }
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <RealWorldExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search.'
      }
    }
  }
}`,...(ae=(re=F.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const ve=["Playground","Sizes","States","WithShortcut","LoadingState","FullWidth","NonClearable","Interactive","RealWorldExample"];export{D as FullWidth,z as Interactive,C as LoadingState,W as NonClearable,v as Playground,F as RealWorldExample,w as Sizes,j as States,k as WithShortcut,ve as __namedExportsOrder,Se as default};
