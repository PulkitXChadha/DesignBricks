import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-Dz3UJJSw.js";import{c as S}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const i=T.forwardRef(({children:s,variant:d="default",size:n="medium",dense:r=!1,hoverable:h=!0,className:u,...C},F)=>e.jsx("ul",{ref:F,className:S("db-list",`db-list--${d}`,`db-list--${n}`,{"db-list--dense":r,"db-list--hoverable":h},u),...C,children:s}));i.displayName="List";i.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"List items"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'plain' | 'divided' | 'bordered'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'plain'"},{name:"literal",value:"'divided'"},{name:"literal",value:"'bordered'"}]},description:"List variant",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of list items",defaultValue:{value:"'medium'",computed:!1}},dense:{required:!1,tsType:{name:"boolean"},description:"Whether list items are dense (less padding)",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"Whether list is hoverable",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const t=T.forwardRef(({children:s,startContent:d,endContent:n,primary:r,secondary:h,tertiary:u,clickable:C=!1,selected:F=!1,disabled:m=!1,onClick:x,as:A="li",href:D,target:ne,contentClassName:oe,className:le,...ce},me)=>{const o=C||x||D,z=A==="a"||D,N=a=>{if(m){a.preventDefault();return}x==null||x(a)},pe=a=>{m||o&&(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),N(a))},he={ref:me,className:S("db-list-item",{"db-list-item--interactive":o,"db-list-item--selected":F,"db-list-item--disabled":m},le),onClick:o?N:void 0,onKeyDown:o?pe:void 0,tabIndex:o&&!m?0:void 0,role:o&&!z?"button":void 0,"aria-disabled":m?!0:void 0,...z&&{href:D,target:ne},...ce},ue=s||e.jsxs("div",{className:S("db-list-item__content",oe),children:[d&&e.jsx("div",{className:"db-list-item__start-content",children:d}),e.jsxs("div",{className:"db-list-item__text-content",children:[r&&e.jsx("div",{className:"db-list-item__primary",children:r}),h&&e.jsx("div",{className:"db-list-item__secondary",children:h}),u&&e.jsx("div",{className:"db-list-item__tertiary",children:u})]}),n&&e.jsx("div",{className:"db-list-item__end-content",children:n})]});return e.jsx(A,{...he,children:ue})});t.displayName="ListItem";t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Content of the list item"},startContent:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon or element"},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Trailing icon or element"},primary:{required:!1,tsType:{name:"ReactNode"},description:"Primary text"},secondary:{required:!1,tsType:{name:"ReactNode"},description:"Secondary text"},tertiary:{required:!1,tsType:{name:"ReactNode"},description:"Tertiary text (usually metadata like date, type, etc.)"},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether the item is clickable",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the item is selected",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(_event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"_event"}],return:{name:"void"}}},description:"Click handler"},as:{required:!1,tsType:{name:"ElementType"},description:"Element to render as (default: li, but can be 'a' for links)",defaultValue:{value:"'li'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"Href when rendered as link"},target:{required:!1,tsType:{name:"string"},description:"Target when rendered as link"},contentClassName:{required:!1,tsType:{name:"string"},description:"Custom className for the content wrapper"}},composes:["Omit"]};const fe={title:"Data Display/List",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","plain","divided","bordered"]},size:{control:{type:"select"},options:["small","medium","large"]},dense:{control:"boolean"},hoverable:{control:"boolean"}}},l=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})}),c=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})}),w=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})}),p=e.jsxs(e.Fragment,{children:[e.jsx(t,{startContent:e.jsx(l,{}),primary:"Account Usage Dashboard v2 - DAIS",secondary:"/Users/cody.davis@databricks.com",tertiary:"Dashboard",clickable:!0,onClick:()=>console.log("Dashboard clicked")}),e.jsx(t,{startContent:e.jsx(c,{}),primary:"usage",secondary:"system.billing",tertiary:"Table",clickable:!0,onClick:()=>console.log("Table clicked")}),e.jsx(t,{startContent:e.jsx(w,{}),primary:"(MAKE A COPY) create app infra",secondary:"/Users/luke.barnes@databricks.com/vibe-coding",tertiary:"Notebook",clickable:!0,onClick:()=>console.log("Notebook clicked")})]}),y={args:{children:p}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Default"}),e.jsx(i,{variant:"default",children:p})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Plain"}),e.jsx(i,{variant:"plain",children:p})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Divided"}),e.jsx(i,{variant:"divided",children:p})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Bordered"}),e.jsx(i,{variant:"bordered",children:p})]})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Small"}),e.jsxs(i,{size:"small",variant:"bordered",children:[e.jsx(t,{startContent:e.jsx(l,{}),primary:"Small list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e.jsx(t,{startContent:e.jsx(c,{}),primary:"Another small item",secondary:"More details",clickable:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Medium (Default)"}),e.jsxs(i,{size:"medium",variant:"bordered",children:[e.jsx(t,{startContent:e.jsx(l,{}),primary:"Medium list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e.jsx(t,{startContent:e.jsx(c,{}),primary:"Another medium item",secondary:"More details",clickable:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Large"}),e.jsxs(i,{size:"large",variant:"bordered",children:[e.jsx(t,{startContent:e.jsx(l,{}),primary:"Large list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e.jsx(t,{startContent:e.jsx(c,{}),primary:"Another large item",secondary:"More details",clickable:!0})]})]})]})},f={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsxs(i,{dense:!0,variant:"divided",children:[e.jsx(t,{primary:"Dense list item 1",secondary:"Compact spacing",clickable:!0}),e.jsx(t,{primary:"Dense list item 2",secondary:"Less padding",clickable:!0}),e.jsx(t,{primary:"Dense list item 3",secondary:"More items visible",clickable:!0}),e.jsx(t,{primary:"Dense list item 4",secondary:"Efficient use of space",clickable:!0}),e.jsx(t,{primary:"Dense list item 5",secondary:"Perfect for long lists",clickable:!0})]})})},g={render:()=>{const[s,d]=T.useState("item2"),n=[{id:"item1",title:"First Item",description:"Description for first item"},{id:"item2",title:"Second Item",description:"Description for second item"},{id:"item3",title:"Third Item",description:"Description for third item"},{id:"item4",title:"Fourth Item",description:"This item is disabled",disabled:!0}];return e.jsxs("div",{style:{width:"400px"},children:[e.jsx(i,{variant:"bordered",children:n.map(r=>e.jsx(t,{primary:r.title,secondary:r.description,selected:s===r.id,disabled:r.disabled,clickable:!r.disabled,onClick:()=>!r.disabled&&d(r.id)},r.id))}),e.jsxs("div",{style:{marginTop:"12px",fontSize:"14px",color:"#6B7280"},children:["Selected: ",s]})]})}},j={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(i,{variant:"divided",children:[e.jsx(t,{startContent:e.jsx(l,{}),primary:"Dashboard with Actions",secondary:"Click the button to perform action",endContent:e.jsx("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF",cursor:"pointer"},onClick:s=>{s.stopPropagation(),alert("Action clicked!")},children:"Action"}),clickable:!0,onClick:()=>console.log("Item clicked")}),e.jsx(t,{startContent:e.jsx(c,{}),primary:"Item with Badge",secondary:"This item has a status badge",endContent:e.jsx("span",{style:{padding:"2px 8px",fontSize:"11px",backgroundColor:"#3BA65E",color:"#FFFFFF",borderRadius:"12px",fontWeight:"600"},children:"Active"}),clickable:!0}),e.jsx(t,{startContent:e.jsx(w,{}),primary:"Item with Metadata",secondary:"Additional information on the right",endContent:e.jsxs("div",{style:{textAlign:"right",fontSize:"12px",color:"#9EA3AD"},children:[e.jsx("div",{children:"2 hours ago"}),e.jsx("div",{children:"Modified"})]}),clickable:!0})]})})},k={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsxs(i,{variant:"bordered",children:[e.jsx(t,{as:"a",href:"https://databricks.com",target:"_blank",startContent:e.jsx(l,{}),primary:"External Link",secondary:"Opens in new tab",tertiary:"https://databricks.com",endContent:"↗"}),e.jsx(t,{as:"a",href:"/dashboard",startContent:e.jsx(c,{}),primary:"Internal Link",secondary:"Navigate within app",tertiary:"/dashboard"}),e.jsx(t,{as:"a",href:"/notebooks",startContent:e.jsx(w,{}),primary:"Another Internal Link",secondary:"Another page",tertiary:"/notebooks"})]})})},L={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsx(i,{variant:"bordered",children:e.jsx(t,{children:e.jsxs("div",{style:{padding:"8px",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#4299E0",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",fontWeight:"600"},children:"JD"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:"500",marginBottom:"2px"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"13px",color:"#6B7280"},children:"john.doe@company.com"}),e.jsx("div",{style:{fontSize:"12px",color:"#9EA3AD",marginTop:"4px"},children:"Last active: 2 hours ago"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #2272B4",borderRadius:"4px",background:"#FFFFFF",color:"#2272B4",cursor:"pointer"},children:"Message"}),e.jsx("button",{style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF",cursor:"pointer"},children:"More"})]})]})})})})},I={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsxs(i,{variant:"divided",hoverable:!1,children:[e.jsx(t,{primary:"Non-hoverable item 1",secondary:"Hover effects disabled",clickable:!0}),e.jsx(t,{primary:"Non-hoverable item 2",secondary:"No background change on hover",clickable:!0}),e.jsx(t,{primary:"Non-hoverable item 3",secondary:"Static appearance",clickable:!0})]})})};var E,M,R;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: basicItems
  }
}`,...(R=(M=y.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,V,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '500px'
  }}>
      <div>
        <h4>Default</h4>
        <List variant="default">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Plain</h4>
        <List variant="plain">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Divided</h4>
        <List variant="divided">
          {basicItems}
        </List>
      </div>
      
      <div>
        <h4>Bordered</h4>
        <List variant="bordered">
          {basicItems}
        </List>
      </div>
    </div>
}`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var B,H,W;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '500px'
  }}>
      <div>
        <h4>Small</h4>
        <List size="small" variant="bordered">
          <ListItem startContent={<DashboardIcon />} primary="Small list item" secondary="Secondary text" tertiary="Tertiary text" clickable />
          <ListItem startContent={<TableIcon />} primary="Another small item" secondary="More details" clickable />
        </List>
      </div>
      
      <div>
        <h4>Medium (Default)</h4>
        <List size="medium" variant="bordered">
          <ListItem startContent={<DashboardIcon />} primary="Medium list item" secondary="Secondary text" tertiary="Tertiary text" clickable />
          <ListItem startContent={<TableIcon />} primary="Another medium item" secondary="More details" clickable />
        </List>
      </div>
      
      <div>
        <h4>Large</h4>
        <List size="large" variant="bordered">
          <ListItem startContent={<DashboardIcon />} primary="Large list item" secondary="Secondary text" tertiary="Tertiary text" clickable />
          <ListItem startContent={<TableIcon />} primary="Another large item" secondary="More details" clickable />
        </List>
      </div>
    </div>
}`,...(W=(H=b.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var P,O,J;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <List dense variant="divided">
        <ListItem primary="Dense list item 1" secondary="Compact spacing" clickable />
        <ListItem primary="Dense list item 2" secondary="Less padding" clickable />
        <ListItem primary="Dense list item 3" secondary="More items visible" clickable />
        <ListItem primary="Dense list item 4" secondary="Efficient use of space" clickable />
        <ListItem primary="Dense list item 5" secondary="Perfect for long lists" clickable />
      </List>
    </div>
}`,...(J=(O=f.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,U,$;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState('item2');
    const items = [{
      id: 'item1',
      title: 'First Item',
      description: 'Description for first item'
    }, {
      id: 'item2',
      title: 'Second Item',
      description: 'Description for second item'
    }, {
      id: 'item3',
      title: 'Third Item',
      description: 'Description for third item'
    }, {
      id: 'item4',
      title: 'Fourth Item',
      description: 'This item is disabled',
      disabled: true
    }];
    return <div style={{
      width: '400px'
    }}>
        <List variant="bordered">
          {items.map(item => <ListItem key={item.id} primary={item.title} secondary={item.description} selected={selectedId === item.id} disabled={item.disabled} clickable={!item.disabled} onClick={() => !item.disabled && setSelectedId(item.id)} />)}
        </List>
        <div style={{
        marginTop: '12px',
        fontSize: '14px',
        color: '#6B7280'
      }}>
          Selected: {selectedId}
        </div>
      </div>;
  }
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var Y,G,Q;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <List variant="divided">
        <ListItem startContent={<DashboardIcon />} primary="Dashboard with Actions" secondary="Click the button to perform action" endContent={<button style={{
        padding: '4px 8px',
        fontSize: '12px',
        border: '1px solid #DDE0E5',
        borderRadius: '4px',
        background: '#FFFFFF',
        cursor: 'pointer'
      }} onClick={e => {
        e.stopPropagation();
        alert('Action clicked!');
      }}>
              Action
            </button>} clickable onClick={() => console.log('Item clicked')} />
        <ListItem startContent={<TableIcon />} primary="Item with Badge" secondary="This item has a status badge" endContent={<span style={{
        padding: '2px 8px',
        fontSize: '11px',
        backgroundColor: '#3BA65E',
        color: '#FFFFFF',
        borderRadius: '12px',
        fontWeight: '600'
      }}>
              Active
            </span>} clickable />
        <ListItem startContent={<NotebookIcon />} primary="Item with Metadata" secondary="Additional information on the right" endContent={<div style={{
        textAlign: 'right',
        fontSize: '12px',
        color: '#9EA3AD'
      }}>
              <div>2 hours ago</div>
              <div>Modified</div>
            </div>} clickable />
      </List>
    </div>
}`,...(Q=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <List variant="bordered">
        <ListItem as="a" href="https://databricks.com" target="_blank" startContent={<DashboardIcon />} primary="External Link" secondary="Opens in new tab" tertiary="https://databricks.com" endContent="↗" />
        <ListItem as="a" href="/dashboard" startContent={<TableIcon />} primary="Internal Link" secondary="Navigate within app" tertiary="/dashboard" />
        <ListItem as="a" href="/notebooks" startContent={<NotebookIcon />} primary="Another Internal Link" secondary="Another page" tertiary="/notebooks" />
      </List>
    </div>
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,re;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <List variant="bordered">
        <ListItem>
          <div style={{
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
            <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#4299E0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: '600'
          }}>
              JD
            </div>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontWeight: '500',
              marginBottom: '2px'
            }}>John Doe</div>
              <div style={{
              fontSize: '13px',
              color: '#6B7280'
            }}>john.doe@company.com</div>
              <div style={{
              fontSize: '12px',
              color: '#9EA3AD',
              marginTop: '4px'
            }}>
                Last active: 2 hours ago
              </div>
            </div>
            <div style={{
            display: 'flex',
            gap: '8px'
          }}>
              <button style={{
              padding: '4px 12px',
              fontSize: '12px',
              border: '1px solid #2272B4',
              borderRadius: '4px',
              background: '#FFFFFF',
              color: '#2272B4',
              cursor: 'pointer'
            }}>
                Message
              </button>
              <button style={{
              padding: '4px 12px',
              fontSize: '12px',
              border: '1px solid #DDE0E5',
              borderRadius: '4px',
              background: '#FFFFFF',
              cursor: 'pointer'
            }}>
                More
              </button>
            </div>
          </div>
        </ListItem>
      </List>
    </div>
}`,...(re=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,ae,de;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <List variant="divided" hoverable={false}>
        <ListItem primary="Non-hoverable item 1" secondary="Hover effects disabled" clickable />
        <ListItem primary="Non-hoverable item 2" secondary="No background change on hover" clickable />
        <ListItem primary="Non-hoverable item 3" secondary="Static appearance" clickable />
      </List>
    </div>
}`,...(de=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};const ge=["Default","Variants","Sizes","DenseList","WithSelection","WithEndContent","AsLinks","CustomContent","NonHoverable"];export{k as AsLinks,L as CustomContent,y as Default,f as DenseList,I as NonHoverable,b as Sizes,v as Variants,j as WithEndContent,g as WithSelection,ge as __namedExportsOrder,fe as default};
