import{j as e,a as n}from"./jsx-runtime-D2eXtamC.js";import{r as z}from"./index-SE77F2UD.js";import{c as S}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const ye=t=>t.split(" ").map(s=>s.charAt(0)).join("").toUpperCase().substring(0,2),ve=t=>{const s=["#4299E0","#8A63BF","#B45091","#C83243","#A6630C","#04867D","#3BA65E","#DE7921","#E65B77","#434A93","#137DAE","#308613"];let r=0;for(let l=0;l<t.length;l++)r=t.charCodeAt(l)+((r<<5)-r);return s[Math.abs(r)%s.length]},a=z.forwardRef(({name:t,src:s,size:r="md",variant:l="circle",status:y,showStatus:re=!1,backgroundColor:le,textColor:ie="#FFFFFF",onError:v,clickable:i=!1,onClick:A,alt:oe,className:ce,...de},pe)=>{const[w,F]=z.useState(!1),[I,me]=z.useState(!1),ue=()=>{F(!0),v==null||v()},fe=()=>{me(!0),F(!1)},C=()=>{i&&A&&A()},ge=ye(t),xe=le||ve(t),he=s&&!w&&I,D=re&&y;return e("div",{ref:pe,className:S("db-avatar",`db-avatar--${r}`,`db-avatar--${l}`,{"db-avatar--clickable":i,"db-avatar--with-status":D},ce),onClick:C,role:i?"button":void 0,tabIndex:i?0:void 0,onKeyDown:i?b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),C())}:void 0,...de,children:n("div",{className:"db-avatar__container",children:[s&&!w&&e("img",{src:s,alt:oe||`${t}'s avatar`,className:S("db-avatar__image",{"db-avatar__image--loaded":I}),onError:ue,onLoad:fe,loading:"lazy"}),!he&&e("div",{className:"db-avatar__fallback",style:{backgroundColor:xe,color:ie},"aria-label":`${t}'s avatar`,children:e("span",{className:"db-avatar__initials",children:ge})}),D&&e("div",{className:S("db-avatar__status",`db-avatar__status--${y}`),"aria-label":`Status: ${y}`})]})})});a.displayName="UserAvatar";try{a.displayName="UserAvatar",a.__docgenInfo={description:"",displayName:"UserAvatar",props:{name:{defaultValue:null,description:"User's name - used for initials fallback",name:"name",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"Avatar image source",name:"src",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"Avatar size",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xs"'},{value:'"2xl"'}]}},variant:{defaultValue:{value:"circle"},description:"Avatar variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'},{value:'"rounded"'}]}},status:{defaultValue:null,description:"Status indicator",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},showStatus:{defaultValue:{value:"false"},description:"Whether to show status indicator",name:"showStatus",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"Custom background color",name:"backgroundColor",required:!1,type:{name:"string"}},textColor:{defaultValue:{value:"#FFFFFF"},description:"Custom text color",name:"textColor",required:!1,type:{name:"string"}},onError:{defaultValue:null,description:"Image loading error handler",name:"onError",required:!1,type:{name:"(() => void)"}},clickable:{defaultValue:{value:"false"},description:"Whether avatar is clickable",name:"clickable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(() => void)"}},alt:{defaultValue:null,description:"Alt text for image",name:"alt",required:!1,type:{name:"string"}}}}}catch{}const we={title:"Foundation/UserAvatar",component:a,parameters:{layout:"centered",docs:{description:{component:"Displays user profile images with fallback to initials. Supports various sizes, shapes, and status indicators."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},variant:{control:{type:"select"},options:["circle","rounded","square"],description:"Shape variant of the avatar"},status:{control:{type:"select"},options:["online","offline","away","busy"],description:"Status indicator type"},showStatus:{control:"boolean",description:"Whether to display status indicator"},clickable:{control:"boolean",description:"Whether the avatar is clickable"},backgroundColor:{control:"color",description:"Custom background color for initials"},textColor:{control:"color",description:"Custom text color for initials"}}},o={args:{name:"John Doe",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}},c={args:{name:"Jane Smith"},parameters:{docs:{description:{story:"When no image is provided, the avatar displays initials with an auto-generated background color."}}}},d={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Extra Small",size:"xs"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"xs"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Small",size:"sm"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"sm"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Medium",size:"md"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"md"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Large",size:"lg"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"lg"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Extra Large",size:"xl"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"xl"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"2X Large",size:"2xl"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"2xl"})]})]}),parameters:{docs:{description:{story:"Avatars are available in six sizes: xs, sm, md (default), lg, xl, and 2xl."}}}},p={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Circle Avatar",variant:"circle",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"circle"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Rounded Avatar",variant:"rounded",size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"rounded"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Square Avatar",variant:"square",size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"square"})]})]}),parameters:{docs:{description:{story:"Three shape variants are available: circle (default), rounded, and square."}}}},m={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"24px",flexWrap:"wrap"},children:[n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Online User",status:"online",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"online"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Away User",status:"away",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"away"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Busy User",status:"busy",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"busy"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Offline User",status:"offline",showStatus:!0,size:"lg",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"offline"})]})]}),parameters:{docs:{description:{story:"Status indicators can be displayed in the bottom-right corner to show user availability. Available statuses: online, away, busy, and offline."}}}},u={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e(a,{name:"Alice Brown",size:"lg"}),e(a,{name:"Bob Chen",size:"lg"}),e(a,{name:"Carol Davis",size:"lg"}),e(a,{name:"David Evans",size:"lg"}),e(a,{name:"Emma Foster",size:"lg"}),e(a,{name:"Frank Garcia",size:"lg"})]}),parameters:{docs:{description:{story:"When no image is provided, avatars automatically generate a consistent color based on the user's name."}}}},f={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e(a,{name:"Custom Red",backgroundColor:"#E65B77",textColor:"#FFFFFF",size:"lg"}),e(a,{name:"Custom Blue",backgroundColor:"#4299E0",textColor:"#FFFFFF",size:"lg"}),e(a,{name:"Custom Green",backgroundColor:"#3BA65E",textColor:"#FFFFFF",size:"lg"}),e(a,{name:"Custom Purple",backgroundColor:"#8A63BF",textColor:"#FFFFFF",size:"lg"})]}),parameters:{docs:{description:{story:"Override the auto-generated colors with custom backgroundColor and textColor props."}}}},g={args:{name:"John Doe",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",size:"lg",clickable:!0,onClick:()=>alert("Avatar clicked!")},parameters:{docs:{description:{story:"Avatars can be made clickable with hover effects and keyboard support. Set clickable={true} and provide an onClick handler."}}}},x={args:{name:"Broken Image",src:"https://invalid-image-url.jpg",size:"lg",onError:()=>console.log("Image failed to load")},parameters:{docs:{description:{story:"When an image fails to load, the avatar gracefully falls back to displaying initials."}}}},h={render:()=>n("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"A",size:"lg"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"Single letter"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"John",size:"lg"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"One name"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"Jane Smith",size:"lg"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"Two names"})]}),n("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e(a,{name:"John Michael Doe",size:"lg"}),e("span",{style:{fontSize:"12px",color:"#666"},children:"Three names"})]})]}),parameters:{docs:{description:{story:"Initials are extracted from the name prop. The component handles single letters, one word, or multiple words, always displaying up to two letters."}}}};var k,U,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
}`,...(q=(U=o.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var E,W,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var B,V,J;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(J=(V=d.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var N,O,L;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(O=p.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var T,j,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var G,$,R;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=($=u.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var H,P,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(Q=(P=f.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,K,Y;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Y=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Fe=["Default","WithInitials","AllSizes","AllVariants","WithStatusIndicators","AutoGeneratedColors","CustomColors","InteractiveAvatar","ImageFallback","NameVariations"];export{d as AllSizes,p as AllVariants,u as AutoGeneratedColors,f as CustomColors,o as Default,x as ImageFallback,g as InteractiveAvatar,h as NameVariations,c as WithInitials,m as WithStatusIndicators,Fe as __namedExportsOrder,we as default};
