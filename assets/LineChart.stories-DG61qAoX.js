import{j as t}from"./jsx-runtime-LnmZrwv1.js";import{r as d,R as $t}from"./index-CWnxZbJP.js";import{c as b}from"./clsx-B-dksMZM.js";import{f as Te,s as kt,C as Ft,D as Nt}from"./ChartTooltip-DGQGfrCB.js";import{t as Pt,c as qt,s as Mt,a as jt}from"./step-CBO2jjIH.js";import{e as pe,l as Rt,c as Vt}from"./line-D7-gsV7M.js";import{l as Ae,a as Le,b as Se}from"./linear-DS12kqSE.js";import{b as Ht}from"./band-BpA5gmKc.js";import{p as zt}from"./pointer-Drloq0xg.js";import{M as Et}from"./MultiLineChart-CW2_Pn4U.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./path-DyVhHtw_.js";import"./ordinal-CHtbxqiZ.js";const Ut=d.createContext(null),z=d.forwardRef(({data:e=[],width:r=600,height:s=400,variant:o="default",color:c="primary",title:f,curve:$="smooth",xAxis:ne,yAxis:N,grid:x,theme:j,animation:ve,responsive:ie,showPoints:R=!0,tooltip:n,showTooltip:V=!0,formatTooltip:E,showPercentageChange:oe=!1,calculatePercentageChange:U,keyboard:se=!1,ariaLabel:xt,themeClass:vt,optimized:bt=!1,hoverDebounce:Wt=0,className:be,...le},we)=>{const G=d.useRef(null),wt=d.useRef(null),[_t,I]=d.useState(!1),[Ct,Dt]=d.useState({x:0,y:0}),[k,X]=d.useState(null),h={show:!0,position:"bottom",variant:o==="minimal"?"minimal":"default",tickCount:o==="detailed"?8:6,...ne},g={show:!0,position:"left",variant:o==="minimal"?"minimal":"default",tickCount:o==="detailed"?8:6,...N},T={show:o!=="minimal",strokeDasharray:o==="detailed"?"1,3":"2,2",opacity:o==="detailed"?.2:.3,...x},ce={colorScheme:"auto",cssVars:{"--chart-line-width":o==="detailed"?"3px":"2px","--chart-point-size":o==="detailed"?"6px":"4px"},...j},m=d.useMemo(()=>({enabled:(n==null?void 0:n.enabled)!==void 0?n.enabled:V,component:n==null?void 0:n.component,content:(n==null?void 0:n.content)||E,style:n==null?void 0:n.style,placement:(n==null?void 0:n.placement)||{placement:"auto",offset:{x:0,y:-10}},className:n==null?void 0:n.className,animationDuration:(n==null?void 0:n.animationDuration)||200,showDelay:(n==null?void 0:n.showDelay)||0,hideDelay:(n==null?void 0:n.hideDelay)||0,...n}),[n,V,E]),_=d.useMemo(()=>({top:f?40:20,right:20,bottom:h.label?60:40,left:g.label?80:60}),[f,h.label,g.label]),A=r-_.left-_.right,C=s-_.top-_.bottom,{xScale:D,yScale:L,lineGenerator:de}=d.useMemo(()=>{if(!e.length)return{xScale:null,yScale:null,lineGenerator:null};const v=e[0].x,u=v instanceof Date,w=typeof v=="number";let i;u?i=Pt().domain(pe(e,p=>p.x)).range([0,A]):w?i=Ae().domain(pe(e,p=>p.x)).range([0,A]):i=Ht().domain(e.map(p=>p.x)).range([0,A]).padding(.1);const a=Ae().domain(pe(e,p=>p.y)).nice().range([C,0]),l=$==="smooth"?qt:$==="step"?Mt:Vt,y=Rt().x(p=>i(p.x)||0).y(p=>a(p.y)||0).curve(l);return{xScale:i,yScale:a,lineGenerator:y}},[e,A,C,$]),P=d.useMemo(()=>{var u;if(h.tickFormatter)return h.tickFormatter;const v=(u=e[0])==null?void 0:u.x;if(v instanceof Date){const w=jt("%b %d");return i=>i instanceof Date?w(i):String(i)}if(typeof v=="number"){const w=Te(".2f");return i=>typeof i=="number"?w(i):String(i)}return w=>String(w)},[e,h.tickFormatter]),q=g.tickFormatter||Te(".2f"),Tt=d.useMemo(()=>E||((v,u)=>{const w=P(v.x),i=q(v.y);let a='<div class="db-linechart__tooltip-content">';if(a+=`<div class="db-linechart__tooltip-date">${w}</div>`,a+=`<div class="db-linechart__tooltip-value">${i}</div>`,oe&&u!==void 0&&u>0){const l=e[u-1];let y=0;U?y=U(v,l):y=(v.y-l.y)/l.y*100;const p=y>=0,S=p?"positive":"negative",F=p?"+":"";a+=`<div class="db-linechart__tooltip-change db-linechart__tooltip-change--${S}">`,a+=`${F}${y.toFixed(1)}%`,a+="</div>"}return a+="</div>",a}),[E,P,q,oe,U,e]);if(d.useEffect(()=>{if(!G.current||!e.length||!D||!L||!de)return;const v=kt(G.current);v.selectAll("*").remove();const u=v.append("g").attr("transform",`translate(${_.left},${_.top})`);if(T.show&&(u.append("g").attr("class","db-linechart__grid db-linechart__grid--x").attr("transform",`translate(0,${C})`).call(Le(D).tickSize(-C).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",T.strokeDasharray||"2,2").style("opacity",T.opacity||.3),u.append("g").attr("class","db-linechart__grid db-linechart__grid--y").call(Se(L).tickSize(-A).tickFormat(()=>"")).selectAll("line").style("stroke-dasharray",T.strokeDasharray||"2,2").style("opacity",T.opacity||.3)),h.show){const i=u.append("g").attr("class",`db-linechart__axis db-linechart__axis--x db-linechart__axis--${h.variant}`).attr("transform",`translate(0,${C})`),a=Le(D);h.tickCount&&a.ticks(h.tickCount),h.tickFormatter?a.tickFormat((l,y)=>h.tickFormatter(l)):a.tickFormat((l,y)=>P(l)),i.call(a)}if(g.show){const i=u.append("g").attr("class",`db-linechart__axis db-linechart__axis--y db-linechart__axis--${g.variant}`),a=Se(L);g.tickCount&&a.ticks(g.tickCount),g.tickFormatter?a.tickFormat((l,y)=>g.tickFormatter(l)):a.tickFormat((l,y)=>q(l)),i.call(a)}if(u.append("path").datum(e).attr("class",`db-linechart__line db-linechart__line--${c}`).attr("d",de),R){const i=u.selectAll(".db-linechart__point").data(e).enter().append("circle").attr("class",`db-linechart__point db-linechart__point--${c}`).attr("cx",a=>D(a.x)||0).attr("cy",a=>L(a.y)||0).attr("r",o==="detailed"?5:4);se&&i.attr("tabindex",0).attr("role","button").attr("aria-label",(a,l)=>`Data point ${l+1}: ${P(a.x)}, ${q(a.y)}`).on("focus",function(a,l){const y=e.indexOf(l);if(m.enabled){const p=D(l.x)||0,S=L(l.y)||0;w(l,y,p,S)}}).on("blur",function(){m.enabled&&(I(!1),X(null))})}if(m.enabled){let i=null,a=null;const l=u.append("line").attr("class","db-linechart__vertical-line").attr("y1",0).attr("y2",C).style("opacity",0),y=u.append("circle").attr("class",`db-linechart__hover-circle db-linechart__hover-circle--${c}`).attr("r",6).style("opacity",0);u.append("rect").attr("class","db-linechart__overlay").attr("width",A).attr("height",C).style("fill","none").style("pointer-events","all").on("mousemove",function(p){const[S]=zt(p);let F=e[0],me=0,_e=Math.abs((D(e[0].x)||0)-S);e.forEach((Ce,Lt)=>{const St=D(Ce.x)||0,De=Math.abs(St-S);De<_e&&(_e=De,F=Ce,me=Lt)});const H=D(F.x)||0,ue=L(F.y)||0;l.style("opacity",1).attr("x1",H).attr("x2",H),y.style("opacity",1).attr("cx",H).attr("cy",ue),a&&(clearTimeout(a),a=null),m.showDelay&&m.showDelay>0?(i&&clearTimeout(i),i=window.setTimeout(()=>{w(F,me,H,ue)},m.showDelay)):w(F,me,H,ue)}).on("mouseout",()=>{i&&(clearTimeout(i),i=null),m.hideDelay&&m.hideDelay>0?a=window.setTimeout(()=>{I(!1),X(null)},m.hideDelay):(I(!1),X(null)),l.style("opacity",0),y.style("opacity",0)})}function w(i,a,l,y){const p=l+_.left,S=y+_.top;Dt({x:p,y:S}),X({dataPoint:i,index:a}),I(!0)}h.label&&u.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--x").attr("transform",`translate(${A/2}, ${C+_.bottom-10})`).style("text-anchor","middle").text(h.label),g.label&&u.append("text").attr("class","db-linechart__axis-label db-linechart__axis-label--y").attr("transform","rotate(-90)").attr("y",0-_.left+20).attr("x",0-C/2).style("text-anchor","middle").text(g.label),f&&v.append("text").attr("class","db-linechart__title").attr("x",r/2).attr("y",25).style("text-anchor","middle").text(f)},[e,r,s,D,L,de,T.show,R,m,c,h.label,g.label,f,_,A,C,P,q,Tt,oe,U,se,T.opacity,T.strokeDasharray,h.show,h.tickCount,h.tickFormatter,h.variant,g.show,g.tickCount,g.tickFormatter,g.variant,o]),!e.length)return t.jsx("div",{ref:we,className:b("db-linechart","db-linechart--empty",be),...le,children:t.jsx("div",{className:"db-linechart__empty-state",children:t.jsx("p",{children:"No data available"})})});const At={data:e,width:r,height:s,color:c,xScale:D,yScale:L,svgRef:G};return t.jsx(Ut.Provider,{value:At,children:t.jsxs("div",{ref:we,className:b("db-linechart",`db-linechart--${o}`,`db-linechart--${c}`,{"db-linechart--optimized":bt,"db-linechart--keyboard":se},vt,be),"data-theme":ce.colorScheme!=="auto"?ce.colorScheme:void 0,style:{...ce.cssVars,...le.style||{}},role:"img","aria-label":xt||`Line chart with ${e.length} data points`,...le,children:[t.jsx("svg",{ref:G,className:"db-linechart__svg",width:r,height:s,role:"presentation","aria-hidden":"true"}),m.enabled&&k&&t.jsx(Ft,{visible:_t,position:Ct,tooltipStyle:m.style,placement:m.placement,animationDuration:m.animationDuration,containerDimensions:{width:r,height:s},className:b("db-linechart__tooltip",m.className),role:"tooltip","aria-live":"polite",children:m.component?t.jsx(m.component,{data:k.dataPoint,index:k.index,chartDimensions:{width:r,height:s}}):m.content?t.jsx("div",{dangerouslySetInnerHTML:{__html:m.content(k.dataPoint,k.index)}}):t.jsx(Nt,{label:P(k.dataPoint.x),value:q(k.dataPoint.y),color:`var(--chart-${c})`})}),V&&!m.enabled&&t.jsx("div",{ref:wt,className:"db-linechart__tooltip",role:"tooltip","aria-live":"polite"})]})})});z.displayName="LineChart";z.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"600",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Color scheme",defaultValue:{value:"'primary'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},curve:{required:!1,tsType:{name:"union",raw:"'linear' | 'smooth' | 'step'",elements:[{name:"literal",value:"'linear'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:"Curve type",defaultValue:{value:"'smooth'",computed:!1}},xAxis:{required:!1,tsType:{name:"LineChartAxis"},description:"X-axis configuration"},yAxis:{required:!1,tsType:{name:"LineChartAxis"},description:"Y-axis configuration"},grid:{required:!1,tsType:{name:"LineChartGrid"},description:"Grid configuration"},theme:{required:!1,tsType:{name:"LineChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"LineChartAnimation"},description:"Animation configuration"},responsive:{required:!1,tsType:{name:"LineChartResponsive"},description:"Responsive configuration"},showPoints:{required:!1,tsType:{name:"boolean"},description:"Show data points on the line",defaultValue:{value:"true",computed:!1}},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"LineChartDataPoint"}],raw:"TooltipConfig<LineChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: LineChartDataPoint, _index?: number) => string",signature:{arguments:[{type:{name:"LineChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showPercentageChange:{required:!1,tsType:{name:"boolean"},description:"Show percentage change in tooltip",defaultValue:{value:"false",computed:!1}},calculatePercentageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(_current: LineChartDataPoint, _previous: LineChartDataPoint) => number",signature:{arguments:[{type:{name:"LineChartDataPoint"},name:"_current"},{type:{name:"LineChartDataPoint"},name:"_previous"}],return:{name:"number"}}},description:"Function to calculate percentage change"},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}}},composes:["Omit"]};const he=d.forwardRef(({metrics:e,data:r=[],formatValue:s=N=>N.toLocaleString(),layout:o="horizontal",showChange:c=!0,className:f,...$},ne)=>{const N=$t.useMemo(()=>{if(e)return e;if(!r.length)return[];const x=r.map(V=>V.y),j=Math.max(...x),ve=Math.min(...x),ie=r[0].y,R=r[r.length-1].y,n=(R-ie)/ie*100;return[{label:"High",value:s(j),color:"success"},{label:"Low",value:s(ve),color:"error"},{label:"Change",value:s(R),change:n,color:n>=0?"success":"error"}]},[e,r,s]);return N.length?t.jsx("div",{ref:ne,className:b("db-chart-aggregates",`db-chart-aggregates--${o}`,f),...$,children:N.map((x,j)=>t.jsxs("div",{className:b("db-chart-aggregates__metric",x.color&&`db-chart-aggregates__metric--${x.color}`),children:[t.jsxs("div",{className:"db-chart-aggregates__label",children:[x.label,":"]}),t.jsx("div",{className:"db-chart-aggregates__value",children:x.value}),c&&x.change!==void 0&&t.jsxs("div",{className:b("db-chart-aggregates__change",{"db-chart-aggregates__change--positive":x.change>=0,"db-chart-aggregates__change--negative":x.change<0}),children:[x.change>=0?"+":"",x.change.toFixed(2),"%"]})]},j))}):null});he.displayName="ChartAggregates";he.__docgenInfo={description:"",methods:[],displayName:"ChartAggregates",props:{metrics:{required:!1,tsType:{name:"Array",elements:[{name:"AggregateMetric"}],raw:"AggregateMetric[]"},description:"Array of metrics to display"},data:{required:!1,tsType:{name:"Array",elements:[{name:"LineChartDataPoint"}],raw:"LineChartDataPoint[]"},description:"Auto-calculate metrics from data",defaultValue:{value:"[]",computed:!1}},formatValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(_value: number) => string",signature:{arguments:[{type:{name:"number"},name:"_value"}],return:{name:"string"}}},description:"Format function for values",defaultValue:{value:"(value: number) => value.toLocaleString()",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'grid'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'grid'"}]},description:"Layout variant",defaultValue:{value:"'horizontal'",computed:!1}},showChange:{required:!1,tsType:{name:"boolean"},description:"Show change percentages",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes"]};const ye=d.forwardRef(({title:e,subtitle:r,className:s,children:o,...c},f)=>t.jsxs("div",{ref:f,className:b("db-linechart__header",s),...c,children:[e&&t.jsx("h3",{className:"db-linechart__title",children:e}),r&&t.jsx("p",{className:"db-linechart__subtitle",children:r}),o]}));ye.displayName="LineChartHeader";const ge=d.forwardRef(({items:e=[],position:r="bottom",className:s,...o},c)=>t.jsx("div",{ref:c,className:b("db-linechart__legend",`db-linechart__legend--${r}`,s),...o,children:e.map((f,$)=>t.jsxs("div",{className:"db-linechart__legend-item",children:[t.jsx("div",{className:b("db-linechart__legend-symbol",`db-linechart__legend-symbol--${f.symbol||"line"}`),style:{backgroundColor:f.color}}),t.jsx("span",{className:"db-linechart__legend-label",children:f.label})]},$))}));ge.displayName="LineChartLegend";const ut=d.forwardRef(({type:e,className:r,children:s,...o},c)=>t.jsx("div",{ref:c,className:b("db-linechart__axis-container",`db-linechart__axis-container--${e}`,r),...o,children:s}));ut.displayName="LineChartAxis";const pt=d.forwardRef(({formatter:e,variant:r="default",className:s,...o},c)=>t.jsx("div",{ref:c,className:b("db-linechart__tooltip-compound",`db-linechart__tooltip-compound--${r}`,s),...o}));pt.displayName="LineChartTooltip";const ht=d.forwardRef(({type:e="both",strokeDasharray:r,opacity:s,className:o,...c},f)=>t.jsx("div",{ref:f,className:b("db-linechart__grid-compound",`db-linechart__grid-compound--${e}`,o),style:{"--grid-stroke-dasharray":r,"--grid-opacity":s},...c}));ht.displayName="LineChartGrid";const yt=d.forwardRef(({className:e,children:r,...s},o)=>t.jsx("div",{ref:o,className:b("db-linechart__content",e),...s,children:r}));yt.displayName="LineChartContent";const fe=d.forwardRef(({variant:e="default",className:r,children:s,...o},c)=>t.jsx("div",{ref:c,className:b("db-linechart__container",`db-linechart__container--${e}`,r),...o,children:s}));fe.displayName="LineChartContainer";ye.__docgenInfo={description:"",methods:[],displayName:"LineChartHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Header title"},subtitle:{required:!1,tsType:{name:"string"},description:"Header subtitle"}},composes:["HTMLAttributes"]};ge.__docgenInfo={description:"",methods:[],displayName:"LineChartLegend",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  color: string;
  symbol?: 'line' | 'circle' | 'square';
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"symbol",value:{name:"union",raw:"'line' | 'circle' | 'square'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}],required:!1}}]}}],raw:`Array<{
  label: string;
  color: string;
  symbol?: 'line' | 'circle' | 'square';
}>`},description:"Legend items",defaultValue:{value:"[]",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Legend position",defaultValue:{value:"'bottom'",computed:!1}}},composes:["HTMLAttributes"]};ut.__docgenInfo={description:"",methods:[],displayName:"LineChartAxis",props:{type:{required:!0,tsType:{name:"union",raw:"'x' | 'y'",elements:[{name:"literal",value:"'x'"},{name:"literal",value:"'y'"}]},description:"Axis type"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom axis component"}},composes:["HTMLAttributes"]};pt.__docgenInfo={description:"",methods:[],displayName:"LineChartTooltip",props:{formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: any, _index?: number) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"_dataPoint"},{type:{name:"number"},name:"_index"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:"Custom tooltip formatter"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'detailed'"}]},description:"Tooltip variant",defaultValue:{value:"'default'",computed:!1}}},composes:["HTMLAttributes"]};ht.__docgenInfo={description:"",methods:[],displayName:"LineChartGrid",props:{type:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'both'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'both'"}]},description:"Grid type",defaultValue:{value:"'both'",computed:!1}},strokeDasharray:{required:!1,tsType:{name:"string"},description:"Custom grid styling"},opacity:{required:!1,tsType:{name:"number"},description:"Grid opacity"}},composes:["HTMLAttributes"]};yt.__docgenInfo={description:"",methods:[],displayName:"LineChartContent",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom render function for chart content"}},composes:["HTMLAttributes"]};fe.__docgenInfo={description:"",methods:[],displayName:"LineChartContainer",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'card' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'card'"},{name:"literal",value:"'minimal'"}]},description:"Container variant",defaultValue:{value:"'default'",computed:!1}}},composes:["HTMLAttributes"]};const ca={title:"Data Display/LineChart",component:z,parameters:{layout:"centered",docs:{description:{component:"A modern line chart component built with D3.js for visualizing time series and continuous data. Supports multiple variants, curve types, interactive tooltips, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with x (date/number/string) and y (number) values"},width:{control:{type:"range",min:200,max:1200,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:150,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},color:{control:"radio",options:["primary","secondary","success","warning","error"],description:"Color scheme for the line and points"},curve:{control:"radio",options:["linear","smooth","step"],description:"Line curve interpolation type"},showPoints:{control:"boolean",description:"Show data points on the line"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},showPercentageChange:{control:"boolean",description:"Show percentage change in tooltips"},title:{control:"text",description:"Chart title"}}},M=[{x:new Date("2024-01-01"),y:45},{x:new Date("2024-02-01"),y:52},{x:new Date("2024-03-01"),y:48},{x:new Date("2024-04-01"),y:61},{x:new Date("2024-05-01"),y:55},{x:new Date("2024-06-01"),y:67},{x:new Date("2024-07-01"),y:59},{x:new Date("2024-08-01"),y:73},{x:new Date("2024-09-01"),y:69},{x:new Date("2024-10-01"),y:77}],gt=[{x:new Date("2024-01-01"),y:2250},{x:new Date("2024-02-01"),y:2180},{x:new Date("2024-03-01"),y:2420},{x:new Date("2024-04-01"),y:2680},{x:new Date("2024-05-01"),y:2890},{x:new Date("2024-06-01"),y:3100},{x:new Date("2024-07-01"),y:2950},{x:new Date("2024-08-01"),y:3200},{x:new Date("2024-09-01"),y:3400}],$e=[{x:new Date("2024-01-01"),y:22500},{x:new Date("2024-01-15"),y:24200},{x:new Date("2024-02-01"),y:23800},{x:new Date("2024-02-15"),y:25100},{x:new Date("2024-03-01"),y:24850},{x:new Date("2024-03-15"),y:26300},{x:new Date("2024-03-30"),y:24847.83}],Gt=Array.from({length:20},(e,r)=>({x:new Date(Date.UTC(2024,0,1+r*30)),y:Math.round((Math.sin(r*.5)*20+50+Math.random()*10)*100)/100})),It=[{id:"product1",name:"Product A",color:"primary",data:[{x:new Date("2024-01-01"),y:2400},{x:new Date("2024-02-01"),y:1398},{x:new Date("2024-03-01"),y:2800},{x:new Date("2024-04-01"),y:3908},{x:new Date("2024-05-01"),y:4800}]},{id:"product2",name:"Product B",color:"secondary",data:[{x:new Date("2024-01-01"),y:1500},{x:new Date("2024-02-01"),y:2e3},{x:new Date("2024-03-01"),y:1800},{x:new Date("2024-04-01"),y:2500},{x:new Date("2024-05-01"),y:2200}]},{id:"product3",name:"Product C",color:"success",data:[{x:new Date("2024-01-01"),y:800},{x:new Date("2024-02-01"),y:1200},{x:new Date("2024-03-01"),y:1e3},{x:new Date("2024-04-01"),y:1500},{x:new Date("2024-05-01"),y:900}]}],xe={label:"Month"},Xt={label:"Revenue ($K)"},ft={label:"Sales ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`},Kt={label:"Time Series",variant:"detailed",tickCount:8},Yt={label:"Value Metrics",variant:"detailed",tickCount:8},K={args:{data:M,width:700,height:400,title:"Monthly Revenue Trend",color:"primary",curve:"smooth",showTooltip:!0,xAxis:xe,yAxis:Xt}},Y={args:{data:M,width:600,height:350,color:"primary",title:"Color Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different color schemes available for the line chart. Use the color control to switch between primary, secondary, success, warning, and error colors."}}}},W={args:{data:M,width:600,height:400,variant:"default",title:"Chart Variants",showTooltip:!0},parameters:{docs:{description:{story:"Different visual variants: default shows grids and full styling, minimal removes grids and simplifies axes, detailed adds enhanced visual elements. Use the variant control to switch between them."}}}},B={args:{data:M,width:600,height:350,curve:"linear",title:"Curve Types",showTooltip:!0},parameters:{docs:{description:{story:"Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after). Use the curve control to switch between them."}}}},O={args:{data:gt,width:700,height:400,title:"Sales Performance (Hover for Details)",color:"primary",curve:"smooth",showTooltip:!0,showPercentageChange:!0,xAxis:xe,yAxis:ft},parameters:{docs:{description:{story:"Interactive tooltips with percentage change indicators. Hover over data points to see detailed information including value changes from the previous point."}}}},J={args:{data:gt,width:600,height:400,color:"success",title:"Revenue Growth (Custom Formatting)",showTooltip:!0,showPercentageChange:!0,xAxis:xe,yAxis:ft,formatTooltip:e=>{const r=new Date(e.x).toLocaleDateString("en-US",{month:"short",year:"numeric"}),s=`$${(e.y/1e3).toFixed(1)}K`;return`<div class="db-linechart__tooltip-content">
        <div class="db-linechart__tooltip-date">${r}</div>
        <div class="db-linechart__tooltip-value">${s}</div>
      </div>`}},parameters:{docs:{description:{story:"Custom formatting for axis labels and tooltip content. Demonstrates using tickFormatter for axis values and custom tooltip HTML formatting."}}}},Q={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",backgroundColor:"#F6F7F9",borderRadius:"12px",maxWidth:"850px"},children:[t.jsx(he,{data:$e,formatValue:e=>`$${(e/1e3).toFixed(1)}K`,metrics:[{label:"High",value:"$26.3K",color:"success"},{label:"Low",value:"$22.5K",color:"warning"},{label:"Avg",value:"$24.5K",color:"primary"}],layout:"horizontal"}),t.jsx(z,{data:$e,width:800,height:300,color:"primary",title:"Financial Dashboard",showTooltip:!0,showPercentageChange:!0,curve:"smooth",xAxis:{label:"Date"},yAxis:{label:"Value ($)",tickFormatter:e=>`$${(e/1e3).toFixed(1)}K`}})]}),parameters:{docs:{description:{story:"Combining ChartAggregates with LineChart for a complete dashboard view. Shows key metrics alongside the trend visualization."}}}},Z={render:()=>t.jsxs(fe,{variant:"card",children:[t.jsx(ye,{title:"Performance Analytics",subtitle:"System performance over the last 10 months"}),t.jsx("div",{style:{padding:"16px"},children:t.jsx(z,{data:M,width:600,height:300,color:"primary",showTooltip:!0,curve:"smooth",xAxis:{label:"Month",variant:"minimal"},yAxis:{label:"Performance Score (%)",tickCount:5}})}),t.jsx(ge,{items:[{label:"Performance Score",color:"#2272B4",symbol:"line"}],position:"bottom"})]}),parameters:{docs:{description:{story:"Compound component pattern for composing complex chart layouts. Use LineChartContainer, LineChartHeader, and LineChartLegend to create structured chart presentations."}}}},ee={args:{data:M,width:600,height:300,color:"primary",title:"Accessible Line Chart",showTooltip:!0,keyboard:!0,ariaLabel:"Monthly sales data chart showing performance trends over 10 months",xAxis:{label:"Month",tickFormatter:e=>new Date(e).toLocaleDateString("en-US",{month:"short"})},yAxis:{label:"Value",tickFormatter:e=>`${e.toFixed(0)}`}},parameters:{docs:{description:{story:"Enhanced accessibility features including keyboard navigation (Tab to navigate data points), ARIA labels, and screen reader support."}}}},te={args:{data:Gt,width:1e3,height:600,color:"primary",title:"Large Dataset Performance",variant:"detailed",showTooltip:!0,showPercentageChange:!0,curve:"smooth",showPoints:!0,optimized:!0,xAxis:Kt,yAxis:Yt,animation:{enabled:!0,duration:300,easing:"ease-out"}},parameters:{docs:{description:{story:"Large chart with 20 data points demonstrating performance optimization and detailed variant styling. Uses optimized rendering for smooth interactions."}}}},ae={render:()=>t.jsx(Et,{series:It,width:700,height:450,variant:"default",title:"Multi-Line Chart - Product Sales Comparison",showTooltip:!0,curve:"smooth",xAxis:{label:"Month"},yAxis:{label:"Sales ($)"}}),parameters:{docs:{description:{story:"Multiple lines on the same chart for comparing different data series. Each line represents a different product category with distinct colors and interactive tooltips."}}}},re={args:{data:[],width:600,height:400,title:"No Data Available"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}};var ke,Fe,Ne;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Pe,qe,Me;Y.parameters={...Y.parameters,docs:{...(Pe=Y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var je,Re,Ve;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ve=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var He,ze,Ee;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ee=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var Ue,Ge,Ie;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ie=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Ie.source}}};var Xe,Ke,Ye;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ye=(Ke=J.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var We,Be,Oe;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Oe=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var Je,Qe,Ze;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,at;ee.parameters={...ee.parameters,docs:{...(et=ee.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,nt,it;te.parameters={...te.parameters,docs:{...(rt=te.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(nt=te.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var ot,st,lt;ae.parameters={...ae.parameters,docs:{...(ot=ae.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(lt=(st=ae.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ct,dt,mt;re.parameters={...re.parameters,docs:{...(ct=re.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(mt=(dt=re.parameters)==null?void 0:dt.docs)==null?void 0:mt.source}}};const da=["Default","ColorVariants","Variants","CurveTypes","WithTooltips","CustomFormatting","WithAggregates","CompoundComponents","EnhancedAccessibility","LargeDataset","MultipleLines","EmptyState"];export{Y as ColorVariants,Z as CompoundComponents,B as CurveTypes,J as CustomFormatting,K as Default,re as EmptyState,ee as EnhancedAccessibility,te as LargeDataset,ae as MultipleLines,W as Variants,Q as WithAggregates,O as WithTooltips,da as __namedExportsOrder,ca as default};
