import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { List, ListProps } from './List';
import { ListItem } from './ListItem';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('List', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toBeInTheDocument();
      expect(list).toHaveClass('db-list', 'db-list--default', 'db-list--medium', 'db-list--hoverable');
    });

    it('renders children correctly', () => {
      render(
        <List>
          <ListItem>First item</ListItem>
          <ListItem>Second item</ListItem>
          <ListItem>Third item</ListItem>
        </List>
      );
      
      expect(screen.getByText('First item')).toBeInTheDocument();
      expect(screen.getByText('Second item')).toBeInTheDocument();
      expect(screen.getByText('Third item')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <List className="custom-list">
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list', 'custom-list');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLUListElement>();
      render(
        <List ref={ref}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLUListElement);
      expect(ref.current?.tagName).toBe('UL');
    });

    it('forwards additional props', () => {
      render(
        <List data-testid="list" id="test-list">
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = screen.getByTestId('list');
      expect(list).toHaveAttribute('id', 'test-list');
    });

    it('uses ul element', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toBeInTheDocument();
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<ListProps['variant']> = ['default', 'plain', 'divided', 'bordered'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(
          <List variant={variant}>
            <ListItem>Item</ListItem>
          </List>
        );
        
        const list = container.querySelector('ul');
        expect(list).toHaveClass(`db-list--${variant}`);
      });
    });

    it('applies default variant by default', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--default');
    });

    it('applies default variant when variant is undefined', () => {
      const { container } = render(
        <List variant={undefined}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--default');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<ListProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(
          <List size={size}>
            <ListItem>Item</ListItem>
          </List>
        );
        
        const list = container.querySelector('ul');
        expect(list).toHaveClass(`db-list--${size}`);
      });
    });

    it('applies medium size by default', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--medium');
    });

    it('applies medium size when size is undefined', () => {
      const { container } = render(
        <List size={undefined}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--medium');
    });
  });

  // Dense prop tests
  describe('Dense Prop', () => {
    it('applies dense class when dense is true', () => {
      const { container } = render(
        <List dense>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--dense');
    });

    it('does not apply dense class by default', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).not.toHaveClass('db-list--dense');
    });

    it('does not apply dense class when dense is false', () => {
      const { container } = render(
        <List dense={false}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).not.toHaveClass('db-list--dense');
    });
  });

  // Hoverable prop tests
  describe('Hoverable Prop', () => {
    it('applies hoverable class by default', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--hoverable');
    });

    it('applies hoverable class when hoverable is true', () => {
      const { container } = render(
        <List hoverable={true}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--hoverable');
    });

    it('does not apply hoverable class when hoverable is false', () => {
      const { container } = render(
        <List hoverable={false}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).not.toHaveClass('db-list--hoverable');
    });
  });

  // Combined props tests
  describe('Combined Props', () => {
    it('renders with multiple props combined', () => {
      const { container } = render(
        <List variant="bordered" size="large" dense hoverable={false} className="custom">
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass(
        'db-list',
        'db-list--bordered',
        'db-list--large',
        'db-list--dense',
        'custom'
      );
      expect(list).not.toHaveClass('db-list--hoverable');
    });

    it('works with all variants and sizes', () => {
      const variants: Array<ListProps['variant']> = ['default', 'plain', 'divided', 'bordered'];
      const sizes: Array<ListProps['size']> = ['small', 'medium', 'large'];
      
      variants.forEach(variant => {
        sizes.forEach(size => {
          const { container, unmount } = render(
            <List variant={variant} size={size} dense hoverable>
              <ListItem>Item</ListItem>
            </List>
          );
          
          const list = container.querySelector('ul');
          expect(list).toHaveClass(
            `db-list--${variant}`,
            `db-list--${size}`,
            'db-list--dense',
            'db-list--hoverable'
          );
          
          unmount();
        });
      });
    });
  });

  // Content tests
  describe('Content', () => {
    it('renders with single child', () => {
      render(
        <List>
          <ListItem>Only item</ListItem>
        </List>
      );
      
      expect(screen.getByText('Only item')).toBeInTheDocument();
    });

    it('renders with multiple children', () => {
      render(
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
          <ListItem>Item 5</ListItem>
        </List>
      );
      
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 5')).toBeInTheDocument();
    });

    it('renders with mixed content types', () => {
      render(
        <List>
          <ListItem>Text item</ListItem>
          <li>Custom li element</li>
          <ListItem><strong>Bold item</strong></ListItem>
        </List>
      );
      
      expect(screen.getByText('Text item')).toBeInTheDocument();
      expect(screen.getByText('Custom li element')).toBeInTheDocument();
      expect(screen.getByText('Bold item')).toBeInTheDocument();
    });

    it('renders with complex children', () => {
      render(
        <List>
          <ListItem>
            <div>
              <p>Complex content</p>
              <span>With multiple elements</span>
            </div>
          </ListItem>
        </List>
      );
      
      expect(screen.getByText('Complex content')).toBeInTheDocument();
      expect(screen.getByText('With multiple elements')).toBeInTheDocument();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('renders with empty children', () => {
      const { container } = render(<List>{null}</List>);
      
      const list = container.querySelector('ul');
      expect(list).toBeInTheDocument();
      expect(list?.children).toHaveLength(0);
    });

    it('handles very long lists', () => {
      const items = Array.from({ length: 100 }, (_, i) => (
        <ListItem key={i}>Item {i + 1}</ListItem>
      ));
      
      const { container } = render(<List>{items}</List>);
      
      const list = container.querySelector('ul');
      expect(list?.children).toHaveLength(100);
    });

    it('preserves list during re-render', () => {
      const { rerender } = render(
        <List variant="default">
          <ListItem>Original</ListItem>
        </List>
      );
      
      expect(screen.getByText('Original')).toBeInTheDocument();
      
      rerender(
        <List variant="bordered">
          <ListItem>Updated</ListItem>
        </List>
      );
      
      expect(screen.queryByText('Original')).not.toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });

    it('handles prop changes', () => {
      const { container, rerender } = render(
        <List dense={false}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      let list = container.querySelector('ul');
      expect(list).not.toHaveClass('db-list--dense');
      
      rerender(
        <List dense={true}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--dense');
    });
  });

  // Styling tests
  describe('Styling', () => {
    it('applies base class', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list');
    });

    it('combines all modifier classes correctly', () => {
      const { container } = render(
        <List variant="divided" size="small" dense hoverable>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      const classes = list?.className.split(' ');
      
      expect(classes).toContain('db-list');
      expect(classes).toContain('db-list--divided');
      expect(classes).toContain('db-list--small');
      expect(classes).toContain('db-list--dense');
      expect(classes).toContain('db-list--hoverable');
    });

    it('does not add hoverable class when explicitly false', () => {
      const { container } = render(
        <List hoverable={false}>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list?.className).not.toContain('hoverable');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </List>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with all variants', async () => {
      const variants: Array<ListProps['variant']> = ['default', 'plain', 'divided', 'bordered'];
      
      for (const variant of variants) {
        const { container, unmount } = render(
          <List variant={variant}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
          </List>
        );
        
        const results = await axe(container);
        expect(results).toHaveNoViolations();
        
        unmount();
      }
    });

    it('uses semantic ul element', () => {
      const { container } = render(
        <List>
          <ListItem>Item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe('UL');
    });

    it('maintains proper list structure', () => {
      const { container } = render(
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      const items = list?.querySelectorAll('li');
      
      expect(items).toHaveLength(2);
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('works with ListItem components', () => {
      render(
        <List>
          <ListItem primary="Title 1" secondary="Description 1" />
          <ListItem primary="Title 2" secondary="Description 2" />
        </List>
      );
      
      expect(screen.getByText('Title 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
      expect(screen.getByText('Title 2')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });

    it('applies styles that work with hoverable items', () => {
      const { container } = render(
        <List hoverable>
          <ListItem clickable>Clickable item</ListItem>
        </List>
      );
      
      const list = container.querySelector('ul');
      expect(list).toHaveClass('db-list--hoverable');
      
      const item = container.querySelector('.db-list-item--interactive');
      expect(item).toBeInTheDocument();
    });

    it('works with different list item states', () => {
      render(
        <List>
          <ListItem>Normal</ListItem>
          <ListItem selected>Selected</ListItem>
          <ListItem disabled>Disabled</ListItem>
        </List>
      );
      
      expect(screen.getByText('Normal')).toBeInTheDocument();
      expect(screen.getByText('Selected')).toBeInTheDocument();
      expect(screen.getByText('Disabled')).toBeInTheDocument();
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(List.displayName).toBe('List');
    });
  });
});




