import{j as e,a as i,F as ve}from"./jsx-runtime-D2eXtamC.js";import{r as z}from"./index-SE77F2UD.js";import{c as w}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DM6icglO.js";const n=z.forwardRef(({children:a,variant:s="default",size:m="medium",dense:r=!1,hoverable:u=!0,className:y,...D},S)=>e("ul",{ref:S,className:w("db-list",`db-list--${s}`,`db-list--${m}`,{"db-list--dense":r,"db-list--hoverable":u},y),...D,children:a}));n.displayName="List";try{n.displayName="List",n.__docgenInfo={description:"",displayName:"List",props:{children:{defaultValue:null,description:"List items",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"default"},description:"List variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'},{value:'"divided"'},{value:'"bordered"'}]}},size:{defaultValue:{value:"medium"},description:"Size of list items",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},dense:{defaultValue:{value:"false"},description:"Whether list items are dense (less padding)",name:"dense",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"Whether list is hoverable",name:"hoverable",required:!1,type:{name:"boolean"}}}}}catch{}const t=z.forwardRef(({children:a,startContent:s,endContent:m,primary:r,secondary:u,tertiary:y,clickable:D=!1,selected:S=!1,disabled:p=!1,onClick:v,as:_="li",href:N,target:oe,contentClassName:le,className:ce,...me},pe)=>{const o=D||v||N,E=_==="a"||N,V=d=>{if(p){d.preventDefault();return}v==null||v(d)},he=d=>{p||o&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),V(d))},ue={ref:pe,className:w("db-list-item",{"db-list-item--interactive":o,"db-list-item--selected":S,"db-list-item--disabled":p},ce),onClick:o?V:void 0,onKeyDown:o?he:void 0,tabIndex:o&&!p?0:void 0,role:o&&!E?"button":void 0,"aria-disabled":p?!0:void 0,...E&&{href:N,target:oe},...me},ye=a||i("div",{className:w("db-list-item__content",le),children:[s&&e("div",{className:"db-list-item__start-content",children:s}),i("div",{className:"db-list-item__text-content",children:[r&&e("div",{className:"db-list-item__primary",children:r}),u&&e("div",{className:"db-list-item__secondary",children:u}),y&&e("div",{className:"db-list-item__tertiary",children:y})]}),m&&e("div",{className:"db-list-item__end-content",children:m})]});return e(_,{...ue,children:ye})});t.displayName="ListItem";try{t.displayName="ListItem",t.__docgenInfo={description:"",displayName:"ListItem",props:{children:{defaultValue:null,description:"Content of the list item",name:"children",required:!1,type:{name:"ReactNode"}},startContent:{defaultValue:null,description:"Leading icon or element",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"Trailing icon or element",name:"endContent",required:!1,type:{name:"ReactNode"}},primary:{defaultValue:null,description:"Primary text",name:"primary",required:!1,type:{name:"ReactNode"}},secondary:{defaultValue:null,description:"Secondary text",name:"secondary",required:!1,type:{name:"ReactNode"}},tertiary:{defaultValue:null,description:"Tertiary text (usually metadata like date, type, etc.)",name:"tertiary",required:!1,type:{name:"ReactNode"}},clickable:{defaultValue:{value:"false"},description:"Whether the item is clickable",name:"clickable",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Whether the item is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"((_event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},as:{defaultValue:{value:"li"},description:"Element to render as (default: li, but can be 'a' for links)",name:"as",required:!1,type:{name:"ElementType"}},href:{defaultValue:null,description:"Href when rendered as link",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Target when rendered as link",name:"target",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Custom className for the content wrapper",name:"contentClassName",required:!1,type:{name:"string"}}}}}catch{}const ke={title:"Data Display/List",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","plain","divided","bordered"]},size:{control:{type:"select"},options:["small","medium","large"]},dense:{control:"boolean"},hoverable:{control:"boolean"}}},l=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5 8.75v3h4.75v-3zm0-1.5h4.75V2.5H2.5zm6.25-6.5v3h4.75v-3zm0 11V7h4.75v6.5z",clipRule:"evenodd"})}),c=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M1 1.75A.75.75 0 0 1 1.75 1h12.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75zm1.5.75v3h11v-3zm0 11V7H5v6.5zm4 0h3V7h-3zM11 7v6.5h2.5V7z",clipRule:"evenodd"})}),A=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M3 1.75A.75.75 0 0 1 3.75 1h10.5a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V12.5H1V11h2V8.75H1v-1.5h2V5H1V3.5h2zm1.5.75v11H6v-11zm3 0v11h6v-11z",clipRule:"evenodd"})}),h=i(ve,{children:[e(t,{startContent:e(l,{}),primary:"Account Usage Dashboard v2 - DAIS",secondary:"/Users/cody.davis@databricks.com",tertiary:"Dashboard",clickable:!0,onClick:()=>console.log("Dashboard clicked")}),e(t,{startContent:e(c,{}),primary:"usage",secondary:"system.billing",tertiary:"Table",clickable:!0,onClick:()=>console.log("Table clicked")}),e(t,{startContent:e(A,{}),primary:"(MAKE A COPY) create app infra",secondary:"/Users/luke.barnes@databricks.com/vibe-coding",tertiary:"Notebook",clickable:!0,onClick:()=>console.log("Notebook clicked")})]}),b={args:{children:h}},f={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"500px"},children:[i("div",{children:[e("h4",{children:"Default"}),e(n,{variant:"default",children:h})]}),i("div",{children:[e("h4",{children:"Plain"}),e(n,{variant:"plain",children:h})]}),i("div",{children:[e("h4",{children:"Divided"}),e(n,{variant:"divided",children:h})]}),i("div",{children:[e("h4",{children:"Bordered"}),e(n,{variant:"bordered",children:h})]})]})},g={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"500px"},children:[i("div",{children:[e("h4",{children:"Small"}),i(n,{size:"small",variant:"bordered",children:[e(t,{startContent:e(l,{}),primary:"Small list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e(t,{startContent:e(c,{}),primary:"Another small item",secondary:"More details",clickable:!0})]})]}),i("div",{children:[e("h4",{children:"Medium (Default)"}),i(n,{size:"medium",variant:"bordered",children:[e(t,{startContent:e(l,{}),primary:"Medium list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e(t,{startContent:e(c,{}),primary:"Another medium item",secondary:"More details",clickable:!0})]})]}),i("div",{children:[e("h4",{children:"Large"}),i(n,{size:"large",variant:"bordered",children:[e(t,{startContent:e(l,{}),primary:"Large list item",secondary:"Secondary text",tertiary:"Tertiary text",clickable:!0}),e(t,{startContent:e(c,{}),primary:"Another large item",secondary:"More details",clickable:!0})]})]})]})},x={render:()=>e("div",{style:{width:"400px"},children:i(n,{dense:!0,variant:"divided",children:[e(t,{primary:"Dense list item 1",secondary:"Compact spacing",clickable:!0}),e(t,{primary:"Dense list item 2",secondary:"Less padding",clickable:!0}),e(t,{primary:"Dense list item 3",secondary:"More items visible",clickable:!0}),e(t,{primary:"Dense list item 4",secondary:"Efficient use of space",clickable:!0}),e(t,{primary:"Dense list item 5",secondary:"Perfect for long lists",clickable:!0})]})})},k={render:()=>{const[a,s]=z.useState("item2");return i("div",{style:{width:"400px"},children:[e(n,{variant:"bordered",children:[{id:"item1",title:"First Item",description:"Description for first item"},{id:"item2",title:"Second Item",description:"Description for second item"},{id:"item3",title:"Third Item",description:"Description for third item"},{id:"item4",title:"Fourth Item",description:"This item is disabled",disabled:!0}].map(r=>e(t,{primary:r.title,secondary:r.description,selected:a===r.id,disabled:r.disabled,clickable:!r.disabled,onClick:()=>!r.disabled&&s(r.id)},r.id))}),i("div",{style:{marginTop:"12px",fontSize:"14px",color:"#6B7280"},children:["Selected: ",a]})]})}},I={render:()=>e("div",{style:{width:"500px"},children:i(n,{variant:"divided",children:[e(t,{startContent:e(l,{}),primary:"Dashboard with Actions",secondary:"Click the button to perform action",endContent:e("button",{style:{padding:"4px 8px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF",cursor:"pointer"},onClick:a=>{a.stopPropagation(),alert("Action clicked!")},children:"Action"}),clickable:!0,onClick:()=>console.log("Item clicked")}),e(t,{startContent:e(c,{}),primary:"Item with Badge",secondary:"This item has a status badge",endContent:e("span",{style:{padding:"2px 8px",fontSize:"11px",backgroundColor:"#3BA65E",color:"#FFFFFF",borderRadius:"12px",fontWeight:"600"},children:"Active"}),clickable:!0}),e(t,{startContent:e(A,{}),primary:"Item with Metadata",secondary:"Additional information on the right",endContent:i("div",{style:{textAlign:"right",fontSize:"12px",color:"#9EA3AD"},children:[e("div",{children:"2 hours ago"}),e("div",{children:"Modified"})]}),clickable:!0})]})})},L={render:()=>e("div",{style:{width:"400px"},children:i(n,{variant:"bordered",children:[e(t,{as:"a",href:"https://databricks.com",target:"_blank",startContent:e(l,{}),primary:"External Link",secondary:"Opens in new tab",tertiary:"https://databricks.com",endContent:"↗"}),e(t,{as:"a",href:"/dashboard",startContent:e(c,{}),primary:"Internal Link",secondary:"Navigate within app",tertiary:"/dashboard"}),e(t,{as:"a",href:"/notebooks",startContent:e(A,{}),primary:"Another Internal Link",secondary:"Another page",tertiary:"/notebooks"})]})})},C={render:()=>e("div",{style:{width:"500px"},children:e(n,{variant:"bordered",children:e(t,{children:i("div",{style:{padding:"8px",display:"flex",alignItems:"center",gap:"12px"},children:[e("div",{style:{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#4299E0",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",fontWeight:"600"},children:"JD"}),i("div",{style:{flex:1},children:[e("div",{style:{fontWeight:"500",marginBottom:"2px"},children:"John Doe"}),e("div",{style:{fontSize:"13px",color:"#6B7280"},children:"john.doe@company.com"}),e("div",{style:{fontSize:"12px",color:"#9EA3AD",marginTop:"4px"},children:"Last active: 2 hours ago"})]}),i("div",{style:{display:"flex",gap:"8px"},children:[e("button",{style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #2272B4",borderRadius:"4px",background:"#FFFFFF",color:"#2272B4",cursor:"pointer"},children:"Message"}),e("button",{style:{padding:"4px 12px",fontSize:"12px",border:"1px solid #DDE0E5",borderRadius:"4px",background:"#FFFFFF",cursor:"pointer"},children:"More"})]})]})})})})},F={render:()=>e("div",{style:{width:"400px"},children:i(n,{variant:"divided",hoverable:!1,children:[e(t,{primary:"Non-hoverable item 1",secondary:"Hover effects disabled",clickable:!0}),e(t,{primary:"Non-hoverable item 2",secondary:"No background change on hover",clickable:!0}),e(t,{primary:"Non-hoverable item 3",secondary:"Static appearance",clickable:!0})]})})};var T,M,R;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: basicItems
  }
}`,...(R=(M=b.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var q,B,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var W,P,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var J,O,K;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(O=x.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var U,$,Y;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=($=k.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var G,Q,X;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <List variant="bordered">
        <ListItem as="a" href="https://databricks.com" target="_blank" startContent={<DashboardIcon />} primary="External Link" secondary="Opens in new tab" tertiary="https://databricks.com" endContent="↗" />
        <ListItem as="a" href="/dashboard" startContent={<TableIcon />} primary="Internal Link" secondary="Navigate within app" tertiary="/dashboard" />
        <ListItem as="a" href="/notebooks" startContent={<NotebookIcon />} primary="Another Internal Link" secondary="Another page" tertiary="/notebooks" />
      </List>
    </div>
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ne,re;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,de,se;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <List variant="divided" hoverable={false}>
        <ListItem primary="Non-hoverable item 1" secondary="Hover effects disabled" clickable />
        <ListItem primary="Non-hoverable item 2" secondary="No background change on hover" clickable />
        <ListItem primary="Non-hoverable item 3" secondary="Static appearance" clickable />
      </List>
    </div>
}`,...(se=(de=F.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};const Ie=["Default","Variants","Sizes","DenseList","WithSelection","WithEndContent","AsLinks","CustomContent","NonHoverable"];export{L as AsLinks,C as CustomContent,b as Default,x as DenseList,F as NonHoverable,g as Sizes,f as Variants,I as WithEndContent,k as WithSelection,Ie as __namedExportsOrder,ke as default};
