import{j as f,a as ze}from"./jsx-runtime-D2eXtamC.js";import{r as w}from"./index-SE77F2UD.js";import{c as he}from"./clsx-B-dksMZM.js";import{i as Ot,f as ye,s as O,C as Yt,D as Ht}from"./ChartTooltip-Ckz6r7Tp.js";import{e as fe,l as Bt}from"./line-BLb5Qx5M.js";import{t as Gt,c as It,i as G,d as Wt,l as Ve,a as ke,b as Te}from"./linear-Bfi9Vb7F.js";import{s as I}from"./sum-CB6J5KXz.js";import"./_commonjsHelpers-DM6icglO.js";import"./path-DyVhHtw_.js";function Me(e){return function(l){return l<0?-Math.pow(-l,e):Math.pow(l,e)}}function jt(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Ut(e){return e<0?-e*e:e*e}function Jt(e){var l=e(G,G),c=1;function u(){return c===1?e(G,G):c===.5?e(jt,Ut):e(Me(c),Me(1/c))}return l.exponent=function(D){return arguments.length?(c=+D,u()):c},Wt(l)}function Pt(){var e=Jt(Gt());return e.copy=function(){return It(e,Pt()).exponent(e.exponent())},Ot.apply(e,arguments),e}function Kt(){return Pt.apply(null,arguments).exponent(.5)}const Qt=w.createContext(null),le=w.forwardRef(({data:e=[],width:l=600,height:c=400,variant:u="default",color:D="primary",title:Y,pointRadius:z=4,enableBubbles:b=!1,sizeRange:ge=[3,15],pointOpacity:H=.7,showTrendLine:M=!1,trendLineColor:xe,xAxis:zt,yAxis:Vt,grid:kt,theme:Tt,animation:Mt,responsive:ea,tooltip:r,showTooltip:ce=!0,formatTooltip:ve,keyboard:Se=!1,ariaLabel:$t,themeClass:qt,optimized:Ft=!1,hoverDebounce:ta=0,className:we,...de},_e)=>{const $=w.useRef(null),Lt=w.useRef(null),[Rt,q]=w.useState(!1),[Et,Ce]=w.useState({x:0,y:0}),[y,F]=w.useState(null),p={show:!0,variant:u==="minimal"?"minimal":"default",tickCount:u==="detailed"?8:6,...zt},m={show:!0,variant:u==="minimal"?"minimal":"default",tickCount:u==="detailed"?8:6,...Vt},V={show:u!=="minimal",strokeDasharray:u==="detailed"?"1,3":"2,2",opacity:u==="detailed"?.2:.3,...kt},ue={colorScheme:"auto",cssVars:{"--chart-point-radius":`${z}px`,"--chart-point-opacity":H.toString()},...Tt},B={enabled:u==="detailed",duration:u==="detailed"?600:400,...Mt},i={enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:ce,component:r==null?void 0:r.component,content:(r==null?void 0:r.content)||ve,style:r==null?void 0:r.style,placement:(r==null?void 0:r.placement)||{placement:"auto",offset:{x:0,y:-10}},className:r==null?void 0:r.className,animationDuration:(r==null?void 0:r.animationDuration)||200,showDelay:(r==null?void 0:r.showDelay)||0,hideDelay:(r==null?void 0:r.hideDelay)||0,...r},d={top:Y?40:20,right:20,bottom:p.label?60:40,left:m.label?80:60},L=l-d.left-d.right,C=c-d.top-d.bottom,{xScale:g,yScale:x,sizeScale:A,trendLineData:pe}=w.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,sizeScale:null,trendLineData:null};const o=p.domain||fe(e,n=>n.x),h=Ve().domain(o).nice().range([0,L]),P=m.domain||fe(e,n=>n.y),k=Ve().domain(P).nice().range([C,0]);let t=null;if(b&&e.some(n=>n.size!==void 0)){const n=fe(e,s=>s.size||1);t=Kt().domain(n).range(ge)}let a=null;if(M){const n=e.length,s=I(e,S=>S.x),v=I(e,S=>S.y),N=I(e,S=>S.x*S.y),X=I(e,S=>S.x*S.x),me=(n*N-s*v)/(n*X-s*s),De=(v-me*s)/n,Ae=o[0],Pe=o[1];a=[{x:Ae,y:me*Ae+De},{x:Pe,y:me*Pe+De}]}return{xScale:h,yScale:k,sizeScale:t,trendLineData:a}},[e,L,C,b,ge,M,p.domain,m.domain]),R=p.tickFormatter||ye(".2f"),E=m.tickFormatter||ye(".2f"),Nt=ve||((o,h)=>{const P=R(o.x),k=E(o.y);let t='<div class="db-scatterchart__tooltip-content">';return o.label&&(t+=`<div class="db-scatterchart__tooltip-label">${o.label}</div>`),o.category&&(t+=`<div class="db-scatterchart__tooltip-category">${o.category}</div>`),t+='<div class="db-scatterchart__tooltip-coordinates">',t+=`<span class="db-scatterchart__tooltip-x">X: ${P}</span>`,t+=`<span class="db-scatterchart__tooltip-y">Y: ${k}</span>`,t+="</div>",b&&o.size&&(t+=`<div class="db-scatterchart__tooltip-size">Size: ${ye(".2f")(o.size)}</div>`),t+="</div>",t});if(w.useEffect(()=>{if(!$.current||!e.length||!g||!x)return;const o=O($.current);o.selectAll("*").remove();const h=o.append("g").attr("transform",`translate(${d.left},${d.top})`);if(V.show&&(h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--x").attr("transform",`translate(0,${C})`).call(ke(g).tickSize(-C).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",V.strokeDasharray||"2,2").style("opacity",V.opacity||.3),h.append("g").attr("class","db-scatterchart__grid db-scatterchart__grid--y").call(Te(x).tickSize(-L).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",V.strokeDasharray||"2,2").style("opacity",V.opacity||.3)),p.show){const t=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--x db-scatterchart__axis--${p.variant}`).attr("transform",`translate(0,${C})`),a=ke(g);p.tickCount&&a.ticks(p.tickCount),a.tickFormat((n,s)=>R(n)),t.call(a)}if(m.show){const t=h.append("g").attr("class",`db-scatterchart__axis db-scatterchart__axis--y db-scatterchart__axis--${m.variant}`),a=Te(x);m.tickCount&&a.ticks(m.tickCount),a.tickFormat((n,s)=>E(n)),t.call(a)}if(M&&pe){const t=Bt().x(a=>g(a.x)||0).y(a=>x(a.y)||0);h.append("path").datum(pe).attr("class","db-scatterchart__trend-line").attr("d",t).style("stroke",xe||"#8396A5").style("stroke-width",2).style("stroke-dasharray","4,4").style("fill","none").style("opacity",.8)}const P=h.selectAll(".db-scatterchart__point").data(e).enter().append("circle").attr("class",`db-scatterchart__point db-scatterchart__point--${D}`).attr("cx",t=>g(t.x)||0).attr("cy",t=>x(t.y)||0).attr("r",t=>b&&A&&t.size!==void 0?A(t.size):z).style("opacity",H);if(B.enabled&&P.style("opacity",0).transition().delay((t,a)=>a*20).duration(B.duration||400).style("opacity",H),Se&&P.attr("tabindex",0).attr("role","button").attr("aria-label",(t,a)=>{const n=R(t.x),s=E(t.y);return`Data point ${a+1}: X=${n}, Y=${s}${t.label?`, ${t.label}`:""}`}).on("focus",function(t,a){const n=e.indexOf(a);if(i.enabled){const s=g(a.x)||0,v=x(a.y)||0,N=s+d.left,X=v+d.top;Ce({x:N,y:X}),F({dataPoint:a,index:n}),q(!0)}O(this).style("stroke","#2272B4").style("stroke-width",2)}).on("blur",function(){i.enabled&&(q(!1),F(null)),O(this).style("stroke","none")}),i.enabled){let t=null,a=null;P.on("mouseenter",function(n,s){const v=e.indexOf(s);a&&(clearTimeout(a),a=null),i.showDelay&&i.showDelay>0?t=window.setTimeout(()=>{k(n,s,v)},i.showDelay):k(n,s,v),O(this).style("stroke","#FFFFFF").style("stroke-width",2).transition().duration(150).attr("r",b&&A&&s.size!==void 0?(A(s.size)||0)+2:z+2)}).on("mouseleave",function(n,s){t&&(clearTimeout(t),t=null),i.hideDelay&&i.hideDelay>0?a=window.setTimeout(()=>{q(!1),F(null)},i.hideDelay):(q(!1),F(null)),O(this).style("stroke","none").transition().duration(150).attr("r",b&&A&&s.size!==void 0&&A(s.size)||z)})}function k(t,a,n){if(!$.current)return;const s=g(a.x)||0,v=x(a.y)||0,N=s+d.left,X=v+d.top;Ce({x:N,y:X}),F({dataPoint:a,index:n}),q(!0)}p.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--x").attr("transform",`translate(${L/2}, ${C+d.bottom-10})`).style("text-anchor","middle").text(p.label),m.label&&h.append("text").attr("class","db-scatterchart__axis-label db-scatterchart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-d.left+20).attr("x",0-C/2).style("text-anchor","middle").text(m.label),Y&&o.append("text").attr("class","db-scatterchart__title").attr("x",l/2).attr("y",25).style("text-anchor","middle").text(Y)},[e,l,c,g,x,A,pe,V.show,M,b,z,H,ce,D,p.label,m.label,Y,d,L,C,R,E,Nt,B.enabled,B.duration,xe]),!e.length)return f("div",{ref:_e,className:he("db-scatterchart","db-scatterchart--empty",we),...de,children:f("div",{className:"db-scatterchart__empty-state",children:f("p",{children:"No data available"})})});const Xt={data:e,width:l,height:c,color:D,xScale:g,yScale:x,svgRef:$};return f(Qt.Provider,{value:Xt,children:ze("div",{ref:_e,className:he("db-scatterchart",`db-scatterchart--${u}`,`db-scatterchart--${D}`,{"db-scatterchart--bubbles":b,"db-scatterchart--trend":M,"db-scatterchart--optimized":Ft,"db-scatterchart--keyboard":Se},qt,we),"data-theme":ue.colorScheme!=="auto"?ue.colorScheme:void 0,style:{...ue.cssVars,...de.style||{}},role:"img","aria-label":$t||`Scatter plot with ${e.length} data points`,...de,children:[f("svg",{ref:$,className:"db-scatterchart__svg",width:l,height:c,role:"presentation","aria-hidden":"true"}),i.enabled&&y&&f(Yt,{visible:Rt,position:Et,tooltipStyle:i.style,placement:i.placement,animationDuration:i.animationDuration,containerDimensions:{width:l,height:c},className:he("db-scatterchart__tooltip",i.className),role:"tooltip","aria-live":"polite",children:i.component?f(i.component,{data:y.dataPoint,index:y.index,chartDimensions:{width:l,height:c}}):i.content?f("div",{dangerouslySetInnerHTML:{__html:i.content(y.dataPoint,y.index)}}):f(Ht,{label:y.dataPoint.label,value:`X: ${R(y.dataPoint.x)}, Y: ${E(y.dataPoint.y)}`,color:`var(--chart-${D})`,additionalInfo:b&&y.dataPoint.size!==void 0&&ze("div",{children:["Size: ",y.dataPoint.size]})})}),ce&&!i.enabled&&f("div",{ref:Lt,className:"db-scatterchart__tooltip",role:"tooltip","aria-live":"polite"})]})})});le.displayName="ScatterChart";try{le.displayName="ScatterChart",le.__docgenInfo={description:"",displayName:"ScatterChart",props:{data:{defaultValue:{value:"[]"},description:"Chart data points",name:"data",required:!1,type:{name:"ScatterChartDataPoint[]"}},width:{defaultValue:{value:"600"},description:"Chart width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Chart height",name:"height",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Chart variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"detailed"'},{value:'"minimal"'}]}},color:{defaultValue:{value:"primary"},description:"Color scheme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},pointRadius:{defaultValue:{value:"4"},description:"Point radius (if not using size-based bubbles)",name:"pointRadius",required:!1,type:{name:"number"}},enableBubbles:{defaultValue:{value:"false"},description:"Use size field for bubble chart",name:"enableBubbles",required:!1,type:{name:"boolean"}},sizeRange:{defaultValue:{value:"[3, 15]"},description:"Size range for bubbles [min, max]",name:"sizeRange",required:!1,type:{name:"[number, number]"}},pointOpacity:{defaultValue:{value:"0.7"},description:"Point opacity",name:"pointOpacity",required:!1,type:{name:"number"}},showTrendLine:{defaultValue:{value:"false"},description:"Show trend line",name:"showTrendLine",required:!1,type:{name:"boolean"}},trendLineColor:{defaultValue:null,description:"Trend line color",name:"trendLineColor",required:!1,type:{name:"string"}},xAxis:{defaultValue:null,description:"X-axis configuration",name:"xAxis",required:!1,type:{name:"ScatterChartAxis"}},yAxis:{defaultValue:null,description:"Y-axis configuration",name:"yAxis",required:!1,type:{name:"ScatterChartAxis"}},grid:{defaultValue:null,description:"Grid configuration",name:"grid",required:!1,type:{name:"ScatterChartGrid"}},theme:{defaultValue:null,description:"Theme configuration",name:"theme",required:!1,type:{name:"ScatterChartTheme"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"ScatterChartAnimation"}},responsive:{defaultValue:null,description:"Responsive configuration",name:"responsive",required:!1,type:{name:"ScatterChartResponsive"}},tooltip:{defaultValue:null,description:"Enhanced tooltip configuration",name:"tooltip",required:!1,type:{name:"TooltipConfig<ScatterChartDataPoint>"}},showTooltip:{defaultValue:{value:"true"},description:"@deprecated Use tooltip.enabled instead",name:"showTooltip",required:!1,type:{name:"boolean"}},formatTooltip:{defaultValue:null,description:"@deprecated Use tooltip.content instead",name:"formatTooltip",required:!1,type:{name:"((_dataPoint: ScatterChartDataPoint, _index?: number) => string)"}},keyboard:{defaultValue:{value:"false"},description:"Enable keyboard navigation",name:"keyboard",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"ARIA label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},themeClass:{defaultValue:null,description:"Custom CSS class for theming",name:"themeClass",required:!1,type:{name:"string"}},optimized:{defaultValue:{value:"false"},description:"Enable performance optimizations",name:"optimized",required:!1,type:{name:"boolean"}},hoverDebounce:{defaultValue:{value:"0"},description:"Debounce hover events (ms)",name:"hoverDebounce",required:!1,type:{name:"number"}}}}}catch{}const ua={title:"Data Display/ScatterChart",component:le,parameters:{layout:"centered",docs:{description:{component:"A flexible scatter plot component built with D3.js for visualizing correlations between two numerical variables. Supports bubble charts, trend lines, tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y numerical values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the points"},pointRadius:{control:{type:"range",min:2,max:10,step:1},description:"Radius of data points"},pointOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of data points"},enableBubbles:{control:"boolean",description:"Use size field for bubble chart functionality"},showTrendLine:{control:"boolean",description:"Show linear trend line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},T=[{x:10,y:20,label:"Point A"},{x:15,y:32,label:"Point B"},{x:20,y:28,label:"Point C"},{x:25,y:45,label:"Point D"},{x:30,y:38,label:"Point E"},{x:35,y:52,label:"Point F"},{x:40,y:58,label:"Point G"},{x:45,y:65,label:"Point H"},{x:50,y:72,label:"Point I"},{x:55,y:78,label:"Point J"}],be=[{x:20,y:30,size:15,label:"Small Company",category:"Tech"},{x:40,y:60,size:25,label:"Medium Company",category:"Finance"},{x:60,y:45,size:35,label:"Large Company",category:"Healthcare"},{x:80,y:85,size:45,label:"Enterprise",category:"Tech"},{x:30,y:20,size:10,label:"Startup",category:"Finance"},{x:70,y:75,size:40,label:"Corporation",category:"Healthcare"},{x:90,y:55,size:30,label:"Business",category:"Tech"}],Zt=[{x:85,y:92,label:"Model A"},{x:78,y:88,label:"Model B"},{x:92,y:95,label:"Model C"},{x:68,y:75,label:"Model D"},{x:75,y:82,label:"Model E"},{x:88,y:91,label:"Model F"},{x:82,y:87,label:"Model G"},{x:95,y:98,label:"Model H"}],W={args:{data:T,width:600,height:400,variant:"default",color:"primary",title:"Sales vs Marketing Spend",xAxis:{label:"Marketing Spend ($1000)"},yAxis:{label:"Sales Revenue ($1000)"}}},_={args:{data:T,width:500,height:350,title:"Color Variants"},parameters:{docs:{description:{story:"Different color schemes available for the scatter plot."}}}},j={args:{..._.args,color:"primary",title:"Primary Color"}},U={args:{..._.args,color:"secondary",title:"Secondary Color"}},J={args:{..._.args,color:"success",title:"Success Color"}},K={args:{..._.args,color:"warning",title:"Warning Color"}},Q={args:{..._.args,color:"error",title:"Error Color"}},Z={args:{data:T,width:600,height:400,color:"primary",showTrendLine:!0,title:"Scatter Plot with Trend Line",xAxis:{label:"Time (weeks)"},yAxis:{label:"Performance Score"}},parameters:{docs:{description:{story:"Scatter plot with linear trend line showing correlation between variables."}}}},ee={args:{data:be,width:700,height:500,color:"secondary",enableBubbles:!0,sizeRange:[5,25],pointOpacity:.7,title:"Company Performance by Size",xAxis:{label:"Revenue ($M)"},yAxis:{label:"Growth Rate (%)"}},parameters:{docs:{description:{story:"Bubble chart where point size represents a third dimension (company size)."}}}},te={args:{data:Zt,width:600,height:400,color:"success",pointRadius:6,title:"Model Accuracy vs Precision",xAxis:{label:"Accuracy (%)"},yAxis:{label:"Precision (%)"}},parameters:{docs:{description:{story:"Scatter plot showing model performance metrics with larger points."}}}},ae={args:{data:T,width:500,height:300,variant:"minimal",color:"primary",title:"Minimal Scatter Plot"},parameters:{docs:{description:{story:"Minimal variant removes grid lines and simplifies axes for cleaner appearance."}}}},re={args:{data:T,width:600,height:400,variant:"detailed",color:"primary",showTrendLine:!0,title:"Detailed Scatter Plot"},parameters:{docs:{description:{story:"Detailed variant adds more visual elements and enhanced styling."}}}},ne={args:{data:be,width:700,height:450,color:"warning",pointRadius:8,pointOpacity:.8,enableBubbles:!1,title:"Custom Point Styling",xAxis:{label:"X Axis"},yAxis:{label:"Y Axis"}},parameters:{docs:{description:{story:"Scatter plot with custom point radius and opacity settings."}}}},se={args:{data:T,width:500,height:300,color:"error",pointOpacity:.4,pointRadius:6,title:"Low Opacity Points"},parameters:{docs:{description:{story:"Scatter plot with low opacity points, useful for overlapping data."}}}},ie={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},oe={args:{data:be,width:700,height:500,variant:"detailed",color:"primary",enableBubbles:!0,showTrendLine:!0,showTooltip:!0,title:"Interactive Scatter Plot",xAxis:{label:"Performance Metric 1"},yAxis:{label:"Performance Metric 2"}},parameters:{docs:{description:{story:"Full-featured scatter plot with bubbles, trend line, and tooltips. Hover over points to see interactive features."}}}};var $e,qe,Fe;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Fe=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var Le,Re,Ee;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Ne,Xe,Oe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'primary',
    title: 'Primary Color'
  }
}`,...(Oe=(Xe=j.parameters)==null?void 0:Xe.docs)==null?void 0:Oe.source}}};var Ye,He,Be;U.parameters={...U.parameters,docs:{...(Ye=U.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'secondary',
    title: 'Secondary Color'
  }
}`,...(Be=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Be.source}}};var Ge,Ie,We;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'success',
    title: 'Success Color'
  }
}`,...(We=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:We.source}}};var je,Ue,Je;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'warning',
    title: 'Warning Color'
  }
}`,...(Je=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Ke,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    ...ColorVariants.args,
    color: 'error',
    title: 'Error Color'
  }
}`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,at;Z.parameters={...Z.parameters,docs:{...(et=Z.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Z.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,nt,st;ee.parameters={...ee.parameters,docs:{...(rt=ee.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(nt=ee.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var it,ot,lt;te.parameters={...te.parameters,docs:{...(it=te.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ot=te.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var ct,dt,ut;ae.parameters={...ae.parameters,docs:{...(ct=ae.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ut=(dt=ae.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var pt,mt,ht;re.parameters={...re.parameters,docs:{...(pt=re.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ht=(mt=re.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var yt,ft,bt;ne.parameters={...ne.parameters,docs:{...(yt=ne.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(bt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var gt,xt,vt;se.parameters={...se.parameters,docs:{...(gt=se.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(xt=se.parameters)==null?void 0:xt.docs)==null?void 0:vt.source}}};var St,wt,_t;ie.parameters={...ie.parameters,docs:{...(St=ie.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(_t=(wt=ie.parameters)==null?void 0:wt.docs)==null?void 0:_t.source}}};var Ct,Dt,At;oe.parameters={...oe.parameters,docs:{...(Ct=oe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(At=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:At.source}}};const pa=["Default","ColorVariants","Primary","Secondary","Success","Warning","Error","WithTrendLine","BubbleChart","HighPerformanceData","Minimal","Detailed","CustomStyling","LowOpacity","NoData","InteractiveFeatures"];export{ee as BubbleChart,_ as ColorVariants,ne as CustomStyling,W as Default,re as Detailed,Q as Error,te as HighPerformanceData,oe as InteractiveFeatures,se as LowOpacity,ae as Minimal,ie as NoData,j as Primary,U as Secondary,J as Success,K as Warning,Z as WithTrendLine,pa as __namedExportsOrder,ua as default};
