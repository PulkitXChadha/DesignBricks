import{j as D}from"./jsx-runtime-LnmZrwv1.js";import{r as i}from"./index-CWnxZbJP.js";import{c as me}from"./clsx-B-dksMZM.js";import{f as E,s as R,C as ma,D as ha}from"./ChartTooltip-DGQGfrCB.js";import{s as pa,n as ya,a as ba,m as Y}from"./stack-C8oqfcn6.js";import{b as O}from"./band-BpA5gmKc.js";import{l as H,b as he,a as pe}from"./linear-DS12kqSE.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ordinal-CHtbxqiZ.js";const ga=i.createContext(null),ye=i.forwardRef(({data:c=[],width:C=600,height:k=400,variant:b="default",color:Q="primary",title:j,orientation:n="vertical",borderRadius:B=2,barPadding:V=.1,stacked:X=!1,series:A=[],xAxis:fe,yAxis:xe,grid:ve,theme:we,animation:De,responsive:Ba,tooltip:t,showTooltip:re=!0,formatTooltip:_e,showValueLabels:Ce=!1,keyboard:F=!1,ariaLabel:sa,themeClass:na,optimized:oa=!1,hoverDebounce:Va=0,className:Se,...se},ke)=>{const S=i.useRef(null),ia=i.useRef(null),[la,L]=i.useState(!1),[ca,ne]=i.useState({x:0,y:0}),[z,$]=i.useState(null),m=i.useMemo(()=>({show:!0,position:n==="vertical"?"bottom":"left",variant:b==="minimal"?"minimal":"default",rotateLabels:n==="vertical"&&c.length>8,...fe}),[n,b,c.length,fe]),g=i.useMemo(()=>({show:!0,position:n==="vertical"?"left":"bottom",variant:b==="minimal"?"minimal":"default",tickCount:b==="detailed"?8:6,...xe}),[n,b,xe]),T=i.useMemo(()=>({show:b!=="minimal",strokeDasharray:b==="detailed"?"1,3":"2,2",opacity:b==="detailed"?.2:.3,...ve}),[b,ve]),oe=i.useMemo(()=>({colorScheme:"auto",cssVars:{"--chart-bar-radius":`${B}px`,"--chart-bar-padding":V.toString()},...we}),[B,V,we]),_=i.useMemo(()=>({enabled:b==="detailed",duration:b==="detailed"?500:300,easing:"ease-out",...De}),[b,De]),ie=i.useMemo(()=>["var(--chart-primary)","var(--chart-secondary)","var(--chart-success)","var(--chart-warning)","var(--chart-error)","hsl(280 65% 60%)","hsl(180 65% 60%)","hsl(30 65% 60%)"],[]),Ae=i.useMemo(()=>({placement:"auto",offset:{x:0,y:-10}}),[]),o=i.useMemo(()=>({enabled:(t==null?void 0:t.enabled)!==void 0?t.enabled:re,component:t==null?void 0:t.component,content:(t==null?void 0:t.content)||_e,style:t==null?void 0:t.style,placement:(t==null?void 0:t.placement)||Ae,className:t==null?void 0:t.className,animationDuration:(t==null?void 0:t.animationDuration)||200,showDelay:(t==null?void 0:t.showDelay)||0,hideDelay:(t==null?void 0:t.hideDelay)||0,...t}),[t,re,_e,Ae]),y=i.useMemo(()=>({top:j?40:20,right:n==="horizontal"?60:20,bottom:(m.label?60:40)+(m.rotateLabels?20:0),left:(g.label?80:60)+(n==="horizontal"?20:0)}),[j,n,m.label,m.rotateLabels,g.label]),q=i.useMemo(()=>C-y.left-y.right,[C,y]),f=i.useMemo(()=>k-y.top-y.bottom,[k,y]),{xScale:h,yScale:u,stackedData:le,seriesKeys:da}=i.useMemo(()=>{if(!c.length)return{xScale:null,yScale:null,stackedData:null,seriesKeys:[]};let w,M,P=null,x=[];if(X&&A.length>0){x=A.map(a=>a.key),P=pa().keys(x).order(ya).offset(ba)(c);const e=Y(P,a=>Y(a,s=>s[1]))||0;n==="vertical"?(w=O().domain(c.map(a=>a.x)).range([0,q]).padding(V),M=H().domain([0,e]).nice().range([f,0])):(w=H().domain([0,e]).nice().range([0,q]),M=O().domain(c.map(a=>a.x)).range([0,f]).padding(V))}else{const d=c;n==="vertical"?(w=O().domain(c.map(e=>e.x)).range([0,q]).padding(V),M=H().domain([0,Y(d,e=>e.y)||0]).nice().range([f,0])):(w=H().domain([0,Y(d,e=>e.y)||0]).nice().range([0,q]),M=O().domain(c.map(e=>e.x)).range([0,f]).padding(V))}return{xScale:w,yScale:M,stackedData:P,seriesKeys:x}},[c,q,f,n,V,X,A]),ce=i.useMemo(()=>m.tickFormatter||(w=>String(w)),[m.tickFormatter]),de=i.useMemo(()=>g.tickFormatter||E(".2s"),[g.tickFormatter]);i.useEffect(()=>{if(!S.current||!c.length||!h||!u)return;const w=(d,e,a)=>{if(!S.current)return;const s=d.target.getBoundingClientRect(),r=S.current.getBoundingClientRect();let l,p;n==="vertical"?(l=s.left-r.left+s.width/2,p=s.top-r.top):(l=s.right-r.left,p=s.top-r.top+s.height/2);const v=l+y.left,N=p+y.top;ne({x:v,y:N}),$({dataPoint:e,index:a}),L(!0)},M=(d,e,a,s)=>{if(!S.current)return;const r=d.target.getBoundingClientRect(),l=S.current.getBoundingClientRect();let p,v;n==="vertical"?(p=r.left-l.left+r.width/2,v=r.top-l.top):(p=r.right-l.left,v=r.top-l.top+r.height/2);const N=p+y.left,ue=v+y.top;ne({x:N,y:ue}),$({dataPoint:{x:`${e} - ${a}`,y:s},index:0}),L(!0)},P=R(S.current);P.selectAll("*").remove();const x=P.append("g").attr("transform",`translate(${y.left},${y.top})`);if(T.show&&(n==="vertical"?x.append("g").attr("class","db-barchart__grid db-barchart__grid--y").call(he(u).tickSize(-q).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",T.strokeDasharray||"2,2").style("opacity",T.opacity||.3):x.append("g").attr("class","db-barchart__grid db-barchart__grid--x").attr("transform",`translate(0,${f})`).call(pe(h).tickSize(-f).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",T.strokeDasharray||"2,2").style("opacity",T.opacity||.3)),m.show){const d=x.append("g").attr("class",`db-barchart__axis db-barchart__axis--x db-barchart__axis--${m.variant}`).attr("transform",`translate(0,${f})`),e=n==="vertical"?pe(h):pe(h).ticks(m.tickCount||6);e.tickFormat((s,r)=>n==="vertical"?ce(s):de(s));const a=d.call(e);m.rotateLabels&&n==="vertical"&&a.selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-45)")}if(g.show){const d=x.append("g").attr("class",`db-barchart__axis db-barchart__axis--y db-barchart__axis--${g.variant}`),e=n==="vertical"?he(u).ticks(g.tickCount||6):he(u);e.tickFormat((a,s)=>n==="vertical"?de(a):ce(a)),d.call(e)}if(X&&le&&A.length>0){const e=x.selectAll(".db-barchart__layer").data(le).enter().append("g").attr("class","db-barchart__layer").attr("fill",(a,s)=>{var r;return((r=A[s])==null?void 0:r.color)||ie[s%ie.length]}).selectAll("rect").data(a=>a).enter().append("rect").attr("class","db-barchart__bar db-barchart__bar--stacked").style("rx",B).style("ry",B);n==="vertical"?e.attr("x",a=>h(a.data.x)||0).attr("width",h.bandwidth()).attr("y",f).attr("height",0).transition().duration(_.enabled?_.duration||300:0).attr("y",a=>u(a[1])||0).attr("height",a=>u(a[0])-u(a[1])):e.attr("x",0).attr("width",0).attr("y",a=>u(a.data.x)||0).attr("height",u.bandwidth()).transition().duration(_.enabled?_.duration||300:0).attr("x",a=>h(a[0])||0).attr("width",a=>h(a[1])-h(a[0])),o.enabled&&e.on("mouseenter",function(a,s){const r=s.data.x,l=this.parentNode,p=R(l).datum().key,v=A.find(ue=>ue.key===p),N=s.data[p];R(this).classed("db-barchart__bar--hover",!0),M(a,r,(v==null?void 0:v.name)||p,N)}).on("mouseleave",function(){R(this).classed("db-barchart__bar--hover",!1),L(!1),$(null)}),F&&e.attr("tabindex",0).attr("role","button").attr("aria-label",a=>{const s=a.data.x,r=R(a.parentNode).datum().key,l=A.find(v=>v.key===r),p=a.data[r];return`${s}: ${(l==null?void 0:l.name)||r} - ${E(".2s")(p)}`})}else{const d=x.selectAll(".db-barchart__bar").data(c).enter().append("rect").attr("class",`db-barchart__bar db-barchart__bar--${Q}`).style("rx",B).style("ry",B);if(n==="vertical"?d.attr("x",e=>h(e.x)||0).attr("width",h.bandwidth()).attr("y",f).attr("height",0).transition().duration(_.enabled?_.duration||300:0).attr("y",e=>u(e.y)||0).attr("height",e=>f-(u(e.y)||0)):d.attr("x",0).attr("width",0).attr("y",e=>u(e.x)||0).attr("height",u.bandwidth()).transition().duration(_.enabled?_.duration||300:0).attr("width",e=>h(e.y)||0),o.enabled){let e=null,a=null;d.on("mouseenter",function(s,r){const l=c.indexOf(r);a&&(clearTimeout(a),a=null),o.showDelay&&o.showDelay>0?e=window.setTimeout(()=>{w(s,r,l)},o.showDelay):w(s,r,l),R(this).classed("db-barchart__bar--hover",!0)}).on("mouseleave",function(){e&&(clearTimeout(e),e=null),o.hideDelay&&o.hideDelay>0?a=window.setTimeout(()=>{L(!1),$(null)},o.hideDelay):(L(!1),$(null)),R(this).classed("db-barchart__bar--hover",!1)})}F&&d.attr("tabindex",0).attr("role","button").attr("aria-label",(e,a)=>`${e.x}: ${E(".2s")(e.y)}`).on("focus",function(e,a){var r;const s=c.indexOf(a);if(o.enabled){const l=this.getBoundingClientRect(),p=(r=S.current)==null?void 0:r.getBoundingClientRect();if(p){const v=l.left-p.left+l.width/2,N=l.top-p.top+l.height/2;ne({x:v,y:N}),$({dataPoint:a,index:s}),L(!0)}}}).on("blur",function(){o.enabled&&(L(!1),$(null))})}if(Ce&&!X){const d=x.selectAll(".db-barchart__value-label").data(c).enter().append("text").attr("class","db-barchart__value-label").style("font-size","12px").style("fill","#37444F").style("font-weight","500").style("text-anchor",n==="vertical"?"middle":"start");n==="vertical"?d.attr("x",e=>(h(e.x)||0)+h.bandwidth()/2).attr("y",e=>(u(e.y)||0)-5).text(e=>E(".2s")(e.y)):d.attr("x",e=>(h(e.y)||0)+5).attr("y",e=>(u(e.x)||0)+u.bandwidth()/2).attr("dy","0.35em").text(e=>E(".2s")(e.y))}m.label&&x.append("text").attr("class","db-barchart__axis-label db-barchart__axis-label--x").attr("transform",`translate(${q/2}, ${f+(m.rotateLabels?60:40)})`).style("text-anchor","middle").text(m.label),g.label&&x.append("text").attr("class","db-barchart__axis-label db-barchart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-y.left+20).attr("x",0-f/2).style("text-anchor","middle").text(g.label),j&&P.append("text").attr("class","db-barchart__title").attr("x",C/2).attr("y",25).style("text-anchor","middle").text(j)},[c,C,k,h,u,le,da,X,A,n,Q,B,Ce,j,m.show,m.label,m.rotateLabels,m.variant,m.tickCount,g.show,g.label,g.variant,g.tickCount,T.show,T.strokeDasharray,T.opacity,_.enabled,_.duration,F,y,ce,de,ie,o.enabled,o.showDelay,o.hideDelay]);const ua=i.useMemo(()=>({data:c,width:C,height:k,color:Q,xScale:h,yScale:u,svgRef:S}),[c,C,k,Q,h,u]);return c.length?D.jsx(ga.Provider,{value:ua,children:D.jsxs("div",{ref:ke,className:me("db-barchart",`db-barchart--${b}`,`db-barchart--${Q}`,`db-barchart--${n}`,{"db-barchart--optimized":oa,"db-barchart--keyboard":F},na,Se),"data-theme":oe.colorScheme!=="auto"?oe.colorScheme:void 0,style:{...oe.cssVars,...se.style||{}},role:"img","aria-label":sa||`Bar chart with ${c.length} categories`,...se,children:[D.jsx("svg",{ref:S,className:"db-barchart__svg",width:C,height:k,role:"presentation","aria-hidden":"true"}),o.enabled&&z&&D.jsx(ma,{visible:la,position:ca,tooltipStyle:o.style,placement:o.placement,animationDuration:o.animationDuration,containerDimensions:{width:C,height:k},className:me("db-barchart__tooltip",o.className),role:"tooltip","aria-live":"polite",children:o.component?D.jsx(o.component,{data:z.dataPoint,index:z.index,chartDimensions:{width:C,height:k}}):o.content?D.jsx("div",{dangerouslySetInnerHTML:{__html:o.content(z.dataPoint,z.index)}}):D.jsx(ha,{label:z.dataPoint.x,value:E(".2s")(z.dataPoint.y),color:`var(--chart-${Q})`})}),re&&!o.enabled&&D.jsx("div",{ref:ia,className:"db-barchart__tooltip",role:"tooltip","aria-live":"polite"})]})}):D.jsx("div",{ref:ke,className:me("db-barchart","db-barchart--empty",Se),...se,children:D.jsx("div",{className:"db-barchart__empty-state",children:D.jsx("p",{children:"No data available"})})})});ye.displayName="BarChart";ye.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!1,tsType:{name:"union",raw:"BarChartDataPoint[] | BarChartStackedDataPoint[]",elements:[{name:"Array",elements:[{name:"BarChartDataPoint"}],raw:"BarChartDataPoint[]"},{name:"Array",elements:[{name:"BarChartStackedDataPoint"}],raw:"BarChartStackedDataPoint[]"}]},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Orientation of bars",defaultValue:{value:"'vertical'",computed:!1}},borderRadius:{required:!1,tsType:{name:"number"},description:"Bar corner radius",defaultValue:{value:"2",computed:!1}},barPadding:{required:!1,tsType:{name:"number"},description:"Space between bars (0-1)",defaultValue:{value:"0.1",computed:!1}},stacked:{required:!1,tsType:{name:"boolean"},description:"Enable stacked bars",defaultValue:{value:"false",computed:!1}},series:{required:!1,tsType:{name:"Array",elements:[{name:"BarChartSeries"}],raw:"BarChartSeries[]"},description:"Series configuration for stacked bars",defaultValue:{value:"[]",computed:!1}},xAxis:{required:!1,tsType:{name:"BarChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"BarChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"BarChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"BarChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"BarChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"BarChartResponsive"},description:"Responsive configuration"},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"BarChartDataPoint"}],raw:"TooltipConfig<BarChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: BarChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"BarChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showValueLabels:{required:!1,tsType:{name:"boolean"},description:"Show value labels on bars",defaultValue:{value:"false",computed:!1}},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const ja={title:"Data Display/BarChart",component:ye,parameters:{layout:"centered",docs:{description:{component:"A flexible bar chart component built with D3.js for visualizing categorical data with vertical or horizontal bars. Supports multiple variants, tooltips, animations, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with category labels and values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the bars"},orientation:{control:"radio",options:["vertical","horizontal"],description:"Orientation of the bars"},borderRadius:{control:{type:"range",min:0,max:10,step:1},description:"Border radius for bar corners"},barPadding:{control:{type:"range",min:0,max:.5,step:.05},description:"Padding between bars (0-0.5)"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},showValueLabels:{control:"boolean",description:"Show value labels on bars"},title:{control:"text",description:"Chart title"},stacked:{control:"boolean",description:"Enable stacked bars"},series:{control:"object",description:"Series configuration for stacked bars"}}},be=[{x:"Q1",y:2400},{x:"Q2",y:1398},{x:"Q3",y:9800},{x:"Q4",y:3908},{x:"Q5",y:4800},{x:"Q6",y:3800},{x:"Q7",y:4300}],ge=[{x:"Marketing",y:12500},{x:"Sales",y:8900},{x:"Engineering",y:15200},{x:"Support",y:6700},{x:"Operations",y:4300}],fa=[{x:"Very Long Category Name",y:4200},{x:"Another Long Label",y:3100},{x:"Short",y:5800},{x:"Medium Length Label",y:2900},{x:"Extra Long Category Description",y:6500}],xa=[{x:"Jan",y:4e3},{x:"Feb",y:3e3},{x:"Mar",y:5e3},{x:"Apr",y:4500},{x:"May",y:6e3},{x:"Jun",y:5500},{x:"Jul",y:7e3},{x:"Aug",y:6500},{x:"Sep",y:5800},{x:"Oct",y:6200},{x:"Nov",y:7200},{x:"Dec",y:8e3}],va=[{x:"Q1",product1:2400,product2:1500,product3:800},{x:"Q2",product1:1398,product2:2e3,product3:1200},{x:"Q3",product1:9800,product2:1800,product3:1e3},{x:"Q4",product1:3908,product2:2500,product3:1500},{x:"Q5",product1:4800,product2:2200,product3:900}],wa=[{key:"product1",name:"Product A",color:"var(--chart-primary)"},{key:"product2",name:"Product B",color:"var(--chart-secondary)"},{key:"product3",name:"Product C",color:"var(--chart-success)"}],Da={label:"Quarter"},_a={label:"Revenue ($)"},Ca={label:"Month",rotateLabels:!1},Sa={label:"Sales ($)"},ka={label:"Quarter"},Aa={label:"Revenue ($)"},Ta={rotateLabels:!0},U={args:{data:be,width:600,height:400,variant:"default",color:"primary",title:"Quarterly Revenue"}},K={args:{data:ge,width:500,height:350,color:"primary",title:"Color Variants"},parameters:{docs:{description:{story:"Different color schemes available for the bar chart. Use the color control to switch between primary, secondary, success, warning, and error colors."}}}},G={args:{data:be,width:600,height:400,variant:"default",title:"Chart Variants"},parameters:{docs:{description:{story:"Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds more visual elements. Use the variant control to switch between them."}}}},W={args:{data:ge,width:700,height:400,orientation:"horizontal",color:"primary",title:"Horizontal Bars"},parameters:{docs:{description:{story:"Bars can be oriented horizontally for different layout needs. Toggle the orientation control to switch between vertical and horizontal."}}}},J={args:{data:be,width:600,height:400,variant:"default",color:"success",borderRadius:6,barPadding:.2,showValueLabels:!0,title:"Custom Styling Options",xAxis:Da,yAxis:_a},parameters:{docs:{description:{story:"Demonstrates customization options including border radius, bar padding, value labels, and axis labels. All styling options are available through the controls panel."}}}},I={args:{data:ge,width:600,height:400,color:"primary",showValueLabels:!0,title:"Bars with Value Labels"},parameters:{docs:{description:{story:"Bar chart displaying value labels on top of each bar. Works with both vertical and horizontal orientations."}}}},Z={args:{data:fa,width:700,height:450,color:"warning",title:"Long Category Names",xAxis:Ta},parameters:{docs:{description:{story:"Handling long category names with rotated labels for better readability."}}}},ee={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},ae={args:{data:xa,width:800,height:450,color:"primary",variant:"detailed",showTooltip:!0,title:"Monthly Sales Data",xAxis:Ca,yAxis:Sa},parameters:{docs:{description:{story:"Bar chart with a larger dataset showing monthly sales data. Hover over bars to see interactive tooltips."}}}},te={args:{data:va,series:wa,stacked:!0,width:700,height:450,variant:"default",title:"Stacked Bar Chart - Quarterly Sales by Product",showTooltip:!0,xAxis:ka,yAxis:Aa},parameters:{docs:{description:{story:"Stacked bar chart showing multiple data series stacked together. Each color represents a different product category. Use the orientation control to switch between vertical and horizontal stacking."}}}};var Te,Be,Ve;U.parameters={...U.parameters,docs:{...(Te=U.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Quarterly Revenue'
  }
}`,...(Ve=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Le,ze,$e;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 500,
    height: 350,
    color: 'primary',
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the bar chart. Use the color control to switch between primary, secondary, success, warning, and error colors.'
      }
    }
  }
}`,...($e=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var qe,Me,Pe;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    title: 'Chart Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds more visual elements. Use the variant control to switch between them.'
      }
    }
  }
}`,...(Pe=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Ne,Re,Qe;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 700,
    height: 400,
    orientation: 'horizontal',
    color: 'primary',
    title: 'Horizontal Bars'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bars can be oriented horizontally for different layout needs. Toggle the orientation control to switch between vertical and horizontal.'
      }
    }
  }
}`,...(Qe=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Qe.source}}};var Ee,je,Xe;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'success',
    borderRadius: 6,
    barPadding: 0.2,
    showValueLabels: true,
    title: 'Custom Styling Options',
    xAxis: customStylingXAxis,
    yAxis: customStylingYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates customization options including border radius, bar padding, value labels, and axis labels. All styling options are available through the controls panel.'
      }
    }
  }
}`,...(Xe=(je=J.parameters)==null?void 0:je.docs)==null?void 0:Xe.source}}};var Fe,Ye,Oe;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 600,
    height: 400,
    color: 'primary',
    showValueLabels: true,
    title: 'Bars with Value Labels'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart displaying value labels on top of each bar. Works with both vertical and horizontal orientations.'
      }
    }
  }
}`,...(Oe=(Ye=I.parameters)==null?void 0:Ye.docs)==null?void 0:Oe.source}}};var He,Ue,Ke;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    data: longLabelData,
    width: 700,
    height: 450,
    color: 'warning',
    title: 'Long Category Names',
    xAxis: longLabelXAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Handling long category names with rotated labels for better readability.'
      }
    }
  }
}`,...(Ke=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Ge,We,Je;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 500,
    height: 300,
    title: 'No Data State'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is provided to the chart.'
      }
    }
  }
}`,...(Je=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Ie,Ze,ea;ae.parameters={...ae.parameters,docs:{...(Ie=ae.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    data: largeMonthlyData,
    width: 800,
    height: 450,
    color: 'primary',
    variant: 'detailed',
    showTooltip: true,
    title: 'Monthly Sales Data',
    xAxis: largeDatasetXAxis,
    yAxis: largeDatasetYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Bar chart with a larger dataset showing monthly sales data. Hover over bars to see interactive tooltips.'
      }
    }
  }
}`,...(ea=(Ze=ae.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,ra;te.parameters={...te.parameters,docs:{...(aa=te.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    data: stackedData,
    series: stackedSeries,
    stacked: true,
    width: 700,
    height: 450,
    variant: 'default',
    title: 'Stacked Bar Chart - Quarterly Sales by Product',
    showTooltip: true,
    xAxis: stackedXAxis,
    yAxis: stackedYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Stacked bar chart showing multiple data series stacked together. Each color represents a different product category. Use the orientation control to switch between vertical and horizontal stacking.'
      }
    }
  }
}`,...(ra=(ta=te.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};const Xa=["Default","ColorVariants","Variants","HorizontalOrientation","CustomStyling","WithValueLabels","LongCategoryNames","NoData","LargeDataset","Stacked"];export{K as ColorVariants,J as CustomStyling,U as Default,W as HorizontalOrientation,ae as LargeDataset,Z as LongCategoryNames,ee as NoData,te as Stacked,G as Variants,I as WithValueLabels,Xa as __namedExportsOrder,ja as default};
