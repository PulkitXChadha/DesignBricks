import{j as p}from"./jsx-runtime-LnmZrwv1.js";import{r as X}from"./index-CWnxZbJP.js";import{c as We}from"./clsx-B-dksMZM.js";import{c as L,a as Zt,f as xe,s as ge,b as ea,C as ta,D as aa}from"./ChartTooltip-DGQGfrCB.js";import{s as na}from"./sum-CB6J5KXz.js";import{o as ra}from"./ordinal-CHtbxqiZ.js";import{w as ia}from"./path-DyVhHtw_.js";import{p as oa}from"./pointer-Drloq0xg.js";import"./index-Bnmt0x4K.js";import"./_commonjsHelpers-CqkleIqs.js";const Xe=Math.abs,V=Math.atan2,ie=Math.cos,sa=Math.max,Qe=Math.min,Y=Math.sin,pe=Math.sqrt,j=1e-12,fe=Math.PI,_e=fe/2,ze=2*fe;function la(t){return t>1?0:t<-1?fe:Math.acos(t)}function Ye(t){return t>=1?_e:t<=-1?-_e:Math.asin(t)}function da(t){return t.innerRadius}function ca(t){return t.outerRadius}function ua(t){return t.startAngle}function pa(t){return t.endAngle}function ha(t){return t&&t.padAngle}function ma(t,i,h,v,w,y,b,a){var f=h-t,l=v-i,n=b-w,P=a-y,e=P*f-n*l;if(!(e*e<j))return e=(n*(i-y)-P*(t-w))/e,[t+e*f,i+e*l]}function we(t,i,h,v,w,y,b){var a=t-h,f=i-v,l=(b?y:-y)/pe(a*a+f*f),n=l*f,P=-l*a,e=t+n,d=i+P,g=h+n,x=v+P,M=(e+g)/2,c=(d+x)/2,C=g-e,T=x-d,D=C*C+T*T,R=w-y,F=e*x-g*d,O=(T<0?-1:1)*pe(sa(0,R*R*D-F*F)),H=(F*T-C*O)/D,_=(-F*C-T*O)/D,q=(F*T+C*O)/D,S=(-F*C+T*O)/D,k=H-M,r=_-c,s=q-M,G=S-c;return k*k+r*r>s*s+G*G&&(H=q,_=S),{cx:H,cy:_,x01:-n,y01:-P,x11:H*(w/R-1),y11:_*(w/R-1)}}function Ge(){var t=da,i=ca,h=L(0),v=null,w=ua,y=pa,b=ha,a=null,f=ia(l);function l(){var n,P,e=+t.apply(this,arguments),d=+i.apply(this,arguments),g=w.apply(this,arguments)-_e,x=y.apply(this,arguments)-_e,M=Xe(x-g),c=x>g;if(a||(a=n=f()),d<e&&(P=d,d=e,e=P),!(d>j))a.moveTo(0,0);else if(M>ze-j)a.moveTo(d*ie(g),d*Y(g)),a.arc(0,0,d,g,x,!c),e>j&&(a.moveTo(e*ie(x),e*Y(x)),a.arc(0,0,e,x,g,c));else{var C=g,T=x,D=g,R=x,F=M,O=M,H=b.apply(this,arguments)/2,_=H>j&&(v?+v.apply(this,arguments):pe(e*e+d*d)),q=Qe(Xe(d-e)/2,+h.apply(this,arguments)),S=q,k=q,r,s;if(_>j){var G=Ye(_/e*Y(H)),ne=Ye(_/d*Y(H));(F-=G*2)>j?(G*=c?1:-1,D+=G,R-=G):(F=0,D=R=(g+x)/2),(O-=ne*2)>j?(ne*=c?1:-1,C+=ne,T-=ne):(O=0,C=T=(g+x)/2)}var A=d*ie(C),N=d*Y(C),ee=e*ie(R),J=e*Y(R);if(q>j){var E=d*ie(T),m=d*Y(T),B=e*ie(D),te=e*Y(D),$;if(M<fe)if($=ma(A,N,B,te,E,m,ee,J)){var I=A-$[0],se=N-$[1],le=E-$[0],de=m-$[1],K=1/Y(la((I*le+se*de)/(pe(I*I+se*se)*pe(le*le+de*de)))/2),re=pe($[0]*$[0]+$[1]*$[1]);S=Qe(q,(e-re)/(K-1)),k=Qe(q,(d-re)/(K+1))}else S=k=0}O>j?k>j?(r=we(B,te,A,N,d,k,c),s=we(E,m,ee,J,d,k,c),a.moveTo(r.cx+r.x01,r.cy+r.y01),k<q?a.arc(r.cx,r.cy,k,V(r.y01,r.x01),V(s.y01,s.x01),!c):(a.arc(r.cx,r.cy,k,V(r.y01,r.x01),V(r.y11,r.x11),!c),a.arc(0,0,d,V(r.cy+r.y11,r.cx+r.x11),V(s.cy+s.y11,s.cx+s.x11),!c),a.arc(s.cx,s.cy,k,V(s.y11,s.x11),V(s.y01,s.x01),!c))):(a.moveTo(A,N),a.arc(0,0,d,C,T,!c)):a.moveTo(A,N),!(e>j)||!(F>j)?a.lineTo(ee,J):S>j?(r=we(ee,J,E,m,e,-S,c),s=we(A,N,B,te,e,-S,c),a.lineTo(r.cx+r.x01,r.cy+r.y01),S<q?a.arc(r.cx,r.cy,S,V(r.y01,r.x01),V(s.y01,s.x01),!c):(a.arc(r.cx,r.cy,S,V(r.y01,r.x01),V(r.y11,r.x11),!c),a.arc(0,0,e,V(r.cy+r.y11,r.cx+r.x11),V(s.cy+s.y11,s.cx+s.x11),c),a.arc(s.cx,s.cy,S,V(s.y11,s.x11),V(s.y01,s.x01),!c))):a.arc(0,0,e,R,D,c)}if(a.closePath(),n)return a=null,n+""||null}return l.centroid=function(){var n=(+t.apply(this,arguments)+ +i.apply(this,arguments))/2,P=(+w.apply(this,arguments)+ +y.apply(this,arguments))/2-fe/2;return[ie(P)*n,Y(P)*n]},l.innerRadius=function(n){return arguments.length?(t=typeof n=="function"?n:L(+n),l):t},l.outerRadius=function(n){return arguments.length?(i=typeof n=="function"?n:L(+n),l):i},l.cornerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:L(+n),l):h},l.padRadius=function(n){return arguments.length?(v=n==null?null:typeof n=="function"?n:L(+n),l):v},l.startAngle=function(n){return arguments.length?(w=typeof n=="function"?n:L(+n),l):w},l.endAngle=function(n){return arguments.length?(y=typeof n=="function"?n:L(+n),l):y},l.padAngle=function(n){return arguments.length?(b=typeof n=="function"?n:L(+n),l):b},l.context=function(n){return arguments.length?(a=n??null,l):a},l}function ga(t,i){return i<t?-1:i>t?1:i>=t?0:NaN}function fa(t){return t}function ya(){var t=fa,i=ga,h=null,v=L(0),w=L(ze),y=L(0);function b(a){var f,l=(a=Zt(a)).length,n,P,e=0,d=new Array(l),g=new Array(l),x=+v.apply(this,arguments),M=Math.min(ze,Math.max(-ze,w.apply(this,arguments)-x)),c,C=Math.min(Math.abs(M)/l,y.apply(this,arguments)),T=C*(M<0?-1:1),D;for(f=0;f<l;++f)(D=g[d[f]=f]=+t(a[f],f,a))>0&&(e+=D);for(i!=null?d.sort(function(R,F){return i(g[R],g[F])}):h!=null&&d.sort(function(R,F){return h(a[R],a[F])}),f=0,P=e?(M-l*T)/e:0;f<l;++f,x=c)n=d[f],D=g[n],c=x+(D>0?D*P:0)+T,g[n]={data:a[n],index:f,value:D,startAngle:x,endAngle:c,padAngle:C};return g}return b.value=function(a){return arguments.length?(t=typeof a=="function"?a:L(+a),b):t},b.sortValues=function(a){return arguments.length?(i=a,h=null,b):i},b.sort=function(a){return arguments.length?(h=a,i=null,b):h},b.startAngle=function(a){return arguments.length?(v=typeof a=="function"?a:L(+a),b):v},b.endAngle=function(a){return arguments.length?(w=typeof a=="function"?a:L(+a),b):w},b.padAngle=function(a){return arguments.length?(y=typeof a=="function"?a:L(+a),b):y},b}const ba=X.createContext(null),va=["#2272B4","#04867D","#3BA65E","#DE7921","#E65B77","#8A63BF","#B45091","#137DAE","#A6630C","#FACB66"],oe=X.forwardRef(({data:t=[],width:i=400,height:h=400,variant:v="default",title:w,innerRadius:y=0,outerRadius:b,cornerRadius:a=0,padAngle:f=0,theme:l,animation:n,legend:P,tooltip:e,showTooltip:d=!0,formatTooltip:g,showLabels:x=!0,showValues:M=!1,labelPosition:c="outside",keyboard:C=!1,ariaLabel:T,themeClass:D,optimized:R=!1,hoverDebounce:F=0,colorPalette:O=va,className:H,..._},q)=>{const S=X.useRef(null),k=X.useRef(null),[r,s]=X.useState(!1),[G,ne]=X.useState({x:0,y:0}),[A,N]=X.useState(null),ee={colorScheme:"auto",cssVars:{"--chart-inner-radius":`${y}px`,"--chart-corner-radius":`${a}px`},...l},J={enabled:v==="detailed",duration:v==="detailed"?800:500,...n},E={show:v!=="minimal",position:"bottom",orientation:"horizontal",...P},m={enabled:(e==null?void 0:e.enabled)!==void 0?e.enabled:d,component:e==null?void 0:e.component,content:(e==null?void 0:e.content)||g,style:e==null?void 0:e.style,placement:(e==null?void 0:e.placement)||{placement:"auto",offset:{x:0,y:-10}},className:e==null?void 0:e.className,animationDuration:(e==null?void 0:e.animationDuration)||200,showDelay:(e==null?void 0:e.showDelay)||0,hideDelay:(e==null?void 0:e.hideDelay)||0,...e},B=X.useMemo(()=>({top:w?40:20,right:20,bottom:E.show&&E.position==="bottom"?60:20,left:20}),[w,E.show,E.position]),te=i-B.left-B.right,$=h-B.top-B.bottom,I=b||Math.min(te,$)/2-10,se=te/2,le=$/2,{pieData:de,arc:K,labelArc:re,totalValue:ce,colorScale:me}=X.useMemo(()=>{if(!t.length)return{pieData:[],arc:null,labelArc:null,totalValue:0,colorScale:null};const Z=na(t,o=>o.value),W=ya().value(o=>o.value).sort(null).padAngle(f)(t),ue=Ge().innerRadius(y).outerRadius(I).cornerRadius(a),ve=Ge().innerRadius(c==="inside"?(y+I)/2:I+20).outerRadius(c==="inside"?(y+I)/2:I+20),u=ra().domain(t.map(o=>o.label)).range(O);return{pieData:W,arc:ue,labelArc:ve,totalValue:Z,colorScale:u}},[t,I,y,a,f,c,O]),Jt=X.useMemo(()=>g||((Z,be)=>{let W='<div class="db-piechart__tooltip-content">';return W+=`<div class="db-piechart__tooltip-label">${Z.label}</div>`,W+=`<div class="db-piechart__tooltip-value">${xe(",")(Z.value)}</div>`,be!==void 0&&(W+=`<div class="db-piechart__tooltip-percentage">${be.toFixed(1)}%</div>`),W+="</div>",W}),[g]);if(X.useEffect(()=>{if(!S.current||!t.length||!K||!me)return;const Z=ge(S.current);Z.selectAll("*").remove();const W=Z.append("g").attr("transform",`translate(${B.left+se},${B.top+le})`).selectAll(".db-piechart__slice").data(de).enter().append("g").attr("class","db-piechart__slice"),ue=W.append("path").attr("class","db-piechart__path").attr("fill",u=>u.data.color||me(u.data.label)||"#2272B4").attr("stroke","#FFFFFF").attr("stroke-width",2);if(J.enabled?ue.attr("d",K.startAngle(0).endAngle(0)).transition().duration(J.duration||500).delay((u,o)=>o*100).attrTween("d",function(u){const o=ea({startAngle:0,endAngle:0},{startAngle:u.startAngle,endAngle:u.endAngle});return function(Q){return K(o(Q))}}):ue.attr("d",K),x&&re&&(W.append("text").attr("class","db-piechart__label").attr("transform",u=>`translate(${re.centroid(u)})`).attr("dy","0.35em").style("text-anchor","middle").style("font-size","12px").style("font-weight","500").style("fill",c==="inside"?"#FFFFFF":"#37444F").style("pointer-events","none").text(u=>{const o=u.value/ce*100;return o<5?"":M?xe(",")(u.data.value):`${o.toFixed(1)}%`}),c==="outside"&&W.append("text").attr("class","db-piechart__category-label").attr("transform",u=>{const o=re.centroid(u);return o[0]=o[0]*1.3,o[1]=o[1]*1.3,`translate(${o})`}).attr("dy","-0.5em").style("text-anchor","middle").style("font-size","11px").style("font-weight","400").style("fill","#5F7281").style("pointer-events","none").text(u=>u.value/ce*100<5?"":u.data.label)),C&&ue.attr("tabindex",0).attr("role","button").attr("aria-label",u=>{const o=u.value/ce*100;return`${u.data.label}: ${xe(",")(u.data.value)} (${o.toFixed(1)}%)`}).on("focus",function(u,o){if(m.enabled){const Q=t.indexOf(o.data),U=o.value/ce*100,z=K.centroid(o);ne({x:z[0]+te/2,y:z[1]+$/2}),N({dataPoint:o.data,percentage:U,index:Q}),s(!0)}ge(this).style("filter","brightness(1.1)")}).on("blur",function(){m.enabled&&(s(!1),N(null)),ge(this).style("filter","none")}),m.enabled){let u=null,o=null;ue.on("mouseenter",function(Q,U){const z=t.indexOf(U.data),ae=U.value/ce*100;o&&(clearTimeout(o),o=null),m.showDelay&&m.showDelay>0?u=window.setTimeout(()=>{ve(Q,U.data,ae,z)},m.showDelay):ve(Q,U.data,ae,z),ge(this).style("filter","brightness(1.1)").style("stroke-width",3)}).on("mouseleave",function(){u&&(clearTimeout(u),u=null),m.hideDelay&&m.hideDelay>0?o=window.setTimeout(()=>{s(!1),N(null)},m.hideDelay):(s(!1),N(null)),ge(this).style("filter","none").style("stroke-width",2)})}function ve(u,o,Q,U){if(!S.current)return;const[z,ae]=oa(u,S.current),Oe=z+B.left,He=ae+B.top;ne({x:Oe,y:He}),N({dataPoint:o,percentage:Q,index:U}),s(!0)}if(E.show){const o=Z.append("g").attr("class","db-piechart__legend").selectAll(".db-piechart__legend-item").data(t).enter().append("g").attr("class","db-piechart__legend-item"),Q=140,U=Math.floor(i/Q);o.attr("transform",(z,ae)=>{if(E.orientation==="horizontal"){const Oe=ae%U*Q,He=Math.floor(ae/U)*20;return`translate(${Oe}, ${h-40+He})`}else return`translate(10, ${30+ae*25})`}),o.append("rect").attr("width",12).attr("height",12).attr("fill",z=>z.color||me(z.label)||"#2272B4"),o.append("text").attr("x",18).attr("y",6).attr("dy","0.35em").style("font-size","12px").style("fill","#37444F").text(z=>z.label)}w&&Z.append("text").attr("class","db-piechart__title").attr("x",i/2).attr("y",25).style("text-anchor","middle").text(w)},[t,i,h,I,y,K,re,me,ce,x,M,c,d,E.show,w,B,se,le,Jt,J.enabled,J.duration,C,E.orientation,m.enabled,m.showDelay,m.hideDelay,de,te,$]),!t.length)return p.jsx("div",{ref:q,className:We("db-piechart","db-piechart--empty",H),..._,children:p.jsx("div",{className:"db-piechart__empty-state",children:p.jsx("p",{children:"No data available"})})});const Kt={data:t,width:i,height:h,radius:I,svgRef:S},Ue=y>0;return p.jsx(ba.Provider,{value:Kt,children:p.jsxs("div",{ref:q,className:We("db-piechart",`db-piechart--${v}`,{"db-piechart--donut":Ue,"db-piechart--optimized":R,"db-piechart--keyboard":C},D,H),"data-theme":ee.colorScheme!=="auto"?ee.colorScheme:void 0,style:{...ee.cssVars,..._.style||{}},role:"img","aria-label":T||`${Ue?"Donut":"Pie"} chart with ${t.length} categories`,..._,children:[p.jsx("svg",{ref:S,className:"db-piechart__svg",width:i,height:h,role:"presentation","aria-hidden":"true"}),m.enabled&&A&&p.jsx(ta,{visible:r,position:G,tooltipStyle:m.style,placement:m.placement,animationDuration:m.animationDuration,containerDimensions:{width:i,height:h},className:We("db-piechart__tooltip",m.className),role:"tooltip","aria-live":"polite",children:m.component?p.jsx(m.component,{data:A.dataPoint,index:A.index,additionalData:A.percentage,chartDimensions:{width:i,height:h}}):m.content?p.jsx("div",{dangerouslySetInnerHTML:{__html:m.content(A.dataPoint,A.index,A.percentage)}}):p.jsx(aa,{label:A.dataPoint.label,value:xe(",")(A.dataPoint.value),percentage:A.percentage,color:me(A.dataPoint.label)})}),d&&!m.enabled&&p.jsx("div",{ref:k,className:"db-piechart__tooltip",role:"tooltip","aria-live":"polite"})]})})});oe.displayName="PieChart";oe.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"PieChartDataPoint"}],raw:"PieChartDataPoint[]"},description:"Chart data points",defaultValue:{value:"[]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Chart width",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Chart height",defaultValue:{value:"400",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'minimal' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'detailed'"}]},description:"Chart variant",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Chart title"},innerRadius:{required:!1,tsType:{name:"number"},description:"Inner radius for donut chart (0 for full pie)",defaultValue:{value:"0",computed:!1}},outerRadius:{required:!1,tsType:{name:"number"},description:"Outer radius (auto-calculated if not provided)"},cornerRadius:{required:!1,tsType:{name:"number"},description:"Corner radius for rounded slices",defaultValue:{value:"0",computed:!1}},padAngle:{required:!1,tsType:{name:"number"},description:"Padding between slices",defaultValue:{value:"0",computed:!1}},theme:{required:!1,tsType:{name:"PieChartTheme"},description:"Theme configuration"},animation:{required:!1,tsType:{name:"PieChartAnimation"},description:"Animation configuration"},legend:{required:!1,tsType:{name:"PieChartLegend"},description:"Legend configuration"},tooltip:{required:!1,tsType:{name:"TooltipConfig",elements:[{name:"PieChartDataPoint"}],raw:"TooltipConfig<PieChartDataPoint>"},description:"Enhanced tooltip configuration"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use tooltip.enabled instead",defaultValue:{value:"true",computed:!1}},formatTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(_dataPoint: PieChartDataPoint, _percentage?: number) => string",signature:{arguments:[{type:{name:"PieChartDataPoint"},name:"_dataPoint"},{type:{name:"number"},name:"_percentage"}],return:{name:"string"}}},description:"@deprecated Use tooltip.content instead"},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show percentage labels on slices",defaultValue:{value:"true",computed:!1}},showValues:{required:!1,tsType:{name:"boolean"},description:"Show value labels instead of percentages",defaultValue:{value:"false",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'inside' | 'outside'",elements:[{name:"literal",value:"'inside'"},{name:"literal",value:"'outside'"}]},description:"Label position relative to slice",defaultValue:{value:"'outside'",computed:!1}},keyboard:{required:!1,tsType:{name:"boolean"},description:"Enable keyboard navigation",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},themeClass:{required:!1,tsType:{name:"string"},description:"Custom CSS class for theming"},optimized:{required:!1,tsType:{name:"boolean"},description:"Enable performance optimizations",defaultValue:{value:"false",computed:!1}},hoverDebounce:{required:!1,tsType:{name:"number"},description:"Debounce hover events (ms)",defaultValue:{value:"0",computed:!1}},colorPalette:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Custom color palette",defaultValue:{value:`[
  '#2272B4', // primary
  '#04867D', // secondary
  '#3BA65E', // success
  '#DE7921', // warning
  '#E65B77', // error
  '#8A63BF', // purple
  '#B45091', // pink
  '#137DAE', // turquoise
  '#A6630C', // brown
  '#FACB66', // lemon
]`,computed:!1}}},composes:["Omit"]};const La={title:"Data Display/PieChart",component:oe,parameters:{layout:"centered",docs:{description:{component:"A flexible pie chart component built with D3.js for visualizing proportional data. Supports donut charts, custom colors, legends, labels, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with labels and values"},width:{control:{type:"range",min:200,max:800,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:200,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},innerRadius:{control:{type:"range",min:0,max:100,step:5},description:"Inner radius for donut chart (0 for full pie)"},cornerRadius:{control:{type:"range",min:0,max:10,step:1},description:"Corner radius for rounded slices"},padAngle:{control:{type:"range",min:0,max:.1,step:.01},description:"Padding between slices"},showLabels:{control:"boolean",description:"Show labels on slices"},showValues:{control:"boolean",description:"Show values instead of percentages"},labelPosition:{control:"radio",options:["inside","outside"],description:"Position of labels relative to slices"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},ye=[{label:"Chrome",value:65.2},{label:"Safari",value:18.8},{label:"Edge",value:4.3},{label:"Firefox",value:3.2},{label:"Opera",value:2.4},{label:"Others",value:6.1}],Ne=[{label:"Q1",value:25e3},{label:"Q2",value:32e3},{label:"Q3",value:28e3},{label:"Q4",value:35e3}],Ie=[{label:"Technology",value:45},{label:"Healthcare",value:30},{label:"Finance",value:15},{label:"Education",value:10}],xa=[{label:"Marketing",value:15e3,color:"#2272B4"},{label:"Development",value:25e3,color:"#04867D"},{label:"Sales",value:12e3,color:"#3BA65E"},{label:"Operations",value:8e3,color:"#DE7921"}],De={args:{data:ye,width:400,height:400,variant:"default",title:"Browser Market Share"}},Ce={args:{data:Ne,width:400,height:400,innerRadius:60,title:"Quarterly Sales (Donut)",showValues:!0},parameters:{docs:{description:{story:"Donut chart with inner radius to create a hollow center."}}}},he={args:{data:Ie,width:400,height:400,title:"Chart Variants"},parameters:{docs:{description:{story:"Different visual variants: default shows full features, minimal removes legend and labels, detailed adds enhanced styling."}}}},Se={args:{...he.args,variant:"minimal",title:"Minimal Pie Chart"}},Te={args:{...he.args,variant:"detailed",title:"Detailed Pie Chart"}},Ae={args:{data:xa,width:400,height:400,title:"Budget Allocation",legend:{show:!0,position:"right",orientation:"vertical"}},parameters:{docs:{description:{story:"Pie chart with custom colors defined in the data points."}}}},Pe={args:{data:Ne,width:400,height:400,showValues:!0,title:"Sales by Quarter",labelPosition:"outside"},parameters:{docs:{description:{story:"Pie chart showing actual values instead of percentages on labels."}}}},Re={args:{data:Ie,width:400,height:400,labelPosition:"inside",title:"Inside Labels",innerRadius:40},parameters:{docs:{description:{story:"Donut chart with labels positioned inside the slices."}}}},Ve={args:{data:Ne,width:400,height:400,cornerRadius:5,padAngle:.02,title:"Rounded Slices",innerRadius:50},parameters:{docs:{description:{story:"Pie chart with rounded corners and padding between slices."}}}},Fe={args:{data:Ie,width:400,height:400,padAngle:.05,title:"Separated Slices",innerRadius:30},parameters:{docs:{description:{story:"Pie chart with large padding creating separated slices."}}}},Le={args:{data:Ie,width:250,height:250,variant:"minimal",title:"Compact Chart"},parameters:{docs:{description:{story:"Small pie chart suitable for dashboards and compact layouts."}}}},Me={args:{data:ye,width:600,height:600,variant:"detailed",title:"Large Detailed Chart",cornerRadius:3,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Large pie chart with detailed styling and bottom legend."}}}},ke={args:{data:Ne,width:400,height:400,showLabels:!1,title:"Chart with Legend Only",legend:{show:!0,position:"right",orientation:"vertical"}},parameters:{docs:{description:{story:"Pie chart without slice labels, relying on legend for identification."}}}},$e={args:{data:[],width:400,height:400,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},je={args:{data:ye,width:500,height:500,variant:"detailed",title:"Interactive Pie Chart",showTooltip:!0,cornerRadius:2,padAngle:.01,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Full-featured pie chart with tooltips and interactive elements. Hover over slices to see details."}}}},qe={args:{data:ye,width:500,height:500,title:"Custom HTML Tooltip",tooltip:{enabled:!0,content:(t,i,h)=>`
        <div style="padding: 8px; border-left: 4px solid #2272B4;">
          <h4 style="margin: 0 0 8px 0; color: #1890FF;">${t.label}</h4>
          <p style="margin: 0; font-size: 16px; font-weight: bold;">${t.value.toLocaleString()}</p>
          <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">${h==null?void 0:h.toFixed(1)}% of total</p>
          <small style="color: #666;">Data point #${(i||0)+1}</small>
        </div>
      `,style:{backgroundColor:"white",color:"#333",borderRadius:"8px",padding:"0",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.12)",border:"1px solid #e8e8e8"}}},parameters:{docs:{description:{story:"Demonstrates custom HTML tooltip content with enhanced styling and formatting."}}}},Ee={args:{data:ye,width:500,height:500,title:"Custom React Tooltip Component",tooltip:{enabled:!0,component:({data:t,additionalData:i})=>p.jsxs("div",{style:{background:"linear-gradient(145deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"16px",borderRadius:"12px",textAlign:"center",minWidth:"200px"},children:[p.jsxs("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"8px"},children:["🍰 ",t.label]}),p.jsx("div",{style:{fontSize:"24px",fontWeight:"800",margin:"8px 0"},children:t.value.toLocaleString()}),p.jsxs("div",{style:{fontSize:"14px",opacity:.9},children:[i==null?void 0:i.toFixed(1),"% share"]}),p.jsx("div",{style:{marginTop:"12px",padding:"6px 12px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"6px",fontSize:"12px"},children:"Click for details"})]}),style:{padding:"0",backgroundColor:"transparent",border:"none",boxShadow:"0 12px 48px rgba(0, 0, 0, 0.25)"}}},parameters:{docs:{description:{story:"Shows how to use a custom React component for rich, interactive tooltip content."}}}},Be={render:()=>{const t=[{label:"Design",value:450},{label:"Development",value:320},{label:"Marketing",value:180},{label:"Sales",value:250}];return p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",padding:"1rem"},children:[p.jsxs("div",{children:[p.jsx("h3",{children:"Delayed Tooltip"}),p.jsx(oe,{data:t,width:300,height:300,tooltip:{enabled:!0,showDelay:500,hideDelay:200,style:{backgroundColor:"#ff6b6b",color:"white"}}})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Custom Positioning"}),p.jsx(oe,{data:t,width:300,height:300,tooltip:{enabled:!0,placement:{placement:"top",offset:{x:0,y:-20}},style:{backgroundColor:"#4ecdc4",color:"white",borderRadius:"20px"}}})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Minimal Tooltip"}),p.jsx(oe,{data:t,width:300,height:300,tooltip:{enabled:!0,content:(i,h,v)=>`${i.label}: ${v==null?void 0:v.toFixed(0)}%`,style:{fontSize:"12px",padding:"4px 8px",backgroundColor:"#2c3e50",borderRadius:"4px"}}})]}),p.jsxs("div",{children:[p.jsx("h3",{children:"Animated Tooltip"}),p.jsx(oe,{data:t,width:300,height:300,tooltip:{enabled:!0,animationDuration:500,style:{backgroundColor:"#9b59b6",color:"white",transform:"scale(1.05)",transition:"transform 0.3s ease"}}})]})]})},parameters:{docs:{description:{story:"Various tooltip configurations including delays, positioning, styling, and animations."}}}};var Je,Ke,Ze;De.parameters={...De.parameters,docs:{...(Je=De.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 400,
    height: 400,
    variant: 'default',
    title: 'Browser Market Share'
  }
}`,...(Ze=(Ke=De.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var et,tt,at;Ce.parameters={...Ce.parameters,docs:{...(et=Ce.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    data: salesData,
    width: 400,
    height: 400,
    innerRadius: 60,
    title: 'Quarterly Sales (Donut)',
    showValues: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with inner radius to create a hollow center.'
      }
    }
  }
}`,...(at=(tt=Ce.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,it;he.parameters={...he.parameters,docs:{...(nt=he.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    title: 'Chart Variants'
  },
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants: default shows full features, minimal removes legend and labels, detailed adds enhanced styling.'
      }
    }
  }
}`,...(it=(rt=he.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var ot,st,lt;Se.parameters={...Se.parameters,docs:{...(ot=Se.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    ...Variants.args,
    variant: 'minimal',
    title: 'Minimal Pie Chart'
  }
}`,...(lt=(st=Se.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var dt,ct,ut;Te.parameters={...Te.parameters,docs:{...(dt=Te.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ...Variants.args,
    variant: 'detailed',
    title: 'Detailed Pie Chart'
  }
}`,...(ut=(ct=Te.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var pt,ht,mt;Ae.parameters={...Ae.parameters,docs:{...(pt=Ae.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    data: budgetData,
    width: 400,
    height: 400,
    title: 'Budget Allocation',
    legend: {
      show: true,
      position: 'right',
      orientation: 'vertical'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with custom colors defined in the data points.'
      }
    }
  }
}`,...(mt=(ht=Ae.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};var gt,ft,yt;Pe.parameters={...Pe.parameters,docs:{...(gt=Pe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    data: salesData,
    width: 400,
    height: 400,
    showValues: true,
    title: 'Sales by Quarter',
    labelPosition: 'outside'
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart showing actual values instead of percentages on labels.'
      }
    }
  }
}`,...(yt=(ft=Pe.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var bt,vt,xt;Re.parameters={...Re.parameters,docs:{...(bt=Re.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    labelPosition: 'inside',
    title: 'Inside Labels',
    innerRadius: 40
  },
  parameters: {
    docs: {
      description: {
        story: 'Donut chart with labels positioned inside the slices.'
      }
    }
  }
}`,...(xt=(vt=Re.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var wt,Dt,Ct;Ve.parameters={...Ve.parameters,docs:{...(wt=Ve.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    data: salesData,
    width: 400,
    height: 400,
    cornerRadius: 5,
    padAngle: 0.02,
    title: 'Rounded Slices',
    innerRadius: 50
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with rounded corners and padding between slices.'
      }
    }
  }
}`,...(Ct=(Dt=Ve.parameters)==null?void 0:Dt.docs)==null?void 0:Ct.source}}};var St,Tt,At;Fe.parameters={...Fe.parameters,docs:{...(St=Fe.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 400,
    height: 400,
    padAngle: 0.05,
    title: 'Separated Slices',
    innerRadius: 30
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart with large padding creating separated slices.'
      }
    }
  }
}`,...(At=(Tt=Fe.parameters)==null?void 0:Tt.docs)==null?void 0:At.source}}};var Pt,Rt,Vt;Le.parameters={...Le.parameters,docs:{...(Pt=Le.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    data: categoryData,
    width: 250,
    height: 250,
    variant: 'minimal',
    title: 'Compact Chart'
  },
  parameters: {
    docs: {
      description: {
        story: 'Small pie chart suitable for dashboards and compact layouts.'
      }
    }
  }
}`,...(Vt=(Rt=Le.parameters)==null?void 0:Rt.docs)==null?void 0:Vt.source}}};var Ft,Lt,Mt;Me.parameters={...Me.parameters,docs:{...(Ft=Me.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 600,
    height: 600,
    variant: 'detailed',
    title: 'Large Detailed Chart',
    cornerRadius: 3,
    legend: {
      show: true,
      position: 'bottom'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large pie chart with detailed styling and bottom legend.'
      }
    }
  }
}`,...(Mt=(Lt=Me.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};var kt,$t,jt;ke.parameters={...ke.parameters,docs:{...(kt=ke.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    data: salesData,
    width: 400,
    height: 400,
    showLabels: false,
    title: 'Chart with Legend Only',
    legend: {
      show: true,
      position: 'right',
      orientation: 'vertical'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pie chart without slice labels, relying on legend for identification.'
      }
    }
  }
}`,...(jt=($t=ke.parameters)==null?void 0:$t.docs)==null?void 0:jt.source}}};var qt,Et,Bt;$e.parameters={...$e.parameters,docs:{...(qt=$e.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    data: [],
    width: 400,
    height: 400,
    title: 'No Data State'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is provided to the chart.'
      }
    }
  }
}`,...(Bt=(Et=$e.parameters)==null?void 0:Et.docs)==null?void 0:Bt.source}}};var zt,_t,Nt;je.parameters={...je.parameters,docs:{...(zt=je.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 500,
    height: 500,
    variant: 'detailed',
    title: 'Interactive Pie Chart',
    showTooltip: true,
    cornerRadius: 2,
    padAngle: 0.01,
    legend: {
      show: true,
      position: 'bottom'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-featured pie chart with tooltips and interactive elements. Hover over slices to see details.'
      }
    }
  }
}`,...(Nt=(_t=je.parameters)==null?void 0:_t.docs)==null?void 0:Nt.source}}};var It,Ot,Ht;qe.parameters={...qe.parameters,docs:{...(It=qe.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 500,
    height: 500,
    title: 'Custom HTML Tooltip',
    tooltip: {
      enabled: true,
      content: (dataPoint, index, percentage) => \`
        <div style="padding: 8px; border-left: 4px solid #2272B4;">
          <h4 style="margin: 0 0 8px 0; color: #1890FF;">\${dataPoint.label}</h4>
          <p style="margin: 0; font-size: 16px; font-weight: bold;">\${dataPoint.value.toLocaleString()}</p>
          <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">\${percentage?.toFixed(1)}% of total</p>
          <small style="color: #666;">Data point #\${(index || 0) + 1}</small>
        </div>
      \`,
      style: {
        backgroundColor: 'white',
        color: '#333',
        borderRadius: '8px',
        padding: '0',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        border: '1px solid #e8e8e8'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom HTML tooltip content with enhanced styling and formatting.'
      }
    }
  }
}`,...(Ht=(Ot=qe.parameters)==null?void 0:Ot.docs)==null?void 0:Ht.source}}};var Wt,Qt,Ut;Ee.parameters={...Ee.parameters,docs:{...(Wt=Ee.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 500,
    height: 500,
    title: 'Custom React Tooltip Component',
    tooltip: {
      enabled: true,
      component: ({
        data,
        additionalData
      }) => <div style={{
        background: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '16px',
        borderRadius: '12px',
        textAlign: 'center',
        minWidth: '200px'
      }}>
          <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '8px'
        }}>
            🍰 {data.label}
          </div>
          <div style={{
          fontSize: '24px',
          fontWeight: '800',
          margin: '8px 0'
        }}>
            {data.value.toLocaleString()}
          </div>
          <div style={{
          fontSize: '14px',
          opacity: 0.9
        }}>
            {additionalData?.toFixed(1)}% share
          </div>
          <div style={{
          marginTop: '12px',
          padding: '6px 12px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '6px',
          fontSize: '12px'
        }}>
            Click for details
          </div>
        </div>,
      style: {
        padding: '0',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to use a custom React component for rich, interactive tooltip content.'
      }
    }
  }
}`,...(Ut=(Qt=Ee.parameters)==null?void 0:Qt.docs)==null?void 0:Ut.source}}};var Xt,Yt,Gt;Be.parameters={...Be.parameters,docs:{...(Xt=Be.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      label: 'Design',
      value: 450
    }, {
      label: 'Development',
      value: 320
    }, {
      label: 'Marketing',
      value: 180
    }, {
      label: 'Sales',
      value: 250
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      padding: '1rem'
    }}>
        <div>
          <h3>Delayed Tooltip</h3>
          <PieChart data={data} width={300} height={300} tooltip={{
          enabled: true,
          showDelay: 500,
          hideDelay: 200,
          style: {
            backgroundColor: '#ff6b6b',
            color: 'white'
          }
        }} />
        </div>
        
        <div>
          <h3>Custom Positioning</h3>
          <PieChart data={data} width={300} height={300} tooltip={{
          enabled: true,
          placement: {
            placement: 'top',
            offset: {
              x: 0,
              y: -20
            }
          },
          style: {
            backgroundColor: '#4ecdc4',
            color: 'white',
            borderRadius: '20px'
          }
        }} />
        </div>
        
        <div>
          <h3>Minimal Tooltip</h3>
          <PieChart data={data} width={300} height={300} tooltip={{
          enabled: true,
          content: (dataPoint, index, percentage) => \`\${dataPoint.label}: \${percentage?.toFixed(0)}%\`,
          style: {
            fontSize: '12px',
            padding: '4px 8px',
            backgroundColor: '#2c3e50',
            borderRadius: '4px'
          }
        }} />
        </div>
        
        <div>
          <h3>Animated Tooltip</h3>
          <PieChart data={data} width={300} height={300} tooltip={{
          enabled: true,
          animationDuration: 500,
          style: {
            backgroundColor: '#9b59b6',
            color: 'white',
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease'
          }
        }} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Various tooltip configurations including delays, positioning, styling, and animations.'
      }
    }
  }
}`,...(Gt=(Yt=Be.parameters)==null?void 0:Yt.docs)==null?void 0:Gt.source}}};const Ma=["Default","DonutChart","Variants","Minimal","Detailed","CustomColors","WithValueLabels","InsideLabels","RoundedSlices","LargePadding","SmallChart","LargeChart","NoLabels","NoData","InteractiveFeatures","CustomTooltipHTML","CustomTooltipComponent","TooltipVariations"];export{Ae as CustomColors,Ee as CustomTooltipComponent,qe as CustomTooltipHTML,De as Default,Te as Detailed,Ce as DonutChart,Re as InsideLabels,je as InteractiveFeatures,Me as LargeChart,Fe as LargePadding,Se as Minimal,$e as NoData,ke as NoLabels,Ve as RoundedSlices,Le as SmallChart,Be as TooltipVariations,he as Variants,Pe as WithValueLabels,Ma as __namedExportsOrder,La as default};
