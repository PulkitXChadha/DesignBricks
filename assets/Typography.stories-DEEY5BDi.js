import{a as t,j as r}from"./jsx-runtime-D2eXtamC.js";import{T as e}from"./Typography-CBsoleyH.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const Z={title:"Foundation/Typography",component:e,parameters:{docs:{description:{component:"\nTypography components for consistent text rendering based on Databricks Design System.\n\n## Compound Components\n- `Typography.Title` - Headings (h1-h4)\n- `Typography.Text` - General text with size variants\n- `Typography.Paragraph` - Paragraph text\n- `Typography.Hint` - Secondary/helper text  \n- `Typography.Link` - Links with new tab support\n\n## Features\n- Size system: sm (12px), md (13px), lg (18px), xl (22px), xxl (32px)\n- Color variants: primary, secondary, disabled, error, warning, success, info\n- `withoutMargins` prop to remove default margins\n- `ellipsis` prop for text truncation\n- `bold` prop for bold text\n- `code` prop for inline code styling\n        ".trim()}}},tags:["autodocs"]},a={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(e.Title,{level:1,children:"Title Level 1 - 32px / 40px line-height"}),r(e.Title,{level:2,children:"Title Level 2 - 22px / 28px line-height"}),r(e.Title,{level:3,children:"Title Level 3 - 18px / 24px line-height"}),r(e.Title,{level:4,children:"Title Level 4 - 13px / 20px line-height"})]}),parameters:{docs:{description:{story:"Typography.Title renders semantic heading elements (h1-h4) with Databricks design system sizing."}}}},n={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r(e.Title,{level:2,color:"primary",children:"Primary Title"}),r(e.Title,{level:2,color:"secondary",children:"Secondary Title"}),r(e.Title,{level:2,color:"error",children:"Error Title"}),r(e.Title,{level:2,color:"success",children:"Success Title"})]}),parameters:{docs:{description:{story:"Titles with different color variants."}}}},i={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r(e.Text,{size:"sm",children:"Small text (12px / 16px)"}),r(e.Text,{size:"md",children:"Medium text (13px / 20px) - Default"}),r(e.Text,{size:"lg",children:"Large text (18px / 24px)"}),r(e.Text,{size:"xl",children:"Extra large text (22px / 28px)"}),r(e.Text,{size:"xxl",children:"Extra extra large text (32px / 40px)"})]}),parameters:{docs:{description:{story:"Typography.Text with Databricks size system: sm, md, lg, xl, xxl."}}}},o={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r(e.Text,{children:"Regular text"}),r(e.Text,{bold:!0,children:"Bold text (600 weight)"}),r(e.Text,{code:!0,children:'const code = "inline code";'}),r(e.Text,{disabled:!0,children:"Disabled text"})]}),parameters:{docs:{description:{story:"Different text variants including bold, code, and disabled states."}}}},s={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r(e.Text,{color:"primary",children:"Primary text color"}),r(e.Text,{color:"secondary",children:"Secondary text color"}),r(e.Text,{color:"disabled",children:"Disabled text color"}),r(e.Text,{color:"error",children:"Error text color"}),r(e.Text,{color:"warning",children:"Warning text color"}),r(e.Text,{color:"success",children:"Success text color"}),r(e.Text,{color:"info",children:"Info text color"})]}),parameters:{docs:{description:{story:"Text with semantic color variants."}}}},p={render:()=>t("div",{style:{maxWidth:"600px"},children:[r(e.Paragraph,{children:"The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from BI and data warehousing to generative AI — by unifying their data, analytics and governance."}),r(e.Paragraph,{color:"secondary",children:"Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, the platform provides a unified approach to data management, analytics and AI."}),r(e.Paragraph,{withoutMargins:!0,children:"This paragraph has no margins (withoutMargins prop)."})]}),parameters:{docs:{description:{story:"Typography.Paragraph for body content with proper spacing."}}}},l={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t("div",{children:[r(e.Text,{children:"Email Address"}),r(e.Hint,{children:"We'll never share your email with anyone else."})]}),t("div",{children:[r(e.Text,{children:"Password"}),r(e.Hint,{bold:!0,children:"Must be at least 8 characters long."})]})]}),parameters:{docs:{description:{story:"Typography.Hint for secondary information and form helper text."}}}},d={render:()=>t("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r("div",{children:r(e.Link,{href:"https://databricks.com",children:"Regular link"})}),r("div",{children:r(e.Link,{href:"https://docs.databricks.com",openInNewTab:!0,children:"Documentation (opens in new tab)"})}),r("div",{children:r(e.Link,{href:"#",disabled:!0,children:"Disabled link"})})]}),parameters:{docs:{description:{story:"Typography.Link with openInNewTab support and accessibility features."}}}},c={render:()=>t("div",{style:{border:"1px solid #ccc",padding:"16px"},children:[r(e.Title,{level:2,withoutMargins:!0,children:"Title without margins"}),r(e.Paragraph,{withoutMargins:!0,children:"Paragraph without margins"}),r(e.Text,{withoutMargins:!0,children:"Text without margins"})]}),parameters:{docs:{description:{story:"All components support withoutMargins prop to remove default spacing."}}}},h={render:()=>t("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[r(e.Title,{level:3,ellipsis:!0,children:"This is a very long title that will be truncated with ellipsis when it exceeds container width"}),r(e.Text,{ellipsis:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"}),r(e.Paragraph,{ellipsis:!0,children:"This is a very long paragraph that will be truncated with an ellipsis when it exceeds the container width"})]}),parameters:{docs:{description:{story:"Text truncation with ellipsis for long content."}}}},y={render:()=>t("div",{style:{maxWidth:"700px",padding:"24px"},children:[r(e.Title,{level:1,children:"Welcome to Databricks"}),r(e.Text,{size:"lg",color:"secondary",children:"The Data Intelligence Platform"}),t("div",{style:{marginTop:"24px"},children:[r(e.Title,{level:2,children:"Unify Your Data, Analytics and AI"}),r(e.Paragraph,{children:"The Databricks Data Intelligence Platform empowers teams to tackle enterprise data and AI initiatives — from BI and data warehousing to generative AI — by unifying their data, analytics and governance."}),t(e.Paragraph,{children:["Built on an open lakehouse architecture that combines the best of data lakes and data warehouses, the platform provides a unified approach to data management, analytics and AI. Learn more in our"," ",r(e.Link,{href:"https://docs.databricks.com",openInNewTab:!0,children:"documentation"}),"."]})]}),t("div",{style:{marginTop:"24px",padding:"16px",background:"#F6F7F9",borderRadius:"8px"},children:[r(e.Text,{bold:!0,children:"Quick Start"}),t(e.Hint,{children:["Get started with Databricks in minutes. Follow our"," ",r(e.Link,{href:"https://docs.databricks.com/getting-started",openInNewTab:!0,children:"quick start guide"})," ","to set up your first workspace."]})]}),r(e.Hint,{style:{marginTop:"24px"},children:"Last updated: October 2025"})]}),parameters:{docs:{description:{story:"A comprehensive example showcasing all typography components working together."}}}};var g,T,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(T=a.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,w,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var k,D,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var L,I,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var A,z,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(z=p.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var H,W,E;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var B,F,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var R,C,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(C=c.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var j,G,O;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(G=h.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var Q,U,V;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const $=["Titles","TitleWithColors","TextSizes","TextVariants","TextColors","Paragraphs","Hints","Links","WithoutMargins","Ellipsis","RealWorldExample"];export{h as Ellipsis,l as Hints,d as Links,p as Paragraphs,y as RealWorldExample,s as TextColors,i as TextSizes,o as TextVariants,n as TitleWithColors,a as Titles,c as WithoutMargins,$ as __namedExportsOrder,Z as default};
