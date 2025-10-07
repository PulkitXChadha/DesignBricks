import{a as l,j as e}from"./jsx-runtime-D2eXtamC.js";import{a as H,G as c}from"./Grid-lLusimG2.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";const T={title:"Layout/GridItem",component:H,parameters:{layout:"centered",docs:{description:{component:"A component for individual items within a Grid. Use it to control positioning, spanning, and alignment of specific grid items."}}},tags:["autodocs"],argTypes:{gridArea:{control:"text",description:"Named grid area to place the item"},colSpan:{control:"number",description:"Number of columns the item should span"},rowSpan:{control:"number",description:"Number of rows the item should span"},colStart:{control:"text",description:"Grid column start position"},colEnd:{control:"text",description:"Grid column end position"},rowStart:{control:"text",description:"Grid row start position"},rowEnd:{control:"text",description:"Grid row end position"},justifySelf:{control:"select",options:["start","end","center","stretch"],description:"How to align the item within its grid area (inline axis)"},alignSelf:{control:"select",options:["start","end","center","stretch"],description:"How to align the item within its grid area (block axis)"}},decorators:[n=>l(c,{columns:["repeat(4, 1fr)"],rows:["repeat(3, 80px)"],gap:"2",style:{width:"400px"},children:[e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 1"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 2"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 3"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 4"}),e(n,{}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 6"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 7"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 8"})]})]},r=({children:n,highlight:f=!1})=>e("div",{style:{padding:"16px",backgroundColor:f?"#e3f2fd":"#f0f0f0",borderRadius:"4px",fontSize:"14px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60px",border:f?"2px solid #1976d2":"none"},children:n}),o={args:{children:e(r,{highlight:!0,children:"Default GridItem"})}},t={args:{colSpan:2,children:e(r,{highlight:!0,children:"Spans 2 Columns"})}},i={args:{rowSpan:2,children:e(r,{highlight:!0,children:"Spans 2 Rows"})}},d={args:{colSpan:2,rowSpan:2,children:e(r,{highlight:!0,children:"Spans 2x2"})},decorators:[n=>l(c,{columns:["repeat(4, 1fr)"],rows:["repeat(4, 80px)"],gap:"2",style:{width:"400px"},children:[e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 1"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 2"}),e(n,{}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 4"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 5"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 6"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 7"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 8"})]})]},a={args:{justifySelf:"center",children:e(r,{highlight:!0,children:"Centered"})}},s={args:{alignSelf:"center",children:e(r,{highlight:!0,children:"Aligned Center"})}},p={args:{colStart:2,colEnd:4,rowStart:1,rowEnd:3,children:e(r,{highlight:!0,children:"Position 2-4, 1-3"})},decorators:[n=>l(c,{columns:["repeat(4, 1fr)"],rows:["repeat(3, 80px)"],gap:"2",style:{width:"400px"},children:[e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 1"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 2"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 3"}),e("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 4"}),e(n,{})]})]};var g,u,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <DemoContent highlight>Default GridItem</DemoContent>
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,h,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    colSpan: 2,
    children: <DemoContent highlight>Spans 2 Columns</DemoContent>
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,C,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    rowSpan: 2,
    children: <DemoContent highlight>Spans 2 Rows</DemoContent>
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,R,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    colSpan: 2,
    rowSpan: 2,
    children: <DemoContent highlight>Spans 2x2</DemoContent>
  },
  decorators: [Story => <Grid columns={['repeat(4, 1fr)']} rows={['repeat(4, 80px)']} gap="2" style={{
    width: '400px'
  }}>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 1</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 2</div>
        <Story />
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 4</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 5</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 6</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 7</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 8</div>
      </Grid>]
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var I,k,z;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    justifySelf: 'center',
    children: <DemoContent highlight>Centered</DemoContent>
  }
}`,...(z=(k=a.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var G,D,A;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    alignSelf: 'center',
    children: <DemoContent highlight>Aligned Center</DemoContent>
  }
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var j,E,P;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    colStart: 2,
    colEnd: 4,
    rowStart: 1,
    rowEnd: 3,
    children: <DemoContent highlight>Position 2-4, 1-3</DemoContent>
  },
  decorators: [Story => <Grid columns={['repeat(4, 1fr)']} rows={['repeat(3, 80px)']} gap="2" style={{
    width: '400px'
  }}>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 1</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 2</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 3</div>
        <div style={{
      backgroundColor: '#f5f5f5',
      padding: '8px',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Item 4</div>
        <Story />
      </Grid>]
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const U=["Default","ColumnSpan","RowSpan","ColumnAndRowSpan","JustifyCenter","AlignCenter","SpecificPosition"];export{s as AlignCenter,d as ColumnAndRowSpan,t as ColumnSpan,o as Default,a as JustifyCenter,i as RowSpan,p as SpecificPosition,U as __namedExportsOrder,T as default};
