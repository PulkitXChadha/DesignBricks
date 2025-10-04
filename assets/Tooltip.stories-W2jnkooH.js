import{j as t}from"./jsx-runtime-LnmZrwv1.js";import{r as l}from"./index-CWnxZbJP.js";import{r as st}from"./index-BCUrj1sd.js";import{c as at}from"./clsx-B-dksMZM.js";import{B as n}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Dgl0PtG8.js";const o=l.forwardRef(({content:m,children:g,placement:x="top",trigger:h="hover",open:f,showDelay:J=500,hideDelay:Q=0,disabled:y=!1,className:X,onOpenChange:c,maxWidth:Z=250,zIndex:O=1700},v)=>{const[tt,k]=l.useState(!1),[M,et]=l.useState({top:0,left:0}),R=l.useRef(null),C=l.useRef(null),d=l.useRef(),u=l.useRef(),p=f!==void 0?f:tt,S=h==="manual",b=l.useCallback(()=>{if(!R.current||!C.current||!p)return;const e=R.current.getBoundingClientRect(),i=C.current.getBoundingClientRect(),q={width:window.innerWidth,height:window.innerHeight};let s=0,a=0;const r=8;switch(x){case"top":s=e.top-i.height-r,a=e.left+(e.width-i.width)/2;break;case"top-start":s=e.top-i.height-r,a=e.left;break;case"top-end":s=e.top-i.height-r,a=e.right-i.width;break;case"bottom":s=e.bottom+r,a=e.left+(e.width-i.width)/2;break;case"bottom-start":s=e.bottom+r,a=e.left;break;case"bottom-end":s=e.bottom+r,a=e.right-i.width;break;case"left":s=e.top+(e.height-i.height)/2,a=e.left-i.width-r;break;case"right":s=e.top+(e.height-i.height)/2,a=e.right+r;break}a=Math.max(r,Math.min(a,q.width-i.width-r)),s=Math.max(r,Math.min(s,q.height-i.height-r)),et({top:s,left:a})},[p,x]),E=()=>{y||S||(u.current&&(clearTimeout(u.current),u.current=void 0),d.current=setTimeout(()=>{f===void 0&&k(!0),c==null||c(!0)},J))},V=()=>{y||S||(d.current&&(clearTimeout(d.current),d.current=void 0),u.current=setTimeout(()=>{f===void 0&&k(!1),c==null||c(!1)},Q))},ot=()=>{if(h!=="click"||y)return;const e=!p;f===void 0&&k(e),c==null||c(e)};l.useEffect(()=>{if(p){b();const e=()=>b(),i=()=>b();return window.addEventListener("resize",e),window.addEventListener("scroll",i),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",i)}}},[p,x,b]),l.useEffect(()=>()=>{d.current&&clearTimeout(d.current),u.current&&clearTimeout(u.current)},[]);const nt=e=>{R.current=e,typeof v=="function"?v(e):v&&(v.current=e)},it={...h==="hover"&&{onMouseEnter:E,onMouseLeave:V},...h==="focus"&&{onFocus:E,onBlur:V},...h==="click"&&{onClick:ot}},rt=p&&!y?st.createPortal(t.jsxs("div",{ref:C,className:at("db-tooltip",`db-tooltip--${x}`,X),style:{position:"fixed",top:M.top,left:M.left,maxWidth:Z,zIndex:O},role:"tooltip","aria-hidden":!p,children:[t.jsx("div",{className:"db-tooltip__content",children:m}),t.jsx("div",{className:"db-tooltip__arrow"})]}),document.body):null;return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:nt,className:"db-tooltip__trigger",...it,children:g}),rt]})});o.displayName="Tooltip";o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Content to display in the tooltip"},children:{required:!0,tsType:{name:"ReactNode"},description:"Element that triggers the tooltip"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"Tooltip placement",defaultValue:{value:"'top'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'hover' | 'click' | 'focus' | 'manual'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'manual'"}]},description:"How the tooltip is triggered",defaultValue:{value:"'hover'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Whether tooltip is visible (for manual trigger)"},showDelay:{required:!1,tsType:{name:"number"},description:"Delay before showing tooltip (ms)",defaultValue:{value:"500",computed:!1}},hideDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding tooltip (ms)",defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the tooltip",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for tooltip content"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"_open"}],return:{name:"void"}}},description:"Callback when tooltip visibility changes"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Max width of tooltip",defaultValue:{value:"250",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Custom z-index",defaultValue:{value:"1700",computed:!1}}}};const xt={title:"Overlays/Tooltip",component:o,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content to display in the tooltip"},placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Tooltip placement relative to trigger element",table:{defaultValue:{summary:"top"}}},trigger:{control:{type:"select"},options:["hover","click","focus","manual"],description:"How the tooltip is triggered",table:{defaultValue:{summary:"hover"}}},showDelay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before showing tooltip (ms)",table:{defaultValue:{summary:"500"}}},hideDelay:{control:{type:"number",min:0,max:2e3,step:100},description:"Delay before hiding tooltip (ms)",table:{defaultValue:{summary:"0"}}},disabled:{control:"boolean",description:"Disable the tooltip",table:{defaultValue:{summary:"false"}}},maxWidth:{control:{type:"number",min:100,max:500,step:10},description:"Maximum width of tooltip",table:{defaultValue:{summary:"250"}}}}},T={args:{content:"This is a helpful tooltip",children:t.jsx(n,{children:"Hover me"})}},w={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"20px",padding:"80px"},children:[t.jsx(o,{content:"Top start",placement:"top-start",children:t.jsx(n,{children:"Top Start"})}),t.jsx(o,{content:"Top center",placement:"top",children:t.jsx(n,{children:"Top"})}),t.jsx(o,{content:"Top end",placement:"top-end",children:t.jsx(n,{children:"Top End"})}),t.jsx(o,{content:"Left side",placement:"left",children:t.jsx(n,{children:"Left"})}),t.jsx("div",{})," ",t.jsx(o,{content:"Right side",placement:"right",children:t.jsx(n,{children:"Right"})}),t.jsx(o,{content:"Bottom start",placement:"bottom-start",children:t.jsx(n,{children:"Bottom Start"})}),t.jsx(o,{content:"Bottom center",placement:"bottom",children:t.jsx(n,{children:"Bottom"})}),t.jsx(o,{content:"Bottom end",placement:"bottom-end",children:t.jsx(n,{children:"Bottom End"})})]}),parameters:{docs:{description:{story:"Demonstrates all 8 available placement positions for the tooltip."}}}},j={render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"40px"},children:[t.jsx(o,{content:"Appears on hover (default)",trigger:"hover",children:t.jsx(n,{children:"Hover Me"})}),t.jsx(o,{content:"Appears on click",trigger:"click",children:t.jsx(n,{children:"Click Me"})}),t.jsx(o,{content:"Appears on focus",trigger:"focus",children:t.jsx(n,{children:"Focus Me"})})]}),parameters:{docs:{description:{story:"Tooltips can be triggered by hover (default), click, or focus events for different interaction patterns."}}}},lt=()=>{const[m,g]=l.useState(!1);return t.jsx("div",{style:{padding:"40px"},children:t.jsx(o,{content:"This tooltip is manually controlled",trigger:"manual",open:m,onOpenChange:g,children:t.jsxs(n,{onClick:()=>g(!m),children:[m?"Hide":"Show"," Tooltip"]})})})},B={render:()=>t.jsx(lt,{}),parameters:{docs:{description:{story:"Use the `manual` trigger to control tooltip visibility programmatically with the `open` and `onOpenChange` props."}}}},D={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"40px"},children:[t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(o,{content:"Shows immediately",showDelay:0,children:t.jsx(n,{children:"No Delay"})}),t.jsx(o,{content:"Shows after 1 second",showDelay:1e3,children:t.jsx(n,{children:"1s Show Delay"})}),t.jsx(o,{content:"Hides after 1 second",hideDelay:1e3,children:t.jsx(n,{children:"1s Hide Delay"})})]}),t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(o,{content:"This is a much longer tooltip content that demonstrates how the tooltip handles wrapping text and maintains proper spacing and readability even with multiple lines of text.",maxWidth:200,children:t.jsx(n,{children:"Long Content"})}),t.jsx(o,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"Rich Content"}),t.jsx("br",{}),"This tooltip contains ",t.jsx("em",{children:"formatted"})," text"]}),children:t.jsx(n,{children:"Rich Content"})}),t.jsx(o,{content:"You won't see this",disabled:!0,children:t.jsx(n,{disabled:!0,children:"Disabled"})})]})]}),parameters:{docs:{description:{story:"Customize tooltips with delays, max width, rich content, and disabled states."}}}};var H,N,_;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>
  }
}`,...(_=(N=T.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,L,A;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(L=w.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var W,P,F;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=(P=j.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var I,U,Y;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ManualControlComponent />,
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
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const yt=["Default","Placements","TriggerMethods","ManualControl","WithCustomization"];export{T as Default,B as ManualControl,w as Placements,j as TriggerMethods,D as WithCustomization,yt as __namedExportsOrder,xt as default};
