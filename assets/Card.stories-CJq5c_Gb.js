import{j as a,a as n}from"./jsx-runtime-D2eXtamC.js";import{r as U}from"./index-SE77F2UD.js";import{c as $}from"./clsx-B-dksMZM.js";import{T as e}from"./Typography-CBsoleyH.js";import{B as h}from"./Button-Ch83UTUf.js";import"./_commonjsHelpers-DM6icglO.js";const r=U.forwardRef(({variant:t="default",padding:i="medium",clickable:L=!1,selected:O=!1,className:P,children:q,...G},Q)=>a("div",{ref:Q,className:$("db-card",`db-card--${t}`,`db-card--padding-${i}`,{"db-card--clickable":L,"db-card--selected":O},P),...G,children:q}));r.displayName="Card";try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"Card variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outlined"'},{value:'"elevated"'}]}},padding:{defaultValue:{value:"medium"},description:"Padding size",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},clickable:{defaultValue:{value:"false"},description:"Clickable card",name:"clickable",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Selected state",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Data Display/Card",component:r,parameters:{docs:{description:{component:"Cards are surfaces that display content and actions on a single topic."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Visual style variant",table:{defaultValue:{summary:"default"}}},padding:{control:"select",options:["none","small","medium","large"],description:"Internal padding",table:{defaultValue:{summary:"medium"}}},clickable:{control:"boolean",description:"Makes the card interactive",table:{defaultValue:{summary:!1}}},selected:{control:"boolean",description:"Selected state",table:{defaultValue:{summary:!1}}},children:{control:"text",description:"Card content"},onClick:{action:"clicked",description:"Click handler (when clickable)"}},args:{variant:"default",padding:"medium",children:"Card content"}},d={args:{children:"This is a card with customizable props"}},o={render:()=>n("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[n(r,{variant:"default",style:{width:"250px"},children:[a(e,{variant:"h5",children:"Default Card"}),a(e,{variant:"body2",color:"secondary",children:"Standard card with subtle border"})]}),n(r,{variant:"outlined",style:{width:"250px"},children:[a(e,{variant:"h5",children:"Outlined Card"}),a(e,{variant:"body2",color:"secondary",children:"Card with more prominent border"})]}),n(r,{variant:"elevated",style:{width:"250px"},children:[a(e,{variant:"h5",children:"Elevated Card"}),a(e,{variant:"body2",color:"secondary",children:"Card with shadow for elevation"})]})]}),parameters:{docs:{description:{story:"Different card variants for various use cases."}}}},l={render:()=>n("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[a(r,{padding:"none",style:{width:"200px"},children:a("div",{style:{padding:"8px",background:"#f0f0f0"},children:"No padding"})}),a(r,{padding:"small",style:{width:"200px"},children:"Small padding"}),a(r,{padding:"medium",style:{width:"200px"},children:"Medium padding"}),a(r,{padding:"large",style:{width:"200px"},children:"Large padding"})]}),parameters:{docs:{description:{story:"Different padding options."}}}},s={render:()=>n("div",{style:{display:"flex",gap:"16px"},children:[n(r,{clickable:!0,style:{width:"250px"},onClick:()=>alert("Card clicked!"),children:[a(e,{variant:"h5",children:"Clickable Card"}),a(e,{variant:"body2",color:"secondary",children:"Click me to see the interaction"})]}),n(r,{clickable:!0,selected:!0,style:{width:"250px"},children:[a(e,{variant:"h5",children:"Selected Card"}),a(e,{variant:"body2",color:"secondary",children:"This card is in selected state"})]})]}),parameters:{docs:{description:{story:"Interactive cards with hover and selected states."}}}},c={render:()=>n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"16px"},children:[n(r,{variant:"elevated",children:[a(e,{variant:"h4",children:"Simple Content"}),a(e,{variant:"body1",style:{marginTop:"8px"},children:"A card can contain any type of content, from simple text to complex layouts."})]}),n(r,{variant:"elevated",children:[a(e,{variant:"overline",color:"secondary",children:"FEATURED"}),a(e,{variant:"h4",children:"With Actions"}),a(e,{variant:"body2",color:"secondary",style:{marginTop:"8px",marginBottom:"16px"},children:"Cards can include action buttons for user interaction."}),n("div",{style:{display:"flex",gap:"8px"},children:[a(h,{variant:"primary",size:"small",children:"Learn More"}),a(h,{variant:"tertiary",size:"small",children:"Dismiss"})]})]}),n(r,{variant:"elevated",children:[n("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[a("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#2272B4"}}),n("div",{children:[a(e,{variant:"h5",children:"With Avatar"}),a(e,{variant:"caption",color:"secondary",children:"John Doe"})]})]}),a(e,{variant:"body2",children:"Cards can include avatars and other media elements."})]})]}),parameters:{docs:{description:{story:"Various content layouts within cards."}}}},p={render:()=>n(r,{variant:"elevated",style:{maxWidth:"300px"},children:[a(e,{variant:"overline",color:"secondary",children:"TOTAL REVENUE"}),a(e,{variant:"h2",style:{margin:"8px 0"},children:"$45,231.89"}),a(e,{variant:"caption",color:"success",children:"↑ 20.1% from last month"})]}),parameters:{docs:{description:{story:"Card displaying a metric or KPI."}}}},y={render:()=>n(r,{variant:"default",padding:"none",style:{maxWidth:"350px"},children:[a("div",{style:{padding:"16px",borderBottom:"1px solid #DDE0E5"},children:a(e,{variant:"h5",children:"Recent Activity"})}),[{action:"File uploaded",time:"2 minutes ago",icon:"📄"},{action:"Query executed",time:"5 minutes ago",icon:"⚡"},{action:"Report generated",time:"1 hour ago",icon:"📊"},{action:"Data synced",time:"3 hours ago",icon:"🔄"}].map((t,i)=>n("div",{style:{padding:"12px 16px",borderBottom:i<3?"1px solid #F6F7F9":"none",display:"flex",alignItems:"center",gap:"12px"},children:[a("span",{style:{fontSize:"20px"},children:t.icon}),n("div",{style:{flex:1},children:[a(e,{variant:"body2",children:t.action}),a(e,{variant:"caption",color:"secondary",children:t.time})]})]},i))]}),parameters:{docs:{description:{story:"Card containing a list of items."}}}},m={render:()=>a("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px"},children:[{title:"Notebooks",count:24,color:"#2272B4"},{title:"Dashboards",count:12,color:"#00AF4B"},{title:"Queries",count:156,color:"#FFC300"},{title:"Models",count:8,color:"#F53737"}].map((t,i)=>n(r,{variant:"elevated",clickable:!0,children:[n("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[a("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t.color,marginRight:"8px"}}),a(e,{variant:"overline",color:"secondary",children:t.title})]}),a(e,{variant:"h3",children:t.count})]},i))}),parameters:{docs:{description:{story:"Grid layout with multiple cards."}}}};var u,g,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'This is a card with customizable props'
  }
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,f,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,T,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var k,D,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var S,E,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var A,R,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var I,W,z;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(W=y.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var N,_,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const aa=["Playground","Variants","PaddingSizes","Clickable","ContentExamples","MetricCard","ListCard","GridOfCards"];export{s as Clickable,c as ContentExamples,m as GridOfCards,y as ListCard,p as MetricCard,l as PaddingSizes,d as Playground,o as Variants,aa as __namedExportsOrder,Z as default};
