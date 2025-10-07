import{j as e,a as i,F as _e}from"./jsx-runtime-D2eXtamC.js";import{r as T}from"./index-SE77F2UD.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as Ce}from"./Badge-DkeaqQl8.js";import{B as U}from"./Button-Ch83UTUf.js";import"./_commonjsHelpers-DM6icglO.js";const De=({direction:a})=>e("span",{className:"db-table__sort-icon",children:i("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:[e("path",{d:"M7 3L3.5 7h7L7 3z",opacity:a==="asc"?1:.3}),e("path",{d:"M7 11l3.5-4h-7L7 11z",opacity:a==="desc"?1:.3})]})}),o=T.forwardRef(({columns:a,data:r,striped:t=!1,hoverable:B=!0,bordered:R=!1,compact:E=!1,stickyHeader:h=!1,loading:u=!1,emptyMessage:A="No data available",onRowClick:m,onSort:g,sortBy:s,className:y,...fe},ke)=>{const Se=n=>{if(!n.sortable||!g)return;const l=(s==null?void 0:s.key)===n.key&&(s==null?void 0:s.direction)==="asc"?"desc":"asc";g(n.key,l)},we=(n,l,p)=>{const q=n[l.key];return l.render?l.render(q,n,p):q};return e("div",{className:b("db-table-wrapper",{"db-table-wrapper--sticky":h}),children:i("table",{ref:ke,className:b("db-table",{"db-table--striped":t,"db-table--hoverable":B,"db-table--bordered":R,"db-table--compact":E,"db-table--loading":u},y),...fe,children:[e("thead",{className:"db-table__head",children:e("tr",{className:"db-table__row",children:a.map(n=>e("th",{className:b("db-table__header",{"db-table__header--sortable":n.sortable,[`db-table__header--${n.align}`]:n.align}),style:{width:n.width},onClick:()=>n.sortable&&Se(n),children:i("div",{className:"db-table__header-content",children:[e("span",{children:n.header}),n.sortable&&e(De,{direction:(s==null?void 0:s.key)===n.key?s.direction:null})]})},n.key))})}),e("tbody",{className:"db-table__body",children:u?e("tr",{className:"db-table__row",children:e("td",{className:"db-table__cell db-table__cell--loading",colSpan:a.length,children:i("div",{className:"db-table__loading",children:[e("svg",{className:"db-table__spinner",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"3",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeDasharray:"60",strokeDashoffset:"15"})}),e("span",{children:"Loading..."})]})})}):r.length===0?e("tr",{className:"db-table__row",children:e("td",{className:"db-table__cell db-table__cell--empty",colSpan:a.length,children:A})}):r.map((n,l)=>e("tr",{className:b("db-table__row",{"db-table__row--clickable":!!m}),onClick:()=>m==null?void 0:m(n,l),children:a.map(p=>e("td",{className:b("db-table__cell",{[`db-table__cell--${p.align}`]:p.align}),children:we(n,p,l)},p.key))},l))})]})})});o.displayName="Table";try{o.displayName="Table",o.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"Table columns configuration",name:"columns",required:!0,type:{name:"Column<any>[]"}},data:{defaultValue:null,description:"Table data",name:"data",required:!0,type:{name:"any[]"}},striped:{defaultValue:{value:"false"},description:"Striped rows",name:"striped",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"Hoverable rows",name:"hoverable",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"false"},description:"Bordered table",name:"bordered",required:!1,type:{name:"boolean"}},compact:{defaultValue:{value:"false"},description:"Compact size",name:"compact",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Sticky header",name:"stickyHeader",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Loading state",name:"loading",required:!1,type:{name:"boolean"}},emptyMessage:{defaultValue:{value:"No data available"},description:"Empty state message",name:"emptyMessage",required:!1,type:{name:"ReactNode"}},onRowClick:{defaultValue:null,description:"Row click handler",name:"onRowClick",required:!1,type:{name:"((_row: any, _index: number) => void)"}},onSort:{defaultValue:null,description:"Sort handler",name:"onSort",required:!1,type:{name:'((_key: string, _direction: "desc" | "asc") => void)'}},sortBy:{defaultValue:null,description:"Current sort state",name:"sortBy",required:!1,type:{name:'{ key: string; direction: "desc" | "asc"; }'}}}}}catch{}const Ae={title:"Data Display/Table",component:o,parameters:{docs:{description:{component:"Tables display sets of data organized in rows and columns."}}},tags:["autodocs"],argTypes:{striped:{control:"boolean",description:"Striped rows",table:{defaultValue:{summary:!1}}},hoverable:{control:"boolean",description:"Hoverable rows",table:{defaultValue:{summary:!0}}},bordered:{control:"boolean",description:"Bordered table",table:{defaultValue:{summary:!1}}},compact:{control:"boolean",description:"Compact size",table:{defaultValue:{summary:!1}}},stickyHeader:{control:"boolean",description:"Sticky header",table:{defaultValue:{summary:!1}}},loading:{control:"boolean",description:"Loading state",table:{defaultValue:{summary:!1}}}}},c=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15 09:30"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",lastLogin:"2024-01-15 14:22"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"inactive",lastLogin:"2024-01-10 11:45"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",lastLogin:"2024-01-14 16:18"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15 08:00"}],d=[{key:"id",header:"ID",width:60},{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:120},{key:"lastLogin",header:"Last Login",width:150}],v={args:{columns:d,data:c}},f={args:{columns:d,data:c,striped:!0}},k={args:{columns:d,data:c,bordered:!0}},S={args:{columns:d,data:c,compact:!0}},w={args:{columns:d,data:[],loading:!0}},_={args:{columns:d,data:[],emptyMessage:"No users found. Try adjusting your filters."}},C={render:()=>e(o,{columns:[{key:"id",header:"ID",width:60,align:"center"},{key:"name",header:"Name",render:r=>e("strong",{children:r})},{key:"email",header:"Email"},{key:"role",header:"Role",width:100},{key:"status",header:"Status",width:120,render:r=>e(Ce,{variant:{active:"success",inactive:"error",pending:"warning"}[r],children:r})},{key:"lastLogin",header:"Last Login",width:150}],data:c})},D={render:()=>{const[a,r]=T.useState(c),[t,B]=T.useState();return e(o,{columns:[{key:"id",header:"ID",width:60,sortable:!0},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",width:100,sortable:!0},{key:"status",header:"Status",width:120},{key:"lastLogin",header:"Last Login",width:150,sortable:!0}],data:a,onSort:(h,u)=>{B({key:h,direction:u});const A=[...a].sort((m,g)=>{const s=m[h],y=g[h];return s<y?u==="asc"?-1:1:s>y?u==="asc"?1:-1:0});r(A)},sortBy:t})}},V={render:()=>{const[a,r]=T.useState(null);return i(_e,{children:[e(o,{columns:d,data:c,onRowClick:t=>r(t),hoverable:!0}),a&&i("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#f0f0f0",borderRadius:"4px"},children:[e("strong",{children:"Selected User:"})," ",a.name," (",a.email,")"]})]})}},L={render:()=>{const a=Array.from({length:20},(r,t)=>({id:t+1,name:`User ${t+1}`,email:`user${t+1}@example.com`,role:["Admin","Editor","Viewer"][t%3],status:["active","inactive","pending"][t%3],lastLogin:`2024-01-${String(15-t%10).padStart(2,"0")} 12:00`}));return e("div",{style:{height:"400px"},children:e(o,{columns:d,data:a,stickyHeader:!0,striped:!0})})}},N={render:()=>{const a={key:"actions",header:"Actions",width:150,align:"center",render:t=>i("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[e(U,{size:"small",variant:"tertiary",children:"Edit"}),e(U,{size:"small",variant:"tertiary",children:"Delete"})]})},r=[...d,a];return e(o,{columns:r,data:c})}},x={render:()=>e(o,{columns:[{key:"metric",header:"Metric",width:200},{key:"value",header:"Value",align:"right"},{key:"change",header:"Change",align:"right",render:t=>i("span",{style:{color:t>0?"#00AF4B":"#F53737"},children:[t>0?"+":"",t,"%"]})},{key:"trend",header:"Trend",align:"center",render:()=>e("span",{style:{color:"#2272B4"},children:"📈"})}],data:[{metric:"Total Revenue",value:"$45,231.89",change:20.1,trend:"up"},{metric:"Active Users",value:"2,543",change:15.3,trend:"up"},{metric:"Conversion Rate",value:"3.2%",change:-5.4,trend:"down"},{metric:"Avg. Session Duration",value:"4m 32s",change:8.7,trend:"up"},{metric:"Bounce Rate",value:"42.3%",change:-2.1,trend:"down"}],striped:!0,compact:!0})};var $,j,z;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  }
}`,...(z=(j=v.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var H,W,M;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    striped: true
  }
}`,...(M=(W=f.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var F,I,J;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    bordered: true
  }
}`,...(J=(I=k.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var O,G,K;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    compact: true
  }
}`,...(K=(G=S.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,Q,X;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyMessage: 'No users found. Try adjusting your filters.'
  }
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,oe;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState(sampleData);
    const [sortBy, setSortBy] = useState<{
      key: string;
      direction: 'asc' | 'desc';
    } | undefined>();
    const handleSort = (key: string, direction: 'asc' | 'desc') => {
      setSortBy({
        key,
        direction
      });
      const sorted = [...data].sort((a, b) => {
        const aValue = a[key as keyof User];
        const bValue = b[key as keyof User];
        if (aValue < bValue) return direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      setData(sorted);
    };
    const sortableColumns: Column<User>[] = [{
      key: 'id',
      header: 'ID',
      width: 60,
      sortable: true
    }, {
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      width: 100,
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      width: 120
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      width: 150,
      sortable: true
    }];
    return <Table columns={sortableColumns} data={data} onSort={handleSort} sortBy={sortBy} />;
  }
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,de,ie;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<User | null>(null);
    return <>
        <Table columns={columns} data={sampleData} onRowClick={row => setSelected(row)} hoverable />
        {selected && <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px'
      }}>
            <strong>Selected User:</strong> {selected.name} ({selected.email})
          </div>}
      </>;
  }
}`,...(ie=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,ue,me;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,be;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const actionsColumn: Column<User> = {
      key: 'actions',
      header: 'Actions',
      width: 150,
      align: 'center',
      render: _ => <div style={{
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
}`,...(be=(he=N.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ge,ye,ve;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};const Re=["Basic","Striped","Bordered","Compact","Loading","Empty","WithCustomRender","Sortable","Clickable","StickyHeader","WithActions","DataTable"];export{v as Basic,k as Bordered,V as Clickable,S as Compact,x as DataTable,_ as Empty,w as Loading,D as Sortable,L as StickyHeader,f as Striped,N as WithActions,C as WithCustomRender,Re as __namedExportsOrder,Ae as default};
