import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-Dz3UJJSw.js";import{c as Se}from"./clsx-B-dksMZM.js";import{c as F,a as vt,f as Fe,s as wt,C as bt,D as Dt}from"./ChartTooltip-BKefWaGn.js";import{t as Ct,c as St,s as At,a as kt}from"./step-BXfuISo5.js";import{c as lt,x as _t,y as Tt,l as Ae,e as Ve}from"./line-BGdQb7_a.js";import{l as Me,a as $e,b as ze}from"./linear-vjb-cREh.js";import{b as jt}from"./band-DEvQ1RpF.js";import{s as Pt,n as Ft,a as Vt,m as qe}from"./stack-BMi3S0Ta.js";import{w as Mt}from"./path-DyVhHtw_.js";import{p as $t}from"./pointer-Drloq0xg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ordinal-3zInpISX.js";function Ee(h,g,n){var _=null,V=F(!0),y=null,T=lt,v=null,te=Mt(o);h=typeof h=="function"?h:h===void 0?_t:F(+h),g=typeof g=="function"?g:g===void 0?F(0):F(+g),n=typeof n=="function"?n:n===void 0?Tt:F(+n);function o(r){var b,re,I,ae=(r=vt(r)).length,R,i=!1,U,Y=new Array(ae),W=new Array(ae);for(y==null&&(v=T(U=te())),b=0;b<=ae;++b){if(!(b<ae&&V(R=r[b],b,r))===i)if(i=!i)re=b,v.areaStart(),v.lineStart();else{for(v.lineEnd(),v.lineStart(),I=b-1;I>=re;--I)v.point(Y[I],W[I]);v.lineEnd(),v.areaEnd()}i&&(Y[b]=+h(R,b,r),W[b]=+g(R,b,r),v.point(_?+_(R,b,r):Y[b],n?+n(R,b,r):W[b]))}if(U)return v=null,U+""||null}function G(){return Ae().defined(V).curve(T).context(y)}return o.x=function(r){return arguments.length?(h=typeof r=="function"?r:F(+r),_=null,o):h},o.x0=function(r){return arguments.length?(h=typeof r=="function"?r:F(+r),o):h},o.x1=function(r){return arguments.length?(_=r==null?null:typeof r=="function"?r:F(+r),o):_},o.y=function(r){return arguments.length?(g=typeof r=="function"?r:F(+r),n=null,o):g},o.y0=function(r){return arguments.length?(g=typeof r=="function"?r:F(+r),o):g},o.y1=function(r){return arguments.length?(n=r==null?null:typeof r=="function"?r:F(+r),o):n},o.lineX0=o.lineY0=function(){return G().x(h).y(g)},o.lineY1=function(){return G().x(h).y(n)},o.lineX1=function(){return G().x(_).y(g)},o.defined=function(r){return arguments.length?(V=typeof r=="function"?r:F(!!r),o):V},o.curve=function(r){return arguments.length?(T=r,y!=null&&(v=T(y)),o):T},o.context=function(r){return arguments.length?(r==null?y=v=null:v=T(y=r),o):y},o}const zt=k.createContext(null),w=k.forwardRef(({data:h=[],series:g,stacked:n=!1,width:_=600,height:V=400,variant:y="default",color:T="primary",title:v,curve:te="smooth",fillOpacity:o=.3,showStroke:G=!0,xAxis:r,yAxis:b,grid:re,theme:I,responsive:ae,showPoints:R=!1,tooltip:i,showTooltip:U=!0,formatTooltip:Y,showPercentageChange:W=!1,calculatePercentageChange:ie,keyboard:ve=!1,ariaLabel:ct,themeClass:dt,optimized:ut=!1,className:ke,...we},_e)=>{var je,Pe;const ne=k.useRef(null),pt=k.useRef(null),[mt,oe]=k.useState(!1),[ht,ft]=k.useState({x:0,y:0}),[M,se]=k.useState(null),m=k.useMemo(()=>g&&g.length>0?g:h&&h.length>0?[{id:"default",name:"Series 1",data:h,color:T}]:[],[g,h,T]),D={show:!0,position:"bottom",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...r},S={show:!0,position:"left",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...b},L={show:y!=="minimal",strokeDasharray:y==="detailed"?"1,3":"2,2",opacity:y==="detailed"?.2:.3,...re},be={colorScheme:"auto",cssVars:{"--chart-area-opacity":(o==null?void 0:o.toString())||"0.3","--chart-stroke-width":y==="detailed"?"3px":"2px","--chart-point-size":y==="detailed"?"6px":"4px"},...I},x=k.useMemo(()=>({enabled:(i==null?void 0:i.enabled)!==void 0?i.enabled:U,component:i==null?void 0:i.component,content:(i==null?void 0:i.content)||Y,style:i==null?void 0:i.style,placement:(i==null?void 0:i.placement)||{placement:"auto",offset:{x:0,y:-10}},className:i==null?void 0:i.className,animationDuration:(i==null?void 0:i.animationDuration)||200,showDelay:(i==null?void 0:i.showDelay)||0,hideDelay:(i==null?void 0:i.hideDelay)||0,...i}),[i,U,Y]),$=k.useMemo(()=>({top:v?40:20,right:20,bottom:D.label?60:40,left:S.label?80:60}),[v,D.label,S.label]),O=_-$.left-$.right,z=V-$.top-$.bottom,X=k.useMemo(()=>{if(!n||m.length===0)return null;const l=Array.from(new Set(m.flatMap(a=>a.data.map(t=>t.x)))).sort((a,t)=>a instanceof Date&&t instanceof Date?a.getTime()-t.getTime():typeof a=="number"&&typeof t=="number"?a-t:String(a).localeCompare(String(t))).map(a=>{const t={x:a};return m.forEach(c=>{const f=c.data.find(p=>p.x===a);t[c.id]=f?f.y:0}),t});return Pt().keys(m.map(a=>a.id)).order(Ft).offset(Vt)(l)},[n,m]),{xScale:N,yScale:B,areaGenerators:De,lineGenerators:Te}=k.useMemo(()=>{var C;if(m.length===0)return{xScale:null,yScale:null,areaGenerators:[],lineGenerators:[]};const d=m.flatMap(u=>u.data),l=(C=d[0])==null?void 0:C.x,q=l instanceof Date,a=typeof l=="number";let t;if(q)t=Ct().domain(Ve(d,u=>u.x)).range([0,O]);else if(a)t=Me().domain(Ve(d,u=>u.x)).range([0,O]);else{const u=Array.from(new Set(d.map(s=>s.x)));t=jt().domain(u).range([0,O]).padding(.1)}let c;n&&X?c=qe(X[X.length-1],u=>u[1]):c=qe(d,u=>u.y);const f=Me().domain([0,c]).nice().range([z,0]),p=te==="smooth"?St:te==="step"?At:lt,j=m.map(u=>n&&X?Ee().x(s=>t(s.data.x)||0).y0(s=>f(s[0])||0).y1(s=>f(s[1])||0).curve(p):Ee().x(s=>t(s.x)||0).y0(z).y1(s=>f(s.y)||0).curve(p)),A=G?m.map(u=>n&&X?Ae().x(s=>t(s.data.x)||0).y(s=>f(s[1])||0).curve(p):Ae().x(s=>t(s.x)||0).y(s=>f(s.y)||0).curve(p)):[];return{xScale:t,yScale:f,areaGenerators:j,lineGenerators:A}},[m,O,z,te,G,n,X]),le=k.useCallback(d=>d.customColor?d.customColor:d.color||"primary",[]),H=k.useMemo(()=>{var l,q;if(D.tickFormatter)return D.tickFormatter;const d=(q=(l=m[0])==null?void 0:l.data[0])==null?void 0:q.x;if(d instanceof Date){const a=kt("%b %d");return t=>t instanceof Date?a(t):String(t)}if(typeof d=="number"){const a=Fe(".2f");return t=>typeof t=="number"?a(t):String(t)}return a=>String(a)},[D.tickFormatter,m]),J=S.tickFormatter||Fe(".2f"),yt=k.useMemo(()=>Y||((d,l)=>{const q=H(d.x),a=J(d.y);let t='<div class="db-areachart__tooltip-content">';if(t+=`<div class="db-areachart__tooltip-date">${q}</div>`,t+=`<div class="db-areachart__tooltip-value">${a}</div>`,W&&l!==void 0&&l>0){const c=h[l-1];let f=0;ie?f=ie(d,c):f=(d.y-c.y)/c.y*100;const p=f>=0,j=p?"positive":"negative",A=p?"+":"";t+=`<div class="db-areachart__tooltip-change db-areachart__tooltip-change--${j}">`,t+=`${A}${f.toFixed(1)}%`,t+="</div>"}return t+="</div>",t}),[Y,H,J,W,h,ie]);if(k.useEffect(()=>{if(!ne.current||m.length===0||!N||!B||De.length===0)return;const d=wt(ne.current);d.selectAll("*").remove();const l=d.append("g").attr("transform",`translate(${$.left},${$.top})`);if(L.show&&(l.append("g").attr("class","db-areachart__grid db-areachart__grid--x").attr("transform",`translate(0,${z})`).call($e(N).tickSize(-z).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",L.strokeDasharray||"2,2").style("opacity",L.opacity||.3),l.append("g").attr("class","db-areachart__grid db-areachart__grid--y").call(ze(B).tickSize(-O).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",L.strokeDasharray||"2,2").style("opacity",L.opacity||.3)),D.show){const a=l.append("g").attr("class",`db-areachart__axis db-areachart__axis--x db-areachart__axis--${D.variant}`).attr("transform",`translate(0,${z})`),t=$e(N);D.tickCount&&t.ticks(D.tickCount),D.tickFormatter?t.tickFormat(c=>D.tickFormatter(c)):t.tickFormat(c=>H(c)),a.call(t)}if(S.show){const a=l.append("g").attr("class",`db-areachart__axis db-areachart__axis--y db-areachart__axis--${S.variant}`),t=ze(B);S.tickCount&&t.ticks(S.tickCount),S.tickFormatter?t.tickFormat(c=>S.tickFormatter(c)):t.tickFormat(c=>J(c)),a.call(t)}if(m.forEach((a,t)=>{const c=le(a),f=De[t],p=Te[t],j=n&&X?X[t]:a.data,A=l.append("path").datum(j).attr("class",`db-areachart__area db-areachart__area--${c}`).attr("d",f).style("opacity",o);if(a.customColor&&A.style("fill",a.customColor),G&&p){const C=l.append("path").datum(j).attr("class",`db-areachart__stroke db-areachart__stroke--${c}`).attr("d",p);a.customColor&&C.style("stroke",a.customColor)}if(R&&!n){const C=l.selectAll(`.db-areachart__point--series-${t}`).data(a.data).enter().append("circle").attr("class",`db-areachart__point db-areachart__point--${c} db-areachart__point--series-${t}`).attr("cx",u=>N(u.x)||0).attr("cy",u=>B(u.y)||0).attr("r",y==="detailed"?5:4);a.customColor&&C.style("fill",a.customColor),ve&&C.attr("tabindex",0).attr("role","button").attr("aria-label",(u,s)=>`${a.name}: Data point ${s+1}: ${H(u.x)}, ${J(u.y)}`).on("focus",function(u,s){const K=a.data.indexOf(s);if(x.enabled){const Q=N(s.x)||0,ce=B(s.y)||0;q(s,K,Q,ce)}}).on("blur",function(){x.enabled&&(oe(!1),se(null))})}}),x.enabled){let a=null,t=null;const c=l.append("line").attr("class","db-areachart__vertical-line").attr("y1",0).attr("y2",z).style("opacity",0),f=m.map(p=>{const j=le(p),A=l.append("circle").attr("class",`db-areachart__hover-circle db-areachart__hover-circle--${j}`).attr("r",6).style("opacity",0);return p.customColor&&A.style("fill",p.customColor),A});l.append("rect").attr("class","db-areachart__overlay").attr("width",O).attr("height",z).style("fill","none").style("pointer-events","all").on("mousemove",function(p){const[j]=$t(p),A=m[0];if(!A||!A.data.length)return;let C=A.data[0],u=0,s=Math.abs((N(A.data[0].x)||0)-j);A.data.forEach((E,Z)=>{const Ce=N(E.x)||0,de=Math.abs(Ce-j);de<s&&(s=de,C=E,u=Z)});const K=N(C.x)||0,Q=m.map(E=>{const Z=E.data.find(gt=>gt.x===C.x)||E.data[u],Ce=Z?Z.y:0,de=le(E);return{name:E.name,value:Ce,color:E.customColor||`var(--chart-${de})`,point:Z}}),ce=B(Q[Q.length-1].value)||0;c.style("opacity",1).attr("x1",K).attr("x2",K),Q.forEach((E,Z)=>{E.point&&f[Z].style("opacity",1).attr("cx",K).attr("cy",B(E.value)||0)}),t&&(clearTimeout(t),t=null),x.showDelay&&x.showDelay>0?(a&&clearTimeout(a),a=window.setTimeout(()=>{q(C,u,K,ce,Q)},x.showDelay)):q(C,u,K,ce,Q)}).on("mouseout",()=>{a&&(clearTimeout(a),a=null),x.hideDelay&&x.hideDelay>0?t=window.setTimeout(()=>{oe(!1),se(null)},x.hideDelay):(oe(!1),se(null)),c.style("opacity",0),f.forEach(p=>p.style("opacity",0))})}function q(a,t,c,f,p){const j=c+$.left,A=f+$.top;ft({x:j,y:A}),se({dataPoint:a,index:t,seriesData:p==null?void 0:p.map(C=>({name:C.name,value:C.value,color:C.color}))}),oe(!0)}D.label&&l.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--x").attr("transform",`translate(${O/2}, ${z+$.bottom-10})`).style("text-anchor","middle").text(D.label),S.label&&l.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-$.left+20).attr("x",0-z/2).style("text-anchor","middle").text(S.label),v&&d.append("text").attr("class","db-areachart__title").attr("x",_/2).attr("y",25).style("text-anchor","middle").text(v)},[m,_,V,N,B,De,Te,L.show,L.opacity,L.strokeDasharray,R,x,G,T,D.label,D.show,D.tickCount,D.tickFormatter,D.variant,S.label,S.show,S.tickCount,S.tickFormatter,S.variant,v,$,O,z,o,H,J,yt,W,ie,n,X,le,ve,y]),m.length===0)return e.jsx("div",{ref:_e,className:Se("db-areachart","db-areachart--empty",ke),...we,children:e.jsx("div",{className:"db-areachart__empty-state",children:e.jsx("p",{children:"No data available"})})});const xt={data:((je=m[0])==null?void 0:je.data)||[],width:_,height:V,color:T,xScale:N,yScale:B,svgRef:ne};return e.jsx(zt.Provider,{value:xt,children:e.jsxs("div",{ref:_e,className:Se("db-areachart",`db-areachart--${y}`,`db-areachart--${T}`,{"db-areachart--optimized":ut,"db-areachart--keyboard":ve},dt,ke),"data-theme":be.colorScheme!=="auto"?be.colorScheme:void 0,style:{...be.cssVars,...we.style||{}},role:"img","aria-label":ct||(m.length>1?`Area chart with ${m.length} series`:`Area chart with ${((Pe=m[0])==null?void 0:Pe.data.length)||0} data points`),...we,children:[e.jsx("svg",{ref:ne,className:"db-areachart__svg",width:_,height:V,role:"presentation","aria-hidden":"true"}),x.enabled&&M&&e.jsx(bt,{visible:mt,position:ht,tooltipStyle:x.style,placement:x.placement,animationDuration:x.animationDuration,containerDimensions:{width:_,height:V},className:Se("db-areachart__tooltip",x.className),role:"tooltip","aria-live":"polite",children:x.component?e.jsx(x.component,{data:M.dataPoint,index:M.index,chartDimensions:{width:_,height:V}}):x.content?e.jsx("div",{dangerouslySetInnerHTML:{__html:x.content(M.dataPoint,M.index)}}):M.seriesData&&M.seriesData.length>1?e.jsxs("div",{className:"db-areachart__tooltip-content",children:[e.jsx("div",{className:"db-areachart__tooltip-date",children:H(M.dataPoint.x)}),M.seriesData.map((d,l)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px"},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"2px",backgroundColor:d.color}}),e.jsxs("span",{style:{fontSize:"12px",color:"var(--chart-muted-foreground)"},children:[d.name,":"]}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600},children:J(d.value)})]},l))]}):e.jsx(Dt,{label:H(M.dataPoint.x),value:J(M.dataPoint.y),color:`var(--chart-${T})`})}),U&&!x.enabled&&e.jsx("div",{ref:pt,className:"db-areachart__tooltip",role:"tooltip","aria-live":"polite"})]})})});w.displayName="AreaChart";w.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"AreaChartDataPoint"}],raw:"AreaChartDataPoint[]"},description:"Chart data points (for single series)",defaultValue:{value:"[]",computed:!1}},series:{required:!1,tsType:{name:"Array",elements:[{name:"AreaChartSeries"}],raw:"AreaChartSeries[]"},description:"Multiple series data (for stacked or multi-series charts)"},stacked:{required:!1,tsType:{name:"boolean"},description:"Enable stacked layout for multiple series",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme (for single series)",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},curve:{required:!1,tsType:{name:"union",raw:"'linear' | 'smooth' | 'step'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:"Curve type",defaultValue:{value:"'smooth'",computed:!1}},fillOpacity:{required:!1,tsType:{name:"number"},description:"Area fill opacity",defaultValue:{value:"0.3",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show stroke line on top of area",defaultValue:{value:"true",computed:!1}},xAxis:{required:!1,tsType:{name:"AreaChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"AreaChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"AreaChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"AreaChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"AreaChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"AreaChartResponsive"},description:"Responsive configuration"},showPoints:{required:!1,tsType:{name:"boolean"},description:"Show data points on the line",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"AreaChartDataPoint"}],raw:"TooltipConfig<AreaChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: AreaChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"AreaChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showPercentageChange:{required:!1,tsType:{name:"boolean"},description:"Show percentage change in tooltip",defaultValue:{value:"false",computed:!1}},calculatePercentageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_current: AreaChartDataPoint, _previous: AreaChartDataPoint) => number",signature:{arguments:[{type:{name:"AreaChartDataPoint"},name:"_current"},{type:{name:"AreaChartDataPoint"},name:"_previous"}],return:{name:"number"}}},description:"Function to calculate percentage change"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)"}},composes:["Omit"]};const Ht={title:"Data Display/AreaChart",component:w,parameters:{layout:"centered",docs:{description:{component:"A flexible area chart component built with D3.js for visualizing data with filled areas under curves. Supports multiple variants, tooltips, animations, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the area"},curve:{control:"radio",options:["linear","smooth","step"],description:"Curve interpolation type"},fillOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of the filled area"},showStroke:{control:"boolean",description:"Show stroke line on top of area"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},P=[{x:new Date("2024-01"),y:400},{x:new Date("2024-02"),y:300},{x:new Date("2024-03"),y:600},{x:new Date("2024-04"),y:800},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:700},{x:new Date("2024-07"),y:900},{x:new Date("2024-08"),y:750},{x:new Date("2024-09"),y:850},{x:new Date("2024-10"),y:1100},{x:new Date("2024-11"),y:950},{x:new Date("2024-12"),y:1200}],ee=[{x:0,y:20},{x:1,y:35},{x:2,y:25},{x:3,y:60},{x:4,y:45},{x:5,y:80},{x:6,y:70},{x:7,y:90},{x:8,y:85},{x:9,y:100}],ue={args:{data:P,width:600,height:400,variant:"default",color:"primary",title:"Monthly Revenue Growth"}},pe={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(w,{data:P,width:500,height:180,color:"primary",title:"Primary Color",variant:"default"}),e.jsx(w,{data:P,width:500,height:180,color:"secondary",title:"Secondary Color",variant:"default"}),e.jsx(w,{data:P,width:500,height:180,color:"success",title:"Success Color",variant:"default"}),e.jsx(w,{data:P,width:500,height:180,color:"warning",title:"Warning Color",variant:"default"}),e.jsx(w,{data:P,width:500,height:180,color:"error",title:"Error Color",variant:"default"})]}),parameters:{docs:{description:{story:"All available color schemes from the Databricks Design System for area charts."}}}},me={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Standard configuration with balanced grid and styling"}),e.jsx(w,{data:P,width:500,height:200,variant:"default",title:"Default Configuration",color:"primary"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Minimal Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Clean design with no grid, minimal axes for focus on data"}),e.jsx(w,{data:P,width:500,height:200,variant:"minimal",title:"Minimal Configuration",color:"secondary"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Detailed Variant"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Enhanced styling with fine grid and detailed axes"}),e.jsx(w,{data:P,width:500,height:200,variant:"detailed",title:"Detailed Configuration",color:"success"})]})]}),parameters:{docs:{description:{story:"Demonstrates the three chart variants. Each variant automatically configures grid, axes, and styling for different use cases."}}}},he={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(w,{data:ee,width:500,height:200,curve:"linear",title:"Linear Curve (Straight Lines)",color:"primary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),e.jsx(w,{data:ee,width:500,height:200,curve:"smooth",title:"Smooth Curve (Cardinal Spline)",color:"secondary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),e.jsx(w,{data:ee,width:500,height:200,curve:"step",title:"Step Curve (Step-After)",color:"success",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}})]}),parameters:{docs:{description:{story:"Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression."}}}},fe={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"With Stroke and Data Points"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Complete styling with visible stroke line, data points, and custom opacity"}),e.jsx(w,{data:ee,width:500,height:180,color:"primary",showStroke:!0,showPoints:!0,fillOpacity:.6,xAxis:{label:"Time Period"},yAxis:{label:"Value"}})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Area Only (No Stroke)"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Pure area fill without stroke line or data points"}),e.jsx(w,{data:ee,width:500,height:180,color:"secondary",showStroke:!1,showPoints:!1,fillOpacity:.5})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Subtle Fill with Emphasis on Line"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Low opacity area with prominent stroke line for data emphasis"}),e.jsx(w,{data:ee,width:500,height:180,color:"warning",showStroke:!0,showPoints:!1,fillOpacity:.1})]})]}),parameters:{docs:{description:{story:"Comprehensive styling options including stroke visibility, data points, fill opacity, and axis labels. Use these patterns to customize the visual appearance for different use cases."}}}},ye={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},xe={args:{data:P,width:700,height:450,variant:"detailed",color:"primary",title:"Interactive Area Chart",showTooltip:!0,showPercentageChange:!0,xAxis:{label:"Time Period"},yAxis:{label:"Growth Metrics"}},parameters:{docs:{description:{story:"Full-featured area chart with tooltips, percentage change indicators, and detailed styling. Hover over the chart to see interactive features."}}}},ge={render:()=>{const h=[{id:"mobile",name:"Mobile",color:"primary",data:[{x:new Date("2024-01"),y:300},{x:new Date("2024-02"),y:350},{x:new Date("2024-03"),y:400},{x:new Date("2024-04"),y:450},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:550}]},{id:"desktop",name:"Desktop",color:"secondary",data:[{x:new Date("2024-01"),y:500},{x:new Date("2024-02"),y:480},{x:new Date("2024-03"),y:520},{x:new Date("2024-04"),y:510},{x:new Date("2024-05"),y:530},{x:new Date("2024-06"),y:540}]},{id:"tablet",name:"Tablet",color:"warning",data:[{x:new Date("2024-01"),y:200},{x:new Date("2024-02"),y:210},{x:new Date("2024-03"),y:230},{x:new Date("2024-04"),y:250},{x:new Date("2024-05"),y:260},{x:new Date("2024-06"),y:280}]}],g=[{id:"series1",name:"Product A",color:"primary",data:P.map(n=>({x:n.x,y:n.y*.6}))},{id:"series2",name:"Product B",color:"secondary",data:P.map(n=>({x:n.x,y:n.y*.8}))},{id:"series3",name:"Product C",color:"success",data:P.map(n=>({x:n.x,y:n.y*.5}))}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Stacked Series"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Cumulative values stacked on top of each other, useful for showing part-to-whole relationships over time"}),e.jsx(w,{series:g,stacked:!0,width:700,height:300,title:"Stacked Revenue by Product",xAxis:{label:"Month"},yAxis:{label:"Total Revenue ($)"}})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Overlapping Series"}),e.jsx("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Multiple independent series with overlapping areas, useful for comparing independent metrics"}),e.jsx(w,{series:h,stacked:!1,width:700,height:300,title:"Traffic by Device Type",fillOpacity:.2,showStroke:!0,xAxis:{label:"Month"},yAxis:{label:"Visitors"}})]})]})},parameters:{docs:{description:{story:"Multi-series area charts support both stacked and overlapping layouts. Use stacked for part-to-whole relationships and overlapping for comparing independent trends."}}}};var Ne,Xe,Be;ue.parameters={...ue.parameters,docs:{...(Ne=ue.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Monthly Revenue Growth'
  }
}`,...(Be=(Xe=ue.parameters)==null?void 0:Xe.docs)==null?void 0:Be.source}}};var Ge,Re,Ye;pe.parameters={...pe.parameters,docs:{...(Ge=pe.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Re=pe.parameters)==null?void 0:Re.docs)==null?void 0:Ye.source}}};var Le,Oe,Ie;me.parameters={...me.parameters,docs:{...(Le=me.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ie=(Oe=me.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Ue,We,He;he.parameters={...he.parameters,docs:{...(Ue=he.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(He=(We=he.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Je,Ke,Qe;fe.parameters={...fe.parameters,docs:{...(Je=fe.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=fe.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Ze,et,tt;ye.parameters={...ye.parameters,docs:{...(Ze=ye.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ye.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,rt,it;xe.parameters={...xe.parameters,docs:{...(at=xe.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(it=(rt=xe.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var nt,ot,st;ge.parameters={...ge.parameters,docs:{...(nt=ge.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(ot=ge.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};const Jt=["Default","AllColors","AllVariants","CurveTypes","Styling","NoData","InteractiveFeatures","MultiSeries"];export{pe as AllColors,me as AllVariants,he as CurveTypes,ue as Default,xe as InteractiveFeatures,ge as MultiSeries,ye as NoData,fe as Styling,Jt as __namedExportsOrder,Ht as default};
