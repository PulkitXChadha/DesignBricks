import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-Dz3UJJSw.js";import{c as de}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const ce=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),pe=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})}),a=p.forwardRef(({size:c="medium",fullWidth:l=!1,clearable:o=!0,loading:n=!1,shortcut:u,onSearch:r,onClear:x,value:h,onChange:i,onKeyDown:g,disabled:d=!1,className:f,placeholder:y="Search...",...z},t)=>{const[s,m]=p.useState(""),S=h!==void 0?h:s,se=b=>{const ie=b.target.value;h===void 0&&m(ie),i==null||i(b)},oe=()=>{h===void 0&&m(""),x==null||x(),r==null||r("")},le=b=>{b.key==="Enter"&&(r==null||r(S)),g==null||g(b)},ne=o&&S&&!n&&!d;return e.jsx("div",{className:de("db-search",`db-search--${c}`,{"db-search--full-width":l,"db-search--disabled":d},f),children:e.jsxs("div",{className:"db-search__wrapper",children:[e.jsx("span",{className:"db-search__icon",children:e.jsx(ce,{})}),e.jsx("input",{ref:t,type:"search",className:"db-search__input",value:S,onChange:se,onKeyDown:le,disabled:d,placeholder:y,...z}),u&&!S&&e.jsx("span",{className:"db-search__shortcut",children:u}),n&&e.jsx("span",{className:"db-search__loading",children:e.jsx("svg",{className:"db-search__spinner",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",strokeWidth:"2",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeDasharray:"30",strokeDashoffset:"10"})})}),ne&&e.jsx("button",{className:"db-search__clear",onClick:oe,"aria-label":"Clear search",type:"button",children:e.jsx(pe,{})})]})})});a.displayName="SearchInput";a.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"Show clear button",defaultValue:{value:"true",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},shortcut:{required:!1,tsType:{name:"string"},description:"Keyboard shortcut hint"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Search handler"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Clear handler"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1}},composes:["Omit"]};const me={title:"Inputs/SearchInput",component:a,parameters:{docs:{description:{component:"Search input component with clear button, loading state, and keyboard shortcuts."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Full width",table:{defaultValue:{summary:!1}}},clearable:{control:"boolean",description:"Show clear button",table:{defaultValue:{summary:!0}}},loading:{control:"boolean",description:"Loading state",table:{defaultValue:{summary:!1}}},shortcut:{control:"text",description:"Keyboard shortcut hint"},placeholder:{control:"text",description:"Placeholder text",table:{defaultValue:{summary:"Search..."}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},onSearch:{action:"searched",description:"Search handler (triggered on Enter)"},onClear:{action:"cleared",description:"Clear handler"}},args:{size:"medium",placeholder:"Search..."}},v={args:{placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ P"}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{size:"small",placeholder:"Small search input"}),e.jsx(a,{size:"medium",placeholder:"Medium search input"}),e.jsx(a,{size:"large",placeholder:"Large search input"})]})},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(a,{placeholder:"Default state"}),e.jsx(a,{placeholder:"With value",value:"Databricks"}),e.jsx(a,{placeholder:"Loading state",loading:!0,value:"Searching..."}),e.jsx(a,{placeholder:"Disabled state",disabled:!0})]})},C={render:()=>e.jsx(a,{placeholder:"Quick search...",shortcut:"⌘ K",style:{width:"300px"}}),parameters:{docs:{description:{story:"Shows keyboard shortcut hint when empty."}}}},j={render:()=>{const[c,l]=p.useState(!1),[o,n]=p.useState(""),u=r=>{l(!0),console.log("Searching for:",r),setTimeout(()=>{l(!1)},2e3)};return e.jsx(a,{value:o,onChange:r=>n(r.target.value),onSearch:u,loading:c,placeholder:"Press Enter to search...",style:{width:"300px"}})},parameters:{docs:{description:{story:"Simulates loading state after search."}}}},F={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(a,{placeholder:"Full width search...",fullWidth:!0})})},D={render:()=>e.jsx(a,{placeholder:"No clear button...",clearable:!1,value:"Cannot be cleared with button",style:{width:"300px"}}),parameters:{docs:{description:{story:"Search input without clear button."}}}},L={render:()=>{const[c,l]=p.useState(""),[o,n]=p.useState([]),[u,r]=p.useState(!1),x=["Dashboard Analytics","User Reports","Sales Dashboard","Product Metrics","Customer Insights","Revenue Analysis","Performance Metrics","Data Pipeline Status"],h=i=>{r(!0),setTimeout(()=>{if(i){const g=x.filter(d=>d.toLowerCase().includes(i.toLowerCase()));n(g)}else n([]);r(!1)},500)};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{value:c,onChange:i=>l(i.target.value),onSearch:h,onClear:()=>{l(""),n([])},loading:u,placeholder:"Search for dashboards...",shortcut:"⌘ P",fullWidth:!0}),o.length>0&&e.jsx("div",{style:{marginTop:"8px",border:"1px solid #DDE0E5",borderRadius:"4px",backgroundColor:"white",padding:"8px 0"},children:o.map((i,g)=>e.jsx("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"13px"},onMouseEnter:d=>{d.currentTarget.style.backgroundColor="#F6F7F9"},onMouseLeave:d=>{d.currentTarget.style.backgroundColor="transparent"},children:i},g))}),c&&o.length===0&&!u&&e.jsxs("div",{style:{marginTop:"8px",padding:"16px",textAlign:"center",color:"#6B7280",fontSize:"13px"},children:['No results found for "',c,'"']})]})},parameters:{docs:{description:{story:"Interactive search with mock results."}}}},W={render:()=>{const[c,l]=p.useState(""),[o,n]=p.useState([]),[u,r]=p.useState(!1),[x,h]=p.useState(!0),i=[{title:"Customer data analysis",type:"Notebook",path:"/Workspace/Analytics"},{title:"Sales pipeline dashboard",type:"Dashboard",path:"/Workspace/Sales"},{title:"User activity logs",type:"Table",path:"/data/logs"},{title:"Revenue dashboard",type:"Dashboard",path:"/Workspace/Finance"},{title:"ETL pipelines config",type:"Notebook",path:"/Workspace/Data Engineering"},{title:"ML model training",type:"Notebook",path:"/Workspace/ML"},{title:"Product metrics query",type:"Query",path:"/Workspace/Product"},{title:"Customer segmentation",type:"Notebook",path:"/Workspace/Analytics"}],g=["Customer data analysis","Sales pipeline","User activity logs"],d=["Revenue dashboard","ETL pipelines","ML models"],f=["Create notebook","New SQL query","Import data"],y=t=>{if(!t.trim()){n([]),h(!0);return}r(!0),h(!1),setTimeout(()=>{const s=i.filter(m=>m.title.toLowerCase().includes(t.toLowerCase())||m.type.toLowerCase().includes(t.toLowerCase()));n(s),r(!1)},500)},z=()=>{l(""),n([]),h(!0)};return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#F6F7F9",borderRadius:"8px",maxWidth:"900px",minHeight:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:600,color:"#1F2937"},children:"Databricks Search"}),e.jsx(a,{value:c,onChange:t=>l(t.target.value),onSearch:y,onClear:z,placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ + P",loading:u,fullWidth:!0,style:{marginBottom:"20px"}}),x&&!c&&e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Recent Searches"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:g.map((t,s)=>e.jsxs("button",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:s<g.length-1?"1px solid #F3F4F6":"none",background:"none",border:"none",width:"100%",textAlign:"left"},onClick:()=>{l(t),y(t)},children:["🔍 ",t]},s))})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Popular"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:d.map((t,s)=>e.jsxs("button",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:s<d.length-1?"1px solid #F3F4F6":"none",background:"none",border:"none",width:"100%",textAlign:"left"},onClick:()=>{l(t),y(t)},children:["⭐ ",t]},s))})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e.jsx("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Quick Actions"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:f.map((t,s)=>e.jsxs("li",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:s<f.length-1?"1px solid #F3F4F6":"none"},children:["⚡ ",t]},s))})]})]}),!x&&o.length>0&&e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[e.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid #E5E7EB",fontSize:"13px",fontWeight:600,color:"#6B7280"},children:[o.length," ",o.length===1?"result":"results"," found"]}),o.map((t,s)=>e.jsx("div",{style:{padding:"16px",borderBottom:s<o.length-1?"1px solid #F3F4F6":"none",cursor:"pointer",transition:"background-color 0.15s"},onMouseEnter:m=>{m.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:m=>{m.currentTarget.style.backgroundColor="transparent"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"20px"},children:t.type==="Notebook"?"📓":t.type==="Dashboard"?"📊":t.type==="Table"?"📋":"🔍"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:500,color:"#1F2937",marginBottom:"4px"},children:t.title}),e.jsxs("div",{style:{fontSize:"12px",color:"#6B7280"},children:[t.type," • ",t.path]})]}),e.jsx("span",{style:{fontSize:"12px",padding:"4px 8px",backgroundColor:"#F3F4F6",color:"#6B7280",borderRadius:"4px",fontWeight:500},children:t.type})]})},s))]}),!x&&c&&o.length===0&&!u&&e.jsxs("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",padding:"48px 24px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🔍"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:500,color:"#374151",marginBottom:"8px"},children:"No results found"}),e.jsx("div",{style:{fontSize:"14px",color:"#6B7280"},children:"Try searching for notebooks, dashboards, or tables"})]})]})},parameters:{docs:{description:{story:"Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search."}}}};var E,B,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search data, notebooks, recents, and more...',
    shortcut: '⌘ P'
  }
}`,...(R=(B=v.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,I,V;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(I=k.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var N,A,P;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(A=w.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var M,_,q;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(_=C.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Q,U,H;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const handleSearch = (searchValue: string) => {
      setLoading(true);
      console.log('Searching for:', searchValue);

      // Simulate API call
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <SearchInput value={value} onChange={e => setValue(e.target.value)} onSearch={handleSearch} loading={loading} placeholder="Press Enter to search..." style={{
      width: '300px'
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Simulates loading state after search.'
      }
    }
  }
}`,...(H=(U=j.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,O,$;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchInput placeholder="Full width search..." fullWidth />
    </div>
}`,...($=(O=F.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,J,X;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=D.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const mockData = ['Dashboard Analytics', 'User Reports', 'Sales Dashboard', 'Product Metrics', 'Customer Insights', 'Revenue Analysis', 'Performance Metrics', 'Data Pipeline Status'];
    const handleSearch = (searchValue: string) => {
      setLoading(true);
      setTimeout(() => {
        if (searchValue) {
          const filtered = mockData.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));
          setResults(filtered);
        } else {
          setResults([]);
        }
        setLoading(false);
      }, 500);
    };
    return <div style={{
      width: '400px'
    }}>
        <SearchInput value={value} onChange={e => setValue(e.target.value)} onSearch={handleSearch} onClear={() => {
        setValue('');
        setResults([]);
      }} loading={loading} placeholder="Search for dashboards..." shortcut="⌘ P" fullWidth />

        {results.length > 0 && <div style={{
        marginTop: '8px',
        border: '1px solid #DDE0E5',
        borderRadius: '4px',
        backgroundColor: 'white',
        padding: '8px 0'
      }}>
            {results.map((result, index) => <div key={index} style={{
          padding: '8px 16px',
          cursor: 'pointer',
          fontSize: '13px'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#F6F7F9';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}>
                {result}
              </div>)}
          </div>}

        {value && results.length === 0 && !loading && <div style={{
        marginTop: '8px',
        padding: '16px',
        textAlign: 'center',
        color: '#6B7280',
        fontSize: '13px'
      }}>
            No results found for &quot;{value}&quot;
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive search with mock results.'
      }
    }
  }
}`,...(ee=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<Array<{
      title: string;
      type: string;
      path: string;
    }>>([]);
    const [loading, setLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const mockData = [{
      title: 'Customer data analysis',
      type: 'Notebook',
      path: '/Workspace/Analytics'
    }, {
      title: 'Sales pipeline dashboard',
      type: 'Dashboard',
      path: '/Workspace/Sales'
    }, {
      title: 'User activity logs',
      type: 'Table',
      path: '/data/logs'
    }, {
      title: 'Revenue dashboard',
      type: 'Dashboard',
      path: '/Workspace/Finance'
    }, {
      title: 'ETL pipelines config',
      type: 'Notebook',
      path: '/Workspace/Data Engineering'
    }, {
      title: 'ML model training',
      type: 'Notebook',
      path: '/Workspace/ML'
    }, {
      title: 'Product metrics query',
      type: 'Query',
      path: '/Workspace/Product'
    }, {
      title: 'Customer segmentation',
      type: 'Notebook',
      path: '/Workspace/Analytics'
    }];
    const recentSearches = ['Customer data analysis', 'Sales pipeline', 'User activity logs'];
    const popularItems = ['Revenue dashboard', 'ETL pipelines', 'ML models'];
    const quickActions = ['Create notebook', 'New SQL query', 'Import data'];
    const handleSearch = (searchValue: string) => {
      if (!searchValue.trim()) {
        setResults([]);
        setShowSuggestions(true);
        return;
      }
      setLoading(true);
      setShowSuggestions(false);
      setTimeout(() => {
        const filtered = mockData.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.type.toLowerCase().includes(searchValue.toLowerCase()));
        setResults(filtered);
        setLoading(false);
      }, 500);
    };
    const handleClear = () => {
      setValue('');
      setResults([]);
      setShowSuggestions(true);
    };
    return <div style={{
      padding: '20px',
      backgroundColor: '#F6F7F9',
      borderRadius: '8px',
      maxWidth: '900px',
      minHeight: '400px'
    }}>
        <h3 style={{
        margin: '0 0 20px 0',
        fontSize: '18px',
        fontWeight: 600,
        color: '#1F2937'
      }}>
          Databricks Search
        </h3>

        <SearchInput value={value} onChange={e => setValue(e.target.value)} onSearch={handleSearch} onClear={handleClear} placeholder="Search data, notebooks, recents, and more..." shortcut="⌘ + P" loading={loading} fullWidth style={{
        marginBottom: '20px'
      }} />

        {showSuggestions && !value && <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px'
      }}>
            <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '6px',
          border: '1px solid #DDE0E5',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
              <h5 style={{
            margin: '0 0 12px 0',
            fontSize: '14px',
            fontWeight: 600,
            color: '#374151'
          }}>
                Recent Searches
              </h5>
              <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
                {recentSearches.map((item, index) => <button key={index} style={{
              padding: '8px 0',
              fontSize: '13px',
              color: '#6B7280',
              cursor: 'pointer',
              borderBottom: index < recentSearches.length - 1 ? '1px solid #F3F4F6' : 'none',
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left'
            }} onClick={() => {
              setValue(item);
              handleSearch(item);
            }}>
                    🔍 {item}
                  </button>)}
              </ul>
            </div>

            <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '6px',
          border: '1px solid #DDE0E5',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
              <h5 style={{
            margin: '0 0 12px 0',
            fontSize: '14px',
            fontWeight: 600,
            color: '#374151'
          }}>
                Popular
              </h5>
              <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
                {popularItems.map((item, index) => <button key={index} style={{
              padding: '8px 0',
              fontSize: '13px',
              color: '#6B7280',
              cursor: 'pointer',
              borderBottom: index < popularItems.length - 1 ? '1px solid #F3F4F6' : 'none',
              background: 'none',
              border: 'none',
              width: '100%',
              textAlign: 'left'
            }} onClick={() => {
              setValue(item);
              handleSearch(item);
            }}>
                    ⭐ {item}
                  </button>)}
              </ul>
            </div>

            <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '6px',
          border: '1px solid #DDE0E5',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }}>
              <h5 style={{
            margin: '0 0 12px 0',
            fontSize: '14px',
            fontWeight: 600,
            color: '#374151'
          }}>
                Quick Actions
              </h5>
              <ul style={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}>
                {quickActions.map((item, index) => <li key={index} style={{
              padding: '8px 0',
              fontSize: '13px',
              color: '#6B7280',
              cursor: 'pointer',
              borderBottom: index < quickActions.length - 1 ? '1px solid #F3F4F6' : 'none'
            }}>
                    ⚡ {item}
                  </li>)}
              </ul>
            </div>
          </div>}

        {!showSuggestions && results.length > 0 && <div style={{
        backgroundColor: 'white',
        borderRadius: '6px',
        border: '1px solid #DDE0E5',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
            <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid #E5E7EB',
          fontSize: '13px',
          fontWeight: 600,
          color: '#6B7280'
        }}>
              {results.length} {results.length === 1 ? 'result' : 'results'} found
            </div>
            {results.map((result, index) => <div key={index} style={{
          padding: '16px',
          borderBottom: index < results.length - 1 ? '1px solid #F3F4F6' : 'none',
          cursor: 'pointer',
          transition: 'background-color 0.15s'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#F9FAFB';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}>
                <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
                  <span style={{
              fontSize: '20px'
            }}>
                    {result.type === 'Notebook' ? '📓' : result.type === 'Dashboard' ? '📊' : result.type === 'Table' ? '📋' : '🔍'}
                  </span>
                  <div style={{
              flex: 1
            }}>
                    <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1F2937',
                marginBottom: '4px'
              }}>
                      {result.title}
                    </div>
                    <div style={{
                fontSize: '12px',
                color: '#6B7280'
              }}>
                      {result.type} • {result.path}
                    </div>
                  </div>
                  <span style={{
              fontSize: '12px',
              padding: '4px 8px',
              backgroundColor: '#F3F4F6',
              color: '#6B7280',
              borderRadius: '4px',
              fontWeight: 500
            }}>
                    {result.type}
                  </span>
                </div>
              </div>)}
          </div>}

        {!showSuggestions && value && results.length === 0 && !loading && <div style={{
        backgroundColor: 'white',
        borderRadius: '6px',
        border: '1px solid #DDE0E5',
        padding: '48px 24px',
        textAlign: 'center'
      }}>
            <div style={{
          fontSize: '48px',
          marginBottom: '16px'
        }}>🔍</div>
            <div style={{
          fontSize: '16px',
          fontWeight: 500,
          color: '#374151',
          marginBottom: '8px'
        }}>
              No results found
            </div>
            <div style={{
          fontSize: '14px',
          color: '#6B7280'
        }}>
              Try searching for notebooks, dashboards, or tables
            </div>
          </div>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search.'
      }
    }
  }
}`,...(ae=(re=W.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const ye=["Playground","Sizes","States","WithShortcut","LoadingState","FullWidth","NonClearable","Interactive","RealWorldExample"];export{F as FullWidth,L as Interactive,j as LoadingState,D as NonClearable,v as Playground,W as RealWorldExample,k as Sizes,w as States,C as WithShortcut,ye as __namedExportsOrder,me as default};
