import{j as i,a as T}from"./jsx-runtime-D2eXtamC.js";import{r as p,R as $t}from"./index-SE77F2UD.js";import{c as v}from"./clsx-B-dksMZM.js";import{f as $e,s as Ft,C as Nt,D as kt}from"./ChartTooltip-Ckz6r7Tp.js";import{t as Pt,c as qt,s as Mt,a as Rt}from"./step-BPRPw3R2.js";import{e as ge,l as zt,c as Ht}from"./line-BLb5Qx5M.js";import{l as Fe,a as Ne,b as ke}from"./linear-Bfi9Vb7F.js";import{b as Et}from"./band-BzzEMzBQ.js";import{p as Gt}from"./pointer-Drloq0xg.js";import{M as Ut}from"./MultiLineChart-DzF7T0iJ.js";import"./_commonjsHelpers-DM6icglO.js";import"./path-DyVhHtw_.js";import"./ordinal-BxAiDHEN.js";const It=p.createContext(null),P=p.forwardRef(({data:e=[],width:a=600,height:o=400,variant:s="default",color:c="primary",title:y,curve:V="smooth",xAxis:se,yAxis:N,grid:g,theme:M,animation:we,responsive:le,showPoints:R=!0,tooltip:n,showTooltip:z=!0,formatTooltip:ce,showPercentageChange:Ce=!1,calculatePercentageChange:de,keyboard:De=!1,ariaLabel:bt,themeClass:xt,optimized:_t=!1,hoverDebounce:Bt=0,className:Le,...ue},Ae)=>{const U=p.useRef(null),wt=p.useRef(null),[Ct,I]=p.useState(!1),[Dt,Lt]=p.useState({x:0,y:0}),[$,X]=p.useState(null),b={show:!0,position:"bottom",variant:s==="minimal"?"minimal":"default",tickCount:s==="detailed"?8:6,...se},_={show:!0,position:"left",variant:s==="minimal"?"minimal":"default",tickCount:s==="detailed"?8:6,...N},k={show:s!=="minimal",strokeDasharray:s==="detailed"?"1,3":"2,2",opacity:s==="detailed"?.2:.3,...g},me={colorScheme:"auto",cssVars:{"--chart-line-width":s==="detailed"?"3px":"2px","--chart-point-size":s==="detailed"?"6px":"4px"},...M},d=p.useMemo(()=>({enabled:(n==null?void 0:n.enabled)!==void 0?n.enabled:z,component:n==null?void 0:n.component,content:(n==null?void 0:n.content)||ce,style:n==null?void 0:n.style,placement:(n==null?void 0:n.placement)||{placement:"auto",offset:{x:0,y:-10}},className:n==null?void 0:n.className,animationDuration:(n==null?void 0:n.animationDuration)||200,showDelay:(n==null?void 0:n.showDelay)||0,hideDelay:(n==null?void 0:n.hideDelay)||0,...n}),[n,z,ce]),w={top:y?40:20,right:20,bottom:b.label?60:40,left:_.label?80:60},L=a-w.left-w.right,C=o-w.top-w.bottom,{xScale:D,yScale:A,lineGenerator:pe}=p.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,lineGenerator:null};const f=e[0].x,u=f instanceof Date,x=typeof f=="number";let r;u?r=Pt().domain(ge(e,m=>m.x)).range([0,L]):x?r=Fe().domain(ge(e,m=>m.x)).range([0,L]):r=Et().domain(e.map(m=>m.x)).range([0,L]).padding(.1);const t=Fe().domain(ge(e,m=>m.y)).nice().range([C,0]),l=V==="smooth"?qt:V==="step"?Mt:Ht,h=zt().x(m=>r(m.x)||0).y(m=>t(m.y)||0).curve(l);return{xScale:r,yScale:t,lineGenerator:h}},[e,L,C,V]),H=p.useMemo(()=>{var u;if(b.tickFormatter)return b.tickFormatter;const f=(u=e[0])==null?void 0:u.x;if(f instanceof Date){const x=Rt("%b %d");return r=>r instanceof Date?x(r):String(r)}if(typeof f=="number"){const x=$e(".2f");return r=>typeof r=="number"?x(r):String(r)}return x=>String(x)},[e,b.tickFormatter]),E=_.tickFormatter||$e(".2f"),At=ce||((f,u)=>{const x=H(f.x),r=E(f.y);let t='<div class="db-linechart__tooltip-content">';if(t+=`<div class="db-linechart__tooltip-date">${x}</div>`,t+=`<div class="db-linechart__tooltip-value">${r}</div>`,Ce&&u!==void 0&&u>0){const l=e[u-1];let h=0;de?h=de(f,l):h=(f.y-l.y)/l.y*100;const m=h>=0,S=m?"positive":"negative",F=m?"+":"";t+=`<div class="db-linechart__tooltip-change db-linechart__tooltip-change--${S}">`,t+=`${F}${h.toFixed(1)}%`,t+="</div>"}return t+="</div>",t});if(p.useEffect(()=>{if(!U.current||!e.length||!D||!A||!pe)return;const f=Ft(U.current);f.selectAll("*").remove();const u=f.append("g").attr("transform",`translate(${w.left},${w.top})`);if(k.show&&(u.append("g").attr("class","db-linechart__grid db-linechart__grid--x").attr("transform",`translate(0,${C})`).call(Ne(D).tickSize(-C).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",k.strokeDasharray||"2,2").style("opacity",k.opacity||.3),u.append("g").attr("class","db-linechart__grid db-linechart__grid--y").call(ke(A).tickSize(-L).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",k.strokeDasharray||"2,2").style("opacity",k.opacity||.3)),b.show){const r=u.append("g").attr("class",`db-linechart__axis db-linechart__axis--x db-linechart__axis--${b.variant}`).attr("transform",`translate(0,${C})`),t=Ne(D);b.tickCount&&t.ticks(b.tickCount),b.tickFormatter?t.tickFormat((l,h)=>b.tickFormatter(l)):t.tickFormat((l,h)=>H(l)),r.call(t)}if(_.show){const r=u.append("g").attr("class",`db-linechart__axis db-linechart__axis--y db-linechart__axis--${_.variant}`),t=ke(A);_.tickCount&&t.ticks(_.tickCount),_.tickFormatter?t.tickFormat((l,h)=>_.tickFormatter(l)):t.tickFormat((l,h)=>E(l)),r.call(t)}if(u.append("path").datum(e).attr("class",`db-linechart__line db-linechart__line--${c}`).attr("d",pe),R){const r=u.selectAll(".db-linechart__point").data(e).enter().append("circle").attr("class",`db-linechart__point db-linechart__point--${c}`).attr("cx",t=>D(t.x)||0).attr("cy",t=>A(t.y)||0).attr("r",s==="detailed"?5:4);De&&r.attr("tabindex",0).attr("role","button").attr("aria-label",(t,l)=>`Data point ${l+1}: ${H(t.x)}, ${E(t.y)}`).on("focus",function(t,l){const h=e.indexOf(l);if(d.enabled){const m=D(l.x)||0,S=A(l.y)||0;x(l,h,m,S)}}).on("blur",function(){d.enabled&&(I(!1),X(null))})}if(d.enabled){let r=null,t=null;const l=u.append("line").attr("class","db-linechart__vertical-line").attr("y1",0).attr("y2",C).style("opacity",0),h=u.append("circle").attr("class",`db-linechart__hover-circle db-linechart__hover-circle--${c}`).attr("r",6).style("opacity",0);u.append("rect").attr("class","db-linechart__overlay").attr("width",L).attr("height",C).style("fill","none").style("pointer-events","all").on("mousemove",function(m){const[S]=Gt(m);let F=e[0],he=0,Se=Math.abs((D(e[0].x)||0)-S);e.forEach((Te,Tt)=>{const Vt=D(Te.x)||0,Ve=Math.abs(Vt-S);Ve<Se&&(Se=Ve,F=Te,he=Tt)});const G=D(F.x)||0,ye=A(F.y)||0;l.style("opacity",1).attr("x1",G).attr("x2",G),h.style("opacity",1).attr("cx",G).attr("cy",ye),t&&(clearTimeout(t),t=null),d.showDelay&&d.showDelay>0?(r&&clearTimeout(r),r=window.setTimeout(()=>{x(F,he,G,ye)},d.showDelay)):x(F,he,G,ye)}).on("mouseout",()=>{r&&(clearTimeout(r),r=null),d.hideDelay&&d.hideDelay>0?t=window.setTimeout(()=>{I(!1),X(null)},d.hideDelay):(I(!1),X(null)),l.style("opacity",0),h.style("opacity",0)})}function x(r,t,l,h){const m=l+w.left,S=h+w.top;Lt({x:m,y:S}),X({dataPoint:r,index:t}),I(!0)}b.label&&u.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--x").attr("transform",`translate(${L/2}, ${C+w.bottom-10})`).style("text-anchor","middle").text(b.label),_.label&&u.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-w.left+20).attr("x",0-C/2).style("text-anchor","middle").text(_.label),y&&f.append("text").attr("class","db-linechart__title").attr("x",a/2).attr("y",25).style("text-anchor","middle").text(y)},[e,a,o,D,A,pe,k.show,R,d,c,b.label,_.label,y,w,L,C,H,E,At,Ce,de]),!e.length)return i("div",{ref:Ae,className:v("db-linechart","db-linechart--empty",Le),...ue,children:i("div",{className:"db-linechart__empty-state",children:i("p",{children:"No data available"})})});const St={data:e,width:a,height:o,color:c,xScale:D,yScale:A,svgRef:U};return i(It.Provider,{value:St,children:T("div",{ref:Ae,className:v("db-linechart",`db-linechart--${s}`,`db-linechart--${c}`,{"db-linechart--optimized":_t,"db-linechart--keyboard":De},xt,Le),"data-theme":me.colorScheme!=="auto"?me.colorScheme:void 0,style:{...me.cssVars,...ue.style||{}},role:"img","aria-label":bt||`Line chart with ${e.length} data points`,...ue,children:[i("svg",{ref:U,className:"db-linechart__svg",width:a,height:o,role:"presentation","aria-hidden":"true"}),d.enabled&&$&&i(Nt,{visible:Ct,position:Dt,tooltipStyle:d.style,placement:d.placement,animationDuration:d.animationDuration,containerDimensions:{width:a,height:o},className:v("db-linechart__tooltip",d.className),role:"tooltip","aria-live":"polite",children:d.component?i(d.component,{data:$.dataPoint,index:$.index,chartDimensions:{width:a,height:o}}):d.content?i("div",{dangerouslySetInnerHTML:{__html:d.content($.dataPoint,$.index)}}):i(kt,{label:H($.dataPoint.x),value:E($.dataPoint.y),color:`var(--chart-${c})`})}),z&&!d.enabled&&i("div",{ref:wt,className:"db-linechart__tooltip",role:"tooltip","aria-live":"polite"})]})})});P.displayName="LineChart";try{P.displayName="LineChart",P.__docgenInfo={description:"",displayName:"LineChart",props:{data:{defaultValue:{value:"[]"},description:"Chart data points",name:"data",required:!1,type:{name:"LineChartDataPoint[]"}},width:{defaultValue:{value:"600"},description:"Chart width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Chart height",name:"height",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Chart variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"detailed"'},{value:'"minimal"'}]}},color:{defaultValue:{value:"primary"},description:"Color scheme",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},curve:{defaultValue:{value:"smooth"},description:"Curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"step"'},{value:'"linear"'},{value:'"smooth"'}]}},xAxis:{defaultValue:null,description:"X-axis configuration",name:"xAxis",required:!1,type:{name:"LineChartAxis"}},yAxis:{defaultValue:null,description:"Y-axis configuration",name:"yAxis",required:!1,type:{name:"LineChartAxis"}},grid:{defaultValue:null,description:"Grid configuration",name:"grid",required:!1,type:{name:"LineChartGrid"}},theme:{defaultValue:null,description:"Theme configuration",name:"theme",required:!1,type:{name:"LineChartTheme"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"LineChartAnimation"}},responsive:{defaultValue:null,description:"Responsive configuration",name:"responsive",required:!1,type:{name:"LineChartResponsive"}},showPoints:{defaultValue:{value:"true"},description:"Show data points on the line",name:"showPoints",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Enhanced tooltip configuration",name:"tooltip",required:!1,type:{name:"TooltipConfig<LineChartDataPoint>"}},showTooltip:{defaultValue:{value:"true"},description:"@deprecated Use tooltip.enabled instead",name:"showTooltip",required:!1,type:{name:"boolean"}},formatTooltip:{defaultValue:null,description:"@deprecated Use tooltip.content instead",name:"formatTooltip",required:!1,type:{name:"((_dataPoint: LineChartDataPoint, _index?: number) => string)"}},showPercentageChange:{defaultValue:{value:"false"},description:"Show percentage change in tooltip",name:"showPercentageChange",required:!1,type:{name:"boolean"}},calculatePercentageChange:{defaultValue:null,description:"Function to calculate percentage change",name:"calculatePercentageChange",required:!1,type:{name:"((_current: LineChartDataPoint, _previous: LineChartDataPoint) => number)"}},keyboard:{defaultValue:{value:"false"},description:"Enable keyboard navigation",name:"keyboard",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"ARIA label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},themeClass:{defaultValue:null,description:"Custom CSS class for theming",name:"themeClass",required:!1,type:{name:"string"}},optimized:{defaultValue:{value:"false"},description:"Enable performance optimizations",name:"optimized",required:!1,type:{name:"boolean"}},hoverDebounce:{defaultValue:{value:"0"},description:"Debounce hover events (ms)",name:"hoverDebounce",required:!1,type:{name:"number"}}}}}catch{}const ne=p.forwardRef(({metrics:e,data:a=[],formatValue:o=N=>N.toLocaleString(),layout:s="horizontal",showChange:c=!0,className:y,...V},se)=>{const N=$t.useMemo(()=>{if(e)return e;if(!a.length)return[];const g=a.map(z=>z.y),M=Math.max(...g),we=Math.min(...g),le=a[0].y,R=a[a.length-1].y,n=(R-le)/le*100;return[{label:"High",value:o(M),color:"success"},{label:"Low",value:o(we),color:"error"},{label:"Change",value:o(R),change:n,color:n>=0?"success":"error"}]},[e,a,o]);return N.length?i("div",{ref:se,className:v("db-chart-aggregates",`db-chart-aggregates--${s}`,y),...V,children:N.map((g,M)=>T("div",{className:v("db-chart-aggregates__metric",g.color&&`db-chart-aggregates__metric--${g.color}`),children:[T("div",{className:"db-chart-aggregates__label",children:[g.label,":"]}),i("div",{className:"db-chart-aggregates__value",children:g.value}),c&&g.change!==void 0&&T("div",{className:v("db-chart-aggregates__change",{"db-chart-aggregates__change--positive":g.change>=0,"db-chart-aggregates__change--negative":g.change<0}),children:[g.change>=0?"+":"",g.change.toFixed(2),"%"]})]},M))}):null});ne.displayName="ChartAggregates";try{ne.displayName="ChartAggregates",ne.__docgenInfo={description:"",displayName:"ChartAggregates",props:{metrics:{defaultValue:null,description:"Array of metrics to display",name:"metrics",required:!1,type:{name:"AggregateMetric[]"}},data:{defaultValue:{value:"[]"},description:"Auto-calculate metrics from data",name:"data",required:!1,type:{name:"LineChartDataPoint[]"}},formatValue:{defaultValue:{value:"(_value: number) => _value.toLocaleString()"},description:"Format function for values",name:"formatValue",required:!1,type:{name:"((_value: number) => string)"}},layout:{defaultValue:{value:"horizontal"},description:"Layout variant",name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"grid"'}]}},showChange:{defaultValue:{value:"true"},description:"Show change percentages",name:"showChange",required:!1,type:{name:"boolean"}}}}}catch{}const re=p.forwardRef(({title:e,subtitle:a,className:o,children:s,...c},y)=>T("div",{ref:y,className:v("db-linechart__header",o),...c,children:[e&&i("h3",{className:"db-linechart__title",children:e}),a&&i("p",{className:"db-linechart__subtitle",children:a}),s]}));re.displayName="LineChartHeader";const ie=p.forwardRef(({items:e=[],position:a="bottom",className:o,...s},c)=>i("div",{ref:c,className:v("db-linechart__legend",`db-linechart__legend--${a}`,o),...s,children:e.map((y,V)=>T("div",{className:"db-linechart__legend-item",children:[i("div",{className:v("db-linechart__legend-symbol",`db-linechart__legend-symbol--${y.symbol||"line"}`),style:{backgroundColor:y.color}}),i("span",{className:"db-linechart__legend-label",children:y.label})]},V))}));ie.displayName="LineChartLegend";const fe=p.forwardRef(({type:e,className:a,children:o,...s},c)=>i("div",{ref:c,className:v("db-linechart__axis-container",`db-linechart__axis-container--${e}`,a),...s,children:o}));fe.displayName="LineChartAxis";const ve=p.forwardRef(({formatter:e,variant:a="default",className:o,...s},c)=>i("div",{ref:c,className:v("db-linechart__tooltip-compound",`db-linechart__tooltip-compound--${a}`,o),...s}));ve.displayName="LineChartTooltip";const be=p.forwardRef(({type:e="both",strokeDasharray:a,opacity:o,className:s,...c},y)=>i("div",{ref:y,className:v("db-linechart__grid-compound",`db-linechart__grid-compound--${e}`,s),style:{"--grid-stroke-dasharray":a,"--grid-opacity":o},...c}));be.displayName="LineChartGrid";const xe=p.forwardRef(({className:e,children:a,...o},s)=>i("div",{ref:s,className:v("db-linechart__content",e),...o,children:a}));xe.displayName="LineChartContent";const oe=p.forwardRef(({variant:e="default",className:a,children:o,...s},c)=>i("div",{ref:c,className:v("db-linechart__container",`db-linechart__container--${e}`,a),...s,children:o}));oe.displayName="LineChartContainer";try{re.displayName="LineChartHeader",re.__docgenInfo={description:"",displayName:"LineChartHeader",props:{title:{defaultValue:null,description:"Header title",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"Header subtitle",name:"subtitle",required:!1,type:{name:"string"}}}}}catch{}try{ie.displayName="LineChartLegend",ie.__docgenInfo={description:"",displayName:"LineChartLegend",props:{items:{defaultValue:{value:"[]"},description:"Legend items",name:"items",required:!1,type:{name:'{ label: string; color: string; symbol?: "line" | "circle" | "square"; }[]'}},position:{defaultValue:{value:"bottom"},description:"Legend position",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{fe.displayName="LineChartAxis",fe.__docgenInfo={description:"",displayName:"LineChartAxis",props:{type:{defaultValue:{value:"both"},description:"Axis type",name:"type",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},children:{defaultValue:null,description:"Custom axis component",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{ve.displayName="LineChartTooltip",ve.__docgenInfo={description:"",displayName:"LineChartTooltip",props:{formatter:{defaultValue:null,description:"Custom tooltip formatter",name:"formatter",required:!1,type:{name:"((_dataPoint: any, _index?: number) => ReactNode)"}},variant:{defaultValue:{value:"default"},description:"Tooltip variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"detailed"'}]}}}}}catch{}try{be.displayName="LineChartGrid",be.__docgenInfo={description:"",displayName:"LineChartGrid",props:{type:{defaultValue:{value:"both"},description:"Grid type",name:"type",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"both"'}]}},strokeDasharray:{defaultValue:null,description:"Custom grid styling",name:"strokeDasharray",required:!1,type:{name:"string"}},opacity:{defaultValue:null,description:"Grid opacity",name:"opacity",required:!1,type:{name:"number"}}}}}catch{}try{xe.displayName="LineChartContent",xe.__docgenInfo={description:"",displayName:"LineChartContent",props:{children:{defaultValue:null,description:"Custom render function for chart content",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{oe.displayName="LineChartContainer",oe.__docgenInfo={description:"",displayName:"LineChartContainer",props:{variant:{defaultValue:{value:"default"},description:"Container variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'},{value:'"minimal"'}]}}}}}catch{}const ca={title:"Data Display/LineChart",component:P,parameters:{layout:"centered",docs:{description:{component:"A modern line chart component built with D3.js for visualizing time series and continuous data. Supports multiple variants, curve types, interactive tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x (date/number/string) and y (number) values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the line and points"},curve:{control:"radio",options:["linear","smooth","step"],description:"Line curve interpolation type"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},showPercentageChange:{control:"boolean",description:"Show percentage change in tooltips"},title:{control:"text",description:"Chart title"}}},q=[{x:new Date("2024-01-01"),y:45},{x:new Date("2024-02-01"),y:52},{x:new Date("2024-03-01"),y:48},{x:new Date("2024-04-01"),y:61},{x:new Date("2024-05-01"),y:55},{x:new Date("2024-06-01"),y:67},{x:new Date("2024-07-01"),y:59},{x:new Date("2024-08-01"),y:73},{x:new Date("2024-09-01"),y:69},{x:new Date("2024-10-01"),y:77}],ft=[{x:new Date("2024-01-01"),y:2250},{x:new Date("2024-02-01"),y:2180},{x:new Date("2024-03-01"),y:2420},{x:new Date("2024-04-01"),y:2680},{x:new Date("2024-05-01"),y:2890},{x:new Date("2024-06-01"),y:3100},{x:new Date("2024-07-01"),y:2950},{x:new Date("2024-08-01"),y:3200},{x:new Date("2024-09-01"),y:3400}],Pe=[{x:new Date("2024-01-01"),y:22500},{x:new Date("2024-01-15"),y:24200},{x:new Date("2024-02-01"),y:23800},{x:new Date("2024-02-15"),y:25100},{x:new Date("2024-03-01"),y:24850},{x:new Date("2024-03-15"),y:26300},{x:new Date("2024-03-30"),y:24847.83}],Xt=Array.from({length:20},(e,a)=>({x:new Date(Date.UTC(2024,0,1+a*30)),y:Math.round((Math.sin(a*.5)*20+50+Math.random()*10)*100)/100})),Kt=[{id:"product1",name:"Product A",color:"primary",data:[{x:new Date("2024-01-01"),y:2400},{x:new Date("2024-02-01"),y:1398},{x:new Date("2024-03-01"),y:2800},{x:new Date("2024-04-01"),y:3908},{x:new Date("2024-05-01"),y:4800}]},{id:"product2",name:"Product B",color:"secondary",data:[{x:new Date("2024-01-01"),y:1500},{x:new Date("2024-02-01"),y:2e3},{x:new Date("2024-03-01"),y:1800},{x:new Date("2024-04-01"),y:2500},{x:new Date("2024-05-01"),y:2200}]},{id:"product3",name:"Product C",color:"success",data:[{x:new Date("2024-01-01"),y:800},{x:new Date("2024-02-01"),y:1200},{x:new Date("2024-03-01"),y:1e3},{x:new Date("2024-04-01"),y:1500},{x:new Date("2024-05-01"),y:900}]}],_e={label:"Month"},Yt={label:"Revenue ($K)"},vt={label:"Sales ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`},Wt={label:"Time Series",variant:"detailed",tickCount:8},jt={label:"Value Metrics",variant:"detailed",tickCount:8},K={args:{data:q,width:700,height:400,title:"Monthly Revenue Trend",color:"primary",curve:"smooth",showTooltip:!0,xAxis:_e,yAxis:Yt}},Y={args:{data:q,width:600,height:350,color:"primary",title:"Color Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different color schemes available for the line chart. Use the color control to switch between primary, secondary, success, warning, and error colors."}}}},W={args:{data:q,width:600,height:400,variant:"default",title:"Chart Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds enhanced visual elements. Use the variant control to switch between them."}}}},j={args:{data:q,width:600,height:350,curve:"linear",title:"Curve Types",showTooltip:!0},parameters:{docs:{description:{story:"Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after). Use the curve control to switch between them."}}}},B={args:{data:ft,width:700,height:400,title:"Sales Performance (Hover for Details)",color:"primary",curve:"smooth",showTooltip:!0,showPercentageChange:!0,xAxis:_e,yAxis:vt},parameters:{docs:{description:{story:"Interactive tooltips with percentage change indicators. Hover over data points to see detailed information including value changes from the previous point."}}}},O={args:{data:ft,width:600,height:400,color:"success",title:"Revenue Growth (Custom Formatting)",showTooltip:!0,showPercentageChange:!0,xAxis:_e,yAxis:vt,formatTooltip:e=>{const a=new Date(e.x).toLocaleDateString("en-US",{month:"short",year:"numeric"}),o=`$${(e.y/1e3).toFixed(1)}K`;return`<div class="db-linechart__tooltip-content">
        <div class="db-linechart__tooltip-date">${a}</div>
        <div class="db-linechart__tooltip-value">${o}</div>
      </div>`}},parameters:{docs:{description:{story:"Custom formatting for axis labels and tooltip content. Demonstrates using tickFormatter for axis values and custom tooltip HTML formatting."}}}},J={render:()=>T("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",backgroundColor:"#F6F7F9",borderRadius:"12px",maxWidth:"850px"},children:[i(ne,{data:Pe,formatValue:e=>`$${(e/1e3).toFixed(1)}K`,metrics:[{label:"High",value:"$26.3K",color:"success"},{label:"Low",value:"$22.5K",color:"warning"},{label:"Avg",value:"$24.5K",color:"primary"}],layout:"horizontal"}),i(P,{data:Pe,width:800,height:300,color:"primary",title:"Financial Dashboard",showTooltip:!0,showPercentageChange:!0,curve:"smooth",xAxis:{label:"Date"},yAxis:{label:"Value ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`}})]}),parameters:{docs:{description:{story:"Combining ChartAggregates with LineChart for a complete dashboard view. Shows key metrics alongside the trend visualization."}}}},Q={render:()=>T(oe,{variant:"card",children:[i(re,{title:"Performance Analytics",subtitle:"System performance over the last 10 months"}),i("div",{style:{padding:"16px"},children:i(P,{data:q,width:600,height:300,color:"primary",showTooltip:!0,curve:"smooth",xAxis:{label:"Month",variant:"minimal"},yAxis:{label:"Performance Score (%)",tickCount:5}})}),i(ie,{items:[{label:"Performance Score",color:"#2272B4",symbol:"line"}],position:"bottom"})]}),parameters:{docs:{description:{story:"Compound component pattern for composing complex chart layouts. Use LineChartContainer, LineChartHeader, and LineChartLegend to create structured chart presentations."}}}},Z={args:{data:q,width:600,height:300,color:"primary",title:"Accessible Line Chart",showTooltip:!0,keyboard:!0,ariaLabel:"Monthly sales data chart showing performance trends over 10 months",xAxis:{label:"Month",tickFormatter:e=>new Date(e).toLocaleDateString("en-US",{month:"short"})},yAxis:{label:"Value",tickFormatter:e=>`${e.toFixed(0)}`}},parameters:{docs:{description:{story:"Enhanced accessibility features including keyboard navigation (Tab to navigate data points), ARIA labels, and screen reader support."}}}},ee={args:{data:Xt,width:1e3,height:600,color:"primary",title:"Large Dataset Performance",variant:"detailed",showTooltip:!0,showPercentageChange:!0,curve:"smooth",showPoints:!0,optimized:!0,xAxis:Wt,yAxis:jt,animation:{enabled:!0,duration:300,easing:"ease-out"}},parameters:{docs:{description:{story:"Large chart with 20 data points demonstrating performance optimization and detailed variant styling. Uses optimized rendering for smooth interactions."}}}},te={render:()=>i(Ut,{series:Kt,width:700,height:450,variant:"default",title:"Multi-Line Chart - Product Sales Comparison",showTooltip:!0,curve:"smooth",xAxis:{label:"Month"},yAxis:{label:"Sales ($)"}}),parameters:{docs:{description:{story:"Multiple lines on the same chart for comparing different data series. Each line represents a different product category with distinct colors and interactive tooltips."}}}},ae={args:{data:[],width:600,height:400,title:"No Data Available"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}};var qe,Me,Re;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    data: timeSeriesData,
    width: 700,
    height: 400,
    title: 'Monthly Revenue Trend',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    xAxis: defaultXAxis,
    yAxis: defaultYAxis
  }
}`,...(Re=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var ze,He,Ee;Y.parameters={...Y.parameters,docs:{...(ze=Y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: timeSeriesData,
    width: 600,
    height: 350,
    color: 'primary',
    title: 'Color Variants',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different color schemes available for the line chart. Use the color control to switch between primary, secondary, success, warning, and error colors.'
      }
    }
  }
}`,...(Ee=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:Ee.source}}};var Ge,Ue,Ie;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    data: timeSeriesData,
    width: 600,
    height: 400,
    variant: 'default',
    title: 'Chart Variants',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds enhanced visual elements. Use the variant control to switch between them.'
      }
    }
  }
}`,...(Ie=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Ie.source}}};var Xe,Ke,Ye;j.parameters={...j.parameters,docs:{...(Xe=j.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    data: timeSeriesData,
    width: 600,
    height: 350,
    curve: 'linear',
    title: 'Curve Types',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after). Use the curve control to switch between them.'
      }
    }
  }
}`,...(Ye=(Ke=j.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var We,je,Be;B.parameters={...B.parameters,docs:{...(We=B.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    width: 700,
    height: 400,
    title: 'Sales Performance (Hover for Details)',
    color: 'primary',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: defaultXAxis,
    yAxis: customFormattingYAxis
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tooltips with percentage change indicators. Hover over data points to see detailed information including value changes from the previous point.'
      }
    }
  }
}`,...(Be=(je=B.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var Oe,Je,Qe;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    width: 600,
    height: 400,
    color: 'success',
    title: 'Revenue Growth (Custom Formatting)',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: defaultXAxis,
    yAxis: customFormattingYAxis,
    formatTooltip: (dataPoint: any) => {
      const date = new Date(dataPoint.x).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });
      const value = \`$\${(dataPoint.y / 1000).toFixed(1)}K\`;
      return \`<div class="db-linechart__tooltip-content">
        <div class="db-linechart__tooltip-date">\${date}</div>
        <div class="db-linechart__tooltip-value">\${value}</div>
      </div>\`;
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom formatting for axis labels and tooltip content. Demonstrates using tickFormatter for axis values and custom tooltip HTML formatting.'
      }
    }
  }
}`,...(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      backgroundColor: '#F6F7F9',
      borderRadius: '12px',
      maxWidth: '850px'
    }}>
        <ChartAggregates data={financialData} formatValue={(value: number) => \`$\${(value / 1000).toFixed(1)}K\`} metrics={[{
        label: 'High',
        value: '$26.3K',
        color: 'success'
      }, {
        label: 'Low',
        value: '$22.5K',
        color: 'warning'
      }, {
        label: 'Avg',
        value: '$24.5K',
        color: 'primary'
      }]} layout="horizontal" />
        <LineChart data={financialData} width={800} height={300} color="primary" title="Financial Dashboard" showTooltip={true} showPercentageChange={true} curve="smooth" xAxis={{
        label: 'Date'
      }} yAxis={{
        label: 'Value ($)',
        tickFormatter: (value: number) => \`$\${(value / 1000).toFixed(1)}K\`
      }} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Combining ChartAggregates with LineChart for a complete dashboard view. Shows key metrics alongside the trend visualization.'
      }
    }
  }
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,rt;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => {
    return <LineChartContainer variant="card">
        <LineChartHeader title="Performance Analytics" subtitle="System performance over the last 10 months" />
        
        <div style={{
        padding: '16px'
      }}>
          <LineChart data={timeSeriesData} width={600} height={300} color="primary" showTooltip={true} curve="smooth" xAxis={{
          label: 'Month',
          variant: 'minimal'
        }} yAxis={{
          label: 'Performance Score (%)',
          tickCount: 5
        }} />
        </div>
        
        <LineChartLegend items={[{
        label: 'Performance Score',
        color: '#2272B4',
        symbol: 'line'
      }]} position="bottom" />
      </LineChartContainer>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Compound component pattern for composing complex chart layouts. Use LineChartContainer, LineChartHeader, and LineChartLegend to create structured chart presentations.'
      }
    }
  }
}`,...(rt=(nt=Q.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var it,ot,st;Z.parameters={...Z.parameters,docs:{...(it=Z.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    data: timeSeriesData,
    width: 600,
    height: 300,
    color: 'primary',
    title: 'Accessible Line Chart',
    showTooltip: true,
    keyboard: true,
    ariaLabel: 'Monthly sales data chart showing performance trends over 10 months',
    xAxis: {
      label: 'Month',
      tickFormatter: (d: any) => new Date(d).toLocaleDateString('en-US', {
        month: 'short'
      })
    },
    yAxis: {
      label: 'Value',
      tickFormatter: (d: number) => \`\${d.toFixed(0)}\`
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Enhanced accessibility features including keyboard navigation (Tab to navigate data points), ARIA labels, and screen reader support.'
      }
    }
  }
}`,...(st=(ot=Z.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var lt,ct,dt;ee.parameters={...ee.parameters,docs:{...(lt=ee.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    data: largeDataset,
    width: 1000,
    height: 600,
    color: 'primary',
    title: 'Large Dataset Performance',
    variant: 'detailed',
    showTooltip: true,
    showPercentageChange: true,
    curve: 'smooth',
    showPoints: true,
    optimized: true,
    xAxis: largeDatasetXAxis,
    yAxis: largeDatasetYAxis,
    animation: {
      enabled: true,
      duration: 300,
      easing: 'ease-out'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large chart with 20 data points demonstrating performance optimization and detailed variant styling. Uses optimized rendering for smooth interactions.'
      }
    }
  }
}`,...(dt=(ct=ee.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,mt,pt;te.parameters={...te.parameters,docs:{...(ut=te.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <MultiLineChart series={multiLineSeries} width={700} height={450} variant="default" title="Multi-Line Chart - Product Sales Comparison" showTooltip={true} curve="smooth" xAxis={{
    label: 'Month'
  }} yAxis={{
    label: 'Sales ($)'
  }} />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple lines on the same chart for comparing different data series. Each line represents a different product category with distinct colors and interactive tooltips.'
      }
    }
  }
}`,...(pt=(mt=te.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ht,yt,gt;ae.parameters={...ae.parameters,docs:{...(ht=ae.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 600,
    height: 400,
    title: 'No Data Available'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is provided to the chart.'
      }
    }
  }
}`,...(gt=(yt=ae.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};const da=["Default","ColorVariants","Variants","CurveTypes","WithTooltips","CustomFormatting","WithAggregates","CompoundComponents","EnhancedAccessibility","LargeDataset","MultipleLines","EmptyState"];export{Y as ColorVariants,Q as CompoundComponents,j as CurveTypes,O as CustomFormatting,K as Default,ae as EmptyState,Z as EnhancedAccessibility,ee as LargeDataset,te as MultipleLines,W as Variants,J as WithAggregates,B as WithTooltips,da as __namedExportsOrder,ca as default};
