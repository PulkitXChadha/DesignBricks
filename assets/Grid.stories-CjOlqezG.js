import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{G as _,a as o}from"./Grid-BQ1H8qS1.js";import{c as r}from"./colors-DQqI5H06.js";import"./index-Bnmt0x4K.js";import"./index-CWnxZbJP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const X={title:"Layout/Grid",component:_,parameters:{layout:"centered",docs:{description:{component:"A powerful layout container that uses CSS Grid. Use it to build complex two-dimensional layouts with precise control over rows, columns, and positioning."}}},tags:["autodocs"],argTypes:{areas:{control:"object",description:"Grid template areas definition"},columns:{control:"object",description:"Grid template columns"},rows:{control:"object",description:"Grid template rows"},gap:{control:"select",options:["0","1","2","3","4","5","6","8","10","12","16","20","24"],description:"The gap between items"},justifyItems:{control:"select",options:["start","end","center","stretch"],description:"How to align items within their grid area (inline axis)"},alignItems:{control:"select",options:["start","end","center","stretch"],description:"How to align items within their grid area (block axis)"}}},i=({children:T,...h})=>e.jsx("div",{style:{padding:"16px",backgroundColor:h.color||r.primary[200],borderRadius:"4px",minHeight:h.height||"60px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:r.neutral[700]},children:T}),t={args:{columns:["1fr","1fr","1fr"],gap:4,style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(i,{color:r.primary[500],children:"Item 1"})}),e.jsx(o,{children:e.jsx(i,{color:r.purple[500],children:"Item 2"})}),e.jsx(o,{children:e.jsx(i,{color:r.pink[500],children:"Item 3"})}),e.jsx(o,{children:e.jsx(i,{color:r.warning[500],children:"Item 4"})}),e.jsx(o,{children:e.jsx(i,{color:r.success[500],children:"Item 5"})}),e.jsx(o,{children:e.jsx(i,{color:r.turquoise[500],children:"Item 6"})})]})}},n={args:{areas:["header  header","sidebar content","footer  footer"],columns:["200px","1fr"],rows:["60px","1fr","60px"],gap:3,style:{width:"800px",height:"500px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{gridArea:"header",children:e.jsx(i,{color:r.success[500],height:"100%",children:"Header"})}),e.jsx(o,{gridArea:"sidebar",children:e.jsx(i,{color:r.primary[500],height:"100%",children:"Sidebar"})}),e.jsx(o,{gridArea:"content",children:e.jsx(i,{color:r.warning[500],height:"100%",children:"Content"})}),e.jsx(o,{gridArea:"footer",children:e.jsx(i,{color:r.error[500],height:"100%",children:"Footer"})})]})},parameters:{docs:{description:{story:"Classic application layout with header, sidebar, content, and footer areas using grid template areas."}}}},d={args:{areas:["header header header","nav    main   aside","nav    main   aside","footer footer footer"],columns:["200px","1fr","200px"],rows:["60px","1fr","1fr","60px"],gap:4,style:{width:"800px",height:"500px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{gridArea:"header",children:e.jsx(i,{color:r.success[500],height:"100%",children:"Header"})}),e.jsx(o,{gridArea:"nav",children:e.jsx(i,{color:r.primary[500],height:"100%",children:"Navigation"})}),e.jsx(o,{gridArea:"main",children:e.jsx(i,{color:r.warning[500],height:"100%",children:"Main Content"})}),e.jsx(o,{gridArea:"aside",children:e.jsx(i,{color:r.purple[500],height:"100%",children:"Aside"})}),e.jsx(o,{gridArea:"footer",children:e.jsx(i,{color:r.error[500],height:"100%",children:"Footer"})})]})},parameters:{docs:{description:{story:"Complex dashboard layout with header, navigation, main content, aside, and footer."}}}},s={args:{columns:["repeat(auto-fit, minmax(200px, 1fr))"],gap:4,style:{width:"100%",maxWidth:"800px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(i,{color:r.success[500],height:"120px",children:"Card 1"})}),e.jsx(o,{children:e.jsx(i,{color:r.primary[500],height:"120px",children:"Card 2"})}),e.jsx(o,{children:e.jsx(i,{color:r.pink[500],height:"120px",children:"Card 3"})}),e.jsx(o,{children:e.jsx(i,{color:r.warning[500],height:"120px",children:"Card 4"})}),e.jsx(o,{children:e.jsx(i,{color:r.purple[500],height:"120px",children:"Card 5"})}),e.jsx(o,{children:e.jsx(i,{color:r.turquoise[500],height:"120px",children:"Card 6"})})]})},parameters:{docs:{description:{story:"Responsive card grid that automatically adjusts columns based on available space using auto-fit."}}}},a={args:{columns:["repeat(4, 1fr)"],rows:["repeat(3, 100px)"],gap:3,style:{width:"600px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{colSpan:2,children:e.jsx(i,{color:r.success[500],height:"100%",children:"Spans 2 columns"})}),e.jsx(o,{children:e.jsx(i,{color:r.primary[500],height:"100%",children:"Item 2"})}),e.jsx(o,{children:e.jsx(i,{color:r.pink[500],height:"100%",children:"Item 3"})}),e.jsx(o,{children:e.jsx(i,{color:r.warning[500],height:"100%",children:"Item 4"})}),e.jsx(o,{rowSpan:2,children:e.jsx(i,{color:r.purple[500],height:"100%",children:"Spans 2 rows"})}),e.jsx(o,{children:e.jsx(i,{color:r.turquoise[500],height:"100%",children:"Item 6"})}),e.jsx(o,{children:e.jsx(i,{color:r.pink[500],height:"100%",children:"Item 7"})}),e.jsx(o,{children:e.jsx(i,{color:r.primary[500],height:"100%",children:"Item 8"})}),e.jsx(o,{children:e.jsx(i,{color:r.warning[500],height:"100%",children:"Item 9"})})]})},parameters:{docs:{description:{story:"Demonstration of grid items spanning multiple columns and rows using colSpan and rowSpan props."}}}},l={args:{columns:["repeat(3, 1fr)"],justifyItems:"center",alignItems:"center",gap:4,style:{width:"500px",height:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx("div",{style:{width:"80px",height:"40px",padding:"16px",backgroundColor:r.success[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Small"})}),e.jsx(o,{children:e.jsx("div",{style:{width:"100px",height:"60px",padding:"16px",backgroundColor:r.primary[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Medium"})}),e.jsx(o,{children:e.jsx("div",{style:{width:"120px",height:"80px",padding:"16px",backgroundColor:r.purple[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Large"})})]})},parameters:{docs:{description:{story:"Grid items centered within their cells using justifyItems and alignItems properties."}}}},c={args:{columns:["repeat(auto-fit, minmax(150px, 1fr))"],gap:3,style:{width:"500px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx(i,{color:r.success[500],children:"Auto 1"})}),e.jsx(o,{children:e.jsx(i,{color:r.primary[500],children:"Auto 2"})}),e.jsx(o,{children:e.jsx(i,{color:r.pink[500],children:"Auto 3"})}),e.jsx(o,{children:e.jsx(i,{color:r.warning[500],children:"Auto 4"})}),e.jsx(o,{children:e.jsx(i,{color:r.purple[500],children:"Auto 5"})})]})},parameters:{docs:{description:{story:"Responsive columns that automatically fit and wrap based on container width."}}}},p={args:{areas:{base:["header","nav","content","footer"],md:["header   header","nav      content","nav      content","footer   footer"],lg:["header header  header","nav    content aside","nav    content aside","footer footer  footer"]},columns:{md:["12","1fr"],lg:["12","1fr","12"]},gap:3,style:{width:"100%",minHeight:"500px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{gridArea:"header",children:e.jsx(i,{color:r.success[500],height:"60px",children:"Header"})}),e.jsx(o,{gridArea:"nav",children:e.jsx(i,{color:r.primary[500],height:"300px",children:"Navigation"})}),e.jsx(o,{gridArea:"content",children:e.jsx(i,{color:r.warning[500],height:"300px",children:"Main Content"})}),e.jsx(o,{gridArea:"aside",isHidden:{base:!0,lg:!1},children:e.jsx(i,{color:r.purple[500],height:"300px",children:"Aside (Hidden on mobile)"})}),e.jsx(o,{gridArea:"footer",children:e.jsx(i,{color:r.error[500],height:"60px",children:"Footer"})})]})},parameters:{docs:{description:{story:"Responsive grid that adapts layout based on screen size - single column on mobile, two columns on tablet, three columns on desktop."}}}},m={args:{areas:["header header header","nav    main   aside","footer footer footer"],columns:["200px","1fr","200px"],rows:["60px","1fr","60px"],gap:4,style:{width:"800px",height:"500px"},children:e.jsxs(e.Fragment,{children:[e.jsx(o,{gridArea:"header",children:e.jsx(i,{color:r.success[500],height:"100%",children:"Header Navigation"})}),e.jsx(o,{gridArea:"nav",children:e.jsx(i,{color:r.primary[500],height:"100%",children:e.jsxs("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{marginBottom:"12px",fontWeight:"bold",color:"white"},children:"Navigation"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 1"}),e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 2"}),e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 3"})]})]})})}),e.jsx(o,{gridArea:"main",children:e.jsx(i,{color:r.warning[500],height:"100%",children:e.jsxs("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{marginBottom:"16px",fontWeight:"bold",color:"white"},children:"Main Content Area"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",height:"calc(100% - 40px)"},children:[e.jsx("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Content 1"}),e.jsx("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Content 2"}),e.jsx("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",gridColumn:"span 2"},children:"Full Width Content"})]})]})})}),e.jsx(o,{gridArea:"aside",children:e.jsx(i,{color:r.purple[500],height:"100%",children:e.jsxs("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{marginBottom:"12px",fontWeight:"bold",color:"white"},children:"Sidebar"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 1"}),e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 2"}),e.jsx("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 3"})]})]})})}),e.jsx(o,{gridArea:"footer",children:e.jsx(i,{color:r.error[500],height:"100%",children:"Footer Content"})})]})},parameters:{docs:{description:{story:"Complex layout demonstrating how Grid and Flex can be combined, with nested layouts within grid areas."}}}};var x,g,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    columns: ['1fr', '1fr', '1fr'],
    gap: 4,
    style: {
      width: '400px'
    },
    children: <>
        <GridItem>
          <DemoBox color={colors.primary[500]}>Item 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]}>Item 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]}>Item 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]}>Item 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.success[500]}>Item 5</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]}>Item 6</DemoBox>
        </GridItem>
      </>
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,y,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    areas: ['header  header', 'sidebar content', 'footer  footer'],
    columns: ['200px', '1fr'],
    rows: ['60px', '1fr', '60px'],
    gap: 3,
    style: {
      width: '800px',
      height: '500px'
    },
    children: <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="sidebar">
          <DemoBox color={colors.primary[500]} height="100%">Sidebar</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color={colors.warning[500]} height="100%">Content</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Classic application layout with header, sidebar, content, and footer areas using grid template areas.'
      }
    }
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,b,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    areas: ['header header header', 'nav    main   aside', 'nav    main   aside', 'footer footer footer'],
    columns: ['200px', '1fr', '200px'],
    rows: ['60px', '1fr', '1fr', '60px'],
    gap: 4,
    style: {
      width: '800px',
      height: '500px'
    },
    children: <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="100%">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="main">
          <DemoBox color={colors.warning[500]} height="100%">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside">
          <DemoBox color={colors.purple[500]} height="100%">Aside</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex dashboard layout with header, navigation, main content, aside, and footer.'
      }
    }
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var G,D,w;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: ['repeat(auto-fit, minmax(200px, 1fr))'],
    gap: 4,
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <GridItem>
          <DemoBox color={colors.success[500]} height="120px">Card 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="120px">Card 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="120px">Card 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="120px">Card 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]} height="120px">Card 5</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]} height="120px">Card 6</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive card grid that automatically adjusts columns based on available space using auto-fit.'
      }
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,C,A;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    columns: ['repeat(4, 1fr)'],
    rows: ['repeat(3, 100px)'],
    gap: 3,
    style: {
      width: '600px'
    },
    children: <>
        <GridItem colSpan={2}>
          <DemoBox color={colors.success[500]} height="100%">Spans 2 columns</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="100%">Item 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="100%">Item 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="100%">Item 4</DemoBox>
        </GridItem>
        <GridItem rowSpan={2}>
          <DemoBox color={colors.purple[500]} height="100%">Spans 2 rows</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.turquoise[500]} height="100%">Item 6</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]} height="100%">Item 7</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]} height="100%">Item 8</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]} height="100%">Item 9</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of grid items spanning multiple columns and rows using colSpan and rowSpan props.'
      }
    }
  }
}`,...(A=(C=a.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var S,k,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: ['repeat(3, 1fr)'],
    justifyItems: 'center',
    alignItems: 'center',
    gap: 4,
    style: {
      width: '500px',
      height: '200px'
    },
    children: <>
        <GridItem>
          <div style={{
          width: '80px',
          height: '40px',
          padding: '16px',
          backgroundColor: colors.success[500],
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '500',
          color: 'white'
        }}>Small</div>
        </GridItem>
        <GridItem>
          <div style={{
          width: '100px',
          height: '60px',
          padding: '16px',
          backgroundColor: colors.primary[500],
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '500',
          color: 'white'
        }}>Medium</div>
        </GridItem>
        <GridItem>
          <div style={{
          width: '120px',
          height: '80px',
          padding: '16px',
          backgroundColor: colors.purple[500],
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '500',
          color: 'white'
        }}>Large</div>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid items centered within their cells using justifyItems and alignItems properties.'
      }
    }
  }
}`,...(R=(k=l.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var F,W,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    columns: ['repeat(auto-fit, minmax(150px, 1fr))'],
    gap: 3,
    style: {
      width: '500px'
    },
    children: <>
        <GridItem>
          <DemoBox color={colors.success[500]}>Auto 1</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.primary[500]}>Auto 2</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.pink[500]}>Auto 3</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.warning[500]}>Auto 4</DemoBox>
        </GridItem>
        <GridItem>
          <DemoBox color={colors.purple[500]}>Auto 5</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive columns that automatically fit and wrap based on container width.'
      }
    }
  }
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var H,N,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    areas: {
      base: ['header', 'nav', 'content', 'footer'],
      md: ['header   header', 'nav      content', 'nav      content', 'footer   footer'],
      lg: ['header header  header', 'nav    content aside', 'nav    content aside', 'footer footer  footer']
    },
    columns: {
      md: ['12', '1fr'],
      lg: ['12', '1fr', '12']
    },
    gap: 3,
    style: {
      width: '100%',
      minHeight: '500px'
    },
    children: <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="60px">Header</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="300px">Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="content">
          <DemoBox color={colors.warning[500]} height="300px">Main Content</DemoBox>
        </GridItem>
        <GridItem gridArea="aside" isHidden={{
        base: true,
        lg: false
      }}>
          <DemoBox color={colors.purple[500]} height="300px">Aside (Hidden on mobile)</DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="60px">Footer</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid that adapts layout based on screen size - single column on mobile, two columns on tablet, three columns on desktop.'
      }
    }
  }
}`,...(L=(N=p.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var M,q,E;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    areas: ['header header header', 'nav    main   aside', 'footer footer footer'],
    columns: ['200px', '1fr', '200px'],
    rows: ['60px', '1fr', '60px'],
    gap: 4,
    style: {
      width: '800px',
      height: '500px'
    },
    children: <>
        <GridItem gridArea="header">
          <DemoBox color={colors.success[500]} height="100%">Header Navigation</DemoBox>
        </GridItem>
        <GridItem gridArea="nav">
          <DemoBox color={colors.primary[500]} height="100%">
            <div style={{
            padding: '16px',
            height: '100%',
            boxSizing: 'border-box'
          }}>
              <div style={{
              marginBottom: '12px',
              fontWeight: 'bold',
              color: 'white'
            }}>Navigation</div>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px'
              }}>Nav 1</div>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px'
              }}>Nav 2</div>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px'
              }}>Nav 3</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="main">
          <DemoBox color={colors.warning[500]} height="100%">
            <div style={{
            padding: '16px',
            height: '100%',
            boxSizing: 'border-box'
          }}>
              <div style={{
              marginBottom: '16px',
              fontWeight: 'bold',
              color: 'white'
            }}>Main Content Area</div>
              <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              height: 'calc(100% - 40px)'
            }}>
                <div style={{
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px'
              }}>Content 1</div>
                <div style={{
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px'
              }}>Content 2</div>
                <div style={{
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                gridColumn: 'span 2'
              }}>Full Width Content</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="aside">
          <DemoBox color={colors.purple[500]} height="100%">
            <div style={{
            padding: '16px',
            height: '100%',
            boxSizing: 'border-box'
          }}>
              <div style={{
              marginBottom: '12px',
              fontWeight: 'bold',
              color: 'white'
            }}>Sidebar</div>
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontSize: '12px'
              }}>Widget 1</div>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontSize: '12px'
              }}>Widget 2</div>
                <div style={{
                padding: '8px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontSize: '12px'
              }}>Widget 3</div>
              </div>
            </div>
          </DemoBox>
        </GridItem>
        <GridItem gridArea="footer">
          <DemoBox color={colors.error[500]} height="100%">Footer Content</DemoBox>
        </GridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex layout demonstrating how Grid and Flex can be combined, with nested layouts within grid areas.'
      }
    }
  }
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Y=["Default","BasicApplicationLayout","DashboardLayout","ResponsiveCardGrid","SpanningItems","AlignmentExample","AutoFitColumns","ResponsiveLayout","NestedGridWithFlex"];export{l as AlignmentExample,c as AutoFitColumns,n as BasicApplicationLayout,d as DashboardLayout,t as Default,m as NestedGridWithFlex,s as ResponsiveCardGrid,p as ResponsiveLayout,a as SpanningItems,Y as __namedExportsOrder,X as default};
