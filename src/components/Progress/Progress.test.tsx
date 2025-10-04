import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Progress, ProgressProps, Spinner, SpinnerProps } from './Progress';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Progress', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Progress />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveClass(
        'db-progress',
        'db-progress--linear',
        'db-progress--medium',
        'db-progress--primary'
      );
    });

    it('renders with custom className', () => {
      render(<Progress className="custom-progress" />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress', 'custom-progress');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Progress ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-progress');
    });

    it('forwards additional props', () => {
      render(
        <Progress
          data-testid="progress"
          id="test-progress"
        />
      );
      
      const progress = screen.getByTestId('progress');
      expect(progress).toHaveAttribute('id', 'test-progress');
    });

    it('has proper progressbar semantics', () => {
      render(<Progress value={50} />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('role', 'progressbar');
      expect(progress).toHaveAttribute('aria-valuenow', '50');
      expect(progress).toHaveAttribute('aria-valuemin', '0');
      expect(progress).toHaveAttribute('aria-valuemax', '100');
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('renders linear variant by default', () => {
      render(<Progress />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--linear');
      expect(progress).not.toHaveClass('db-progress--circular');
      
      const track = progress.querySelector('.db-progress__track');
      expect(track).toBeInTheDocument();
    });

    it('renders circular variant correctly', () => {
      render(<Progress variant="circular" />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--circular');
      expect(progress).not.toHaveClass('db-progress--linear');
      
      const svg = progress.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('linear variant has track and fill elements', () => {
      render(<Progress variant="linear" value={50} />);
      
      const progress = screen.getByRole('progressbar');
      const track = progress.querySelector('.db-progress__track');
      const fill = progress.querySelector('.db-progress__fill');
      
      expect(track).toBeInTheDocument();
      expect(fill).toBeInTheDocument();
      expect(fill).toHaveStyle({ width: '50%' });
    });

    it('circular variant has SVG with circles', () => {
      render(<Progress variant="circular" value={50} />);
      
      const progress = screen.getByRole('progressbar');
      const svg = progress.querySelector('svg');
      const circles = svg?.querySelectorAll('circle');
      
      expect(circles).toHaveLength(2); // Background and fill circles
      expect(circles?.[0]).toHaveClass('db-progress__circle-bg');
      expect(circles?.[1]).toHaveClass('db-progress__circle-fill');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<ProgressProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly for linear variant`, () => {
        render(<Progress size={size} variant="linear" />);
        
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveClass(`db-progress--${size}`);
      });

      it(`renders ${size} size correctly for circular variant`, () => {
        render(<Progress size={size} variant="circular" />);
        
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveClass(`db-progress--${size}`);
        
        const svg = progress.querySelector('svg');
        expect(svg).toBeInTheDocument();
      });
    });

    it('applies medium size by default', () => {
      render(<Progress />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--medium');
    });

    it('circular size affects SVG dimensions', () => {
      const { rerender } = render(<Progress variant="circular" size="small" />);
      let svg = screen.getByRole('progressbar').querySelector('svg');
      expect(svg).toHaveAttribute('width', '32');
      expect(svg).toHaveAttribute('height', '32');
      
      rerender(<Progress variant="circular" size="medium" />);
      svg = screen.getByRole('progressbar').querySelector('svg');
      expect(svg).toHaveAttribute('width', '48');
      expect(svg).toHaveAttribute('height', '48');
      
      rerender(<Progress variant="circular" size="large" />);
      svg = screen.getByRole('progressbar').querySelector('svg');
      expect(svg).toHaveAttribute('width', '64');
      expect(svg).toHaveAttribute('height', '64');
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<ProgressProps['color']> = ['primary', 'success', 'warning', 'error'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        render(<Progress color={color} />);
        
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveClass(`db-progress--${color}`);
      });
    });

    it('applies primary color by default', () => {
      render(<Progress />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--primary');
    });
  });

  // Value and percentage tests
  describe('Value and Percentage', () => {
    it('calculates percentage correctly', () => {
      render(<Progress value={50} max={100} />);
      
      const fill = document.querySelector('.db-progress__fill');
      expect(fill).toHaveStyle({ width: '50%' });
    });

    it('handles 0% value', () => {
      render(<Progress value={0} />);
      
      const progress = screen.getByRole('progressbar');
      const fill = progress.querySelector('.db-progress__fill');
      
      expect(progress).toHaveAttribute('aria-valuenow', '0');
      expect(fill).toHaveStyle({ width: '0%' });
    });

    it('handles 100% value', () => {
      render(<Progress value={100} />);
      
      const progress = screen.getByRole('progressbar');
      const fill = progress.querySelector('.db-progress__fill');
      
      expect(progress).toHaveAttribute('aria-valuenow', '100');
      expect(fill).toHaveStyle({ width: '100%' });
    });

    it('clamps values above max to 100%', () => {
      render(<Progress value={150} max={100} />);
      
      const fill = document.querySelector('.db-progress__fill');
      expect(fill).toHaveStyle({ width: '100%' });
    });

    it('clamps negative values to 0%', () => {
      render(<Progress value={-10} />);
      
      const fill = document.querySelector('.db-progress__fill');
      expect(fill).toHaveStyle({ width: '0%' });
    });

    it('handles custom max values', () => {
      render(<Progress value={25} max={50} />);
      
      const progress = screen.getByRole('progressbar');
      const fill = progress.querySelector('.db-progress__fill');
      
      expect(progress).toHaveAttribute('aria-valuemax', '50');
      expect(fill).toHaveStyle({ width: '50%' }); // 25 out of 50 is 50%
    });

    it('handles fractional values', () => {
      render(<Progress value={33.33} max={100} />);
      
      const fill = document.querySelector('.db-progress__fill');
      expect(fill).toHaveStyle({ width: '33.33%' });
    });

    it('handles very small values', () => {
      render(<Progress value={0.01} max={100} />);
      
      const fill = document.querySelector('.db-progress__fill');
      expect(fill).toHaveStyle({ width: '0.01%' });
    });
  });

  // Label tests
  describe('Label', () => {
    it('does not show label by default', () => {
      render(<Progress value={50} />);
      
      const label = document.querySelector('.db-progress__label');
      expect(label).not.toBeInTheDocument();
    });

    it('shows label when showLabel is true', () => {
      render(<Progress value={50} showLabel />);
      
      const label = screen.getByText('50%');
      expect(label).toBeInTheDocument();
      expect(label).toHaveClass('db-progress__label');
    });

    it('rounds percentage in label', () => {
      render(<Progress value={33.7} showLabel />);
      expect(screen.getByText('34%')).toBeInTheDocument();
      
      render(<Progress value={33.3} showLabel />);
      expect(screen.getByText('33%')).toBeInTheDocument();
    });

    it('shows label for both linear and circular variants', () => {
      const { rerender } = render(<Progress variant="linear" value={75} showLabel />);
      expect(screen.getByText('75%')).toBeInTheDocument();
      
      rerender(<Progress variant="circular" value={75} showLabel />);
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('does not show label when indeterminate', () => {
      render(<Progress value={50} showLabel indeterminate />);
      
      const label = document.querySelector('.db-progress__label');
      expect(label).not.toBeInTheDocument();
    });

    it('updates label when value changes', () => {
      const { rerender } = render(<Progress value={25} showLabel />);
      expect(screen.getByText('25%')).toBeInTheDocument();
      
      rerender(<Progress value={75} showLabel />);
      expect(screen.getByText('75%')).toBeInTheDocument();
    });
  });

  // Indeterminate state tests
  describe('Indeterminate State', () => {
    it('applies indeterminate class when true', () => {
      render(<Progress indeterminate />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--indeterminate');
    });

    it('does not include aria-valuenow when indeterminate', () => {
      render(<Progress value={50} indeterminate />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).not.toHaveAttribute('aria-valuenow');
      expect(progress).toHaveAttribute('aria-valuemin', '0');
      expect(progress).toHaveAttribute('aria-valuemax', '100');
    });

    it('does not apply width style to fill when indeterminate', () => {
      render(<Progress value={50} indeterminate variant="linear" />);
      
      const fill = document.querySelector('.db-progress__fill') as HTMLElement;
      // When indeterminate, the style attribute should not include width
      expect(fill?.style.width).toBe('');
    });

    it('works with both linear and circular variants', () => {
      const { rerender } = render(<Progress variant="linear" indeterminate />);
      let progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--indeterminate', 'db-progress--linear');
      
      rerender(<Progress variant="circular" indeterminate />);
      progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress--indeterminate', 'db-progress--circular');
    });

    it('hides label when indeterminate', () => {
      render(<Progress value={50} showLabel indeterminate />);
      
      const label = document.querySelector('.db-progress__label');
      expect(label).not.toBeInTheDocument();
    });
  });

  // Circular variant specific tests
  describe('Circular Variant Specifics', () => {
    it('calculates circle properties correctly', () => {
      render(<Progress variant="circular" size="medium" value={50} />);
      
      const circles = document.querySelectorAll('circle');
      const fillCircle = circles[1]; // Second circle is the fill
      
      // Medium: width 48, strokeWidth 4, radius (48-4)/2 = 22
      expect(fillCircle).toHaveAttribute('r', '22');
      expect(fillCircle).toHaveAttribute('stroke-width', '4');
      
      // Circumference = 2 * PI * 22 ≈ 138.23
      const circumference = 2 * Math.PI * 22;
      expect(fillCircle).toHaveAttribute('stroke-dasharray', String(circumference));
    });

    it('applies correct transform to fill circle', () => {
      render(<Progress variant="circular" size="medium" />);
      
      const circles = document.querySelectorAll('circle');
      const fillCircle = circles[1];
      
      // Should rotate -90 degrees around center (24, 24 for size 48)
      expect(fillCircle).toHaveAttribute('transform', 'rotate(-90 24 24)');
    });

    it('calculates stroke-dashoffset for progress', () => {
      render(<Progress variant="circular" size="medium" value={25} />);
      
      const circles = document.querySelectorAll('circle');
      const fillCircle = circles[1];
      
      const circumference = 2 * Math.PI * 22;
      const expectedOffset = circumference - (25 / 100) * circumference;
      
      expect(fillCircle).toHaveAttribute('stroke-dashoffset', String(expectedOffset));
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations for linear variant', async () => {
      const { container } = render(
        <Progress value={50} aria-label="Loading progress" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations for circular variant', async () => {
      const { container } = render(
        <Progress variant="circular" value={75} aria-label="Upload progress" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations when indeterminate', async () => {
      const { container } = render(
        <Progress indeterminate aria-label="Loading" />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper progressbar role', () => {
      render(<Progress />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('role', 'progressbar');
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Progress
          value={50}
          aria-label="File upload progress"
          aria-describedby="progress-description"
        />
      );
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('aria-label', 'File upload progress');
      expect(progress).toHaveAttribute('aria-describedby', 'progress-description');
    });

    it('announces progress changes to screen readers', () => {
      const { rerender } = render(<Progress value={25} />);
      let progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('aria-valuenow', '25');
      
      rerender(<Progress value={75} />);
      progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('aria-valuenow', '75');
    });

    it('provides proper value range information', () => {
      render(<Progress value={50} max={200} />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('aria-valuemin', '0');
      expect(progress).toHaveAttribute('aria-valuemax', '200');
      expect(progress).toHaveAttribute('aria-valuenow', '50');
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      render(
        <Progress
          value={75}
          max={100}
          variant="linear"
          size="large"
          color="success"
          showLabel
          className="custom-progress"
        />
      );
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass(
        'db-progress',
        'db-progress--linear',
        'db-progress--large',
        'db-progress--success',
        'custom-progress'
      );
      
      expect(screen.getByText('75%')).toBeInTheDocument();
      expect(progress).toHaveAttribute('aria-valuenow', '75');
    });

    it('renders all variant and size combinations', () => {
      const variants: Array<ProgressProps['variant']> = ['linear', 'circular'];
      const sizes: Array<ProgressProps['size']> = ['small', 'medium', 'large'];
      
      variants.forEach(variant => {
        sizes.forEach(size => {
          const { unmount } = render(
            <Progress
              variant={variant}
              size={size}
              value={50}
              data-testid={`progress-${variant}-${size}`}
            />
          );
          
          const progress = screen.getByTestId(`progress-${variant}-${size}`);
          expect(progress).toHaveClass(`db-progress--${variant}`, `db-progress--${size}`);
          
          unmount();
        });
      });
    });

    it('renders all color combinations', () => {
      const colors: Array<ProgressProps['color']> = ['primary', 'success', 'warning', 'error'];
      
      colors.forEach(color => {
        const { unmount } = render(
          <Progress color={color} value={50} data-testid={`progress-${color}`} />
        );
        
        const progress = screen.getByTestId(`progress-${color}`);
        expect(progress).toHaveClass(`db-progress--${color}`);
        
        unmount();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined and null props gracefully', () => {
      render(
        <Progress
          value={undefined}
          max={undefined}
          variant={undefined}
          size={undefined}
          color={undefined}
        />
      );
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toBeInTheDocument();
      expect(progress).toHaveClass('db-progress', 'db-progress--linear', 'db-progress--medium', 'db-progress--primary');
    });

    it('handles multiple class names correctly', () => {
      render(<Progress className="class1 class2 class3" />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveClass('db-progress', 'class1', 'class2', 'class3');
    });

    it('handles zero max value', () => {
      render(<Progress value={50} max={0} />);
      
      // Should handle division by zero gracefully
      const progress = screen.getByRole('progressbar');
      expect(progress).toBeInTheDocument();
    });

    it('handles very large values', () => {
      render(<Progress value={1000000} max={2000000} showLabel />);
      
      const progress = screen.getByRole('progressbar');
      expect(progress).toHaveAttribute('aria-valuenow', '1000000');
      expect(screen.getByText('50%')).toBeInTheDocument();
    });

    it('handles rapid value changes', () => {
      const { rerender } = render(<Progress value={0} />);
      
      // Rapidly update value
      for (let i = 0; i <= 100; i += 10) {
        rerender(<Progress value={i} />);
        const progress = screen.getByRole('progressbar');
        expect(progress).toHaveAttribute('aria-valuenow', String(i));
      }
    });

    it('maintains SVG structure integrity for circular variant', () => {
      render(<Progress variant="circular" value={50} />);
      
      const svg = document.querySelector('svg');
      const circles = svg?.querySelectorAll('circle');
      
      expect(svg).toBeInTheDocument();
      expect(circles).toHaveLength(2);
      
      // Verify both circles have required attributes
      circles?.forEach(circle => {
        expect(circle).toHaveAttribute('cx');
        expect(circle).toHaveAttribute('cy');
        expect(circle).toHaveAttribute('r');
        expect(circle).toHaveAttribute('stroke-width');
      });
    });
  });
});

// Spinner component tests
describe('Spinner', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass(
        'db-spinner',
        'db-spinner--medium',
        'db-spinner--primary'
      );
    });

    it('renders with custom className', () => {
      render(<Spinner className="custom-spinner" />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveClass('db-spinner', 'custom-spinner');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Spinner ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-spinner');
    });

    it('forwards additional props', () => {
      render(
        <Spinner
          data-testid="spinner"
          id="test-spinner"
        />
      );
      
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toHaveAttribute('id', 'test-spinner');
    });

    it('has proper status role', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveAttribute('role', 'status');
      expect(spinner).toHaveAttribute('aria-label', 'Loading');
    });

    it('contains SVG with circle', () => {
      render(<Spinner />);
      
      const svg = document.querySelector('.db-spinner__svg');
      const circle = document.querySelector('.db-spinner__circle');
      
      expect(svg).toBeInTheDocument();
      expect(circle).toBeInTheDocument();
      expect(circle?.tagName).toBe('circle');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<SpinnerProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Spinner size={size} />);
        
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass(`db-spinner--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveClass('db-spinner--medium');
    });
  });

  // Color tests
  describe('Colors', () => {
    const colors: Array<SpinnerProps['color']> = ['primary', 'white', 'inherit'];
    
    colors.forEach(color => {
      it(`renders ${color} color correctly`, () => {
        render(<Spinner color={color} />);
        
        const spinner = screen.getByRole('status');
        expect(spinner).toHaveClass(`db-spinner--${color}`);
      });
    });

    it('applies primary color by default', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveClass('db-spinner--primary');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Spinner />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper status role and label', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveAttribute('aria-label', 'Loading');
    });

    it('supports custom aria-label', () => {
      render(<Spinner aria-label="Processing your request" />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveAttribute('aria-label', 'Processing your request');
    });

    it('announces loading state to screen readers', () => {
      render(<Spinner />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveAttribute('role', 'status');
    });
  });

  // SVG structure tests
  describe('SVG Structure', () => {
    it('renders SVG with proper attributes', () => {
      render(<Spinner />);
      
      const svg = document.querySelector('.db-spinner__svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
      expect(svg?.tagName).toBe('svg');
    });

    it('renders circle with proper attributes', () => {
      render(<Spinner />);
      
      const circle = document.querySelector('.db-spinner__circle');
      expect(circle).toHaveAttribute('cx', '12');
      expect(circle).toHaveAttribute('cy', '12');
      expect(circle).toHaveAttribute('r', '10');
      expect(circle).toHaveAttribute('stroke-width', '3');
      expect(circle).toHaveAttribute('fill', 'none');
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      render(
        <Spinner
          size="large"
          color="white"
          className="custom-spinner"
          aria-label="Custom loading"
        />
      );
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveClass(
        'db-spinner',
        'db-spinner--large',
        'db-spinner--white',
        'custom-spinner'
      );
      expect(spinner).toHaveAttribute('aria-label', 'Custom loading');
    });

    it('renders all size and color combinations', () => {
      const sizes: Array<SpinnerProps['size']> = ['small', 'medium', 'large'];
      const colors: Array<SpinnerProps['color']> = ['primary', 'white', 'inherit'];
      
      sizes.forEach(size => {
        colors.forEach(color => {
          const { unmount } = render(
            <Spinner
              size={size}
              color={color}
              data-testid={`spinner-${size}-${color}`}
            />
          );
          
          const spinner = screen.getByTestId(`spinner-${size}-${color}`);
          expect(spinner).toHaveClass(`db-spinner--${size}`, `db-spinner--${color}`);
          
          unmount();
        });
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined props gracefully', () => {
      render(
        <Spinner
          size={undefined}
          color={undefined}
        />
      );
      
      const spinner = screen.getByRole('status');
      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveClass('db-spinner', 'db-spinner--medium', 'db-spinner--primary');
    });

    it('handles multiple class names correctly', () => {
      render(<Spinner className="class1 class2 class3" />);
      
      const spinner = screen.getByRole('status');
      expect(spinner).toHaveClass('db-spinner', 'class1', 'class2', 'class3');
    });
  });
});
