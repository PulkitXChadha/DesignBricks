import{j as a}from"./jsx-runtime-LnmZrwv1.js";import{r as Q}from"./index-CWnxZbJP.js";import{c as U}from"./clsx-B-dksMZM.js";import{T as e}from"./Typography-BqsF5yVe.js";import{B as m}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const r=Q.forwardRef(({variant:t="default",padding:i="medium",clickable:L=!1,selected:N=!1,className:O,children:P,...q},G)=>a.jsx("div",{ref:G,className:U("db-card",`db-card--${t}`,`db-card--padding-${i}`,{"db-card--clickable":L,"db-card--selected":N},O),...q,children:P}));r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Padding size",defaultValue:{value:"'medium'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Clickable card",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const Z={title:"Data Display/Card",component:r,parameters:{docs:{description:{component:"Cards are surfaces that display content and actions on a single topic."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},padding:{control:"select",options:["none","small","medium","large"],description:"Internal padding",table:{defaultValue:{summary:"medium"}}},clickable:{control:"boolean",description:"Makes the card interactive",table:{defaultValue:{summary:!1}}},selected:{control:"boolean",description:"Selected state",table:{defaultValue:{summary:!1}}},children:{control:"text",description:"Card content"},onClick:{action:"clicked",description:"Click handler (when clickable)"}},args:{variant:"default",padding:"medium",children:"Card content"}},d={args:{children:"This is a card with customizable props"}},o={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[a.jsxs(r,{variant:"default",style:{width:"250px"},children:[a.jsx(e,{variant:"h5",children:"Default Card"}),a.jsx(e,{variant:"body2",color:"secondary",children:"Standard card with subtle border"})]}),a.jsxs(r,{variant:"outlined",style:{width:"250px"},children:[a.jsx(e,{variant:"h5",children:"Outlined Card"}),a.jsx(e,{variant:"body2",color:"secondary",children:"Card with more prominent border"})]}),a.jsxs(r,{variant:"elevated",style:{width:"250px"},children:[a.jsx(e,{variant:"h5",children:"Elevated Card"}),a.jsx(e,{variant:"body2",color:"secondary",children:"Card with shadow for elevation"})]})]}),parameters:{docs:{description:{story:"Different card variants for various use cases."}}}},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[a.jsx(r,{padding:"none",style:{width:"200px"},children:a.jsx("div",{style:{padding:"8px",background:"#f0f0f0"},children:"No padding"})}),a.jsx(r,{padding:"small",style:{width:"200px"},children:"Small padding"}),a.jsx(r,{padding:"medium",style:{width:"200px"},children:"Medium padding"}),a.jsx(r,{padding:"large",style:{width:"200px"},children:"Large padding"})]}),parameters:{docs:{description:{story:"Different padding options."}}}},n={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsxs(r,{clickable:!0,style:{width:"250px"},onClick:()=>alert("Card clicked!"),children:[a.jsx(e,{variant:"h5",children:"Clickable Card"}),a.jsx(e,{variant:"body2",color:"secondary",children:"Click me to see the interaction"})]}),a.jsxs(r,{clickable:!0,selected:!0,style:{width:"250px"},children:[a.jsx(e,{variant:"h5",children:"Selected Card"}),a.jsx(e,{variant:"body2",color:"secondary",children:"This card is in selected state"})]})]}),parameters:{docs:{description:{story:"Interactive cards with hover and selected states."}}}},l={render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"16px"},children:[a.jsxs(r,{variant:"elevated",children:[a.jsx(e,{variant:"h4",children:"Simple Content"}),a.jsx(e,{variant:"body1",style:{marginTop:"8px"},children:"A card can contain any type of content, from simple text to complex layouts."})]}),a.jsxs(r,{variant:"elevated",children:[a.jsx(e,{variant:"overline",color:"secondary",children:"FEATURED"}),a.jsx(e,{variant:"h4",children:"With Actions"}),a.jsx(e,{variant:"body2",color:"secondary",style:{marginTop:"8px",marginBottom:"16px"},children:"Cards can include action buttons for user interaction."}),a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx(m,{variant:"primary",size:"small",children:"Learn More"}),a.jsx(m,{variant:"tertiary",size:"small",children:"Dismiss"})]})]}),a.jsxs(r,{variant:"elevated",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#2272B4"}}),a.jsxs("div",{children:[a.jsx(e,{variant:"h5",children:"With Avatar"}),a.jsx(e,{variant:"caption",color:"secondary",children:"John Doe"})]})]}),a.jsx(e,{variant:"body2",children:"Cards can include avatars and other media elements."})]})]}),parameters:{docs:{description:{story:"Various content layouts within cards."}}}},c={render:()=>a.jsxs(r,{variant:"elevated",style:{maxWidth:"300px"},children:[a.jsx(e,{variant:"overline",color:"secondary",children:"TOTAL REVENUE"}),a.jsx(e,{variant:"h2",style:{margin:"8px 0"},children:"$45,231.89"}),a.jsx(e,{variant:"caption",color:"success",children:"↑ 20.1% from last month"})]}),parameters:{docs:{description:{story:"Card displaying a metric or KPI."}}}},p={render:()=>a.jsxs(r,{variant:"default",padding:"none",style:{maxWidth:"350px"},children:[a.jsx("div",{style:{padding:"16px",borderBottom:"1px solid #DDE0E5"},children:a.jsx(e,{variant:"h5",children:"Recent Activity"})}),[{action:"File uploaded",time:"2 minutes ago",icon:"📄"},{action:"Query executed",time:"5 minutes ago",icon:"⚡"},{action:"Report generated",time:"1 hour ago",icon:"📊"},{action:"Data synced",time:"3 hours ago",icon:"🔄"}].map((t,i)=>a.jsxs("div",{style:{padding:"12px 16px",borderBottom:i<3?"1px solid #F6F7F9":"none",display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("span",{style:{fontSize:"20px"},children:t.icon}),a.jsxs("div",{style:{flex:1},children:[a.jsx(e,{variant:"body2",children:t.action}),a.jsx(e,{variant:"caption",color:"secondary",children:t.time})]})]},i))]}),parameters:{docs:{description:{story:"Card containing a list of items."}}}},y={render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px"},children:[{title:"Notebooks",count:24,color:"#2272B4"},{title:"Dashboards",count:12,color:"#00AF4B"},{title:"Queries",count:156,color:"#FFC300"},{title:"Models",count:8,color:"#F53737"}].map((t,i)=>a.jsxs(r,{variant:"elevated",clickable:!0,children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t.color,marginRight:"8px"}}),a.jsx(e,{variant:"overline",color:"secondary",children:t.title})]}),a.jsx(e,{variant:"h3",children:t.count})]},i))}),parameters:{docs:{description:{story:"Grid layout with multiple cards."}}}};var h,u,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with customizable props'
  }
}`,...(x=(u=d.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Card variant="default" style={{
      width: '250px'
    }}>
        <Typography variant="h5">Default Card</Typography>
        <Typography variant="body2" color="secondary">
          Standard card with subtle border
        </Typography>
      </Card>
      <Card variant="outlined" style={{
      width: '250px'
    }}>
        <Typography variant="h5">Outlined Card</Typography>
        <Typography variant="body2" color="secondary">
          Card with more prominent border
        </Typography>
      </Card>
      <Card variant="elevated" style={{
      width: '250px'
    }}>
        <Typography variant="h5">Elevated Card</Typography>
        <Typography variant="body2" color="secondary">
          Card with shadow for elevation
        </Typography>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different card variants for various use cases.'
      }
    }
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var C,T,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Card padding="none" style={{
      width: '200px'
    }}>
        <div style={{
        padding: '8px',
        background: '#f0f0f0'
      }}>
          No padding
        </div>
      </Card>
      <Card padding="small" style={{
      width: '200px'
    }}>
        Small padding
      </Card>
      <Card padding="medium" style={{
      width: '200px'
    }}>
        Medium padding
      </Card>
      <Card padding="large" style={{
      width: '200px'
    }}>
        Large padding
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different padding options.'
      }
    }
  }
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var j,w,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Card clickable style={{
      width: '250px'
    }} onClick={() => alert('Card clicked!')}>
        <Typography variant="h5">Clickable Card</Typography>
        <Typography variant="body2" color="secondary">
          Click me to see the interaction
        </Typography>
      </Card>
      <Card clickable selected style={{
      width: '250px'
    }}>
        <Typography variant="h5">Selected Card</Typography>
        <Typography variant="body2" color="secondary">
          This card is in selected state
        </Typography>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards with hover and selected states.'
      }
    }
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,D,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px'
  }}>
      <Card variant="elevated">
        <Typography variant="h4">Simple Content</Typography>
        <Typography variant="body1" style={{
        marginTop: '8px'
      }}>
          A card can contain any type of content, from simple text to complex layouts.
        </Typography>
      </Card>

      <Card variant="elevated">
        <Typography variant="overline" color="secondary">FEATURED</Typography>
        <Typography variant="h4">With Actions</Typography>
        <Typography variant="body2" color="secondary" style={{
        marginTop: '8px',
        marginBottom: '16px'
      }}>
          Cards can include action buttons for user interaction.
        </Typography>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button variant="primary" size="small">Learn More</Button>
          <Button variant="tertiary" size="small">Dismiss</Button>
        </div>
      </Card>

      <Card variant="elevated">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
          <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#2272B4'
        }} />
          <div>
            <Typography variant="h5">With Avatar</Typography>
            <Typography variant="caption" color="secondary">John Doe</Typography>
          </div>
        </div>
        <Typography variant="body2">
          Cards can include avatars and other media elements.
        </Typography>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various content layouts within cards.'
      }
    }
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var E,F,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" style={{
    maxWidth: '300px'
  }}>
      <Typography variant="overline" color="secondary">TOTAL REVENUE</Typography>
      <Typography variant="h2" style={{
      margin: '8px 0'
    }}>$45,231.89</Typography>
      <Typography variant="caption" color="success">
        ↑ 20.1% from last month
      </Typography>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Card displaying a metric or KPI.'
      }
    }
  }
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var A,V,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="none" style={{
    maxWidth: '350px'
  }}>
      <div style={{
      padding: '16px',
      borderBottom: '1px solid #DDE0E5'
    }}>
        <Typography variant="h5">Recent Activity</Typography>
      </div>
      {[{
      action: 'File uploaded',
      time: '2 minutes ago',
      icon: '📄'
    }, {
      action: 'Query executed',
      time: '5 minutes ago',
      icon: '⚡'
    }, {
      action: 'Report generated',
      time: '1 hour ago',
      icon: '📊'
    }, {
      action: 'Data synced',
      time: '3 hours ago',
      icon: '🔄'
    }].map((item, index) => <div key={index} style={{
      padding: '12px 16px',
      borderBottom: index < 3 ? '1px solid #F6F7F9' : 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '20px'
      }}>{item.icon}</span>
          <div style={{
        flex: 1
      }}>
            <Typography variant="body2">{item.action}</Typography>
            <Typography variant="caption" color="secondary">{item.time}</Typography>
          </div>
        </div>)}
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Card containing a list of items.'
      }
    }
  }
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var W,z,M;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px'
  }}>
      {[{
      title: 'Notebooks',
      count: 24,
      color: '#2272B4'
    }, {
      title: 'Dashboards',
      count: 12,
      color: '#00AF4B'
    }, {
      title: 'Queries',
      count: 156,
      color: '#FFC300'
    }, {
      title: 'Models',
      count: 8,
      color: '#F53737'
    }].map((item, index) => <Card key={index} variant="elevated" clickable>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
            <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: item.color,
          marginRight: '8px'
        }} />
            <Typography variant="overline" color="secondary">{item.title}</Typography>
          </div>
          <Typography variant="h3">{item.count}</Typography>
        </Card>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Grid layout with multiple cards.'
      }
    }
  }
}`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const aa=["Playground","Variants","PaddingSizes","Clickable","ContentExamples","MetricCard","ListCard","GridOfCards"];export{n as Clickable,l as ContentExamples,y as GridOfCards,p as ListCard,c as MetricCard,s as PaddingSizes,d as Playground,o as Variants,aa as __namedExportsOrder,Z as default};
