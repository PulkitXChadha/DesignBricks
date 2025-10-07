import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-Dz3UJJSw.js";import{c as U}from"./clsx-B-dksMZM.js";import{T as a}from"./Typography-DY7az-GB.js";import{B as m}from"./Button-B1IIp7sA.js";import"./_commonjsHelpers-CqkleIqs.js";const r=Q.forwardRef(({variant:t="default",padding:i="medium",clickable:P=!1,selected:L=!1,className:N,children:O,...q},G)=>e.jsx("div",{ref:G,className:U("db-card",`db-card--${t}`,`db-card--padding-${i}`,{"db-card--clickable":P,"db-card--selected":L},N),...q,children:O}));r.displayName="Card";r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"Card variant",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Padding size",defaultValue:{value:"'medium'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Clickable card",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes"]};const Y={title:"Data Display/Card",component:r,parameters:{docs:{description:{component:"Cards are surfaces that display content and actions on a single topic."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},padding:{control:"select",options:["none","small","medium","large"],description:"Internal padding",table:{defaultValue:{summary:"medium"}}},clickable:{control:"boolean",description:"Makes the card interactive",table:{defaultValue:{summary:!1}}},selected:{control:"boolean",description:"Selected state",table:{defaultValue:{summary:!1}}},children:{control:"text",description:"Card content"},onClick:{action:"clicked",description:"Click handler (when clickable)"}},args:{variant:"default",padding:"medium",children:"Card content"}},s={args:{children:"This is a card with customizable props"}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsxs(r,{variant:"default",style:{width:"250px"},children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Default Card"}),e.jsx(a.Text,{color:"secondary",children:"Standard card with subtle border"})]}),e.jsxs(r,{variant:"outlined",style:{width:"250px"},children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Outlined Card"}),e.jsx(a.Text,{color:"secondary",children:"Card with more prominent border"})]}),e.jsxs(r,{variant:"elevated",style:{width:"250px"},children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Elevated Card"}),e.jsx(a.Text,{color:"secondary",children:"Card with shadow for elevation"})]})]}),parameters:{docs:{description:{story:"Different card variants for various use cases."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{padding:"none",style:{width:"200px"},children:e.jsx("div",{style:{padding:"8px",background:"#f0f0f0"},children:"No padding"})}),e.jsx(r,{padding:"small",style:{width:"200px"},children:"Small padding"}),e.jsx(r,{padding:"medium",style:{width:"200px"},children:"Medium padding"}),e.jsx(r,{padding:"large",style:{width:"200px"},children:"Large padding"})]}),parameters:{docs:{description:{story:"Different padding options."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsxs(r,{clickable:!0,style:{width:"250px"},onClick:()=>alert("Card clicked!"),children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Clickable Card"}),e.jsx(a.Text,{color:"secondary",children:"Click me to see the interaction"})]}),e.jsxs(r,{clickable:!0,selected:!0,style:{width:"250px"},children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Selected Card"}),e.jsx(a.Text,{color:"secondary",children:"This card is in selected state"})]})]}),parameters:{docs:{description:{story:"Interactive cards with hover and selected states."}}}},n={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"16px"},children:[e.jsxs(r,{variant:"elevated",children:[e.jsx(a.Title,{level:2,withoutMargins:!0,children:"Simple Content"}),e.jsx(a.Paragraph,{style:{marginTop:"8px"},children:"A card can contain any type of content, from simple text to complex layouts."})]}),e.jsxs(r,{variant:"elevated",children:[e.jsx(a.Text,{size:"sm",color:"secondary",bold:!0,children:"FEATURED"}),e.jsx(a.Title,{level:2,withoutMargins:!0,children:"With Actions"}),e.jsx(a.Text,{color:"secondary",style:{display:"block",marginTop:"8px",marginBottom:"16px"},children:"Cards can include action buttons for user interaction."}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(m,{variant:"primary",size:"small",children:"Learn More"}),e.jsx(m,{variant:"tertiary",size:"small",children:"Dismiss"})]})]}),e.jsxs(r,{variant:"elevated",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#2272B4"}}),e.jsxs("div",{children:[e.jsx(a.Title,{level:3,withoutMargins:!0,children:"With Avatar"}),e.jsx(a.Text,{size:"sm",color:"secondary",children:"John Doe"})]})]}),e.jsx(a.Text,{children:"Cards can include avatars and other media elements."})]})]}),parameters:{docs:{description:{story:"Various content layouts within cards."}}}},p={render:()=>e.jsxs(r,{variant:"elevated",style:{maxWidth:"300px"},children:[e.jsx(a.Text,{size:"sm",color:"secondary",bold:!0,children:"TOTAL REVENUE"}),e.jsx(a.Title,{level:1,style:{margin:"8px 0"},children:"$45,231.89"}),e.jsx(a.Text,{size:"sm",color:"success",children:"↑ 20.1% from last month"})]}),parameters:{docs:{description:{story:"Card displaying a metric or KPI."}}}},c={render:()=>e.jsxs(r,{variant:"default",padding:"none",style:{maxWidth:"350px"},children:[e.jsx("div",{style:{padding:"16px",borderBottom:"1px solid #DDE0E5"},children:e.jsx(a.Title,{level:3,withoutMargins:!0,children:"Recent Activity"})}),[{action:"File uploaded",time:"2 minutes ago",icon:"📄"},{action:"Query executed",time:"5 minutes ago",icon:"⚡"},{action:"Report generated",time:"1 hour ago",icon:"📊"},{action:"Data synced",time:"3 hours ago",icon:"🔄"}].map((t,i)=>e.jsxs("div",{style:{padding:"12px 16px",borderBottom:i<3?"1px solid #F6F7F9":"none",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"20px"},children:t.icon}),e.jsxs("div",{style:{flex:1},children:[e.jsx(a.Text,{children:t.action}),e.jsx(a.Text,{size:"sm",color:"secondary",style:{display:"block"},children:t.time})]})]},i))]}),parameters:{docs:{description:{story:"Card containing a list of items."}}}},y={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px"},children:[{title:"Notebooks",count:24,color:"#2272B4"},{title:"Dashboards",count:12,color:"#00AF4B"},{title:"Queries",count:156,color:"#FFC300"},{title:"Models",count:8,color:"#F53737"}].map((t,i)=>e.jsxs(r,{variant:"elevated",clickable:!0,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t.color,marginRight:"8px"}}),e.jsx(a.Text,{size:"sm",color:"secondary",bold:!0,children:t.title})]}),e.jsx(a.Title,{level:2,withoutMargins:!0,children:t.count})]},i))}),parameters:{docs:{description:{story:"Grid layout with multiple cards."}}}};var x,u,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with customizable props'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,T,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Card variant="default" style={{
      width: '250px'
    }}>
        <Typography.Title level={3} withoutMargins>Default Card</Typography.Title>
        <Typography.Text color="secondary">
          Standard card with subtle border
        </Typography.Text>
      </Card>
      <Card variant="outlined" style={{
      width: '250px'
    }}>
        <Typography.Title level={3} withoutMargins>Outlined Card</Typography.Title>
        <Typography.Text color="secondary">
          Card with more prominent border
        </Typography.Text>
      </Card>
      <Card variant="elevated" style={{
      width: '250px'
    }}>
        <Typography.Title level={3} withoutMargins>Elevated Card</Typography.Title>
        <Typography.Text color="secondary">
          Card with shadow for elevation
        </Typography.Text>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different card variants for various use cases.'
      }
    }
  }
}`,...(v=(T=d.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,C,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var w,j,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Card clickable style={{
      width: '250px'
    }} onClick={() => alert('Card clicked!')}>
        <Typography.Title level={3} withoutMargins>Clickable Card</Typography.Title>
        <Typography.Text color="secondary">
          Click me to see the interaction
        </Typography.Text>
      </Card>
      <Card clickable selected style={{
      width: '250px'
    }}>
        <Typography.Title level={3} withoutMargins>Selected Card</Typography.Title>
        <Typography.Text color="secondary">
          This card is in selected state
        </Typography.Text>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Interactive cards with hover and selected states.'
      }
    }
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var M,z,B;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px'
  }}>
      <Card variant="elevated">
        <Typography.Title level={2} withoutMargins>Simple Content</Typography.Title>
        <Typography.Paragraph style={{
        marginTop: '8px'
      }}>
          A card can contain any type of content, from simple text to complex layouts.
        </Typography.Paragraph>
      </Card>

      <Card variant="elevated">
        <Typography.Text size="sm" color="secondary" bold>FEATURED</Typography.Text>
        <Typography.Title level={2} withoutMargins>With Actions</Typography.Title>
        <Typography.Text color="secondary" style={{
        display: 'block',
        marginTop: '8px',
        marginBottom: '16px'
      }}>
          Cards can include action buttons for user interaction.
        </Typography.Text>
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
            <Typography.Title level={3} withoutMargins>With Avatar</Typography.Title>
            <Typography.Text size="sm" color="secondary">John Doe</Typography.Text>
          </div>
        </div>
        <Typography.Text>
          Cards can include avatars and other media elements.
        </Typography.Text>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Various content layouts within cards.'
      }
    }
  }
}`,...(B=(z=n.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,S,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" style={{
    maxWidth: '300px'
  }}>
      <Typography.Text size="sm" color="secondary" bold>TOTAL REVENUE</Typography.Text>
      <Typography.Title level={1} style={{
      margin: '8px 0'
    }}>$45,231.89</Typography.Title>
      <Typography.Text size="sm" color="success">
        ↑ 20.1% from last month
      </Typography.Text>
    </Card>,
  parameters: {
    docs: {
      description: {
        story: 'Card displaying a metric or KPI.'
      }
    }
  }
}`,...(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var F,R,A;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="none" style={{
    maxWidth: '350px'
  }}>
      <div style={{
      padding: '16px',
      borderBottom: '1px solid #DDE0E5'
    }}>
        <Typography.Title level={3} withoutMargins>Recent Activity</Typography.Title>
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
            <Typography.Text>{item.action}</Typography.Text>
            <Typography.Text size="sm" color="secondary" style={{
          display: 'block'
        }}>{item.time}</Typography.Text>
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var V,I,W;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
            <Typography.Text size="sm" color="secondary" bold>{item.title}</Typography.Text>
          </div>
          <Typography.Title level={2} withoutMargins>{item.count}</Typography.Title>
        </Card>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Grid layout with multiple cards.'
      }
    }
  }
}`,...(W=(I=y.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const Z=["Playground","Variants","PaddingSizes","Clickable","ContentExamples","MetricCard","ListCard","GridOfCards"];export{l as Clickable,n as ContentExamples,y as GridOfCards,c as ListCard,p as MetricCard,o as PaddingSizes,s as Playground,d as Variants,Z as __namedExportsOrder,Y as default};
