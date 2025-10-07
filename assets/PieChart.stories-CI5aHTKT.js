import{j as D,a as ee}from"./jsx-runtime-D2eXtamC.js";import{r as Z}from"./index-SE77F2UD.js";import{c as je}from"./clsx-B-dksMZM.js";import{c as L,a as ea,s as fe,b as ta,f as we,C as aa,D as na}from"./ChartTooltip-Ckz6r7Tp.js";import{s as ra}from"./sum-CB6J5KXz.js";import{o as ia}from"./ordinal-BxAiDHEN.js";import{w as oa}from"./path-DyVhHtw_.js";import{p as sa}from"./pointer-Drloq0xg.js";import"./_commonjsHelpers-DM6icglO.js";const Ye=Math.abs,V=Math.atan2,se=Math.cos,la=Math.max,Ue=Math.min,X=Math.sin,pe=Math.sqrt,$=1e-12,ye=Math.PI,Ie=ye/2,Ne=2*ye;function da(e){return e>1?0:e<-1?ye:Math.acos(e)}function Ge(e){return e>=1?Ie:e<=-1?-Ie:Math.asin(e)}function ca(e){return e.innerRadius}function ua(e){return e.outerRadius}function pa(e){return e.startAngle}function ha(e){return e.endAngle}function ma(e){return e&&e.padAngle}function ga(e,i,p,b,x,f,y,a){var h=p-e,l=b-i,n=y-x,T=a-f,t=T*h-n*l;if(!(t*t<$))return t=(n*(i-f)-T*(e-x))/t,[e+t*h,i+t*l]}function De(e,i,p,b,x,f,y){var a=e-p,h=i-b,l=(y?f:-f)/pe(a*a+h*h),n=l*h,T=-l*a,t=e+n,d=i+T,m=p+n,v=b+T,k=(t+m)/2,c=(d+v)/2,S=m-t,A=v-d,w=S*S+A*A,R=x-f,F=t*v-m*d,H=(A<0?-1:1)*pe(la(0,R*R*w-F*F)),O=(F*A-S*H)/w,E=(-F*S-A*H)/w,q=(F*A+S*H)/w,C=(-F*S+A*H)/w,M=O-k,r=E-c,s=q-k,Y=C-c;return M*M+r*r>s*s+Y*Y&&(O=q,E=C),{cx:O,cy:E,x01:-n,y01:-T,x11:O*(x/R-1),y11:E*(x/R-1)}}function Je(){var e=ca,i=ua,p=L(0),b=null,x=pa,f=ha,y=ma,a=null,h=oa(l);function l(){var n,T,t=+e.apply(this,arguments),d=+i.apply(this,arguments),m=x.apply(this,arguments)-Ie,v=f.apply(this,arguments)-Ie,k=Ye(v-m),c=v>m;if(a||(a=n=h()),d<t&&(T=d,d=t,t=T),!(d>$))a.moveTo(0,0);else if(k>Ne-$)a.moveTo(d*se(m),d*X(m)),a.arc(0,0,d,m,v,!c),t>$&&(a.moveTo(t*se(v),t*X(v)),a.arc(0,0,t,v,m,c));else{var S=m,A=v,w=m,R=v,F=k,H=k,O=y.apply(this,arguments)/2,E=O>$&&(b?+b.apply(this,arguments):pe(t*t+d*d)),q=Ue(Ye(d-t)/2,+p.apply(this,arguments)),C=q,M=q,r,s;if(E>$){var Y=Ge(E/t*X(O)),re=Ge(E/d*X(O));(F-=Y*2)>$?(Y*=c?1:-1,w+=Y,R-=Y):(F=0,w=R=(m+v)/2),(H-=re*2)>$?(re*=c?1:-1,S+=re,A-=re):(H=0,S=A=(m+v)/2)}var P=d*se(S),N=d*X(S),te=t*se(R),G=t*X(R);if(q>$){var U=d*se(A),g=d*X(A),_=t*se(w),ie=t*X(w),z;if(k<ye)if(z=ga(P,N,_,ie,U,g,te,G)){var I=P-z[0],le=N-z[1],de=U-z[0],me=g-z[1],J=1/X(da((I*de+le*me)/(pe(I*I+le*le)*pe(de*de+me*me)))/2),oe=pe(z[0]*z[0]+z[1]*z[1]);C=Ue(q,(t-oe)/(J-1)),M=Ue(q,(d-oe)/(J+1))}else C=M=0}H>$?M>$?(r=De(_,ie,P,N,d,M,c),s=De(U,g,te,G,d,M,c),a.moveTo(r.cx+r.x01,r.cy+r.y01),M<q?a.arc(r.cx,r.cy,M,V(r.y01,r.x01),V(s.y01,s.x01),!c):(a.arc(r.cx,r.cy,M,V(r.y01,r.x01),V(r.y11,r.x11),!c),a.arc(0,0,d,V(r.cy+r.y11,r.cx+r.x11),V(s.cy+s.y11,s.cx+s.x11),!c),a.arc(s.cx,s.cy,M,V(s.y11,s.x11),V(s.y01,s.x01),!c))):(a.moveTo(P,N),a.arc(0,0,d,S,A,!c)):a.moveTo(P,N),!(t>$)||!(F>$)?a.lineTo(te,G):C>$?(r=De(te,G,U,g,t,-C,c),s=De(P,N,_,ie,t,-C,c),a.lineTo(r.cx+r.x01,r.cy+r.y01),C<q?a.arc(r.cx,r.cy,C,V(r.y01,r.x01),V(s.y01,s.x01),!c):(a.arc(r.cx,r.cy,C,V(r.y01,r.x01),V(r.y11,r.x11),!c),a.arc(0,0,t,V(r.cy+r.y11,r.cx+r.x11),V(s.cy+s.y11,s.cx+s.x11),c),a.arc(s.cx,s.cy,C,V(s.y11,s.x11),V(s.y01,s.x01),!c))):a.arc(0,0,t,R,w,c)}if(a.closePath(),n)return a=null,n+""||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +i.apply(this,arguments))/2,T=(+x.apply(this,arguments)+ +f.apply(this,arguments))/2-ye/2;return[se(T)*n,X(T)*n]},l.innerRadius=function(n){return arguments.length?(e=typeof n=="function"?n:L(+n),l):e},l.outerRadius=function(n){return arguments.length?(i=typeof n=="function"?n:L(+n),l):i},l.cornerRadius=function(n){return arguments.length?(p=typeof n=="function"?n:L(+n),l):p},l.padRadius=function(n){return arguments.length?(b=n==null?null:typeof n=="function"?n:L(+n),l):b},l.startAngle=function(n){return arguments.length?(x=typeof n=="function"?n:L(+n),l):x},l.endAngle=function(n){return arguments.length?(f=typeof n=="function"?n:L(+n),l):f},l.padAngle=function(n){return arguments.length?(y=typeof n=="function"?n:L(+n),l):y},l.context=function(n){return arguments.length?(a=n??null,l):a},l}function fa(e,i){return i<e?-1:i>e?1:i>=e?0:NaN}function ya(e){return e}function ba(){var e=ya,i=fa,p=null,b=L(0),x=L(Ne),f=L(0);function y(a){var h,l=(a=ea(a)).length,n,T,t=0,d=new Array(l),m=new Array(l),v=+b.apply(this,arguments),k=Math.min(Ne,Math.max(-Ne,x.apply(this,arguments)-v)),c,S=Math.min(Math.abs(k)/l,f.apply(this,arguments)),A=S*(k<0?-1:1),w;for(h=0;h<l;++h)(w=m[d[h]=h]=+e(a[h],h,a))>0&&(t+=w);for(i!=null?d.sort(function(R,F){return i(m[R],m[F])}):p!=null&&d.sort(function(R,F){return p(a[R],a[F])}),h=0,T=t?(k-l*A)/t:0;h<l;++h,v=c)n=d[h],w=m[n],c=v+(w>0?w*T:0)+A,m[n]={data:a[n],index:h,value:w,startAngle:v,endAngle:c,padAngle:S};return m}return y.value=function(a){return arguments.length?(e=typeof a=="function"?a:L(+a),y):e},y.sortValues=function(a){return arguments.length?(i=a,p=null,y):i},y.sort=function(a){return arguments.length?(p=a,i=null,y):p},y.startAngle=function(a){return arguments.length?(b=typeof a=="function"?a:L(+a),y):b},y.endAngle=function(a){return arguments.length?(x=typeof a=="function"?a:L(+a),y):x},y.padAngle=function(a){return arguments.length?(f=typeof a=="function"?a:L(+a),y):f},y}const va=Z.createContext(null),xa=["#2272B4","#04867D","#3BA65E","#DE7921","#E65B77","#8A63BF","#B45091","#137DAE","#A6630C","#FACB66"],ne=Z.forwardRef(({data:e=[],width:i=400,height:p=400,variant:b="default",title:x,innerRadius:f=0,outerRadius:y,cornerRadius:a=0,padAngle:h=0,theme:l,animation:n,legend:T,tooltip:t,showTooltip:d=!0,formatTooltip:m,showLabels:v=!0,showValues:k=!1,labelPosition:c="outside",keyboard:S=!1,ariaLabel:A,themeClass:w,optimized:R=!1,hoverDebounce:F=0,colorPalette:H=xa,className:O,...E},q)=>{const C=Z.useRef(null),M=Z.useRef(null),[r,s]=Z.useState(!1),[Y,re]=Z.useState({x:0,y:0}),[P,N]=Z.useState(null),te={colorScheme:"auto",cssVars:{"--chart-inner-radius":`${f}px`,"--chart-corner-radius":`${a}px`},...l},G={enabled:b==="detailed",duration:b==="detailed"?800:500,...n},U={show:b!=="minimal",position:"bottom",orientation:"horizontal",...T},g={enabled:(t==null?void 0:t.enabled)!==void 0?t.enabled:d,component:t==null?void 0:t.component,content:(t==null?void 0:t.content)||m,style:t==null?void 0:t.style,placement:(t==null?void 0:t.placement)||{placement:"auto",offset:{x:0,y:-10}},className:t==null?void 0:t.className,animationDuration:(t==null?void 0:t.animationDuration)||200,showDelay:(t==null?void 0:t.showDelay)||0,hideDelay:(t==null?void 0:t.hideDelay)||0,...t},_={top:x?40:20,right:20,bottom:U.show&&U.position==="bottom"?60:20,left:20},ie=i-_.left-_.right,z=p-_.top-_.bottom,I=y||Math.min(ie,z)/2-10,le=ie/2,de=z/2,{pieData:me,arc:J,labelArc:oe,totalValue:ce,colorScale:ge}=Z.useMemo(()=>{if(!e.length)return{pieData:[],arc:null,labelArc:null,totalValue:0,colorScale:null};const K=ra(e,o=>o.value),W=ba().value(o=>o.value).sort(null).padAngle(h)(e),ue=Je().innerRadius(f).outerRadius(I).cornerRadius(a),xe=Je().innerRadius(c==="inside"?(f+I)/2:I+20).outerRadius(c==="inside"?(f+I)/2:I+20),u=ia().domain(e.map(o=>o.label)).range(H);return{pieData:W,arc:ue,labelArc:xe,totalValue:K,colorScale:u}},[e,I,f,a,h,c,H]),Kt=m||((K,ve)=>{let W='<div class="db-piechart__tooltip-content">';return W+=`<div class="db-piechart__tooltip-label">${K.label}</div>`,W+=`<div class="db-piechart__tooltip-value">${we(",")(K.value)}</div>`,ve!==void 0&&(W+=`<div class="db-piechart__tooltip-percentage">${ve.toFixed(1)}%</div>`),W+="</div>",W});if(Z.useEffect(()=>{if(!C.current||!e.length||!J||!ge)return;const K=fe(C.current);K.selectAll("*").remove();const W=K.append("g").attr("transform",`translate(${_.left+le},${_.top+de})`).selectAll(".db-piechart__slice").data(me).enter().append("g").attr("class","db-piechart__slice"),ue=W.append("path").attr("class","db-piechart__path").attr("fill",u=>u.data.color||ge(u.data.label)||"#2272B4").attr("stroke","#FFFFFF").attr("stroke-width",2);if(G.enabled?ue.attr("d",J.startAngle(0).endAngle(0)).transition().duration(G.duration||500).delay((u,o)=>o*100).attrTween("d",function(u){const o=ta({startAngle:0,endAngle:0},{startAngle:u.startAngle,endAngle:u.endAngle});return function(Q){return J(o(Q))}}):ue.attr("d",J),v&&oe&&(W.append("text").attr("class","db-piechart__label").attr("transform",u=>`translate(${oe.centroid(u)})`).attr("dy","0.35em").style("text-anchor","middle").style("font-size","12px").style("font-weight","500").style("fill",c==="inside"?"#FFFFFF":"#37444F").style("pointer-events","none").text(u=>{const o=u.value/ce*100;return o<5?"":k?we(",")(u.data.value):`${o.toFixed(1)}%`}),c==="outside"&&W.append("text").attr("class","db-piechart__category-label").attr("transform",u=>{const o=oe.centroid(u);return o[0]=o[0]*1.3,o[1]=o[1]*1.3,`translate(${o})`}).attr("dy","-0.5em").style("text-anchor","middle").style("font-size","11px").style("font-weight","400").style("fill","#5F7281").style("pointer-events","none").text(u=>u.value/ce*100<5?"":u.data.label)),S&&ue.attr("tabindex",0).attr("role","button").attr("aria-label",u=>{const o=u.value/ce*100;return`${u.data.label}: ${we(",")(u.data.value)} (${o.toFixed(1)}%)`}).on("focus",function(u,o){if(g.enabled){const Q=e.indexOf(o.data),j=o.value/ce*100,B=J.centroid(o);re({x:B[0]+ie/2,y:B[1]+z/2}),N({dataPoint:o.data,percentage:j,index:Q}),s(!0)}fe(this).style("filter","brightness(1.1)")}).on("blur",function(){g.enabled&&(s(!1),N(null)),fe(this).style("filter","none")}),g.enabled){let u=null,o=null;ue.on("mouseenter",function(Q,j){const B=e.indexOf(j.data),ae=j.value/ce*100;o&&(clearTimeout(o),o=null),g.showDelay&&g.showDelay>0?u=window.setTimeout(()=>{xe(Q,j.data,ae,B)},g.showDelay):xe(Q,j.data,ae,B),fe(this).style("filter","brightness(1.1)").style("stroke-width",3)}).on("mouseleave",function(){u&&(clearTimeout(u),u=null),g.hideDelay&&g.hideDelay>0?o=window.setTimeout(()=>{s(!1),N(null)},g.hideDelay):(s(!1),N(null)),fe(this).style("filter","none").style("stroke-width",2)})}function xe(u,o,Q,j){if(!C.current)return;const[B,ae]=sa(u,C.current),We=B+_.left,Qe=ae+_.top;re({x:We,y:Qe}),N({dataPoint:o,percentage:Q,index:j}),s(!0)}if(U.show){const o=K.append("g").attr("class","db-piechart__legend").selectAll(".db-piechart__legend-item").data(e).enter().append("g").attr("class","db-piechart__legend-item"),Q=140,j=Math.floor(i/Q);o.attr("transform",(B,ae)=>{if(U.orientation==="horizontal"){const We=ae%j*Q,Qe=Math.floor(ae/j)*20;return`translate(${We}, ${p-40+Qe})`}else return`translate(10, ${30+ae*25})`}),o.append("rect").attr("width",12).attr("height",12).attr("fill",B=>B.color||ge(B.label)||"#2272B4"),o.append("text").attr("x",18).attr("y",6).attr("dy","0.35em").style("font-size","12px").style("fill","#37444F").text(B=>B.label)}x&&K.append("text").attr("class","db-piechart__title").attr("x",i/2).attr("y",25).style("text-anchor","middle").text(x)},[e,i,p,I,f,J,oe,ge,ce,v,k,c,d,U.show,x,_,le,de,Kt,G.enabled,G.duration]),!e.length)return D("div",{ref:q,className:je("db-piechart","db-piechart--empty",O),...E,children:D("div",{className:"db-piechart__empty-state",children:D("p",{children:"No data available"})})});const Zt={data:e,width:i,height:p,radius:I,svgRef:C},Xe=f>0;return D(va.Provider,{value:Zt,children:ee("div",{ref:q,className:je("db-piechart",`db-piechart--${b}`,{"db-piechart--donut":Xe,"db-piechart--optimized":R,"db-piechart--keyboard":S},w,O),"data-theme":te.colorScheme!=="auto"?te.colorScheme:void 0,style:{...te.cssVars,...E.style||{}},role:"img","aria-label":A||`${Xe?"Donut":"Pie"} chart with ${e.length} categories`,...E,children:[D("svg",{ref:C,className:"db-piechart__svg",width:i,height:p,role:"presentation","aria-hidden":"true"}),g.enabled&&P&&D(aa,{visible:r,position:Y,tooltipStyle:g.style,placement:g.placement,animationDuration:g.animationDuration,containerDimensions:{width:i,height:p},className:je("db-piechart__tooltip",g.className),role:"tooltip","aria-live":"polite",children:g.component?D(g.component,{data:P.dataPoint,index:P.index,additionalData:P.percentage,chartDimensions:{width:i,height:p}}):g.content?D("div",{dangerouslySetInnerHTML:{__html:g.content(P.dataPoint,P.index,P.percentage)}}):D(na,{label:P.dataPoint.label,value:we(",")(P.dataPoint.value),percentage:P.percentage,color:ge(P.dataPoint.label)})}),d&&!g.enabled&&D("div",{ref:M,className:"db-piechart__tooltip",role:"tooltip","aria-live":"polite"})]})})});ne.displayName="PieChart";try{ne.displayName="PieChart",ne.__docgenInfo={description:"",displayName:"PieChart",props:{data:{defaultValue:{value:"[]"},description:"Chart data points",name:"data",required:!1,type:{name:"PieChartDataPoint[]"}},width:{defaultValue:{value:"400"},description:"Chart width",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"400"},description:"Chart height",name:"height",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"Chart variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"detailed"'},{value:'"minimal"'}]}},title:{defaultValue:null,description:"Chart title",name:"title",required:!1,type:{name:"string"}},innerRadius:{defaultValue:{value:"0"},description:"Inner radius for donut chart (0 for full pie)",name:"innerRadius",required:!1,type:{name:"number"}},outerRadius:{defaultValue:null,description:"Outer radius (auto-calculated if not provided)",name:"outerRadius",required:!1,type:{name:"number"}},cornerRadius:{defaultValue:{value:"0"},description:"Corner radius for rounded slices",name:"cornerRadius",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"Padding between slices",name:"padAngle",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Theme configuration",name:"theme",required:!1,type:{name:"PieChartTheme"}},animation:{defaultValue:null,description:"Animation configuration",name:"animation",required:!1,type:{name:"PieChartAnimation"}},legend:{defaultValue:null,description:"Legend configuration",name:"legend",required:!1,type:{name:"PieChartLegend"}},tooltip:{defaultValue:null,description:"Enhanced tooltip configuration",name:"tooltip",required:!1,type:{name:"TooltipConfig<PieChartDataPoint>"}},showTooltip:{defaultValue:{value:"true"},description:"@deprecated Use tooltip.enabled instead",name:"showTooltip",required:!1,type:{name:"boolean"}},formatTooltip:{defaultValue:null,description:"@deprecated Use tooltip.content instead",name:"formatTooltip",required:!1,type:{name:"((_dataPoint: PieChartDataPoint, _percentage?: number) => string)"}},showLabels:{defaultValue:{value:"true"},description:"Show percentage labels on slices",name:"showLabels",required:!1,type:{name:"boolean"}},showValues:{defaultValue:{value:"false"},description:"Show value labels instead of percentages",name:"showValues",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"outside"},description:"Label position relative to slice",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"inside"'},{value:'"outside"'}]}},keyboard:{defaultValue:{value:"false"},description:"Enable keyboard navigation",name:"keyboard",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"ARIA label for accessibility",name:"ariaLabel",required:!1,type:{name:"string"}},themeClass:{defaultValue:null,description:"Custom CSS class for theming",name:"themeClass",required:!1,type:{name:"string"}},optimized:{defaultValue:{value:"false"},description:"Enable performance optimizations",name:"optimized",required:!1,type:{name:"boolean"}},hoverDebounce:{defaultValue:{value:"0"},description:"Debounce hover events (ms)",name:"hoverDebounce",required:!1,type:{name:"number"}},colorPalette:{defaultValue:{value:`[
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
]`},description:"Custom color palette",name:"colorPalette",required:!1,type:{name:"string[]"}}}}}catch{}const La={title:"Data Display/PieChart",component:ne,parameters:{layout:"centered",docs:{description:{component:"A flexible pie chart component built with D3.js for visualizing proportional data. Supports donut charts, custom colors, legends, labels, and accessibility features."}}},tags:["autodocs"],argTypes:{data:{control:"object",description:"Array of data points with labels and values"},width:{control:{type:"range",min:200,max:800,step:50},description:"Chart width in pixels"},height:{control:{type:"range",min:200,max:800,step:50},description:"Chart height in pixels"},variant:{control:"radio",options:["default","minimal","detailed"],description:"Visual variant of the chart"},innerRadius:{control:{type:"range",min:0,max:100,step:5},description:"Inner radius for donut chart (0 for full pie)"},cornerRadius:{control:{type:"range",min:0,max:10,step:1},description:"Corner radius for rounded slices"},padAngle:{control:{type:"range",min:0,max:.1,step:.01},description:"Padding between slices"},showLabels:{control:"boolean",description:"Show labels on slices"},showValues:{control:"boolean",description:"Show values instead of percentages"},labelPosition:{control:"radio",options:["inside","outside"],description:"Position of labels relative to slices"},showTooltip:{control:"boolean",description:"Enable interactive tooltips"},title:{control:"text",description:"Chart title"}}},be=[{label:"Chrome",value:65.2},{label:"Safari",value:18.8},{label:"Edge",value:4.3},{label:"Firefox",value:3.2},{label:"Opera",value:2.4},{label:"Others",value:6.1}],He=[{label:"Q1",value:25e3},{label:"Q2",value:32e3},{label:"Q3",value:28e3},{label:"Q4",value:35e3}],Oe=[{label:"Technology",value:45},{label:"Healthcare",value:30},{label:"Finance",value:15},{label:"Education",value:10}],wa=[{label:"Marketing",value:15e3,color:"#2272B4"},{label:"Development",value:25e3,color:"#04867D"},{label:"Sales",value:12e3,color:"#3BA65E"},{label:"Operations",value:8e3,color:"#DE7921"}],Ce={args:{data:be,width:400,height:400,variant:"default",title:"Browser Market Share"}},Se={args:{data:He,width:400,height:400,innerRadius:60,title:"Quarterly Sales (Donut)",showValues:!0},parameters:{docs:{description:{story:"Donut chart with inner radius to create a hollow center."}}}},he={args:{data:Oe,width:400,height:400,title:"Chart Variants"},parameters:{docs:{description:{story:"Different visual variants: default shows full features, minimal removes legend and labels, detailed adds enhanced styling."}}}},Ae={args:{...he.args,variant:"minimal",title:"Minimal Pie Chart"}},Pe={args:{...he.args,variant:"detailed",title:"Detailed Pie Chart"}},Te={args:{data:wa,width:400,height:400,title:"Budget Allocation",legend:{show:!0,position:"right",orientation:"vertical"}},parameters:{docs:{description:{story:"Pie chart with custom colors defined in the data points."}}}},Re={args:{data:He,width:400,height:400,showValues:!0,title:"Sales by Quarter",labelPosition:"outside"},parameters:{docs:{description:{story:"Pie chart showing actual values instead of percentages on labels."}}}},Ve={args:{data:Oe,width:400,height:400,labelPosition:"inside",title:"Inside Labels",innerRadius:40},parameters:{docs:{description:{story:"Donut chart with labels positioned inside the slices."}}}},Fe={args:{data:He,width:400,height:400,cornerRadius:5,padAngle:.02,title:"Rounded Slices",innerRadius:50},parameters:{docs:{description:{story:"Pie chart with rounded corners and padding between slices."}}}},Le={args:{data:Oe,width:400,height:400,padAngle:.05,title:"Separated Slices",innerRadius:30},parameters:{docs:{description:{story:"Pie chart with large padding creating separated slices."}}}},ke={args:{data:Oe,width:250,height:250,variant:"minimal",title:"Compact Chart"},parameters:{docs:{description:{story:"Small pie chart suitable for dashboards and compact layouts."}}}},Me={args:{data:be,width:600,height:600,variant:"detailed",title:"Large Detailed Chart",cornerRadius:3,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Large pie chart with detailed styling and bottom legend."}}}},$e={args:{data:He,width:400,height:400,showLabels:!1,title:"Chart with Legend Only",legend:{show:!0,position:"right",orientation:"vertical"}},parameters:{docs:{description:{story:"Pie chart without slice labels, relying on legend for identification."}}}},qe={args:{data:[],width:400,height:400,title:"No Data State"},parameters:{docs:{description:{story:"Empty state when no data is provided to the chart."}}}},_e={args:{data:be,width:500,height:500,variant:"detailed",title:"Interactive Pie Chart",showTooltip:!0,cornerRadius:2,padAngle:.01,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Full-featured pie chart with tooltips and interactive elements. Hover over slices to see details."}}}},ze={args:{data:be,width:500,height:500,title:"Custom HTML Tooltip",tooltip:{enabled:!0,content:(e,i,p)=>`
        <div style="padding: 8px; border-left: 4px solid #2272B4;">
          <h4 style="margin: 0 0 8px 0; color: #1890FF;">${e.label}</h4>
          <p style="margin: 0; font-size: 16px; font-weight: bold;">${e.value.toLocaleString()}</p>
          <p style="margin: 4px 0 0 0; font-size: 12px; opacity: 0.8;">${p==null?void 0:p.toFixed(1)}% of total</p>
          <small style="color: #666;">Data point #${(i||0)+1}</small>
        </div>
      `,style:{backgroundColor:"white",color:"#333",borderRadius:"8px",padding:"0",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.12)",border:"1px solid #e8e8e8"}}},parameters:{docs:{description:{story:"Demonstrates custom HTML tooltip content with enhanced styling and formatting."}}}},Be={args:{data:be,width:500,height:500,title:"Custom React Tooltip Component",tooltip:{enabled:!0,component:({data:e,additionalData:i})=>ee("div",{style:{background:"linear-gradient(145deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"16px",borderRadius:"12px",textAlign:"center",minWidth:"200px"},children:[ee("div",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"8px"},children:["🍰 ",e.label]}),D("div",{style:{fontSize:"24px",fontWeight:"800",margin:"8px 0"},children:e.value.toLocaleString()}),ee("div",{style:{fontSize:"14px",opacity:.9},children:[i==null?void 0:i.toFixed(1),"% share"]}),D("div",{style:{marginTop:"12px",padding:"6px 12px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"6px",fontSize:"12px"},children:"Click for details"})]}),style:{padding:"0",backgroundColor:"transparent",border:"none",boxShadow:"0 12px 48px rgba(0, 0, 0, 0.25)"}}},parameters:{docs:{description:{story:"Shows how to use a custom React component for rich, interactive tooltip content."}}}},Ee={render:()=>{const e=[{label:"Design",value:450},{label:"Development",value:320},{label:"Marketing",value:180},{label:"Sales",value:250}];return ee("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",padding:"1rem"},children:[ee("div",{children:[D("h3",{children:"Delayed Tooltip"}),D(ne,{data:e,width:300,height:300,tooltip:{enabled:!0,showDelay:500,hideDelay:200,style:{backgroundColor:"#ff6b6b",color:"white"}}})]}),ee("div",{children:[D("h3",{children:"Custom Positioning"}),D(ne,{data:e,width:300,height:300,tooltip:{enabled:!0,placement:{placement:"top",offset:{x:0,y:-20}},style:{backgroundColor:"#4ecdc4",color:"white",borderRadius:"20px"}}})]}),ee("div",{children:[D("h3",{children:"Minimal Tooltip"}),D(ne,{data:e,width:300,height:300,tooltip:{enabled:!0,content:(i,p,b)=>`${i.label}: ${b==null?void 0:b.toFixed(0)}%`,style:{fontSize:"12px",padding:"4px 8px",backgroundColor:"#2c3e50",borderRadius:"4px"}}})]}),ee("div",{children:[D("h3",{children:"Animated Tooltip"}),D(ne,{data:e,width:300,height:300,tooltip:{enabled:!0,animationDuration:500,style:{backgroundColor:"#9b59b6",color:"white",transform:"scale(1.05)",transition:"transform 0.3s ease"}}})]})]})},parameters:{docs:{description:{story:"Various tooltip configurations including delays, positioning, styling, and animations."}}}};var Ke,Ze,et;Ce.parameters={...Ce.parameters,docs:{...(Ke=Ce.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: marketShareData,
    width: 400,
    height: 400,
    variant: 'default',
    title: 'Browser Market Share'
  }
}`,...(et=(Ze=Ce.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;Se.parameters={...Se.parameters,docs:{...(tt=Se.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=Se.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var rt,it,ot;he.parameters={...he.parameters,docs:{...(rt=he.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(it=he.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};var st,lt,dt;Ae.parameters={...Ae.parameters,docs:{...(st=Ae.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...Variants.args,
    variant: 'minimal',
    title: 'Minimal Pie Chart'
  }
}`,...(dt=(lt=Ae.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ct,ut,pt;Pe.parameters={...Pe.parameters,docs:{...(ct=Pe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ...Variants.args,
    variant: 'detailed',
    title: 'Detailed Pie Chart'
  }
}`,...(pt=(ut=Pe.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var ht,mt,gt;Te.parameters={...Te.parameters,docs:{...(ht=Te.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(gt=(mt=Te.parameters)==null?void 0:mt.docs)==null?void 0:gt.source}}};var ft,yt,bt;Re.parameters={...Re.parameters,docs:{...(ft=Re.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(bt=(yt=Re.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var vt,xt,wt;Ve.parameters={...Ve.parameters,docs:{...(vt=Ve.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=Ve.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Dt,Ct,St;Fe.parameters={...Fe.parameters,docs:{...(Dt=Fe.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(St=(Ct=Fe.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var At,Pt,Tt;Le.parameters={...Le.parameters,docs:{...(At=Le.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Tt=(Pt=Le.parameters)==null?void 0:Pt.docs)==null?void 0:Tt.source}}};var Rt,Vt,Ft;ke.parameters={...ke.parameters,docs:{...(Rt=ke.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ft=(Vt=ke.parameters)==null?void 0:Vt.docs)==null?void 0:Ft.source}}};var Lt,kt,Mt;Me.parameters={...Me.parameters,docs:{...(Lt=Me.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Mt=(kt=Me.parameters)==null?void 0:kt.docs)==null?void 0:Mt.source}}};var $t,qt,_t;$e.parameters={...$e.parameters,docs:{...($t=$e.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(_t=(qt=$e.parameters)==null?void 0:qt.docs)==null?void 0:_t.source}}};var zt,Bt,Et;qe.parameters={...qe.parameters,docs:{...(zt=qe.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=qe.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Nt,It,Ht;_e.parameters={..._e.parameters,docs:{...(Nt=_e.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ht=(It=_e.parameters)==null?void 0:It.docs)==null?void 0:Ht.source}}};var Ot,Wt,Qt;ze.parameters={...ze.parameters,docs:{...(Ot=ze.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Qt=(Wt=ze.parameters)==null?void 0:Wt.docs)==null?void 0:Qt.source}}};var jt,Ut,Xt;Be.parameters={...Be.parameters,docs:{...(jt=Be.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=Be.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Yt,Gt,Jt;Ee.parameters={...Ee.parameters,docs:{...(Yt=Ee.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=(Gt=Ee.parameters)==null?void 0:Gt.docs)==null?void 0:Jt.source}}};const ka=["Default","DonutChart","Variants","Minimal","Detailed","CustomColors","WithValueLabels","InsideLabels","RoundedSlices","LargePadding","SmallChart","LargeChart","NoLabels","NoData","InteractiveFeatures","CustomTooltipHTML","CustomTooltipComponent","TooltipVariations"];export{Te as CustomColors,Be as CustomTooltipComponent,ze as CustomTooltipHTML,Ce as Default,Pe as Detailed,Se as DonutChart,Ve as InsideLabels,_e as InteractiveFeatures,Me as LargeChart,Le as LargePadding,Ae as Minimal,qe as NoData,$e as NoLabels,Fe as RoundedSlices,ke as SmallChart,Ee as TooltipVariations,he as Variants,Re as WithValueLabels,ka as __namedExportsOrder,La as default};
