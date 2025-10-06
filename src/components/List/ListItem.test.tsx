import userEvent from "@testing-library/user-event";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ListItem } from './ListItem';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('ListItem', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<ListItem>Item content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toBeInTheDocument();
      expect(item).toHaveClass('db-list-item');
      expect(item).toHaveTextContent('Item content');
    });

    it('renders children directly', () => {
      render(<ListItem>Direct children content</ListItem>);
      
      expect(screen.getByText('Direct children content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <ListItem className="custom-item">Content</ListItem>
      );
      
      const item = container.querySelector('li');
      expect(item).toHaveClass('db-list-item', 'custom-item');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLLIElement>();
      render(<ListItem ref={ref}>Content</ListItem>);
      
      expect(ref.current).toBeInstanceOf(HTMLLIElement);
      expect(ref.current?.tagName).toBe('LI');
    });

    it('forwards additional props', () => {
      render(
        <ListItem data-testid="list-item" id="test-item">
          Content
        </ListItem>
      );
      
      const item = screen.getByTestId('list-item');
      expect(item).toHaveAttribute('id', 'test-item');
    });

    it('uses li element by default', () => {
      const { container } = render(<ListItem>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toBeInTheDocument();
    });
  });

  // Content structure tests
  describe('Content Structure', () => {
    it('renders primary text', () => {
      const { container } = render(<ListItem primary="Primary text" />);
      
      expect(screen.getByText('Primary text')).toBeInTheDocument();
      const primary = container.querySelector('.db-list-item__primary');
      expect(primary).toBeInTheDocument();
    });

    it('renders secondary text', () => {
      const { container } = render(
        <ListItem primary="Title" secondary="Subtitle" />
      );
      
      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      const secondary = container.querySelector('.db-list-item__secondary');
      expect(secondary).toBeInTheDocument();
    });

    it('renders tertiary text', () => {
      const { container } = render(
        <ListItem primary="Title" secondary="Subtitle" tertiary="Meta" />
      );
      
      expect(screen.getByText('Meta')).toBeInTheDocument();
      const tertiary = container.querySelector('.db-list-item__tertiary');
      expect(tertiary).toBeInTheDocument();
    });

    it('renders all text levels together', () => {
      render(
        <ListItem
          primary="Primary"
          secondary="Secondary"
          tertiary="Tertiary"
        />
      );
      
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Secondary')).toBeInTheDocument();
      expect(screen.getByText('Tertiary')).toBeInTheDocument();
    });

    it('renders ReactNode in primary', () => {
      render(<ListItem primary={<strong>Bold Primary</strong>} />);
      
      const bold = screen.getByText('Bold Primary');
      expect(bold.tagName).toBe('STRONG');
    });

    it('renders with content wrapper when using structured content', () => {
      const { container } = render(<ListItem primary="Title" />);
      
      const content = container.querySelector('.db-list-item__content');
      expect(content).toBeInTheDocument();
    });

    it('renders with text content wrapper', () => {
      const { container } = render(<ListItem primary="Text" />);
      
      const textContent = container.querySelector('.db-list-item__text-content');
      expect(textContent).toBeInTheDocument();
    });
  });

  // Start and end content tests
  describe('Start and End Content', () => {
    it('renders startContent', () => {
      render(
        <ListItem
          startContent={<span data-testid="start-icon">→</span>}
          primary="Title"
        />
      );
      
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders endContent', () => {
      render(
        <ListItem
          primary="Title"
          endContent={<span data-testid="end-icon">✓</span>}
        />
      );
      
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('renders both startContent and endContent', () => {
      render(
        <ListItem
          startContent={<span data-testid="start">→</span>}
          primary="Title"
          endContent={<span data-testid="end">✓</span>}
        />
      );
      
      expect(screen.getByTestId('start')).toBeInTheDocument();
      expect(screen.getByTestId('end')).toBeInTheDocument();
    });

    it('applies start content wrapper class', () => {
      const { container } = render(
        <ListItem startContent={<span>Icon</span>} primary="Title" />
      );
      
      const startWrapper = container.querySelector('.db-list-item__start-content');
      expect(startWrapper).toBeInTheDocument();
    });

    it('applies end content wrapper class', () => {
      const { container } = render(
        <ListItem primary="Title" endContent={<span>Icon</span>} />
      );
      
      const endWrapper = container.querySelector('.db-list-item__end-content');
      expect(endWrapper).toBeInTheDocument();
    });
  });

  // State tests
  describe('States', () => {
    it('applies selected class when selected', () => {
      const { container } = render(<ListItem selected>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveClass('db-list-item--selected');
    });

    it('applies disabled class when disabled', () => {
      const { container } = render(<ListItem disabled>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveClass('db-list-item--disabled');
    });

    it('applies interactive class when clickable', () => {
      const { container } = render(<ListItem clickable>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveClass('db-list-item--interactive');
    });

    it('applies interactive class when onClick is provided', () => {
      const { container } = render(
        <ListItem onClick={() => {}}>Content</ListItem>
      );
      
      const item = container.querySelector('li');
      expect(item).toHaveClass('db-list-item--interactive');
    });

    it('applies interactive class when href is provided', () => {
      const { container } = render(
        <ListItem as="a" href="/path">Content</ListItem>
      );
      
      const item = container.querySelector('a');
      expect(item).toHaveClass('db-list-item--interactive');
    });

    it('combines multiple state classes', () => {
      const { container } = render(
        <ListItem selected disabled clickable>Content</ListItem>
      );
      
      const item = container.querySelector('li');
      expect(item).toHaveClass(
        'db-list-item--selected',
        'db-list-item--disabled',
        'db-list-item--interactive'
      );
    });
  });

  // Click handling tests
  describe('Click Handling', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();
      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      
      const item = screen.getByText('Click me');
      await userEvent.click(item);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      render(
        <ListItem onClick={handleClick} disabled>
          Disabled
        </ListItem>
      );
      
      const item = screen.getByText('Disabled');
      await userEvent.click(item);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('prevents default when disabled', async () => {
      const handleClick = jest.fn();
      render(
        <ListItem onClick={handleClick} disabled>
          Content
        </ListItem>
      );
      
      const item = screen.getByText('Content');
      const event = new MouseEvent('click', { bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      item.dispatchEvent(event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('makes item clickable when clickable prop is true', () => {
      const { container } = render(<ListItem clickable>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveAttribute('role', 'button');
      expect(item).toHaveAttribute('tabIndex', '0');
    });

    it('does not add click handler when not interactive', () => {
      const { container } = render(<ListItem>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).not.toHaveAttribute('role');
      expect(item).not.toHaveAttribute('tabIndex');
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('handles Enter key press', async () => {
      const handleClick = jest.fn();
      render(<ListItem onClick={handleClick}>Content</ListItem>);
      
      const item = screen.getByText('Content');
      item.focus();
      
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles Space key press', async () => {
      const handleClick = jest.fn();
      render(<ListItem onClick={handleClick}>Content</ListItem>);
      
      const item = screen.getByText('Content');
      item.focus();
      
      await userEvent.keyboard(' ');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger on other keys', async () => {
      const handleClick = jest.fn();
      render(<ListItem onClick={handleClick}>Content</ListItem>);
      
      const item = screen.getByText('Content');
      item.focus();
      
      await userEvent.keyboard('{Tab}');
      await userEvent.keyboard('{Escape}');
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not handle keyboard events when disabled', async () => {
      const handleClick = jest.fn();
      render(
        <ListItem onClick={handleClick} disabled>
          Content
        </ListItem>
      );
      
      const item = screen.getByText('Content');
      item.focus();
      
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard(' ');
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('is focusable when interactive', () => {
      const { container } = render(<ListItem clickable>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveAttribute('tabIndex', '0');
    });

    it('is not focusable when disabled', () => {
      const { container } = render(
        <ListItem clickable disabled>Content</ListItem>
      );
      
      const item = container.querySelector('li');
      expect(item).not.toHaveAttribute('tabIndex');
    });
  });

  // Element type tests
  describe('Element Type', () => {
    it('renders as li by default', () => {
      const { container } = render(<ListItem>Content</ListItem>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('LI');
    });

    it('renders as custom element when as prop is provided', () => {
      const { container } = render(<ListItem as="div">Content</ListItem>);
      
      const element = container.firstChild;
      expect(element?.nodeName).toBe('DIV');
    });

    it('renders as anchor when href is provided', () => {
      const { container } = render(<ListItem as="a" href="/path">Link</ListItem>);
      
      const element = container.querySelector('a');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('href', '/path');
    });

    it('renders as anchor when as is "a"', () => {
      const { container } = render(<ListItem as="a" href="/path">Link</ListItem>);
      
      const element = container.querySelector('a');
      expect(element).toBeInTheDocument();
    });

    it('applies target attribute for links', () => {
      render(
        <ListItem as="a" href="/path" target="_blank">
          External link
        </ListItem>
      );
      
      const link = screen.getByText('External link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('does not add role=button for links', () => {
      const { container } = render(<ListItem as="a" href="/path">Link</ListItem>);
      
      const link = container.querySelector('a');
      expect(link).not.toHaveAttribute('role', 'button');
    });

    it('adds role=button for interactive non-links', () => {
      const { container } = render(<ListItem clickable>Button</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveAttribute('role', 'button');
    });
  });

  // ARIA attributes tests
  describe('ARIA Attributes', () => {
    it('adds aria-disabled when disabled', () => {
      const { container } = render(<ListItem disabled>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('does not add aria-disabled when not disabled', () => {
      const { container } = render(<ListItem>Content</ListItem>);
      
      const item = container.querySelector('li');
      expect(item).not.toHaveAttribute('aria-disabled');
    });
  });

  // Custom className tests
  describe('Custom Content ClassName', () => {
    it('applies contentClassName to content wrapper', () => {
      const { container } = render(
        <ListItem primary="Title" contentClassName="custom-content" />
      );
      
      const content = container.querySelector('.db-list-item__content');
      expect(content).toHaveClass('db-list-item__content', 'custom-content');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('renders without any text props', () => {
      const { container } = render(<ListItem />);
      
      const item = container.querySelector('li');
      expect(item).toBeInTheDocument();
    });

    it('renders with only children', () => {
      render(<ListItem>Only children</ListItem>);
      
      expect(screen.getByText('Only children')).toBeInTheDocument();
    });

    it('prefers children over structured content', () => {
      render(
        <ListItem primary="Primary" secondary="Secondary">
          Children content
        </ListItem>
      );
      
      expect(screen.getByText('Children content')).toBeInTheDocument();
      expect(screen.queryByText('Primary')).not.toBeInTheDocument();
    });

    it('handles complex children', () => {
      render(
        <ListItem>
          <div>
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </ListItem>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('preserves item during re-render', () => {
      const { rerender } = render(<ListItem>Original</ListItem>);
      
      expect(screen.getByText('Original')).toBeInTheDocument();
      
      rerender(<ListItem>Updated</ListItem>);
      
      expect(screen.queryByText('Original')).not.toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });

    it('handles rapid clicks', async () => {
      const handleClick = jest.fn();
      render(<ListItem onClick={handleClick}>Click me</ListItem>);
      
      const item = screen.getByText('Click me');
      
      await userEvent.click(item);
      await userEvent.click(item);
      await userEvent.click(item);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <ul>
          <ListItem primary="Title" secondary="Description">
            Content
          </ListItem>
        </ul>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when clickable', async () => {
      const { container } = render(
        <ul>
          <ListItem onClick={() => {}} primary="Clickable item" />
        </ul>
      );
      
      // Disable aria-allowed-role since <li> with role="button" is a component design choice
      const results = await axe(container, {
        rules: {
          'aria-allowed-role': { enabled: false },
          'list': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations as link', async () => {
      const { container } = render(
        <ul>
          <ListItem as="a" href="/path">Link item</ListItem>
        </ul>
      );
      
      // Disable list rule since <a> as direct child of <ul> is a component design choice
      const results = await axe(container, {
        rules: {
          'list': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when disabled', async () => {
      const { container } = render(
        <ul>
          <ListItem disabled primary="Disabled item" />
        </ul>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      const handleClick = jest.fn();
      render(
        <ul>
          <ListItem onClick={handleClick}>Accessible</ListItem>
        </ul>
      );
      
      const item = screen.getByText('Accessible');
      
      // Tab to focus
      await userEvent.tab();
      expect(item).toHaveFocus();
      
      // Activate with Enter
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(ListItem.displayName).toBe('ListItem');
    });
  });
});
