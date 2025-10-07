import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";const u=({options:t,value:a,onChange:o,placeholder:d="Select an option",disabled:c=!1,error:h=!1,helperText:x,label:y,required:M=!1,fullWidth:Oe=!1,multiple:g=!1,searchable:Te=!1,clearable:je=!1,size:De="medium",variant:Ve="outlined",maxHeight:Le=300})=>{const[p,f]=s.useState(!1),[C,S]=s.useState(""),[m,_]=s.useState(-1),E=s.useRef(null),Pe=s.useRef(null),R=s.useRef(null),b=Array.isArray(a)?a:a!=null?[a]:[],v=C?t.filter(l=>l.label.toLowerCase().includes(C.toLowerCase())):t,qe=v.reduce((l,r)=>{const n=r.group||"";return l[n]||(l[n]=[]),l[n].push(r),l},{}),z=()=>{var r;if(b.length===0)return"";const l=t.filter(n=>b.includes(n.value));return g?l.map(n=>n.label).join(", "):((r=l[0])==null?void 0:r.label)||""},G=l=>{if(g){const r=b.includes(l)?b.filter(n=>n!==l):[...b,l];o==null||o(r)}else o==null||o(l),f(!1),S("")},Ne=l=>{l.stopPropagation(),o==null||o(g?[]:""),S("")},Ae=l=>{if(!p&&(l.key==="Enter"||l.key===" "||l.key==="ArrowDown")){l.preventDefault(),f(!0);return}if(p)switch(l.key){case"Escape":f(!1),S("");break;case"ArrowDown":l.preventDefault(),_(r=>r<v.length-1?r+1:r);break;case"ArrowUp":l.preventDefault(),_(r=>r>0?r-1:r);break;case"Enter":if(l.preventDefault(),m>=0&&m<v.length){const r=v[m];r.disabled||G(r.value)}break}};s.useEffect(()=>{const l=r=>{E.current&&!E.current.contains(r.target)&&(f(!1),S(""))};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),s.useEffect(()=>{_(-1)},[C]),s.useEffect(()=>{if(m>=0&&R.current){const r=R.current.querySelectorAll(".db-select__option")[m];r&&r.scrollIntoView({block:"nearest"})}},[m]);const Me=je&&b.length>0&&!c;return e.jsxs("div",{ref:E,className:`db-select db-select--${De} db-select--${Ve} ${Oe?"db-select--full-width":""} ${c?"db-select--disabled":""} ${h?"db-select--error":""} ${p?"db-select--open":""}`,children:[y&&e.jsxs("label",{className:"db-select__label",children:[y,M&&e.jsx("span",{className:"db-select__required",children:"*"})]}),e.jsxs("div",{className:"db-select__trigger",onClick:()=>!c&&f(!p),onKeyDown:Ae,tabIndex:c?-1:0,role:"combobox","aria-expanded":p,"aria-controls":p?"select-listbox":void 0,"aria-haspopup":"listbox","aria-disabled":c,children:[Te&&p?e.jsx("input",{ref:Pe,type:"text",className:"db-select__search",value:C,onChange:l=>S(l.target.value),onClick:l=>l.stopPropagation(),placeholder:z()||d}):e.jsx("span",{className:"db-select__value",children:z()||e.jsx("span",{className:"db-select__placeholder",children:d})}),Me&&e.jsx("button",{className:"db-select__clear",onClick:Ne,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("svg",{className:"db-select__arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),p&&e.jsx("div",{ref:R,className:"db-select__dropdown",style:{maxHeight:Le},role:"listbox",id:"select-listbox","aria-multiselectable":g,children:v.length===0?e.jsx("div",{className:"db-select__empty",children:"No options found"}):Object.entries(qe).map(([l,r])=>e.jsxs("div",{children:[l&&e.jsx("div",{className:"db-select__group-label",children:l}),r.map(n=>{const B=v.indexOf(n),W=b.includes(n.value),Ee=B===m;return e.jsxs("div",{className:`db-select__option ${W?"db-select__option--selected":""} ${n.disabled?"db-select__option--disabled":""} ${Ee?"db-select__option--focused":""}`,onClick:()=>!n.disabled&&G(n.value),onKeyDown:F=>{(F.key==="Enter"||F.key===" ")&&(F.preventDefault(),!n.disabled&&G(n.value))},onMouseEnter:()=>_(B),role:"option","aria-selected":W,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:0,children:[g&&e.jsx("span",{className:"db-select__checkbox",children:W&&e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e.jsx("path",{d:"M10.28 2.28L4.5 8.06L1.72 5.28a.75.75 0 00-1.06 1.06l3.31 3.31a.75.75 0 001.06 0l6.31-6.31a.75.75 0 10-1.06-1.06z"})})}),e.jsx("span",{className:"db-select__option-label",children:n.label})]},n.value)})]},l))}),x&&e.jsx("div",{className:"db-select__helper-text",children:x})]})};u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string | number | (string | number)[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | (string | number)[]",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"}]},name:"_value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}}}};const Fe={title:"Inputs/Select",component:u,parameters:{layout:"centered",docs:{description:{component:"Select component for single or multiple option selection."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["outlined","filled"],description:"Visual variant",table:{defaultValue:{summary:"outlined"}}},multiple:{control:"boolean",description:"Allow multiple selection",table:{defaultValue:{summary:!1}}},searchable:{control:"boolean",description:"Enable search/filter",table:{defaultValue:{summary:!1}}},clearable:{control:"boolean",description:"Show clear button",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Full width",table:{defaultValue:{summary:!1}}}}},i=[{value:"python",label:"Python"},{value:"sql",label:"SQL"},{value:"scala",label:"Scala"},{value:"r",label:"R"},{value:"java",label:"Java"}],k={render:()=>{const[t,a]=s.useState("");return e.jsx(u,{options:i,value:t,onChange:a,placeholder:"Select a language"})}},w={render:()=>{const[t,a]=s.useState("");return e.jsx(u,{options:i,value:t,onChange:a,label:"Programming Language",placeholder:"Select a language",helperText:"Choose your primary language"})}},O={render:()=>{const[t,a]=s.useState("");return e.jsx(u,{options:i,value:t,onChange:a,label:"Programming Language",placeholder:"Select a language",required:!0})}},T={render:()=>{const[t,a]=s.useState(""),[o,d]=s.useState(""),[c,h]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(u,{options:i,value:t,onChange:a,placeholder:"Small select",size:"small"}),e.jsx(u,{options:i,value:o,onChange:d,placeholder:"Medium select",size:"medium"}),e.jsx(u,{options:i,value:c,onChange:h,placeholder:"Large select",size:"large"})]})}},j={render:()=>{const[t,a]=s.useState(""),[o,d]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(u,{options:i,value:t,onChange:a,placeholder:"Outlined variant",variant:"outlined",label:"Outlined"}),e.jsx(u,{options:i,value:o,onChange:d,placeholder:"Filled variant",variant:"filled",label:"Filled"})]})}},D={render:()=>{const[t,a]=s.useState(""),o=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"au",label:"Australia"}];return e.jsx(u,{options:o,value:t,onChange:a,placeholder:"Search for a country",label:"Country",searchable:!0,clearable:!0})}},V={render:()=>{const[t,a]=s.useState([]),o=[{value:"spark",label:"Apache Spark"},{value:"databricks",label:"Databricks"},{value:"kafka",label:"Apache Kafka"},{value:"airflow",label:"Apache Airflow"},{value:"tensorflow",label:"TensorFlow"},{value:"pytorch",label:"PyTorch"},{value:"mlflow",label:"MLflow"},{value:"docker",label:"Docker"},{value:"kubernetes",label:"Kubernetes"}];return e.jsx(u,{options:o,value:t,onChange:a,placeholder:"Select technologies",label:"Technologies",multiple:!0,searchable:!0,clearable:!0})}},L={render:()=>{const[t,a]=s.useState(""),o=[{value:"notebook",label:"Notebook",group:"Resources"},{value:"pipeline",label:"Pipeline",group:"Resources"},{value:"dashboard",label:"Dashboard",group:"Resources"},{value:"catalog",label:"Data Catalog",group:"Data"},{value:"table",label:"Table",group:"Data"},{value:"schema",label:"Schema",group:"Data"},{value:"cluster",label:"Cluster",group:"Compute"},{value:"warehouse",label:"SQL Warehouse",group:"Compute"},{value:"pool",label:"Instance Pool",group:"Compute"}];return e.jsx(u,{options:o,value:t,onChange:a,placeholder:"Select a resource",label:"Resource Type",searchable:!0})}},P={render:()=>{const[t,a]=s.useState(""),o=[{value:"dev",label:"Development"},{value:"staging",label:"Staging"},{value:"prod",label:"Production",disabled:!0},{value:"test",label:"Testing"},{value:"demo",label:"Demo",disabled:!0}];return e.jsx(u,{options:o,value:t,onChange:a,placeholder:"Select environment",label:"Environment",helperText:"Some environments require additional permissions"})}},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(u,{options:i,placeholder:"Normal state",label:"Normal"}),e.jsx(u,{options:i,placeholder:"Disabled state",label:"Disabled",disabled:!0,value:"python"}),e.jsx(u,{options:i,placeholder:"Error state",label:"Error",error:!0,helperText:"Please select a valid option"})]})},N={render:()=>{const[t,a]=s.useState("");return e.jsx("div",{style:{width:"400px"},children:e.jsx(u,{options:i,value:t,onChange:a,placeholder:"Full width select",label:"Language",fullWidth:!0})})}},A={render:()=>{const[t,a]=s.useState(""),[o,d]=s.useState(""),[c,h]=s.useState(""),x=[{value:"dev-cluster",label:"Development Cluster (2 nodes)"},{value:"prod-cluster",label:"Production Cluster (10 nodes)"},{value:"ml-cluster",label:"ML Cluster (GPU enabled)"},{value:"spark-cluster",label:"Spark Cluster (High Memory)"}],y=[{value:"13.3-lts",label:"13.3 LTS (includes Apache Spark 3.4.1, Scala 2.12)"},{value:"14.0",label:"14.0 (includes Apache Spark 3.5.0, Scala 2.12)"},{value:"13.3-ml",label:"13.3 LTS ML (includes TensorFlow, PyTorch)"},{value:"13.3-gpu",label:"13.3 LTS GPU ML (CUDA 11.8)"}],M=[{value:"standard_ds3",label:"Standard_DS3_v2 (4 cores, 14 GB)",group:"General Purpose"},{value:"standard_ds4",label:"Standard_DS4_v2 (8 cores, 28 GB)",group:"General Purpose"},{value:"standard_e4",label:"Standard_E4s_v3 (4 cores, 32 GB)",group:"Memory Optimized"},{value:"standard_e8",label:"Standard_E8s_v3 (8 cores, 64 GB)",group:"Memory Optimized"},{value:"standard_nc6",label:"Standard_NC6s_v3 (6 cores, 112 GB, 1 GPU)",group:"GPU Accelerated"}];return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"500px"},children:[e.jsx("h3",{style:{margin:"0 0 20px 0"},children:"Cluster Configuration"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{options:x,value:t,onChange:a,placeholder:"Select a cluster",label:"Cluster",required:!0,fullWidth:!0,clearable:!0}),e.jsx(u,{options:y,value:o,onChange:d,placeholder:"Select Databricks runtime",label:"Databricks Runtime",required:!0,fullWidth:!0,searchable:!0}),e.jsx(u,{options:M,value:c,onChange:h,placeholder:"Select node type",label:"Worker Type",helperText:"Choose based on your workload requirements",fullWidth:!0,searchable:!0})]})]})}};var I,U,K;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} placeholder="Select a language" />;
  }
}`,...(K=(U=k.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var $,H,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} label="Programming Language" placeholder="Select a language" helperText="Choose your primary language" />;
  }
}`,...(J=(H=w.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;O.parameters={...O.parameters,docs:{...(Q=O.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} label="Programming Language" placeholder="Select a language" required />;
  }
}`,...(Y=(X=O.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,le;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [small, setSmall] = useState<string | number>('');
    const [medium, setMedium] = useState<string | number>('');
    const [large, setLarge] = useState<string | number>('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <Select options={basicOptions} value={small} onChange={setSmall} placeholder="Small select" size="small" />
        <Select options={basicOptions} value={medium} onChange={setMedium} placeholder="Medium select" size="medium" />
        <Select options={basicOptions} value={large} onChange={setLarge} placeholder="Large select" size="large" />
      </div>;
  }
}`,...(le=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var ae,te,re;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [outlined, setOutlined] = useState<string | number>('');
    const [filled, setFilled] = useState<string | number>('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <Select options={basicOptions} value={outlined} onChange={setOutlined} placeholder="Outlined variant" variant="outlined" label="Outlined" />
        <Select options={basicOptions} value={filled} onChange={setFilled} placeholder="Filled variant" variant="filled" label="Filled" />
      </div>;
  }
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ne;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    const countryOptions: SelectOption[] = [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'mx',
      label: 'Mexico'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }, {
      value: 'es',
      label: 'Spain'
    }, {
      value: 'it',
      label: 'Italy'
    }, {
      value: 'jp',
      label: 'Japan'
    }, {
      value: 'cn',
      label: 'China'
    }, {
      value: 'in',
      label: 'India'
    }, {
      value: 'au',
      label: 'Australia'
    }];
    return <Select options={countryOptions} value={value} onChange={setValue} placeholder="Search for a country" label="Country" searchable clearable />;
  }
}`,...(ne=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ue,ie,ce;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<(string | number)[]>([]);
    const techOptions: SelectOption[] = [{
      value: 'spark',
      label: 'Apache Spark'
    }, {
      value: 'databricks',
      label: 'Databricks'
    }, {
      value: 'kafka',
      label: 'Apache Kafka'
    }, {
      value: 'airflow',
      label: 'Apache Airflow'
    }, {
      value: 'tensorflow',
      label: 'TensorFlow'
    }, {
      value: 'pytorch',
      label: 'PyTorch'
    }, {
      value: 'mlflow',
      label: 'MLflow'
    }, {
      value: 'docker',
      label: 'Docker'
    }, {
      value: 'kubernetes',
      label: 'Kubernetes'
    }];
    return <Select options={techOptions} value={value} onChange={setValue} placeholder="Select technologies" label="Technologies" multiple searchable clearable />;
  }
}`,...(ce=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    const groupedOptions: SelectOption[] = [{
      value: 'notebook',
      label: 'Notebook',
      group: 'Resources'
    }, {
      value: 'pipeline',
      label: 'Pipeline',
      group: 'Resources'
    }, {
      value: 'dashboard',
      label: 'Dashboard',
      group: 'Resources'
    }, {
      value: 'catalog',
      label: 'Data Catalog',
      group: 'Data'
    }, {
      value: 'table',
      label: 'Table',
      group: 'Data'
    }, {
      value: 'schema',
      label: 'Schema',
      group: 'Data'
    }, {
      value: 'cluster',
      label: 'Cluster',
      group: 'Compute'
    }, {
      value: 'warehouse',
      label: 'SQL Warehouse',
      group: 'Compute'
    }, {
      value: 'pool',
      label: 'Instance Pool',
      group: 'Compute'
    }];
    return <Select options={groupedOptions} value={value} onChange={setValue} placeholder="Select a resource" label="Resource Type" searchable />;
  }
}`,...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ve,he;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    const environmentOptions: SelectOption[] = [{
      value: 'dev',
      label: 'Development'
    }, {
      value: 'staging',
      label: 'Staging'
    }, {
      value: 'prod',
      label: 'Production',
      disabled: true
    }, {
      value: 'test',
      label: 'Testing'
    }, {
      value: 'demo',
      label: 'Demo',
      disabled: true
    }];
    return <Select options={environmentOptions} value={value} onChange={setValue} placeholder="Select environment" label="Environment" helperText="Some environments require additional permissions" />;
  }
}`,...(he=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ge,fe,Se;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '300px'
    }}>
        <Select options={basicOptions} placeholder="Normal state" label="Normal" />
        <Select options={basicOptions} placeholder="Disabled state" label="Disabled" disabled value="python" />
        <Select options={basicOptions} placeholder="Error state" label="Error" error helperText="Please select a valid option" />
      </div>;
  }
}`,...(Se=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var xe,ye,Ce;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <div style={{
      width: '400px'
    }}>
        <Select options={basicOptions} value={value} onChange={setValue} placeholder="Full width select" label="Language" fullWidth />
      </div>;
  }
}`,...(Ce=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var _e,ke,we;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [cluster, setCluster] = useState<string | number>('');
    const [runtime, setRuntime] = useState<string | number>('');
    const [nodeType, setNodeType] = useState<string | number>('');
    const clusterOptions: SelectOption[] = [{
      value: 'dev-cluster',
      label: 'Development Cluster (2 nodes)'
    }, {
      value: 'prod-cluster',
      label: 'Production Cluster (10 nodes)'
    }, {
      value: 'ml-cluster',
      label: 'ML Cluster (GPU enabled)'
    }, {
      value: 'spark-cluster',
      label: 'Spark Cluster (High Memory)'
    }];
    const runtimeOptions: SelectOption[] = [{
      value: '13.3-lts',
      label: '13.3 LTS (includes Apache Spark 3.4.1, Scala 2.12)'
    }, {
      value: '14.0',
      label: '14.0 (includes Apache Spark 3.5.0, Scala 2.12)'
    }, {
      value: '13.3-ml',
      label: '13.3 LTS ML (includes TensorFlow, PyTorch)'
    }, {
      value: '13.3-gpu',
      label: '13.3 LTS GPU ML (CUDA 11.8)'
    }];
    const nodeTypeOptions: SelectOption[] = [{
      value: 'standard_ds3',
      label: 'Standard_DS3_v2 (4 cores, 14 GB)',
      group: 'General Purpose'
    }, {
      value: 'standard_ds4',
      label: 'Standard_DS4_v2 (8 cores, 28 GB)',
      group: 'General Purpose'
    }, {
      value: 'standard_e4',
      label: 'Standard_E4s_v3 (4 cores, 32 GB)',
      group: 'Memory Optimized'
    }, {
      value: 'standard_e8',
      label: 'Standard_E8s_v3 (8 cores, 64 GB)',
      group: 'Memory Optimized'
    }, {
      value: 'standard_nc6',
      label: 'Standard_NC6s_v3 (6 cores, 112 GB, 1 GPU)',
      group: 'GPU Accelerated'
    }];
    return <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
        <h3 style={{
        margin: '0 0 20px 0'
      }}>Cluster Configuration</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Select options={clusterOptions} value={cluster} onChange={setCluster} placeholder="Select a cluster" label="Cluster" required fullWidth clearable />
          <Select options={runtimeOptions} value={runtime} onChange={setRuntime} placeholder="Select Databricks runtime" label="Databricks Runtime" required fullWidth searchable />
          <Select options={nodeTypeOptions} value={nodeType} onChange={setNodeType} placeholder="Select node type" label="Worker Type" helperText="Choose based on your workload requirements" fullWidth searchable />
        </div>
      </div>;
  }
}`,...(we=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const ze=["Basic","WithLabel","Required","Sizes","Variants","Searchable","Multiple","Grouped","WithDisabledOptions","States","FullWidth","RealWorldExample"];export{k as Basic,N as FullWidth,L as Grouped,V as Multiple,A as RealWorldExample,O as Required,D as Searchable,T as Sizes,q as States,j as Variants,P as WithDisabledOptions,w as WithLabel,ze as __namedExportsOrder,Fe as default};
