import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as p}from"./index-CWnxZbJP.js";import{c as T}from"./clsx-B-dksMZM.js";import{B as u}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const r=p.forwardRef(({value:a=0,max:i=100,variant:t="linear",size:l="medium",color:n="primary",showLabel:d=!1,indeterminate:s=!1,className:o,...k},D)=>{const x=Math.min(100,Math.max(0,a/i*100));if(t==="circular"){const pe={small:{width:32,strokeWidth:3},medium:{width:48,strokeWidth:4},large:{width:64,strokeWidth:5}},{width:c,strokeWidth:L}=pe[l],P=(c-L)/2,I=2*Math.PI*P,me=s?0:I-x/100*I;return e.jsxs("div",{ref:D,className:T("db-progress","db-progress--circular",`db-progress--${l}`,`db-progress--${n}`,{"db-progress--indeterminate":s},o),role:"progressbar","aria-valuenow":s?void 0:a,"aria-valuemin":0,"aria-valuemax":i,...k,children:[e.jsxs("svg",{width:c,height:c,children:[e.jsx("circle",{className:"db-progress__circle-bg",cx:c/2,cy:c/2,r:P,strokeWidth:L}),e.jsx("circle",{className:"db-progress__circle-fill",cx:c/2,cy:c/2,r:P,strokeWidth:L,strokeDasharray:I,strokeDashoffset:me,transform:`rotate(-90 ${c/2} ${c/2})`})]}),d&&!s&&e.jsxs("span",{className:"db-progress__label",children:[Math.round(x),"%"]})]})}return e.jsxs("div",{ref:D,className:T("db-progress","db-progress--linear",`db-progress--${l}`,`db-progress--${n}`,{"db-progress--indeterminate":s},o),role:"progressbar","aria-valuenow":s?void 0:a,"aria-valuemin":0,"aria-valuemax":i,...k,children:[e.jsx("div",{className:"db-progress__track",children:e.jsx("div",{className:"db-progress__fill",style:s?void 0:{width:`${x}%`}})}),d&&!s&&e.jsxs("span",{className:"db-progress__label",children:[Math.round(x),"%"]})]})});r.displayName="Progress";const m=p.forwardRef(({size:a="medium",color:i="primary",className:t,...l},n)=>e.jsx("div",{ref:n,className:T("db-spinner",`db-spinner--${a}`,`db-spinner--${i}`,t),role:"status","aria-label":"Loading",...l,children:e.jsx("svg",{className:"db-spinner__svg",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{className:"db-spinner__circle",cx:"12",cy:"12",r:"10",strokeWidth:"3",fill:"none"})})}));m.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"Current value (0-100 for determinate)",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value",defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'linear' | 'circular'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'circular'"}]},description:"Progress variant",defaultValue:{value:"'linear'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color variant",defaultValue:{value:"'primary'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show label",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"Indeterminate state",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};m.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'white' | 'inherit'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'white'"},{name:"literal",value:"'inherit'"}]},description:"Color variant",defaultValue:{value:"'primary'",computed:!1}}},composes:["HTMLAttributes"]};const Se={title:"Feedback/Progress",component:r,parameters:{layout:"centered",docs:{description:{component:"Progress indicators show the completion status of a task or process."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value (0-100)"},max:{control:"number",description:"Maximum value",table:{defaultValue:{summary:100}}},variant:{control:"select",options:["linear","circular"],description:"Progress variant",table:{defaultValue:{summary:"linear"}}},size:{control:"select",options:["small","medium","large"],description:"Size",table:{defaultValue:{summary:"medium"}}},color:{control:"select",options:["primary","success","warning","error"],description:"Color variant",table:{defaultValue:{summary:"primary"}}},showLabel:{control:"boolean",description:"Show percentage label",table:{defaultValue:{summary:!1}}},indeterminate:{control:"boolean",description:"Indeterminate state",table:{defaultValue:{summary:!1}}}},args:{value:60,variant:"linear",size:"medium",color:"primary"}},g={args:{value:60,variant:"linear"}},v={args:{value:60,variant:"circular"}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Linear"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{value:60,size:"small"}),e.jsx(r,{value:60,size:"medium"}),e.jsx(r,{value:60,size:"large"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Circular"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{value:60,variant:"circular",size:"small"}),e.jsx(r,{value:60,variant:"circular",size:"medium"}),e.jsx(r,{value:60,variant:"circular",size:"large"})]})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"},children:[e.jsx(r,{value:60,color:"primary"}),e.jsx(r,{value:70,color:"success"}),e.jsx(r,{value:40,color:"warning"}),e.jsx(r,{value:20,color:"error"})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsx(r,{value:75,showLabel:!0}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{value:25,variant:"circular",size:"small",showLabel:!0}),e.jsx(r,{value:50,variant:"circular",size:"medium",showLabel:!0}),e.jsx(r,{value:75,variant:"circular",size:"large",showLabel:!0})]})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsx(r,{indeterminate:!0}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"circular",indeterminate:!0,size:"small"}),e.jsx(r,{variant:"circular",indeterminate:!0,size:"medium"}),e.jsx(r,{variant:"circular",indeterminate:!0,size:"large"})]})]})},ue=()=>{const[a,i]=p.useState(0),[t,l]=p.useState(!1),n=()=>{i(0),l(!0);const s=setInterval(()=>{i(o=>o>=100?(clearInterval(s),l(!1),100):o+10)},500)},d=()=>{i(0),l(!1)};return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(r,{value:a,showLabel:!0,color:a===100?"success":"primary"}),e.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"16px"},children:[e.jsx(u,{onClick:n,disabled:t,children:t?"Processing...":"Start"}),e.jsx(u,{variant:"secondary",onClick:d,children:"Reset"})]}),a===100&&e.jsx("p",{style:{marginTop:"16px",color:"#00AF4B"},children:"✓ Process completed successfully!"})]})},b={render:()=>e.jsx(ue,{})},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(m,{size:"small"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(m,{size:"medium"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Medium"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(m,{size:"large"}),e.jsx("p",{style:{marginTop:"8px",fontSize:"12px"},children:"Large"})]})]})},w={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(m,{color:"primary"}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#2272B4",borderRadius:"4px"},children:e.jsx(m,{color:"white"})}),e.jsx("div",{style:{color:"#00AF4B"},children:e.jsx(m,{color:"inherit"})})]})},xe=()=>{const[a,i]=p.useState(!1),[t,l]=p.useState(!1),n=d=>{d(!0),setTimeout(()=>d(!1),3e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[e.jsxs("div",{style:{padding:"16px",border:"1px solid #DDE0E5",borderRadius:"4px",position:"relative"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Loading Content"}),a?e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[e.jsx(m,{size:"large"}),e.jsx("p",{style:{marginTop:"12px",color:"#6B7280"},children:"Loading data..."})]}):e.jsx("p",{children:"Content loaded successfully!"}),e.jsx(u,{onClick:()=>n(i),disabled:a,style:{marginTop:"12px"},children:"Load Content"})]}),e.jsxs("div",{style:{padding:"16px",border:"1px solid #DDE0E5",borderRadius:"4px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Processing Task"}),t?e.jsx(r,{indeterminate:!0,color:"primary"}):e.jsx(r,{value:100,color:"success"}),e.jsx(u,{onClick:()=>n(l),disabled:t,style:{marginTop:"12px"},children:"Start Task"})]})]})},z={render:()=>e.jsx(xe,{})},ge=()=>{const[a,i]=p.useState(!1),[t,l]=p.useState(0),[n]=p.useState([{name:"data-analysis.ipynb",size:"2.4 MB"},{name:"model-training.py",size:"156 KB"},{name:"dataset.csv",size:"45.8 MB"}]),d=()=>{i(!0),l(0);const s=setInterval(()=>{l(o=>o>=100?(clearInterval(s),i(!1),100):o+Math.random()*15)},300)};return e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9f9f9",borderRadius:"8px",maxWidth:"500px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0"},children:"File Upload"}),e.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #DDE0E5",borderRadius:"4px",padding:"16px"},children:[e.jsx("div",{style:{marginBottom:"16px"},children:n.map((s,o)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:o<n.length-1?"1px solid #F6F7F9":"none"},children:[e.jsx("span",{style:{fontSize:"13px"},children:s.name}),e.jsx("span",{style:{fontSize:"12px",color:"#6B7280"},children:s.size})]},o))}),a&&e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx(r,{value:t,showLabel:!0,color:"primary"}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"12px",color:"#6B7280"},children:["Uploading ",Math.round(t),"% complete..."]})]}),t===100&&!a&&e.jsx("div",{style:{padding:"12px",backgroundColor:"#E6F7ED",borderRadius:"4px",marginBottom:"16px"},children:e.jsx("p",{style:{margin:0,fontSize:"13px",color:"#00692D"},children:"✓ Files uploaded successfully!"})}),e.jsx(u,{variant:"primary",fullWidth:!0,onClick:d,disabled:a,loading:a,children:a?"Uploading...":"Upload Files"})]})]})},C={render:()=>e.jsx(ge,{})};var _,B,V;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'linear'
  }
}`,...(V=(B=g.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var R,E,M;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'circular'
  }
}`,...(M=(E=v.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,W,F;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(W=y.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var A,q,$;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(q=h.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var U,O,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(O=f.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,G,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(G=j.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <InteractiveComponent />
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ie;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,te,ne;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <LoadingStatesComponent />
}`,...(ne=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,de,ce;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <RealWorldExampleComponent />
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const we=["Linear","Circular","Sizes","Colors","WithLabel","Indeterminate","Interactive","SpinnerVariants","SpinnerColors","LoadingStates","RealWorldExample"];export{v as Circular,h as Colors,j as Indeterminate,b as Interactive,g as Linear,z as LoadingStates,C as RealWorldExample,y as Sizes,w as SpinnerColors,S as SpinnerVariants,f as WithLabel,we as __namedExportsOrder,Se as default};
