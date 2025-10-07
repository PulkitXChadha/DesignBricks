import{a as n,j as e}from"./jsx-runtime-D2eXtamC.js";import{r as u}from"./index-SE77F2UD.js";import{c as D}from"./clsx-B-dksMZM.js";import{B as g}from"./Button-Ch83UTUf.js";import"./_commonjsHelpers-DM6icglO.js";const r=u.forwardRef(({value:a=0,max:s=100,variant:t="linear",size:l="medium",color:o="primary",showLabel:m=!1,indeterminate:i=!1,className:d,...I},T)=>{const v=Math.min(100,Math.max(0,a/s*100));if(t==="circular"){const ue={small:{width:32,strokeWidth:3},medium:{width:48,strokeWidth:4},large:{width:64,strokeWidth:5}},{width:p,strokeWidth:C}=ue[l],_=(p-C)/2,k=2*Math.PI*_,me=i?0:k-v/100*k;return n("div",{ref:T,className:D("db-progress","db-progress--circular",`db-progress--${l}`,`db-progress--${o}`,{"db-progress--indeterminate":i},d),role:"progressbar","aria-valuenow":i?void 0:a,"aria-valuemin":0,"aria-valuemax":s,...I,children:[n("svg",{width:p,height:p,children:[e("circle",{className:"db-progress__circle-bg",cx:p/2,cy:p/2,r:_,strokeWidth:C}),e("circle",{className:"db-progress__circle-fill",cx:p/2,cy:p/2,r:_,strokeWidth:C,strokeDasharray:k,strokeDashoffset:me,transform:`rotate(-90 ${p/2} ${p/2})`})]}),m&&!i&&n("span",{className:"db-progress__label",children:[Math.round(v),"%"]})]})}return n("div",{ref:T,className:D("db-progress","db-progress--linear",`db-progress--${l}`,`db-progress--${o}`,{"db-progress--indeterminate":i},d),role:"progressbar","aria-valuenow":i?void 0:a,"aria-valuemin":0,"aria-valuemax":s,...I,children:[e("div",{className:"db-progress__track",children:e("div",{className:"db-progress__fill",style:i?void 0:{width:`${v}%`}})}),m&&!i&&n("span",{className:"db-progress__label",children:[Math.round(v),"%"]})]})});r.displayName="Progress";const c=u.forwardRef(({size:a="medium",color:s="primary",className:t,...l},o)=>e("div",{ref:o,className:D("db-spinner",`db-spinner--${a}`,`db-spinner--${s}`,t),role:"status","aria-label":"Loading",...l,children:e("svg",{className:"db-spinner__svg",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{className:"db-spinner__circle",cx:"12",cy:"12",r:"10",strokeWidth:"3",fill:"none"})})}));c.displayName="Spinner";try{r.displayName="Progress",r.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"Current value (0-100 for determinate)",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value",name:"max",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"linear"},description:"Progress variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"circular"'}]}},size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"primary"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},showLabel:{defaultValue:{value:"false"},description:"Show label",name:"showLabel",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Indeterminate state",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="Spinner",c.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"medium"},description:"Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"primary"},description:"Color variant",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"white"'}]}}}}}catch{}const fe={title:"Feedback/Progress",component:r,parameters:{layout:"centered",docs:{description:{component:"Progress indicators show the completion status of a task or process."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value (0-100)"},max:{control:"number",description:"Maximum value",table:{defaultValue:{summary:100}}},variant:{control:"select",options:["linear","circular"],description:"Progress variant",table:{defaultValue:{summary:"linear"}}},size:{control:"select",options:["small","medium","large"],description:"Size",table:{defaultValue:{summary:"medium"}}},color:{control:"select",options:["primary","success","warning","error"],description:"Color variant",table:{defaultValue:{summary:"primary"}}},showLabel:{control:"boolean",description:"Show percentage label",table:{defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Indeterminate state",table:{defaultValue:{summary:!1}}}},args:{value:60,variant:"linear",size:"medium",color:"primary"}},x={args:{value:60,variant:"linear"}},y={args:{value:60,variant:"circular"}},h={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[n("div",{children:[e("h4",{style:{margin:"0 0 8px 0"},children:"Linear"}),n("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e(r,{value:60,size:"small"}),e(r,{value:60,size:"medium"}),e(r,{value:60,size:"large"})]})]}),n("div",{children:[e("h4",{style:{margin:"0 0 8px 0"},children:"Circular"}),n("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e(r,{value:60,variant:"circular",size:"small"}),e(r,{value:60,variant:"circular",size:"medium"}),e(r,{value:60,variant:"circular",size:"large"})]})]})]})},f={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"},children:[e(r,{value:60,color:"primary"}),e(r,{value:70,color:"success"}),e(r,{value:40,color:"warning"}),e(r,{value:20,color:"error"})]})},b={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e(r,{value:75,showLabel:!0}),n("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(r,{value:25,variant:"circular",size:"small",showLabel:!0}),e(r,{value:50,variant:"circular",size:"medium",showLabel:!0}),e(r,{value:75,variant:"circular",size:"large",showLabel:!0})]})]})},S={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e(r,{indeterminate:!0}),n("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e(r,{variant:"circular",indeterminate:!0,size:"small"}),e(r,{variant:"circular",indeterminate:!0,size:"medium"}),e(r,{variant:"circular",indeterminate:!0,size:"large"})]})]})},z={render:()=>{const[a,s]=u.useState(0),[t,l]=u.useState(!1);return n("div",{style:{width:"400px"},children:[e(r,{value:a,showLabel:!0,color:a===100?"success":"primary"}),n("div",{style:{display:"flex",gap:"12px",marginTop:"16px"},children:[e(g,{onClick:()=>{s(0),l(!0);const i=setInterval(()=>{s(d=>d>=100?(clearInterval(i),l(!1),100):d+10)},500)},disabled:t,children:t?"Processing...":"Start"}),e(g,{variant:"secondary",onClick:()=>{s(0),l(!1)},children:"Reset"})]}),a===100&&e("p",{style:{marginTop:"16px",color:"#00AF4B"},children:"✓ Process completed successfully!"})]})}},w={render:()=>n("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[n("div",{style:{textAlign:"center"},children:[e(c,{size:"small"}),e("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Small"})]}),n("div",{style:{textAlign:"center"},children:[e(c,{size:"medium"}),e("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Medium"})]}),n("div",{style:{textAlign:"center"},children:[e(c,{size:"large"}),e("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Large"})]})]})},L={render:()=>n("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e(c,{color:"primary"}),e("div",{style:{padding:"12px",backgroundColor:"#2272B4",borderRadius:"4px"},children:e(c,{color:"white"})}),e("div",{style:{color:"#00AF4B"},children:e(c,{color:"inherit"})})]})},P={render:()=>{const[a,s]=u.useState(!1),[t,l]=u.useState(!1),o=m=>{m(!0),setTimeout(()=>m(!1),3e3)};return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[n("div",{style:{padding:"16px",border:"1px solid #DDE0E5",borderRadius:"4px",position:"relative"},children:[e("h4",{style:{margin:"0 0 8px 0"},children:"Loading Content"}),a?n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[e(c,{size:"large"}),e("p",{style:{marginTop:"12px",color:"#6B7280"},children:"Loading data..."})]}):e("p",{children:"Content loaded successfully!"}),e(g,{onClick:()=>o(s),disabled:a,style:{marginTop:"12px"},children:"Load Content"})]}),n("div",{style:{padding:"16px",border:"1px solid #DDE0E5",borderRadius:"4px"},children:[e("h4",{style:{margin:"0 0 8px 0"},children:"Processing Task"}),t?e(r,{indeterminate:!0,color:"primary"}):e(r,{value:100,color:"success"}),e(g,{onClick:()=>o(l),disabled:t,style:{marginTop:"12px"},children:"Start Task"})]})]})}},B={render:()=>{const[a,s]=u.useState(!1),[t,l]=u.useState(0),[o]=u.useState([{name:"data-analysis.ipynb",size:"2.4 MB"},{name:"model-training.py",size:"156 KB"},{name:"dataset.csv",size:"45.8 MB"}]),m=()=>{s(!0),l(0);const i=setInterval(()=>{l(d=>d>=100?(clearInterval(i),s(!1),100):d+Math.random()*15)},300)};return n("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"500px"},children:[e("h3",{style:{margin:"0 0 16px 0"},children:"File Upload"}),n("div",{style:{backgroundColor:"white",border:"1px solid #DDE0E5",borderRadius:"4px",padding:"16px"},children:[e("div",{style:{marginBottom:"16px"},children:o.map((i,d)=>n("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:d<o.length-1?"1px solid #F6F7F9":"none"},children:[e("span",{style:{fontSize:"13px"},children:i.name}),e("span",{style:{fontSize:"12px",color:"#6B7280"},children:i.size})]},d))}),a&&n("div",{style:{marginBottom:"16px"},children:[e(r,{value:t,showLabel:!0,color:"primary"}),n("p",{style:{marginTop:"8px",fontSize:"12px",color:"#6B7280"},children:["Uploading ",Math.round(t),"% complete..."]})]}),t===100&&!a&&e("div",{style:{padding:"12px",backgroundColor:"#E6F7ED",borderRadius:"4px",marginBottom:"16px"},children:e("p",{style:{margin:0,fontSize:"13px",color:"#00692D"},children:"✓ Files uploaded successfully!"})}),e(g,{variant:"primary",fullWidth:!0,onClick:m,disabled:a,loading:a,children:a?"Uploading...":"Upload Files"})]})]})}};var R,V,E;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'linear'
  }
}`,...(E=(V=x.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,U,M;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'circular'
  }
}`,...(M=(U=y.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var N,W,A;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 8px 0'
      }}>Linear</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Progress value={60} size="small" />
          <Progress value={60} size="medium" />
          <Progress value={60} size="large" />
        </div>
      </div>
      <div>
        <h4 style={{
        margin: '0 0 8px 0'
      }}>Circular</h4>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Progress value={60} variant="circular" size="small" />
          <Progress value={60} variant="circular" size="medium" />
          <Progress value={60} variant="circular" size="large" />
        </div>
      </div>
    </div>
}`,...(A=(W=h.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var q,$,j;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '300px'
  }}>
      <Progress value={60} color="primary" />
      <Progress value={70} color="success" />
      <Progress value={40} color="warning" />
      <Progress value={20} color="error" />
    </div>
}`,...(j=($=f.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var K,O,G;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
      <Progress value={75} showLabel />
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Progress value={25} variant="circular" size="small" showLabel />
        <Progress value={50} variant="circular" size="medium" showLabel />
        <Progress value={75} variant="circular" size="large" showLabel />
      </div>
    </div>
}`,...(G=(O=b.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,J,Q;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
      <Progress indeterminate />
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Progress variant="circular" indeterminate size="small" />
        <Progress variant="circular" indeterminate size="medium" />
        <Progress variant="circular" indeterminate size="large" />
      </div>
    </div>
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleStart = () => {
      setValue(0);
      setLoading(true);
      const interval = setInterval(() => {
        setValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    };
    const handleReset = () => {
      setValue(0);
      setLoading(false);
    };
    return <div style={{
      width: '400px'
    }}>
        <Progress value={value} showLabel color={value === 100 ? 'success' : 'primary'} />
        <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '16px'
      }}>
          <Button onClick={handleStart} disabled={loading}>
            {loading ? 'Processing...' : 'Start'}
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {value === 100 && <p style={{
        marginTop: '16px',
        color: '#00AF4B'
      }}>✓ Process completed successfully!</p>}
      </div>;
  }
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="small" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Small</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="medium" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Medium</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spinner size="large" />
        <p style={{
        marginTop: '8px',
        fontSize: '12px'
      }}>Large</p>
      </div>
    </div>
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,ie,se;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Spinner color="primary" />
      <div style={{
      padding: '12px',
      backgroundColor: '#2272B4',
      borderRadius: '4px'
    }}>
        <Spinner color="white" />
      </div>
      <div style={{
      color: '#00AF4B'
    }}>
        <Spinner color="inherit" />
      </div>
    </div>
}`,...(se=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,te,oe;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const simulateLoad = (setLoading: (_value: boolean) => void) => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '400px'
    }}>
        <div style={{
        padding: '16px',
        border: '1px solid #DDE0E5',
        borderRadius: '4px',
        position: 'relative'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Loading Content</h4>
          {loading1 ? <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px'
        }}>
              <Spinner size="large" />
              <p style={{
            marginTop: '12px',
            color: '#6B7280'
          }}>Loading data...</p>
            </div> : <p>Content loaded successfully!</p>}
          <Button onClick={() => simulateLoad(setLoading1)} disabled={loading1} style={{
          marginTop: '12px'
        }}>
            Load Content
          </Button>
        </div>

        <div style={{
        padding: '16px',
        border: '1px solid #DDE0E5',
        borderRadius: '4px'
      }}>
          <h4 style={{
          margin: '0 0 8px 0'
        }}>Processing Task</h4>
          {loading2 ? <Progress indeterminate color="primary" /> : <Progress value={100} color="success" />}
          <Button onClick={() => simulateLoad(setLoading2)} disabled={loading2} style={{
          marginTop: '12px'
        }}>
            Start Task
          </Button>
        </div>
      </div>;
  }
}`,...(oe=(te=P.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var de,ce,pe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [files] = useState([{
      name: 'data-analysis.ipynb',
      size: '2.4 MB'
    }, {
      name: 'model-training.py',
      size: '156 KB'
    }, {
      name: 'dataset.csv',
      size: '45.8 MB'
    }]);
    const handleUpload = () => {
      setUploading(true);
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 300);
    };
    return <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0'
      }}>File Upload</h3>

        <div style={{
        backgroundColor: 'white',
        border: '1px solid #DDE0E5',
        borderRadius: '4px',
        padding: '16px'
      }}>
          <div style={{
          marginBottom: '16px'
        }}>
            {files.map((file, index) => <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: index < files.length - 1 ? '1px solid #F6F7F9' : 'none'
          }}>
                <span style={{
              fontSize: '13px'
            }}>{file.name}</span>
                <span style={{
              fontSize: '12px',
              color: '#6B7280'
            }}>{file.size}</span>
              </div>)}
          </div>

          {uploading && <div style={{
          marginBottom: '16px'
        }}>
              <Progress value={uploadProgress} showLabel color="primary" />
              <p style={{
            marginTop: '8px',
            fontSize: '12px',
            color: '#6B7280'
          }}>
                Uploading {Math.round(uploadProgress)}% complete...
              </p>
            </div>}

          {uploadProgress === 100 && !uploading && <div style={{
          padding: '12px',
          backgroundColor: '#E6F7ED',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
              <p style={{
            margin: 0,
            fontSize: '13px',
            color: '#00692D'
          }}>
                ✓ Files uploaded successfully!
              </p>
            </div>}

          <Button variant="primary" fullWidth onClick={handleUpload} disabled={uploading} loading={uploading}>
            {uploading ? 'Uploading...' : 'Upload Files'}
          </Button>
        </div>
      </div>;
  }
}`,...(pe=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const be=["Linear","Circular","Sizes","Colors","WithLabel","Indeterminate","Interactive","SpinnerVariants","SpinnerColors","LoadingStates","RealWorldExample"];export{y as Circular,f as Colors,S as Indeterminate,z as Interactive,x as Linear,P as LoadingStates,B as RealWorldExample,h as Sizes,L as SpinnerColors,w as SpinnerVariants,b as WithLabel,be as __namedExportsOrder,fe as default};
