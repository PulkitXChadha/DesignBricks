import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ChartAggregates, ChartAggregatesProps, AggregateMetric } from './ChartAggregates';
import { LineChartDataPoint } from './LineChart';

expect.extend(toHaveNoViolations);

describe('ChartAggregates', () => {
  const sampleData: LineChartDataPoint[] = [
    { x: new Date('2024-01-01'), y: 100 },
    { x: new Date('2024-01-02'), y: 150 },
    { x: new Date('2024-01-03'), y: 75 },
    { x: new Date('2024-01-04'), y: 200 },
    { x: new Date('2024-01-05'), y: 125 },
  ];

  const sampleMetrics: AggregateMetric[] = [
    { label: 'Total', value: 1000, color: 'primary' },
    { label: 'Average', value: 250, color: 'secondary' },
    { label: 'Growth', value: 500, change: 25.5, color: 'success' },
  ];

  describe('Basic Rendering', () => {
    it('renders with provided metrics', () => {
      render(<ChartAggregates metrics={sampleMetrics} />);
      
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('Average:')).toBeInTheDocument();
      expect(screen.getByText('Growth:')).toBeInTheDocument();
    });

    it('renders nothing when no metrics and no data', () => {
      const { container } = render(<ChartAggregates />);
      
      expect(container.firstChild).toBeNull();
    });

    it('renders with auto-calculated metrics from data', () => {
      render(<ChartAggregates data={sampleData} />);
      
      expect(screen.getByText('High:')).toBeInTheDocument();
      expect(screen.getByText('Low:')).toBeInTheDocument();
      expect(screen.getByText('Change:')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<ChartAggregates ref={ref} metrics={sampleMetrics} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('forwards additional props', () => {
      render(
        <ChartAggregates 
          metrics={sampleMetrics} 
          data-testid="aggregates"
          role="region"
        />
      );
      
      const element = screen.getByTestId('aggregates');
      expect(element).toHaveAttribute('role', 'region');
    });
  });

  describe('Layout Variants', () => {
    it('renders horizontal layout by default', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const aggregates = container.querySelector('.db-chart-aggregates');
      expect(aggregates).toHaveClass('db-chart-aggregates--horizontal');
    });

    it('renders vertical layout', () => {
      const { container } = render(
        <ChartAggregates metrics={sampleMetrics} layout="vertical" />
      );
      
      const aggregates = container.querySelector('.db-chart-aggregates');
      expect(aggregates).toHaveClass('db-chart-aggregates--vertical');
    });

    it('renders grid layout', () => {
      const { container } = render(
        <ChartAggregates metrics={sampleMetrics} layout="grid" />
      );
      
      const aggregates = container.querySelector('.db-chart-aggregates');
      expect(aggregates).toHaveClass('db-chart-aggregates--grid');
    });
  });

  describe('Auto-calculated Metrics', () => {
    it('calculates high value correctly', () => {
      render(<ChartAggregates data={sampleData} />);
      
      expect(screen.getByText('200')).toBeInTheDocument(); // Max value
    });

    it('calculates low value correctly', () => {
      render(<ChartAggregates data={sampleData} />);
      
      expect(screen.getByText('75')).toBeInTheDocument(); // Min value
    });

    it('calculates change percentage correctly', () => {
      render(<ChartAggregates data={sampleData} />);
      
      // Change from 100 to 125 = 25%
      expect(screen.getByText('+25.00%')).toBeInTheDocument();
    });

    it('handles negative change', () => {
      const decreasingData: LineChartDataPoint[] = [
        { x: new Date('2024-01-01'), y: 200 },
        { x: new Date('2024-01-02'), y: 100 },
      ];
      
      render(<ChartAggregates data={decreasingData} />);
      
      // Change from 200 to 100 = -50%
      expect(screen.getByText('-50.00%')).toBeInTheDocument();
    });

    it('uses custom formatValue function', () => {
      const formatValue = (value: number) => `$${value.toFixed(2)}`;
      
      render(<ChartAggregates data={sampleData} formatValue={formatValue} />);
      
      expect(screen.getByText('$200.00')).toBeInTheDocument();
      expect(screen.getByText('$75.00')).toBeInTheDocument();
    });

    it('prefers provided metrics over auto-calculation', () => {
      render(<ChartAggregates metrics={sampleMetrics} data={sampleData} />);
      
      // Should use provided metrics, not calculate from data
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.queryByText('High:')).not.toBeInTheDocument();
    });
  });

  describe('Metric Display', () => {
    it('displays metric labels correctly', () => {
      render(<ChartAggregates metrics={sampleMetrics} />);
      
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('Average:')).toBeInTheDocument();
      expect(screen.getByText('Growth:')).toBeInTheDocument();
    });

    it('displays metric values correctly', () => {
      render(<ChartAggregates metrics={sampleMetrics} />);
      
      expect(screen.getByText('1000')).toBeInTheDocument();
      expect(screen.getByText('250')).toBeInTheDocument();
      expect(screen.getByText('500')).toBeInTheDocument();
    });

    it('displays string values correctly', () => {
      const metricsWithString: AggregateMetric[] = [
        { label: 'Status', value: 'Active', color: 'success' },
      ];
      
      render(<ChartAggregates metrics={metricsWithString} />);
      
      expect(screen.getByText('Active')).toBeInTheDocument();
    });
  });

  describe('Change Percentage', () => {
    it('shows change percentage by default', () => {
      render(<ChartAggregates metrics={sampleMetrics} />);
      
      expect(screen.getByText('+25.50%')).toBeInTheDocument();
    });

    it('hides change when showChange is false', () => {
      render(<ChartAggregates metrics={sampleMetrics} showChange={false} />);
      
      expect(screen.queryByText('+25.50%')).not.toBeInTheDocument();
    });

    it('displays positive change with + sign', () => {
      const positiveMetric: AggregateMetric[] = [
        { label: 'Growth', value: 100, change: 15.5, color: 'success' },
      ];
      
      render(<ChartAggregates metrics={positiveMetric} />);
      
      expect(screen.getByText('+15.50%')).toBeInTheDocument();
    });

    it('displays negative change without + sign', () => {
      const negativeMetric: AggregateMetric[] = [
        { label: 'Decline', value: 100, change: -15.5, color: 'error' },
      ];
      
      render(<ChartAggregates metrics={negativeMetric} />);
      
      expect(screen.getByText('-15.50%')).toBeInTheDocument();
    });

    it('displays zero change correctly', () => {
      const zeroMetric: AggregateMetric[] = [
        { label: 'Stable', value: 100, change: 0, color: 'neutral' },
      ];
      
      render(<ChartAggregates metrics={zeroMetric} />);
      
      expect(screen.getByText('+0.00%')).toBeInTheDocument();
    });

    it('applies positive change class', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const changeElement = container.querySelector('.db-chart-aggregates__change--positive');
      expect(changeElement).toBeInTheDocument();
    });

    it('applies negative change class', () => {
      const negativeMetric: AggregateMetric[] = [
        { label: 'Decline', value: 100, change: -15.5, color: 'error' },
      ];
      
      const { container } = render(<ChartAggregates metrics={negativeMetric} />);
      
      const changeElement = container.querySelector('.db-chart-aggregates__change--negative');
      expect(changeElement).toBeInTheDocument();
    });
  });

  describe('Color Variants', () => {
    it('applies primary color class', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--primary');
      expect(metric).toBeInTheDocument();
    });

    it('applies secondary color class', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--secondary');
      expect(metric).toBeInTheDocument();
    });

    it('applies success color class', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--success');
      expect(metric).toBeInTheDocument();
    });

    it('applies warning color class', () => {
      const warningMetric: AggregateMetric[] = [
        { label: 'Caution', value: 100, color: 'warning' },
      ];
      
      const { container } = render(<ChartAggregates metrics={warningMetric} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--warning');
      expect(metric).toBeInTheDocument();
    });

    it('applies error color class', () => {
      const errorMetric: AggregateMetric[] = [
        { label: 'Critical', value: 100, color: 'error' },
      ];
      
      const { container } = render(<ChartAggregates metrics={errorMetric} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--error');
      expect(metric).toBeInTheDocument();
    });

    it('applies neutral color class', () => {
      const neutralMetric: AggregateMetric[] = [
        { label: 'Info', value: 100, color: 'neutral' },
      ];
      
      const { container } = render(<ChartAggregates metrics={neutralMetric} />);
      
      const metric = container.querySelector('.db-chart-aggregates__metric--neutral');
      expect(metric).toBeInTheDocument();
    });

    it('works without color', () => {
      const noColorMetric: AggregateMetric[] = [
        { label: 'Default', value: 100 },
      ];
      
      const { container } = render(<ChartAggregates metrics={noColorMetric} />);
      
      expect(container.querySelector('.db-chart-aggregates__metric')).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      const { container } = render(
        <ChartAggregates metrics={sampleMetrics} className="custom-class" />
      );
      
      const aggregates = container.querySelector('.db-chart-aggregates');
      expect(aggregates).toHaveClass('custom-class');
    });

    it('combines multiple class names', () => {
      const { container } = render(
        <ChartAggregates 
          metrics={sampleMetrics} 
          layout="vertical"
          className="custom-class" 
        />
      );
      
      const aggregates = container.querySelector('.db-chart-aggregates');
      expect(aggregates).toHaveClass('db-chart-aggregates');
      expect(aggregates).toHaveClass('db-chart-aggregates--vertical');
      expect(aggregates).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty data array', () => {
      const { container } = render(<ChartAggregates data={[]} />);
      
      expect(container.firstChild).toBeNull();
    });

    it('handles empty metrics array', () => {
      const { container } = render(<ChartAggregates metrics={[]} />);
      
      expect(container.firstChild).toBeNull();
    });

    it('handles single data point', () => {
      const singlePoint: LineChartDataPoint[] = [
        { x: new Date('2024-01-01'), y: 100 },
      ];
      
      render(<ChartAggregates data={singlePoint} />);
      
      // With single point, high = low = change value = 100
      const values = screen.getAllByText('100');
      expect(values.length).toBe(3); // High, Low, Change
      expect(screen.getByText('+0.00%')).toBeInTheDocument();
    });

    it('handles metric without change', () => {
      const metricNoChange: AggregateMetric[] = [
        { label: 'Static', value: 100, color: 'neutral' },
      ];
      
      const { container } = render(<ChartAggregates metrics={metricNoChange} />);
      
      expect(container.querySelector('.db-chart-aggregates__change')).not.toBeInTheDocument();
    });

    it('handles very large numbers', () => {
      const largeMetric: AggregateMetric[] = [
        { label: 'Large', value: 1000000, color: 'primary' },
      ];
      
      render(<ChartAggregates metrics={largeMetric} />);
      
      // By default, it's passed as-is, not formatted by default formatValue
      expect(screen.getByText('1000000')).toBeInTheDocument();
    });

    it('handles very small changes', () => {
      const smallChangeMetric: AggregateMetric[] = [
        { label: 'Tiny', value: 100, change: 0.01, color: 'neutral' },
      ];
      
      render(<ChartAggregates metrics={smallChangeMetric} />);
      
      expect(screen.getByText('+0.01%')).toBeInTheDocument();
    });

    it('handles Infinity in change calculation', () => {
      const zeroToValue: LineChartDataPoint[] = [
        { x: new Date('2024-01-01'), y: 0 },
        { x: new Date('2024-01-02'), y: 100 },
      ];
      
      render(<ChartAggregates data={zeroToValue} />);
      
      // Should handle division by zero gracefully
      const aggregates = screen.getByText('Change:');
      expect(aggregates).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with auto-calculated metrics', async () => {
      const { container } = render(<ChartAggregates data={sampleData} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('metric structure is semantic', () => {
      const { container } = render(<ChartAggregates metrics={sampleMetrics} />);
      
      const labels = container.querySelectorAll('.db-chart-aggregates__label');
      const values = container.querySelectorAll('.db-chart-aggregates__value');
      
      expect(labels.length).toBe(3);
      expect(values.length).toBe(3);
    });
  });

  describe('displayName', () => {
    it('has correct displayName', () => {
      expect(ChartAggregates.displayName).toBe('ChartAggregates');
    });
  });
});

