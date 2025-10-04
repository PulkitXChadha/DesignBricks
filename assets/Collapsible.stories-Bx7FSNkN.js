import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as l}from"./index-CWnxZbJP.js";import{c as T}from"./clsx-B-dksMZM.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const je=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.917 8 6 5.053 7.042 4 11 8l-3.958 4L6 10.947z",fill:"currentColor"})}),i=l.forwardRef(({trigger:n,children:a,defaultOpen:de=!1,open:C,onOpenChange:S,disabled:w=!1,chevronIcon:pe=e.jsx(je,{}),showChevron:ce=!0,size:ue="medium",variant:xe="default",animationDuration:o=200,className:me,...ge},he)=>{const[ve,be]=l.useState(de),[d,p]=l.useState(!1),[fe,r]=l.useState("auto"),z=l.useRef(null),t=C!==void 0?C:ve,B=()=>{if(w)return;const s=!t;C===void 0&&be(s),S==null||S(s)},ye=s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),B())};return l.useEffect(()=>{if(!z.current)return;const s=z.current,F=s.scrollHeight;if(t){p(!0),r(0),s.offsetHeight,r(F);const D=setTimeout(()=>{r("auto"),p(!1)},o);return()=>clearTimeout(D)}else{p(!0),r(F),s.offsetHeight,r(0);const D=setTimeout(()=>{p(!1)},o);return()=>clearTimeout(D)}},[t,o]),e.jsxs("div",{ref:he,className:T("db-collapsible",`db-collapsible--${ue}`,`db-collapsible--${xe}`,{"db-collapsible--open":t,"db-collapsible--disabled":w,"db-collapsible--animating":d},me),...ge,children:[e.jsxs("button",{type:"button",className:"db-collapsible__trigger",onClick:B,onKeyDown:ye,disabled:w,"aria-expanded":t,"aria-controls":`collapsible-content-${Math.random().toString(36).substr(2,9)}`,children:[e.jsx("div",{className:"db-collapsible__trigger-content",children:n}),ce&&e.jsx("div",{className:T("db-collapsible__chevron",{"db-collapsible__chevron--rotated":t}),children:pe})]}),e.jsx("div",{ref:z,className:T("db-collapsible__content",{"db-collapsible__content--open":t}),style:{height:d||!t?fe:"auto",overflow:d?"hidden":"visible",transition:d?`height ${o}ms cubic-bezier(0.4, 0, 0.2, 1)`:"none"},"aria-hidden":!t,children:e.jsx("div",{className:"db-collapsible__content-inner",children:a})})]})});i.displayName="Collapsible";i.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{trigger:{required:!0,tsType:{name:"ReactNode"},description:"Trigger element (usually title/header)"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content to show/hide"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether initially open",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"_open"}],return:{name:"void"}}},description:"Open state change handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether disabled",defaultValue:{value:"false",computed:!1}},chevronIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom chevron icon",defaultValue:{value:"<ChevronIcon />",computed:!1}},showChevron:{required:!1,tsType:{name:"boolean"},description:"Whether to show chevron icon",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'ghost' | 'bordered'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'bordered'"}]},description:"Trigger styling variant",defaultValue:{value:"'default'",computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in ms",defaultValue:{value:"200",computed:!1}}},composes:["Omit"]};const Re={title:"Navigation/Collapsible",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},variant:{control:{type:"select"},options:["default","ghost","bordered"]},defaultOpen:{control:"boolean"},disabled:{control:"boolean"},showChevron:{control:"boolean"},animationDuration:{control:"number"}}},Ce=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("circle",{cx:"8",cy:"8",r:"2"})}),Se=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),we=e.jsxs("div",{style:{padding:"8px 0"},children:[e.jsx("div",{style:{marginBottom:"8px"},children:e.jsx("a",{href:"/sql-editor",style:{display:"block",padding:"4px 0",color:"#2272B4",textDecoration:"none"},children:"SQL Editor"})}),e.jsx("div",{style:{marginBottom:"8px"},children:e.jsx("a",{href:"/queries",style:{display:"block",padding:"4px 0",color:"#2272B4",textDecoration:"none"},children:"Queries"})}),e.jsx("div",{style:{marginBottom:"8px"},children:e.jsx("a",{href:"/dashboards",style:{display:"block",padding:"4px 0",color:"#2272B4",textDecoration:"none"},children:"Dashboards"})}),e.jsx("div",{children:e.jsx("a",{href:"/alerts",style:{display:"block",padding:"4px 0",color:"#2272B4",textDecoration:"none"},children:"Alerts"})})]}),c={args:{trigger:"Click to expand",children:e.jsxs("div",{style:{padding:"12px 0"},children:[e.jsx("p",{children:"This is the collapsible content. It can contain any React elements."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})}},u={render:()=>e.jsx("div",{style:{width:"250px"},children:e.jsx(i,{trigger:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ce,{}),e.jsx("span",{children:"SQL"})]}),defaultOpen:!0,children:we})})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(i,{trigger:"Small Size",size:"small",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Small collapsible content"})}),e.jsx(i,{trigger:"Medium Size (Default)",size:"medium",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Medium collapsible content"})}),e.jsx(i,{trigger:"Large Size",size:"large",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Large collapsible content"})})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(i,{trigger:"Default Variant",variant:"default",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Default styled collapsible"})}),e.jsx(i,{trigger:"Ghost Variant",variant:"ghost",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Ghost styled collapsible (minimal styling)"})}),e.jsx(i,{trigger:"Bordered Variant",variant:"bordered",defaultOpen:!0,children:e.jsx("div",{style:{padding:"8px 0"},children:"Bordered collapsible with container styling"})})]})},ze=()=>{const[n,a]=l.useState(!1);return e.jsxs("div",{style:{width:"300px"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsxs("button",{onClick:()=>a(!n),children:[n?"Close":"Open"," Collapsible"]}),e.jsxs("span",{style:{marginLeft:"12px",fontSize:"14px",color:"#6B7280"},children:["State: ",n?"Open":"Closed"]})]}),e.jsx(i,{trigger:"Controlled Collapsible",open:n,onOpenChange:a,children:e.jsxs("div",{style:{padding:"12px 0"},children:["This collapsible is controlled by external state.",e.jsx("br",{}),"The button above controls its open/closed state."]})})]})},g={render:()=>e.jsx(ze,{})},h={args:{trigger:"Collapsible without chevron icon",showChevron:!1,children:e.jsx("div",{style:{padding:"12px 0"},children:"This collapsible doesn't show a chevron icon."})}},v={args:{trigger:"Custom chevron icon",chevronIcon:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8 8.917 10.947 6 12 7.042 8 11 4 7.042 5.053 6z",clipRule:"evenodd"})}),children:e.jsx("div",{style:{padding:"12px 0"},children:"This collapsible uses a custom chevron (down arrow instead of right arrow)."})}},b={args:{trigger:"Disabled Collapsible",disabled:!0,children:e.jsx("div",{style:{padding:"12px 0"},children:"This content cannot be accessed because the collapsible is disabled."})}},f={args:{trigger:"Slow Animation (1000ms)",animationDuration:1e3,children:e.jsxs("div",{style:{padding:"12px 0"},children:["This collapsible has a slower animation duration for demonstration purposes.",e.jsx("br",{}),"The animation takes 1 second to complete."]})}},y={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(i,{trigger:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Se,{}),e.jsx("span",{children:"User Management"})]}),variant:"bordered",size:"large",children:e.jsxs("div",{style:{padding:"16px 0"},children:[e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:"Recent Users"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("div",{style:{padding:"4px 0",fontSize:"13px"},children:"John Doe (john@example.com)"}),e.jsx("div",{style:{padding:"4px 0",fontSize:"13px"},children:"Jane Smith (jane@example.com)"}),e.jsx("div",{style:{padding:"4px 0",fontSize:"13px"},children:"Bob Johnson (bob@example.com)"})]})]}),e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"},children:"Actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF"},children:"Add User"}),e.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF"},children:"Manage Permissions"})]})]}),e.jsx("div",{style:{padding:"8px",backgroundColor:"#F6F7F9",borderRadius:"4px",fontSize:"12px",color:"#6B7280"},children:"💡 Tip: Use keyboard shortcuts Ctrl+U to quickly add users"})]})})})},j={render:()=>e.jsx("div",{style:{width:"350px"},children:e.jsx(i,{trigger:"Level 1 - Main Section",variant:"bordered",defaultOpen:!0,children:e.jsxs("div",{style:{padding:"8px 0"},children:[e.jsx("div",{style:{marginBottom:"8px"},children:"Some content at level 1"}),e.jsx(i,{trigger:"Level 2 - Subsection A",size:"small",defaultOpen:!1,children:e.jsxs("div",{style:{padding:"8px 0",fontSize:"12px"},children:["Content inside subsection A",e.jsx("br",{}),"This is nested inside the main section."]})}),e.jsx(i,{trigger:"Level 2 - Subsection B",size:"small",defaultOpen:!1,children:e.jsxs("div",{style:{padding:"8px 0",fontSize:"12px"},children:["Content inside subsection B",e.jsx("br",{}),"Another nested collapsible section."]})})]})})})};var O,R,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    trigger: 'Click to expand',
    children: <div style={{
      padding: '12px 0'
    }}>
        <p>This is the collapsible content. It can contain any React elements.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var _,I,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px'
  }}>
      <Collapsible trigger={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <SQLIcon />
            <span>SQL</span>
          </div>} defaultOpen={true}>
        {sampleContent}
      </Collapsible>
    </div>
}`,...(L=(I=u.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var A,E,N;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <Collapsible trigger="Small Size" size="small" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Small collapsible content</div>
      </Collapsible>
      
      <Collapsible trigger="Medium Size (Default)" size="medium" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Medium collapsible content</div>
      </Collapsible>
      
      <Collapsible trigger="Large Size" size="large" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Large collapsible content</div>
      </Collapsible>
    </div>
}`,...(N=(E=x.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var q,M,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>
      <Collapsible trigger="Default Variant" variant="default" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Default styled collapsible</div>
      </Collapsible>
      
      <Collapsible trigger="Ghost Variant" variant="ghost" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Ghost styled collapsible (minimal styling)</div>
      </Collapsible>
      
      <Collapsible trigger="Bordered Variant" variant="bordered" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>Bordered collapsible with container styling</div>
      </Collapsible>
    </div>
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,H,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ControlledStateComponent />
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,W,G;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    trigger: 'Collapsible without chevron icon',
    showChevron: false,
    children: <div style={{
      padding: '12px 0'
    }}>
        This collapsible doesn&apos;t show a chevron icon.
      </div>
  }
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var $,K,P;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    trigger: 'Custom chevron icon',
    chevronIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path fillRule="evenodd" d="M8 8.917 10.947 6 12 7.042 8 11 4 7.042 5.053 6z" clipRule="evenodd" />
      </svg>,
    children: <div style={{
      padding: '12px 0'
    }}>
        This collapsible uses a custom chevron (down arrow instead of right arrow).
      </div>
  }
}`,...(P=(K=v.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    trigger: 'Disabled Collapsible',
    disabled: true,
    children: <div style={{
      padding: '12px 0'
    }}>
        This content cannot be accessed because the collapsible is disabled.
      </div>
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ie,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    trigger: 'Slow Animation (1000ms)',
    animationDuration: 1000,
    children: <div style={{
      padding: '12px 0'
    }}>
        This collapsible has a slower animation duration for demonstration purposes.
        <br />
        The animation takes 1 second to complete.
      </div>
  }
}`,...(se=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var te,le,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Collapsible trigger={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <UserIcon />
            <span>User Management</span>
          </div>} variant="bordered" size="large">
        <div style={{
        padding: '16px 0'
      }}>
          <div style={{
          marginBottom: '12px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px'
          }}>Recent Users</h4>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
              <div style={{
              padding: '4px 0',
              fontSize: '13px'
            }}>John Doe (john@example.com)</div>
              <div style={{
              padding: '4px 0',
              fontSize: '13px'
            }}>Jane Smith (jane@example.com)</div>
              <div style={{
              padding: '4px 0',
              fontSize: '13px'
            }}>Bob Johnson (bob@example.com)</div>
            </div>
          </div>
          
          <div style={{
          marginBottom: '12px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px'
          }}>Actions</h4>
            <div style={{
            display: 'flex',
            gap: '8px'
          }}>
              <button style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid #DDE0E5',
              borderRadius: '4px',
              background: '#FFFFFF'
            }}>
                Add User
              </button>
              <button style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid #DDE0E5',
              borderRadius: '4px',
              background: '#FFFFFF'
            }}>
                Manage Permissions
              </button>
            </div>
          </div>
          
          <div style={{
          padding: '8px',
          backgroundColor: '#F6F7F9',
          borderRadius: '4px',
          fontSize: '12px',
          color: '#6B7280'
        }}>
            💡 Tip: Use keyboard shortcuts Ctrl+U to quickly add users
          </div>
        </div>
      </Collapsible>
    </div>
}`,...(ne=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,ae,oe;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '350px'
  }}>
      <Collapsible trigger="Level 1 - Main Section" variant="bordered" defaultOpen={true}>
        <div style={{
        padding: '8px 0'
      }}>
          <div style={{
          marginBottom: '8px'
        }}>Some content at level 1</div>
          
          <Collapsible trigger="Level 2 - Subsection A" size="small" defaultOpen={false}>
            <div style={{
            padding: '8px 0',
            fontSize: '12px'
          }}>
              Content inside subsection A
              <br />
              This is nested inside the main section.
            </div>
          </Collapsible>
          
          <Collapsible trigger="Level 2 - Subsection B" size="small" defaultOpen={false}>
            <div style={{
            padding: '8px 0',
            fontSize: '12px'
          }}>
              Content inside subsection B
              <br />
              Another nested collapsible section.
            </div>
          </Collapsible>
        </div>
      </Collapsible>
    </div>
}`,...(oe=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const ke=["Default","NavigationExample","Sizes","Variants","ControlledState","WithoutChevron","CustomChevron","Disabled","SlowAnimation","ComplexContent","NestedCollapsibles"];export{y as ComplexContent,g as ControlledState,v as CustomChevron,c as Default,b as Disabled,u as NavigationExample,j as NestedCollapsibles,x as Sizes,f as SlowAnimation,m as Variants,h as WithoutChevron,ke as __namedExportsOrder,Re as default};
