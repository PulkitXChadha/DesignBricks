import{j as n,a as S}from"./jsx-runtime-D2eXtamC.js";import{r as _}from"./index-SE77F2UD.js";import{c as Ae}from"./clsx-B-dksMZM.js";import{c as M,a as wt,f as Me,s as bt,C as Dt,D as Ct}from"./ChartTooltip-Ckz6r7Tp.js";import{t as St,c as At,s as kt,a as _t}from"./step-BPRPw3R2.js";import{c as ct,x as Vt,y as Ft,l as ke,e as $e}from"./line-BLb5Qx5M.js";import{l as ze,a as qe,b as Ee}from"./linear-Bfi9Vb7F.js";import{b as Pt}from"./band-BzzEMzBQ.js";import{s as Tt,n as Mt,a as $t,m as Ne}from"./stack-DtlV12Ze.js";import{w as zt}from"./path-DyVhHtw_.js";import{p as qt}from"./pointer-Drloq0xg.js";import"./_commonjsHelpers-DM6icglO.js";import"./ordinal-BxAiDHEN.js";function Xe(h,v,i){var V=null,$=M(!0),y=null,F=ct,w=null,ae=zt(o);h=typeof h=="function"?h:h===void 0?Vt:M(+h),v=typeof v=="function"?v:v===void 0?M(0):M(+v),i=typeof i=="function"?i:i===void 0?Ft:M(+i);function o(a){var b,re,U,ne=(a=wt(a)).length,Y,r=!1,W,O=new Array(ne),H=new Array(ne);for(y==null&&(w=F(W=ae())),b=0;b<=ne;++b){if(!(b<ne&&$(Y=a[b],b,a))===r)if(r=!r)re=b,w.areaStart(),w.lineStart();else{for(w.lineEnd(),w.lineStart(),U=b-1;U>=re;--U)w.point(O[U],H[U]);w.lineEnd(),w.areaEnd()}r&&(O[b]=+h(Y,b,a),H[b]=+v(Y,b,a),w.point(V?+V(Y,b,a):O[b],i?+i(Y,b,a):H[b]))}if(W)return w=null,W+""||null}function L(){return ke().defined($).curve(F).context(y)}return o.x=function(a){return arguments.length?(h=typeof a=="function"?a:M(+a),V=null,o):h},o.x0=function(a){return arguments.length?(h=typeof a=="function"?a:M(+a),o):h},o.x1=function(a){return arguments.length?(V=a==null?null:typeof a=="function"?a:M(+a),o):V},o.y=function(a){return arguments.length?(v=typeof a=="function"?a:M(+a),i=null,o):v},o.y0=function(a){return arguments.length?(v=typeof a=="function"?a:M(+a),o):v},o.y1=function(a){return arguments.length?(i=a==null?null:typeof a=="function"?a:M(+a),o):i},o.lineX0=o.lineY0=function(){return L().x(h).y(v)},o.lineY1=function(){return L().x(h).y(i)},o.lineX1=function(){return L().x(V).y(v)},o.defined=function(a){return arguments.length?($=typeof a=="function"?a:M(!!a),o):$},o.curve=function(a){return arguments.length?(F=a,y!=null&&(w=F(y)),o):F},o.context=function(a){return arguments.length?(a==null?y=w=null:w=F(y=a),o):y},o}const Et=_.createContext(null),g=_.forwardRef(({data:h=[],series:v,stacked:i=!1,width:V=600,height:$=400,variant:y="default",color:F="primary",title:w,curve:ae="smooth",fillOpacity:o=.3,showStroke:L=!0,xAxis:a,yAxis:b,grid:re,theme:U,responsive:ne,showPoints:Y=!1,tooltip:r,showTooltip:W=!0,formatTooltip:O,showPercentageChange:H=!1,calculatePercentageChange:ie,keyboard:we=!1,ariaLabel:dt,themeClass:ut,optimized:pt=!1,className:_e,...be},Ve)=>{var Pe,Te;const oe=_.useRef(null),mt=_.useRef(null),[ht,le]=_.useState(!1),[ft,yt]=_.useState({x:0,y:0}),[z,se]=_.useState(null),m=_.useMemo(()=>v&&v.length>0?v:h&&h.length>0?[{id:"default",name:"Series 1",data:h,color:F}]:[],[v,h,F]),D={show:!0,position:"bottom",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...a},A={show:!0,position:"left",variant:y==="minimal"?"minimal":"default",tickCount:y==="detailed"?8:6,...b},I={show:y!=="minimal",strokeDasharray:y==="detailed"?"1,3":"2,2",opacity:y==="detailed"?.2:.3,...re},De={colorScheme:"auto",cssVars:{"--chart-area-opacity":(o==null?void 0:o.toString())||"0.3","--chart-stroke-width":y==="detailed"?"3px":"2px","--chart-point-size":y==="detailed"?"6px":"4px"},...U},x=_.useMemo(()=>({enabled:(r==null?void 0:r.enabled)!==void 0?r.enabled:W,component:r==null?void 0:r.component,content:(r==null?void 0:r.content)||O,style:r==null?void 0:r.style,placement:(r==null?void 0:r.placement)||{placement:"auto",offset:{x:0,y:-10}},className:r==null?void 0:r.className,animationDuration:(r==null?void 0:r.animationDuration)||200,showDelay:(r==null?void 0:r.showDelay)||0,hideDelay:(r==null?void 0:r.hideDelay)||0,...r}),[r,W,O]),q=_.useMemo(()=>({top:w?40:20,right:20,bottom:D.label?60:40,left:A.label?80:60}),[w,D.label,A.label]),j=V-q.left-q.right,E=$-q.top-q.bottom,G=_.useMemo(()=>{if(!i||m.length===0)return null;const s=Array.from(new Set(m.flatMap(t=>t.data.map(e=>e.x)))).sort((t,e)=>t instanceof Date&&e instanceof Date?t.getTime()-e.getTime():typeof t=="number"&&typeof e=="number"?t-e:String(t).localeCompare(String(e))).map(t=>{const e={x:t};return m.forEach(c=>{const f=c.data.find(p=>p.x===t);e[c.id]=f?f.y:0}),e});return Tt().keys(m.map(t=>t.id)).order(Mt).offset($t)(s)},[i,m]),{xScale:B,yScale:R,areaGenerators:Ce,lineGenerators:Fe}=_.useMemo(()=>{var C;if(m.length===0)return{xScale:null,yScale:null,areaGenerators:[],lineGenerators:[]};const d=m.flatMap(u=>u.data),s=(C=d[0])==null?void 0:C.x,N=s instanceof Date,t=typeof s=="number";let e;if(N)e=St().domain($e(d,u=>u.x)).range([0,j]);else if(t)e=ze().domain($e(d,u=>u.x)).range([0,j]);else{const u=Array.from(new Set(d.map(l=>l.x)));e=Pt().domain(u).range([0,j]).padding(.1)}let c;i&&G?c=Ne(G[G.length-1],u=>u[1]):c=Ne(d,u=>u.y);const f=ze().domain([0,c]).nice().range([E,0]),p=ae==="smooth"?At:ae==="step"?kt:ct,P=m.map(u=>i&&G?Xe().x(l=>e(l.data.x)||0).y0(l=>f(l[0])||0).y1(l=>f(l[1])||0).curve(p):Xe().x(l=>e(l.x)||0).y0(E).y1(l=>f(l.y)||0).curve(p)),k=L?m.map(u=>i&&G?ke().x(l=>e(l.data.x)||0).y(l=>f(l[1])||0).curve(p):ke().x(l=>e(l.x)||0).y(l=>f(l.y)||0).curve(p)):[];return{xScale:e,yScale:f,areaGenerators:P,lineGenerators:k}},[m,j,E,ae,L,i,G]),ce=_.useCallback(d=>d.customColor?d.customColor:d.color||"primary",[]),J=_.useMemo(()=>{var s,N;if(D.tickFormatter)return D.tickFormatter;const d=(N=(s=m[0])==null?void 0:s.data[0])==null?void 0:N.x;if(d instanceof Date){const t=_t("%b %d");return e=>e instanceof Date?t(e):String(e)}if(typeof d=="number"){const t=Me(".2f");return e=>typeof e=="number"?t(e):String(e)}return t=>String(t)},[D.tickFormatter,m]),K=A.tickFormatter||Me(".2f"),xt=_.useMemo(()=>O||((d,s)=>{const N=J(d.x),t=K(d.y);let e='<div class="db-areachart__tooltip-content">';if(e+=`<div class="db-areachart__tooltip-date">${N}</div>`,e+=`<div class="db-areachart__tooltip-value">${t}</div>`,H&&s!==void 0&&s>0){const c=h[s-1];let f=0;ie?f=ie(d,c):f=(d.y-c.y)/c.y*100;const p=f>=0,P=p?"positive":"negative",k=p?"+":"";e+=`<div class="db-areachart__tooltip-change db-areachart__tooltip-change--${P}">`,e+=`${k}${f.toFixed(1)}%`,e+="</div>"}return e+="</div>",e}),[O,J,K,H,h,ie]);if(_.useEffect(()=>{if(!oe.current||m.length===0||!B||!R||Ce.length===0)return;const d=bt(oe.current);d.selectAll("*").remove();const s=d.append("g").attr("transform",`translate(${q.left},${q.top})`);if(I.show&&(s.append("g").attr("class","db-areachart__grid db-areachart__grid--x").attr("transform",`translate(0,${E})`).call(qe(B).tickSize(-E).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",I.strokeDasharray||"2,2").style("opacity",I.opacity||.3),s.append("g").attr("class","db-areachart__grid db-areachart__grid--y").call(Ee(R).tickSize(-j).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",I.strokeDasharray||"2,2").style("opacity",I.opacity||.3)),D.show){const t=s.append("g").attr("class",`db-areachart__axis db-areachart__axis--x db-areachart__axis--${D.variant}`).attr("transform",`translate(0,${E})`),e=qe(B);D.tickCount&&e.ticks(D.tickCount),D.tickFormatter?e.tickFormat(c=>D.tickFormatter(c)):e.tickFormat(c=>J(c)),t.call(e)}if(A.show){const t=s.append("g").attr("class",`db-areachart__axis db-areachart__axis--y db-areachart__axis--${A.variant}`),e=Ee(R);A.tickCount&&e.ticks(A.tickCount),A.tickFormatter?e.tickFormat(c=>A.tickFormatter(c)):e.tickFormat(c=>K(c)),t.call(e)}if(m.forEach((t,e)=>{const c=ce(t),f=Ce[e],p=Fe[e],P=i&&G?G[e]:t.data,k=s.append("path").datum(P).attr("class",`db-areachart__area db-areachart__area--${c}`).attr("d",f).style("opacity",o);if(t.customColor&&k.style("fill",t.customColor),L&&p){const C=s.append("path").datum(P).attr("class",`db-areachart__stroke db-areachart__stroke--${c}`).attr("d",p);t.customColor&&C.style("stroke",t.customColor)}if(Y&&!i){const C=s.selectAll(`.db-areachart__point--series-${e}`).data(t.data).enter().append("circle").attr("class",`db-areachart__point db-areachart__point--${c} db-areachart__point--series-${e}`).attr("cx",u=>B(u.x)||0).attr("cy",u=>R(u.y)||0).attr("r",y==="detailed"?5:4);t.customColor&&C.style("fill",t.customColor),we&&C.attr("tabindex",0).attr("role","button").attr("aria-label",(u,l)=>`${t.name}: Data point ${l+1}: ${J(u.x)}, ${K(u.y)}`).on("focus",function(u,l){const Q=t.data.indexOf(l);if(x.enabled){const Z=B(l.x)||0,de=R(l.y)||0;N(l,Q,Z,de)}}).on("blur",function(){x.enabled&&(le(!1),se(null))})}}),x.enabled){let t=null,e=null;const c=s.append("line").attr("class","db-areachart__vertical-line").attr("y1",0).attr("y2",E).style("opacity",0),f=m.map(p=>{const P=ce(p),k=s.append("circle").attr("class",`db-areachart__hover-circle db-areachart__hover-circle--${P}`).attr("r",6).style("opacity",0);return p.customColor&&k.style("fill",p.customColor),k});s.append("rect").attr("class","db-areachart__overlay").attr("width",j).attr("height",E).style("fill","none").style("pointer-events","all").on("mousemove",function(p){const[P]=qt(p),k=m[0];if(!k||!k.data.length)return;let C=k.data[0],u=0,l=Math.abs((B(k.data[0].x)||0)-P);k.data.forEach((X,ee)=>{const Se=B(X.x)||0,ue=Math.abs(Se-P);ue<l&&(l=ue,C=X,u=ee)});const Q=B(C.x)||0,Z=m.map(X=>{const ee=X.data.find(vt=>vt.x===C.x)||X.data[u],Se=ee?ee.y:0,ue=ce(X);return{name:X.name,value:Se,color:X.customColor||`var(--chart-${ue})`,point:ee}}),de=R(Z[Z.length-1].value)||0;c.style("opacity",1).attr("x1",Q).attr("x2",Q),Z.forEach((X,ee)=>{X.point&&f[ee].style("opacity",1).attr("cx",Q).attr("cy",R(X.value)||0)}),e&&(clearTimeout(e),e=null),x.showDelay&&x.showDelay>0?(t&&clearTimeout(t),t=window.setTimeout(()=>{N(C,u,Q,de,Z)},x.showDelay)):N(C,u,Q,de,Z)}).on("mouseout",()=>{t&&(clearTimeout(t),t=null),x.hideDelay&&x.hideDelay>0?e=window.setTimeout(()=>{le(!1),se(null)},x.hideDelay):(le(!1),se(null)),c.style("opacity",0),f.forEach(p=>p.style("opacity",0))})}function N(t,e,c,f,p){const P=c+q.left,k=f+q.top;yt({x:P,y:k}),se({dataPoint:t,index:e,seriesData:p==null?void 0:p.map(C=>({name:C.name,value:C.value,color:C.color}))}),le(!0)}D.label&&s.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--x").attr("transform",`translate(${j/2}, ${E+q.bottom-10})`).style("text-anchor","middle").text(D.label),A.label&&s.append("text").attr("class","db-areachart__axis-label db-areachart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-q.left+20).attr("x",0-E/2).style("text-anchor","middle").text(A.label),w&&d.append("text").attr("class","db-areachart__title").attr("x",V/2).attr("y",25).style("text-anchor","middle").text(w)},[m,V,$,B,R,Ce,Fe,I.show,I.opacity,I.strokeDasharray,Y,x,L,F,D.label,D.show,D.tickCount,D.tickFormatter,D.variant,A.label,A.show,A.tickCount,A.tickFormatter,A.variant,w,q,j,E,o,J,K,xt,H,ie,i,G,ce,we,y]),m.length===0)return n("div",{ref:Ve,className:Ae("db-areachart","db-areachart--empty",_e),...be,children:n("div",{className:"db-areachart__empty-state",children:n("p",{children:"No data available"})})});const gt={data:((Pe=m[0])==null?void 0:Pe.data)||[],width:V,height:$,color:F,xScale:B,yScale:R,svgRef:oe};return n(Et.Provider,{value:gt,children:S("div",{ref:Ve,className:Ae("db-areachart",`db-areachart--${y}`,`db-areachart--${F}`,{"db-areachart--optimized":pt,"db-areachart--keyboard":we},ut,_e),"data-theme":De.colorScheme!=="auto"?De.colorScheme:void 0,style:{...De.cssVars,...be.style||{}},role:"img","aria-label":dt||(m.length>1?`Area chart with ${m.length} series`:`Area chart with ${((Te=m[0])==null?void 0:Te.data.length)||0} data points`),...be,children:[n("svg",{ref:oe,className:"db-areachart__svg",width:V,height:$,role:"presentation","aria-hidden":"true"}),x.enabled&&z&&n(Dt,{visible:ht,position:ft,tooltipStyle:x.style,placement:x.placement,animationDuration:x.animationDuration,containerDimensions:{width:V,height:$},className:Ae("db-areachart__tooltip",x.className),role:"tooltip","aria-live":"polite",children:x.component?n(x.component,{data:z.dataPoint,index:z.index,chartDimensions:{width:V,height:$}}):x.content?n("div",{dangerouslySetInnerHTML:{__html:x.content(z.dataPoint,z.index)}}):z.seriesData&&z.seriesData.length>1?S("div",{className:"db-areachart__tooltip-content",children:[n("div",{className:"db-areachart__tooltip-date",children:J(z.dataPoint.x)}),z.seriesData.map((d,s)=>S("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"4px"},children:[n("div",{style:{width:"12px",height:"12px",borderRadius:"2px",backgroundColor:d.color}}),S("span",{style:{fontSize:"12px",color:"var(--chart-muted-foreground)"},children:[d.name,":"]}),n("span",{style:{fontSize:"14px",fontWeight:600},children:K(d.value)})]},s))]}):n(Ct,{label:J(z.dataPoint.x),value:K(z.dataPoint.y),color:`var(--chart-${F})`})}),W&&!x.enabled&&n("div",{ref:mt,className:"db-areachart__tooltip",role:"tooltip","aria-live":"polite"})]})})});g.displayName="AreaChart";try{g.displayName="AreaChart",g.__docgenInfo={description:"",displayName:"AreaChart",props:{data:{defaultValue:{value:"[]"},description:"Chart data points (for single series)",name:"data",required:!1,type:{name:"AreaChartDataPoint[]"}},series:{defaultValue:null,description:"Multiple series data (for stacked or multi-series charts)",name:"series",required:!1,type:{name:"AreaChartSeries[]"}},stacked:{defaultValue:{value:"false"},description:"Enable stacked layout for multiple series",name:"stacked",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"600"},description:"Chart width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Chart height",name:"height",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Chart variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"detailed"'},{value:'"minimal"'}]}},color:{defaultValue:{value:"primary"},description:"Color scheme (for single series)",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},curve:{defaultValue:{value:"smooth"},description:"Curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"step"'},{value:'"linear"'},{value:'"smooth"'}]}},fillOpacity:{defaultValue:{value:"0.3"},description:"Area fill opacity",name:"fillOpacity",required:!1,type:{name:"number"}},showStroke:{defaultValue:{value:"true"},description:"Show stroke line on top of area",name:"showStroke",required:!1,type:{name:"boolean"}},xAxis:{defaultValue:null,description:"X-axis configuration",name:"xAxis",required:!1,type:{name:"AreaChartAxis"}},yAxis:{defaultValue:null,description:"Y-axis configuration",name:"yAxis",required:!1,type:{name:"AreaChartAxis"}},grid:{defaultValue:null,description:"Grid configuration",name:"grid",required:!1,type:{name:"AreaChartGrid"}},theme:{defaultValue:null,description:"Theme configuration",name:"theme",required:!1,type:{name:"AreaChartTheme"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"AreaChartAnimation"}},responsive:{defaultValue:null,description:"Responsive configuration",name:"responsive",required:!1,type:{name:"AreaChartResponsive"}},showPoints:{defaultValue:{value:"false"},description:"Show data points on the line",name:"showPoints",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Enhanced tooltip configuration",name:"tooltip",required:!1,type:{name:"TooltipConfig<AreaChartDataPoint>"}},showTooltip:{defaultValue:{value:"true"},description:"@deprecated Use tooltip.enabled instead",name:"showTooltip",required:!1,type:{name:"boolean"}},formatTooltip:{defaultValue:null,description:"@deprecated Use tooltip.content instead",name:"formatTooltip",required:!1,type:{name:"((_dataPoint: AreaChartDataPoint, _index?: number) => string)"}},showPercentageChange:{defaultValue:{value:"false"},description:"Show percentage change in tooltip",name:"showPercentageChange",required:!1,type:{name:"boolean"}},calculatePercentageChange:{defaultValue:null,description:"Function to calculate percentage change",name:"calculatePercentageChange",required:!1,type:{name:"((_current: AreaChartDataPoint, _previous: AreaChartDataPoint) => number)"}},keyboard:{defaultValue:{value:"false"},description:"Enable keyboard navigation",name:"keyboard",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"ARIA label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},themeClass:{defaultValue:null,description:"Custom CSS class for theming",name:"themeClass",required:!1,type:{name:"string"}},optimized:{defaultValue:{value:"false"},description:"Enable performance optimizations",name:"optimized",required:!1,type:{name:"boolean"}},hoverDebounce:{defaultValue:null,description:"Debounce hover events (ms)",name:"hoverDebounce",required:!1,type:{name:"number"}}}}}catch{}const Jt={title:"Data Display/AreaChart",component:g,parameters:{layout:"centered",docs:{description:{component:"A flexible area chart component built with D3.js for visualizing data with filled areas under curves. Supports multiple variants, tooltips, animations, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x and y values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the area"},curve:{control:"radio",options:["linear","smooth","step"],description:"Curve interpolation type"},fillOpacity:{control:{type:"range",min:.1,max:1,step:.1},description:"Opacity of the filled area"},showStroke:{control:"boolean",description:"Show stroke line on top of area"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},T=[{x:new Date("2024-01"),y:400},{x:new Date("2024-02"),y:300},{x:new Date("2024-03"),y:600},{x:new Date("2024-04"),y:800},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:700},{x:new Date("2024-07"),y:900},{x:new Date("2024-08"),y:750},{x:new Date("2024-09"),y:850},{x:new Date("2024-10"),y:1100},{x:new Date("2024-11"),y:950},{x:new Date("2024-12"),y:1200}],te=[{x:0,y:20},{x:1,y:35},{x:2,y:25},{x:3,y:60},{x:4,y:45},{x:5,y:80},{x:6,y:70},{x:7,y:90},{x:8,y:85},{x:9,y:100}],pe={args:{data:T,width:600,height:400,variant:"default",color:"primary",title:"Monthly Revenue Growth"}},me={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n(g,{data:T,width:500,height:180,color:"primary",title:"Primary Color",variant:"default"}),n(g,{data:T,width:500,height:180,color:"secondary",title:"Secondary Color",variant:"default"}),n(g,{data:T,width:500,height:180,color:"success",title:"Success Color",variant:"default"}),n(g,{data:T,width:500,height:180,color:"warning",title:"Warning Color",variant:"default"}),n(g,{data:T,width:500,height:180,color:"error",title:"Error Color",variant:"default"})]}),parameters:{docs:{description:{story:"All available color schemes from the Databricks Design System for area charts."}}}},he={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[S("div",{children:[n("h3",{children:"Default Variant"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Standard configuration with balanced grid and styling"}),n(g,{data:T,width:500,height:200,variant:"default",title:"Default Configuration",color:"primary"})]}),S("div",{children:[n("h3",{children:"Minimal Variant"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Clean design with no grid, minimal axes for focus on data"}),n(g,{data:T,width:500,height:200,variant:"minimal",title:"Minimal Configuration",color:"secondary"})]}),S("div",{children:[n("h3",{children:"Detailed Variant"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Enhanced styling with fine grid and detailed axes"}),n(g,{data:T,width:500,height:200,variant:"detailed",title:"Detailed Configuration",color:"success"})]})]}),parameters:{docs:{description:{story:"Demonstrates the three chart variants. Each variant automatically configures grid, axes, and styling for different use cases."}}}},fe={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n(g,{data:te,width:500,height:200,curve:"linear",title:"Linear Curve (Straight Lines)",color:"primary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),n(g,{data:te,width:500,height:200,curve:"smooth",title:"Smooth Curve (Cardinal Spline)",color:"secondary",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}}),n(g,{data:te,width:500,height:200,curve:"step",title:"Step Curve (Step-After)",color:"success",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}})]}),parameters:{docs:{description:{story:"Different curve interpolation methods: linear creates straight lines, smooth creates curved lines, step creates step-like progression."}}}},ye={render:()=>S("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[S("div",{children:[n("h3",{children:"With Stroke and Data Points"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Complete styling with visible stroke line, data points, and custom opacity"}),n(g,{data:te,width:500,height:180,color:"primary",showStroke:!0,showPoints:!0,fillOpacity:.6,xAxis:{label:"Time Period"},yAxis:{label:"Value"}})]}),S("div",{children:[n("h3",{children:"Area Only (No Stroke)"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Pure area fill without stroke line or data points"}),n(g,{data:te,width:500,height:180,color:"secondary",showStroke:!1,showPoints:!1,fillOpacity:.5})]}),S("div",{children:[n("h3",{children:"Subtle Fill with Emphasis on Line"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Low opacity area with prominent stroke line for data emphasis"}),n(g,{data:te,width:500,height:180,color:"warning",showStroke:!0,showPoints:!1,fillOpacity:.1})]})]}),parameters:{docs:{description:{story:"Comprehensive styling options including stroke visibility, data points, fill opacity, and axis labels. Use these patterns to customize the visual appearance for different use cases."}}}},xe={args:{data:[],width:500,height:300,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},ge={args:{data:T,width:700,height:450,variant:"detailed",color:"primary",title:"Interactive Area Chart",showTooltip:!0,showPercentageChange:!0,xAxis:{label:"Time Period"},yAxis:{label:"Growth Metrics"}},parameters:{docs:{description:{story:"Full-featured area chart with tooltips, percentage change indicators, and detailed styling. Hover over the chart to see interactive features."}}}},ve={render:()=>{const h=[{id:"mobile",name:"Mobile",color:"primary",data:[{x:new Date("2024-01"),y:300},{x:new Date("2024-02"),y:350},{x:new Date("2024-03"),y:400},{x:new Date("2024-04"),y:450},{x:new Date("2024-05"),y:500},{x:new Date("2024-06"),y:550}]},{id:"desktop",name:"Desktop",color:"secondary",data:[{x:new Date("2024-01"),y:500},{x:new Date("2024-02"),y:480},{x:new Date("2024-03"),y:520},{x:new Date("2024-04"),y:510},{x:new Date("2024-05"),y:530},{x:new Date("2024-06"),y:540}]},{id:"tablet",name:"Tablet",color:"warning",data:[{x:new Date("2024-01"),y:200},{x:new Date("2024-02"),y:210},{x:new Date("2024-03"),y:230},{x:new Date("2024-04"),y:250},{x:new Date("2024-05"),y:260},{x:new Date("2024-06"),y:280}]}],v=[{id:"series1",name:"Product A",color:"primary",data:T.map(i=>({x:i.x,y:i.y*.6}))},{id:"series2",name:"Product B",color:"secondary",data:T.map(i=>({x:i.x,y:i.y*.8}))},{id:"series3",name:"Product C",color:"success",data:T.map(i=>({x:i.x,y:i.y*.5}))}];return S("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[S("div",{children:[n("h3",{children:"Stacked Series"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Cumulative values stacked on top of each other, useful for showing part-to-whole relationships over time"}),n(g,{series:v,stacked:!0,width:700,height:300,title:"Stacked Revenue by Product",xAxis:{label:"Month"},yAxis:{label:"Total Revenue ($)"}})]}),S("div",{children:[n("h3",{children:"Overlapping Series"}),n("p",{style:{color:"#5F7281",fontSize:"14px",marginBottom:"16px"},children:"Multiple independent series with overlapping areas, useful for comparing independent metrics"}),n(g,{series:h,stacked:!1,width:700,height:300,title:"Traffic by Device Type",fillOpacity:.2,showStroke:!0,xAxis:{label:"Month"},yAxis:{label:"Visitors"}})]})]})},parameters:{docs:{description:{story:"Multi-series area charts support both stacked and overlapping layouts. Use stacked for part-to-whole relationships and overlapping for comparing independent trends."}}}};var Be,Ge,Re;pe.parameters={...pe.parameters,docs:{...(Be=pe.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    variant: 'default',
    color: 'primary',
    title: 'Monthly Revenue Growth'
  }
}`,...(Re=(Ge=pe.parameters)==null?void 0:Ge.docs)==null?void 0:Re.source}}};var Le,Ye,Oe;me.parameters={...me.parameters,docs:{...(Le=me.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Oe=(Ye=me.parameters)==null?void 0:Ye.docs)==null?void 0:Oe.source}}};var Ie,je,Ue;he.parameters={...he.parameters,docs:{...(Ie=he.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ue=(je=he.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var We,He,Je;fe.parameters={...fe.parameters,docs:{...(We=fe.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(at=(tt=xe.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,it;ge.parameters={...ge.parameters,docs:{...(nt=ge.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(rt=ge.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ot,lt,st;ve.parameters={...ve.parameters,docs:{...(ot=ve.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(lt=ve.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};const Kt=["Default","AllColors","AllVariants","CurveTypes","Styling","NoData","InteractiveFeatures","MultiSeries"];export{me as AllColors,he as AllVariants,fe as CurveTypes,pe as Default,ge as InteractiveFeatures,ve as MultiSeries,xe as NoData,ye as Styling,Kt as __namedExportsOrder,Jt as default};
