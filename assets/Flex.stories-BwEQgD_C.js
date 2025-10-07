import{j as e,a as r,F as i}from"./jsx-runtime-D2eXtamC.js";import{r as Te}from"./index-SE77F2UD.js";import{c as Je}from"./clsx-B-dksMZM.js";import{C as a}from"./Colors-D1YDdYlB.js";import{c as o}from"./colors-DQqI5H06.js";import"./_commonjsHelpers-DM6icglO.js";function s(l,c){return l===void 0?c:typeof l=="object"&&l!==null?l.base??Object.values(l)[0]??c:l}function d(l){return l===void 0?void 0:typeof l=="string"&&(l==="auto"||l.includes("px")||l.includes("%")||l.includes("fr")||l.includes("rem")||l.includes("em"))?l:{0:"0",px:"1px","0.5":"2px",1:"4px","1.5":"6px",2:"8px","2.5":"10px",3:"12px","3.5":"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",11:"44px",12:"48px",14:"56px",16:"64px",20:"80px",24:"96px",28:"112px",32:"128px"}[String(l)]||String(l)}const t=Te.forwardRef(({direction:l="row",wrap:c="nowrap",justifyContent:qe="flex-start",alignItems:Re="stretch",alignContent:We="stretch",gap:Ae,rowGap:Ge,columnGap:je,width:V,height:k,minWidth:H,maxWidth:v,minHeight:q,maxHeight:R,grow:p,shrink:m,basis:W,inline:Ne=!1,isHidden:Le,as:ze="div",children:Me,className:$e,style:Ee,..._e},Pe)=>{const A=s(l,"row"),G=s(c,"nowrap"),j=s(qe,"flex-start"),N=s(Re,"stretch"),L=s(We,"stretch"),z=s(Ae),M=s(Ge),$=s(je),E=s(Le,!1),Oe={...Ee,...p!==void 0&&{flexGrow:typeof p=="boolean"?p?1:0:p},...m!==void 0&&{flexShrink:typeof m=="boolean"?m?1:0:m},...W&&{flexBasis:W},...V&&{width:d(s(V))},...k&&{height:d(s(k))},...H&&{minWidth:d(s(H))},...v&&{maxWidth:d(s(v))},...q&&{minHeight:d(s(q))},...R&&{maxHeight:d(s(R))},...E&&{display:"none"}};return E?null:e(ze,{ref:Pe,className:Je(Ne?"db-flex-inline":"db-flex",A&&`db-flex--direction-${A}`,G&&`db-flex--wrap-${G}`,j&&`db-flex--justify-${j.replace("flex-","")}`,N&&`db-flex--align-items-${N.replace("flex-","")}`,L&&`db-flex--align-content-${L.replace("flex-","")}`,{[`db-flex--gap-${z}`]:z,[`db-flex--row-gap-${M}`]:M,[`db-flex--column-gap-${$}`]:$},$e),style:Oe,..._e,children:Me})});t.displayName="Flex";try{t.displayName="Flex",t.__docgenInfo={description:"",displayName:"Flex",props:{direction:{defaultValue:{value:"row"},description:"Flex direction",name:"direction",required:!1,type:{name:"BreakpointValue<FlexDirection>"}},wrap:{defaultValue:{value:"nowrap"},description:"Flex wrap",name:"wrap",required:!1,type:{name:"BreakpointValue<FlexWrap>"}},justifyContent:{defaultValue:{value:"flex-start"},description:"Justify content (main axis alignment)",name:"justifyContent",required:!1,type:{name:"BreakpointValue<JustifyContent>"}},alignItems:{defaultValue:{value:"stretch"},description:"Align items (cross axis alignment)",name:"alignItems",required:!1,type:{name:"BreakpointValue<AlignItems>"}},alignContent:{defaultValue:{value:"stretch"},description:"Align content (cross axis alignment for wrapped lines)",name:"alignContent",required:!1,type:{name:"BreakpointValue<AlignContent>"}},gap:{defaultValue:null,description:"Gap between items",name:"gap",required:!1,type:{name:'BreakpointValue<0 | "px" | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32>'}},rowGap:{defaultValue:null,description:"Row gap between items",name:"rowGap",required:!1,type:{name:'BreakpointValue<0 | "px" | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32>'}},columnGap:{defaultValue:null,description:"Column gap between items",name:"columnGap",required:!1,type:{name:'BreakpointValue<0 | "px" | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32>'}},width:{defaultValue:null,description:"Width of the flex container",name:"width",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},height:{defaultValue:null,description:"Height of the flex container",name:"height",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},minWidth:{defaultValue:null,description:"Minimum width",name:"minWidth",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},maxWidth:{defaultValue:null,description:"Maximum width",name:"maxWidth",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},minHeight:{defaultValue:null,description:"Minimum height",name:"minHeight",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},maxHeight:{defaultValue:null,description:"Maximum height",name:"maxHeight",required:!1,type:{name:"BreakpointValue<DimensionValue>"}},grow:{defaultValue:null,description:"Flex grow",name:"grow",required:!1,type:{name:"number | boolean"}},shrink:{defaultValue:null,description:"Flex shrink",name:"shrink",required:!1,type:{name:"number | boolean"}},basis:{defaultValue:null,description:"Flex basis",name:"basis",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"Inline flex",name:"inline",required:!1,type:{name:"boolean"}},isHidden:{defaultValue:null,description:"Whether the element is hidden",name:"isHidden",required:!1,type:{name:"BreakpointValue<boolean>"}},as:{defaultValue:{value:"div"},description:"Element type to render",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},children:{defaultValue:null,description:"Children",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class name",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Inline styles",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"ARIA role",name:"role",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"ARIA label for accessibility",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"ARIA labelledby for accessibility",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"ARIA describedby for accessibility",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}const eo={title:"Layout/Flex",component:t,parameters:{layout:"centered",docs:{description:{component:"A flexible layout container that uses CSS flexbox. Use it to build vertical or horizontal stacks, simple wrapping grids, and more complex layouts."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"The flex direction"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Whether flex items should wrap"},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"How to align items along the main axis"},alignItems:{control:"select",options:["flex-start","flex-end","center","baseline","stretch"],description:"How to align items along the cross axis"},gap:{control:"select",options:["0","1","2","3","4","5","6","8","10","12","16","20","24"],description:"The gap between items"}}},n=({children:l,...c})=>e("div",{style:{padding:"16px",backgroundColor:c.color||o.info[100],borderRadius:"4px",minHeight:"60px",height:c.height,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500"},children:l}),x={args:{gap:"4",children:r(i,{children:[e(n,{children:"Item 1"}),e(n,{children:"Item 2"}),e(n,{children:"Item 3"})]})}},u={args:{direction:"column",gap:"3",style:{width:"200px"},children:r(i,{children:[e(n,{color:o.success[100],children:"Item 1"}),e(n,{color:o.info[100],children:"Item 2"}),e(n,{color:o.pink[100],children:"Item 3"})]})}},h={args:{justifyContent:"center",alignItems:"center",style:{height:"200px",width:"300px",border:`2px dashed ${o.neutral[300]}`},children:e(n,{children:"Centered Item"})}},g={args:{justifyContent:"space-between",alignItems:"center",style:{width:"300px",padding:"16px",border:`2px dashed ${o.neutral[300]}`},children:r(i,{children:[e(n,{color:o.success[100],children:"Start"}),e(n,{color:o.info[100],children:"Middle"}),e(n,{color:o.pink[100],children:"End"})]})}},y={args:{wrap:"wrap",gap:"2",style:{width:"200px"},children:r(i,{children:[e(n,{children:"Item 1"}),e(n,{children:"Item 2"}),e(n,{children:"Item 3"}),e(n,{children:"Item 4"}),e(n,{children:"Item 5"})]})}},f={args:{gap:"2",style:{width:"400px"},children:r(i,{children:[e(n,{children:"Fixed"}),e(t,{grow:1,children:e(n,{color:o.success[100],children:"Grows to fill space"})}),e(n,{children:"Fixed"})]})}},w={args:{direction:"column",gap:"4",style:{width:"100%",maxWidth:"600px"},children:r(i,{children:[r(t,{justifyContent:"space-between",alignItems:"center",gap:"3",children:[e(n,{color:o.success[100],children:"Header Left"}),e(n,{color:o.pink[100],children:"Header Right"})]}),r(t,{gap:"4",children:[r(t,{direction:"column",gap:"2",style:{flex:1},children:[e(n,{color:o.info[100],children:"Content 1"}),e(n,{color:o.info[100],children:"Content 2"})]}),r(t,{direction:"column",gap:"2",style:{width:"200px"},children:[e(n,{color:o.lemon[100],children:"Sidebar 1"}),e(n,{color:o.lemon[100],children:"Sidebar 2"})]})]})]})}},b={args:{direction:"column",width:"20",gap:"3",children:r(i,{children:[e(n,{color:o.success[400],height:"80px",children:"Item 1 (Green)"}),e(n,{color:o.primary[400],height:"80px",children:"Item 2 (Blue)"}),e(n,{color:o.warning[400],height:"80px",children:"Item 3 (Orange)"})]})},parameters:{docs:{description:{story:"A vertical stack example using design tokens for consistent spacing and sizing."}}}},B={args:{direction:{base:"column",md:"row"},gap:"4",style:{width:"100%",maxWidth:"800px"},children:r(i,{children:[e(n,{color:o.success[100],children:"Item 1"}),e(n,{color:o.info[100],children:"Item 2"}),e(n,{color:o.pink[100],children:"Item 3"})]})},parameters:{docs:{description:{story:"Responsive direction that changes from column on mobile to row on medium screens and up."}}}},D={args:{direction:"column",gap:"4",style:{width:"100%",maxWidth:"800px"},children:r(i,{children:[r(t,{justifyContent:"space-between",alignItems:"center",style:{padding:"16px",backgroundColor:o.neutral[100],borderRadius:"8px"},children:[e(n,{color:o.success[500],style:{width:"120px",height:"40px"},children:"Logo"}),r(t,{gap:"3",children:[e(n,{color:o.indigo[400],style:{width:"80px",height:"40px"},children:"Nav 1"}),e(n,{color:o.purple[400],style:{width:"80px",height:"40px"},children:"Nav 2"}),e(n,{color:o.warning[400],style:{width:"80px",height:"40px"},children:"Nav 3"})]})]}),r(t,{gap:"4",children:[r(t,{direction:"column",gap:"3",grow:1,children:[e(n,{color:o.error[400],height:"120px",children:"Main Content"}),r(t,{gap:"2",children:[e(n,{color:o.coral[400],height:"80px",style:{flex:1},children:"Sub Item 1"}),e(n,{color:o.lemon[400],height:"80px",style:{flex:1},children:"Sub Item 2"})]})]}),r(t,{direction:"column",gap:"2",style:{width:"200px"},children:[e(n,{color:o.turquoise[400],height:"60px",children:"Sidebar 1"}),e(n,{color:o.turquoise[500],height:"60px",children:"Sidebar 2"}),e(n,{color:o.turquoise[600],height:"60px",children:"Sidebar 3"})]})]})]})},parameters:{docs:{description:{story:"Complex nested layout demonstrating how Flex components can be combined to create sophisticated application layouts."}}}},F={args:{direction:"column",gap:{base:"2",md:"4",lg:"6"},style:{width:"100%",maxWidth:"600px"},children:r(i,{children:[e(n,{color:o.error[400],children:"Gap scales with screen size"}),e(n,{color:o.lemon[400],children:"Small gap on mobile"}),e(n,{color:o.success[400],children:"Medium gap on tablet"}),e(n,{color:o.primary[400],children:"Large gap on desktop"})]})},parameters:{docs:{description:{story:"Responsive gaps that adapt to different screen sizes - resize the browser to see the effect."}}}},C={args:{direction:"column",gap:"6",style:{width:"100%",maxWidth:"800px"},children:r(i,{children:[e(a,{category:"primary",showHex:!0}),e(a,{category:"success",showHex:!0}),e(a,{category:"warning",showHex:!0})]})},parameters:{layout:"padded",docs:{description:{story:"Demonstrates using the Colors component within Flex layouts to display multiple color palettes vertically."}}}},I={render:()=>r(t,{direction:"column",gap:"4",style:{width:"100%",maxWidth:"1200px"},children:[r(t,{gap:"4",wrap:"wrap",children:[e(t,{direction:"column",style:{flex:"1 1 300px"},children:e(a,{category:"primary",showHex:!1})}),e(t,{direction:"column",style:{flex:"1 1 300px"},children:e(a,{category:"secondary",showHex:!1})})]}),r(t,{gap:"4",wrap:"wrap",children:[e(t,{direction:"column",style:{flex:"1 1 300px"},children:e(a,{category:"success",showHex:!1})}),e(t,{direction:"column",style:{flex:"1 1 300px"},children:e(a,{category:"error",showHex:!1})})]})]}),parameters:{layout:"padded",docs:{description:{story:"A responsive grid layout using Flex to display color palettes in a 2-column layout that wraps on smaller screens."}}}},S={render:()=>r(t,{direction:"column",gap:"8",style:{width:"100%"},children:[r(t,{direction:"column",gap:"4",style:{padding:"24px",backgroundColor:o.neutral[50],borderRadius:"8px"},children:[e("h2",{style:{margin:0,color:o.neutral[700]},children:"Primary Colors"}),e(a,{category:"primary",showHex:!0})]}),r(t,{gap:"4",wrap:"wrap",children:[r(t,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:o.success[100],borderRadius:"8px"},children:[e("h3",{style:{margin:0,color:o.success[700]},children:"Success"}),e(a,{category:"success",showHex:!0})]}),r(t,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:o.warning[100],borderRadius:"8px"},children:[e("h3",{style:{margin:0,color:o.warning[700]},children:"Warning"}),e(a,{category:"warning",showHex:!0})]}),r(t,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:o.error[100],borderRadius:"8px"},children:[e("h3",{style:{margin:0,color:o.error[700]},children:"Error"}),e(a,{category:"error",showHex:!0})]})]}),r(t,{direction:"column",gap:"4",style:{padding:"24px",backgroundColor:o.neutral[700],borderRadius:"8px"},children:[e("h2",{style:{margin:0,color:o.neutral[0]},children:"Secondary Accent Colors"}),r(t,{gap:"4",wrap:"wrap",children:[e(a,{category:"purple",showHex:!1}),e(a,{category:"pink",showHex:!1}),e(a,{category:"teal",showHex:!1}),e(a,{category:"turquoise",showHex:!1})]})]})]}),parameters:{layout:"padded",docs:{description:{story:"A comprehensive showcase of the design system using Flex for complex layouts with multiple color palettes organized in different sections."}}}};var _,P,O;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    gap: '4',
    children: <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
  }
}`,...(O=(P=x.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var T,J,U;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '3',
    style: {
      width: '200px'
    },
    children: <>
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
      </>
  }
}`,...(U=(J=u.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    style: {
      height: '200px',
      width: '300px',
      border: \`2px dashed \${colors.neutral[300]}\`
    },
    children: <DemoBox>Centered Item</DemoBox>
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    style: {
      width: '300px',
      padding: '16px',
      border: \`2px dashed \${colors.neutral[300]}\`
    },
    children: <>
        <DemoBox color={colors.success[100]}>Start</DemoBox>
        <DemoBox color={colors.info[100]}>Middle</DemoBox>
        <DemoBox color={colors.pink[100]}>End</DemoBox>
      </>
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,ne,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    wrap: 'wrap',
    gap: '2',
    style: {
      width: '200px'
    },
    children: <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
      </>
  }
}`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,le,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    gap: '2',
    style: {
      width: '400px'
    },
    children: <>
        <DemoBox>Fixed</DemoBox>
        <Flex grow={1}>
          <DemoBox color={colors.success[100]}>Grows to fill space</DemoBox>
        </Flex>
        <DemoBox>Fixed</DemoBox>
      </>
  }
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ae,ie,ce;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    children: <>
        <Flex justifyContent="space-between" alignItems="center" gap="3">
          <DemoBox color={colors.success[100]}>Header Left</DemoBox>
          <DemoBox color={colors.pink[100]}>Header Right</DemoBox>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="2" style={{
          flex: 1
        }}>
            <DemoBox color={colors.info[100]}>Content 1</DemoBox>
            <DemoBox color={colors.info[100]}>Content 2</DemoBox>
          </Flex>
          <Flex direction="column" gap="2" style={{
          width: '200px'
        }}>
            <DemoBox color={colors.lemon[100]}>Sidebar 1</DemoBox>
            <DemoBox color={colors.lemon[100]}>Sidebar 2</DemoBox>
          </Flex>
        </Flex>
      </>
  }
}`,...(ce=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    width: '20',
    gap: '3',
    children: <>
        <DemoBox color={colors.success[400]} height="80px">Item 1 (Green)</DemoBox>
        <DemoBox color={colors.primary[400]} height="80px">Item 2 (Blue)</DemoBox>
        <DemoBox color={colors.warning[400]} height="80px">Item 3 (Orange)</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical stack example using design tokens for consistent spacing and sizing.'
      }
    }
  }
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var xe,ue,he;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    direction: {
      base: 'column',
      md: 'row'
    },
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive direction that changes from column on mobile to row on medium screens and up.'
      }
    }
  }
}`,...(he=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,ye,fe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <Flex justifyContent="space-between" alignItems="center" style={{
        padding: '16px',
        backgroundColor: colors.neutral[100],
        borderRadius: '8px'
      }}>
          <DemoBox color={colors.success[500]} style={{
          width: '120px',
          height: '40px'
        }}>Logo</DemoBox>
          <Flex gap="3">
            <DemoBox color={colors.indigo[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 1</DemoBox>
            <DemoBox color={colors.purple[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 2</DemoBox>
            <DemoBox color={colors.warning[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 3</DemoBox>
          </Flex>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="3" grow={1}>
            <DemoBox color={colors.error[400]} height="120px">Main Content</DemoBox>
            <Flex gap="2">
              <DemoBox color={colors.coral[400]} height="80px" style={{
              flex: 1
            }}>Sub Item 1</DemoBox>
              <DemoBox color={colors.lemon[400]} height="80px" style={{
              flex: 1
            }}>Sub Item 2</DemoBox>
            </Flex>
          </Flex>
          <Flex direction="column" gap="2" style={{
          width: '200px'
        }}>
            <DemoBox color={colors.turquoise[400]} height="60px">Sidebar 1</DemoBox>
            <DemoBox color={colors.turquoise[500]} height="60px">Sidebar 2</DemoBox>
            <DemoBox color={colors.turquoise[600]} height="60px">Sidebar 3</DemoBox>
          </Flex>
        </Flex>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex nested layout demonstrating how Flex components can be combined to create sophisticated application layouts.'
      }
    }
  }
}`,...(fe=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var we,be,Be;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: {
      base: '2',
      md: '4',
      lg: '6'
    },
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    children: <>
        <DemoBox color={colors.error[400]}>Gap scales with screen size</DemoBox>
        <DemoBox color={colors.lemon[400]}>Small gap on mobile</DemoBox>
        <DemoBox color={colors.success[400]}>Medium gap on tablet</DemoBox>
        <DemoBox color={colors.primary[400]}>Large gap on desktop</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive gaps that adapt to different screen sizes - resize the browser to see the effect.'
      }
    }
  }
}`,...(Be=(be=F.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var De,Fe,Ce;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '6',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <Colors category="primary" showHex={true} />
        <Colors category="success" showHex={true} />
        <Colors category="warning" showHex={true} />
      </>
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demonstrates using the Colors component within Flex layouts to display multiple color palettes vertically.'
      }
    }
  }
}`,...(Ce=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};var Ie,Se,Ve;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: '100%',
    maxWidth: '1200px'
  }}>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="primary" showHex={false} />
        </Flex>
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="secondary" showHex={false} />
        </Flex>
      </Flex>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="success" showHex={false} />
        </Flex>
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="error" showHex={false} />
        </Flex>
      </Flex>
    </Flex>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A responsive grid layout using Flex to display color palettes in a 2-column layout that wraps on smaller screens.'
      }
    }
  }
}`,...(Ve=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var ke,He,ve;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="8" style={{
    width: '100%'
  }}>
      <Flex direction="column" gap="4" style={{
      padding: '24px',
      backgroundColor: colors.neutral[50],
      borderRadius: '8px'
    }}>
        <h2 style={{
        margin: 0,
        color: colors.neutral[700]
      }}>Primary Colors</h2>
        <Colors category="primary" showHex={true} />
      </Flex>
      
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.success[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.success[700]
        }}>Success</h3>
          <Colors category="success" showHex={true} />
        </Flex>
        
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.warning[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.warning[700]
        }}>Warning</h3>
          <Colors category="warning" showHex={true} />
        </Flex>
        
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.error[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.error[700]
        }}>Error</h3>
          <Colors category="error" showHex={true} />
        </Flex>
      </Flex>
      
      <Flex direction="column" gap="4" style={{
      padding: '24px',
      backgroundColor: colors.neutral[700],
      borderRadius: '8px'
    }}>
        <h2 style={{
        margin: 0,
        color: colors.neutral[0]
      }}>Secondary Accent Colors</h2>
        <Flex gap="4" wrap="wrap">
          <Colors category="purple" showHex={false} />
          <Colors category="pink" showHex={false} />
          <Colors category="teal" showHex={false} />
          <Colors category="turquoise" showHex={false} />
        </Flex>
      </Flex>
    </Flex>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A comprehensive showcase of the design system using Flex for complex layouts with multiple color palettes organized in different sections.'
      }
    }
  }
}`,...(ve=(He=S.parameters)==null?void 0:He.docs)==null?void 0:ve.source}}};const oo=["Default","ColumnLayout","CenteredContent","SpaceBetween","WrappingItems","FlexGrowExample","ResponsiveLayout","VerticalStack","ResponsiveDirection","NestedFlexLayouts","ResponsiveGaps","WithColorPalette","ColorPaletteGrid","DesignSystemShowcase"];export{h as CenteredContent,I as ColorPaletteGrid,u as ColumnLayout,x as Default,S as DesignSystemShowcase,f as FlexGrowExample,D as NestedFlexLayouts,B as ResponsiveDirection,F as ResponsiveGaps,w as ResponsiveLayout,g as SpaceBetween,b as VerticalStack,C as WithColorPalette,y as WrappingItems,oo as __namedExportsOrder,eo as default};
