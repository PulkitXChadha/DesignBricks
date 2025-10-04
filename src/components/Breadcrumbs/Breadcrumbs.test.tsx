import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Breadcrumbs, BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock data
const mockItems: BreadcrumbItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'Category', href: '/category' },
  { id: '3', label: 'Subcategory', href: '/category/subcategory' },
  { id: '4', label: 'Current Page' },
];

const mockItemsWithIcons: BreadcrumbItem[] = [
  { 
    id: '1', 
    label: 'Home', 
    href: '/',
    icon: <span data-testid="home-icon">🏠</span>
  },
  { id: '2', label: 'Documents', href: '/documents' },
  { id: '3', label: 'File' },
];

describe('Breadcrumbs', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass('db-breadcrumbs');
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('renders all breadcrumb items', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Category')).toBeInTheDocument();
      expect(screen.getByText('Subcategory')).toBeInTheDocument();
      expect(screen.getByText('Current Page')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Breadcrumbs items={mockItems} className="custom-breadcrumbs" />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs', 'custom-breadcrumbs');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Breadcrumbs items={mockItems} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current).toHaveClass('db-breadcrumbs');
      expect(ref.current?.tagName).toBe('NAV');
    });

    it('forwards additional props', () => {
      render(
        <Breadcrumbs
          items={mockItems}
          data-testid="breadcrumbs"
          id="test-breadcrumbs"
        />
      );
      
      const nav = screen.getByTestId('breadcrumbs');
      expect(nav).toHaveAttribute('id', 'test-breadcrumbs');
    });

    it('renders ordered list structure', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const list = container.querySelector('ol.db-breadcrumbs__list');
      expect(list).toBeInTheDocument();
      
      const listItems = container.querySelectorAll('li.db-breadcrumbs__list-item');
      expect(listItems).toHaveLength(mockItems.length);
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<BreadcrumbsProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Breadcrumbs items={mockItems} size={size} />);
        
        const nav = screen.getByRole('navigation');
        expect(nav).toHaveClass(`db-breadcrumbs--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs--medium');
    });

    it('applies medium size when size is undefined', () => {
      render(<Breadcrumbs items={mockItems} size={undefined} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs--medium');
    });
  });

  // Item types tests
  describe('Item Types', () => {
    it('renders links with href', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toHaveAttribute('href', '/');
      expect(homeLink).toHaveClass('db-breadcrumbs__item', 'db-breadcrumbs__item--clickable');
    });

    it('renders last item as non-clickable span', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const currentPage = screen.getByText('Current Page');
      expect(currentPage.closest('a')).not.toBeInTheDocument();
      expect(currentPage.closest('button')).not.toBeInTheDocument();
      
      const itemSpan = currentPage.closest('.db-breadcrumbs__item');
      expect(itemSpan).toHaveClass(
        'db-breadcrumbs__item',
        'db-breadcrumbs__item--current'
      );
    });

    it('renders items with onClick as buttons', () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Clickable', onClick: handleClick },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const button = screen.getByText('Clickable').closest('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
      expect(button).toHaveClass('db-breadcrumbs__item', 'db-breadcrumbs__item--clickable');
    });

    it('renders disabled items as non-clickable spans', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Disabled', href: '/', disabled: true },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const disabledItem = screen.getByText('Disabled');
      expect(disabledItem.closest('a')).not.toBeInTheDocument();
      
      const itemSpan = disabledItem.closest('.db-breadcrumbs__item');
      expect(itemSpan).toHaveClass(
        'db-breadcrumbs__item',
        'db-breadcrumbs__item--disabled'
      );
    });

    it('renders non-interactive items as spans', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Static' },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const staticItem = screen.getByText('Static');
      expect(staticItem.closest('span')).toBeInTheDocument();
      expect(staticItem.closest('a')).not.toBeInTheDocument();
      expect(staticItem.closest('button')).not.toBeInTheDocument();
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders items with icons', () => {
      render(<Breadcrumbs items={mockItemsWithIcons} />);
      
      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    });

    it('renders icon in correct wrapper', () => {
      const { container } = render(<Breadcrumbs items={mockItemsWithIcons} />);
      
      const iconWrapper = container.querySelector('.db-breadcrumbs__icon');
      expect(iconWrapper).toBeInTheDocument();
      expect(iconWrapper).toContainElement(screen.getByTestId('home-icon'));
    });

    it('renders items without icons correctly', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const iconWrappers = container.querySelectorAll('.db-breadcrumbs__icon');
      expect(iconWrappers).toHaveLength(0);
    });

    it('renders mixed items with and without icons', () => {
      render(<Breadcrumbs items={mockItemsWithIcons} />);
      
      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByText('Documents')).toBeInTheDocument();
      expect(screen.getByText('File')).toBeInTheDocument();
    });
  });

  // Separator tests
  describe('Separators', () => {
    it('renders default separator', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const separators = container.querySelectorAll('.db-breadcrumbs__separator');
      // Should have n-1 separators for n items
      expect(separators).toHaveLength(mockItems.length - 1);
    });

    it('renders separators with aria-hidden', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const separators = container.querySelectorAll('.db-breadcrumbs__separator');
      separators.forEach(separator => {
        expect(separator).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('renders custom separator', () => {
      const CustomSeparator = () => <span data-testid="custom-sep">/</span>;
      const { container } = render(
        <Breadcrumbs items={mockItems} separator={<CustomSeparator />} />
      );
      
      const separators = screen.getAllByTestId('custom-sep');
      expect(separators).toHaveLength(mockItems.length - 1);
      
      const separatorWrappers = container.querySelectorAll('.db-breadcrumbs__separator');
      expect(separatorWrappers).toHaveLength(mockItems.length - 1);
    });

    it('does not render separator after last item', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const listItems = container.querySelectorAll('li.db-breadcrumbs__list-item');
      const lastItem = listItems[listItems.length - 1];
      const separator = lastItem.querySelector('.db-breadcrumbs__separator');
      
      expect(separator).not.toBeInTheDocument();
    });
  });

  // Collapse behavior tests
  describe('Collapse Behavior', () => {
    it('renders all items when below maxItems', () => {
      render(<Breadcrumbs items={mockItems} maxItems={10} />);
      
      mockItems.forEach(item => {
        expect(screen.getByText(item.label as string)).toBeInTheDocument();
      });
    });

    it('collapses items when exceeding maxItems', () => {
      render(<Breadcrumbs items={mockItems} maxItems={3} />);
      
      // Should show first item, ellipsis, and last item
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Current Page')).toBeInTheDocument();
      expect(screen.getByText('…')).toBeInTheDocument();
    });

    it('respects itemsBeforeCollapse', () => {
      const manyItems: BreadcrumbItem[] = [
        { id: '1', label: 'First' },
        { id: '2', label: 'Second' },
        { id: '3', label: 'Third' },
        { id: '4', label: 'Fourth' },
        { id: '5', label: 'Fifth' },
        { id: '6', label: 'Last' },
      ];
      
      render(
        <Breadcrumbs
          items={manyItems}
          maxItems={4}
          itemsBeforeCollapse={2}
          itemsAfterCollapse={1}
        />
      );
      
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
      expect(screen.getByText('Last')).toBeInTheDocument();
      expect(screen.getByText('…')).toBeInTheDocument();
      expect(screen.queryByText('Third')).not.toBeInTheDocument();
    });

    it('respects itemsAfterCollapse', () => {
      const manyItems: BreadcrumbItem[] = [
        { id: '1', label: 'First' },
        { id: '2', label: 'Second' },
        { id: '3', label: 'Third' },
        { id: '4', label: 'Fourth' },
        { id: '5', label: 'Fifth' },
        { id: '6', label: 'Last' },
      ];
      
      render(
        <Breadcrumbs
          items={manyItems}
          maxItems={4}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={2}
        />
      );
      
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Fifth')).toBeInTheDocument();
      expect(screen.getByText('Last')).toBeInTheDocument();
      expect(screen.getByText('…')).toBeInTheDocument();
    });

    it('renders ellipsis with correct class', () => {
      const { container } = render(
        <Breadcrumbs items={mockItems} maxItems={2} />
      );
      
      const ellipsis = container.querySelector('.db-breadcrumbs__ellipsis');
      expect(ellipsis).toBeInTheDocument();
      expect(ellipsis).toHaveTextContent('…');
    });

    it('renders ellipsis with separator', () => {
      const { container } = render(
        <Breadcrumbs items={mockItems} maxItems={2} />
      );
      
      const ellipsisItem = container.querySelector('.db-breadcrumbs__ellipsis')
        ?.closest('li');
      const separator = ellipsisItem?.querySelector('.db-breadcrumbs__separator');
      
      expect(separator).toBeInTheDocument();
    });
  });

  // Click handling tests
  describe('Click Handling', () => {
    it('calls onClick for items with click handlers', async () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Clickable', onClick: handleClick },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const clickableItem = screen.getByText('Clickable');
      await userEvent.click(clickableItem);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick for links with both href and onClick', async () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Link', href: '/', onClick: handleClick },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const link = screen.getByText('Link');
      await userEvent.click(link);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click on disabled items', async () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Disabled', onClick: handleClick, disabled: true },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const disabledItem = screen.getByText('Disabled');
      await userEvent.click(disabledItem);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not trigger click on current (last) item', async () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Home', href: '/' },
        { id: '2', label: 'Current', onClick: handleClick },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const currentItem = screen.getByText('Current');
      // Should be rendered as span, not button
      expect(currentItem.closest('button')).not.toBeInTheDocument();
    });

    it('supports keyboard interaction on button items', async () => {
      const handleClick = jest.fn();
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Clickable', onClick: handleClick },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const button = screen.getByText('Clickable').closest('button') as HTMLElement;
      button.focus();
      
      expect(button).toHaveFocus();
      
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('renders with single item', () => {
      const singleItem: BreadcrumbItem[] = [{ id: '1', label: 'Only' }];
      const { container } = render(<Breadcrumbs items={singleItem} />);
      
      expect(screen.getByText('Only')).toBeInTheDocument();
      
      // No separators for single item
      const separators = container.querySelectorAll('.db-breadcrumbs__separator');
      expect(separators).toHaveLength(0);
    });

    it('renders with empty items array', () => {
      const { container } = render(<Breadcrumbs items={[]} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      const list = container.querySelector('ol.db-breadcrumbs__list');
      expect(list).toBeInTheDocument();
      expect(list?.children).toHaveLength(0);
    });

    it('handles very long labels', () => {
      const longLabel = 'A'.repeat(100);
      const items: BreadcrumbItem[] = [
        { id: '1', label: longLabel },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles ReactNode labels', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: <strong>Bold Label</strong>, href: '/' },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const boldLabel = screen.getByText('Bold Label');
      expect(boldLabel.tagName).toBe('STRONG');
    });

    it('handles special characters in labels', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Home & About' },
        { id: '2', label: 'Current <Page>' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      expect(screen.getByText('Home & About')).toBeInTheDocument();
      expect(screen.getByText(/Current/)).toBeInTheDocument();
    });

    it('renders with all props combined', () => {
      const handleClick = jest.fn();
      const CustomSeparator = () => <span>/</span>;
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Home', href: '/', icon: <span>🏠</span> },
        { id: '2', label: 'Click', onClick: handleClick },
        { id: '3', label: 'Disabled', disabled: true },
        { id: '4', label: 'Current' },
      ];
      
      render(
        <Breadcrumbs
          items={items}
          separator={<CustomSeparator />}
          size="large"
          maxItems={10}
          className="custom-breadcrumbs"
          data-testid="full-breadcrumbs"
        />
      );
      
      const nav = screen.getByTestId('full-breadcrumbs');
      expect(nav).toHaveClass('db-breadcrumbs--large', 'custom-breadcrumbs');
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Current')).toBeInTheDocument();
    });

    it('preserves breadcrumbs during re-render', () => {
      const { rerender } = render(<Breadcrumbs items={mockItems} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      
      const newItems: BreadcrumbItem[] = [
        { id: '1', label: 'New Home', href: '/' },
        { id: '2', label: 'New Current' },
      ];
      
      rerender(<Breadcrumbs items={newItems} />);
      
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      expect(screen.getByText('New Home')).toBeInTheDocument();
      expect(screen.getByText('New Current')).toBeInTheDocument();
    });
  });

  // Style and class tests
  describe('Styling', () => {
    it('applies base class', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs');
    });

    it('applies list class', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const list = container.querySelector('ol');
      expect(list).toHaveClass('db-breadcrumbs__list');
    });

    it('applies item class', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const items = container.querySelectorAll('.db-breadcrumbs__item');
      expect(items.length).toBeGreaterThan(0);
    });

    it('applies text wrapper class', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const textWrappers = container.querySelectorAll('.db-breadcrumbs__text');
      expect(textWrappers.length).toBeGreaterThan(0);
    });

    it('applies current class to last item', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const currentItems = container.querySelectorAll('.db-breadcrumbs__item--current');
      expect(currentItems).toHaveLength(1);
    });

    it('applies clickable class to interactive items', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const clickableItems = container.querySelectorAll('.db-breadcrumbs__item--clickable');
      // All items except last should be clickable (have href)
      expect(clickableItems.length).toBeGreaterThan(0);
    });

    it('applies disabled class to disabled items', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Disabled', disabled: true },
        { id: '2', label: 'Current' },
      ];
      
      const { container } = render(<Breadcrumbs items={items} />);
      
      const disabledItems = container.querySelectorAll('.db-breadcrumbs__item--disabled');
      expect(disabledItems).toHaveLength(1);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with collapsed items', async () => {
      const { container } = render(
        <Breadcrumbs items={mockItems} maxItems={2} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with icons', async () => {
      const { container } = render(<Breadcrumbs items={mockItemsWithIcons} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper navigation landmark', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      expect(nav.tagName).toBe('NAV');
    });

    it('has aria-label for breadcrumb navigation', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('uses ordered list for structure', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const list = container.querySelector('ol');
      expect(list).toBeInTheDocument();
    });

    it('marks separators with aria-hidden', () => {
      const { container } = render(<Breadcrumbs items={mockItems} />);
      
      const separators = container.querySelectorAll('.db-breadcrumbs__separator');
      separators.forEach(separator => {
        expect(separator).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('links are keyboard navigable', async () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const homeLink = screen.getByText('Home').closest('a') as HTMLElement;
      
      // Tab to the link
      await userEvent.tab();
      expect(homeLink).toHaveFocus();
    });

    it('buttons have proper type attribute', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Clickable', onClick: jest.fn() },
        { id: '2', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      const button = screen.getByText('Clickable').closest('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('current item is not interactive', () => {
      render(<Breadcrumbs items={mockItems} />);
      
      const currentPage = screen.getByText('Current Page');
      const span = currentPage.closest('span');
      
      expect(span).toBeInTheDocument();
      expect(currentPage.closest('a')).not.toBeInTheDocument();
      expect(currentPage.closest('button')).not.toBeInTheDocument();
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('works with all item types together', () => {
      const items: BreadcrumbItem[] = [
        { id: '1', label: 'Link', href: '/' },
        { id: '2', label: 'Button', onClick: jest.fn() },
        { id: '3', label: 'Static' },
        { id: '4', label: 'Disabled', disabled: true },
        { id: '5', label: 'Current' },
      ];
      
      render(<Breadcrumbs items={items} />);
      
      expect(screen.getByText('Link').closest('a')).toBeInTheDocument();
      expect(screen.getByText('Button').closest('button')).toBeInTheDocument();
      expect(screen.getByText('Static').closest('span')).toBeInTheDocument();
      expect(screen.getByText('Current')).toBeInTheDocument();
    });

    it('handles dynamic item updates', () => {
      const { rerender } = render(<Breadcrumbs items={mockItems.slice(0, 2)} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.queryByText('Subcategory')).not.toBeInTheDocument();
      
      rerender(<Breadcrumbs items={mockItems} />);
      
      expect(screen.getByText('Subcategory')).toBeInTheDocument();
    });

    it('maintains structure with size changes', () => {
      const { rerender } = render(<Breadcrumbs items={mockItems} size="small" />);
      
      let nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs--small');
      
      rerender(<Breadcrumbs items={mockItems} size="large" />);
      
      nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('db-breadcrumbs--large');
      expect(nav).not.toHaveClass('db-breadcrumbs--small');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Breadcrumbs.displayName).toBe('Breadcrumbs');
    });
  });
});
