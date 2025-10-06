import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Colors } from './Colors';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Colors', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Colors />);
      
      const colors = container.querySelector('.db-colors');
      expect(colors).toBeInTheDocument();
    });

    it('renders header when showing all colors', () => {
      render(<Colors showAll />);
      
      expect(screen.getByText('Databricks Design System Colors')).toBeInTheDocument();
      expect(screen.getByText(/Official color palette/i)).toBeInTheDocument();
    });

    it('renders without header when showing specific category', () => {
      render(<Colors category="primary" />);
      
      expect(screen.queryByText('Databricks Design System Colors')).not.toBeInTheDocument();
    });

    it('applies color palette class', () => {
      const { container } = render(<Colors category="primary" />);
      
      const palette = container.querySelector('.db-colors-palette');
      expect(palette).toBeInTheDocument();
    });
  });

  // Category tests
  describe('Categories', () => {
    it('renders primary category', () => {
      render(<Colors category="primary" />);
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
    });

    it('renders secondary category', () => {
      render(<Colors category="secondary" />);
      
      expect(screen.getByText('Secondary')).toBeInTheDocument();
    });

    it('renders neutral category', () => {
      render(<Colors category="neutral" />);
      
      expect(screen.getByText('Neutral')).toBeInTheDocument();
    });

    it('renders success category', () => {
      render(<Colors category="success" />);
      
      expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('renders warning category', () => {
      render(<Colors category="warning" />);
      
      expect(screen.getByText('Warning')).toBeInTheDocument();
    });

    it('renders error category', () => {
      render(<Colors category="error" />);
      
      expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('renders info category', () => {
      render(<Colors category="info" />);
      
      expect(screen.getByText('Info')).toBeInTheDocument();
    });

    it('renders brown category', () => {
      render(<Colors category="brown" />);
      
      expect(screen.getByText('Brown')).toBeInTheDocument();
    });

    it('renders coral category', () => {
      render(<Colors category="coral" />);
      
      expect(screen.getByText('Coral')).toBeInTheDocument();
    });

    it('renders indigo category', () => {
      render(<Colors category="indigo" />);
      
      expect(screen.getByText('Indigo')).toBeInTheDocument();
    });

    it('renders lemon category', () => {
      render(<Colors category="lemon" />);
      
      expect(screen.getByText('Lemon')).toBeInTheDocument();
    });

    it('renders lime category', () => {
      render(<Colors category="lime" />);
      
      expect(screen.getByText('Lime')).toBeInTheDocument();
    });

    it('renders pink category', () => {
      render(<Colors category="pink" />);
      
      expect(screen.getByText('Pink')).toBeInTheDocument();
    });

    it('renders purple category', () => {
      render(<Colors category="purple" />);
      
      expect(screen.getByText('Purple')).toBeInTheDocument();
    });

    it('renders teal category', () => {
      render(<Colors category="teal" />);
      
      expect(screen.getByText('Teal')).toBeInTheDocument();
    });

    it('renders turquoise category', () => {
      render(<Colors category="turquoise" />);
      
      expect(screen.getByText('Turquoise')).toBeInTheDocument();
    });
  });

  // ShowAll tests
  describe('ShowAll Prop', () => {
    it('shows all categories when showAll is true', () => {
      render(<Colors showAll />);
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Secondary')).toBeInTheDocument();
      expect(screen.getByText('Neutral')).toBeInTheDocument();
      expect(screen.getByText('Success')).toBeInTheDocument();
      expect(screen.getByText('Warning')).toBeInTheDocument();
      expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('shows all categories when no category is specified', () => {
      render(<Colors />);
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Brown')).toBeInTheDocument();
      expect(screen.getByText('Purple')).toBeInTheDocument();
    });

    it('shows only specified category when category prop is set', () => {
      render(<Colors category="primary" />);
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.queryByText('Secondary')).not.toBeInTheDocument();
      expect(screen.queryByText('Brown')).not.toBeInTheDocument();
    });
  });

  // ShowHex tests
  describe('ShowHex Prop', () => {
    it('shows hex values by default', () => {
      const { container } = render(<Colors category="primary" />);
      
      const hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      expect(hexValues.length).toBeGreaterThan(0);
    });

    it('shows hex values when showHex is true', () => {
      const { container } = render(<Colors category="primary" showHex />);
      
      const hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      expect(hexValues.length).toBeGreaterThan(0);
    });

    it('hides hex values when showHex is false', () => {
      const { container } = render(<Colors category="primary" showHex={false} />);
      
      const hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      expect(hexValues).toHaveLength(0);
    });

    it('hex values contain valid color codes', () => {
      const { container } = render(<Colors category="primary" showHex />);
      
      const hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      hexValues.forEach(hex => {
        expect(hex.textContent).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });
  });

  // Color swatch tests
  describe('Color Swatches', () => {
    it('renders color swatches', () => {
      const { container } = render(<Colors category="primary" />);
      
      const swatches = container.querySelectorAll('.db-colors-swatch');
      expect(swatches.length).toBeGreaterThan(0);
    });

    it('applies background color to swatch color element', () => {
      const { container } = render(<Colors category="primary" />);
      
      const colorElement = container.querySelector('.db-colors-swatch__color') as HTMLElement;
      expect(colorElement).toBeInTheDocument();
      expect(colorElement.style.backgroundColor).toBeTruthy();
    });

    it('includes shade name in swatch', () => {
      const { container } = render(<Colors category="primary" />);
      
      const shadeElements = container.querySelectorAll('.db-colors-swatch__shade');
      expect(shadeElements.length).toBeGreaterThan(0);
    });

    it('includes title attribute with color information', () => {
      const { container } = render(<Colors category="primary" />);
      
      const colorElement = container.querySelector('.db-colors-swatch__color');
      expect(colorElement).toHaveAttribute('title');
      expect(colorElement?.getAttribute('title')).toContain('Primary');
    });

    it('renders swatch info container', () => {
      const { container } = render(<Colors category="primary" />);
      
      const swatchInfo = container.querySelector('.db-colors-swatch__info');
      expect(swatchInfo).toBeInTheDocument();
    });
  });

  // Structure tests
  describe('Structure', () => {
    it('renders category title as h3', () => {
      const { container } = render(<Colors category="primary" />);
      
      const title = container.querySelector('.db-colors-category__title');
      expect(title?.tagName).toBe('H3');
    });

    it('renders main header as h2 when showing all', () => {
      const { container } = render(<Colors showAll />);
      
      const headers = container.querySelectorAll('h2');
      expect(headers.length).toBeGreaterThan(0);
    });

    it('groups swatches in palette container', () => {
      const { container } = render(<Colors category="primary" />);
      
      const palette = container.querySelector('.db-colors-palette');
      const swatches = palette?.querySelectorAll('.db-colors-swatch');
      expect(swatches && swatches.length).toBeGreaterThan(0);
    });

    it('applies category class', () => {
      const { container } = render(<Colors category="primary" />);
      
      const category = container.querySelector('.db-colors-category');
      expect(category).toBeInTheDocument();
    });

    it('applies header class when showing all', () => {
      const { container } = render(<Colors showAll />);
      
      const header = container.querySelector('.db-colors-header');
      expect(header).toBeInTheDocument();
    });
  });

  // Multiple categories tests
  describe('Multiple Categories', () => {
    it('renders multiple categories when showAll is true', () => {
      const { container } = render(<Colors showAll />);
      
      const categories = container.querySelectorAll('.db-colors-category');
      expect(categories.length).toBeGreaterThan(1);
    });

    it('renders all 16 categories when showAll is true', () => {
      const { container } = render(<Colors showAll />);
      
      const categories = container.querySelectorAll('.db-colors-category');
      expect(categories).toHaveLength(16);
    });

    it('renders only one category when category is specified', () => {
      const { container } = render(<Colors category="primary" />);
      
      const categories = container.querySelectorAll('.db-colors-category');
      expect(categories).toHaveLength(1);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('renders when switching between categories', () => {
      const { rerender } = render(<Colors category="primary" />);
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
      
      rerender(<Colors category="secondary" />);
      
      expect(screen.queryByText('Primary')).not.toBeInTheDocument();
      expect(screen.getByText('Secondary')).toBeInTheDocument();
    });

    it('handles showAll override when category is provided', () => {
      render(<Colors category="primary" showAll />);
      
      // showAll should take precedence
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Secondary')).toBeInTheDocument();
    });

    it('handles toggling showHex', () => {
      const { container, rerender } = render(<Colors category="primary" showHex />);
      
      let hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      expect(hexValues.length).toBeGreaterThan(0);
      
      rerender(<Colors category="primary" showHex={false} />);
      
      hexValues = container.querySelectorAll('.db-colors-swatch__hex');
      expect(hexValues).toHaveLength(0);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations with single category', async () => {
      const { container } = render(<Colors category="primary" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with all categories', async () => {
      const { container } = render(<Colors showAll />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations without hex values', async () => {
      const { container } = render(<Colors category="primary" showHex={false} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('provides descriptive title attributes for color swatches', () => {
      const { container } = render(<Colors category="primary" />);
      
      const colorElements = container.querySelectorAll('.db-colors-swatch__color');
      colorElements.forEach(element => {
        expect(element).toHaveAttribute('title');
        expect(element.getAttribute('title')).toBeTruthy();
      });
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Colors.displayName).toBe('Colors');
    });
  });
});



