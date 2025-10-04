import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as N}from"./index-CWnxZbJP.js";import{c as h}from"./clsx-B-dksMZM.js";import{B as we}from"./Badge-CJZMY-UQ.js";import{B}from"./Button-Dml-Tr6V.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const _e=({direction:a})=>e.jsx("span",{className:"db-table__sort-icon",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:[e.jsx("path",{d:"M7 3L3.5 7h7L7 3z",opacity:a==="asc"?1:.3}),e.jsx("path",{d:"M7 11l3.5-4h-7L7 11z",opacity:a==="desc"?1:.3})]})}),l=N.forwardRef(({columns:a,data:n,striped:t=!1,hoverable:D=!0,bordered:A=!1,compact:V=!1,stickyHeader:p=!1,loading:c=!1,emptyMessage:R="No data available",onRowClick:m,onSort:g,sortBy:s,className:b,...ve},fe)=>{const xe=r=>{if(!r.sortable||!g)return;const o=(s==null?void 0:s.key)===r.key&&(s==null?void 0:s.direction)==="asc"?"desc":"asc";g(r.key,o)},ke=(r,o,u)=>{const E=r[o.key];return o.render?o.render(E,r,u):E};return e.jsx("div",{className:h("db-table-wrapper",{"db-table-wrapper--sticky":p}),children:e.jsxs("table",{ref:fe,className:h("db-table",{"db-table--striped":t,"db-table--hoverable":D,"db-table--bordered":A,"db-table--compact":V,"db-table--loading":c},b),...ve,children:[e.jsx("thead",{className:"db-table__head",children:e.jsx("tr",{className:"db-table__row",children:a.map(r=>e.jsx("th",{className:h("db-table__header",{"db-table__header--sortable":r.sortable,[`db-table__header--${r.align}`]:r.align}),style:{width:r.width},onClick:()=>r.sortable&&xe(r),children:e.jsxs("div",{className:"db-table__header-content",children:[e.jsx("span",{children:r.header}),r.sortable&&e.jsx(_e,{direction:(s==null?void 0:s.key)===r.key?s.direction:null})]})},r.key))})}),e.jsx("tbody",{className:"db-table__body",children:c?e.jsx("tr",{className:"db-table__row",children:e.jsx("td",{className:"db-table__cell db-table__cell--loading",colSpan:a.length,children:e.jsxs("div",{className:"db-table__loading",children:[e.jsx("svg",{className:"db-table__spinner",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"3",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeDasharray:"60",strokeDashoffset:"15"})}),e.jsx("span",{children:"Loading..."})]})})}):n.length===0?e.jsx("tr",{className:"db-table__row",children:e.jsx("td",{className:"db-table__cell db-table__cell--empty",colSpan:a.length,children:R})}):n.map((r,o)=>e.jsx("tr",{className:h("db-table__row",{"db-table__row--clickable":!!m}),onClick:()=>m==null?void 0:m(r,o),children:a.map(u=>e.jsx("td",{className:h("db-table__cell",{[`db-table__cell--${u.align}`]:u.align}),children:ke(r,u,o)},u.key))},o))})]})})});l.displayName="Table";l.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:"Table columns configuration"},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Table data"},striped:{required:!1,tsType:{name:"boolean"},description:"Striped rows",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Hoverable rows",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Bordered table",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Compact size",defaultValue:{value:"false",computed:!1}},stickyHeader:{required:!1,tsType:{name:"boolean"},description:"Sticky header",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(_row: T, _index: number) => void",signature:{arguments:[{type:{name:"T"},name:"_row"},{type:{name:"number"},name:"_index"}],return:{name:"void"}}},description:"Row click handler"},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(_key: string, _direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"_key"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"_direction"}],return:{name:"void"}}},description:"Sort handler"},sortBy:{required:!1,tsType:{name:"signature",type:"object",raw:"{ key: string; direction: 'asc' | 'desc' }",signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"direction",value:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}],required:!0}}]}},description:"Current sort state"}},composes:["Omit"]};const Re={title:"Data Display/Table",component:l,parameters:{docs:{description:{component:"Tables display sets of data organized in rows and columns."}}},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Striped rows",table:{defaultValue:{summary:!1}}},hoverable:{control:"boolean",description:"Hoverable rows",table:{defaultValue:{summary:!0}}},bordered:{control:"boolean",description:"Bordered table",table:{defaultValue:{summary:!1}}},compact:{control:"boolean",description:"Compact size",table:{defaultValue:{summary:!1}}},stickyHeader:{control:"boolean",description:"Sticky header",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Loading state",table:{defaultValue:{summary:!1}}}}},d=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15 09:30"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",lastLogin:"2024-01-15 14:22"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"inactive",lastLogin:"2024-01-10 11:45"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",lastLogin:"2024-01-14 16:18"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15 08:00"}],i=[{key:"id",header:"ID",width:60},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:120},{key:"lastLogin",header:"Last Login",width:150}],y={args:{columns:i,data:d}},v={args:{columns:i,data:d,striped:!0}},f={args:{columns:i,data:d,bordered:!0}},x={args:{columns:i,data:d,compact:!0}},k={args:{columns:i,data:[],loading:!0}},w={args:{columns:i,data:[],emptyMessage:"No users found. Try adjusting your filters."}},_={render:()=>{const a=[{key:"id",header:"ID",width:60,align:"center"},{key:"name",header:"Name",render:n=>e.jsx("strong",{children:n})},{key:"email",header:"Email"},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:120,render:n=>{const t={active:"success",inactive:"error",pending:"warning"};return e.jsx(we,{variant:t[n],children:n})}},{key:"lastLogin",header:"Last Login",width:150}];return e.jsx(l,{columns:a,data:d})}},je=()=>{const[a,n]=N.useState(d),[t,D]=N.useState(),A=(p,c)=>{D({key:p,direction:c});const R=[...a].sort((m,g)=>{const s=m[p],b=g[p];return s<b?c==="asc"?-1:1:s>b?c==="asc"?1:-1:0});n(R)},V=[{key:"id",header:"ID",width:60,sortable:!0},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",width:100,sortable:!0},{key:"status",header:"Status",width:120},{key:"lastLogin",header:"Last Login",width:150,sortable:!0}];return e.jsx(l,{columns:V,data:a,onSort:A,sortBy:t})},j={render:()=>e.jsx(je,{})},Se=()=>{const[a,n]=N.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(l,{columns:i,data:d,onRowClick:t=>n(t),hoverable:!0}),a&&e.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#f0f0f0",borderRadius:"4px"},children:[e.jsx("strong",{children:"Selected User:"})," ",a.name," (",a.email,")"]})]})},S={render:()=>e.jsx(Se,{})},C={render:()=>{const a=Array.from({length:20},(n,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:["Admin","Editor","Viewer"][t%3],status:["active","inactive","pending"][t%3],lastLogin:`2024-01-${String(15-t%10).padStart(2,"0")} 12:00`}));return e.jsx("div",{style:{height:"400px"},children:e.jsx(l,{columns:i,data:a,stickyHeader:!0,striped:!0})})}},T={render:()=>{const a={key:"actions",header:"Actions",width:150,align:"center",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[e.jsx(B,{size:"small",variant:"tertiary",children:"Edit"}),e.jsx(B,{size:"small",variant:"tertiary",children:"Delete"})]})},n=[...i,a];return e.jsx(l,{columns:n,data:d})}},L={render:()=>{const a=[{key:"metric",header:"Metric",width:200},{key:"value",header:"Value",align:"right"},{key:"change",header:"Change",align:"right",render:t=>e.jsxs("span",{style:{color:t>0?"#00AF4B":"#F53737"},children:[t>0?"+":"",t,"%"]})},{key:"trend",header:"Trend",align:"center",render:()=>e.jsx("span",{style:{color:"#2272B4"},children:"📈"})}],n=[{metric:"Total Revenue",value:"$45,231.89",change:20.1,trend:"up"},{metric:"Active Users",value:"2,543",change:15.3,trend:"up"},{metric:"Conversion Rate",value:"3.2%",change:-5.4,trend:"down"},{metric:"Avg. Session Duration",value:"4m 32s",change:8.7,trend:"up"},{metric:"Bounce Rate",value:"42.3%",change:-2.1,trend:"down"}];return e.jsx(l,{columns:a,data:n,striped:!0,compact:!0})}};var q,$,z;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  }
}`,...(z=($=y.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var W,H,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    striped: true
  }
}`,...(M=(H=v.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var U,F,I;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    bordered: true
  }
}`,...(I=(F=f.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var J,O,G;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    compact: true
  }
}`,...(G=(O=x.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var K,P,Q;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true
  }
}`,...(Q=(P=k.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your filters.'
  }
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const customColumns: Column<User>[] = [{
      key: 'id',
      header: 'ID',
      width: 60,
      align: 'center'
    }, {
      key: 'name',
      header: 'Name',
      render: value => <strong>{value}</strong>
    }, {
      key: 'email',
      header: 'Email'
    }, {
      key: 'role',
      header: 'Role',
      width: 100
    }, {
      key: 'status',
      header: 'Status',
      width: 120,
      render: value => {
        const variants = {
          active: 'success' as const,
          inactive: 'error' as const,
          pending: 'warning' as const
        };
        return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>;
      }
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      width: 150
    }];
    return <Table columns={customColumns} data={sampleData} />;
  }
}`,...(re=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <SortableComponent />
}`,...(se=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <ClickableComponent />
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const manyRows = Array.from({
      length: 20
    }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['Admin', 'Editor', 'Viewer'][i % 3],
      status: (['active', 'inactive', 'pending'] as const)[i % 3],
      lastLogin: \`2024-01-\${String(15 - i % 10).padStart(2, '0')} 12:00\`
    }));
    return <div style={{
      height: '400px'
    }}>
        <Table columns={columns} data={manyRows} stickyHeader striped />
      </div>;
  }
}`,...(me=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const actionsColumn: Column<User> = {
      key: 'actions',
      header: 'Actions',
      width: 150,
      align: 'center',
      render: () => <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center'
      }}>
          <Button size="small" variant="tertiary">Edit</Button>
          <Button size="small" variant="tertiary">Delete</Button>
        </div>
    };
    const columnsWithActions = [...columns, actionsColumn];
    return <Table columns={columnsWithActions} data={sampleData} />;
  }
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,be,ye;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const dataColumns: Column[] = [{
      key: 'metric',
      header: 'Metric',
      width: 200
    }, {
      key: 'value',
      header: 'Value',
      align: 'right'
    }, {
      key: 'change',
      header: 'Change',
      align: 'right',
      render: value => <span style={{
        color: value > 0 ? '#00AF4B' : '#F53737'
      }}>
          {value > 0 ? '+' : ''}{value}%
        </span>
    }, {
      key: 'trend',
      header: 'Trend',
      align: 'center',
      render: () => <span style={{
        color: '#2272B4'
      }}>📈</span>
    }];
    const metricsData = [{
      metric: 'Total Revenue',
      value: '$45,231.89',
      change: 20.1,
      trend: 'up'
    }, {
      metric: 'Active Users',
      value: '2,543',
      change: 15.3,
      trend: 'up'
    }, {
      metric: 'Conversion Rate',
      value: '3.2%',
      change: -5.4,
      trend: 'down'
    }, {
      metric: 'Avg. Session Duration',
      value: '4m 32s',
      change: 8.7,
      trend: 'up'
    }, {
      metric: 'Bounce Rate',
      value: '42.3%',
      change: -2.1,
      trend: 'down'
    }];
    return <Table columns={dataColumns} data={metricsData} striped compact />;
  }
}`,...(ye=(be=L.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Ee=["Basic","Striped","Bordered","Compact","Loading","Empty","WithCustomRender","Sortable","Clickable","StickyHeader","WithActions","DataTable"];export{y as Basic,f as Bordered,S as Clickable,x as Compact,L as DataTable,w as Empty,k as Loading,j as Sortable,C as StickyHeader,v as Striped,T as WithActions,_ as WithCustomRender,Ee as __namedExportsOrder,Re as default};
