import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p,R as $t}from"./index-Dz3UJJSw.js";import{c as x}from"./clsx-B-dksMZM.js";import{f as Te,s as Ft,C as kt,D as Nt}from"./ChartTooltip-BKefWaGn.js";import{t as Pt,c as qt,s as Mt,a as jt}from"./step-BXfuISo5.js";import{e as me,l as Rt,c as Vt}from"./line-BGdQb7_a.js";import{l as Ae,a as Le,b as Se}from"./linear-vjb-cREh.js";import{b as Ht}from"./band-DEvQ1RpF.js";import{p as zt}from"./pointer-Drloq0xg.js";import{M as Et}from"./MultiLineChart-Cw1qmgue.js";import"./_commonjsHelpers-CqkleIqs.js";import"./path-DyVhHtw_.js";import"./ordinal-3zInpISX.js";const Ut=p.createContext(null),z=p.forwardRef(({data:e=[],width:r=600,height:o=400,variant:s="default",color:c="primary",title:y,curve:S="smooth",xAxis:ae,yAxis:k,grid:g,theme:q,animation:fe,responsive:re,showPoints:M=!0,tooltip:n,showTooltip:j=!0,formatTooltip:ne,showPercentageChange:xe=!1,calculatePercentageChange:ie,keyboard:ve=!1,ariaLabel:xt,themeClass:vt,optimized:bt=!1,hoverDebounce:Wt=0,className:be,...oe},we)=>{const E=p.useRef(null),wt=p.useRef(null),[_t,U]=p.useState(!1),[Ct,Dt]=p.useState({x:0,y:0}),[$,G]=p.useState(null),v={show:!0,position:"bottom",variant:s==="minimal"?"minimal":"default",tickCount:s==="detailed"?8:6,...ae},w={show:!0,position:"left",variant:s==="minimal"?"minimal":"default",tickCount:s==="detailed"?8:6,...k},N={show:s!=="minimal",strokeDasharray:s==="detailed"?"1,3":"2,2",opacity:s==="detailed"?.2:.3,...g},se={colorScheme:"auto",cssVars:{"--chart-line-width":s==="detailed"?"3px":"2px","--chart-point-size":s==="detailed"?"6px":"4px"},...q},d=p.useMemo(()=>({enabled:(n==null?void 0:n.enabled)!==void 0?n.enabled:j,component:n==null?void 0:n.component,content:(n==null?void 0:n.content)||ne,style:n==null?void 0:n.style,placement:(n==null?void 0:n.placement)||{placement:"auto",offset:{x:0,y:-10}},className:n==null?void 0:n.className,animationDuration:(n==null?void 0:n.animationDuration)||200,showDelay:(n==null?void 0:n.showDelay)||0,hideDelay:(n==null?void 0:n.hideDelay)||0,...n}),[n,j,ne]),_={top:y?40:20,right:20,bottom:v.label?60:40,left:w.label?80:60},T=r-_.left-_.right,C=o-_.top-_.bottom,{xScale:D,yScale:A,lineGenerator:le}=p.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,lineGenerator:null};const f=e[0].x,m=f instanceof Date,b=typeof f=="number";let i;m?i=Pt().domain(me(e,u=>u.x)).range([0,T]):b?i=Ae().domain(me(e,u=>u.x)).range([0,T]):i=Ht().domain(e.map(u=>u.x)).range([0,T]).padding(.1);const a=Ae().domain(me(e,u=>u.y)).nice().range([C,0]),l=S==="smooth"?qt:S==="step"?Mt:Vt,h=Rt().x(u=>i(u.x)||0).y(u=>a(u.y)||0).curve(l);return{xScale:i,yScale:a,lineGenerator:h}},[e,T,C,S]),R=p.useMemo(()=>{var m;if(v.tickFormatter)return v.tickFormatter;const f=(m=e[0])==null?void 0:m.x;if(f instanceof Date){const b=jt("%b %d");return i=>i instanceof Date?b(i):String(i)}if(typeof f=="number"){const b=Te(".2f");return i=>typeof i=="number"?b(i):String(i)}return b=>String(b)},[e,v.tickFormatter]),V=w.tickFormatter||Te(".2f"),Tt=ne||((f,m)=>{const b=R(f.x),i=V(f.y);let a='<div class="db-linechart__tooltip-content">';if(a+=`<div class="db-linechart__tooltip-date">${b}</div>`,a+=`<div class="db-linechart__tooltip-value">${i}</div>`,xe&&m!==void 0&&m>0){const l=e[m-1];let h=0;ie?h=ie(f,l):h=(f.y-l.y)/l.y*100;const u=h>=0,L=u?"positive":"negative",F=u?"+":"";a+=`<div class="db-linechart__tooltip-change db-linechart__tooltip-change--${L}">`,a+=`${F}${h.toFixed(1)}%`,a+="</div>"}return a+="</div>",a});if(p.useEffect(()=>{if(!E.current||!e.length||!D||!A||!le)return;const f=Ft(E.current);f.selectAll("*").remove();const m=f.append("g").attr("transform",`translate(${_.left},${_.top})`);if(N.show&&(m.append("g").attr("class","db-linechart__grid db-linechart__grid--x").attr("transform",`translate(0,${C})`).call(Le(D).tickSize(-C).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",N.strokeDasharray||"2,2").style("opacity",N.opacity||.3),m.append("g").attr("class","db-linechart__grid db-linechart__grid--y").call(Se(A).tickSize(-T).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",N.strokeDasharray||"2,2").style("opacity",N.opacity||.3)),v.show){const i=m.append("g").attr("class",`db-linechart__axis db-linechart__axis--x db-linechart__axis--${v.variant}`).attr("transform",`translate(0,${C})`),a=Le(D);v.tickCount&&a.ticks(v.tickCount),v.tickFormatter?a.tickFormat((l,h)=>v.tickFormatter(l)):a.tickFormat((l,h)=>R(l)),i.call(a)}if(w.show){const i=m.append("g").attr("class",`db-linechart__axis db-linechart__axis--y db-linechart__axis--${w.variant}`),a=Se(A);w.tickCount&&a.ticks(w.tickCount),w.tickFormatter?a.tickFormat((l,h)=>w.tickFormatter(l)):a.tickFormat((l,h)=>V(l)),i.call(a)}if(m.append("path").datum(e).attr("class",`db-linechart__line db-linechart__line--${c}`).attr("d",le),M){const i=m.selectAll(".db-linechart__point").data(e).enter().append("circle").attr("class",`db-linechart__point db-linechart__point--${c}`).attr("cx",a=>D(a.x)||0).attr("cy",a=>A(a.y)||0).attr("r",s==="detailed"?5:4);ve&&i.attr("tabindex",0).attr("role","button").attr("aria-label",(a,l)=>`Data point ${l+1}: ${R(a.x)}, ${V(a.y)}`).on("focus",function(a,l){const h=e.indexOf(l);if(d.enabled){const u=D(l.x)||0,L=A(l.y)||0;b(l,h,u,L)}}).on("blur",function(){d.enabled&&(U(!1),G(null))})}if(d.enabled){let i=null,a=null;const l=m.append("line").attr("class","db-linechart__vertical-line").attr("y1",0).attr("y2",C).style("opacity",0),h=m.append("circle").attr("class",`db-linechart__hover-circle db-linechart__hover-circle--${c}`).attr("r",6).style("opacity",0);m.append("rect").attr("class","db-linechart__overlay").attr("width",T).attr("height",C).style("fill","none").style("pointer-events","all").on("mousemove",function(u){const[L]=zt(u);let F=e[0],ce=0,_e=Math.abs((D(e[0].x)||0)-L);e.forEach((Ce,Lt)=>{const St=D(Ce.x)||0,De=Math.abs(St-L);De<_e&&(_e=De,F=Ce,ce=Lt)});const H=D(F.x)||0,de=A(F.y)||0;l.style("opacity",1).attr("x1",H).attr("x2",H),h.style("opacity",1).attr("cx",H).attr("cy",de),a&&(clearTimeout(a),a=null),d.showDelay&&d.showDelay>0?(i&&clearTimeout(i),i=window.setTimeout(()=>{b(F,ce,H,de)},d.showDelay)):b(F,ce,H,de)}).on("mouseout",()=>{i&&(clearTimeout(i),i=null),d.hideDelay&&d.hideDelay>0?a=window.setTimeout(()=>{U(!1),G(null)},d.hideDelay):(U(!1),G(null)),l.style("opacity",0),h.style("opacity",0)})}function b(i,a,l,h){const u=l+_.left,L=h+_.top;Dt({x:u,y:L}),G({dataPoint:i,index:a}),U(!0)}v.label&&m.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--x").attr("transform",`translate(${T/2}, ${C+_.bottom-10})`).style("text-anchor","middle").text(v.label),w.label&&m.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-_.left+20).attr("x",0-C/2).style("text-anchor","middle").text(w.label),y&&f.append("text").attr("class","db-linechart__title").attr("x",r/2).attr("y",25).style("text-anchor","middle").text(y)},[e,r,o,D,A,le,N.show,M,d,c,v.label,w.label,y,_,T,C,R,V,Tt,xe,ie]),!e.length)return t.jsx("div",{ref:we,className:x("db-linechart","db-linechart--empty",be),...oe,children:t.jsx("div",{className:"db-linechart__empty-state",children:t.jsx("p",{children:"No data available"})})});const At={data:e,width:r,height:o,color:c,xScale:D,yScale:A,svgRef:E};return t.jsx(Ut.Provider,{value:At,children:t.jsxs("div",{ref:we,className:x("db-linechart",`db-linechart--${s}`,`db-linechart--${c}`,{"db-linechart--optimized":bt,"db-linechart--keyboard":ve},vt,be),"data-theme":se.colorScheme!=="auto"?se.colorScheme:void 0,style:{...se.cssVars,...oe.style||{}},role:"img","aria-label":xt||`Line chart with ${e.length} data points`,...oe,children:[t.jsx("svg",{ref:E,className:"db-linechart__svg",width:r,height:o,role:"presentation","aria-hidden":"true"}),d.enabled&&$&&t.jsx(kt,{visible:_t,position:Ct,tooltipStyle:d.style,placement:d.placement,animationDuration:d.animationDuration,containerDimensions:{width:r,height:o},className:x("db-linechart__tooltip",d.className),role:"tooltip","aria-live":"polite",children:d.component?t.jsx(d.component,{data:$.dataPoint,index:$.index,chartDimensions:{width:r,height:o}}):d.content?t.jsx("div",{dangerouslySetInnerHTML:{__html:d.content($.dataPoint,$.index)}}):t.jsx(Nt,{label:R($.dataPoint.x),value:V($.dataPoint.y),color:`var(--chart-${c})`})}),j&&!d.enabled&&t.jsx("div",{ref:wt,className:"db-linechart__tooltip",role:"tooltip","aria-live":"polite"})]})})});z.displayName="LineChart";z.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},curve:{required:!1,tsType:{name:"union",raw:"'linear' | 'smooth' | 'step'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:"Curve type",defaultValue:{value:"'smooth'",computed:!1}},xAxis:{required:!1,tsType:{name:"LineChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"LineChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"LineChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"LineChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"LineChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"LineChartResponsive"},description:"Responsive configuration"},showPoints:{required:!1,tsType:{name:"boolean"},description:"Show data points on the line",defaultValue:{value:"true",computed:!1}},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"LineChartDataPoint"}],raw:"TooltipConfig<LineChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: LineChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"LineChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showPercentageChange:{required:!1,tsType:{name:"boolean"},description:"Show percentage change in tooltip",defaultValue:{value:"false",computed:!1}},calculatePercentageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_current: LineChartDataPoint, _previous: LineChartDataPoint) => number",signature:{arguments:[{type:{name:"LineChartDataPoint"},name:"_current"},{type:{name:"LineChartDataPoint"},name:"_previous"}],return:{name:"number"}}},description:"Function to calculate percentage change"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const ue=p.forwardRef(({metrics:e,data:r=[],formatValue:o=k=>k.toLocaleString(),layout:s="horizontal",showChange:c=!0,className:y,...S},ae)=>{const k=$t.useMemo(()=>{if(e)return e;if(!r.length)return[];const g=r.map(j=>j.y),q=Math.max(...g),fe=Math.min(...g),re=r[0].y,M=r[r.length-1].y,n=(M-re)/re*100;return[{label:"High",value:o(q),color:"success"},{label:"Low",value:o(fe),color:"error"},{label:"Change",value:o(M),change:n,color:n>=0?"success":"error"}]},[e,r,o]);return k.length?t.jsx("div",{ref:ae,className:x("db-chart-aggregates",`db-chart-aggregates--${s}`,y),...S,children:k.map((g,q)=>t.jsxs("div",{className:x("db-chart-aggregates__metric",g.color&&`db-chart-aggregates__metric--${g.color}`),children:[t.jsxs("div",{className:"db-chart-aggregates__label",children:[g.label,":"]}),t.jsx("div",{className:"db-chart-aggregates__value",children:g.value}),c&&g.change!==void 0&&t.jsxs("div",{className:x("db-chart-aggregates__change",{"db-chart-aggregates__change--positive":g.change>=0,"db-chart-aggregates__change--negative":g.change<0}),children:[g.change>=0?"+":"",g.change.toFixed(2),"%"]})]},q))}):null});ue.displayName="ChartAggregates";ue.__docgenInfo={description:"",methods:[],displayName:"ChartAggregates",props:{metrics:{required:!1,tsType:{name:"Array",elements:[{name:"AggregateMetric"}],raw:"AggregateMetric[]"},description:"Array of metrics to display"},data:{required:!1,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:"Auto-calculate metrics from data",defaultValue:{value:"[]",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: number) => string",signature:{arguments:[{type:{name:"number"},name:"_value"}],return:{name:"string"}}},description:"Format function for values",defaultValue:{value:"(_value: number) => _value.toLocaleString()",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'grid'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'grid'"}]},description:"Layout variant",defaultValue:{value:"'horizontal'",computed:!1}},showChange:{required:!1,tsType:{name:"boolean"},description:"Show change percentages",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const pe=p.forwardRef(({title:e,subtitle:r,className:o,children:s,...c},y)=>t.jsxs("div",{ref:y,className:x("db-linechart__header",o),...c,children:[e&&t.jsx("h3",{className:"db-linechart__title",children:e}),r&&t.jsx("p",{className:"db-linechart__subtitle",children:r}),s]}));pe.displayName="LineChartHeader";const he=p.forwardRef(({items:e=[],position:r="bottom",className:o,...s},c)=>t.jsx("div",{ref:c,className:x("db-linechart__legend",`db-linechart__legend--${r}`,o),...s,children:e.map((y,S)=>t.jsxs("div",{className:"db-linechart__legend-item",children:[t.jsx("div",{className:x("db-linechart__legend-symbol",`db-linechart__legend-symbol--${y.symbol||"line"}`),style:{backgroundColor:y.color}}),t.jsx("span",{className:"db-linechart__legend-label",children:y.label})]},S))}));he.displayName="LineChartLegend";const ut=p.forwardRef(({type:e,className:r,children:o,...s},c)=>t.jsx("div",{ref:c,className:x("db-linechart__axis-container",`db-linechart__axis-container--${e}`,r),...s,children:o}));ut.displayName="LineChartAxis";const pt=p.forwardRef(({formatter:e,variant:r="default",className:o,...s},c)=>t.jsx("div",{ref:c,className:x("db-linechart__tooltip-compound",`db-linechart__tooltip-compound--${r}`,o),...s}));pt.displayName="LineChartTooltip";const ht=p.forwardRef(({type:e="both",strokeDasharray:r,opacity:o,className:s,...c},y)=>t.jsx("div",{ref:y,className:x("db-linechart__grid-compound",`db-linechart__grid-compound--${e}`,s),style:{"--grid-stroke-dasharray":r,"--grid-opacity":o},...c}));ht.displayName="LineChartGrid";const yt=p.forwardRef(({className:e,children:r,...o},s)=>t.jsx("div",{ref:s,className:x("db-linechart__content",e),...o,children:r}));yt.displayName="LineChartContent";const ye=p.forwardRef(({variant:e="default",className:r,children:o,...s},c)=>t.jsx("div",{ref:c,className:x("db-linechart__container",`db-linechart__container--${e}`,r),...s,children:o}));ye.displayName="LineChartContainer";pe.__docgenInfo={description:"",methods:[],displayName:"LineChartHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Header title"},subtitle:{required:!1,tsType:{name:"string"},description:"Header subtitle"}},composes:["HTMLAttributes"]};he.__docgenInfo={description:"",methods:[],displayName:"LineChartLegend",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  color: string;
  symbol?: 'line' | 'circle' | 'square';
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"symbol",value:{name:"union",raw:"'line' | 'circle' | 'square'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1}}]}}],raw:`Array<{
  label: string;
  color: string;
  symbol?: 'line' | 'circle' | 'square';
}>`},description:"Legend items",defaultValue:{value:"[]",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Legend position",defaultValue:{value:"'bottom'",computed:!1}}},composes:["HTMLAttributes"]};ut.__docgenInfo={description:"",methods:[],displayName:"LineChartAxis",props:{type:{required:!0,tsType:{name:"union",raw:"'x' | 'y'",elements:[{name:"literal",value:"'x'"},{name:"literal",value:"'y'"}]},description:"Axis type"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom axis component"}},composes:["HTMLAttributes"]};pt.__docgenInfo={description:"",methods:[],displayName:"LineChartTooltip",props:{formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: any, _index?: number) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom tooltip formatter"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'detailed'"}]},description:"Tooltip variant",defaultValue:{value:"'default'",computed:!1}}},composes:["HTMLAttributes"]};ht.__docgenInfo={description:"",methods:[],displayName:"LineChartGrid",props:{type:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'both'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'both'"}]},description:"Grid type",defaultValue:{value:"'both'",computed:!1}},strokeDasharray:{required:!1,tsType:{name:"string"},description:"Custom grid styling"},opacity:{required:!1,tsType:{name:"number"},description:"Grid opacity"}},composes:["HTMLAttributes"]};yt.__docgenInfo={description:"",methods:[],displayName:"LineChartContent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom render function for chart content"}},composes:["HTMLAttributes"]};ye.__docgenInfo={description:"",methods:[],displayName:"LineChartContainer",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'card' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'card'"},{name:"literal",value:"'minimal'"}]},description:"Container variant",defaultValue:{value:"'default'",computed:!1}}},composes:["HTMLAttributes"]};const la={title:"Data Display/LineChart",component:z,parameters:{layout:"centered",docs:{description:{component:"A modern line chart component built with D3.js for visualizing time series and continuous data. Supports multiple variants, curve types, interactive tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x (date/number/string) and y (number) values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the line and points"},curve:{control:"radio",options:["linear","smooth","step"],description:"Line curve interpolation type"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},showPercentageChange:{control:"boolean",description:"Show percentage change in tooltips"},title:{control:"text",description:"Chart title"}}},P=[{x:new Date("2024-01-01"),y:45},{x:new Date("2024-02-01"),y:52},{x:new Date("2024-03-01"),y:48},{x:new Date("2024-04-01"),y:61},{x:new Date("2024-05-01"),y:55},{x:new Date("2024-06-01"),y:67},{x:new Date("2024-07-01"),y:59},{x:new Date("2024-08-01"),y:73},{x:new Date("2024-09-01"),y:69},{x:new Date("2024-10-01"),y:77}],gt=[{x:new Date("2024-01-01"),y:2250},{x:new Date("2024-02-01"),y:2180},{x:new Date("2024-03-01"),y:2420},{x:new Date("2024-04-01"),y:2680},{x:new Date("2024-05-01"),y:2890},{x:new Date("2024-06-01"),y:3100},{x:new Date("2024-07-01"),y:2950},{x:new Date("2024-08-01"),y:3200},{x:new Date("2024-09-01"),y:3400}],$e=[{x:new Date("2024-01-01"),y:22500},{x:new Date("2024-01-15"),y:24200},{x:new Date("2024-02-01"),y:23800},{x:new Date("2024-02-15"),y:25100},{x:new Date("2024-03-01"),y:24850},{x:new Date("2024-03-15"),y:26300},{x:new Date("2024-03-30"),y:24847.83}],Gt=Array.from({length:20},(e,r)=>({x:new Date(Date.UTC(2024,0,1+r*30)),y:Math.round((Math.sin(r*.5)*20+50+Math.random()*10)*100)/100})),It=[{id:"product1",name:"Product A",color:"primary",data:[{x:new Date("2024-01-01"),y:2400},{x:new Date("2024-02-01"),y:1398},{x:new Date("2024-03-01"),y:2800},{x:new Date("2024-04-01"),y:3908},{x:new Date("2024-05-01"),y:4800}]},{id:"product2",name:"Product B",color:"secondary",data:[{x:new Date("2024-01-01"),y:1500},{x:new Date("2024-02-01"),y:2e3},{x:new Date("2024-03-01"),y:1800},{x:new Date("2024-04-01"),y:2500},{x:new Date("2024-05-01"),y:2200}]},{id:"product3",name:"Product C",color:"success",data:[{x:new Date("2024-01-01"),y:800},{x:new Date("2024-02-01"),y:1200},{x:new Date("2024-03-01"),y:1e3},{x:new Date("2024-04-01"),y:1500},{x:new Date("2024-05-01"),y:900}]}],ge={label:"Month"},Xt={label:"Revenue ($K)"},ft={label:"Sales ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`},Kt={label:"Time Series",variant:"detailed",tickCount:8},Yt={label:"Value Metrics",variant:"detailed",tickCount:8},I={args:{data:P,width:700,height:400,title:"Monthly Revenue Trend",color:"primary",curve:"smooth",showTooltip:!0,xAxis:ge,yAxis:Xt}},X={args:{data:P,width:600,height:350,color:"primary",title:"Color Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different color schemes available for the line chart. Use the color control to switch between primary, secondary, success, warning, and error colors."}}}},K={args:{data:P,width:600,height:400,variant:"default",title:"Chart Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds enhanced visual elements. Use the variant control to switch between them."}}}},Y={args:{data:P,width:600,height:350,curve:"linear",title:"Curve Types",showTooltip:!0},parameters:{docs:{description:{story:"Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after). Use the curve control to switch between them."}}}},W={args:{data:gt,width:700,height:400,title:"Sales Performance (Hover for Details)",color:"primary",curve:"smooth",showTooltip:!0,showPercentageChange:!0,xAxis:ge,yAxis:ft},parameters:{docs:{description:{story:"Interactive tooltips with percentage change indicators. Hover over data points to see detailed information including value changes from the previous point."}}}},B={args:{data:gt,width:600,height:400,color:"success",title:"Revenue Growth (Custom Formatting)",showTooltip:!0,showPercentageChange:!0,xAxis:ge,yAxis:ft,formatTooltip:e=>{const r=new Date(e.x).toLocaleDateString("en-US",{month:"short",year:"numeric"}),o=`$${(e.y/1e3).toFixed(1)}K`;return`<div class="db-linechart__tooltip-content">
        <div class="db-linechart__tooltip-date">${r}</div>
        <div class="db-linechart__tooltip-value">${o}</div>
      </div>`}},parameters:{docs:{description:{story:"Custom formatting for axis labels and tooltip content. Demonstrates using tickFormatter for axis values and custom tooltip HTML formatting."}}}},O={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",backgroundColor:"#F6F7F9",borderRadius:"12px",maxWidth:"850px"},children:[t.jsx(ue,{data:$e,formatValue:e=>`$${(e/1e3).toFixed(1)}K`,metrics:[{label:"High",value:"$26.3K",color:"success"},{label:"Low",value:"$22.5K",color:"warning"},{label:"Avg",value:"$24.5K",color:"primary"}],layout:"horizontal"}),t.jsx(z,{data:$e,width:800,height:300,color:"primary",title:"Financial Dashboard",showTooltip:!0,showPercentageChange:!0,curve:"smooth",xAxis:{label:"Date"},yAxis:{label:"Value ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`}})]}),parameters:{docs:{description:{story:"Combining ChartAggregates with LineChart for a complete dashboard view. Shows key metrics alongside the trend visualization."}}}},J={render:()=>t.jsxs(ye,{variant:"card",children:[t.jsx(pe,{title:"Performance Analytics",subtitle:"System performance over the last 10 months"}),t.jsx("div",{style:{padding:"16px"},children:t.jsx(z,{data:P,width:600,height:300,color:"primary",showTooltip:!0,curve:"smooth",xAxis:{label:"Month",variant:"minimal"},yAxis:{label:"Performance Score (%)",tickCount:5}})}),t.jsx(he,{items:[{label:"Performance Score",color:"#2272B4",symbol:"line"}],position:"bottom"})]}),parameters:{docs:{description:{story:"Compound component pattern for composing complex chart layouts. Use LineChartContainer, LineChartHeader, and LineChartLegend to create structured chart presentations."}}}},Q={args:{data:P,width:600,height:300,color:"primary",title:"Accessible Line Chart",showTooltip:!0,keyboard:!0,ariaLabel:"Monthly sales data chart showing performance trends over 10 months",xAxis:{label:"Month",tickFormatter:e=>new Date(e).toLocaleDateString("en-US",{month:"short"})},yAxis:{label:"Value",tickFormatter:e=>`${e.toFixed(0)}`}},parameters:{docs:{description:{story:"Enhanced accessibility features including keyboard navigation (Tab to navigate data points), ARIA labels, and screen reader support."}}}},Z={args:{data:Gt,width:1e3,height:600,color:"primary",title:"Large Dataset Performance",variant:"detailed",showTooltip:!0,showPercentageChange:!0,curve:"smooth",showPoints:!0,optimized:!0,xAxis:Kt,yAxis:Yt,animation:{enabled:!0,duration:300,easing:"ease-out"}},parameters:{docs:{description:{story:"Large chart with 20 data points demonstrating performance optimization and detailed variant styling. Uses optimized rendering for smooth interactions."}}}},ee={render:()=>t.jsx(Et,{series:It,width:700,height:450,variant:"default",title:"Multi-Line Chart - Product Sales Comparison",showTooltip:!0,curve:"smooth",xAxis:{label:"Month"},yAxis:{label:"Sales ($)"}}),parameters:{docs:{description:{story:"Multiple lines on the same chart for comparing different data series. Each line represents a different product category with distinct colors and interactive tooltips."}}}},te={args:{data:[],width:600,height:400,title:"No Data Available"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}};var Fe,ke,Ne;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ne=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Pe,qe,Me;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(qe=X.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var je,Re,Ve;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ve=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var He,ze,Ee;Y.parameters={...Y.parameters,docs:{...(He=Y.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ee=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var Ue,Ge,Ie;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ie=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Ie.source}}};var Xe,Ke,Ye;B.parameters={...B.parameters,docs:{...(Xe=B.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ye=(Ke=B.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var We,Be,Oe;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Oe=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Je,Qe,Ze;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=J.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,at;Q.parameters={...Q.parameters,docs:{...(et=Q.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=Q.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,nt,it;Z.parameters={...Z.parameters,docs:{...(rt=Z.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(nt=Z.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var ot,st,lt;ee.parameters={...ee.parameters,docs:{...(ot=ee.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(lt=(st=ee.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,dt,mt;te.parameters={...te.parameters,docs:{...(ct=te.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(mt=(dt=te.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};const ca=["Default","ColorVariants","Variants","CurveTypes","WithTooltips","CustomFormatting","WithAggregates","CompoundComponents","EnhancedAccessibility","LargeDataset","MultipleLines","EmptyState"];export{X as ColorVariants,J as CompoundComponents,Y as CurveTypes,B as CustomFormatting,I as Default,te as EmptyState,Q as EnhancedAccessibility,Z as LargeDataset,ee as MultipleLines,K as Variants,O as WithAggregates,W as WithTooltips,ca as __namedExportsOrder,la as default};
