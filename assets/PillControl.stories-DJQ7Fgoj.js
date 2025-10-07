import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j,R as je}from"./index-Dz3UJJSw.js";import{c as D}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const n=j.forwardRef(({options:s,value:a,defaultValue:de,onChange:x,name:ue,size:ce="medium",disabled:y=!1,allowDeselect:S=!1,fullWidth:pe=!1,className:ve,...me},he)=>{var w;const[ge,be]=je.useState(de||(S||(w=s[0])==null?void 0:w.value)),V=a!==void 0?a:ge,fe=ue||`pill-control-${Math.random().toString(36).substr(2,9)}`,C=(l,r)=>{if(y||r)return;let t=l;S&&V===l&&(t=void 0),a===void 0&&be(t),x==null||x(t||"")},xe=(l,r,t)=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),C(r,t))};return e.jsx("div",{ref:he,className:D("db-pill-control",`db-pill-control--${ce}`,{"db-pill-control--disabled":y,"db-pill-control--full-width":pe},ve),role:"radiogroup",...me,children:s.map(l=>{const r=V===l.value,t=y||l.disabled;return e.jsxs("label",{className:D("db-pill-control__option",{"db-pill-control__option--selected":r,"db-pill-control__option--disabled":t}),children:[e.jsx("input",{type:"radio",name:fe,value:l.value,checked:r,disabled:t,onChange:()=>C(l.value,l.disabled),className:"db-pill-control__input"}),e.jsxs("div",{className:"db-pill-control__pill",role:"radio","aria-checked":r,"aria-disabled":t,tabIndex:t?-1:0,onKeyDown:ye=>xe(ye,l.value,l.disabled),children:[l.icon&&e.jsx("span",{className:"db-pill-control__icon",children:l.icon}),e.jsx("span",{className:"db-pill-control__label",children:l.label}),l.badge!==void 0&&e.jsx("span",{className:"db-pill-control__badge",children:l.badge})]})]},l.value)})})});n.displayName="PillControl";n.__docgenInfo={description:"",methods:[],displayName:"PillControl",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"PillOption"}],raw:"PillOption[]"},description:"Array of pill options"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:"Change handler"},name:{required:!1,tsType:{name:"string"},description:"Name for the radio group"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the pills",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the control is disabled",defaultValue:{value:"false",computed:!1}},allowDeselect:{required:!1,tsType:{name:"boolean"},description:"Whether to allow deselection (no selection)",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width pills",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const De={title:"Inputs/PillControl",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},allowDeselect:{control:"boolean"},fullWidth:{control:"boolean"}}},oe=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{fillRule:"evenodd",d:"M7.25 0v2h1.5V0zM16 7.25h-2v1.5h2zM0 7.25h2v1.5H0zM13.127 1.813l-1.415 1.414 1.061 1.06 1.414-1.414zM2.874 1.813l1.414 1.414-1.06 1.06-1.415-1.414z"}),e.jsx("path",{fillRule:"evenodd",d:"M3.25 8.221C3.25 5.61 5.382 3.5 8 3.5s4.75 2.109 4.75 4.721a4.7 4.7 0 0 1-.985 2.879c-.754.973-1.33 1.776-1.33 2.644v1.506a.75.75 0 0 1-.75.75h-3.37a.75.75 0 0 1-.75-.75v-1.506c0-.868-.576-1.67-1.33-2.644A4.7 4.7 0 0 1 3.25 8.22M8 5C6.2 5 4.75 6.447 4.75 8.221c0 .738.25 1.417.67 1.96l.044.056c.284.366.612.789.897 1.263h3.278c.285-.474.613-.897.897-1.263l.043-.056c.422-.543.671-1.222.671-1.96C11.25 6.447 9.8 5 8 5m-.934 8.744c0-.256-.03-.504-.081-.744h2.03q-.079.36-.08.744v.756h-1.87z",clipRule:"evenodd"})]}),re=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M7.995 0a.75.75 0 0 1 .714.518l1.459 4.492h4.723a.75.75 0 0 1 .44 1.356l-3.82 2.776 1.459 4.492a.75.75 0 0 1-1.154.838l-3.82-2.776-3.821 2.776a.75.75 0 0 1-1.154-.838L4.48 9.142.66 6.366A.75.75 0 0 1 1.1 5.01h4.723L7.282.518A.75.75 0 0 1 7.995 0m0 3.177-.914 2.814a.75.75 0 0 1-.713.519h-2.96l2.394 1.739a.75.75 0 0 1 .273.839l-.915 2.814 2.394-1.74a.75.75 0 0 1 .882 0l2.394 1.74-.914-2.814a.75.75 0 0 1 .272-.839l2.394-1.74H9.623a.75.75 0 0 1-.713-.518z",clipRule:"evenodd"})}),ie=()=>e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e.jsx("path",{d:"M1 1v13.25c0 .414.336.75.75.75H15v-1.5H2.5V1z"}),e.jsx("path",{d:"m15.03 5.03-1.06-1.06L9.5 8.44 7 5.94 3.47 9.47l1.06 1.06L7 8.06l2.5 2.5z"})]}),o=[{value:"suggested",label:"Suggested",icon:e.jsx(oe,{})},{value:"favorites",label:"Favorites",icon:e.jsx(re,{})},{value:"popular",label:"Popular",icon:e.jsx(ie,{})}],i={args:{options:o,defaultValue:"popular"}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsx(n,{options:o,size:"small",defaultValue:"suggested"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (Default)"}),e.jsx(n,{options:o,size:"medium",defaultValue:"favorites"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsx(n,{options:o,size:"large",defaultValue:"popular"})]})]})},u={args:{options:[{value:"all",label:"All",badge:42},{value:"active",label:"Active",badge:12},{value:"pending",label:"Pending",badge:3},{value:"archived",label:"Archived",badge:27}],defaultValue:"active"}},c={render:()=>{const[s,a]=j.useState("favorites");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{children:e.jsxs("strong",{children:["Selected: ",s]})}),e.jsx(n,{options:o,value:s,onChange:a}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:()=>a("suggested"),children:"Select Suggested"}),e.jsx("button",{onClick:()=>a("favorites"),children:"Select Favorites"}),e.jsx("button",{onClick:()=>a("popular"),children:"Select Popular"})]})]})}},p={render:()=>{const[s,a]=j.useState("favorites");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{children:e.jsxs("strong",{children:["Selected: ",s||"None"]})}),e.jsx(n,{options:o,value:s,onChange:a,allowDeselect:!0}),e.jsx("p",{style:{fontSize:"14px",color:"#6B7280"},children:"Click the same option twice to deselect it"})]})}},v={args:{options:[{value:"enabled1",label:"Enabled Option",icon:e.jsx(oe,{})},{value:"disabled",label:"Disabled Option",icon:e.jsx(re,{}),disabled:!0},{value:"enabled2",label:"Another Enabled",icon:e.jsx(ie,{})}],defaultValue:"enabled1"}},m={args:{options:o,defaultValue:"suggested",disabled:!0}},h={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{options:o,defaultValue:"favorites",fullWidth:!0})})},g={args:{options:[{value:"all",label:"All Items"},{value:"recent",label:"Recent"},{value:"shared",label:"Shared with me"},{value:"trash",label:"Trash"}],defaultValue:"recent"}},b={render:()=>e.jsx("div",{style:{width:"600px"},children:e.jsx(n,{options:[{value:"option1",label:"Short"},{value:"option2",label:"Medium length option"},{value:"option3",label:"This is a very long option label that might wrap"},{value:"option4",label:"Another long descriptive option name"}],defaultValue:"option2",fullWidth:!0})})},f={args:{options:Array.from({length:8},(s,a)=>({value:`option${a+1}`,label:`Option ${a+1}`,badge:Math.floor(Math.random()*20)+1})),defaultValue:"option3"}};var O,_,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'popular'
  }
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var M,P,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h4>Small</h4>
        <PillControl options={basicOptions} size="small" defaultValue="suggested" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <PillControl options={basicOptions} size="medium" defaultValue="favorites" />
      </div>
      <div>
        <h4>Large</h4>
        <PillControl options={basicOptions} size="large" defaultValue="popular" />
      </div>
    </div>
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var T,I,W;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'all',
      label: 'All',
      badge: 42
    }, {
      value: 'active',
      label: 'Active',
      badge: 12
    }, {
      value: 'pending',
      label: 'Pending',
      badge: 3
    }, {
      value: 'archived',
      label: 'Archived',
      badge: 27
    }],
    defaultValue: 'active'
  }
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var N,k,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('favorites');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <strong>Selected: {value}</strong>
        </div>
        <PillControl options={basicOptions} value={value} onChange={setValue} />
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <button onClick={() => setValue('suggested')}>Select Suggested</button>
          <button onClick={() => setValue('favorites')}>Select Favorites</button>
          <button onClick={() => setValue('popular')}>Select Popular</button>
        </div>
      </div>;
  }
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var q,L,E;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('favorites');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <strong>Selected: {value || 'None'}</strong>
        </div>
        <PillControl options={basicOptions} value={value} onChange={setValue} allowDeselect={true} />
        <p style={{
        fontSize: '14px',
        color: '#6B7280'
      }}>
          Click the same option twice to deselect it
        </p>
      </div>;
  }
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,B,$;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'enabled1',
      label: 'Enabled Option',
      icon: <SuggestedIcon />
    }, {
      value: 'disabled',
      label: 'Disabled Option',
      icon: <FavoritesIcon />,
      disabled: true
    }, {
      value: 'enabled2',
      label: 'Another Enabled',
      icon: <PopularIcon />
    }],
    defaultValue: 'enabled1'
  }
}`,...($=(B=v.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var H,K,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'suggested',
    disabled: true
  }
}`,...(G=(K=m.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,U;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <PillControl options={basicOptions} defaultValue="favorites" fullWidth={true} />
    </div>
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'all',
      label: 'All Items'
    }, {
      value: 'recent',
      label: 'Recent'
    }, {
      value: 'shared',
      label: 'Shared with me'
    }, {
      value: 'trash',
      label: 'Trash'
    }],
    defaultValue: 'recent'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>
      <PillControl options={[{
      value: 'option1',
      label: 'Short'
    }, {
      value: 'option2',
      label: 'Medium length option'
    }, {
      value: 'option3',
      label: 'This is a very long option label that might wrap'
    }, {
      value: 'option4',
      label: 'Another long descriptive option name'
    }]} defaultValue="option2" fullWidth={true} />
    </div>
}`,...(ae=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,ne,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    options: Array.from({
      length: 8
    }, (_, i) => ({
      value: \`option\${i + 1}\`,
      label: \`Option \${i + 1}\`,
      badge: Math.floor(Math.random() * 20) + 1
    })),
    defaultValue: 'option3'
  }
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Oe=["Default","Sizes","WithBadges","Controlled","WithDeselection","DisabledOptions","DisabledControl","FullWidth","TextOnly","LongLabels","ManyOptions"];export{c as Controlled,i as Default,m as DisabledControl,v as DisabledOptions,h as FullWidth,b as LongLabels,f as ManyOptions,d as Sizes,g as TextOnly,u as WithBadges,p as WithDeselection,Oe as __namedExportsOrder,De as default};
