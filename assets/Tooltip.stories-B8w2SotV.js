import{a as p,j as t,F as lt}from"./jsx-runtime-D2eXtamC.js";import{r as s}from"./index-SE77F2UD.js";import{r as st}from"./index-Bkzk5JSy.js";import{c as ct}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-Ch83UTUf.js";import"./_commonjsHelpers-DM6icglO.js";const o=s.forwardRef(({content:d,children:y,placement:k="top",trigger:f="hover",open:g,showDelay:J=500,hideDelay:Q=0,disabled:v=!1,className:X,onOpenChange:c,maxWidth:Z=250,zIndex:tt=1700},b)=>{const[et,R]=s.useState(!1),[V,ot]=s.useState({top:0,left:0}),S=s.useRef(null),C=s.useRef(null),u=s.useRef(),m=s.useRef(),h=g!==void 0?g:et,_=f==="manual",M=()=>{if(!S.current||!C.current||!h)return;const e=S.current.getBoundingClientRect(),i=C.current.getBoundingClientRect(),H={width:window.innerWidth,height:window.innerHeight};let a=0,l=0;const r=8;switch(k){case"top":a=e.top-i.height-r,l=e.left+(e.width-i.width)/2;break;case"top-start":a=e.top-i.height-r,l=e.left;break;case"top-end":a=e.top-i.height-r,l=e.right-i.width;break;case"bottom":a=e.bottom+r,l=e.left+(e.width-i.width)/2;break;case"bottom-start":a=e.bottom+r,l=e.left;break;case"bottom-end":a=e.bottom+r,l=e.right-i.width;break;case"left":a=e.top+(e.height-i.height)/2,l=e.left-i.width-r;break;case"right":a=e.top+(e.height-i.height)/2,l=e.right+r;break}l=Math.max(r,Math.min(l,H.width-i.width-r)),a=Math.max(r,Math.min(a,H.height-i.height-r)),ot({top:a,left:l})},E=()=>{v||_||(m.current&&(clearTimeout(m.current),m.current=void 0),u.current=setTimeout(()=>{g===void 0&&R(!0),c==null||c(!0)},J))},N=()=>{v||_||(u.current&&(clearTimeout(u.current),u.current=void 0),m.current=setTimeout(()=>{g===void 0&&R(!1),c==null||c(!1)},Q))},nt=()=>{if(f!=="click"||v)return;const e=!h;g===void 0&&R(e),c==null||c(e)};s.useEffect(()=>{if(h){M();const e=()=>M(),i=()=>M();return window.addEventListener("resize",e),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",i)}}},[h,k]),s.useEffect(()=>()=>{u.current&&clearTimeout(u.current),m.current&&clearTimeout(m.current)},[]);const it=e=>{S.current=e,typeof b=="function"?b(e):b&&(b.current=e)},rt={...f==="hover"&&{onMouseEnter:E,onMouseLeave:N},...f==="focus"&&{onFocus:E,onBlur:N},...f==="click"&&{onClick:nt}},at=h&&!v?st.createPortal(p("div",{ref:C,className:ct("db-tooltip",`db-tooltip--${k}`,X),style:{position:"fixed",top:V.top,left:V.left,maxWidth:Z,zIndex:tt},role:"tooltip","aria-hidden":!h,children:[t("div",{className:"db-tooltip__content",children:d}),t("div",{className:"db-tooltip__arrow"})]}),document.body):null;return p(lt,{children:[t("div",{ref:it,className:"db-tooltip__trigger",...rt,children:y}),at]})});o.displayName="Tooltip";try{o.displayName="Tooltip",o.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"Content to display in the tooltip",name:"content",required:!0,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Element that triggers the tooltip",name:"children",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'}]}},trigger:{defaultValue:{value:"hover"},description:"How the tooltip is triggered",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"manual"'},{value:'"focus"'}]}},open:{defaultValue:null,description:"Whether tooltip is visible (for manual trigger)",name:"open",required:!1,type:{name:"boolean"}},showDelay:{defaultValue:{value:"500"},description:"Delay before showing tooltip (ms)",name:"showDelay",required:!1,type:{name:"number"}},hideDelay:{defaultValue:{value:"0"},description:"Delay before hiding tooltip (ms)",name:"hideDelay",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"Disable the tooltip",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Custom className for tooltip content",name:"className",required:!1,type:{name:"string"}},onOpenChange:{defaultValue:null,description:"Callback when tooltip visibility changes",name:"onOpenChange",required:!1,type:{name:"((_open: boolean) => void)"}},maxWidth:{defaultValue:{value:"250"},description:"Max width of tooltip",name:"maxWidth",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:{value:"1700"},description:"Custom z-index",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}const gt={title:"Overlays/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:`
Tooltip component provides contextual information when users hover, click, or focus on an element.

## Features
- Multiple placement options (8 positions)
- Various trigger methods (hover, click, focus, manual)
- Customizable delays for showing/hiding
- Rich content support
- Automatic viewport boundary detection
- Portal-based rendering for proper z-index layering

## Accessibility
- Uses \`role="tooltip"\` for screen readers
- Respects reduced motion preferences
- Keyboard accessible with focus trigger
        `}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content to display in the tooltip"},placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Tooltip placement relative to trigger element",table:{defaultValue:{summary:"top"}}},trigger:{control:{type:"select"},options:["hover","click","focus","manual"],description:"How the tooltip is triggered",table:{defaultValue:{summary:"hover"}}},showDelay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before showing tooltip (ms)",table:{defaultValue:{summary:"500"}}},hideDelay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before hiding tooltip (ms)",table:{defaultValue:{summary:"0"}}},disabled:{control:"boolean",description:"Disable the tooltip",table:{defaultValue:{summary:"false"}}},maxWidth:{control:{type:"number",min:100,max:500,step:10},description:"Maximum width of tooltip",table:{defaultValue:{summary:"250"}}}}},T={args:{content:"This is a helpful tooltip",children:t(n,{children:"Hover me"})}},w={render:()=>p("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",padding:"80px"},children:[t(o,{content:"Top start",placement:"top-start",children:t(n,{children:"Top Start"})}),t(o,{content:"Top center",placement:"top",children:t(n,{children:"Top"})}),t(o,{content:"Top end",placement:"top-end",children:t(n,{children:"Top End"})}),t(o,{content:"Left side",placement:"left",children:t(n,{children:"Left"})}),t("div",{})," ",t(o,{content:"Right side",placement:"right",children:t(n,{children:"Right"})}),t(o,{content:"Bottom start",placement:"bottom-start",children:t(n,{children:"Bottom Start"})}),t(o,{content:"Bottom center",placement:"bottom",children:t(n,{children:"Bottom"})}),t(o,{content:"Bottom end",placement:"bottom-end",children:t(n,{children:"Bottom End"})})]}),parameters:{docs:{description:{story:"Demonstrates all 8 available placement positions for the tooltip."}}}},x={render:()=>p("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t(o,{content:"Appears on hover (default)",trigger:"hover",children:t(n,{children:"Hover Me"})}),t(o,{content:"Appears on click",trigger:"click",children:t(n,{children:"Click Me"})}),t(o,{content:"Appears on focus",trigger:"focus",children:t(n,{children:"Focus Me"})})]}),parameters:{docs:{description:{story:"Tooltips can be triggered by hover (default), click, or focus events for different interaction patterns."}}}},B={render:()=>{const[d,y]=s.useState(!1);return t("div",{style:{padding:"40px"},children:t(o,{content:"This tooltip is manually controlled",trigger:"manual",open:d,onOpenChange:y,children:p(n,{onClick:()=>y(!d),children:[d?"Hide":"Show"," Tooltip"]})})})},parameters:{docs:{description:{story:"Use the `manual` trigger to control tooltip visibility programmatically with the `open` and `onOpenChange` props."}}}},D={render:()=>p("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"40px"},children:[p("div",{style:{display:"flex",gap:"20px"},children:[t(o,{content:"Shows immediately",showDelay:0,children:t(n,{children:"No Delay"})}),t(o,{content:"Shows after 1 second",showDelay:1e3,children:t(n,{children:"1s Show Delay"})}),t(o,{content:"Hides after 1 second",hideDelay:1e3,children:t(n,{children:"1s Hide Delay"})})]}),p("div",{style:{display:"flex",gap:"20px"},children:[t(o,{content:"This is a much longer tooltip content that demonstrates how the tooltip handles wrapping text and maintains proper spacing and readability even with multiple lines of text.",maxWidth:200,children:t(n,{children:"Long Content"})}),t(o,{content:p("div",{children:[t("strong",{children:"Rich Content"}),t("br",{}),"This tooltip contains ",t("em",{children:"formatted"})," text"]}),children:t(n,{children:"Rich Content"})}),t(o,{content:"You won't see this",disabled:!0,children:t(n,{disabled:!0,children:"Disabled"})})]})]}),parameters:{docs:{description:{story:"Customize tooltips with delays, max width, rich content, and disabled states."}}}};var q,z,L;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>
  }
}`,...(L=(z=T.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var W,A,P;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '80px'
  }}>
      <Tooltip content="Top start" placement="top-start">
        <Button>Top Start</Button>
      </Tooltip>
      <Tooltip content="Top center" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Top end" placement="top-end">
        <Button>Top End</Button>
      </Tooltip>
      
      <Tooltip content="Left side" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <div /> {/* Empty space for center */}
      <Tooltip content="Right side" placement="right">
        <Button>Right</Button>
      </Tooltip>
      
      <Tooltip content="Bottom start" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>
      <Tooltip content="Bottom center" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Bottom end" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all 8 available placement positions for the tooltip.'
      }
    }
  }
}`,...(P=(A=w.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var F,I,O;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    padding: '40px'
  }}>
      <Tooltip content="Appears on hover (default)" trigger="hover">
        <Button>Hover Me</Button>
      </Tooltip>
      <Tooltip content="Appears on click" trigger="click">
        <Button>Click Me</Button>
      </Tooltip>
      <Tooltip content="Appears on focus" trigger="focus">
        <Button>Focus Me</Button>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be triggered by hover (default), click, or focus events for different interaction patterns.'
      }
    }
  }
}`,...(O=(I=x.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,U,Y;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: '40px'
    }}>
        <Tooltip content="This tooltip is manually controlled" trigger="manual" open={open} onOpenChange={setOpen}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Hide' : 'Show'} Tooltip
          </Button>
        </Tooltip>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the \`manual\` trigger to control tooltip visibility programmatically with the \`open\` and \`onOpenChange\` props.'
      }
    }
  }
}`,...(Y=(U=B.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var K,$,G;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '40px'
  }}>
      <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <Tooltip content="Shows immediately" showDelay={0}>
          <Button>No Delay</Button>
        </Tooltip>
        <Tooltip content="Shows after 1 second" showDelay={1000}>
          <Button>1s Show Delay</Button>
        </Tooltip>
        <Tooltip content="Hides after 1 second" hideDelay={1000}>
          <Button>1s Hide Delay</Button>
        </Tooltip>
      </div>
      
      <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <Tooltip content="This is a much longer tooltip content that demonstrates how the tooltip handles wrapping text and maintains proper spacing and readability even with multiple lines of text." maxWidth={200}>
          <Button>Long Content</Button>
        </Tooltip>
        
        <Tooltip content={<div>
              <strong>Rich Content</strong>
              <br />
              This tooltip contains <em>formatted</em> text
            </div>}>
          <Button>Rich Content</Button>
        </Tooltip>
        
        <Tooltip content="You won't see this" disabled>
          <Button disabled>Disabled</Button>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Customize tooltips with delays, max width, rich content, and disabled states.'
      }
    }
  }
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const yt=["Default","Placements","TriggerMethods","ManualControl","WithCustomization"];export{T as Default,B as ManualControl,w as Placements,x as TriggerMethods,D as WithCustomization,yt as __namedExportsOrder,gt as default};
