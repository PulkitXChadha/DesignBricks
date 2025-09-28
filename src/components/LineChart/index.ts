// Main LineChart component and types
export { LineChart, useLineChart } from './LineChart';
export type { 
  LineChartProps, 
  LineChartDataPoint,
  LineChartAxis,
  LineChartGrid,
  LineChartTheme,
  LineChartAnimation,
  LineChartResponsive 
} from './LineChart';

// Compound components
export {
  LineChartContainer,
  LineChartHeader,
  LineChartLegend,
  LineChartAxis as LineChartAxisComponent,
  LineChartTooltip,
  LineChartGrid as LineChartGridComponent,
  LineChartContent,
} from './LineChartCompound';

export type {
  LineChartContainerProps,
  LineChartHeaderProps,
  LineChartLegendProps,
  LineChartAxisProps,
  LineChartTooltipProps,
  LineChartGridProps,
  LineChartContentProps,
} from './LineChartCompound';

// Chart aggregates component
export { ChartAggregates } from './ChartAggregates';
export type { ChartAggregatesProps, AggregateMetric } from './ChartAggregates';
