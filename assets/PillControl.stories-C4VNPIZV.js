import{j as e,a as n}from"./jsx-runtime-D2eXtamC.js";import{r as x,R as xe}from"./index-SE77F2UD.js";import{c as z}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const t=x.forwardRef(({options:o,value:a,defaultValue:ue,onChange:V,name:ce,size:pe="medium",disabled:S=!1,allowDeselect:C=!1,fullWidth:ve=!1,className:me,...he},be)=>{var D;const[ge,fe]=xe.useState(ue||(C||(D=o[0])==null?void 0:D.value)),_=a!==void 0?a:ge,ye=ce||`pill-control-${Math.random().toString(36).substr(2,9)}`,w=(l,s)=>{if(S||s)return;let r=l;C&&_===l&&(r=void 0),a===void 0&&fe(r),V==null||V(r||"")},Ve=(l,s,r)=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),w(s,r))};return e("div",{ref:be,className:z("db-pill-control",`db-pill-control--${pe}`,{"db-pill-control--disabled":S,"db-pill-control--full-width":ve},me),role:"radiogroup",...he,children:o.map(l=>{const s=_===l.value,r=S||l.disabled;return n("label",{className:z("db-pill-control__option",{"db-pill-control__option--selected":s,"db-pill-control__option--disabled":r}),children:[e("input",{type:"radio",name:ye,value:l.value,checked:s,disabled:r,onChange:()=>w(l.value,l.disabled),className:"db-pill-control__input"}),n("div",{className:"db-pill-control__pill",role:"radio","aria-checked":s,"aria-disabled":r,tabIndex:r?-1:0,onKeyDown:Se=>Ve(Se,l.value,l.disabled),children:[l.icon&&e("span",{className:"db-pill-control__icon",children:l.icon}),e("span",{className:"db-pill-control__label",children:l.label}),l.badge!==void 0&&e("span",{className:"db-pill-control__badge",children:l.badge})]})]},l.value)})})});t.displayName="PillControl";try{t.displayName="PillControl",t.__docgenInfo={description:"",displayName:"PillControl",props:{options:{defaultValue:null,description:"Array of pill options",name:"options",required:!0,type:{name:"PillOption[]"}},value:{defaultValue:null,description:"Currently selected value",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Default selected value (uncontrolled)",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Change handler",name:"onChange",required:!1,type:{name:"((_value: string) => void)"}},name:{defaultValue:null,description:"Name for the radio group",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"Size of the pills",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disabled:{defaultValue:{value:"false"},description:"Whether the control is disabled",name:"disabled",required:!1,type:{name:"boolean"}},allowDeselect:{defaultValue:{value:"false"},description:"Whether to allow deselection (no selection)",name:"allowDeselect",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Full width pills",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const ze={title:"Inputs/PillControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},allowDeselect:{control:"boolean"},fullWidth:{control:"boolean"}}},ie=()=>n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e("path",{fillRule:"evenodd",d:"M7.25 0v2h1.5V0zM16 7.25h-2v1.5h2zM0 7.25h2v1.5H0zM13.127 1.813l-1.415 1.414 1.061 1.06 1.414-1.414zM2.874 1.813l1.414 1.414-1.06 1.06-1.415-1.414z"}),e("path",{fillRule:"evenodd",d:"M3.25 8.221C3.25 5.61 5.382 3.5 8 3.5s4.75 2.109 4.75 4.721a4.7 4.7 0 0 1-.985 2.879c-.754.973-1.33 1.776-1.33 2.644v1.506a.75.75 0 0 1-.75.75h-3.37a.75.75 0 0 1-.75-.75v-1.506c0-.868-.576-1.67-1.33-2.644A4.7 4.7 0 0 1 3.25 8.22M8 5C6.2 5 4.75 6.447 4.75 8.221c0 .738.25 1.417.67 1.96l.044.056c.284.366.612.789.897 1.263h3.278c.285-.474.613-.897.897-1.263l.043-.056c.422-.543.671-1.222.671-1.96C11.25 6.447 9.8 5 8 5m-.934 8.744c0-.256-.03-.504-.081-.744h2.03q-.079.36-.08.744v.756h-1.87z",clipRule:"evenodd"})]}),se=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M7.995 0a.75.75 0 0 1 .714.518l1.459 4.492h4.723a.75.75 0 0 1 .44 1.356l-3.82 2.776 1.459 4.492a.75.75 0 0 1-1.154.838l-3.82-2.776-3.821 2.776a.75.75 0 0 1-1.154-.838L4.48 9.142.66 6.366A.75.75 0 0 1 1.1 5.01h4.723L7.282.518A.75.75 0 0 1 7.995 0m0 3.177-.914 2.814a.75.75 0 0 1-.713.519h-2.96l2.394 1.739a.75.75 0 0 1 .273.839l-.915 2.814 2.394-1.74a.75.75 0 0 1 .882 0l2.394 1.74-.914-2.814a.75.75 0 0 1 .272-.839l2.394-1.74H9.623a.75.75 0 0 1-.713-.518z",clipRule:"evenodd"})}),de=()=>n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[e("path",{d:"M1 1v13.25c0 .414.336.75.75.75H15v-1.5H2.5V1z"}),e("path",{d:"m15.03 5.03-1.06-1.06L9.5 8.44 7 5.94 3.47 9.47l1.06 1.06L7 8.06l2.5 2.5z"})]}),i=[{value:"suggested",label:"Suggested",icon:e(ie,{})},{value:"favorites",label:"Favorites",icon:e(se,{})},{value:"popular",label:"Popular",icon:e(de,{})}],d={args:{options:i,defaultValue:"popular"}},u={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-start"},children:[n("div",{children:[e("h4",{children:"Small"}),e(t,{options:i,size:"small",defaultValue:"suggested"})]}),n("div",{children:[e("h4",{children:"Medium (Default)"}),e(t,{options:i,size:"medium",defaultValue:"favorites"})]}),n("div",{children:[e("h4",{children:"Large"}),e(t,{options:i,size:"large",defaultValue:"popular"})]})]})},c={args:{options:[{value:"all",label:"All",badge:42},{value:"active",label:"Active",badge:12},{value:"pending",label:"Pending",badge:3},{value:"archived",label:"Archived",badge:27}],defaultValue:"active"}},p={render:()=>{const[o,a]=x.useState("favorites");return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e("div",{children:n("strong",{children:["Selected: ",o]})}),e(t,{options:i,value:o,onChange:a}),n("div",{style:{display:"flex",gap:"8px"},children:[e("button",{onClick:()=>a("suggested"),children:"Select Suggested"}),e("button",{onClick:()=>a("favorites"),children:"Select Favorites"}),e("button",{onClick:()=>a("popular"),children:"Select Popular"})]})]})}},v={render:()=>{const[o,a]=x.useState("favorites");return n("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e("div",{children:n("strong",{children:["Selected: ",o||"None"]})}),e(t,{options:i,value:o,onChange:a,allowDeselect:!0}),e("p",{style:{fontSize:"14px",color:"#6B7280"},children:"Click the same option twice to deselect it"})]})}},m={args:{options:[{value:"enabled1",label:"Enabled Option",icon:e(ie,{})},{value:"disabled",label:"Disabled Option",icon:e(se,{}),disabled:!0},{value:"enabled2",label:"Another Enabled",icon:e(de,{})}],defaultValue:"enabled1"}},h={args:{options:i,defaultValue:"suggested",disabled:!0}},b={render:()=>e("div",{style:{width:"400px"},children:e(t,{options:i,defaultValue:"favorites",fullWidth:!0})})},g={args:{options:[{value:"all",label:"All Items"},{value:"recent",label:"Recent"},{value:"shared",label:"Shared with me"},{value:"trash",label:"Trash"}],defaultValue:"recent"}},f={render:()=>e("div",{style:{width:"600px"},children:e(t,{options:[{value:"option1",label:"Short"},{value:"option2",label:"Medium length option"},{value:"option3",label:"This is a very long option label that might wrap"},{value:"option4",label:"Another long descriptive option name"}],defaultValue:"option2",fullWidth:!0})})},y={args:{options:Array.from({length:8},(o,a)=>({value:`option${a+1}`,label:`Option ${a+1}`,badge:Math.floor(Math.random()*20)+1})),defaultValue:"option3"}};var O,M,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'popular'
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,W,I;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var N,k,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var L,R,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var B,E,T;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(E=v.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var $,H,j;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(j=(H=m.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var K,G,J;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    defaultValue: 'suggested',
    disabled: true
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <PillControl options={basicOptions} defaultValue="favorites" fullWidth={true} />
    </div>
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,ne;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,oe,re;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Oe=["Default","Sizes","WithBadges","Controlled","WithDeselection","DisabledOptions","DisabledControl","FullWidth","TextOnly","LongLabels","ManyOptions"];export{p as Controlled,d as Default,h as DisabledControl,m as DisabledOptions,b as FullWidth,f as LongLabels,y as ManyOptions,u as Sizes,g as TextOnly,c as WithBadges,v as WithDeselection,Oe as __namedExportsOrder,ze as default};
