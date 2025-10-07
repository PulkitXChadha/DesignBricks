import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-Dz3UJJSw.js";import{c as ue}from"./clsx-B-dksMZM.js";import{i as Xt,f as ye,s as N,C as Nt,D as Ot}from"./ChartTooltip-BKefWaGn.js";import{e as he,l as Yt}from"./line-BGdQb7_a.js";import{t as Ht,c as Gt,i as G,d as Bt,l as Pe,a as ze,b as ke}from"./linear-vjb-cREh.js";import{s as B}from"./sum-CB6J5KXz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./path-DyVhHtw_.js";function Me(e){return function(l){return l<0?-Math.pow(-l,e):Math.pow(l,e)}}function It(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Wt(e){return e<0?-e*e:e*e}function Ut(e){var l=e(G,G),c=1;function p(){return c===1?e(G,G):c===.5?e(It,Wt):e(Me(c),Me(1/c))}return l.exponent=function(D){return arguments.length?(c=+D,p()):c},Bt(l)}function Tt(){var e=Ut(Ht());return e.copy=function(){return Gt(e,Tt()).exponent(e.exponent())},Xt.apply(e,arguments),e}function Jt(){return Tt.apply(null,arguments).exponent(.5)}const Kt=w.createContext(null),fe=w.forwardRef(({data:e=[],width:l=600,height:c=400,variant:p="default",color:D="primary",title:O,pointRadius:P=4,enableBubbles:b=!1,sizeRange:ge=[3,15],pointOpacity:Y=.7,showTrendLine:$=!1,trendLineColor:xe,xAxis:At,yAxis:Pt,grid:zt,theme:kt,animation:Mt,responsive:Zt,tooltip:r,showTooltip:le=!0,formatTooltip:ve,keyboard:Se=!1,ariaLabel:$t,themeClass:qt,optimized:Vt=!1,hoverDebounce:ea=0,className:we,...ce},Ce)=>{const q=w.useRef(null),Ft=w.useRef(null),[Rt,V]=w.useState(!1),[Et,_e]=w.useState({x:0,y:0}),[f,F]=w.useState(null),u={show:!0,variant:p==="minimal"?"minimal":"default",tickCount:p==="detailed"?8:6,...At},y={show:!0,variant:p==="minimal"?"minimal":"default",tickCount:p==="detailed"?8:6,...Pt},z={show:p!=="minimal",strokeDasharray:p==="detailed"?"1,3":"2,2",opacity:p==="detailed"?.2:.3,...zt},de={colorScheme:"auto",cssVars:{"--chart-point-radius":`${P}px`,"--chart-point-opacity":Y.toString()},...kt},H={enabled:p==="detailed",duration:p==="detailed"?600:400,...Mt},i={enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:le,component:r==null?void 0:r.component,content:(r==null?void 0:r.content)||ve,style:r==null?void 0:r.style,placement:(r==null?void 0:r.placement)||{placement:"auto",offset:{x:0,y:-10}},className:r==null?void 0:r.className,animationDuration:(r==null?void 0:r.animationDuration)||200,showDelay:(r==null?void 0:r.showDelay)||0,hideDelay:(r==null?void 0:r.hideDelay)||0,...r},d={top:O?40:20,right:20,bottom:u.label?60:40,left:y.label?80:60},R=l-d.left-d.right,_=c-d.top-d.bottom,{xScale:g,yScale:x,sizeScale:T,trendLineData:pe}=w.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,sizeScale:null,trendLineData:null};const o=u.domain||he(e,n=>n.x),h=Pe().domain(o).nice().range([0,R]),A=y.domain||he(e,n=>n.y),k=Pe().domain(A).nice().range([_,0]);let t=null;if(b&&e.some(n=>n.size!==void 0)){const n=he(e,s=>s.size||1);t=Jt().domain(n).range(ge)}let a=null;if($){const n=e.length,s=B(e,S=>S.x),v=B(e,S=>S.y),j=B(e,S=>S.x*S.y),X=B(e,S=>S.x*S.x),me=(n*j-s*v)/(n*X-s*s),De=(v-me*s)/n,Te=o[0],Ae=o[1];a=[{x:Te,y:me*Te+De},{x:Ae,y:me*Ae+De}]}return{xScale:h,yScale:k,sizeScale:t,trendLineData:a}},[e,R,_,b,ge,$,u.domain,y.domain]),E=u.tickFormatter||ye(".2f"),L=y.tickFormatter||ye(".2f"),Lt=ve||((o,h)=>{const A=E(o.x),k=L(o.y);let t='<div class="db-scatterchart__tooltip-content">';return o.label&&(t+=`<div class="db-scatterchart__tooltip-label">${o.label}</div>`),o.category&&(t+=`<div class="db-scatterchart__tooltip-category">${o.category}</div>`),t+='<div class="db-scatterchart__tooltip-coordinates">',t+=`<span class="db-scatterchart__tooltip-x">X: ${A}</span>`,t+=`<span class="db-scatterchart__tooltip-y">Y: ${k}</span>`,t+="</div>",b&&o.size&&(t+=`<div class="db-scatterchart__tooltip-size">Size: ${ye(".2f")(o.size)}</div>`),t+="</div>",t});if(w.useEffect(()=>{if(!q.current||!e.length||!g||!x)return;const o=N(q.current);o.selectAll("*").remove();const h=o.append("g").attr("transform",`translate(${d.left},${d.top})`);if(z.show&&(h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--x").attr("transform",`translate(0,${_})`).call(ze(g).tickSize(-_).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",z.strokeDasharray||"2,2").style("opacity",z.opacity||.3),h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--y").call(ke(x).tickSize(-R).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",z.strokeDasharray||"2,2").style("opacity",z.opacity||.3)),u.show){const t=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--x db-scatterchart__axis--${u.variant}`).attr("transform",`translate(0,${_})`),a=ze(g);u.tickCount&&a.ticks(u.tickCount),a.tickFormat((n,s)=>E(n)),t.call(a)}if(y.show){const t=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--y db-scatterchart__axis--${y.variant}`),a=ke(x);y.tickCount&&a.ticks(y.tickCount),a.tickFormat((n,s)=>L(n)),t.call(a)}if($&&pe){const t=Yt().x(a=>g(a.x)||0).y(a=>x(a.y)||0);h.append("path").datum(pe).attr("class","db-scatterchart__trend-line").attr("d",t).style("stroke",xe||"#8396A5").style("stroke-width",2).style("stroke-dasharray","4,4").style("fill","none").style("opacity",.8)}const A=h.selectAll(".db-scatterchart__point").data(e).enter().append("circle").attr("class",`db-scatterchart__point db-scatterchart__point--${D}`).attr("cx",t=>g(t.x)||0).attr("cy",t=>x(t.y)||0).attr("r",t=>b&&T&&t.size!==void 0?T(t.size):P).style("opacity",Y);if(H.enabled&&A.style("opacity",0).transition().delay((t,a)=>a*20).duration(H.duration||400).style("opacity",Y),Se&&A.attr("tabindex",0).attr("role","button").attr("aria-label",(t,a)=>{const n=E(t.x),s=L(t.y);return`Data point ${a+1}: X=${n}, Y=${s}${t.label?`, ${t.label}`:""}`}).on("focus",function(t,a){const n=e.indexOf(a);if(i.enabled){const s=g(a.x)||0,v=x(a.y)||0,j=s+d.left,X=v+d.top;_e({x:j,y:X}),F({dataPoint:a,index:n}),V(!0)}N(this).style("stroke","#2272B4").style("stroke-width",2)}).on("blur",function(){i.enabled&&(V(!1),F(null)),N(this).style("stroke","none")}),i.enabled){let t=null,a=null;A.on("mouseenter",function(n,s){const v=e.indexOf(s);a&&(clearTimeout(a),a=null),i.showDelay&&i.showDelay>0?t=window.setTimeout(()=>{k(n,s,v)},i.showDelay):k(n,s,v),N(this).style("stroke","#FFFFFF").style("stroke-width",2).transition().duration(150).attr("r",b&&T&&s.size!==void 0?(T(s.size)||0)+2:P+2)}).on("mouseleave",function(n,s){t&&(clearTimeout(t),t=null),i.hideDelay&&i.hideDelay>0?a=window.setTimeout(()=>{V(!1),F(null)},i.hideDelay):(V(!1),F(null)),N(this).style("stroke","none").transition().duration(150).attr("r",b&&T&&s.size!==void 0&&T(s.size)||P)})}function k(t,a,n){if(!q.current)return;const s=g(a.x)||0,v=x(a.y)||0,j=s+d.left,X=v+d.top;_e({x:j,y:X}),F({dataPoint:a,index:n}),V(!0)}u.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--x").attr("transform",`translate(${R/2}, ${_+d.bottom-10})`).style("text-anchor","middle").text(u.label),y.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-d.left+20).attr("x",0-_/2).style("text-anchor","middle").text(y.label),O&&o.append("text").attr("class","db-scatterchart__title").attr("x",l/2).attr("y",25).style("text-anchor","middle").text(O)},[e,l,c,g,x,T,pe,z.show,$,b,P,Y,le,D,u.label,y.label,O,d,R,_,E,L,Lt,H.enabled,H.duration,xe]),!e.length)return m.jsx("div",{ref:Ce,className:ue("db-scatterchart","db-scatterchart--empty",we),...ce,children:m.jsx("div",{className:"db-scatterchart__empty-state",children:m.jsx("p",{children:"No data available"})})});const jt={data:e,width:l,height:c,color:D,xScale:g,yScale:x,svgRef:q};return m.jsx(Kt.Provider,{value:jt,children:m.jsxs("div",{ref:Ce,className:ue("db-scatterchart",`db-scatterchart--${p}`,`db-scatterchart--${D}`,{"db-scatterchart--bubbles":b,"db-scatterchart--trend":$,"db-scatterchart--optimized":Vt,"db-scatterchart--keyboard":Se},qt,we),"data-theme":de.colorScheme!=="auto"?de.colorScheme:void 0,style:{...de.cssVars,...ce.style||{}},role:"img","aria-label":$t||`Scatter plot with ${e.length} data points`,...ce,children:[m.jsx("svg",{ref:q,className:"db-scatterchart__svg",width:l,height:c,role:"presentation","aria-hidden":"true"}),i.enabled&&f&&m.jsx(Nt,{visible:Rt,position:Et,tooltipStyle:i.style,placement:i.placement,animationDuration:i.animationDuration,containerDimensions:{width:l,height:c},className:ue("db-scatterchart__tooltip",i.className),role:"tooltip","aria-live":"polite",children:i.component?m.jsx(i.component,{data:f.dataPoint,index:f.index,chartDimensions:{width:l,height:c}}):i.content?m.jsx("div",{dangerouslySetInnerHTML:{__html:i.content(f.dataPoint,f.index)}}):m.jsx(Ot,{label:f.dataPoint.label,value:`X: ${E(f.dataPoint.x)}, Y: ${L(f.dataPoint.y)}`,color:`var(--chart-${D})`,additionalInfo:b&&f.dataPoint.size!==void 0&&m.jsxs("div",{children:["Size: ",f.dataPoint.size]})})}),le&&!i.enabled&&m.jsx("div",{ref:Ft,className:"db-scatterchart__tooltip",role:"tooltip","aria-live":"polite"})]})})});fe.displayName="ScatterChart";fe.__docgenInfo={description:"",methods:[],displayName:"ScatterChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"ScatterChartDataPoint"}],raw:"ScatterChartDataPoint[]"},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},pointRadius:{required:!1,tsType:{name:"number"},description:"Point radius (if not using size-based bubbles)",defaultValue:{value:"4",computed:!1}},enableBubbles:{required:!1,tsType:{name:"boolean"},description:"Use size field for bubble chart",defaultValue:{value:"false",computed:!1}},sizeRange:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Size range for bubbles [min, max]",defaultValue:{value:"[3, 15]",computed:!1}},pointOpacity:{required:!1,tsType:{name:"number"},description:"Point opacity",defaultValue:{value:"0.7",computed:!1}},showTrendLine:{required:!1,tsType:{name:"boolean"},description:"Show trend line",defaultValue:{value:"false",computed:!1}},trendLineColor:{required:!1,tsType:{name:"string"},description:"Trend line color"},xAxis:{required:!1,tsType:{name:"ScatterChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"ScatterChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"ScatterChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"ScatterChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"ScatterChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"ScatterChartResponsive"},description:"Responsive configuration"},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"ScatterChartDataPoint"}],raw:"TooltipConfig<ScatterChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: ScatterChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"ScatterChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const da={title:"Data Display/ScatterChart",component:fe,parameters:{layout:"centered",docs:{description:{component:"A flexible scatter plot component built with D3.js for visualizing correlations between two numerical variables. Supports bubble charts, trend lines, tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y numerical values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the points"},pointRadius:{control:{type:"range",min:2,max:10,step:1},description:"Radius of data points"},pointOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of data points"},enableBubbles:{control:"boolean",description:"Use size field for bubble chart functionality"},showTrendLine:{control:"boolean",description:"Show linear trend line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},M=[{x:10,y:20,label:"Point A"},{x:15,y:32,label:"Point B"},{x:20,y:28,label:"Point C"},{x:25,y:45,label:"Point D"},{x:30,y:38,label:"Point E"},{x:35,y:52,label:"Point F"},{x:40,y:58,label:"Point G"},{x:45,y:65,label:"Point H"},{x:50,y:72,label:"Point I"},{x:55,y:78,label:"Point J"}],be=[{x:20,y:30,size:15,label:"Small Company",category:"Tech"},{x:40,y:60,size:25,label:"Medium Company",category:"Finance"},{x:60,y:45,size:35,label:"Large Company",category:"Healthcare"},{x:80,y:85,size:45,label:"Enterprise",category:"Tech"},{x:30,y:20,size:10,label:"Startup",category:"Finance"},{x:70,y:75,size:40,label:"Corporation",category:"Healthcare"},{x:90,y:55,size:30,label:"Business",category:"Tech"}],Qt=[{x:85,y:92,label:"Model A"},{x:78,y:88,label:"Model B"},{x:92,y:95,label:"Model C"},{x:68,y:75,label:"Model D"},{x:75,y:82,label:"Model E"},{x:88,y:91,label:"Model F"},{x:82,y:87,label:"Model G"},{x:95,y:98,label:"Model H"}],I={args:{data:M,width:600,height:400,variant:"default",color:"primary",title:"Sales vs Marketing Spend",xAxis:{label:"Marketing Spend ($1000)"},yAxis:{label:"Sales Revenue ($1000)"}}},C={args:{data:M,width:500,height:350,title:"Color Variants"},parameters:{docs:{description:{story:"Different color schemes available for the scatter plot."}}}},W={args:{...C.args,color:"primary",title:"Primary Color"}},U={args:{...C.args,color:"secondary",title:"Secondary Color"}},J={args:{...C.args,color:"success",title:"Success Color"}},K={args:{...C.args,color:"warning",title:"Warning Color"}},Q={args:{...C.args,color:"error",title:"Error Color"}},Z={args:{data:M,width:600,height:400,color:"primary",showTrendLine:!0,title:"Scatter Plot with Trend Line",xAxis:{label:"Time (weeks)"},yAxis:{label:"Performance Score"}},parameters:{docs:{description:{story:"Scatter plot with linear trend line showing correlation between variables."}}}},ee={args:{data:be,width:700,height:500,color:"secondary",enableBubbles:!0,sizeRange:[5,25],pointOpacity:.7,title:"Company Performance by Size",xAxis:{label:"Revenue ($M)"},yAxis:{label:"Growth Rate (%)"}},parameters:{docs:{description:{story:"Bubble chart where point size represents a third dimension (company size)."}}}},te={args:{data:Qt,width:600,height:400,color:"success",pointRadius:6,title:"Model Accuracy vs Precision",xAxis:{label:"Accuracy (%)"},yAxis:{label:"Precision (%)"}},parameters:{docs:{description:{story:"Scatter plot showing model performance metrics with larger points."}}}},ae={args:{data:M,width:500,height:300,variant:"minimal",color:"primary",title:"Minimal Scatter Plot"},parameters:{docs:{description:{story:"Minimal variant removes grid lines and simplifies axes for cleaner appearance."}}}},re={args:{data:M,width:600,height:400,variant:"detailed",color:"primary",showTrendLine:!0,title:"Detailed Scatter Plot"},parameters:{docs:{description:{story:"Detailed variant adds more visual elements and enhanced styling."}}}},ne={args:{data:be,width:700,height:450,color:"warning",pointRadius:8,pointOpacity:.8,enableBubbles:!1,title:"Custom Point Styling",xAxis:{label:"X Axis"},yAxis:{label:"Y Axis"}},parameters:{docs:{description:{story:"Scatter plot with custom point radius and opacity settings."}}}},se={args:{data:M,width:500,height:300,color:"error",pointOpacity:.4,pointRadius:6,title:"Low Opacity Points"},parameters:{docs:{description:{story:"Scatter plot with low opacity points, useful for overlapping data."}}}},ie={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},oe={args:{data:be,width:700,height:500,variant:"detailed",color:"primary",enableBubbles:!0,showTrendLine:!0,showTooltip:!0,title:"Interactive Scatter Plot",xAxis:{label:"Performance Metric 1"},yAxis:{label:"Performance Metric 2"}},parameters:{docs:{description:{story:"Full-featured scatter plot with bubbles, trend line, and tooltips. Hover over points to see interactive features."}}}};var $e,qe,Ve;I.parameters={...I.parameters,docs:{...($e=I.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Sales vs Marketing Spend',
    xAxis: {
      label: 'Marketing Spend ($1000)'
    },
    yAxis: {
      label: 'Sales Revenue ($1000)'
    }
  }
}`,...(Ve=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Fe,Re,Ee;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 500,
    height: 350,
    title: 'Color Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the scatter plot.'
      }
    }
  }
}`,...(Ee=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Le,je,Xe;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'primary',
    title: 'Primary Color'
  }
}`,...(Xe=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Xe.source}}};var Ne,Oe,Ye;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'secondary',
    title: 'Secondary Color'
  }
}`,...(Ye=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Ye.source}}};var He,Ge,Be;J.parameters={...J.parameters,docs:{...(He=J.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'success',
    title: 'Success Color'
  }
}`,...(Be=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Be.source}}};var Ie,We,Ue;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'warning',
    title: 'Warning Color'
  }
}`,...(Ue=(We=K.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var Je,Ke,Qe;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'error',
    title: 'Error Color'
  }
}`,...(Qe=(Ke=Q.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,et,tt;Z.parameters={...Z.parameters,docs:{...(Ze=Z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    color: 'primary',
    showTrendLine: true,
    title: 'Scatter Plot with Trend Line',
    xAxis: {
      label: 'Time (weeks)'
    },
    yAxis: {
      label: 'Performance Score'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with linear trend line showing correlation between variables.'
      }
    }
  }
}`,...(tt=(et=Z.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,rt,nt;ee.parameters={...ee.parameters,docs:{...(at=ee.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    data: bubbleData,
    width: 700,
    height: 500,
    color: 'secondary',
    enableBubbles: true,
    sizeRange: [5, 25],
    pointOpacity: 0.7,
    title: 'Company Performance by Size',
    xAxis: {
      label: 'Revenue ($M)'
    },
    yAxis: {
      label: 'Growth Rate (%)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Bubble chart where point size represents a third dimension (company size).'
      }
    }
  }
}`,...(nt=(rt=ee.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var st,it,ot;te.parameters={...te.parameters,docs:{...(st=te.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    data: performanceData,
    width: 600,
    height: 400,
    color: 'success',
    pointRadius: 6,
    title: 'Model Accuracy vs Precision',
    xAxis: {
      label: 'Accuracy (%)'
    },
    yAxis: {
      label: 'Precision (%)'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot showing model performance metrics with larger points.'
      }
    }
  }
}`,...(ot=(it=te.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var lt,ct,dt;ae.parameters={...ae.parameters,docs:{...(lt=ae.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 500,
    height: 300,
    variant: 'minimal',
    color: 'primary',
    title: 'Minimal Scatter Plot'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal variant removes grid lines and simplifies axes for cleaner appearance.'
      }
    }
  }
}`,...(dt=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var pt,mt,ut;re.parameters={...re.parameters,docs:{...(pt=re.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 600,
    height: 400,
    variant: 'detailed',
    color: 'primary',
    showTrendLine: true,
    title: 'Detailed Scatter Plot'
  },
  parameters: {
    docs: {
      description: {
        story: 'Detailed variant adds more visual elements and enhanced styling.'
      }
    }
  }
}`,...(ut=(mt=re.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var yt,ht,ft;ne.parameters={...ne.parameters,docs:{...(yt=ne.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    data: bubbleData,
    width: 700,
    height: 450,
    color: 'warning',
    pointRadius: 8,
    pointOpacity: 0.8,
    enableBubbles: false,
    title: 'Custom Point Styling',
    xAxis: {
      label: 'X Axis'
    },
    yAxis: {
      label: 'Y Axis'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with custom point radius and opacity settings.'
      }
    }
  }
}`,...(ft=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,gt,xt;se.parameters={...se.parameters,docs:{...(bt=se.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    data: correlationData,
    width: 500,
    height: 300,
    color: 'error',
    pointOpacity: 0.4,
    pointRadius: 6,
    title: 'Low Opacity Points'
  },
  parameters: {
    docs: {
      description: {
        story: 'Scatter plot with low opacity points, useful for overlapping data.'
      }
    }
  }
}`,...(xt=(gt=se.parameters)==null?void 0:gt.docs)==null?void 0:xt.source}}};var vt,St,wt;ie.parameters={...ie.parameters,docs:{...(vt=ie.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(St=ie.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var Ct,_t,Dt;oe.parameters={...oe.parameters,docs:{...(Ct=oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    data: bubbleData,
    width: 700,
    height: 500,
    variant: 'detailed',
    color: 'primary',
    enableBubbles: true,
    showTrendLine: true,
    showTooltip: true,
    title: 'Interactive Scatter Plot',
    xAxis: {
      label: 'Performance Metric 1'
    },
    yAxis: {
      label: 'Performance Metric 2'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured scatter plot with bubbles, trend line, and tooltips. Hover over points to see interactive features.'
      }
    }
  }
}`,...(Dt=(_t=oe.parameters)==null?void 0:_t.docs)==null?void 0:Dt.source}}};const pa=["Default","ColorVariants","Primary","Secondary","Success","Warning","Error","WithTrendLine","BubbleChart","HighPerformanceData","Minimal","Detailed","CustomStyling","LowOpacity","NoData","InteractiveFeatures"];export{ee as BubbleChart,C as ColorVariants,ne as CustomStyling,I as Default,re as Detailed,Q as Error,te as HighPerformanceData,oe as InteractiveFeatures,se as LowOpacity,ae as Minimal,ie as NoData,W as Primary,U as Secondary,J as Success,K as Warning,Z as WithTrendLine,pa as __namedExportsOrder,da as default};
