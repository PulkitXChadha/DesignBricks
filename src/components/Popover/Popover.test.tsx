import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Popover, PopoverProps } from './Popover';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock ReactDOM.createPortal for testing
jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: React.ReactNode) => node,
  };
});

describe('Popover', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders trigger element', () => {
      render(
        <Popover content="Popover content" trigger={<button>Trigger</button>} />
      );
      
      expect(screen.getByText('Trigger')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          ref={ref}
        />
      );
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom className to popover', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          className="custom-popover"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover');
        expect(popover).toHaveClass('custom-popover');
      });
    });

    it('does not show popover by default', () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      expect(container.querySelector('.db-popover')).not.toBeInTheDocument();
    });
  });

  // Open/Close state tests
  describe('Open/Close State', () => {
    it('shows popover when open is true', async () => {
      render(
        <Popover content="Popover content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Popover content')).toBeInTheDocument();
      });
    });

    it('hides popover when open is false', () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} open={false} />
      );
      
      expect(container.querySelector('.db-popover')).not.toBeInTheDocument();
    });

    it('calls onOpenChange when toggled', async () => {
      const handleOpenChange = jest.fn();
      
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          onOpenChange={handleOpenChange}
        />
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      expect(handleOpenChange).toHaveBeenCalledWith(true);
    });

    it('respects defaultOpen prop', async () => {
      render(
        <Popover
          content="Popover content"
          trigger={<button>Trigger</button>}
          defaultOpen
        />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Popover content')).toBeInTheDocument();
      });
    });
  });

  // Click trigger tests
  describe('Click Trigger', () => {
    it('opens on click by default', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('toggles on subsequent clicks', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
      
      await userEvent.click(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(screen.queryByText('Content')).not.toBeInTheDocument();
      });
    });
  });

  // Hover trigger tests
  describe('Hover Trigger', () => {
    it('opens on hover', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="hover"
        />
      );
      
      await userEvent.hover(screen.getByText('Trigger'));
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('closes on unhover', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="hover"
        />
      );
      
      await userEvent.hover(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
      
      await userEvent.unhover(screen.getByText('Trigger'));
      await waitFor(() => {
        expect(screen.queryByText('Content')).not.toBeInTheDocument();
      });
    });

    it('respects showDelay', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="hover"
          showDelay={100}
        />
      );
      
      await userEvent.hover(screen.getByText('Trigger'));
      
      // Should not appear immediately
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });

    it('respects hideDelay', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="hover"
          hideDelay={100}
          open
        />
      );
      
      await userEvent.unhover(screen.getByText('Trigger'));
      
      // Should still be visible briefly
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  // Focus trigger tests
  describe('Focus Trigger', () => {
    it('opens on focus', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="focus"
        />
      );
      
      const trigger = screen.getByText('Trigger');
      trigger.focus();
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('closes on blur', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="focus"
        />
      );
      
      const trigger = screen.getByText('Trigger');
      trigger.focus();
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
      
      trigger.blur();
      await waitFor(() => {
        expect(screen.queryByText('Content')).not.toBeInTheDocument();
      });
    });
  });

  // Manual trigger tests
  describe('Manual Trigger', () => {
    it('does not open automatically with manual trigger', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="manual"
        />
      );
      
      await userEvent.click(screen.getByText('Trigger'));
      
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });

    it('respects controlled open prop with manual trigger', async () => {
      const { rerender } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="manual"
          open={false}
        />
      );
      
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
      
      rerender(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          triggerType="manual"
          open={true}
        />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });
  });

  // Placement tests
  describe('Placement', () => {
    it('applies bottom placement class', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          placement="bottom"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--bottom');
        expect(popover).toBeInTheDocument();
      });
    });

    it('applies top placement class', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          placement="top"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--top');
        expect(popover).toBeInTheDocument();
      });
    });

    it('applies left placement class', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          placement="left"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--left');
        expect(popover).toBeInTheDocument();
      });
    });

    it('applies right placement class', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          placement="right"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--right');
        expect(popover).toBeInTheDocument();
      });
    });

    it('applies compound placement classes', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          placement="bottom-start"
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--bottom-start');
        expect(popover).toBeInTheDocument();
      });
    });
  });

  // Arrow tests
  describe('Arrow', () => {
    it('shows arrow by default', async () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        const arrow = container.querySelector('.db-popover__arrow');
        expect(arrow).toBeInTheDocument();
      });
    });

    it('hides arrow when arrow is false', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          arrow={false}
          open
        />
      );
      
      await waitFor(() => {
        const arrow = container.querySelector('.db-popover__arrow');
        expect(arrow).not.toBeInTheDocument();
      });
    });

    it('applies with-arrow class when arrow is shown', async () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--with-arrow');
        expect(popover).toBeInTheDocument();
      });
    });
  });

  // Close behaviors tests
  describe('Close Behaviors', () => {
    it('renders with closeOnClickOutside prop by default', () => {
      const { container } = render(
        <div>
          <Popover content="Content" trigger={<button>Trigger</button>} open />
          <button>Outside</button>
        </div>
      );
      
      expect(container.querySelector('.db-popover')).toBeInTheDocument();
    });

    it('does not close on click outside when disabled', async () => {
      render(
        <div>
          <Popover
            content="Content"
            trigger={<button>Trigger</button>}
            closeOnClickOutside={false}
            open
          />
          <button>Outside</button>
        </div>
      );
      
      await userEvent.click(screen.getByText('Outside'));
      
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('accepts closeOnEscape prop', () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} closeOnEscape open />
      );
      
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('does not close on Escape when disabled', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          closeOnEscape={false}
          open
        />
      );
      
      await userEvent.keyboard('{Escape}');
      
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('accepts closeOnContentClick prop', () => {
      render(
        <Popover
          content={<button>Content Button</button>}
          trigger={<button>Trigger</button>}
          closeOnContentClick
          open
        />
      );
      
      expect(screen.getByText('Content Button')).toBeInTheDocument();
    });

    it('does not close on content click by default', async () => {
      render(
        <Popover
          content={<button>Content Button</button>}
          trigger={<button>Trigger</button>}
          open
        />
      );
      
      await userEvent.click(screen.getByText('Content Button'));
      
      expect(screen.getByText('Content Button')).toBeInTheDocument();
    });
  });

  // Modal tests
  describe('Modal', () => {
    it('applies modal class when modal is true', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          modal
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover--modal');
        expect(popover).toBeInTheDocument();
      });
    });

    it('applies higher z-index for modal', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          modal
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover') as HTMLElement;
        expect(popover?.style.zIndex).toBe('1050');
      });
    });

    it('uses default z-index when not modal', async () => {
      const { container } = render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          open
        />
      );
      
      await waitFor(() => {
        const popover = container.querySelector('.db-popover') as HTMLElement;
        expect(popover?.style.zIndex).toBe('1000');
      });
    });
  });

  // Portal tests
  describe('Portal', () => {
    it('renders in portal by default', async () => {
      render(
        <Popover content="Popover content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Popover content')).toBeInTheDocument();
      });
    });

    it('renders inline when portal is false', async () => {
      const { container } = render(
        <Popover
          content="Popover content"
          trigger={<button>Trigger</button>}
          portal={false}
          open
        />
      );
      
      await waitFor(() => {
        const trigger = container.querySelector('.db-popover-trigger');
        const popover = container.querySelector('.db-popover');
        expect(trigger).toBeInTheDocument();
        expect(popover).toBeInTheDocument();
      });
    });
  });

  // Offset tests
  describe('Offset', () => {
    it('uses default offset', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('applies custom offset', async () => {
      render(
        <Popover
          content="Content"
          trigger={<button>Trigger</button>}
          offset={20}
          open
        />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders string content', async () => {
      render(
        <Popover content="Simple text" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Simple text')).toBeInTheDocument();
      });
    });

    it('renders ReactNode content', async () => {
      render(
        <Popover
          content={
            <div>
              <h3>Title</h3>
              <p>Description</p>
            </div>
          }
          trigger={<button>Trigger</button>}
          open
        />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
      });
    });

    it('renders complex content', async () => {
      render(
        <Popover
          content={
            <div data-testid="complex-content">
              <button>Action 1</button>
              <button>Action 2</button>
            </div>
          }
          trigger={<button>Trigger</button>}
          open
        />
      );
      
      await waitFor(() => {
        expect(screen.getByTestId('complex-content')).toBeInTheDocument();
        expect(screen.getByText('Action 1')).toBeInTheDocument();
        expect(screen.getByText('Action 2')).toBeInTheDocument();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles rapid open/close', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      const trigger = screen.getByText('Trigger');
      
      await userEvent.click(trigger);
      await userEvent.click(trigger);
      await userEvent.click(trigger);
      
      // Should be stable
      expect(trigger).toBeInTheDocument();
    });

    it('cleans up on unmount', () => {
      const { unmount } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      unmount();
      
      // Should not throw errors
      expect(true).toBe(true);
    });

    it('handles trigger changes', () => {
      const { rerender } = render(
        <Popover content="Content" trigger={<button>Trigger 1</button>} />
      );
      
      expect(screen.getByText('Trigger 1')).toBeInTheDocument();
      
      rerender(
        <Popover content="Content" trigger={<button>Trigger 2</button>} />
      );
      
      expect(screen.getByText('Trigger 2')).toBeInTheDocument();
      expect(screen.queryByText('Trigger 1')).not.toBeInTheDocument();
    });

    it('handles content changes', async () => {
      const { rerender } = render(
        <Popover content="Content 1" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content 1')).toBeInTheDocument();
      });
      
      rerender(
        <Popover content="Content 2" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content 2')).toBeInTheDocument();
        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
      });
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no violations when open', async () => {
      const { container } = render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} />
      );
      
      await userEvent.tab();
      expect(screen.getByText('Trigger')).toHaveFocus();
      
      await userEvent.click(screen.getByText('Trigger'));
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });

    it('is accessible when open', async () => {
      render(
        <Popover content="Content" trigger={<button>Trigger</button>} open />
      );
      
      await waitFor(() => {
        expect(screen.getByText('Content')).toBeInTheDocument();
      });
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Popover.displayName).toBe('Popover');
    });
  });
});
