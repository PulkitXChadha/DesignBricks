import{j as e,a as t}from"./jsx-runtime-D2eXtamC.js";import{r as u}from"./index-SE77F2UD.js";import{c as ce}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const pe=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),ue=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})}),r=u.forwardRef(({size:l="medium",fullWidth:i=!1,clearable:s=!0,loading:d=!1,shortcut:g,onSearch:a,onClear:m,value:x,onChange:c,onKeyDown:h,disabled:p=!1,className:f,placeholder:b="Search...",...B},n)=>{const[o,y]=u.useState(""),v=x!==void 0?x:o,oe=S=>{const de=S.target.value;x===void 0&&y(de),c==null||c(S)},se=()=>{x===void 0&&y(""),m==null||m(),a==null||a("")},le=S=>{S.key==="Enter"&&(a==null||a(v)),h==null||h(S)},ie=s&&v&&!d&&!p;return e("div",{className:ce("db-search",`db-search--${l}`,{"db-search--full-width":i,"db-search--disabled":p},f),children:t("div",{className:"db-search__wrapper",children:[e("span",{className:"db-search__icon",children:e(pe,{})}),e("input",{ref:n,type:"search",className:"db-search__input",value:v,onChange:oe,onKeyDown:le,disabled:p,placeholder:b,...B}),g&&!v&&e("span",{className:"db-search__shortcut",children:g}),d&&e("span",{className:"db-search__loading",children:e("svg",{className:"db-search__spinner",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"8",cy:"8",r:"6",strokeWidth:"2",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeDasharray:"30",strokeDashoffset:"10"})})}),ie&&e("button",{className:"db-search__clear",onClick:se,"aria-label":"Clear search",type:"button",children:e(ue,{})})]})})});r.displayName="SearchInput";try{r.displayName="SearchInput",r.__docgenInfo={description:"",displayName:"SearchInput",props:{size:{defaultValue:{value:"medium"},description:"Size variant",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Full width",name:"fullWidth",required:!1,type:{name:"boolean"}},clearable:{defaultValue:{value:"true"},description:"Show clear button",name:"clearable",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},shortcut:{defaultValue:null,description:"Keyboard shortcut hint",name:"shortcut",required:!1,type:{name:"string"}},onSearch:{defaultValue:null,description:"Search handler",name:"onSearch",required:!1,type:{name:"((_value: string) => void)"}},onClear:{defaultValue:null,description:"Clear handler",name:"onClear",required:!1,type:{name:"(() => void)"}}}}}catch{}const ye={title:"Inputs/SearchInput",component:r,parameters:{docs:{description:{component:"Search input component with clear button, loading state, and keyboard shortcuts."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant",table:{defaultValue:{summary:"medium"}}},fullWidth:{control:"boolean",description:"Full width",table:{defaultValue:{summary:!1}}},clearable:{control:"boolean",description:"Show clear button",table:{defaultValue:{summary:!0}}},loading:{control:"boolean",description:"Loading state",table:{defaultValue:{summary:!1}}},shortcut:{control:"text",description:"Keyboard shortcut hint"},placeholder:{control:"text",description:"Placeholder text",table:{defaultValue:{summary:"Search..."}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},onSearch:{action:"searched",description:"Search handler (triggered on Enter)"},onClear:{action:"cleared",description:"Clear handler"}},args:{size:"medium",placeholder:"Search..."}},k={args:{placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ P"}},w={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(r,{size:"small",placeholder:"Small search input"}),e(r,{size:"medium",placeholder:"Medium search input"}),e(r,{size:"large",placeholder:"Large search input"})]})},C={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(r,{placeholder:"Default state"}),e(r,{placeholder:"With value",value:"Databricks"}),e(r,{placeholder:"Loading state",loading:!0,value:"Searching..."}),e(r,{placeholder:"Disabled state",disabled:!0})]})},D={render:()=>e(r,{placeholder:"Quick search...",shortcut:"⌘ K",style:{width:"300px"}}),parameters:{docs:{description:{story:"Shows keyboard shortcut hint when empty."}}}},F={render:()=>{const[l,i]=u.useState(!1),[s,d]=u.useState("");return e(r,{value:s,onChange:a=>d(a.target.value),onSearch:a=>{i(!0),console.log("Searching for:",a),setTimeout(()=>{i(!1)},2e3)},loading:l,placeholder:"Press Enter to search...",style:{width:"300px"}})},parameters:{docs:{description:{story:"Simulates loading state after search."}}}},L={render:()=>e("div",{style:{width:"100%",maxWidth:"600px"},children:e(r,{placeholder:"Full width search...",fullWidth:!0})})},W={render:()=>e(r,{placeholder:"No clear button...",clearable:!1,value:"Cannot be cleared with button",style:{width:"300px"}}),parameters:{docs:{description:{story:"Search input without clear button."}}}},z={render:()=>{const[l,i]=u.useState(""),[s,d]=u.useState([]),[g,a]=u.useState(!1),m=["Dashboard Analytics","User Reports","Sales Dashboard","Product Metrics","Customer Insights","Revenue Analysis","Performance Metrics","Data Pipeline Status"];return t("div",{style:{width:"400px"},children:[e(r,{value:l,onChange:c=>i(c.target.value),onSearch:c=>{a(!0),setTimeout(()=>{if(c){const h=m.filter(p=>p.toLowerCase().includes(c.toLowerCase()));d(h)}else d([]);a(!1)},500)},onClear:()=>{i(""),d([])},loading:g,placeholder:"Search for dashboards...",shortcut:"⌘ P",fullWidth:!0}),s.length>0&&e("div",{style:{marginTop:"8px",border:"1px solid #DDE0E5",borderRadius:"4px",backgroundColor:"white",padding:"8px 0"},children:s.map((c,h)=>e("div",{style:{padding:"8px 16px",cursor:"pointer",fontSize:"13px"},onMouseEnter:p=>{p.currentTarget.style.backgroundColor="#F6F7F9"},onMouseLeave:p=>{p.currentTarget.style.backgroundColor="transparent"},children:c},h))}),l&&s.length===0&&!g&&t("div",{style:{marginTop:"8px",padding:"16px",textAlign:"center",color:"#6B7280",fontSize:"13px"},children:['No results found for "',l,'"']})]})},parameters:{docs:{description:{story:"Interactive search with mock results."}}}},E={render:()=>{const[l,i]=u.useState(""),[s,d]=u.useState([]),[g,a]=u.useState(!1),[m,x]=u.useState(!0),c=[{title:"Customer data analysis",type:"Notebook",path:"/Workspace/Analytics"},{title:"Sales pipeline dashboard",type:"Dashboard",path:"/Workspace/Sales"},{title:"User activity logs",type:"Table",path:"/data/logs"},{title:"Revenue dashboard",type:"Dashboard",path:"/Workspace/Finance"},{title:"ETL pipelines config",type:"Notebook",path:"/Workspace/Data Engineering"},{title:"ML model training",type:"Notebook",path:"/Workspace/ML"},{title:"Product metrics query",type:"Query",path:"/Workspace/Product"},{title:"Customer segmentation",type:"Notebook",path:"/Workspace/Analytics"}],h=["Customer data analysis","Sales pipeline","User activity logs"],p=["Revenue dashboard","ETL pipelines","ML models"],f=["Create notebook","New SQL query","Import data"],b=n=>{if(!n.trim()){d([]),x(!0);return}a(!0),x(!1),setTimeout(()=>{const o=c.filter(y=>y.title.toLowerCase().includes(n.toLowerCase())||y.type.toLowerCase().includes(n.toLowerCase()));d(o),a(!1)},500)};return t("div",{style:{padding:"20px",backgroundColor:"#F6F7F9",borderRadius:"8px",maxWidth:"900px",minHeight:"400px"},children:[e("h3",{style:{margin:"0 0 20px 0",fontSize:"18px",fontWeight:600,color:"#1F2937"},children:"Databricks Search"}),e(r,{value:l,onChange:n=>i(n.target.value),onSearch:b,onClear:()=>{i(""),d([]),x(!0)},placeholder:"Search data, notebooks, recents, and more...",shortcut:"⌘ + P",loading:g,fullWidth:!0,style:{marginBottom:"20px"}}),m&&!l&&t("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[t("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Recent Searches"}),e("ul",{style:{margin:0,padding:0,listStyle:"none"},children:h.map((n,o)=>t("button",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:o<h.length-1?"1px solid #F3F4F6":"none",background:"none",border:"none",width:"100%",textAlign:"left"},onClick:()=>{i(n),b(n)},children:["🔍 ",n]},o))})]}),t("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Popular"}),e("ul",{style:{margin:0,padding:0,listStyle:"none"},children:p.map((n,o)=>t("button",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:o<p.length-1?"1px solid #F3F4F6":"none",background:"none",border:"none",width:"100%",textAlign:"left"},onClick:()=>{i(n),b(n)},children:["⭐ ",n]},o))})]}),t("div",{style:{padding:"20px",backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)"},children:[e("h5",{style:{margin:"0 0 12px 0",fontSize:"14px",fontWeight:600,color:"#374151"},children:"Quick Actions"}),e("ul",{style:{margin:0,padding:0,listStyle:"none"},children:f.map((n,o)=>t("li",{style:{padding:"8px 0",fontSize:"13px",color:"#6B7280",cursor:"pointer",borderBottom:o<f.length-1?"1px solid #F3F4F6":"none"},children:["⚡ ",n]},o))})]})]}),!m&&s.length>0&&t("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[t("div",{style:{padding:"12px 16px",borderBottom:"1px solid #E5E7EB",fontSize:"13px",fontWeight:600,color:"#6B7280"},children:[s.length," ",s.length===1?"result":"results"," found"]}),s.map((n,o)=>e("div",{style:{padding:"16px",borderBottom:o<s.length-1?"1px solid #F3F4F6":"none",cursor:"pointer",transition:"background-color 0.15s"},onMouseEnter:y=>{y.currentTarget.style.backgroundColor="#F9FAFB"},onMouseLeave:y=>{y.currentTarget.style.backgroundColor="transparent"},children:t("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e("span",{style:{fontSize:"20px"},children:n.type==="Notebook"?"📓":n.type==="Dashboard"?"📊":n.type==="Table"?"📋":"🔍"}),t("div",{style:{flex:1},children:[e("div",{style:{fontSize:"14px",fontWeight:500,color:"#1F2937",marginBottom:"4px"},children:n.title}),t("div",{style:{fontSize:"12px",color:"#6B7280"},children:[n.type," • ",n.path]})]}),e("span",{style:{fontSize:"12px",padding:"4px 8px",backgroundColor:"#F3F4F6",color:"#6B7280",borderRadius:"4px",fontWeight:500},children:n.type})]})},o))]}),!m&&l&&s.length===0&&!g&&t("div",{style:{backgroundColor:"white",borderRadius:"6px",border:"1px solid #DDE0E5",padding:"48px 24px",textAlign:"center"},children:[e("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🔍"}),e("div",{style:{fontSize:"16px",fontWeight:500,color:"#374151",marginBottom:"8px"},children:"No results found"}),e("div",{style:{fontSize:"14px",color:"#6B7280"},children:"Try searching for notebooks, dashboards, or tables"})]})]})},parameters:{docs:{description:{story:"Complete search experience with suggestions, results, and loading states - similar to Databricks workspace search."}}}};var R,I,V;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search data, notebooks, recents, and more...',
    shortcut: '⌘ P'
  }
}`,...(V=(I=k.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var N,T,A;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(T=w.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var _,P,M;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(P=C.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var q,Q,U;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var j,H,K;F.parameters={...F.parameters,docs:{...(j=F.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(K=(H=F.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var O,$,G;L.parameters={...L.parameters,docs:{...(O=L.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchInput placeholder="Full width search..." fullWidth />
    </div>
}`,...(G=($=L.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,X,Y;W.parameters={...W.parameters,docs:{...(J=W.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=W.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,re,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const be=["Playground","Sizes","States","WithShortcut","LoadingState","FullWidth","NonClearable","Interactive","RealWorldExample"];export{L as FullWidth,z as Interactive,F as LoadingState,W as NonClearable,k as Playground,E as RealWorldExample,w as Sizes,C as States,D as WithShortcut,be as __namedExportsOrder,ye as default};
