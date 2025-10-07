import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-Dz3UJJSw.js";import{c as z}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const he=s=>s.split(" ").map(t=>t.charAt(0)).join("").toUpperCase().substring(0,2),ye=s=>{const t=["#4299E0","#8A63BF","#B45091","#C83243","#A6630C","#04867D","#3BA65E","#DE7921","#E65B77","#434A93","#137DAE","#308613"];let r=0;for(let i=0;i<s.length;i++)r=s.charCodeAt(i)+((r<<5)-r);return t[Math.abs(r)%t.length]},a=b.forwardRef(({name:s,src:t,size:r="md",variant:i="circle",status:h,showStatus:re=!1,backgroundColor:ie,textColor:le="#FFFFFF",onError:y,clickable:l=!1,onClick:S,alt:oe,className:ne,...ce},de)=>{const[j,w]=b.useState(!1),[A,pe]=b.useState(!1),me=()=>{w(!0),y==null||y()},ue=()=>{pe(!0),w(!1)},F=()=>{l&&S&&S()},fe=he(s),xe=ie||ye(s),ge=t&&!j&&A,I=re&&h;return e.jsx("div",{ref:de,className:z("db-avatar",`db-avatar--${r}`,`db-avatar--${i}`,{"db-avatar--clickable":l,"db-avatar--with-status":I},ne),onClick:F,role:l?"button":void 0,tabIndex:l?0:void 0,onKeyDown:l?v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),F())}:void 0,...ce,children:e.jsxs("div",{className:"db-avatar__container",children:[t&&!j&&e.jsx("img",{src:t,alt:oe||`${s}'s avatar`,className:z("db-avatar__image",{"db-avatar__image--loaded":A}),onError:me,onLoad:ue,loading:"lazy"}),!ge&&e.jsx("div",{className:"db-avatar__fallback",style:{backgroundColor:xe,color:le},"aria-label":`${s}'s avatar`,children:e.jsx("span",{className:"db-avatar__initials",children:fe})}),I&&e.jsx("div",{className:z("db-avatar__status",`db-avatar__status--${h}`),"aria-label":`Status: ${h}`})]})})});a.displayName="UserAvatar";a.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:"User's name - used for initials fallback"},src:{required:!1,tsType:{name:"string"},description:"Avatar image source"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"Avatar size",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'circle' | 'rounded' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'square'"}]},description:"Avatar variant",defaultValue:{value:"'circle'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'away' | 'busy'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"}]},description:"Status indicator"},showStatus:{required:!1,tsType:{name:"boolean"},description:"Whether to show status indicator",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Custom background color"},textColor:{required:!1,tsType:{name:"string"},description:"Custom text color",defaultValue:{value:"'#FFFFFF'",computed:!1}},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Image loading error handler"},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether avatar is clickable",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},alt:{required:!1,tsType:{name:"string"},description:"Alt text for image"}},composes:["Omit"]};const je={title:"Foundation/UserAvatar",component:a,parameters:{layout:"centered",docs:{description:{component:"Displays user profile images with fallback to initials. Supports various sizes, shapes, and status indicators."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},variant:{control:{type:"select"},options:["circle","rounded","square"],description:"Shape variant of the avatar"},status:{control:{type:"select"},options:["online","offline","away","busy"],description:"Status indicator type"},showStatus:{control:"boolean",description:"Whether to display status indicator"},clickable:{control:"boolean",description:"Whether the avatar is clickable"},backgroundColor:{control:"color",description:"Custom background color for initials"},textColor:{control:"color",description:"Custom text color for initials"}}},o={args:{name:"John Doe",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}},n={args:{name:"Jane Smith"},parameters:{docs:{description:{story:"When no image is provided, the avatar displays initials with an auto-generated background color."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Extra Small",size:"xs"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"xs"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Small",size:"sm"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"sm"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Medium",size:"md"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"md"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Large",size:"lg"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"lg"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Extra Large",size:"xl"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"xl"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"2X Large",size:"2xl"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"2xl"})]})]}),parameters:{docs:{description:{story:"Avatars are available in six sizes: xs, sm, md (default), lg, xl, and 2xl."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Circle Avatar",variant:"circle",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"circle"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Rounded Avatar",variant:"rounded",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Square Avatar",variant:"square",size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"square"})]})]}),parameters:{docs:{description:{story:"Three shape variants are available: circle (default), rounded, and square."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Online User",status:"online",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"online"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Away User",status:"away",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"away"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Busy User",status:"busy",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"busy"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Offline User",status:"offline",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"offline"})]})]}),parameters:{docs:{description:{story:"Status indicators can be displayed in the bottom-right corner to show user availability. Available statuses: online, away, busy, and offline."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsx(a,{name:"Alice Brown",size:"lg"}),e.jsx(a,{name:"Bob Chen",size:"lg"}),e.jsx(a,{name:"Carol Davis",size:"lg"}),e.jsx(a,{name:"David Evans",size:"lg"}),e.jsx(a,{name:"Emma Foster",size:"lg"}),e.jsx(a,{name:"Frank Garcia",size:"lg"})]}),parameters:{docs:{description:{story:"When no image is provided, avatars automatically generate a consistent color based on the user's name."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(a,{name:"Custom Red",backgroundColor:"#E65B77",textColor:"#FFFFFF",size:"lg"}),e.jsx(a,{name:"Custom Blue",backgroundColor:"#4299E0",textColor:"#FFFFFF",size:"lg"}),e.jsx(a,{name:"Custom Green",backgroundColor:"#3BA65E",textColor:"#FFFFFF",size:"lg"}),e.jsx(a,{name:"Custom Purple",backgroundColor:"#8A63BF",textColor:"#FFFFFF",size:"lg"})]}),parameters:{docs:{description:{story:"Override the auto-generated colors with custom backgroundColor and textColor props."}}}},f={args:{name:"John Doe",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",size:"lg",clickable:!0,onClick:()=>alert("Avatar clicked!")},parameters:{docs:{description:{story:"Avatars can be made clickable with hover effects and keyboard support. Set clickable={true} and provide an onClick handler."}}}},x={args:{name:"Broken Image",src:"https://invalid-image-url.jpg",size:"lg",onError:()=>console.log("Image failed to load")},parameters:{docs:{description:{story:"When an image fails to load, the avatar gracefully falls back to displaying initials."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"A",size:"lg"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Single letter"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"John",size:"lg"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"One name"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"Jane Smith",size:"lg"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Two names"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{name:"John Michael Doe",size:"lg"}),e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Three names"})]})]}),parameters:{docs:{description:{story:"Initials are extracted from the name prop. The component handles single letters, one word, or multiple words, always displaying up to two letters."}}}};var C,D,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var q,U,E;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith'
  },
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, the avatar displays initials with an auto-generated background color.'
      }
    }
  }
}`,...(E=(U=n.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var W,B,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Extra Small" size="xs" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>xs</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Small" size="sm" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>sm</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Medium" size="md" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>md</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Large" size="lg" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>lg</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Extra Large" size="xl" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>xl</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="2X Large" size="2xl" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>2xl</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Avatars are available in six sizes: xs, sm, md (default), lg, xl, and 2xl.'
      }
    }
  }
}`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var _,J,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Circle Avatar" variant="circle" size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>circle</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Rounded Avatar" variant="rounded" size="lg" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>rounded</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Square Avatar" variant="square" size="lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>square</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three shape variants are available: circle (default), rounded, and square.'
      }
    }
  }
}`,...(O=(J=d.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var L,N,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Online User" status="online" showStatus={true} size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>online</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Away User" status="away" showStatus={true} size="lg" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>away</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Busy User" status="busy" showStatus={true} size="lg" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>busy</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Offline User" status="offline" showStatus={true} size="lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>offline</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Status indicators can be displayed in the bottom-right corner to show user availability. Available statuses: online, away, busy, and offline.'
      }
    }
  }
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var M,G,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <UserAvatar name="Alice Brown" size="lg" />
      <UserAvatar name="Bob Chen" size="lg" />
      <UserAvatar name="Carol Davis" size="lg" />
      <UserAvatar name="David Evans" size="lg" />
      <UserAvatar name="Emma Foster" size="lg" />
      <UserAvatar name="Frank Garcia" size="lg" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, avatars automatically generate a consistent color based on the user\\'s name.'
      }
    }
  }
}`,...(R=(G=m.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var $,H,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <UserAvatar name="Custom Red" backgroundColor="#E65B77" textColor="#FFFFFF" size="lg" />
      <UserAvatar name="Custom Blue" backgroundColor="#4299E0" textColor="#FFFFFF" size="lg" />
      <UserAvatar name="Custom Green" backgroundColor="#3BA65E" textColor="#FFFFFF" size="lg" />
      <UserAvatar name="Custom Purple" backgroundColor="#8A63BF" textColor="#FFFFFF" size="lg" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Override the auto-generated colors with custom backgroundColor and textColor props.'
      }
    }
  }
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var Q,X,K;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    size: 'lg',
    clickable: true,
    onClick: () => alert('Avatar clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatars can be made clickable with hover effects and keyboard support. Set clickable={true} and provide an onClick handler.'
      }
    }
  }
}`,...(K=(X=f.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: 'Broken Image',
    src: 'https://invalid-image-url.jpg',
    size: 'lg',
    onError: () => console.log('Image failed to load')
  },
  parameters: {
    docs: {
      description: {
        story: 'When an image fails to load, the avatar gracefully falls back to displaying initials.'
      }
    }
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="A" size="lg" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Single letter</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="John" size="lg" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>One name</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="Jane Smith" size="lg" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Two names</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <UserAvatar name="John Michael Doe" size="lg" />
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Three names</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Initials are extracted from the name prop. The component handles single letters, one word, or multiple words, always displaying up to two letters.'
      }
    }
  }
}`,...(te=(se=g.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};const we=["Default","WithInitials","AllSizes","AllVariants","WithStatusIndicators","AutoGeneratedColors","CustomColors","InteractiveAvatar","ImageFallback","NameVariations"];export{c as AllSizes,d as AllVariants,m as AutoGeneratedColors,u as CustomColors,o as Default,x as ImageFallback,f as InteractiveAvatar,g as NameVariations,n as WithInitials,p as WithStatusIndicators,we as __namedExportsOrder,je as default};
