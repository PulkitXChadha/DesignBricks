import{j as _,a as ha}from"./jsx-runtime-D2eXtamC.js";import{r as i}from"./index-SE77F2UD.js";import{c as me}from"./clsx-B-dksMZM.js";import{f as E,s as R,C as ma,D as pa}from"./ChartTooltip-Ckz6r7Tp.js";import{s as ya,n as ba,a as ga,m as O}from"./stack-DtlV12Ze.js";import{b as H}from"./band-BzzEMzBQ.js";import{l as U,b as pe,a as ye}from"./linear-Bfi9Vb7F.js";import"./_commonjsHelpers-DM6icglO.js";import"./ordinal-BxAiDHEN.js";const fa=i.createContext(null),re=i.forwardRef(({data:c=[],width:k=600,height:S=400,variant:b="default",color:Q="primary",title:X,orientation:s="vertical",borderRadius:B=2,barPadding:L=.1,stacked:F=!1,series:A=[],xAxis:fe,yAxis:xe,grid:ve,theme:we,animation:De,tooltip:t,showTooltip:ne=!0,formatTooltip:_e,showValueLabels:ke=!1,keyboard:Y=!1,ariaLabel:na,themeClass:sa,optimized:oa=!1,className:Ce,...se},Se)=>{const C=i.useRef(null),ia=i.useRef(null),[la,z]=i.useState(!1),[ca,oe]=i.useState({x:0,y:0}),[T,$]=i.useState(null),h=i.useMemo(()=>({show:!0,position:s==="vertical"?"bottom":"left",variant:b==="minimal"?"minimal":"default",rotateLabels:s==="vertical"&&c.length>8,...fe}),[s,b,c.length,fe]),g=i.useMemo(()=>({show:!0,position:s==="vertical"?"left":"bottom",variant:b==="minimal"?"minimal":"default",tickCount:b==="detailed"?8:6,...xe}),[s,b,xe]),V=i.useMemo(()=>({show:b!=="minimal",strokeDasharray:b==="detailed"?"1,3":"2,2",opacity:b==="detailed"?.2:.3,...ve}),[b,ve]),ie=i.useMemo(()=>({colorScheme:"auto",cssVars:{"--chart-bar-radius":`${B}px`,"--chart-bar-padding":L.toString()},...we}),[B,L,we]),D=i.useMemo(()=>({enabled:b==="detailed",duration:b==="detailed"?500:300,easing:"ease-out",...De}),[b,De]),le=i.useMemo(()=>["var(--chart-primary)","var(--chart-secondary)","var(--chart-success)","var(--chart-warning)","var(--chart-error)","hsl(280 65% 60%)","hsl(180 65% 60%)","hsl(30 65% 60%)"],[]),Ae=i.useMemo(()=>({placement:"auto",offset:{x:0,y:-10}}),[]),o=i.useMemo(()=>({enabled:(t==null?void 0:t.enabled)!==void 0?t.enabled:ne,component:t==null?void 0:t.component,content:(t==null?void 0:t.content)||_e,style:t==null?void 0:t.style,placement:(t==null?void 0:t.placement)||Ae,className:t==null?void 0:t.className,animationDuration:(t==null?void 0:t.animationDuration)||200,showDelay:(t==null?void 0:t.showDelay)||0,hideDelay:(t==null?void 0:t.hideDelay)||0,...t}),[t,ne,_e,Ae]),y=i.useMemo(()=>({top:X?40:20,right:s==="horizontal"?60:20,bottom:(h.label?60:40)+(h.rotateLabels?20:0),left:(g.label?80:60)+(s==="horizontal"?20:0)}),[X,s,h.label,h.rotateLabels,g.label]),q=i.useMemo(()=>k-y.left-y.right,[k,y]),f=i.useMemo(()=>S-y.top-y.bottom,[S,y]),{xScale:m,yScale:u,stackedData:ce,seriesKeys:da}=i.useMemo(()=>{if(!c.length)return{xScale:null,yScale:null,stackedData:null,seriesKeys:[]};let w,M,N=null,x=[];if(F&&A.length>0){x=A.map(a=>a.key),N=ya().keys(x).order(ba).offset(ga)(c);const e=O(N,a=>O(a,n=>n[1]))||0;s==="vertical"?(w=H().domain(c.map(a=>a.x)).range([0,q]).padding(L),M=U().domain([0,e]).nice().range([f,0])):(w=U().domain([0,e]).nice().range([0,q]),M=H().domain(c.map(a=>a.x)).range([0,f]).padding(L))}else{const d=c;s==="vertical"?(w=H().domain(c.map(e=>e.x)).range([0,q]).padding(L),M=U().domain([0,O(d,e=>e.y)||0]).nice().range([f,0])):(w=U().domain([0,O(d,e=>e.y)||0]).nice().range([0,q]),M=H().domain(c.map(e=>e.x)).range([0,f]).padding(L))}return{xScale:w,yScale:M,stackedData:N,seriesKeys:x}},[c,q,f,s,L,F,A]),de=i.useMemo(()=>h.tickFormatter||(w=>String(w)),[h.tickFormatter]),ue=i.useMemo(()=>g.tickFormatter||E(".2s"),[g.tickFormatter]);i.useEffect(()=>{if(!C.current||!c.length||!m||!u)return;const w=(d,e,a)=>{if(!C.current)return;const n=d.target.getBoundingClientRect(),r=C.current.getBoundingClientRect();let l,p;s==="vertical"?(l=n.left-r.left+n.width/2,p=n.top-r.top):(l=n.right-r.left,p=n.top-r.top+n.height/2);const v=l+y.left,P=p+y.top;oe({x:v,y:P}),$({dataPoint:e,index:a}),z(!0)},M=(d,e,a,n)=>{if(!C.current)return;const r=d.target.getBoundingClientRect(),l=C.current.getBoundingClientRect();let p,v;s==="vertical"?(p=r.left-l.left+r.width/2,v=r.top-l.top):(p=r.right-l.left,v=r.top-l.top+r.height/2);const P=p+y.left,he=v+y.top;oe({x:P,y:he}),$({dataPoint:{x:`${e} - ${a}`,y:n},index:0}),z(!0)},N=R(C.current);N.selectAll("*").remove();const x=N.append("g").attr("transform",`translate(${y.left},${y.top})`);if(V.show&&(s==="vertical"?x.append("g").attr("class","db-barchart__grid db-barchart__grid--y").call(pe(u).tickSize(-q).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",V.strokeDasharray||"2,2").style("opacity",V.opacity||.3):x.append("g").attr("class","db-barchart__grid db-barchart__grid--x").attr("transform",`translate(0,${f})`).call(ye(m).tickSize(-f).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",V.strokeDasharray||"2,2").style("opacity",V.opacity||.3)),h.show){const d=x.append("g").attr("class",`db-barchart__axis db-barchart__axis--x db-barchart__axis--${h.variant}`).attr("transform",`translate(0,${f})`),e=s==="vertical"?ye(m):ye(m).ticks(h.tickCount||6);e.tickFormat(n=>s==="vertical"?de(n):ue(n));const a=d.call(e);h.rotateLabels&&s==="vertical"&&a.selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy",".15em").attr("transform","rotate(-45)")}if(g.show){const d=x.append("g").attr("class",`db-barchart__axis db-barchart__axis--y db-barchart__axis--${g.variant}`),e=s==="vertical"?pe(u).ticks(g.tickCount||6):pe(u);e.tickFormat(a=>s==="vertical"?ue(a):de(a)),d.call(e)}if(F&&ce&&A.length>0){const e=x.selectAll(".db-barchart__layer").data(ce).enter().append("g").attr("class","db-barchart__layer").attr("fill",(a,n)=>{var r;return((r=A[n])==null?void 0:r.color)||le[n%le.length]}).selectAll("rect").data(a=>a).enter().append("rect").attr("class","db-barchart__bar db-barchart__bar--stacked").style("rx",B).style("ry",B);s==="vertical"?e.attr("x",a=>m(a.data.x)||0).attr("width",m.bandwidth()).attr("y",f).attr("height",0).transition().duration(D.enabled?D.duration||300:0).attr("y",a=>u(a[1])||0).attr("height",a=>u(a[0])-u(a[1])):e.attr("x",0).attr("width",0).attr("y",a=>u(a.data.x)||0).attr("height",u.bandwidth()).transition().duration(D.enabled?D.duration||300:0).attr("x",a=>m(a[0])||0).attr("width",a=>m(a[1])-m(a[0])),o.enabled&&e.on("mouseenter",function(a,n){const r=n.data.x,l=this.parentNode,p=R(l).datum().key,v=A.find(he=>he.key===p),P=n.data[p];R(this).classed("db-barchart__bar--hover",!0),M(a,r,(v==null?void 0:v.name)||p,P)}).on("mouseleave",function(){R(this).classed("db-barchart__bar--hover",!1),z(!1),$(null)}),Y&&e.attr("tabindex",0).attr("role","button").attr("aria-label",a=>{const n=a.data.x,r=R(a.parentNode).datum().key,l=A.find(v=>v.key===r),p=a.data[r];return`${n}: ${(l==null?void 0:l.name)||r} - ${E(".2s")(p)}`})}else{const d=x.selectAll(".db-barchart__bar").data(c).enter().append("rect").attr("class",`db-barchart__bar db-barchart__bar--${Q}`).style("rx",B).style("ry",B);if(s==="vertical"?d.attr("x",e=>m(e.x)||0).attr("width",m.bandwidth()).attr("y",f).attr("height",0).transition().duration(D.enabled?D.duration||300:0).attr("y",e=>u(e.y)||0).attr("height",e=>f-(u(e.y)||0)):d.attr("x",0).attr("width",0).attr("y",e=>u(e.x)||0).attr("height",u.bandwidth()).transition().duration(D.enabled?D.duration||300:0).attr("width",e=>m(e.y)||0),o.enabled){let e=null,a=null;d.on("mouseenter",function(n,r){const l=c.indexOf(r);a&&(clearTimeout(a),a=null),o.showDelay&&o.showDelay>0?e=window.setTimeout(()=>{w(n,r,l)},o.showDelay):w(n,r,l),R(this).classed("db-barchart__bar--hover",!0)}).on("mouseleave",function(){e&&(clearTimeout(e),e=null),o.hideDelay&&o.hideDelay>0?a=window.setTimeout(()=>{z(!1),$(null)},o.hideDelay):(z(!1),$(null)),R(this).classed("db-barchart__bar--hover",!1)})}Y&&d.attr("tabindex",0).attr("role","button").attr("aria-label",e=>`${e.x}: ${E(".2s")(e.y)}`).on("focus",function(e,a){var r;const n=c.indexOf(a);if(o.enabled){const l=this.getBoundingClientRect(),p=(r=C.current)==null?void 0:r.getBoundingClientRect();if(p){const v=l.left-p.left+l.width/2,P=l.top-p.top+l.height/2;oe({x:v,y:P}),$({dataPoint:a,index:n}),z(!0)}}}).on("blur",function(){o.enabled&&(z(!1),$(null))})}if(ke&&!F){const d=x.selectAll(".db-barchart__value-label").data(c).enter().append("text").attr("class","db-barchart__value-label").style("font-size","12px").style("fill","#37444F").style("font-weight","500").style("text-anchor",s==="vertical"?"middle":"start");s==="vertical"?d.attr("x",e=>(m(e.x)||0)+m.bandwidth()/2).attr("y",e=>(u(e.y)||0)-5).text(e=>E(".2s")(e.y)):d.attr("x",e=>(m(e.y)||0)+5).attr("y",e=>(u(e.x)||0)+u.bandwidth()/2).attr("dy","0.35em").text(e=>E(".2s")(e.y))}h.label&&x.append("text").attr("class","db-barchart__axis-label db-barchart__axis-label--x").attr("transform",`translate(${q/2}, ${f+(h.rotateLabels?60:40)})`).style("text-anchor","middle").text(h.label),g.label&&x.append("text").attr("class","db-barchart__axis-label db-barchart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-y.left+20).attr("x",0-f/2).style("text-anchor","middle").text(g.label),X&&N.append("text").attr("class","db-barchart__title").attr("x",k/2).attr("y",25).style("text-anchor","middle").text(X)},[c,k,S,m,u,ce,da,F,A,s,Q,B,ke,X,h.show,h.label,h.rotateLabels,h.variant,h.tickCount,g.show,g.label,g.variant,g.tickCount,V.show,V.strokeDasharray,V.opacity,D.enabled,D.duration,Y,y,de,ue,le,o.enabled,o.showDelay,o.hideDelay]);const ua=i.useMemo(()=>({data:c,width:k,height:S,color:Q,xScale:m,yScale:u,svgRef:C}),[c,k,S,Q,m,u]);return c.length?_(fa.Provider,{value:ua,children:ha("div",{ref:Se,className:me("db-barchart",`db-barchart--${b}`,`db-barchart--${Q}`,`db-barchart--${s}`,{"db-barchart--optimized":oa,"db-barchart--keyboard":Y},sa,Ce),"data-theme":ie.colorScheme!=="auto"?ie.colorScheme:void 0,style:{...ie.cssVars,...se.style||{}},role:"img","aria-label":na||`Bar chart with ${c.length} categories`,...se,children:[_("svg",{ref:C,className:"db-barchart__svg",width:k,height:S,role:"presentation","aria-hidden":"true"}),o.enabled&&T&&_(ma,{visible:la,position:ca,tooltipStyle:o.style,placement:o.placement,animationDuration:o.animationDuration,containerDimensions:{width:k,height:S},className:me("db-barchart__tooltip",o.className),role:"tooltip","aria-live":"polite",children:o.component?_(o.component,{data:T.dataPoint,index:T.index,chartDimensions:{width:k,height:S}}):o.content?_("div",{dangerouslySetInnerHTML:{__html:o.content(T.dataPoint,T.index)}}):_(pa,{label:T.dataPoint.x,value:E(".2s")(T.dataPoint.y),color:`var(--chart-${Q})`})}),ne&&!o.enabled&&_("div",{ref:ia,className:"db-barchart__tooltip",role:"tooltip","aria-live":"polite"})]})}):_("div",{ref:Se,className:me("db-barchart","db-barchart--empty",Ce),...se,children:_("div",{className:"db-barchart__empty-state",children:_("p",{children:"No data available"})})})});re.displayName="BarChart";try{re.displayName="BarChart",re.__docgenInfo={description:"",displayName:"BarChart",props:{data:{defaultValue:{value:"[]"},description:"Chart data points",name:"data",required:!1,type:{name:"BarChartDataPoint[] | BarChartStackedDataPoint[]"}},width:{defaultValue:{value:"600"},description:"Chart width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Chart height",name:"height",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Chart variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"detailed"'},{value:'"minimal"'}]}},color:{defaultValue:{value:"primary"},description:"Color scheme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation of bars",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},borderRadius:{defaultValue:{value:"2"},description:"Bar corner radius",name:"borderRadius",required:!1,type:{name:"number"}},barPadding:{defaultValue:{value:"0.1"},description:"Space between bars (0-1)",name:"barPadding",required:!1,type:{name:"number"}},stacked:{defaultValue:{value:"false"},description:"Enable stacked bars",name:"stacked",required:!1,type:{name:"boolean"}},series:{defaultValue:{value:"[]"},description:"Series configuration for stacked bars",name:"series",required:!1,type:{name:"BarChartSeries[]"}},xAxis:{defaultValue:null,description:"X-axis configuration",name:"xAxis",required:!1,type:{name:"BarChartAxis"}},yAxis:{defaultValue:null,description:"Y-axis configuration",name:"yAxis",required:!1,type:{name:"BarChartAxis"}},grid:{defaultValue:null,description:"Grid configuration",name:"grid",required:!1,type:{name:"BarChartGrid"}},theme:{defaultValue:null,description:"Theme configuration",name:"theme",required:!1,type:{name:"BarChartTheme"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"BarChartAnimation"}},responsive:{defaultValue:null,description:"Responsive configuration",name:"responsive",required:!1,type:{name:"BarChartResponsive"}},tooltip:{defaultValue:null,description:"Enhanced tooltip configuration",name:"tooltip",required:!1,type:{name:"TooltipConfig<BarChartDataPoint>"}},showTooltip:{defaultValue:{value:"true"},description:"@deprecated Use tooltip.enabled instead",name:"showTooltip",required:!1,type:{name:"boolean"}},formatTooltip:{defaultValue:null,description:"@deprecated Use tooltip.content instead",name:"formatTooltip",required:!1,type:{name:"((_dataPoint: BarChartDataPoint, _index?: number) => string)"}},showValueLabels:{defaultValue:{value:"false"},description:"Show value labels on bars",name:"showValueLabels",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"false"},description:"Enable keyboard navigation",name:"keyboard",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"ARIA label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},themeClass:{defaultValue:null,description:"Custom CSS class for theming",name:"themeClass",required:!1,type:{name:"string"}},optimized:{defaultValue:{value:"false"},description:"Enable performance optimizations",name:"optimized",required:!1,type:{name:"boolean"}},hoverDebounce:{defaultValue:null,description:"Debounce hover events (ms)",name:"hoverDebounce",required:!1,type:{name:"number"}}}}}catch{}const Qa={title:"Data Display/BarChart",component:re,parameters:{layout:"centered",docs:{description:{component:"A flexible bar chart component built with D3.js for visualizing categorical data with vertical or horizontal bars. Supports multiple variants, tooltips, animations, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with category labels and values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the bars"},orientation:{control:"radio",options:["vertical","horizontal"],description:"Orientation of the bars"},borderRadius:{control:{type:"range",min:0,max:10,step:1},description:"Border radius for bar corners"},barPadding:{control:{type:"range",min:0,max:.5,step:.05},description:"Padding between bars (0-0.5)"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},showValueLabels:{control:"boolean",description:"Show value labels on bars"},title:{control:"text",description:"Chart title"},stacked:{control:"boolean",description:"Enable stacked bars"},series:{control:"object",description:"Series configuration for stacked bars"}}},be=[{x:"Q1",y:2400},{x:"Q2",y:1398},{x:"Q3",y:9800},{x:"Q4",y:3908},{x:"Q5",y:4800},{x:"Q6",y:3800},{x:"Q7",y:4300}],ge=[{x:"Marketing",y:12500},{x:"Sales",y:8900},{x:"Engineering",y:15200},{x:"Support",y:6700},{x:"Operations",y:4300}],xa=[{x:"Very Long Category Name",y:4200},{x:"Another Long Label",y:3100},{x:"Short",y:5800},{x:"Medium Length Label",y:2900},{x:"Extra Long Category Description",y:6500}],va=[{x:"Jan",y:4e3},{x:"Feb",y:3e3},{x:"Mar",y:5e3},{x:"Apr",y:4500},{x:"May",y:6e3},{x:"Jun",y:5500},{x:"Jul",y:7e3},{x:"Aug",y:6500},{x:"Sep",y:5800},{x:"Oct",y:6200},{x:"Nov",y:7200},{x:"Dec",y:8e3}],wa=[{x:"Q1",product1:2400,product2:1500,product3:800},{x:"Q2",product1:1398,product2:2e3,product3:1200},{x:"Q3",product1:9800,product2:1800,product3:1e3},{x:"Q4",product1:3908,product2:2500,product3:1500},{x:"Q5",product1:4800,product2:2200,product3:900}],Da=[{key:"product1",name:"Product A",color:"var(--chart-primary)"},{key:"product2",name:"Product B",color:"var(--chart-secondary)"},{key:"product3",name:"Product C",color:"var(--chart-success)"}],_a={label:"Quarter"},ka={label:"Revenue ($)"},Ca={label:"Month",rotateLabels:!1},Sa={label:"Sales ($)"},Aa={label:"Quarter"},Va={label:"Revenue ($)"},Ba={rotateLabels:!0},j={args:{data:be,width:600,height:400,variant:"default",color:"primary",title:"Quarterly Revenue"}},K={args:{data:ge,width:500,height:350,color:"primary",title:"Color Variants"},parameters:{docs:{description:{story:"Different color schemes available for the bar chart. Use the color control to switch between primary, secondary, success, warning, and error colors."}}}},G={args:{data:be,width:600,height:400,variant:"default",title:"Chart Variants"},parameters:{docs:{description:{story:"Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds more visual elements. Use the variant control to switch between them."}}}},W={args:{data:ge,width:700,height:400,orientation:"horizontal",color:"primary",title:"Horizontal Bars"},parameters:{docs:{description:{story:"Bars can be oriented horizontally for different layout needs. Toggle the orientation control to switch between vertical and horizontal."}}}},J={args:{data:be,width:600,height:400,variant:"default",color:"success",borderRadius:6,barPadding:.2,showValueLabels:!0,title:"Custom Styling Options",xAxis:_a,yAxis:ka},parameters:{docs:{description:{story:"Demonstrates customization options including border radius, bar padding, value labels, and axis labels. All styling options are available through the controls panel."}}}},I={args:{data:ge,width:600,height:400,color:"primary",showValueLabels:!0,title:"Bars with Value Labels"},parameters:{docs:{description:{story:"Bar chart displaying value labels on top of each bar. Works with both vertical and horizontal orientations."}}}},Z={args:{data:xa,width:700,height:450,color:"warning",title:"Long Category Names",xAxis:Ba},parameters:{docs:{description:{story:"Handling long category names with rotated labels for better readability."}}}},ee={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},ae={args:{data:va,width:800,height:450,color:"primary",variant:"detailed",showTooltip:!0,title:"Monthly Sales Data",xAxis:Ca,yAxis:Sa},parameters:{docs:{description:{story:"Bar chart with a larger dataset showing monthly sales data. Hover over bars to see interactive tooltips."}}}},te={args:{data:wa,series:Da,stacked:!0,width:700,height:450,variant:"default",title:"Stacked Bar Chart - Quarterly Sales by Product",showTooltip:!0,xAxis:Aa,yAxis:Va},parameters:{docs:{description:{story:"Stacked bar chart showing multiple data series stacked together. Each color represents a different product category. Use the orientation control to switch between vertical and horizontal stacking."}}}};var Ve,Be,Le;j.parameters={...j.parameters,docs:{...(Ve=j.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Quarterly Revenue'
  }
}`,...(Le=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var ze,Te,$e;K.parameters={...K.parameters,docs:{...(ze=K.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var qe,Me,Ne;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ne=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Pe,Re,Qe;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Qe=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Qe.source}}};var Ee,Xe,Fe;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Fe=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:Fe.source}}};var Ye,Oe,He;I.parameters={...I.parameters,docs:{...(Ye=I.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(He=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};var Ue,je,Ke;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Ge,We,Je;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(ra=(ta=te.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};const Ea=["Default","ColorVariants","Variants","HorizontalOrientation","CustomStyling","WithValueLabels","LongCategoryNames","NoData","LargeDataset","Stacked"];export{K as ColorVariants,J as CustomStyling,j as Default,W as HorizontalOrientation,ae as LargeDataset,Z as LongCategoryNames,ee as NoData,te as Stacked,G as Variants,I as WithValueLabels,Ea as __namedExportsOrder,Qa as default};
