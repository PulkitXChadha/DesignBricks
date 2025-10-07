import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./Typography-DY7az-GB.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const X={title:"Foundation/Typography",component:r,parameters:{docs:{description:{component:"\nTypography components for consistent text rendering based on Databricks Design System.\n\n## Compound Components\n- `Typography.Title` - Headings (h1-h4)\n- `Typography.Text` - General text with size variants\n- `Typography.Paragraph` - Paragraph text\n- `Typography.Hint` - Secondary/helper text  \n- `Typography.Link` - Links with new tab support\n\n## Features\n- Size system: sm (12px), md (13px), lg (18px), xl (22px), xxl (32px)\n- Color variants: primary, secondary, disabled, error, warning, success, info\n- `withoutMargins` prop to remove default margins\n- `ellipsis` prop for text truncation\n- `bold` prop for bold text\n- `code` prop for inline code styling\n        ".trim()}}},tags:["autodocs"]},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r.Title,{level:1,children:"Title Level 1 - 32px / 40px line-height"}),e.jsx(r.Title,{level:2,children:"Title Level 2 - 22px / 28px line-height"}),e.jsx(r.Title,{level:3,children:"Title Level 3 - 18px / 24px line-height"}),e.jsx(r.Title,{level:4,children:"Title Level 4 - 13px / 20px line-height"})]}),parameters:{docs:{description:{story:"Typography.Title renders semantic heading elements (h1-h4) with Databricks design system sizing."}}}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r.Title,{level:2,color:"primary",children:"Primary Title"}),e.jsx(r.Title,{level:2,color:"secondary",children:"Secondary Title"}),e.jsx(r.Title,{level:2,color:"error",children:"Error Title"}),e.jsx(r.Title,{level:2,color:"success",children:"Success Title"})]}),parameters:{docs:{description:{story:"Titles with different color variants."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r.Text,{size:"sm",children:"Small text (12px / 16px)"}),e.jsx(r.Text,{size:"md",children:"Medium text (13px / 20px) - Default"}),e.jsx(r.Text,{size:"lg",children:"Large text (18px / 24px)"}),e.jsx(r.Text,{size:"xl",children:"Extra large text (22px / 28px)"}),e.jsx(r.Text,{size:"xxl",children:"Extra extra large text (32px / 40px)"})]}),parameters:{docs:{description:{story:"Typography.Text with Databricks size system: sm, md, lg, xl, xxl."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r.Text,{children:"Regular text"}),e.jsx(r.Text,{bold:!0,children:"Bold text (600 weight)"}),e.jsx(r.Text,{code:!0,children:'const code = "inline code";'}),e.jsx(r.Text,{disabled:!0,children:"Disabled text"})]}),parameters:{docs:{description:{story:"Different text variants including bold, code, and disabled states."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(r.Text,{color:"primary",children:"Primary text color"}),e.jsx(r.Text,{color:"secondary",children:"Secondary text color"}),e.jsx(r.Text,{color:"disabled",children:"Disabled text color"}),e.jsx(r.Text,{color:"error",children:"Error text color"}),e.jsx(r.Text,{color:"warning",children:"Warning text color"}),e.jsx(r.Text,{color:"success",children:"Success text color"}),e.jsx(r.Text,{color:"info",children:"Info text color"})]}),parameters:{docs:{description:{story:"Text with semantic color variants."}}}},n={render:()=>e.jsxs("div",{style:{maxWidth:"600px"},children:[e.jsx(r.Paragraph,{children:"The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from BI and data warehousing to generative AI — by unifying their data, analytics and governance."}),e.jsx(r.Paragraph,{color:"secondary",children:"Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, the platform provides a unified approach to data management, analytics and AI."}),e.jsx(r.Paragraph,{withoutMargins:!0,children:"This paragraph has no margins (withoutMargins prop)."})]}),parameters:{docs:{description:{story:"Typography.Paragraph for body content with proper spacing."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(r.Text,{children:"Email Address"}),e.jsx(r.Hint,{children:"We'll never share your email with anyone else."})]}),e.jsxs("div",{children:[e.jsx(r.Text,{children:"Password"}),e.jsx(r.Hint,{bold:!0,children:"Must be at least 8 characters long."})]})]}),parameters:{docs:{description:{story:"Typography.Hint for secondary information and form helper text."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{children:e.jsx(r.Link,{href:"https://databricks.com",children:"Regular link"})}),e.jsx("div",{children:e.jsx(r.Link,{href:"https://docs.databricks.com",openInNewTab:!0,children:"Documentation (opens in new tab)"})}),e.jsx("div",{children:e.jsx(r.Link,{href:"#",disabled:!0,children:"Disabled link"})})]}),parameters:{docs:{description:{story:"Typography.Link with openInNewTab support and accessibility features."}}}},d={render:()=>e.jsxs("div",{style:{border:"1px solid #ccc",padding:"16px"},children:[e.jsx(r.Title,{level:2,withoutMargins:!0,children:"Title without margins"}),e.jsx(r.Paragraph,{withoutMargins:!0,children:"Paragraph without margins"}),e.jsx(r.Text,{withoutMargins:!0,children:"Text without margins"})]}),parameters:{docs:{description:{story:"All components support withoutMargins prop to remove default spacing."}}}},c={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r.Title,{level:3,ellipsis:!0,children:"This is a very long title that will be truncated with ellipsis when it exceeds container width"}),e.jsx(r.Text,{ellipsis:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"}),e.jsx(r.Paragraph,{ellipsis:!0,children:"This is a very long paragraph that will be truncated with an ellipsis when it exceeds the container width"})]}),parameters:{docs:{description:{story:"Text truncation with ellipsis for long content."}}}},h={render:()=>e.jsxs("div",{style:{maxWidth:"700px",padding:"24px"},children:[e.jsx(r.Title,{level:1,children:"Welcome to Databricks"}),e.jsx(r.Text,{size:"lg",color:"secondary",children:"The Data Intelligence Platform"}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx(r.Title,{level:2,children:"Unify Your Data, Analytics and AI"}),e.jsx(r.Paragraph,{children:"The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from BI and data warehousing to generative AI — by unifying their data, analytics and governance."}),e.jsxs(r.Paragraph,{children:["Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, the platform provides a unified approach to data management, analytics and AI. Learn more in our"," ",e.jsx(r.Link,{href:"https://docs.databricks.com",openInNewTab:!0,children:"documentation"}),"."]})]}),e.jsxs("div",{style:{marginTop:"24px",padding:"16px",background:"#F6F7F9",borderRadius:"8px"},children:[e.jsx(r.Text,{bold:!0,children:"Quick Start"}),e.jsxs(r.Hint,{children:["Get started with Databricks in minutes. Follow our"," ",e.jsx(r.Link,{href:"https://docs.databricks.com/getting-started",openInNewTab:!0,children:"quick start guide"})," ","to set up your first workspace."]})]}),e.jsx(r.Hint,{style:{marginTop:"24px"},children:"Last updated: October 2025"})]}),parameters:{docs:{description:{story:"A comprehensive example showcasing all typography components working together."}}}};var y,x,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography.Title level={1}>Title Level 1 - 32px / 40px line-height</Typography.Title>
      <Typography.Title level={2}>Title Level 2 - 22px / 28px line-height</Typography.Title>
      <Typography.Title level={3}>Title Level 3 - 18px / 24px line-height</Typography.Title>
      <Typography.Title level={4}>Title Level 4 - 13px / 20px line-height</Typography.Title>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography.Title renders semantic heading elements (h1-h4) with Databricks design system sizing.'
      }
    }
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,m,u;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography.Title level={2} color="primary">Primary Title</Typography.Title>
      <Typography.Title level={2} color="secondary">Secondary Title</Typography.Title>
      <Typography.Title level={2} color="error">Error Title</Typography.Title>
      <Typography.Title level={2} color="success">Success Title</Typography.Title>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Titles with different color variants.'
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,f,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography.Text size="sm">Small text (12px / 16px)</Typography.Text>
      <Typography.Text size="md">Medium text (13px / 20px) - Default</Typography.Text>
      <Typography.Text size="lg">Large text (18px / 24px)</Typography.Text>
      <Typography.Text size="xl">Extra large text (22px / 28px)</Typography.Text>
      <Typography.Text size="xxl">Extra extra large text (32px / 40px)</Typography.Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography.Text with Databricks size system: sm, md, lg, xl, xxl.'
      }
    }
  }
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,j,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography.Text>Regular text</Typography.Text>
      <Typography.Text bold>Bold text (600 weight)</Typography.Text>
      <Typography.Text code>const code = &quot;inline code&quot;;</Typography.Text>
      <Typography.Text disabled>Disabled text</Typography.Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different text variants including bold, code, and disabled states.'
      }
    }
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,P,L;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <Typography.Text color="primary">Primary text color</Typography.Text>
      <Typography.Text color="secondary">Secondary text color</Typography.Text>
      <Typography.Text color="disabled">Disabled text color</Typography.Text>
      <Typography.Text color="error">Error text color</Typography.Text>
      <Typography.Text color="warning">Warning text color</Typography.Text>
      <Typography.Text color="success">Success text color</Typography.Text>
      <Typography.Text color="info">Info text color</Typography.Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text with semantic color variants.'
      }
    }
  }
}`,...(L=(P=s.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var I,S,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>
      <Typography.Paragraph>
        The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from 
        BI and data warehousing to generative AI — by unifying their data, analytics and governance.
      </Typography.Paragraph>
      <Typography.Paragraph color="secondary">
        Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, 
        the platform provides a unified approach to data management, analytics and AI.
      </Typography.Paragraph>
      <Typography.Paragraph withoutMargins>
        This paragraph has no margins (withoutMargins prop).
      </Typography.Paragraph>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography.Paragraph for body content with proper spacing.'
      }
    }
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var z,M,H;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <Typography.Text>Email Address</Typography.Text>
        <Typography.Hint>We&apos;ll never share your email with anyone else.</Typography.Hint>
      </div>
      <div>
        <Typography.Text>Password</Typography.Text>
        <Typography.Hint bold>Must be at least 8 characters long.</Typography.Hint>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography.Hint for secondary information and form helper text.'
      }
    }
  }
}`,...(H=(M=p.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var E,W,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <Typography.Link href="https://databricks.com">
          Regular link
        </Typography.Link>
      </div>
      <div>
        <Typography.Link href="https://docs.databricks.com" openInNewTab>
          Documentation (opens in new tab)
        </Typography.Link>
      </div>
      <div>
        <Typography.Link href="#" disabled>
          Disabled link
        </Typography.Link>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography.Link with openInNewTab support and accessibility features.'
      }
    }
  }
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,R,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #ccc',
    padding: '16px'
  }}>
      <Typography.Title level={2} withoutMargins>Title without margins</Typography.Title>
      <Typography.Paragraph withoutMargins>Paragraph without margins</Typography.Paragraph>
      <Typography.Text withoutMargins>Text without margins</Typography.Text>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All components support withoutMargins prop to remove default spacing.'
      }
    }
  }
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var C,q,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography.Title level={3} ellipsis>
        This is a very long title that will be truncated with ellipsis when it exceeds container width
      </Typography.Title>
      <Typography.Text ellipsis>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width
      </Typography.Text>
      <Typography.Paragraph ellipsis>
        This is a very long paragraph that will be truncated with an ellipsis when it exceeds the container width
      </Typography.Paragraph>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text truncation with ellipsis for long content.'
      }
    }
  }
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var O,Q,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '700px',
    padding: '24px'
  }}>
      <Typography.Title level={1}>Welcome to Databricks</Typography.Title>
      <Typography.Text size="lg" color="secondary">
        The Data Intelligence Platform
      </Typography.Text>
      
      <div style={{
      marginTop: '24px'
    }}>
        <Typography.Title level={2}>Unify Your Data, Analytics and AI</Typography.Title>
        <Typography.Paragraph>
          The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — 
          from BI and data warehousing to generative AI — by unifying their data, analytics and governance.
        </Typography.Paragraph>
        
        <Typography.Paragraph>
          Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, 
          the platform provides a unified approach to data management, analytics and AI. Learn more in our{' '}
          <Typography.Link href="https://docs.databricks.com" openInNewTab>
            documentation
          </Typography.Link>.
        </Typography.Paragraph>
      </div>
      
      <div style={{
      marginTop: '24px',
      padding: '16px',
      background: '#F6F7F9',
      borderRadius: '8px'
    }}>
        <Typography.Text bold>Quick Start</Typography.Text>
        <Typography.Hint>
          Get started with Databricks in minutes. Follow our{' '}
          <Typography.Link href="https://docs.databricks.com/getting-started" openInNewTab>
            quick start guide
          </Typography.Link>{' '}
          to set up your first workspace.
        </Typography.Hint>
      </div>
      
      <Typography.Hint style={{
      marginTop: '24px'
    }}>
        Last updated: October 2025
      </Typography.Hint>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive example showcasing all typography components working together.'
      }
    }
  }
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Z=["Titles","TitleWithColors","TextSizes","TextVariants","TextColors","Paragraphs","Hints","Links","WithoutMargins","Ellipsis","RealWorldExample"];export{c as Ellipsis,p as Hints,l as Links,n as Paragraphs,h as RealWorldExample,s as TextColors,i as TextSizes,o as TextVariants,a as TitleWithColors,t as Titles,d as WithoutMargins,Z as __namedExportsOrder,X as default};
