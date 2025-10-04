import{j as e}from"./jsx-runtime-LnmZrwv1.js";import{r as A}from"./index-CWnxZbJP.js";import{c as Ae}from"./clsx-B-dksMZM.js";import{c as V,a as bt,f as Ve,s as Dt,C as Ct,D as St}from"./ChartTooltip-DGQGfrCB.js";import{t as At,c as kt,s as _t,a as Tt}from"./step-CBO2jjIH.js";import{c as ct,x as jt,y as Pt,l as ke,e as Me}from"./line-D7-gsV7M.js";import{l as $e,a as ze,b as qe}from"./linear-DS12kqSE.js";import{b as Ft}from"./band-BpA5gmKc.js";import{s as Vt,n as Mt,a as $t,m as Ee}from"./stack-C8oqfcn6.js";import{w as zt}from"./path-DyVhHtw_.js";import{p as qt}from"./pointer-Drloq0xg.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ordinal-CHtbxqiZ.js";function Ne(f,v,n){var _=null,M=V(!0),y=null,j=ct,w=null,ee=zt(o);f=typeof f=="function"?f:f===void 0?jt:V(+f),v=typeof v=="function"?v:v===void 0?V(0):V(+v),n=typeof n=="function"?n:n===void 0?Pt:V(+n);function o(r){var D,re,I,te=(r=bt(r)).length,Q,U=!1,i,W=new Array(te),Y=new Array(te);for(y==null&&(w=j(i=ee())),D=0;D<=te;++D){if(!(D<te&&M(Q=r[D],D,r))===U)if(U=!U)re=D,w.areaStart(),w.lineStart();else{for(w.lineEnd(),w.lineStart(),I=D-1;I>=re;--I)w.point(W[I],Y[I]);w.lineEnd(),w.areaEnd()}U&&(W[D]=+f(Q,D,r),Y[D]=+v(Q,D,r),w.point(_?+_(Q,D,r):W[D],n?+n(Q,D,r):Y[D]))}if(i)return w=null,i+""||null}function R(){return ke().defined(M).curve(j).context(y)}return o.x=function(r){return arguments.length?(f=typeof r=="function"?r:V(+r),_=null,o):f},o.x0=function(r){return arguments.length?(f=typeof r=="function"?r:V(+r),o):f},o.x1=function(r){return arguments.length?(_=r==null?null:typeof r=="function"?r:V(+r),o):_},o.y=function(r){return arguments.length?(v=typeof r=="function"?r:V(+r),n=null,o):v},o.y0=function(r){return arguments.length?(v=typeof r=="function"?r:V(+r),o):v},o.y1=function(r){return arguments.length?(n=r==null?null:typeof r=="function"?r:V(+r),o):n},o.lineX0=o.lineY0=function(){return R().x(f).y(v)},o.lineY1=function(){return R().x(f).y(n)},o.lineX1=function(){return R().x(_).y(v)},o.defined=function(r){return arguments.length?(M=typeof r=="function"?r:V(!!r),o):M},o.curve=function(r){return arguments.length?(j=r,y!=null&&(w=j(y)),o):j},o.context=function(r){return arguments.length?(r==null?y=w=null:w=j(y=r),o):y},o}const Et=A.createContext(null),b=A.forwardRef(({data:f=[],series:v,stacked:n=!1,width:_=600,height:M=400,variant:y="default",color:j="primary",title:w,curve:ee="smooth",fillOpacity:o=.3,showStroke:R=!0,xAxis:r,yAxis:D,grid:re,theme:I,animation:te,responsive:Q,showPoints:U=!1,tooltip:i,showTooltip:W=!0,formatTooltip:Y,showPercentageChange:we=!1,calculatePercentageChange:ie,keyboard:be=!1,ariaLabel:dt,themeClass:ut,optimized:pt=!1,hoverDebounce:Nt=0,className:_e,...De},Te)=>{var Pe,Fe;const ne=A.useRef(null),mt=A.useRef(null),[ht,oe]=A.useState(!1),[ft,yt]=A.useState({x:0,y:0}),[$,se]=A.useState(null),m=A.useMemo(()=>v&&v.length>0?v:f&&f.length>0?[{id:"default",name:"Series 1",data:f,color:j}]:[],[v,f,j]),C={show:!0,position:"bottom",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...r},S={show:!0,position:"left",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...D},L={show:y!=="minimal",strokeDasharray:y==="detailed"?"1,3":"2,2",opacity:y==="detailed"?.2:.3,...re},Ce={colorScheme:"auto",cssVars:{"--chart-area-opacity":(o==null?void 0:o.toString())||"0.3","--chart-stroke-width":y==="detailed"?"3px":"2px","--chart-point-size":y==="detailed"?"6px":"4px"},...I},x=A.useMemo(()=>({enabled:(i==null?void 0:i.enabled)!==void 0?i.enabled:W,component:i==null?void 0:i.component,content:(i==null?void 0:i.content)||Y,style:i==null?void 0:i.style,placement:(i==null?void 0:i.placement)||{placement:"auto",offset:{x:0,y:-10}},className:i==null?void 0:i.className,animationDuration:(i==null?void 0:i.animationDuration)||200,showDelay:(i==null?void 0:i.showDelay)||0,hideDelay:(i==null?void 0:i.hideDelay)||0,...i}),[i,W,Y]),z=A.useMemo(()=>({top:w?40:20,right:20,bottom:C.label?60:40,left:S.label?80:60}),[w,C.label,S.label]),O=_-z.left-z.right,q=M-z.top-z.bottom,B=A.useMemo(()=>{if(!n||m.length===0)return null;const s=Array.from(new Set(m.flatMap(a=>a.data.map(t=>t.x)))).sort((a,t)=>a instanceof Date&&t instanceof Date?a.getTime()-t.getTime():typeof a=="number"&&typeof t=="number"?a-t:String(a).localeCompare(String(t))).map(a=>{const t={x:a};return m.forEach((l,h)=>{const u=l.data.find(T=>T.x===a);t[l.id]=u?u.y:0}),t});return Vt().keys(m.map(a=>a.id)).order(Mt).offset($t)(s)},[n,m]),{xScale:X,yScale:G,areaGenerators:Se,lineGenerators:je}=A.useMemo(()=>{var g;if(m.length===0)return{xScale:null,yScale:null,areaGenerators:[],lineGenerators:[]};const c=m.flatMap(d=>d.data),s=(g=c[0])==null?void 0:g.x,E=s instanceof Date,a=typeof s=="number";let t;if(E)t=At().domain(Me(c,d=>d.x)).range([0,O]);else if(a)t=$e().domain(Me(c,d=>d.x)).range([0,O]);else{const d=Array.from(new Set(c.map(P=>P.x)));t=Ft().domain(d).range([0,O]).padding(.1)}let l;n&&B?l=Ee(B[B.length-1],d=>d[1]):l=Ee(c,d=>d.y);const h=$e().domain([0,l]).nice().range([q,0]),u=ee==="smooth"?kt:ee==="step"?_t:ct,T=m.map((d,P)=>n&&B?Ne().x(p=>t(p.data.x)||0).y0(p=>h(p[0])||0).y1(p=>h(p[1])||0).curve(u):Ne().x(p=>t(p.x)||0).y0(q).y1(p=>h(p.y)||0).curve(u)),k=R?m.map((d,P)=>n&&B?ke().x(p=>t(p.data.x)||0).y(p=>h(p[1])||0).curve(u):ke().x(p=>t(p.x)||0).y(p=>h(p.y)||0).curve(u)):[];return{xScale:t,yScale:h,areaGenerators:T,lineGenerators:k}},[m,O,q,ee,R,n,B]),le=A.useCallback(c=>c.customColor?c.customColor:c.color||"primary",[]),H=A.useMemo(()=>{var s,E;if(C.tickFormatter)return C.tickFormatter;const c=(E=(s=m[0])==null?void 0:s.data[0])==null?void 0:E.x;if(c instanceof Date){const a=Tt("%b %d");return t=>t instanceof Date?a(t):String(t)}if(typeof c=="number"){const a=Ve(".2f");return t=>typeof t=="number"?a(t):String(t)}return a=>String(a)},[C.tickFormatter,m]),J=S.tickFormatter||Ve(".2f"),xt=A.useMemo(()=>Y||((c,s)=>{const E=H(c.x),a=J(c.y);let t='<div class="db-areachart__tooltip-content">';if(t+=`<div class="db-areachart__tooltip-date">${E}</div>`,t+=`<div class="db-areachart__tooltip-value">${a}</div>`,we&&s!==void 0&&s>0){const l=f[s-1];let h=0;ie?h=ie(c,l):h=(c.y-l.y)/l.y*100;const u=h>=0,T=u?"positive":"negative",k=u?"+":"";t+=`<div class="db-areachart__tooltip-change db-areachart__tooltip-change--${T}">`,t+=`${k}${h.toFixed(1)}%`,t+="</div>"}return t+="</div>",t}),[Y,H,J,we,ie,f]);if(A.useEffect(()=>{if(!ne.current||m.length===0||!X||!G||Se.length===0)return;const c=Dt(ne.current);c.selectAll("*").remove();const s=c.append("g").attr("transform",`translate(${z.left},${z.top})`);if(L.show&&(s.append("g").attr("class","db-areachart__grid db-areachart__grid--x").attr("transform",`translate(0,${q})`).call(ze(X).tickSize(-q).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",L.strokeDasharray||"2,2").style("opacity",L.opacity||.3),s.append("g").attr("class","db-areachart__grid db-areachart__grid--y").call(qe(G).tickSize(-O).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",L.strokeDasharray||"2,2").style("opacity",L.opacity||.3)),C.show){const a=s.append("g").attr("class",`db-areachart__axis db-areachart__axis--x db-areachart__axis--${C.variant}`).attr("transform",`translate(0,${q})`),t=ze(X);C.tickCount&&t.ticks(C.tickCount),C.tickFormatter?t.tickFormat((l,h)=>C.tickFormatter(l)):t.tickFormat((l,h)=>H(l)),a.call(t)}if(S.show){const a=s.append("g").attr("class",`db-areachart__axis db-areachart__axis--y db-areachart__axis--${S.variant}`),t=qe(G);S.tickCount&&t.ticks(S.tickCount),S.tickFormatter?t.tickFormat((l,h)=>S.tickFormatter(l)):t.tickFormat((l,h)=>J(l)),a.call(t)}if(m.forEach((a,t)=>{const l=le(a),h=Se[t],u=je[t],T=n&&B?B[t]:a.data,k=s.append("path").datum(T).attr("class",`db-areachart__area db-areachart__area--${l}`).attr("d",h).style("opacity",o);if(a.customColor&&k.style("fill",a.customColor),R&&u){const g=s.append("path").datum(T).attr("class",`db-areachart__stroke db-areachart__stroke--${l}`).attr("d",u);a.customColor&&g.style("stroke",a.customColor)}if(U&&!n){const g=s.selectAll(`.db-areachart__point--series-${t}`).data(a.data).enter().append("circle").attr("class",`db-areachart__point db-areachart__point--${l} db-areachart__point--series-${t}`).attr("cx",d=>X(d.x)||0).attr("cy",d=>G(d.y)||0).attr("r",y==="detailed"?5:4);a.customColor&&g.style("fill",a.customColor),be&&g.attr("tabindex",0).attr("role","button").attr("aria-label",(d,P)=>`${a.name}: Data point ${P+1}: ${H(d.x)}, ${J(d.y)}`).on("focus",function(d,P){const p=a.data.indexOf(P);if(x.enabled){const K=X(P.x)||0,ce=G(P.y)||0;E(P,p,K,ce)}}).on("blur",function(){x.enabled&&(oe(!1),se(null))})}}),x.enabled){let a=null,t=null;const l=s.append("line").attr("class","db-areachart__vertical-line").attr("y1",0).attr("y2",q).style("opacity",0),h=m.map((u,T)=>{const k=le(u),g=s.append("circle").attr("class",`db-areachart__hover-circle db-areachart__hover-circle--${k}`).attr("r",6).style("opacity",0);return u.customColor&&g.style("fill",u.customColor),g});s.append("rect").attr("class","db-areachart__overlay").attr("width",O).attr("height",q).style("fill","none").style("pointer-events","all").on("mousemove",function(u){const[T]=qt(u),k=m[0];if(!k||!k.data.length)return;let g=k.data[0],d=0,P=Math.abs((X(k.data[0].x)||0)-T);k.data.forEach((N,de)=>{const ae=X(N.x)||0,ue=Math.abs(ae-T);ue<P&&(P=ue,g=N,d=de)});const p=X(g.x)||0,K=m.map((N,de)=>{const ae=N.data.find(wt=>wt.x===g.x)||N.data[d],ue=ae?ae.y:0,vt=le(N);return{name:N.name,value:ue,color:N.customColor||`var(--chart-${vt})`,point:ae}}),ce=G(K[K.length-1].value)||0;l.style("opacity",1).attr("x1",p).attr("x2",p),K.forEach((N,de)=>{N.point&&h[de].style("opacity",1).attr("cx",p).attr("cy",G(N.value)||0)}),t&&(clearTimeout(t),t=null),x.showDelay&&x.showDelay>0?(a&&clearTimeout(a),a=window.setTimeout(()=>{E(g,d,p,ce,K)},x.showDelay)):E(g,d,p,ce,K)}).on("mouseout",()=>{a&&(clearTimeout(a),a=null),x.hideDelay&&x.hideDelay>0?t=window.setTimeout(()=>{oe(!1),se(null)},x.hideDelay):(oe(!1),se(null)),l.style("opacity",0),h.forEach(u=>u.style("opacity",0))})}function E(a,t,l,h,u){const T=l+z.left,k=h+z.top;yt({x:T,y:k}),se({dataPoint:a,index:t,seriesData:u==null?void 0:u.map(g=>({name:g.name,value:g.value,color:g.color}))}),oe(!0)}C.label&&s.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--x").attr("transform",`translate(${O/2}, ${q+z.bottom-10})`).style("text-anchor","middle").text(C.label),S.label&&s.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-z.left+20).attr("x",0-q/2).style("text-anchor","middle").text(S.label),w&&c.append("text").attr("class","db-areachart__title").attr("x",_/2).attr("y",25).style("text-anchor","middle").text(w)},[m,_,M,X,G,Se,je,L.show,U,x,R,j,C.label,S.label,w,z,O,q,o,H,J,xt,we,ie,n,B,le,be,L.opacity,L.strokeDasharray,C.show,C.tickCount,C.tickFormatter,C.variant,S.show,S.tickCount,S.tickFormatter,S.variant,y]),m.length===0)return e.jsx("div",{ref:Te,className:Ae("db-areachart","db-areachart--empty",_e),...De,children:e.jsx("div",{className:"db-areachart__empty-state",children:e.jsx("p",{children:"No data available"})})});const gt={data:((Pe=m[0])==null?void 0:Pe.data)||[],width:_,height:M,color:j,xScale:X,yScale:G,svgRef:ne};return e.jsx(Et.Provider,{value:gt,children:e.jsxs("div",{ref:Te,className:Ae("db-areachart",`db-areachart--${y}`,`db-areachart--${j}`,{"db-areachart--optimized":pt,"db-areachart--keyboard":be},ut,_e),"data-theme":Ce.colorScheme!=="auto"?Ce.colorScheme:void 0,style:{...Ce.cssVars,...De.style||{}},role:"img","aria-label":dt||(m.length>1?`Area chart with ${m.length} series`:`Area chart with ${((Fe=m[0])==null?void 0:Fe.data.length)||0} data points`),...De,children:[e.jsx("svg",{ref:ne,className:"db-areachart__svg",width:_,height:M,role:"presentation","aria-hidden":"true"}),x.enabled&&$&&e.jsx(Ct,{visible:ht,position:ft,tooltipStyle:x.style,placement:x.placement,animationDuration:x.animationDuration,containerDimensions:{width:_,height:M},className:Ae("db-areachart__tooltip",x.className),role:"tooltip","aria-live":"polite",children:x.component?e.jsx(x.component,{data:$.dataPoint,index:$.index,chartDimensions:{width:_,height:M}}):x.content?e.jsx("div",{dangerouslySetInnerHTML:{__html:x.content($.dataPoint,$.index)}}):$.seriesData&&$.seriesData.length>1?e.jsxs("div",{className:"db-areachart__tooltip-content",children:[e.jsx("div",{className:"db-areachart__tooltip-date",children:H($.dataPoint.x)}),$.seriesData.map((c,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"2px",backgroundColor:c.color}}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--chart-muted-foreground)"},children:[c.name,":"]}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600},children:J(c.value)})]},s))]}):e.jsx(St,{label:H($.dataPoint.x),value:J($.dataPoint.y),color:`var(--chart-${j})`})}),W&&!x.enabled&&e.jsx("div",{ref:mt,className:"db-areachart__tooltip",role:"tooltip","aria-live":"polite"})]})})});b.displayName="AreaChart";b.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"AreaChartDataPoint"}],raw:"AreaChartDataPoint[]"},description:"Chart data points (for single series)",defaultValue:{value:"[]",computed:!1}},series:{required:!1,tsType:{name:"Array",elements:[{name:"AreaChartSeries"}],raw:"AreaChartSeries[]"},description:"Multiple series data (for stacked or multi-series charts)"},stacked:{required:!1,tsType:{name:"boolean"},description:"Enable stacked layout for multiple series",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme (for single series)",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},curve:{required:!1,tsType:{name:"union",raw:"'linear' | 'smooth' | 'step'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:"Curve type",defaultValue:{value:"'smooth'",computed:!1}},fillOpacity:{required:!1,tsType:{name:"number"},description:"Area fill opacity",defaultValue:{value:"0.3",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show stroke line on top of area",defaultValue:{value:"true",computed:!1}},xAxis:{required:!1,tsType:{name:"AreaChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"AreaChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"AreaChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"AreaChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"AreaChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"AreaChartResponsive"},description:"Responsive configuration"},showPoints:{required:!1,tsType:{name:"boolean"},description:"Show data points on the line",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"AreaChartDataPoint"}],raw:"TooltipConfig<AreaChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: AreaChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"AreaChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showPercentageChange:{required:!1,tsType:{name:"boolean"},description:"Show percentage change in tooltip",defaultValue:{value:"false",computed:!1}},calculatePercentageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_current: AreaChartDataPoint, _previous: AreaChartDataPoint) => number",signature:{arguments:[{type:{name:"AreaChartDataPoint"},name:"_current"},{type:{name:"AreaChartDataPoint"},name:"_previous"}],return:{name:"number"}}},description:"Function to calculate percentage change"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const Zt={title:"Data Display/AreaChart",component:b,parameters:{layout:"centered",docs:{description:{component:"A flexible area chart component built with D3.js for visualizing data with filled areas under curves. Supports multiple variants, tooltips, animations, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the area"},curve:{control:"radio",options:["linear","smooth","step"],description:"Curve interpolation type"},fillOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of the filled area"},showStroke:{control:"boolean",description:"Show stroke line on top of area"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},F=[{x:new Date("2024-01"),y:400},{x:new Date("2024-02"),y:300},{x:new Date("2024-03"),y:600},{x:new Date("2024-04"),y:800},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:700},{x:new Date("2024-07"),y:900},{x:new Date("2024-08"),y:750},{x:new Date("2024-09"),y:850},{x:new Date("2024-10"),y:1100},{x:new Date("2024-11"),y:950},{x:new Date("2024-12"),y:1200}],Z=[{x:0,y:20},{x:1,y:35},{x:2,y:25},{x:3,y:60},{x:4,y:45},{x:5,y:80},{x:6,y:70},{x:7,y:90},{x:8,y:85},{x:9,y:100}],pe={args:{data:F,width:600,height:400,variant:"default",color:"primary",title:"Monthly Revenue Growth"}},me={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(b,{data:F,width:500,height:180,color:"primary",title:"Primary Color",variant:"default"}),e.jsx(b,{data:F,width:500,height:180,color:"secondary",title:"Secondary Color",variant:"default"}),e.jsx(b,{data:F,width:500,height:180,color:"success",title:"Success Color",variant:"default"}),e.jsx(b,{data:F,width:500,height:180,color:"warning",title:"Warning Color",variant:"default"}),e.jsx(b,{data:F,width:500,height:180,color:"error",title:"Error Color",variant:"default"})]}),parameters:{docs:{description:{story:"All available color schemes from the Databricks Design System for area charts."}}}},he={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Standard configuration with balanced grid and styling"}),e.jsx(b,{data:F,width:500,height:200,variant:"default",title:"Default Configuration",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Minimal Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Clean design with no grid, minimal axes for focus on data"}),e.jsx(b,{data:F,width:500,height:200,variant:"minimal",title:"Minimal Configuration",color:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Detailed Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Enhanced styling with fine grid and detailed axes"}),e.jsx(b,{data:F,width:500,height:200,variant:"detailed",title:"Detailed Configuration",color:"success"})]})]}),parameters:{docs:{description:{story:"Demonstrates the three chart variants. Each variant automatically configures grid, axes, and styling for different use cases."}}}},fe={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(b,{data:Z,width:500,height:200,curve:"linear",title:"Linear Curve (Straight Lines)",color:"primary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),e.jsx(b,{data:Z,width:500,height:200,curve:"smooth",title:"Smooth Curve (Cardinal Spline)",color:"secondary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),e.jsx(b,{data:Z,width:500,height:200,curve:"step",title:"Step Curve (Step-After)",color:"success",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}})]}),parameters:{docs:{description:{story:"Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression."}}}},ye={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"With Stroke and Data Points"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Complete styling with visible stroke line, data points, and custom opacity"}),e.jsx(b,{data:Z,width:500,height:180,color:"primary",showStroke:!0,showPoints:!0,fillOpacity:.6,xAxis:{label:"Time Period"},yAxis:{label:"Value"}})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Area Only (No Stroke)"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Pure area fill without stroke line or data points"}),e.jsx(b,{data:Z,width:500,height:180,color:"secondary",showStroke:!1,showPoints:!1,fillOpacity:.5})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Subtle Fill with Emphasis on Line"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Low opacity area with prominent stroke line for data emphasis"}),e.jsx(b,{data:Z,width:500,height:180,color:"warning",showStroke:!0,showPoints:!1,fillOpacity:.1})]})]}),parameters:{docs:{description:{story:"Comprehensive styling options including stroke visibility, data points, fill opacity, and axis labels. Use these patterns to customize the visual appearance for different use cases."}}}},xe={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},ge={args:{data:F,width:700,height:450,variant:"detailed",color:"primary",title:"Interactive Area Chart",showTooltip:!0,showPercentageChange:!0,xAxis:{label:"Time Period"},yAxis:{label:"Growth Metrics"}},parameters:{docs:{description:{story:"Full-featured area chart with tooltips, percentage change indicators, and detailed styling. Hover over the chart to see interactive features."}}}},ve={render:()=>{const f=[{id:"mobile",name:"Mobile",color:"primary",data:[{x:new Date("2024-01"),y:300},{x:new Date("2024-02"),y:350},{x:new Date("2024-03"),y:400},{x:new Date("2024-04"),y:450},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:550}]},{id:"desktop",name:"Desktop",color:"secondary",data:[{x:new Date("2024-01"),y:500},{x:new Date("2024-02"),y:480},{x:new Date("2024-03"),y:520},{x:new Date("2024-04"),y:510},{x:new Date("2024-05"),y:530},{x:new Date("2024-06"),y:540}]},{id:"tablet",name:"Tablet",color:"warning",data:[{x:new Date("2024-01"),y:200},{x:new Date("2024-02"),y:210},{x:new Date("2024-03"),y:230},{x:new Date("2024-04"),y:250},{x:new Date("2024-05"),y:260},{x:new Date("2024-06"),y:280}]}],v=[{id:"series1",name:"Product A",color:"primary",data:F.map(n=>({x:n.x,y:n.y*.6}))},{id:"series2",name:"Product B",color:"secondary",data:F.map(n=>({x:n.x,y:n.y*.8}))},{id:"series3",name:"Product C",color:"success",data:F.map(n=>({x:n.x,y:n.y*.5}))}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Stacked Series"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Cumulative values stacked on top of each other, useful for showing part-to-whole relationships over time"}),e.jsx(b,{series:v,stacked:!0,width:700,height:300,title:"Stacked Revenue by Product",xAxis:{label:"Month"},yAxis:{label:"Total Revenue ($)"}})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Overlapping Series"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Multiple independent series with overlapping areas, useful for comparing independent metrics"}),e.jsx(b,{series:f,stacked:!1,width:700,height:300,title:"Traffic by Device Type",fillOpacity:.2,showStroke:!0,xAxis:{label:"Month"},yAxis:{label:"Visitors"}})]})]})},parameters:{docs:{description:{story:"Multi-series area charts support both stacked and overlapping layouts. Use stacked for part-to-whole relationships and overlapping for comparing independent trends."}}}};var Xe,Be,Ge;pe.parameters={...pe.parameters,docs:{...(Xe=pe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Monthly Revenue Growth'
  }
}`,...(Ge=(Be=pe.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var Re,Ye,Le;me.parameters={...me.parameters,docs:{...(Re=me.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <AreaChart data={sampleData} width={500} height={180} color="primary" title="Primary Color" variant="default" />
      <AreaChart data={sampleData} width={500} height={180} color="secondary" title="Secondary Color" variant="default" />
      <AreaChart data={sampleData} width={500} height={180} color="success" title="Success Color" variant="default" />
      <AreaChart data={sampleData} width={500} height={180} color="warning" title="Warning Color" variant="default" />
      <AreaChart data={sampleData} width={500} height={180} color="error" title="Error Color" variant="default" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available color schemes from the Databricks Design System for area charts.'
      }
    }
  }
}`,...(Le=(Ye=me.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};var Oe,Ie,Ue;he.parameters={...he.parameters,docs:{...(Oe=he.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3>Default Variant</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Standard configuration with balanced grid and styling
        </p>
        <AreaChart data={sampleData} width={500} height={200} variant="default" title="Default Configuration" color="primary" />
      </div>
      
      <div>
        <h3>Minimal Variant</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Clean design with no grid, minimal axes for focus on data
        </p>
        <AreaChart data={sampleData} width={500} height={200} variant="minimal" title="Minimal Configuration" color="secondary" />
      </div>
      
      <div>
        <h3>Detailed Variant</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Enhanced styling with fine grid and detailed axes
        </p>
        <AreaChart data={sampleData} width={500} height={200} variant="detailed" title="Detailed Configuration" color="success" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three chart variants. Each variant automatically configures grid, axes, and styling for different use cases.'
      }
    }
  }
}`,...(Ue=(Ie=he.parameters)==null?void 0:Ie.docs)==null?void 0:Ue.source}}};var We,He,Je;fe.parameters={...fe.parameters,docs:{...(We=fe.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <AreaChart data={numericData} width={500} height={200} curve="linear" title="Linear Curve (Straight Lines)" color="primary" xAxis={{
      label: "X Value"
    }} yAxis={{
      label: "Y Value"
    }} />
      <AreaChart data={numericData} width={500} height={200} curve="smooth" title="Smooth Curve (Cardinal Spline)" color="secondary" xAxis={{
      label: "X Value"
    }} yAxis={{
      label: "Y Value"
    }} />
      <AreaChart data={numericData} width={500} height={200} curve="step" title="Step Curve (Step-After)" color="success" xAxis={{
      label: "X Value"
    }} yAxis={{
      label: "Y Value"
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression.'
      }
    }
  }
}`,...(Je=(He=fe.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var Ke,Qe,Ze;ye.parameters={...ye.parameters,docs:{...(Ke=ye.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h3>With Stroke and Data Points</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Complete styling with visible stroke line, data points, and custom opacity
        </p>
        <AreaChart data={numericData} width={500} height={180} color="primary" showStroke={true} showPoints={true} fillOpacity={0.6} xAxis={{
        label: 'Time Period'
      }} yAxis={{
        label: 'Value'
      }} />
      </div>
      
      <div>
        <h3>Area Only (No Stroke)</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Pure area fill without stroke line or data points
        </p>
        <AreaChart data={numericData} width={500} height={180} color="secondary" showStroke={false} showPoints={false} fillOpacity={0.5} />
      </div>
      
      <div>
        <h3>Subtle Fill with Emphasis on Line</h3>
        <p style={{
        color: '#5F7281',
        fontSize: '14px',
        marginBottom: '16px'
      }}>
          Low opacity area with prominent stroke line for data emphasis
        </p>
        <AreaChart data={numericData} width={500} height={180} color="warning" showStroke={true} showPoints={false} fillOpacity={0.1} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive styling options including stroke visibility, data points, fill opacity, and axis labels. Use these patterns to customize the visual appearance for different use cases.'
      }
    }
  }
}`,...(Ze=(Qe=ye.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,at;xe.parameters={...xe.parameters,docs:{...(et=xe.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=xe.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,it,nt;ge.parameters={...ge.parameters,docs:{...(rt=ge.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 700,
    height: 450,
    variant: 'detailed',
    color: 'primary',
    title: 'Interactive Area Chart',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Time Period'
    },
    yAxis: {
      label: 'Growth Metrics'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured area chart with tooltips, percentage change indicators, and detailed styling. Hover over the chart to see interactive features.'
      }
    }
  }
}`,...(nt=(it=ge.parameters)==null?void 0:it.docs)==null?void 0:nt.source}}};var ot,st,lt;ve.parameters={...ve.parameters,docs:{...(ot=ve.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => {
    const multiSeriesData = [{
      id: 'mobile',
      name: 'Mobile',
      color: 'primary' as const,
      data: [{
        x: new Date('2024-01'),
        y: 300
      }, {
        x: new Date('2024-02'),
        y: 350
      }, {
        x: new Date('2024-03'),
        y: 400
      }, {
        x: new Date('2024-04'),
        y: 450
      }, {
        x: new Date('2024-05'),
        y: 500
      }, {
        x: new Date('2024-06'),
        y: 550
      }]
    }, {
      id: 'desktop',
      name: 'Desktop',
      color: 'secondary' as const,
      data: [{
        x: new Date('2024-01'),
        y: 500
      }, {
        x: new Date('2024-02'),
        y: 480
      }, {
        x: new Date('2024-03'),
        y: 520
      }, {
        x: new Date('2024-04'),
        y: 510
      }, {
        x: new Date('2024-05'),
        y: 530
      }, {
        x: new Date('2024-06'),
        y: 540
      }]
    }, {
      id: 'tablet',
      name: 'Tablet',
      color: 'warning' as const,
      data: [{
        x: new Date('2024-01'),
        y: 200
      }, {
        x: new Date('2024-02'),
        y: 210
      }, {
        x: new Date('2024-03'),
        y: 230
      }, {
        x: new Date('2024-04'),
        y: 250
      }, {
        x: new Date('2024-05'),
        y: 260
      }, {
        x: new Date('2024-06'),
        y: 280
      }]
    }];
    const stackedSeriesData = [{
      id: 'series1',
      name: 'Product A',
      color: 'primary' as const,
      data: sampleData.map(d => ({
        x: d.x,
        y: d.y * 0.6
      }))
    }, {
      id: 'series2',
      name: 'Product B',
      color: 'secondary' as const,
      data: sampleData.map(d => ({
        x: d.x,
        y: d.y * 0.8
      }))
    }, {
      id: 'series3',
      name: 'Product C',
      color: 'success' as const,
      data: sampleData.map(d => ({
        x: d.x,
        y: d.y * 0.5
      }))
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h3>Stacked Series</h3>
          <p style={{
          color: '#5F7281',
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Cumulative values stacked on top of each other, useful for showing part-to-whole relationships over time
          </p>
          <AreaChart series={stackedSeriesData} stacked={true} width={700} height={300} title="Stacked Revenue by Product" xAxis={{
          label: 'Month'
        }} yAxis={{
          label: 'Total Revenue ($)'
        }} />
        </div>
        
        <div>
          <h3>Overlapping Series</h3>
          <p style={{
          color: '#5F7281',
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Multiple independent series with overlapping areas, useful for comparing independent metrics
          </p>
          <AreaChart series={multiSeriesData} stacked={false} width={700} height={300} title="Traffic by Device Type" fillOpacity={0.2} showStroke={true} xAxis={{
          label: 'Month'
        }} yAxis={{
          label: 'Visitors'
        }} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multi-series area charts support both stacked and overlapping layouts. Use stacked for part-to-whole relationships and overlapping for comparing independent trends.'
      }
    }
  }
}`,...(lt=(st=ve.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};const ea=["Default","AllColors","AllVariants","CurveTypes","Styling","NoData","InteractiveFeatures","MultiSeries"];export{me as AllColors,he as AllVariants,fe as CurveTypes,pe as Default,ge as InteractiveFeatures,ve as MultiSeries,xe as NoData,ye as Styling,ea as __namedExportsOrder,Zt as default};
