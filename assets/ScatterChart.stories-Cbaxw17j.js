import{j as f}from"./jsx-runtime-LnmZrwv1.js";import{r as b}from"./index-CWnxZbJP.js";import{c as he}from"./clsx-B-dksMZM.js";import{i as Xt,f as fe,s as O,C as Nt,D as Ot}from"./ChartTooltip-DGQGfrCB.js";import{e as be,l as Yt}from"./line-D7-gsV7M.js";import{t as Ht,c as Gt,i as G,d as It,l as Pe,a as ze,b as ke}from"./linear-DS12kqSE.js";import{s as I}from"./sum-CB6J5KXz.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./path-DyVhHtw_.js";function Me(e){return function(d){return d<0?-Math.pow(-d,e):Math.pow(d,e)}}function Bt(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Wt(e){return e<0?-e*e:e*e}function Ut(e){var d=e(G,G),m=1;function y(){return m===1?e(G,G):m===.5?e(Bt,Wt):e(Me(m),Me(1/m))}return d.exponent=function(A){return arguments.length?(m=+A,y()):m},It(d)}function Tt(){var e=Ut(Ht());return e.copy=function(){return Gt(e,Tt()).exponent(e.exponent())},Xt.apply(e,arguments),e}function Jt(){return Tt.apply(null,arguments).exponent(.5)}const Kt=b.createContext(null),ge=b.forwardRef(({data:e=[],width:d=600,height:m=400,variant:y="default",color:A="primary",title:V,pointRadius:k=4,enableBubbles:g=!1,sizeRange:ve=[3,15],pointOpacity:Y=.7,showTrendLine:F=!1,trendLineColor:Se,xAxis:At,yAxis:Pt,grid:zt,theme:kt,animation:Mt,responsive:Zt,tooltip:a,showTooltip:le=!0,formatTooltip:ce,keyboard:de=!1,ariaLabel:$t,themeClass:qt,optimized:Vt=!1,hoverDebounce:ea=0,className:we,...pe},Ce)=>{const R=b.useRef(null),Ft=b.useRef(null),[Rt,E]=b.useState(!1),[Et,De]=b.useState({x:0,y:0}),[x,L]=b.useState(null),l={show:!0,variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...At},c={show:!0,variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...Pt},_={show:y!=="minimal",strokeDasharray:y==="detailed"?"1,3":"2,2",opacity:y==="detailed"?.2:.3,...zt},me={colorScheme:"auto",cssVars:{"--chart-point-radius":`${k}px`,"--chart-point-opacity":Y.toString()},...kt},H={enabled:y==="detailed",duration:y==="detailed"?600:400,...Mt},s={enabled:(a==null?void 0:a.enabled)!==void 0?a.enabled:le,component:a==null?void 0:a.component,content:(a==null?void 0:a.content)||ce,style:a==null?void 0:a.style,placement:(a==null?void 0:a.placement)||{placement:"auto",offset:{x:0,y:-10}},className:a==null?void 0:a.className,animationDuration:(a==null?void 0:a.animationDuration)||200,showDelay:(a==null?void 0:a.showDelay)||0,hideDelay:(a==null?void 0:a.hideDelay)||0,...a},u=b.useMemo(()=>({top:V?40:20,right:20,bottom:l.label?60:40,left:c.label?80:60}),[V,l.label,c.label]),j=d-u.left-u.right,T=m-u.top-u.bottom,{xScale:v,yScale:S,sizeScale:P,trendLineData:ue}=b.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,sizeScale:null,trendLineData:null};const o=l.domain||be(e,n=>n.x),h=Pe().domain(o).nice().range([0,j]),z=c.domain||be(e,n=>n.y),p=Pe().domain(z).nice().range([T,0]);let r=null;if(g&&e.some(n=>n.size!==void 0)){const n=be(e,i=>i.size||1);r=Jt().domain(n).range(ve)}let t=null;if(F){const n=e.length,i=I(e,C=>C.x),w=I(e,C=>C.y),X=I(e,C=>C.x*C.y),N=I(e,C=>C.x*C.x),ye=(n*X-i*w)/(n*N-i*i),_e=(w-ye*i)/n,Te=o[0],Ae=o[1];t=[{x:Te,y:ye*Te+_e},{x:Ae,y:ye*Ae+_e}]}return{xScale:h,yScale:p,sizeScale:r,trendLineData:t}},[e,j,T,g,ve,F,l.domain,c.domain]),M=l.tickFormatter||fe(".2f"),$=c.tickFormatter||fe(".2f"),Lt=b.useMemo(()=>ce||(o=>{const h=M(o.x),z=$(o.y);let p='<div class="db-scatterchart__tooltip-content">';return o.label&&(p+=`<div class="db-scatterchart__tooltip-label">${o.label}</div>`),o.category&&(p+=`<div class="db-scatterchart__tooltip-category">${o.category}</div>`),p+='<div class="db-scatterchart__tooltip-coordinates">',p+=`<span class="db-scatterchart__tooltip-x">X: ${h}</span>`,p+=`<span class="db-scatterchart__tooltip-y">Y: ${z}</span>`,p+="</div>",g&&o.size&&(p+=`<div class="db-scatterchart__tooltip-size">Size: ${fe(".2f")(o.size)}</div>`),p+="</div>",p}),[ce,M,$,g]);if(b.useEffect(()=>{if(!R.current||!e.length||!v||!S)return;const o=O(R.current);o.selectAll("*").remove();const h=o.append("g").attr("transform",`translate(${u.left},${u.top})`);if(_.show&&(h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--x").attr("transform",`translate(0,${T})`).call(ze(v).tickSize(-T).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",_.strokeDasharray||"2,2").style("opacity",_.opacity||.3),h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--y").call(ke(S).tickSize(-j).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",_.strokeDasharray||"2,2").style("opacity",_.opacity||.3)),l.show){const r=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--x db-scatterchart__axis--${l.variant}`).attr("transform",`translate(0,${T})`),t=ze(v);l.tickCount&&t.ticks(l.tickCount),t.tickFormat(n=>M(n)),r.call(t)}if(c.show){const r=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--y db-scatterchart__axis--${c.variant}`),t=ke(S);c.tickCount&&t.ticks(c.tickCount),t.tickFormat(n=>$(n)),r.call(t)}if(F&&ue){const r=Yt().x(t=>v(t.x)||0).y(t=>S(t.y)||0);h.append("path").datum(ue).attr("class","db-scatterchart__trend-line").attr("d",r).style("stroke",Se||"#8396A5").style("stroke-width",2).style("stroke-dasharray","4,4").style("fill","none").style("opacity",.8)}const z=h.selectAll(".db-scatterchart__point").data(e).enter().append("circle").attr("class",`db-scatterchart__point db-scatterchart__point--${A}`).attr("cx",r=>v(r.x)||0).attr("cy",r=>S(r.y)||0).attr("r",r=>g&&P&&r.size!==void 0?P(r.size):k).style("opacity",Y);if(H.enabled&&z.style("opacity",0).transition().delay((r,t)=>t*20).duration(H.duration||400).style("opacity",Y),de&&z.attr("tabindex",0).attr("role","button").attr("aria-label",(r,t)=>{const n=M(r.x),i=$(r.y);return`Data point ${t+1}: X=${n}, Y=${i}${r.label?`, ${r.label}`:""}`}).on("focus",function(r,t){const n=e.indexOf(t);if(s.enabled){const i=v(t.x)||0,w=S(t.y)||0,X=i+u.left,N=w+u.top;De({x:X,y:N}),L({dataPoint:t,index:n}),E(!0)}O(this).style("stroke","#2272B4").style("stroke-width",2)}).on("blur",function(){s.enabled&&(E(!1),L(null)),O(this).style("stroke","none")}),s.enabled){let r=null,t=null;z.on("mouseenter",function(n,i){const w=e.indexOf(i);t&&(clearTimeout(t),t=null),s.showDelay&&s.showDelay>0?r=window.setTimeout(()=>{p(n,i,w)},s.showDelay):p(n,i,w),O(this).style("stroke","#FFFFFF").style("stroke-width",2).transition().duration(150).attr("r",g&&P&&i.size!==void 0?(P(i.size)||0)+2:k+2)}).on("mouseleave",function(n,i){r&&(clearTimeout(r),r=null),s.hideDelay&&s.hideDelay>0?t=window.setTimeout(()=>{E(!1),L(null)},s.hideDelay):(E(!1),L(null)),O(this).style("stroke","none").transition().duration(150).attr("r",g&&P&&i.size!==void 0&&P(i.size)||k)})}function p(r,t,n){if(!R.current)return;const i=v(t.x)||0,w=S(t.y)||0,X=i+u.left,N=w+u.top;De({x:X,y:N}),L({dataPoint:t,index:n}),E(!0)}l.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--x").attr("transform",`translate(${j/2}, ${T+u.bottom-10})`).style("text-anchor","middle").text(l.label),c.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-u.left+20).attr("x",0-T/2).style("text-anchor","middle").text(c.label),V&&o.append("text").attr("class","db-scatterchart__title").attr("x",d/2).attr("y",25).style("text-anchor","middle").text(V)},[e,d,m,v,S,P,ue,_.show,F,g,k,Y,le,A,l.label,c.label,V,u,j,T,M,$,Lt,H.enabled,H.duration,Se,de,_.opacity,_.strokeDasharray,l.show,l.tickCount,l.variant,c.show,c.tickCount,c.variant,s.enabled,s.showDelay,s.hideDelay]),!e.length)return f.jsx("div",{ref:Ce,className:he("db-scatterchart","db-scatterchart--empty",we),...pe,children:f.jsx("div",{className:"db-scatterchart__empty-state",children:f.jsx("p",{children:"No data available"})})});const jt={data:e,width:d,height:m,color:A,xScale:v,yScale:S,svgRef:R};return f.jsx(Kt.Provider,{value:jt,children:f.jsxs("div",{ref:Ce,className:he("db-scatterchart",`db-scatterchart--${y}`,`db-scatterchart--${A}`,{"db-scatterchart--bubbles":g,"db-scatterchart--trend":F,"db-scatterchart--optimized":Vt,"db-scatterchart--keyboard":de},qt,we),"data-theme":me.colorScheme!=="auto"?me.colorScheme:void 0,style:{...me.cssVars,...pe.style||{}},role:"img","aria-label":$t||`Scatter plot with ${e.length} data points`,...pe,children:[f.jsx("svg",{ref:R,className:"db-scatterchart__svg",width:d,height:m,role:"presentation","aria-hidden":"true"}),s.enabled&&x&&f.jsx(Nt,{visible:Rt,position:Et,tooltipStyle:s.style,placement:s.placement,animationDuration:s.animationDuration,containerDimensions:{width:d,height:m},className:he("db-scatterchart__tooltip",s.className),role:"tooltip","aria-live":"polite",children:s.component?f.jsx(s.component,{data:x.dataPoint,index:x.index,chartDimensions:{width:d,height:m}}):s.content?f.jsx("div",{dangerouslySetInnerHTML:{__html:s.content(x.dataPoint,x.index)}}):f.jsx(Ot,{label:x.dataPoint.label,value:`X: ${M(x.dataPoint.x)}, Y: ${$(x.dataPoint.y)}`,color:`var(--chart-${A})`,additionalInfo:g&&x.dataPoint.size!==void 0&&f.jsxs("div",{children:["Size: ",x.dataPoint.size]})})}),le&&!s.enabled&&f.jsx("div",{ref:Ft,className:"db-scatterchart__tooltip",role:"tooltip","aria-live":"polite"})]})})});ge.displayName="ScatterChart";ge.__docgenInfo={description:"",methods:[],displayName:"ScatterChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"ScatterChartDataPoint"}],raw:"ScatterChartDataPoint[]"},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},pointRadius:{required:!1,tsType:{name:"number"},description:"Point radius (if not using size-based bubbles)",defaultValue:{value:"4",computed:!1}},enableBubbles:{required:!1,tsType:{name:"boolean"},description:"Use size field for bubble chart",defaultValue:{value:"false",computed:!1}},sizeRange:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Size range for bubbles [min, max]",defaultValue:{value:"[3, 15]",computed:!1}},pointOpacity:{required:!1,tsType:{name:"number"},description:"Point opacity",defaultValue:{value:"0.7",computed:!1}},showTrendLine:{required:!1,tsType:{name:"boolean"},description:"Show trend line",defaultValue:{value:"false",computed:!1}},trendLineColor:{required:!1,tsType:{name:"string"},description:"Trend line color"},xAxis:{required:!1,tsType:{name:"ScatterChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"ScatterChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"ScatterChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"ScatterChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"ScatterChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"ScatterChartResponsive"},description:"Responsive configuration"},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"ScatterChartDataPoint"}],raw:"TooltipConfig<ScatterChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: ScatterChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"ScatterChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const pa={title:"Data Display/ScatterChart",component:ge,parameters:{layout:"centered",docs:{description:{component:"A flexible scatter plot component built with D3.js for visualizing correlations between two numerical variables. Supports bubble charts, trend lines, tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y numerical values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the points"},pointRadius:{control:{type:"range",min:2,max:10,step:1},description:"Radius of data points"},pointOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of data points"},enableBubbles:{control:"boolean",description:"Use size field for bubble chart functionality"},showTrendLine:{control:"boolean",description:"Show linear trend line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},q=[{x:10,y:20,label:"Point A"},{x:15,y:32,label:"Point B"},{x:20,y:28,label:"Point C"},{x:25,y:45,label:"Point D"},{x:30,y:38,label:"Point E"},{x:35,y:52,label:"Point F"},{x:40,y:58,label:"Point G"},{x:45,y:65,label:"Point H"},{x:50,y:72,label:"Point I"},{x:55,y:78,label:"Point J"}],xe=[{x:20,y:30,size:15,label:"Small Company",category:"Tech"},{x:40,y:60,size:25,label:"Medium Company",category:"Finance"},{x:60,y:45,size:35,label:"Large Company",category:"Healthcare"},{x:80,y:85,size:45,label:"Enterprise",category:"Tech"},{x:30,y:20,size:10,label:"Startup",category:"Finance"},{x:70,y:75,size:40,label:"Corporation",category:"Healthcare"},{x:90,y:55,size:30,label:"Business",category:"Tech"}],Qt=[{x:85,y:92,label:"Model A"},{x:78,y:88,label:"Model B"},{x:92,y:95,label:"Model C"},{x:68,y:75,label:"Model D"},{x:75,y:82,label:"Model E"},{x:88,y:91,label:"Model F"},{x:82,y:87,label:"Model G"},{x:95,y:98,label:"Model H"}],B={args:{data:q,width:600,height:400,variant:"default",color:"primary",title:"Sales vs Marketing Spend",xAxis:{label:"Marketing Spend ($1000)"},yAxis:{label:"Sales Revenue ($1000)"}}},D={args:{data:q,width:500,height:350,title:"Color Variants"},parameters:{docs:{description:{story:"Different color schemes available for the scatter plot."}}}},W={args:{...D.args,color:"primary",title:"Primary Color"}},U={args:{...D.args,color:"secondary",title:"Secondary Color"}},J={args:{...D.args,color:"success",title:"Success Color"}},K={args:{...D.args,color:"warning",title:"Warning Color"}},Q={args:{...D.args,color:"error",title:"Error Color"}},Z={args:{data:q,width:600,height:400,color:"primary",showTrendLine:!0,title:"Scatter Plot with Trend Line",xAxis:{label:"Time (weeks)"},yAxis:{label:"Performance Score"}},parameters:{docs:{description:{story:"Scatter plot with linear trend line showing correlation between variables."}}}},ee={args:{data:xe,width:700,height:500,color:"secondary",enableBubbles:!0,sizeRange:[5,25],pointOpacity:.7,title:"Company Performance by Size",xAxis:{label:"Revenue ($M)"},yAxis:{label:"Growth Rate (%)"}},parameters:{docs:{description:{story:"Bubble chart where point size represents a third dimension (company size)."}}}},te={args:{data:Qt,width:600,height:400,color:"success",pointRadius:6,title:"Model Accuracy vs Precision",xAxis:{label:"Accuracy (%)"},yAxis:{label:"Precision (%)"}},parameters:{docs:{description:{story:"Scatter plot showing model performance metrics with larger points."}}}},ae={args:{data:q,width:500,height:300,variant:"minimal",color:"primary",title:"Minimal Scatter Plot"},parameters:{docs:{description:{story:"Minimal variant removes grid lines and simplifies axes for cleaner appearance."}}}},re={args:{data:q,width:600,height:400,variant:"detailed",color:"primary",showTrendLine:!0,title:"Detailed Scatter Plot"},parameters:{docs:{description:{story:"Detailed variant adds more visual elements and enhanced styling."}}}},ne={args:{data:xe,width:700,height:450,color:"warning",pointRadius:8,pointOpacity:.8,enableBubbles:!1,title:"Custom Point Styling",xAxis:{label:"X Axis"},yAxis:{label:"Y Axis"}},parameters:{docs:{description:{story:"Scatter plot with custom point radius and opacity settings."}}}},se={args:{data:q,width:500,height:300,color:"error",pointOpacity:.4,pointRadius:6,title:"Low Opacity Points"},parameters:{docs:{description:{story:"Scatter plot with low opacity points, useful for overlapping data."}}}},ie={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},oe={args:{data:xe,width:700,height:500,variant:"detailed",color:"primary",enableBubbles:!0,showTrendLine:!0,showTooltip:!0,title:"Interactive Scatter Plot",xAxis:{label:"Performance Metric 1"},yAxis:{label:"Performance Metric 2"}},parameters:{docs:{description:{story:"Full-featured scatter plot with bubbles, trend line, and tooltips. Hover over points to see interactive features."}}}};var $e,qe,Ve;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Fe,Re,Ee;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Le,je,Xe;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ye=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:Ye.source}}};var He,Ge,Ie;J.parameters={...J.parameters,docs:{...(He=J.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'success',
    title: 'Success Color'
  }
}`,...(Ie=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Ie.source}}};var Be,We,Ue;K.parameters={...K.parameters,docs:{...(Be=K.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(wt=(St=ie.parameters)==null?void 0:St.docs)==null?void 0:wt.source}}};var Ct,Dt,_t;oe.parameters={...oe.parameters,docs:{...(Ct=oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(_t=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};const ma=["Default","ColorVariants","Primary","Secondary","Success","Warning","Error","WithTrendLine","BubbleChart","HighPerformanceData","Minimal","Detailed","CustomStyling","LowOpacity","NoData","InteractiveFeatures"];export{ee as BubbleChart,D as ColorVariants,ne as CustomStyling,B as Default,re as Detailed,Q as Error,te as HighPerformanceData,oe as InteractiveFeatures,se as LowOpacity,ae as Minimal,ie as NoData,W as Primary,U as Secondary,J as Success,K as Warning,Z as WithTrendLine,ma as __namedExportsOrder,pa as default};
