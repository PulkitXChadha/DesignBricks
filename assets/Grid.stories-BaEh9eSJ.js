import{a as i,F as t,j as e}from"./jsx-runtime-D2eXtamC.js";import{G as U,a as o}from"./Grid-lLusimG2.js";import{c as r}from"./colors-DQqI5H06.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const Y={title:"Layout/Grid",component:U,parameters:{layout:"centered",docs:{description:{component:"A powerful layout container that uses CSS Grid. Use it to build complex two-dimensional layouts with precise control over rows, columns, and positioning."}}},tags:["autodocs"],argTypes:{areas:{control:"object",description:"Grid template areas definition"},columns:{control:"object",description:"Grid template columns"},rows:{control:"object",description:"Grid template rows"},gap:{control:"select",options:["0","1","2","3","4","5","6","8","10","12","16","20","24"],description:"The gap between items"},justifyItems:{control:"select",options:["start","end","center","stretch"],description:"How to align items within their grid area (inline axis)"},alignItems:{control:"select",options:["start","end","center","stretch"],description:"How to align items within their grid area (block axis)"}}},n=({children:O,...x})=>e("div",{style:{padding:"16px",backgroundColor:x.color||r.primary[200],borderRadius:"4px",minHeight:x.height||"60px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:r.neutral[700]},children:O}),d={args:{columns:["1fr","1fr","1fr"],gap:4,style:{width:"400px"},children:i(t,{children:[e(o,{children:e(n,{color:r.primary[500],children:"Item 1"})}),e(o,{children:e(n,{color:r.purple[500],children:"Item 2"})}),e(o,{children:e(n,{color:r.pink[500],children:"Item 3"})}),e(o,{children:e(n,{color:r.warning[500],children:"Item 4"})}),e(o,{children:e(n,{color:r.success[500],children:"Item 5"})}),e(o,{children:e(n,{color:r.turquoise[500],children:"Item 6"})})]})}},a={args:{areas:["header  header","sidebar content","footer  footer"],columns:["200px","1fr"],rows:["60px","1fr","60px"],gap:3,style:{width:"800px",height:"500px"},children:i(t,{children:[e(o,{gridArea:"header",children:e(n,{color:r.success[500],height:"100%",children:"Header"})}),e(o,{gridArea:"sidebar",children:e(n,{color:r.primary[500],height:"100%",children:"Sidebar"})}),e(o,{gridArea:"content",children:e(n,{color:r.warning[500],height:"100%",children:"Content"})}),e(o,{gridArea:"footer",children:e(n,{color:r.error[500],height:"100%",children:"Footer"})})]})},parameters:{docs:{description:{story:"Classic application layout with header, sidebar, content, and footer areas using grid template areas."}}}},s={args:{areas:["header header header","nav    main   aside","nav    main   aside","footer footer footer"],columns:["200px","1fr","200px"],rows:["60px","1fr","1fr","60px"],gap:4,style:{width:"800px",height:"500px"},children:i(t,{children:[e(o,{gridArea:"header",children:e(n,{color:r.success[500],height:"100%",children:"Header"})}),e(o,{gridArea:"nav",children:e(n,{color:r.primary[500],height:"100%",children:"Navigation"})}),e(o,{gridArea:"main",children:e(n,{color:r.warning[500],height:"100%",children:"Main Content"})}),e(o,{gridArea:"aside",children:e(n,{color:r.purple[500],height:"100%",children:"Aside"})}),e(o,{gridArea:"footer",children:e(n,{color:r.error[500],height:"100%",children:"Footer"})})]})},parameters:{docs:{description:{story:"Complex dashboard layout with header, navigation, main content, aside, and footer."}}}},l={args:{columns:["repeat(auto-fit, minmax(200px, 1fr))"],gap:4,style:{width:"100%",maxWidth:"800px"},children:i(t,{children:[e(o,{children:e(n,{color:r.success[500],height:"120px",children:"Card 1"})}),e(o,{children:e(n,{color:r.primary[500],height:"120px",children:"Card 2"})}),e(o,{children:e(n,{color:r.pink[500],height:"120px",children:"Card 3"})}),e(o,{children:e(n,{color:r.warning[500],height:"120px",children:"Card 4"})}),e(o,{children:e(n,{color:r.purple[500],height:"120px",children:"Card 5"})}),e(o,{children:e(n,{color:r.turquoise[500],height:"120px",children:"Card 6"})})]})},parameters:{docs:{description:{story:"Responsive card grid that automatically adjusts columns based on available space using auto-fit."}}}},c={args:{columns:["repeat(4, 1fr)"],rows:["repeat(3, 100px)"],gap:3,style:{width:"600px"},children:i(t,{children:[e(o,{colSpan:2,children:e(n,{color:r.success[500],height:"100%",children:"Spans 2 columns"})}),e(o,{children:e(n,{color:r.primary[500],height:"100%",children:"Item 2"})}),e(o,{children:e(n,{color:r.pink[500],height:"100%",children:"Item 3"})}),e(o,{children:e(n,{color:r.warning[500],height:"100%",children:"Item 4"})}),e(o,{rowSpan:2,children:e(n,{color:r.purple[500],height:"100%",children:"Spans 2 rows"})}),e(o,{children:e(n,{color:r.turquoise[500],height:"100%",children:"Item 6"})}),e(o,{children:e(n,{color:r.pink[500],height:"100%",children:"Item 7"})}),e(o,{children:e(n,{color:r.primary[500],height:"100%",children:"Item 8"})}),e(o,{children:e(n,{color:r.warning[500],height:"100%",children:"Item 9"})})]})},parameters:{docs:{description:{story:"Demonstration of grid items spanning multiple columns and rows using colSpan and rowSpan props."}}}},p={args:{columns:["repeat(3, 1fr)"],justifyItems:"center",alignItems:"center",gap:4,style:{width:"500px",height:"200px"},children:i(t,{children:[e(o,{children:e("div",{style:{width:"80px",height:"40px",padding:"16px",backgroundColor:r.success[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Small"})}),e(o,{children:e("div",{style:{width:"100px",height:"60px",padding:"16px",backgroundColor:r.primary[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Medium"})}),e(o,{children:e("div",{style:{width:"120px",height:"80px",padding:"16px",backgroundColor:r.purple[500],borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500",color:"white"},children:"Large"})})]})},parameters:{docs:{description:{story:"Grid items centered within their cells using justifyItems and alignItems properties."}}}},h={args:{columns:["repeat(auto-fit, minmax(150px, 1fr))"],gap:3,style:{width:"500px"},children:i(t,{children:[e(o,{children:e(n,{color:r.success[500],children:"Auto 1"})}),e(o,{children:e(n,{color:r.primary[500],children:"Auto 2"})}),e(o,{children:e(n,{color:r.pink[500],children:"Auto 3"})}),e(o,{children:e(n,{color:r.warning[500],children:"Auto 4"})}),e(o,{children:e(n,{color:r.purple[500],children:"Auto 5"})})]})},parameters:{docs:{description:{story:"Responsive columns that automatically fit and wrap based on container width."}}}},m={args:{areas:{base:["header","nav","content","footer"],md:["header   header","nav      content","nav      content","footer   footer"],lg:["header header  header","nav    content aside","nav    content aside","footer footer  footer"]},columns:{md:["12","1fr"],lg:["12","1fr","12"]},gap:3,style:{width:"100%",minHeight:"500px"},children:i(t,{children:[e(o,{gridArea:"header",children:e(n,{color:r.success[500],height:"60px",children:"Header"})}),e(o,{gridArea:"nav",children:e(n,{color:r.primary[500],height:"300px",children:"Navigation"})}),e(o,{gridArea:"content",children:e(n,{color:r.warning[500],height:"300px",children:"Main Content"})}),e(o,{gridArea:"aside",isHidden:{base:!0,lg:!1},children:e(n,{color:r.purple[500],height:"300px",children:"Aside (Hidden on mobile)"})}),e(o,{gridArea:"footer",children:e(n,{color:r.error[500],height:"60px",children:"Footer"})})]})},parameters:{docs:{description:{story:"Responsive grid that adapts layout based on screen size - single column on mobile, two columns on tablet, three columns on desktop."}}}},g={args:{areas:["header header header","nav    main   aside","footer footer footer"],columns:["200px","1fr","200px"],rows:["60px","1fr","60px"],gap:4,style:{width:"800px",height:"500px"},children:i(t,{children:[e(o,{gridArea:"header",children:e(n,{color:r.success[500],height:"100%",children:"Header Navigation"})}),e(o,{gridArea:"nav",children:e(n,{color:r.primary[500],height:"100%",children:i("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e("div",{style:{marginBottom:"12px",fontWeight:"bold",color:"white"},children:"Navigation"}),i("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 1"}),e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 2"}),e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Nav 3"})]})]})})}),e(o,{gridArea:"main",children:e(n,{color:r.warning[500],height:"100%",children:i("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e("div",{style:{marginBottom:"16px",fontWeight:"bold",color:"white"},children:"Main Content Area"}),i("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",height:"calc(100% - 40px)"},children:[e("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Content 1"}),e("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px"},children:"Content 2"}),e("div",{style:{padding:"12px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",gridColumn:"span 2"},children:"Full Width Content"})]})]})})}),e(o,{gridArea:"aside",children:e(n,{color:r.purple[500],height:"100%",children:i("div",{style:{padding:"16px",height:"100%",boxSizing:"border-box"},children:[e("div",{style:{marginBottom:"12px",fontWeight:"bold",color:"white"},children:"Sidebar"}),i("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 1"}),e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 2"}),e("div",{style:{padding:"8px",backgroundColor:"rgba(255,255,255,0.2)",borderRadius:"4px",fontSize:"12px"},children:"Widget 3"})]})]})})}),e(o,{gridArea:"footer",children:e(n,{color:r.error[500],height:"100%",children:"Footer Content"})})]})},parameters:{docs:{description:{story:"Complex layout demonstrating how Grid and Flex can be combined, with nested layouts within grid areas."}}}};var u,f,y;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,b,v;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var G,D,w;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,C,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var S,k,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var W,z,j;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(z=p.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var F,H,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var L,M,q;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var T,E,_;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(E=g.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const Z=["Default","BasicApplicationLayout","DashboardLayout","ResponsiveCardGrid","SpanningItems","AlignmentExample","AutoFitColumns","ResponsiveLayout","NestedGridWithFlex"];export{p as AlignmentExample,h as AutoFitColumns,a as BasicApplicationLayout,s as DashboardLayout,d as Default,g as NestedGridWithFlex,l as ResponsiveCardGrid,m as ResponsiveLayout,c as SpanningItems,Z as __namedExportsOrder,Y as default};
