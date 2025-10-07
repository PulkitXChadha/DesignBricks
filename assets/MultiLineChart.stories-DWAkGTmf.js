import{j as a,a as i}from"./jsx-runtime-D2eXtamC.js";import{M as r}from"./MultiLineChart-DzF7T0iJ.js";import"./index-SE77F2UD.js";import"./_commonjsHelpers-DM6icglO.js";import"./clsx-B-dksMZM.js";import"./ChartTooltip-Ckz6r7Tp.js";import"./step-BPRPw3R2.js";import"./linear-Bfi9Vb7F.js";import"./line-BLb5Qx5M.js";import"./path-DyVhHtw_.js";import"./band-BzzEMzBQ.js";import"./ordinal-BxAiDHEN.js";import"./pointer-Drloq0xg.js";const je={title:"Data Display/MultiLineChart",component:r,parameters:{layout:"centered",docs:{description:{component:`
A modern, powerful multi-line chart component for visualizing multiple data series simultaneously.

## Key Features
- **Multiple Data Series**: Display multiple lines with automatic color assignment and legend
- **Enhanced Interactivity**: Tooltips show data from all series at the hovered position
- **Flexible Data Structure**: Each series has its own name, data, and styling options
- **Smart Legends**: Automatically positioned legends with series identification
- **Performance Optimized**: Efficient rendering for multiple series with large datasets

## Usage
\`\`\`tsx
<MultiLineChart
  series={[
    {
      id: 'sales',
      name: 'Sales',
      data: salesData,
      color: 'primary'
    },
    {
      id: 'profit',
      name: 'Profit',
      data: profitData,
      color: 'success'
    }
  ]}
  legend={{ show: true, position: 'bottom' }}
  showTooltip={true}
/>
\`\`\`

Perfect for comparing multiple metrics, trend analysis, and comprehensive data visualization.
        `}}},tags:["autodocs"],argTypes:{series:{description:"Array of data series to display",control:{type:"object"}},width:{description:"Chart width in pixels",control:{type:"number",min:200,max:1200,step:50}},height:{description:"Chart height in pixels",control:{type:"number",min:150,max:800,step:50}},variant:{description:"Chart display variant",control:{type:"select"},options:["default","minimal","detailed"]},curve:{description:"Line curve type",control:{type:"select"},options:["linear","smooth","step"]},showPoints:{description:"Show data points on the lines",control:{type:"boolean"}},showTooltip:{description:"Show tooltip on hover",control:{type:"boolean"}},title:{description:"Chart title",control:{type:"text"}}}},e=(t=12,o=50,n=20)=>{const c=new Date("2024-01-01");return Array.from({length:t},(s,l)=>({x:new Date(c.getTime()+l*24*60*60*1e3*30),y:Math.round((Math.sin(l*.5)*n+o+Math.random()*10)*100)/100,label:`Point ${l+1}`}))},A=(t=10,o=1,n=0)=>Array.from({length:t},(c,s)=>({x:s*2,y:Math.round((Math.pow(s,1.3)*o+n+Math.random()*5)*100)/100,label:`Value ${s}`})),_e=e(12,45,12),Ve=e(12,120,25),$e=[{id:"cpu",name:"CPU Usage",data:e(10,65,15),color:"primary"},{id:"memory",name:"Memory Usage",data:e(10,45,10),color:"secondary"},{id:"disk",name:"Disk I/O",data:e(10,30,8),color:"warning"}],Ee=[{id:"revenue",name:"Revenue",data:Ve,color:"primary"},{id:"profit",name:"Profit",data:_e,color:"success"},{id:"expenses",name:"Expenses",data:e(12,75,10),color:"error"}],m={args:{series:[{id:"series1",name:"Series 1",data:e(12,60,15),color:"primary"},{id:"series2",name:"Series 2",data:e(12,40,12),color:"secondary"}],width:700,height:400,title:"Multi-Line Chart Example",curve:"smooth",showTooltip:!0,showPoints:!0,xAxis:{label:"Time Period",variant:"default"},yAxis:{label:"Value",variant:"default"},grid:{show:!0,strokeDasharray:"2,2",opacity:.3},legend:{show:!0,position:"bottom"}}},p={args:{series:$e,width:800,height:400,title:"System Performance Metrics",curve:"smooth",showTooltip:!0,showPoints:!0,xAxis:{label:"Time",variant:"default"},yAxis:{label:"Usage (%)",variant:"default",tickFormatter:t=>`${t}%`},legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"System performance monitoring dashboard showing CPU, Memory, and Disk I/O metrics over time. Demonstrates automatic color assignment and legend generation."}}}},h={args:{series:Ee,width:800,height:450,title:"Financial Performance Overview",curve:"smooth",showTooltip:!0,showPercentageChange:!0,xAxis:{label:"Month",variant:"detailed"},yAxis:{label:"Amount ($K)",variant:"detailed",tickFormatter:t=>`$${t}K`},legend:{show:!0,position:"bottom"},variant:"detailed"},parameters:{docs:{description:{story:"Financial dashboard comparing Revenue, Profit, and Expenses. Uses the detailed variant with enhanced styling and custom Y-axis formatting."}}}},u={render:()=>{const t=[{id:"primary",name:"Primary",data:e(8,60,10),color:"primary"},{id:"secondary",name:"Secondary",data:e(8,50,8),color:"secondary"},{id:"success",name:"Success",data:e(8,45,12),color:"success"},{id:"warning",name:"Warning",data:e(8,55,15),color:"warning"},{id:"error",name:"Error",data:e(8,40,8),color:"error"},{id:"info",name:"Info",data:e(8,65,10),color:"info"}];return a(r,{series:t,width:900,height:400,title:"All Available Colors",curve:"smooth",showTooltip:!0,showPoints:!0,legend:{show:!0,position:"bottom"}})},parameters:{docs:{description:{story:"Demonstrates all available color options for series. Shows automatic color assignment and legend with multiple series."}}}},g={args:{series:[{id:"custom1",name:"Custom Purple",data:e(10,60,12),customColor:"#8B5CF6"},{id:"custom2",name:"Custom Orange",data:e(10,45,10),customColor:"#F59E0B"},{id:"custom3",name:"Custom Pink",data:e(10,55,8),customColor:"#EC4899"}],width:700,height:350,title:"Custom Color Series",showTooltip:!0,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Custom colors using the customColor property. Override the default color palette with any hex color."}}}},y={args:{series:[{id:"solid",name:"Solid Line",data:e(10,60,10),color:"primary"},{id:"dashed",name:"Dashed Line",data:e(10,45,8),color:"secondary",strokeDasharray:"5,5"},{id:"dotted",name:"Dotted Line",data:e(10,55,12),color:"success",strokeDasharray:"2,2"},{id:"thick",name:"Thick Line",data:e(10,35,8),color:"warning",strokeWidth:4}],width:700,height:350,title:"Line Style Variations",showTooltip:!0,legend:{show:!0,position:"bottom"}},parameters:{docs:{description:{story:"Different line styles using strokeDasharray and strokeWidth properties. Useful for distinguishing series in black and white prints."}}}},w={render:()=>{const t=[{id:"metric1",name:"Metric 1",data:e(8,60,12),color:"primary"},{id:"metric2",name:"Metric 2",data:e(8,45,10),color:"secondary"}];return i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[i("div",{children:[a("h3",{children:"Default Variant"}),a(r,{series:t,width:500,height:200,variant:"default",title:"Default Configuration",showTooltip:!0})]}),i("div",{children:[a("h3",{children:"Minimal Variant"}),a(r,{series:t,width:500,height:200,variant:"minimal",title:"Minimal Configuration",showTooltip:!0})]}),i("div",{children:[a("h3",{children:"Detailed Variant"}),a(r,{series:t,width:500,height:200,variant:"detailed",title:"Detailed Configuration",showTooltip:!0,animation:{enabled:!0,duration:300}})]})]})},parameters:{docs:{description:{story:"Demonstrates the three chart variants: default (balanced), minimal (clean), and detailed (enhanced styling)."}}}},v={render:()=>{const t=[{id:"data1",name:"Data Series 1",data:A(8,1.5,20),color:"primary"},{id:"data2",name:"Data Series 2",data:A(8,1.2,15),color:"secondary"}];return i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a(r,{series:t,width:500,height:200,curve:"linear",title:"Linear Curves",showTooltip:!0}),a(r,{series:t,width:500,height:200,curve:"smooth",title:"Smooth Curves",showTooltip:!0}),a(r,{series:t,width:500,height:200,curve:"step",title:"Step Curves",showTooltip:!0})]})},parameters:{docs:{description:{story:"Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after)."}}}},f={render:()=>{const t=[{id:"alpha",name:"Alpha",data:e(6,60,10),color:"primary"},{id:"beta",name:"Beta",data:e(6,45,8),color:"secondary"},{id:"gamma",name:"Gamma",data:e(6,55,12),color:"success"}];return i("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[i("div",{children:[a("h3",{children:"Bottom Legend"}),a(r,{series:t,width:600,height:200,title:"Legend at Bottom",legend:{show:!0,position:"bottom"}})]}),i("div",{children:[a("h3",{children:"Top Legend"}),a(r,{series:t,width:600,height:200,title:"Legend at Top",legend:{show:!0,position:"top"}})]})]})},parameters:{docs:{description:{story:"Legend positioning options. The legend automatically appears when there are multiple series."}}}},b={args:{series:[{id:"trend1",name:"Primary Trend",data:e(24,100,20),color:"primary"},{id:"trend2",name:"Secondary Trend",data:e(24,80,15),color:"secondary"},{id:"trend3",name:"Tertiary Trend",data:e(24,60,18),color:"success"},{id:"trend4",name:"Quaternary Trend",data:e(24,70,12),color:"warning"}],width:1e3,height:500,title:"Large Dataset Performance",variant:"detailed",showTooltip:!0,optimized:!0,xAxis:{label:"Time Period (24 months)",variant:"detailed"},yAxis:{label:"Value",variant:"detailed"}},parameters:{docs:{description:{story:"Large dataset with 4 series and 24 data points each. Demonstrates performance with optimized rendering enabled."}}}},x={args:{series:[],width:600,height:400,title:"No Data Available"},parameters:{docs:{description:{story:"Empty state when no series data is provided."}}}},S={args:{series:[{id:"single",name:"Single Series",data:e(12,60,15),color:"primary"}],width:600,height:300,title:"Single Series (Legend Hidden)",showTooltip:!0,legend:{show:!1}},parameters:{docs:{description:{story:"Single series example. Legend is automatically hidden when only one series is present."}}}},D={args:{series:[{id:"visible1",name:"Always Visible",data:e(10,60,12),color:"primary",visible:!0},{id:"hidden",name:"Hidden Series",data:e(10,45,10),color:"secondary",visible:!1},{id:"visible2",name:"Also Visible",data:e(10,55,8),color:"success",visible:!0}],width:600,height:300,title:"Series Visibility Control",showTooltip:!0},parameters:{docs:{description:{story:"Controlling series visibility with the visible property. Hidden series are not rendered or included in calculations."}}}},T={args:{series:[{id:"function1",name:"f(x) = x²",data:A(10,2,5),color:"primary"},{id:"function2",name:"f(x) = x^1.5",data:A(10,1.5,10),color:"secondary"}],width:600,height:350,title:"Mathematical Functions",curve:"smooth",xAxis:{label:"X Value"},yAxis:{label:"Y Value"}},parameters:{docs:{description:{story:"Numeric data example showing mathematical functions with smooth curves."}}}},C={args:{series:[{id:"accessible1",name:"Metric A",data:e(8,60,10),color:"primary"},{id:"accessible2",name:"Metric B",data:e(8,45,8),color:"secondary"}],width:600,height:300,title:"Accessible Multi-Line Chart",showTooltip:!0,keyboard:!0,ariaLabel:"Multi-line chart comparing Metric A and Metric B over 8 time periods",xAxis:{label:"Time Period",tickFormatter:t=>new Date(t).toLocaleDateString("en-US",{month:"short"})},yAxis:{label:"Value",tickFormatter:t=>`${t.toFixed(0)}`}},parameters:{docs:{description:{story:"Enhanced accessibility features including keyboard navigation (Tab through data points), ARIA labels, and screen reader support."}}}},M={args:{series:[{id:"sales",name:"Sales",data:[{x:new Date("2024-01-01"),y:1250.75},{x:new Date("2024-02-01"),y:1890.25},{x:new Date("2024-03-01"),y:2100.5},{x:new Date("2024-04-01"),y:1750},{x:new Date("2024-05-01"),y:2450.8}],color:"primary"},{id:"costs",name:"Costs",data:[{x:new Date("2024-01-01"),y:850.25},{x:new Date("2024-02-01"),y:1200.5},{x:new Date("2024-03-01"),y:1400.75},{x:new Date("2024-04-01"),y:1100},{x:new Date("2024-05-01"),y:1600.3}],color:"error"}],width:600,height:350,title:"Revenue vs Costs (Custom Formatting)",showTooltip:!0,formatTooltip:t=>{var P,F;if(!t.length)return"";const o=new Date(t[0].dataPoint.x).toLocaleDateString("en-US",{month:"short",year:"numeric"});let n='<div class="db-multilinechart__tooltip-content">';n+=`<div class="db-multilinechart__tooltip-date">${o}</div>`,t.forEach(({series:d,dataPoint:Pe})=>{const Fe=`$${(Pe.y/1e3).toFixed(1)}K`,ke=d.color==="primary"?"#2272B4":"#E65B77";n+='<div class="db-multilinechart__tooltip-series">',n+=`<div class="db-multilinechart__tooltip-series-indicator" style="background-color: ${ke}"></div>`,n+=`<span class="db-multilinechart__tooltip-series-name">${d.name}:</span>`,n+=`<span class="db-multilinechart__tooltip-series-value">${Fe}</span>`,n+="</div>"});const c=((P=t.find(d=>d.series.id==="sales"))==null?void 0:P.dataPoint.y)||0,s=((F=t.find(d=>d.series.id==="costs"))==null?void 0:F.dataPoint.y)||0,l=c-s,Ae=`$${(l/1e3).toFixed(1)}K`;return n+='<div style="border-top: 1px solid #445461; margin-top: 8px; padding-top: 8px;">',n+='<div class="db-multilinechart__tooltip-series">',n+='<span class="db-multilinechart__tooltip-series-name">Profit:</span>',n+=`<span class="db-multilinechart__tooltip-series-value" style="color: ${l>=0?"#3BA65E":"#E65B77"}">${Ae}</span>`,n+="</div>",n+="</div>",n+="</div>",n}},parameters:{docs:{description:{story:"Custom tooltip formatting with calculated metrics. Shows sales, costs, and computed profit in a formatted tooltip."}}}},L={render:()=>i("div",{style:{padding:"24px",backgroundColor:"#F6F7F9",borderRadius:"12px"},children:[i("div",{style:{marginBottom:"20px"},children:[a("h2",{style:{margin:"0 0 8px 0",fontSize:"18px",color:"#1F272D"},children:"Quarterly Performance Comparison"}),a("p",{style:{margin:0,fontSize:"14px",color:"#5F7281"},children:"Comparing Q1 performance across years with target benchmarks"})]}),a(r,{series:[{id:"q1_2024",name:"2024 Q1",data:[{x:"Jan",y:45},{x:"Feb",y:52},{x:"Mar",y:48}],color:"primary"},{id:"q1_2023",name:"2023 Q1",data:[{x:"Jan",y:38},{x:"Feb",y:45},{x:"Mar",y:41}],color:"secondary",strokeDasharray:"4,4"},{id:"target",name:"Target",data:[{x:"Jan",y:50},{x:"Feb",y:50},{x:"Mar",y:50}],color:"warning",strokeDasharray:"2,2"}],width:700,height:350,curve:"linear",showTooltip:!0,showPoints:!0,variant:"default",xAxis:{label:"Month",variant:"default"},yAxis:{label:"Performance Score",variant:"default",tickFormatter:o=>`${o}`},legend:{show:!0,position:"bottom"}})]}),parameters:{docs:{description:{story:"Year-over-year comparison dashboard with target benchmarks. Uses different line styles to distinguish between current year, previous year, and targets."}}}};var k,_,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'series1',
      name: 'Series 1',
      data: generateTimeSeriesData(12, 60, 15),
      color: 'primary'
    }, {
      id: 'series2',
      name: 'Series 2',
      data: generateTimeSeriesData(12, 40, 12),
      color: 'secondary'
    }],
    width: 700,
    height: 400,
    title: 'Multi-Line Chart Example',
    curve: 'smooth',
    showTooltip: true,
    showPoints: true,
    xAxis: {
      label: 'Time Period',
      variant: 'default'
    },
    yAxis: {
      label: 'Value',
      variant: 'default'
    },
    grid: {
      show: true,
      strokeDasharray: '2,2',
      opacity: 0.3
    },
    legend: {
      show: true,
      position: 'bottom'
    }
  }
}`,...(V=(_=m.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var $,E,B;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    series: performanceMetrics,
    width: 800,
    height: 400,
    title: 'System Performance Metrics',
    curve: 'smooth',
    showTooltip: true,
    showPoints: true,
    xAxis: {
      label: 'Time',
      variant: 'default'
    },
    yAxis: {
      label: 'Usage (%)',
      variant: 'default',
      tickFormatter: (value: number) => \`\${value}%\`
    },
    legend: {
      show: true,
      position: 'bottom'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'System performance monitoring dashboard showing CPU, Memory, and Disk I/O metrics over time. Demonstrates automatic color assignment and legend generation.'
      }
    }
  }
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var H,U,z;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    series: financialSeries,
    width: 800,
    height: 450,
    title: 'Financial Performance Overview',
    curve: 'smooth',
    showTooltip: true,
    showPercentageChange: true,
    xAxis: {
      label: 'Month',
      variant: 'detailed'
    },
    yAxis: {
      label: 'Amount ($K)',
      variant: 'detailed',
      tickFormatter: (value: number) => \`$\${value}K\`
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    variant: 'detailed'
  },
  parameters: {
    docs: {
      description: {
        story: 'Financial dashboard comparing Revenue, Profit, and Expenses. Uses the detailed variant with enhanced styling and custom Y-axis formatting.'
      }
    }
  }
}`,...(z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var N,O,Q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const multiColorSeries: MultiLineChartSeries[] = [{
      id: 'primary',
      name: 'Primary',
      data: generateTimeSeriesData(8, 60, 10),
      color: 'primary'
    }, {
      id: 'secondary',
      name: 'Secondary',
      data: generateTimeSeriesData(8, 50, 8),
      color: 'secondary'
    }, {
      id: 'success',
      name: 'Success',
      data: generateTimeSeriesData(8, 45, 12),
      color: 'success'
    }, {
      id: 'warning',
      name: 'Warning',
      data: generateTimeSeriesData(8, 55, 15),
      color: 'warning'
    }, {
      id: 'error',
      name: 'Error',
      data: generateTimeSeriesData(8, 40, 8),
      color: 'error'
    }, {
      id: 'info',
      name: 'Info',
      data: generateTimeSeriesData(8, 65, 10),
      color: 'info'
    }];
    return <MultiLineChart series={multiColorSeries} width={900} height={400} title="All Available Colors" curve="smooth" showTooltip={true} showPoints={true} legend={{
      show: true,
      position: 'bottom'
    }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all available color options for series. Shows automatic color assignment and legend with multiple series.'
      }
    }
  }
}`,...(Q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var K,R,I;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'custom1',
      name: 'Custom Purple',
      data: generateTimeSeriesData(10, 60, 12),
      customColor: '#8B5CF6'
    }, {
      id: 'custom2',
      name: 'Custom Orange',
      data: generateTimeSeriesData(10, 45, 10),
      customColor: '#F59E0B'
    }, {
      id: 'custom3',
      name: 'Custom Pink',
      data: generateTimeSeriesData(10, 55, 8),
      customColor: '#EC4899'
    }],
    width: 700,
    height: 350,
    title: 'Custom Color Series',
    showTooltip: true,
    legend: {
      show: true,
      position: 'bottom'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom colors using the customColor property. Override the default color palette with any hex color.'
      }
    }
  }
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var J,W,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'solid',
      name: 'Solid Line',
      data: generateTimeSeriesData(10, 60, 10),
      color: 'primary'
    }, {
      id: 'dashed',
      name: 'Dashed Line',
      data: generateTimeSeriesData(10, 45, 8),
      color: 'secondary',
      strokeDasharray: '5,5'
    }, {
      id: 'dotted',
      name: 'Dotted Line',
      data: generateTimeSeriesData(10, 55, 12),
      color: 'success',
      strokeDasharray: '2,2'
    }, {
      id: 'thick',
      name: 'Thick Line',
      data: generateTimeSeriesData(10, 35, 8),
      color: 'warning',
      strokeWidth: 4
    }],
    width: 700,
    height: 350,
    title: 'Line Style Variations',
    showTooltip: true,
    legend: {
      show: true,
      position: 'bottom'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Different line styles using strokeDasharray and strokeWidth properties. Useful for distinguishing series in black and white prints.'
      }
    }
  }
}`,...(Y=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var j,q,G;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const sampleSeries: MultiLineChartSeries[] = [{
      id: 'metric1',
      name: 'Metric 1',
      data: generateTimeSeriesData(8, 60, 12),
      color: 'primary'
    }, {
      id: 'metric2',
      name: 'Metric 2',
      data: generateTimeSeriesData(8, 45, 10),
      color: 'secondary'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h3>Default Variant</h3>
          <MultiLineChart series={sampleSeries} width={500} height={200} variant="default" title="Default Configuration" showTooltip={true} />
        </div>
        
        <div>
          <h3>Minimal Variant</h3>
          <MultiLineChart series={sampleSeries} width={500} height={200} variant="minimal" title="Minimal Configuration" showTooltip={true} />
        </div>
        
        <div>
          <h3>Detailed Variant</h3>
          <MultiLineChart series={sampleSeries} width={500} height={200} variant="detailed" title="Detailed Configuration" showTooltip={true} animation={{
          enabled: true,
          duration: 300
        }} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the three chart variants: default (balanced), minimal (clean), and detailed (enhanced styling).'
      }
    }
  }
}`,...(G=(q=w.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const curveSeries: MultiLineChartSeries[] = [{
      id: 'data1',
      name: 'Data Series 1',
      data: generateNumericData(8, 1.5, 20),
      color: 'primary'
    }, {
      id: 'data2',
      name: 'Data Series 2',
      data: generateNumericData(8, 1.2, 15),
      color: 'secondary'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <MultiLineChart series={curveSeries} width={500} height={200} curve="linear" title="Linear Curves" showTooltip={true} />
        <MultiLineChart series={curveSeries} width={500} height={200} curve="smooth" title="Smooth Curves" showTooltip={true} />
        <MultiLineChart series={curveSeries} width={500} height={200} curve="step" title="Step Curves" showTooltip={true} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different curve interpolation methods: linear (straight lines), smooth (cardinal spline), and step (step-after).'
      }
    }
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const legendSeries: MultiLineChartSeries[] = [{
      id: 'alpha',
      name: 'Alpha',
      data: generateTimeSeriesData(6, 60, 10),
      color: 'primary'
    }, {
      id: 'beta',
      name: 'Beta',
      data: generateTimeSeriesData(6, 45, 8),
      color: 'secondary'
    }, {
      id: 'gamma',
      name: 'Gamma',
      data: generateTimeSeriesData(6, 55, 12),
      color: 'success'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
        <div>
          <h3>Bottom Legend</h3>
          <MultiLineChart series={legendSeries} width={600} height={200} title="Legend at Bottom" legend={{
          show: true,
          position: 'bottom'
        }} />
        </div>
        
        <div>
          <h3>Top Legend</h3>
          <MultiLineChart series={legendSeries} width={600} height={200} title="Legend at Top" legend={{
          show: true,
          position: 'top'
        }} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Legend positioning options. The legend automatically appears when there are multiple series.'
      }
    }
  }
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,ie,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'trend1',
      name: 'Primary Trend',
      data: generateTimeSeriesData(24, 100, 20),
      color: 'primary'
    }, {
      id: 'trend2',
      name: 'Secondary Trend',
      data: generateTimeSeriesData(24, 80, 15),
      color: 'secondary'
    }, {
      id: 'trend3',
      name: 'Tertiary Trend',
      data: generateTimeSeriesData(24, 60, 18),
      color: 'success'
    }, {
      id: 'trend4',
      name: 'Quaternary Trend',
      data: generateTimeSeriesData(24, 70, 12),
      color: 'warning'
    }],
    width: 1000,
    height: 500,
    title: 'Large Dataset Performance',
    variant: 'detailed',
    showTooltip: true,
    optimized: true,
    xAxis: {
      label: 'Time Period (24 months)',
      variant: 'detailed'
    },
    yAxis: {
      label: 'Value',
      variant: 'detailed'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Large dataset with 4 series and 24 data points each. Demonstrates performance with optimized rendering enabled.'
      }
    }
  }
}`,...(oe=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,le,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    series: [],
    width: 600,
    height: 400,
    title: 'No Data Available'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no series data is provided.'
      }
    }
  }
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'single',
      name: 'Single Series',
      data: generateTimeSeriesData(12, 60, 15),
      color: 'primary'
    }],
    width: 600,
    height: 300,
    title: 'Single Series (Legend Hidden)',
    showTooltip: true,
    legend: {
      show: false // Legend automatically hidden for single series
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Single series example. Legend is automatically hidden when only one series is present.'
      }
    }
  }
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ue,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'visible1',
      name: 'Always Visible',
      data: generateTimeSeriesData(10, 60, 12),
      color: 'primary',
      visible: true
    }, {
      id: 'hidden',
      name: 'Hidden Series',
      data: generateTimeSeriesData(10, 45, 10),
      color: 'secondary',
      visible: false // This series won't be rendered
    }, {
      id: 'visible2',
      name: 'Also Visible',
      data: generateTimeSeriesData(10, 55, 8),
      color: 'success',
      visible: true
    }],
    width: 600,
    height: 300,
    title: 'Series Visibility Control',
    showTooltip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlling series visibility with the visible property. Hidden series are not rendered or included in calculations.'
      }
    }
  }
}`,...(ge=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ye,we,ve;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'function1',
      name: 'f(x) = x²',
      data: generateNumericData(10, 2, 5),
      color: 'primary'
    }, {
      id: 'function2',
      name: 'f(x) = x^1.5',
      data: generateNumericData(10, 1.5, 10),
      color: 'secondary'
    }],
    width: 600,
    height: 350,
    title: 'Mathematical Functions',
    curve: 'smooth',
    xAxis: {
      label: 'X Value'
    },
    yAxis: {
      label: 'Y Value'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Numeric data example showing mathematical functions with smooth curves.'
      }
    }
  }
}`,...(ve=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var fe,be,xe;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'accessible1',
      name: 'Metric A',
      data: generateTimeSeriesData(8, 60, 10),
      color: 'primary'
    }, {
      id: 'accessible2',
      name: 'Metric B',
      data: generateTimeSeriesData(8, 45, 8),
      color: 'secondary'
    }],
    width: 600,
    height: 300,
    title: 'Accessible Multi-Line Chart',
    showTooltip: true,
    keyboard: true,
    ariaLabel: 'Multi-line chart comparing Metric A and Metric B over 8 time periods',
    xAxis: {
      label: 'Time Period',
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
        story: 'Enhanced accessibility features including keyboard navigation (Tab through data points), ARIA labels, and screen reader support.'
      }
    }
  }
}`,...(xe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Se,De,Te;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    series: [{
      id: 'sales',
      name: 'Sales',
      data: [{
        x: new Date('2024-01-01'),
        y: 1250.75
      }, {
        x: new Date('2024-02-01'),
        y: 1890.25
      }, {
        x: new Date('2024-03-01'),
        y: 2100.50
      }, {
        x: new Date('2024-04-01'),
        y: 1750.00
      }, {
        x: new Date('2024-05-01'),
        y: 2450.80
      }],
      color: 'primary'
    }, {
      id: 'costs',
      name: 'Costs',
      data: [{
        x: new Date('2024-01-01'),
        y: 850.25
      }, {
        x: new Date('2024-02-01'),
        y: 1200.50
      }, {
        x: new Date('2024-03-01'),
        y: 1400.75
      }, {
        x: new Date('2024-04-01'),
        y: 1100.00
      }, {
        x: new Date('2024-05-01'),
        y: 1600.30
      }],
      color: 'error'
    }],
    width: 600,
    height: 350,
    title: 'Revenue vs Costs (Custom Formatting)',
    showTooltip: true,
    formatTooltip: (dataPoints: Array<{
      series: any;
      dataPoint: any;
      index: number;
    }>) => {
      if (!dataPoints.length) return '';
      const date = new Date(dataPoints[0].dataPoint.x).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });
      let tooltipHtml = \`<div class="db-multilinechart__tooltip-content">\`;
      tooltipHtml += \`<div class="db-multilinechart__tooltip-date">\${date}</div>\`;
      dataPoints.forEach(({
        series,
        dataPoint
      }) => {
        const value = \`$\${(dataPoint.y / 1000).toFixed(1)}K\`;
        const seriesColor = series.color === 'primary' ? '#2272B4' : '#E65B77';
        tooltipHtml += \`<div class="db-multilinechart__tooltip-series">\`;
        tooltipHtml += \`<div class="db-multilinechart__tooltip-series-indicator" style="background-color: \${seriesColor}"></div>\`;
        tooltipHtml += \`<span class="db-multilinechart__tooltip-series-name">\${series.name}:</span>\`;
        tooltipHtml += \`<span class="db-multilinechart__tooltip-series-value">\${value}</span>\`;
        tooltipHtml += \`</div>\`;
      });

      // Calculate profit
      const salesValue = dataPoints.find(d => d.series.id === 'sales')?.dataPoint.y || 0;
      const costsValue = dataPoints.find(d => d.series.id === 'costs')?.dataPoint.y || 0;
      const profit = salesValue - costsValue;
      const profitFormatted = \`$\${(profit / 1000).toFixed(1)}K\`;
      tooltipHtml += \`<div style="border-top: 1px solid #445461; margin-top: 8px; padding-top: 8px;">\`;
      tooltipHtml += \`<div class="db-multilinechart__tooltip-series">\`;
      tooltipHtml += \`<span class="db-multilinechart__tooltip-series-name">Profit:</span>\`;
      tooltipHtml += \`<span class="db-multilinechart__tooltip-series-value" style="color: \${profit >= 0 ? '#3BA65E' : '#E65B77'}">\${profitFormatted}</span>\`;
      tooltipHtml += \`</div>\`;
      tooltipHtml += \`</div>\`;
      tooltipHtml += \`</div>\`;
      return tooltipHtml;
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom tooltip formatting with calculated metrics. Shows sales, costs, and computed profit in a formatted tooltip.'
      }
    }
  }
}`,...(Te=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Ce,Me,Le;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const comparisonData: MultiLineChartSeries[] = [{
      id: 'q1_2024',
      name: '2024 Q1',
      data: [{
        x: 'Jan',
        y: 45
      }, {
        x: 'Feb',
        y: 52
      }, {
        x: 'Mar',
        y: 48
      }],
      color: 'primary'
    }, {
      id: 'q1_2023',
      name: '2023 Q1',
      data: [{
        x: 'Jan',
        y: 38
      }, {
        x: 'Feb',
        y: 45
      }, {
        x: 'Mar',
        y: 41
      }],
      color: 'secondary',
      strokeDasharray: '4,4' // Dashed line for previous year
    }, {
      id: 'target',
      name: 'Target',
      data: [{
        x: 'Jan',
        y: 50
      }, {
        x: 'Feb',
        y: 50
      }, {
        x: 'Mar',
        y: 50
      }],
      color: 'warning',
      strokeDasharray: '2,2' // Dotted line for target
    }];
    return <div style={{
      padding: '24px',
      backgroundColor: '#F6F7F9',
      borderRadius: '12px'
    }}>
        <div style={{
        marginBottom: '20px'
      }}>
          <h2 style={{
          margin: '0 0 8px 0',
          fontSize: '18px',
          color: '#1F272D'
        }}>
            Quarterly Performance Comparison
          </h2>
          <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#5F7281'
        }}>
            Comparing Q1 performance across years with target benchmarks
          </p>
        </div>

        <MultiLineChart series={comparisonData} width={700} height={350} curve="linear" showTooltip={true} showPoints={true} variant="default" xAxis={{
        label: 'Month',
        variant: 'default'
      }} yAxis={{
        label: 'Performance Score',
        variant: 'default',
        tickFormatter: (value: number) => \`\${value}\`
      }} legend={{
        show: true,
        position: 'bottom'
      }} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Year-over-year comparison dashboard with target benchmarks. Uses different line styles to distinguish between current year, previous year, and targets.'
      }
    }
  }
}`,...(Le=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};const qe=["Default","PerformanceMonitoring","FinancialDashboard","MultipleSeriesColors","CustomColors","LineStyleVariations","AllVariants","CurveTypes","LegendPositions","LargeDataset","EmptyState","SingleSeries","VisibilityControl","NumericData","AccessibilityFeatures","TooltipCustomization","ComparisonDashboard"];export{C as AccessibilityFeatures,w as AllVariants,L as ComparisonDashboard,v as CurveTypes,g as CustomColors,m as Default,x as EmptyState,h as FinancialDashboard,b as LargeDataset,f as LegendPositions,y as LineStyleVariations,u as MultipleSeriesColors,T as NumericData,p as PerformanceMonitoring,S as SingleSeries,M as TooltipCustomization,D as VisibilityControl,qe as __namedExportsOrder,je as default};
