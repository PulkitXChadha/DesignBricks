import{a as c,j as e}from"./jsx-runtime-D2eXtamC.js";import{r}from"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";const s=({options:n,value:a,onChange:u,placeholder:p="Select an option",disabled:d=!1,error:g=!1,helperText:W,label:E,required:B=!1,fullWidth:De=!1,multiple:f=!1,searchable:Ve=!1,clearable:Te=!1,size:Le="medium",variant:qe="outlined",maxHeight:Pe=300})=>{const[b,S]=r.useState(!1),[x,y]=r.useState(""),[m,_]=r.useState(-1),G=r.useRef(null),Ne=r.useRef(null),R=r.useRef(null),v=Array.isArray(a)?a:a!=null?[a]:[],h=x?n.filter(l=>l.label.toLowerCase().includes(x.toLowerCase())):n,Me=h.reduce((l,t)=>{const o=t.group||"";return l[o]||(l[o]=[]),l[o].push(t),l},{}),I=()=>{var t;if(v.length===0)return"";const l=n.filter(o=>v.includes(o.value));return f?l.map(o=>o.label).join(", "):((t=l[0])==null?void 0:t.label)||""},A=l=>{if(f){const t=v.includes(l)?v.filter(o=>o!==l):[...v,l];u==null||u(t)}else u==null||u(l),S(!1),y("")},We=l=>{l.stopPropagation(),u==null||u(f?[]:""),y("")},Ee=l=>{if(!b&&(l.key==="Enter"||l.key===" "||l.key==="ArrowDown")){l.preventDefault(),S(!0);return}if(b)switch(l.key){case"Escape":S(!1),y("");break;case"ArrowDown":l.preventDefault(),_(t=>t<h.length-1?t+1:t);break;case"ArrowUp":l.preventDefault(),_(t=>t>0?t-1:t);break;case"Enter":if(l.preventDefault(),m>=0&&m<h.length){const t=h[m];t.disabled||A(t.value)}break}};r.useEffect(()=>{const l=t=>{G.current&&!G.current.contains(t.target)&&(S(!1),y(""))};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),r.useEffect(()=>{_(-1)},[x]),r.useEffect(()=>{if(m>=0&&R.current){const t=R.current.querySelectorAll(".db-select__option")[m];t&&t.scrollIntoView({block:"nearest"})}},[m]);const Ge=Te&&v.length>0&&!d;return c("div",{ref:G,className:`db-select db-select--${Le} db-select--${qe} ${De?"db-select--full-width":""} ${d?"db-select--disabled":""} ${g?"db-select--error":""} ${b?"db-select--open":""}`,children:[E&&c("label",{className:"db-select__label",children:[E,B&&e("span",{className:"db-select__required",children:"*"})]}),c("div",{className:"db-select__trigger",onClick:()=>!d&&S(!b),onKeyDown:Ee,tabIndex:d?-1:0,role:"combobox","aria-expanded":b,"aria-controls":b?"select-listbox":void 0,"aria-haspopup":"listbox","aria-disabled":d,children:[Ve&&b?e("input",{ref:Ne,type:"text",className:"db-select__search",value:x,onChange:l=>y(l.target.value),onClick:l=>l.stopPropagation(),placeholder:I()||p}):e("span",{className:"db-select__value",children:I()||e("span",{className:"db-select__placeholder",children:p})}),Ge&&e("button",{className:"db-select__clear",onClick:We,"aria-label":"Clear selection",tabIndex:-1,children:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("svg",{className:"db-select__arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),b&&e("div",{ref:R,className:"db-select__dropdown",style:{maxHeight:Pe},role:"listbox",id:"select-listbox","aria-multiselectable":f,children:h.length===0?e("div",{className:"db-select__empty",children:"No options found"}):Object.entries(Me).map(([l,t])=>c("div",{children:[l&&e("div",{className:"db-select__group-label",children:l}),t.map(o=>{const U=h.indexOf(o),F=v.includes(o.value),Re=U===m;return c("div",{className:`db-select__option ${F?"db-select__option--selected":""} ${o.disabled?"db-select__option--disabled":""} ${Re?"db-select__option--focused":""}`,onClick:()=>!o.disabled&&A(o.value),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),!o.disabled&&A(o.value))},onMouseEnter:()=>_(U),role:"option","aria-selected":F,"aria-disabled":o.disabled,tabIndex:o.disabled?-1:0,children:[f&&e("span",{className:"db-select__checkbox",children:F&&e("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",children:e("path",{d:"M10.28 2.28L4.5 8.06L1.72 5.28a.75.75 0 00-1.06 1.06l3.31 3.31a.75.75 0 001.06 0l6.31-6.31a.75.75 0 10-1.06-1.06z"})})}),e("span",{className:"db-select__option-label",children:o.label})]},o.value)})]},l))}),W&&e("div",{className:"db-select__helper-text",children:W})]})};try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | (string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((_value: string | number | (string | number)[]) => void)"}},placeholder:{defaultValue:{value:"Select an option"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},searchable:{defaultValue:{value:"false"},description:"",name:"searchable",required:!1,type:{name:"boolean"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"outlined"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},maxHeight:{defaultValue:{value:"300"},description:"",name:"maxHeight",required:!1,type:{name:"number"}}}}}catch{}const Be={title:"Inputs/Select",component:s,parameters:{layout:"centered",docs:{description:{component:"Select component for single or multiple option selection."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant",table:{defaultValue:{summary:"medium"}}},variant:{control:"select",options:["outlined","filled"],description:"Visual variant",table:{defaultValue:{summary:"outlined"}}},multiple:{control:"boolean",description:"Allow multiple selection",table:{defaultValue:{summary:!1}}},searchable:{control:"boolean",description:"Enable search/filter",table:{defaultValue:{summary:!1}}},clearable:{control:"boolean",description:"Show clear button",table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"Disabled state",table:{defaultValue:{summary:!1}}},error:{control:"boolean",description:"Error state",table:{defaultValue:{summary:!1}}},fullWidth:{control:"boolean",description:"Full width",table:{defaultValue:{summary:!1}}}}},i=[{value:"python",label:"Python"},{value:"sql",label:"SQL"},{value:"scala",label:"Scala"},{value:"r",label:"R"},{value:"java",label:"Java"}],C={render:()=>{const[n,a]=r.useState("");return e(s,{options:i,value:n,onChange:a,placeholder:"Select a language"})}},O={render:()=>{const[n,a]=r.useState("");return e(s,{options:i,value:n,onChange:a,label:"Programming Language",placeholder:"Select a language",helperText:"Choose your primary language"})}},k={render:()=>{const[n,a]=r.useState("");return e(s,{options:i,value:n,onChange:a,label:"Programming Language",placeholder:"Select a language",required:!0})}},w={render:()=>{const[n,a]=r.useState(""),[u,p]=r.useState(""),[d,g]=r.useState("");return c("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(s,{options:i,value:n,onChange:a,placeholder:"Small select",size:"small"}),e(s,{options:i,value:u,onChange:p,placeholder:"Medium select",size:"medium"}),e(s,{options:i,value:d,onChange:g,placeholder:"Large select",size:"large"})]})}},D={render:()=>{const[n,a]=r.useState(""),[u,p]=r.useState("");return c("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(s,{options:i,value:n,onChange:a,placeholder:"Outlined variant",variant:"outlined",label:"Outlined"}),e(s,{options:i,value:u,onChange:p,placeholder:"Filled variant",variant:"filled",label:"Filled"})]})}},V={render:()=>{const[n,a]=r.useState("");return e(s,{options:[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"mx",label:"Mexico"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"es",label:"Spain"},{value:"it",label:"Italy"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"au",label:"Australia"}],value:n,onChange:a,placeholder:"Search for a country",label:"Country",searchable:!0,clearable:!0})}},T={render:()=>{const[n,a]=r.useState([]);return e(s,{options:[{value:"spark",label:"Apache Spark"},{value:"databricks",label:"Databricks"},{value:"kafka",label:"Apache Kafka"},{value:"airflow",label:"Apache Airflow"},{value:"tensorflow",label:"TensorFlow"},{value:"pytorch",label:"PyTorch"},{value:"mlflow",label:"MLflow"},{value:"docker",label:"Docker"},{value:"kubernetes",label:"Kubernetes"}],value:n,onChange:a,placeholder:"Select technologies",label:"Technologies",multiple:!0,searchable:!0,clearable:!0})}},L={render:()=>{const[n,a]=r.useState("");return e(s,{options:[{value:"notebook",label:"Notebook",group:"Resources"},{value:"pipeline",label:"Pipeline",group:"Resources"},{value:"dashboard",label:"Dashboard",group:"Resources"},{value:"catalog",label:"Data Catalog",group:"Data"},{value:"table",label:"Table",group:"Data"},{value:"schema",label:"Schema",group:"Data"},{value:"cluster",label:"Cluster",group:"Compute"},{value:"warehouse",label:"SQL Warehouse",group:"Compute"},{value:"pool",label:"Instance Pool",group:"Compute"}],value:n,onChange:a,placeholder:"Select a resource",label:"Resource Type",searchable:!0})}},q={render:()=>{const[n,a]=r.useState("");return e(s,{options:[{value:"dev",label:"Development"},{value:"staging",label:"Staging"},{value:"prod",label:"Production",disabled:!0},{value:"test",label:"Testing"},{value:"demo",label:"Demo",disabled:!0}],value:n,onChange:a,placeholder:"Select environment",label:"Environment",helperText:"Some environments require additional permissions"})}},P={render:()=>c("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e(s,{options:i,placeholder:"Normal state",label:"Normal"}),e(s,{options:i,placeholder:"Disabled state",label:"Disabled",disabled:!0,value:"python"}),e(s,{options:i,placeholder:"Error state",label:"Error",error:!0,helperText:"Please select a valid option"})]})},N={render:()=>{const[n,a]=r.useState("");return e("div",{style:{width:"400px"},children:e(s,{options:i,value:n,onChange:a,placeholder:"Full width select",label:"Language",fullWidth:!0})})}},M={render:()=>{const[n,a]=r.useState(""),[u,p]=r.useState(""),[d,g]=r.useState("");return c("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"500px"},children:[e("h3",{style:{margin:"0 0 20px 0"},children:"Cluster Configuration"}),c("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e(s,{options:[{value:"dev-cluster",label:"Development Cluster (2 nodes)"},{value:"prod-cluster",label:"Production Cluster (10 nodes)"},{value:"ml-cluster",label:"ML Cluster (GPU enabled)"},{value:"spark-cluster",label:"Spark Cluster (High Memory)"}],value:n,onChange:a,placeholder:"Select a cluster",label:"Cluster",required:!0,fullWidth:!0,clearable:!0}),e(s,{options:[{value:"13.3-lts",label:"13.3 LTS (includes Apache Spark 3.4.1, Scala 2.12)"},{value:"14.0",label:"14.0 (includes Apache Spark 3.5.0, Scala 2.12)"},{value:"13.3-ml",label:"13.3 LTS ML (includes TensorFlow, PyTorch)"},{value:"13.3-gpu",label:"13.3 LTS GPU ML (CUDA 11.8)"}],value:u,onChange:p,placeholder:"Select Databricks runtime",label:"Databricks Runtime",required:!0,fullWidth:!0,searchable:!0}),e(s,{options:[{value:"standard_ds3",label:"Standard_DS3_v2 (4 cores, 14 GB)",group:"General Purpose"},{value:"standard_ds4",label:"Standard_DS4_v2 (8 cores, 28 GB)",group:"General Purpose"},{value:"standard_e4",label:"Standard_E4s_v3 (4 cores, 32 GB)",group:"Memory Optimized"},{value:"standard_e8",label:"Standard_E8s_v3 (8 cores, 64 GB)",group:"Memory Optimized"},{value:"standard_nc6",label:"Standard_NC6s_v3 (6 cores, 112 GB, 1 GPU)",group:"GPU Accelerated"}],value:d,onChange:g,placeholder:"Select node type",label:"Worker Type",helperText:"Choose based on your workload requirements",fullWidth:!0,searchable:!0})]})]})}};var j,K,$;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} placeholder="Select a language" />;
  }
}`,...($=(K=C.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var H,J,Q;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} label="Programming Language" placeholder="Select a language" helperText="Choose your primary language" />;
  }
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select options={basicOptions} value={value} onChange={setValue} label="Programming Language" placeholder="Select a language" required />;
  }
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,ae;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,te,re;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=D.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ue;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,ce,de;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,be,me;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(be=L.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var ve,he,ge;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(he=q.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var fe,Se,ye;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ye=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var xe,_e,Ce;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <div style={{
      width: '400px'
    }}>
        <Select options={basicOptions} value={value} onChange={setValue} placeholder="Full width select" label="Language" fullWidth />
      </div>;
  }
}`,...(Ce=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Oe,ke,we;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(we=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const Ie=["Basic","WithLabel","Required","Sizes","Variants","Searchable","Multiple","Grouped","WithDisabledOptions","States","FullWidth","RealWorldExample"];export{C as Basic,N as FullWidth,L as Grouped,T as Multiple,M as RealWorldExample,k as Required,V as Searchable,w as Sizes,P as States,D as Variants,q as WithDisabledOptions,O as WithLabel,Ie as __namedExportsOrder,Be as default};
