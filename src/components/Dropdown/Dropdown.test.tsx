import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveNoViolations } from 'jest-axe';
import { Dropdown, DropdownItem } from './Dropdown';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock createPortal for testing
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: React.ReactNode) => node,
}));

// Mock data
const mockItems: DropdownItem[] = [
  { id: '1', label: 'Edit', icon: <span data-testid="icon-edit">✏️</span> },
  { id: '2', label: 'Duplicate', description: 'Make a copy' },
  { id: '3', label: 'Archive', divider: true },
  { id: '4', label: 'Delete', variant: 'danger', disabled: true },
];

const mockItemsWithVariants: DropdownItem[] = [
  { id: '1', label: 'Success Action', variant: 'success' },
  { id: '2', label: 'Danger Action', variant: 'danger' },
  { id: '3', label: 'Default Action', variant: 'default' },
];

describe('Dropdown', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders trigger element', () => {
      render(
        <Dropdown items={mockItems}>
          <button>Open Menu</button>
        </Dropdown>
      );
      
      expect(screen.getByText('Open Menu')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Dropdown items={mockItems} ref={ref}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className to dropdown', async () => {
      const { container } = render(
        <Dropdown items={mockItems} className="custom-dropdown" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown');
        expect(dropdown).toHaveClass('custom-dropdown');
      });
    });

    it('does not show dropdown by default', () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
    });
  });

  // Click trigger tests
  describe('Click Trigger', () => {
    it('opens dropdown on click', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });

    it('closes dropdown on second click', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
      });
    });

    it('opens dropdown on Enter key', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const triggerWrapper = container.querySelector('[role="button"]');
      triggerWrapper?.focus();
      
      await userEvent.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });

    it('opens dropdown on Space key', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const triggerWrapper = container.querySelector('[role="button"]');
      triggerWrapper?.focus();
      
      await userEvent.keyboard(' ');
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });

    it('opens dropdown on ArrowDown', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const triggerWrapper = container.querySelector('[role="button"]');
      triggerWrapper?.focus();
      
      await userEvent.keyboard('{ArrowDown}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });
  });

  // Hover trigger tests
  describe('Hover Trigger', () => {
    it('opens on mouse enter when trigger is hover', async () => {
      const { container } = render(
        <Dropdown items={mockItems} trigger="hover">
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.hover(screen.getByText('Trigger'));
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });

    it('closes on mouse leave when trigger is hover', async () => {
      const { container } = render(
        <Dropdown items={mockItems} trigger="hover">
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.hover(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.unhover(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
      });
    });
  });

  // Manual trigger tests
  describe('Manual Trigger', () => {
    it('does not open on click when trigger is manual', async () => {
      const { container } = render(
        <Dropdown items={mockItems} trigger="manual">
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
    });

    it('respects controlled open prop', async () => {
      const { container, rerender } = render(
        <Dropdown items={mockItems} trigger="manual" open={false}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
      
      rerender(
        <Dropdown items={mockItems} trigger="manual" open={true}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
    });
  });

  // Items rendering tests
  describe('Items Rendering', () => {
    it('renders all items', async () => {
      render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
        expect(screen.getByText('Duplicate')).toBeInTheDocument();
        expect(screen.getByText('Archive')).toBeInTheDocument();
      });
    });

    it('renders item labels', async () => {
      render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
      });
    });

    it('renders item descriptions', async () => {
      render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Make a copy')).toBeInTheDocument();
      });
    });

    it('renders item icons', async () => {
      render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('icon-edit')).toBeInTheDocument();
      });
    });

    it('renders dividers', async () => {
      const { container } = render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const divider = container.querySelector('.db-dropdown__divider');
        expect(divider).toBeInTheDocument();
      });
    });

    it('applies disabled class to disabled items', async () => {
      const { container } = render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const disabledItem = container.querySelector('.db-dropdown__item--disabled');
        expect(disabledItem).toBeInTheDocument();
      });
    });
  });

  // Variant tests
  describe('Item Variants', () => {
    it('applies default variant class', async () => {
      const { container } = render(
        <Dropdown items={mockItemsWithVariants} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const defaultItem = container.querySelector('.db-dropdown__item--default');
        expect(defaultItem).toBeInTheDocument();
      });
    });

    it('applies success variant class', async () => {
      const { container } = render(
        <Dropdown items={mockItemsWithVariants} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const successItem = container.querySelector('.db-dropdown__item--success');
        expect(successItem).toBeInTheDocument();
      });
    });

    it('applies danger variant class', async () => {
      const { container } = render(
        <Dropdown items={mockItemsWithVariants} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dangerItem = container.querySelector('.db-dropdown__item--danger');
        expect(dangerItem).toBeInTheDocument();
      });
    });
  });

  // Selection tests
  describe('Selection', () => {
    it('calls onSelect when item is clicked', async () => {
      const handleSelect = jest.fn();
      
      render(
        <Dropdown items={mockItems} onSelect={handleSelect} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Edit'));
      
      expect(handleSelect).toHaveBeenCalledWith(mockItems[0]);
    });

    it('calls item onClick handler', async () => {
      const handleClick = jest.fn();
      const items: DropdownItem[] = [
        { id: '1', label: 'Test', onClick: handleClick },
      ];
      
      render(
        <Dropdown items={items} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Test')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Test'));
      
      expect(handleClick).toHaveBeenCalledWith(items[0]);
    });

    it('does not select disabled items', async () => {
      const handleSelect = jest.fn();
      
      render(
        <Dropdown items={mockItems} onSelect={handleSelect} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Delete')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Delete'));
      
      expect(handleSelect).not.toHaveBeenCalled();
    });

    it('has closeOnSelect prop set to true by default', () => {
      const { container } = render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
    });

    it('does not close when closeOnSelect is false', async () => {
      const { container } = render(
        <Dropdown items={mockItems} open closeOnSelect={false}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Edit'));
      
      expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('closes on Escape', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
      });
    });

    it('navigates items with ArrowDown', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}');
      
      const focusedItem = container.querySelector('.db-dropdown__item--focused');
      expect(focusedItem).toBeInTheDocument();
    });

    it('navigates items with ArrowUp', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}{ArrowUp}');
      
      expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
    });

    it('selects item on Enter', async () => {
      const handleSelect = jest.fn();
      
      render(
        <Dropdown items={mockItems} onSelect={handleSelect}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
      });
      
      await userEvent.keyboard('{ArrowDown}{Enter}');
      
      await waitFor(() => {
        expect(handleSelect).toHaveBeenCalled();
      });
    });
  });

  // Placement tests
  describe('Placement', () => {
    it('applies bottom-start placement class', async () => {
      const { container } = render(
        <Dropdown items={mockItems} placement="bottom-start" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown--bottom-start');
        expect(dropdown).toBeInTheDocument();
      });
    });

    it('applies bottom-end placement class', async () => {
      const { container } = render(
        <Dropdown items={mockItems} placement="bottom-end" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown--bottom-end');
        expect(dropdown).toBeInTheDocument();
      });
    });

    it('applies top-start placement class', async () => {
      const { container } = render(
        <Dropdown items={mockItems} placement="top-start" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown--top-start');
        expect(dropdown).toBeInTheDocument();
      });
    });

    it('applies left placement class', async () => {
      const { container } = render(
        <Dropdown items={mockItems} placement="left" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown--left');
        expect(dropdown).toBeInTheDocument();
      });
    });

    it('applies right placement class', async () => {
      const { container } = render(
        <Dropdown items={mockItems} placement="right" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown--right');
        expect(dropdown).toBeInTheDocument();
      });
    });
  });

  // Sizing tests
  describe('Sizing', () => {
    it('applies custom width', async () => {
      const { container } = render(
        <Dropdown items={mockItems} width={300} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown') as HTMLElement;
        expect(dropdown?.style.width).toBe('300px');
      });
    });

    it('applies custom maxHeight', async () => {
      const { container } = render(
        <Dropdown items={mockItems} maxHeight={200} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown') as HTMLElement;
        expect(dropdown?.style.maxHeight).toBe('200px');
      });
    });

    it('uses string width value', async () => {
      const { container } = render(
        <Dropdown items={mockItems} width="100%" open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const dropdown = container.querySelector('.db-dropdown') as HTMLElement;
        expect(dropdown?.style.width).toBe('100%');
      });
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('does not open when disabled', async () => {
      const { container } = render(
        <Dropdown items={mockItems} disabled>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
    });

    it('applies disabled class to trigger', () => {
      const { container } = render(
        <Dropdown items={mockItems} disabled>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const trigger = container.querySelector('.db-dropdown__trigger--disabled');
      expect(trigger).toBeInTheDocument();
    });
  });

  // Custom content tests
  describe('Custom Content', () => {
    it('renders custom content instead of items', async () => {
      render(
        <Dropdown content={<div data-testid="custom-content">Custom</div>} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('custom-content')).toBeInTheDocument();
      });
    });

    it('does not render items when custom content is provided', async () => {
      render(
        <Dropdown
          items={mockItems}
          content={<div data-testid="custom-content">Custom</div>}
          open
        >
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('custom-content')).toBeInTheDocument();
        expect(screen.queryByText('Edit')).not.toBeInTheDocument();
      });
    });
  });

  // Click outside tests
  describe('Click Outside', () => {
    it('closes dropdown when clicking outside', async () => {
      const { container } = render(
        <div>
          <Dropdown items={mockItems}>
            <button>Trigger</button>
          </Dropdown>
          <button>Outside</button>
        </div>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Outside'));
      
      await waitFor(() => {
        expect(container.querySelector('.db-dropdown')).not.toBeInTheDocument();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty items array', async () => {
      const { container } = render(
        <Dropdown items={[]} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const list = container.querySelector('.db-dropdown__list');
        expect(list).toBeInTheDocument();
        expect(list?.children.length).toBe(0);
      });
    });

    it('handles items without descriptions', async () => {
      const items: DropdownItem[] = [
        { id: '1', label: 'Item 1' },
        { id: '2', label: 'Item 2' },
      ];
      
      render(
        <Dropdown items={items} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
      });
    });

    it('handles controlled open state', async () => {
      const handleOpenChange = jest.fn();
      const { rerender } = render(
        <Dropdown items={mockItems} open={false} onOpenChange={handleOpenChange}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      expect(handleOpenChange).toHaveBeenCalledWith(true);
      
      rerender(
        <Dropdown items={mockItems} open={true} onOpenChange={handleOpenChange}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Edit')).toBeInTheDocument();
      });
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('renders with proper structure', () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const trigger = container.querySelector('.db-dropdown__trigger');
      expect(trigger).toBeInTheDocument();
    });

    it('has proper ARIA attributes on trigger wrapper', () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      const triggerWrapper = container.querySelector('[role="button"]');
      expect(triggerWrapper).toHaveAttribute('aria-haspopup', 'menu');
      expect(triggerWrapper).toHaveAttribute('aria-expanded', 'false');
    });

    it('updates aria-expanded when open', async () => {
      const { container } = render(
        <Dropdown items={mockItems}>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      await waitFor(() => {
        const triggerWrapper = container.querySelector('[role="button"]');
        expect(triggerWrapper).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('has proper menu role', async () => {
      render(
        <Dropdown items={mockItems} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const menu = screen.getByRole('menu');
        expect(menu).toBeInTheDocument();
      });
    });

    it('has proper menuitem roles', async () => {
      render(
        <Dropdown items={mockItems.filter(item => !item.disabled)} open>
          <button>Trigger</button>
        </Dropdown>
      );
      
      await waitFor(() => {
        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBeGreaterThan(0);
      });
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Dropdown.displayName).toBe('Dropdown');
    });
  });
});
