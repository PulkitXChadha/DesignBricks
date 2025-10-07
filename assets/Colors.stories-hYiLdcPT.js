import{a as n,j as e}from"./jsx-runtime-D2eXtamC.js";import{C as r}from"./Colors-D1YDdYlB.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./colors-DQqI5H06.js";const k={title:"Foundation/Colors",component:r,parameters:{layout:"padded",docs:{description:{component:"The official Databricks Design System color palette with primary blue, semantic colors (success green, warning yellow, error red), and secondary accent colors."}}},tags:["autodocs"],argTypes:{category:{control:"select",options:["primary","secondary","neutral","success","warning","error","info","brown","coral","indigo","lemon","lime","pink","purple","teal","turquoise"],description:"Category of colors to display"},showHex:{control:"boolean",description:"Whether to show hex values for each color",table:{defaultValue:{summary:!0}}},showAll:{control:"boolean",description:"Whether to show all color categories",table:{defaultValue:{summary:!1}}}},args:{showHex:!0,showAll:!1}},o={args:{showAll:!0,showHex:!0},parameters:{docs:{description:{story:"Complete Databricks design system color palette showing all primary, semantic, and secondary color categories."}}}},t={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",fontWeight:600},children:"Primary Brand Colors"}),e("p",{style:{margin:"0 0 2rem 0",color:"#5F7281",fontSize:"0.875rem"},children:"Core brand colors with full shade ranges. Primary Blue (#4299E0) and Secondary Teal (#04867D) are the main brand colors."})]}),n("div",{style:{display:"flex",gap:"1rem",marginBottom:"2rem"},children:[n("div",{style:{textAlign:"center"},children:[e("div",{style:{width:"120px",height:"120px",backgroundColor:"#4299E0",borderRadius:"8px",border:"1px solid #E8ECF0",marginBottom:"0.5rem"}}),e("div",{style:{fontWeight:600,fontSize:"0.875rem"},children:"Primary Blue"}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#5F7281"},children:"#4299E0"})]}),n("div",{style:{textAlign:"center"},children:[e("div",{style:{width:"120px",height:"120px",backgroundColor:"#04867D",borderRadius:"8px",border:"1px solid #E8ECF0",marginBottom:"0.5rem"}}),e("div",{style:{fontWeight:600,fontSize:"0.875rem"},children:"Secondary Teal"}),e("div",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#5F7281"},children:"#04867D"})]})]}),e(r,{category:"primary",showHex:!0}),e(r,{category:"secondary",showHex:!0}),e(r,{category:"neutral",showHex:!0})]}),parameters:{docs:{description:{story:"Primary and secondary brand colors with their complete shade ranges, plus neutral grays for text, borders, and backgrounds."}}}},s={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",fontWeight:600},children:"Semantic Colors"}),e("p",{style:{margin:"0 0 2rem 0",color:"#5F7281",fontSize:"0.875rem"},children:"Colors used for feedback states and messages throughout the UI."})]}),n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[e(r,{category:"success",showHex:!0}),e(r,{category:"warning",showHex:!0}),e(r,{category:"error",showHex:!0}),e(r,{category:"info",showHex:!0})]})]}),parameters:{docs:{description:{story:"Semantic colors for success, warning, error, and info states used in alerts, notifications, and feedback messages."}}}},i={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",fontWeight:600},children:"Extended Color Palette"}),e("p",{style:{margin:"0 0 2rem 0",color:"#5F7281",fontSize:"0.875rem"},children:"Official secondary colors for tags, status badges, illustrations, and supplementary UI elements."})]}),n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[e(r,{category:"brown",showHex:!0}),e(r,{category:"coral",showHex:!0}),e(r,{category:"indigo",showHex:!0}),e(r,{category:"lemon",showHex:!0}),e(r,{category:"lime",showHex:!0}),e(r,{category:"pink",showHex:!0}),e(r,{category:"purple",showHex:!0}),e(r,{category:"teal",showHex:!0}),e(r,{category:"turquoise",showHex:!0})]})]}),parameters:{docs:{description:{story:"Official extended color palette for supplementary UI elements, status indicators, and creative accents."}}}},a={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:"800px"},children:[n("div",{children:[e("h3",{style:{margin:"0 0 1rem 0",fontSize:"1.125rem",fontWeight:600},children:"Color Usage Examples"}),e("p",{style:{margin:"0 0 2rem 0",color:"#5F6368",fontSize:"0.875rem"},children:"Examples of how to use the Databricks color palette in different UI contexts."})]}),n("div",{children:[e("h4",{style:{margin:"0 0 1rem 0",fontSize:"1rem",fontWeight:600},children:"Buttons"}),n("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e("button",{style:{backgroundColor:"#4299E0",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"Primary Button"}),e("button",{style:{backgroundColor:"transparent",color:"#4299E0",border:"1px solid #4299E0",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"Secondary Button"}),e("button",{style:{backgroundColor:"#04867D",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"Teal Button"}),e("button",{style:{backgroundColor:"#8A63BF",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"Purple Button"}),e("button",{style:{backgroundColor:"#3BA65E",color:"white",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},children:"Green Button"})]})]}),n("div",{children:[e("h4",{style:{margin:"0 0 1rem 0",fontSize:"1rem",fontWeight:600},children:"Alerts"}),n("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e("div",{style:{padding:"12px",backgroundColor:"#F3FCF6",border:"1px solid #3BA65E",borderRadius:"4px",color:"#115026"},children:"Success: Operation completed successfully"}),e("div",{style:{padding:"12px",backgroundColor:"#FFF9EB",border:"1px solid #DE7921",borderRadius:"4px",color:"#93320B"},children:"Warning: Please review your settings"}),e("div",{style:{padding:"12px",backgroundColor:"#FFF5F7",border:"1px solid #E65B77",borderRadius:"4px",color:"#9E102C"},children:"Error: Something went wrong"}),e("div",{style:{padding:"12px",backgroundColor:"#F0F8FF",border:"1px solid #4299E0",borderRadius:"4px",color:"#0E538B"},children:"Info: Here's some helpful information"})]})]})]}),parameters:{docs:{description:{story:"Practical examples showing how to apply the color palette in common UI patterns."}}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    showAll: true,
    showHex: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete Databricks design system color palette showing all primary, semantic, and secondary color categories.'
      }
    }
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontSize: '1.125rem',
        fontWeight: 600
      }}>
          Primary Brand Colors
        </h3>
        <p style={{
        margin: '0 0 2rem 0',
        color: '#5F7281',
        fontSize: '0.875rem'
      }}>
          Core brand colors with full shade ranges. Primary Blue (#4299E0) and Secondary Teal (#04867D) are the main brand colors.
        </p>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
        <div style={{
        textAlign: 'center'
      }}>
          <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#4299E0',
          borderRadius: '8px',
          border: '1px solid #E8ECF0',
          marginBottom: '0.5rem'
        }} />
          <div style={{
          fontWeight: 600,
          fontSize: '0.875rem'
        }}>Primary Blue</div>
          <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#5F7281'
        }}>#4299E0</div>
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <div style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#04867D',
          borderRadius: '8px',
          border: '1px solid #E8ECF0',
          marginBottom: '0.5rem'
        }} />
          <div style={{
          fontWeight: 600,
          fontSize: '0.875rem'
        }}>Secondary Teal</div>
          <div style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#5F7281'
        }}>#04867D</div>
        </div>
      </div>
      <Colors category="primary" showHex={true} />
      <Colors category="secondary" showHex={true} />
      <Colors category="neutral" showHex={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Primary and secondary brand colors with their complete shade ranges, plus neutral grays for text, borders, and backgrounds.'
      }
    }
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontSize: '1.125rem',
        fontWeight: 600
      }}>
          Semantic Colors
        </h3>
        <p style={{
        margin: '0 0 2rem 0',
        color: '#5F7281',
        fontSize: '0.875rem'
      }}>
          Colors used for feedback states and messages throughout the UI.
        </p>
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    }}>
        <Colors category="success" showHex={true} />
        <Colors category="warning" showHex={true} />
        <Colors category="error" showHex={true} />
        <Colors category="info" showHex={true} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Semantic colors for success, warning, error, and info states used in alerts, notifications, and feedback messages.'
      }
    }
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontSize: '1.125rem',
        fontWeight: 600
      }}>
          Extended Color Palette
        </h3>
        <p style={{
        margin: '0 0 2rem 0',
        color: '#5F7281',
        fontSize: '0.875rem'
      }}>
          Official secondary colors for tags, status badges, illustrations, and supplementary UI elements.
        </p>
      </div>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    }}>
        <Colors category="brown" showHex={true} />
        <Colors category="coral" showHex={true} />
        <Colors category="indigo" showHex={true} />
        <Colors category="lemon" showHex={true} />
        <Colors category="lime" showHex={true} />
        <Colors category="pink" showHex={true} />
        <Colors category="purple" showHex={true} />
        <Colors category="teal" showHex={true} />
        <Colors category="turquoise" showHex={true} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Official extended color palette for supplementary UI elements, status indicators, and creative accents.'
      }
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,v,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '800px'
  }}>
      <div>
        <h3 style={{
        margin: '0 0 1rem 0',
        fontSize: '1.125rem',
        fontWeight: 600
      }}>
          Color Usage Examples
        </h3>
        <p style={{
        margin: '0 0 2rem 0',
        color: '#5F6368',
        fontSize: '0.875rem'
      }}>
          Examples of how to use the Databricks color palette in different UI contexts.
        </p>
      </div>
      
      {/* Button Examples */}
      <div>
        <h4 style={{
        margin: '0 0 1rem 0',
        fontSize: '1rem',
        fontWeight: 600
      }}>Buttons</h4>
        <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
          <button style={{
          backgroundColor: '#4299E0',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Primary Button
          </button>
          <button style={{
          backgroundColor: 'transparent',
          color: '#4299E0',
          border: '1px solid #4299E0',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Secondary Button
          </button>
          <button style={{
          backgroundColor: '#04867D',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Teal Button
          </button>
          {/* Secondary colors examples */}
          <button style={{
          backgroundColor: '#8A63BF',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Purple Button
          </button>
          <button style={{
          backgroundColor: '#3BA65E',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Green Button
          </button>
        </div>
      </div>

      {/* Alert Examples */}
      <div>
        <h4 style={{
        margin: '0 0 1rem 0',
        fontSize: '1rem',
        fontWeight: 600
      }}>Alerts</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
          <div style={{
          padding: '12px',
          backgroundColor: '#F3FCF6',
          border: '1px solid #3BA65E',
          borderRadius: '4px',
          color: '#115026'
        }}>
            Success: Operation completed successfully
          </div>
          <div style={{
          padding: '12px',
          backgroundColor: '#FFF9EB',
          border: '1px solid #DE7921',
          borderRadius: '4px',
          color: '#93320B'
        }}>
            Warning: Please review your settings
          </div>
          <div style={{
          padding: '12px',
          backgroundColor: '#FFF5F7',
          border: '1px solid #E65B77',
          borderRadius: '4px',
          color: '#9E102C'
        }}>
            Error: Something went wrong
          </div>
          <div style={{
          padding: '12px',
          backgroundColor: '#F0F8FF',
          border: '1px solid #4299E0',
          borderRadius: '4px',
          color: '#0E538B'
        }}>
            Info: Here&apos;s some helpful information
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing how to apply the color palette in common UI patterns.'
      }
    }
  }
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const z=["AllColors","BrandColors","SemanticColors","ExtendedPalette","ColorUsageExamples"];export{o as AllColors,t as BrandColors,a as ColorUsageExamples,i as ExtendedPalette,s as SemanticColors,z as __namedExportsOrder,k as default};
