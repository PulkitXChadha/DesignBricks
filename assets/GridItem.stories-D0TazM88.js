import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as P,G as l}from"./Grid-DxaNlonp.js";import"./index-Dz3UJJSw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const O={title:"Layout/GridItem",component:P,parameters:{layout:"centered",docs:{description:{component:"A component for individual items within a Grid. Use it to control positioning, spanning, and alignment of specific grid items."}}},tags:["autodocs"],argTypes:{gridArea:{control:"text",description:"Named grid area to place the item"},colSpan:{control:"number",description:"Number of columns the item should span"},rowSpan:{control:"number",description:"Number of rows the item should span"},colStart:{control:"text",description:"Grid column start position"},colEnd:{control:"text",description:"Grid column end position"},rowStart:{control:"text",description:"Grid row start position"},rowEnd:{control:"text",description:"Grid row end position"},justifySelf:{control:"select",options:["start","end","center","stretch"],description:"How to align the item within its grid area (inline axis)"},alignSelf:{control:"select",options:["start","end","center","stretch"],description:"How to align the item within its grid area (block axis)"}},decorators:[r=>e.jsxs(l,{columns:["repeat(4, 1fr)"],rows:["repeat(3, 80px)"],gap:"2",style:{width:"400px"},children:[e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 1"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 2"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 3"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 4"}),e.jsx(r,{}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 6"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 7"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Grid Item 8"})]})]},o=({children:r,highlight:c=!1})=>e.jsx("div",{style:{padding:"16px",backgroundColor:c?"#e3f2fd":"#f0f0f0",borderRadius:"4px",fontSize:"14px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60px",border:c?"2px solid #1976d2":"none"},children:r}),t={args:{children:e.jsx(o,{highlight:!0,children:"Default GridItem"})}},i={args:{colSpan:2,children:e.jsx(o,{highlight:!0,children:"Spans 2 Columns"})}},n={args:{rowSpan:2,children:e.jsx(o,{highlight:!0,children:"Spans 2 Rows"})}},d={args:{colSpan:2,rowSpan:2,children:e.jsx(o,{highlight:!0,children:"Spans 2x2"})},decorators:[r=>e.jsxs(l,{columns:["repeat(4, 1fr)"],rows:["repeat(4, 80px)"],gap:"2",style:{width:"400px"},children:[e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 1"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 2"}),e.jsx(r,{}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 4"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 5"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 6"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 7"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 8"})]})]},s={args:{justifySelf:"center",children:e.jsx(o,{highlight:!0,children:"Centered"})}},a={args:{alignSelf:"center",children:e.jsx(o,{highlight:!0,children:"Aligned Center"})}},p={args:{colStart:2,colEnd:4,rowStart:1,rowEnd:3,children:e.jsx(o,{highlight:!0,children:"Position 2-4, 1-3"})},decorators:[r=>e.jsxs(l,{columns:["repeat(4, 1fr)"],rows:["repeat(3, 80px)"],gap:"2",style:{width:"400px"},children:[e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 1"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 2"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 3"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"8px",borderRadius:"4px",fontSize:"12px"},children:"Item 4"}),e.jsx(r,{})]})]};var f,x,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <DemoContent highlight>Default GridItem</DemoContent>
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var u,m,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    colSpan: 2,
    children: <DemoContent highlight>Spans 2 Columns</DemoContent>
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var S,b,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    rowSpan: 2,
    children: <DemoContent highlight>Spans 2 Rows</DemoContent>
  }
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,v,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var R,w,I;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    justifySelf: 'center',
    children: <DemoContent highlight>Centered</DemoContent>
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var k,z,G;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    alignSelf: 'center',
    children: <DemoContent highlight>Aligned Center</DemoContent>
  }
}`,...(G=(z=a.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var D,A,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const T=["Default","ColumnSpan","RowSpan","ColumnAndRowSpan","JustifyCenter","AlignCenter","SpecificPosition"];export{a as AlignCenter,d as ColumnAndRowSpan,i as ColumnSpan,t as Default,s as JustifyCenter,n as RowSpan,p as SpecificPosition,T as __namedExportsOrder,O as default};
