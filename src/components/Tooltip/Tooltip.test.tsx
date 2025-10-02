import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Tooltip, TooltipProps } from './Tooltip';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock getBoundingClientRect for positioning
const mockGetBoundingClientRect = (rect: Partial<DOMRect>) => {
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...rect,
    toJSON: () => ({}),
  } as DOMRect;
};

describe('Tooltip', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect for all elements
    Element.prototype.getBoundingClientRect = jest.fn(() =>
      mockGetBoundingClientRect({
        width: 100,
        height: 50,
        top: 100,
        left: 100,
        bottom: 150,
        right: 200,
      })
    );
  });

  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Hover me</button>
        </Tooltip>
      );
      
      expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('does not show tooltip by default', () => {
      render(
        <Tooltip content="Tooltip text">
          <button>Hover me</button>
        </Tooltip>
      );
      
      expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    });

    it('renders tooltip content when triggered', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Tooltip text" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(screen.getByText('Tooltip text')).toBeInTheDocument();
      });
    });

    it('renders complex content', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip
          content={
            <div>
              <strong>Title</strong>
              <p>Description</p>
            </div>
          }
          showDelay={0}
        >
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
      });
    });

    it('has proper tooltip semantics', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Tooltip text" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveAttribute('role', 'tooltip');
      });
    });
  });

  // Placement tests
  describe('Placement', () => {
    const placements: Array<TooltipProps['placement']> = [
      'top',
      'bottom',
      'left',
      'right',
      'top-start',
      'top-end',
      'bottom-start',
      'bottom-end',
    ];

    placements.forEach(placement => {
      it(`renders with ${placement} placement`, async () => {
        const user = userEvent.setup();
        
        render(
          <Tooltip content="Tooltip" placement={placement} showDelay={0}>
            <button>Trigger</button>
          </Tooltip>
        );
        
        const button = screen.getByText('Trigger');
        await user.hover(button);
        
        await waitFor(() => {
          const tooltip = screen.getByRole('tooltip');
          expect(tooltip).toHaveClass(`db-tooltip--${placement}`);
        });
      });
    });
  });

  // Trigger types tests
  describe('Trigger Types', () => {
    it('shows on hover by default', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Hover tooltip" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(screen.getByText('Hover tooltip')).toBeInTheDocument();
      });
    });

    it('hides on unhover', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Hover tooltip" showDelay={0} hideDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(screen.getByText('Hover tooltip')).toBeInTheDocument();
      });
      
      await user.unhover(button);
      
      await waitFor(() => {
        expect(screen.queryByText('Hover tooltip')).not.toBeInTheDocument();
      });
    });

    it('shows on click when trigger is click', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Click tooltip" trigger="click">
          <button>Click me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Click me');
      await user.click(button);
      
      await waitFor(() => {
        expect(screen.getByText('Click tooltip')).toBeInTheDocument();
      });
    });

    it('toggles on repeated clicks', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Click tooltip" trigger="click">
          <button>Click me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Click me');
      
      await user.click(button);
      await waitFor(() => {
        expect(screen.getByText('Click tooltip')).toBeInTheDocument();
      });
      
      await user.click(button);
      await waitFor(() => {
        expect(screen.queryByText('Click tooltip')).not.toBeInTheDocument();
      });
    });

    it('shows on focus when trigger is focus', async () => {
      render(
        <Tooltip content="Focus tooltip" trigger="focus" showDelay={0}>
          <button>Focus me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Focus me');
      button.focus();
      
      await waitFor(() => {
        expect(screen.getByText('Focus tooltip')).toBeInTheDocument();
      });
    });

    it('hides on blur when trigger is focus', async () => {
      render(
        <Tooltip content="Focus tooltip" trigger="focus" showDelay={0} hideDelay={0}>
          <button>Focus me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Focus me');
      button.focus();
      
      await waitFor(() => {
        expect(screen.getByText('Focus tooltip')).toBeInTheDocument();
      });
      
      button.blur();
      
      await waitFor(() => {
        expect(screen.queryByText('Focus tooltip')).not.toBeInTheDocument();
      });
    });

    it('respects manual trigger with open prop', async () => {
      const { rerender } = render(
        <Tooltip content="Manual tooltip" trigger="manual" open={false}>
          <button>Manual</button>
        </Tooltip>
      );
      
      expect(screen.queryByText('Manual tooltip')).not.toBeInTheDocument();
      
      rerender(
        <Tooltip content="Manual tooltip" trigger="manual" open={true}>
          <button>Manual</button>
        </Tooltip>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Manual tooltip')).toBeInTheDocument();
      });
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('does not show when disabled', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Disabled tooltip" disabled showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      // Wait a bit to ensure it doesn't appear
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(screen.queryByText('Disabled tooltip')).not.toBeInTheDocument();
    });

    it('does not respond to clicks when disabled', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Disabled tooltip" trigger="click" disabled>
          <button>Click me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Click me');
      await user.click(button);
      
      // Wait a bit to ensure it doesn't appear
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(screen.queryByText('Disabled tooltip')).not.toBeInTheDocument();
    });
  });

  // Controlled mode tests
  describe('Controlled Mode', () => {
    it('works in controlled mode', async () => {
      const { rerender } = render(
        <Tooltip content="Controlled" open={false}>
          <button>Trigger</button>
        </Tooltip>
      );
      
      expect(screen.queryByText('Controlled')).not.toBeInTheDocument();
      
      rerender(
        <Tooltip content="Controlled" open={true}>
          <button>Trigger</button>
        </Tooltip>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Controlled')).toBeInTheDocument();
      });
    });

    it('calls onOpenChange callback', async () => {
      const handleOpenChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Tooltip
          content="Callback tooltip"
          showDelay={0}
          onOpenChange={handleOpenChange}
        >
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(true);
      });
    });

    it('calls onOpenChange on hide', async () => {
      const handleOpenChange = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Tooltip
          content="Callback tooltip"
          showDelay={0}
          hideDelay={0}
          onOpenChange={handleOpenChange}
        >
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(true);
      });
      
      handleOpenChange.mockClear();
      
      await user.unhover(button);
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });
  });

  // Styling tests
  describe('Styling', () => {
    it('applies custom className', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Styled tooltip" className="custom-tooltip" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toHaveClass('db-tooltip', 'custom-tooltip');
      });
    });

    it('applies custom maxWidth', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Wide tooltip" maxWidth={500} showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toHaveStyle({ maxWidth: '500px' });
      });
    });

    it('applies custom maxWidth as string', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Wide tooltip" maxWidth="300px" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toHaveStyle({ maxWidth: '300px' });
      });
    });

    it('applies custom zIndex', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="High z-index" zIndex={9999} showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toHaveStyle({ zIndex: 9999 });
      });
    });

    it('renders tooltip arrow', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Arrow tooltip" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const arrow = document.querySelector('.db-tooltip__arrow');
        expect(arrow).toBeInTheDocument();
      });
    });
  });

  // Portal rendering tests
  describe('Portal Rendering', () => {
    it('renders tooltip in document.body', async () => {
      const user = userEvent.setup();
      
      render(
        <div id="app">
          <Tooltip content="Portal tooltip" showDelay={0}>
            <button>Hover me</button>
          </Tooltip>
        </div>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByText('Portal tooltip');
        expect(document.body).toContainElement(tooltip);
      });
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <Tooltip content="Accessible tooltip" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        expect(screen.getByText('Accessible tooltip')).toBeInTheDocument();
      });
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper aria-hidden attribute', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Tooltip" showDelay={0}>
          <button>Trigger</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Trigger');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toHaveAttribute('aria-hidden', 'false');
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty content gracefully', async () => {
      const user = userEvent.setup();
      
      render(
        <Tooltip content="" showDelay={0}>
          <button>Hover me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Hover me');
      await user.hover(button);
      
      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    it('handles children with different event handlers', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Tooltip content="Tooltip" showDelay={0}>
          <button onClick={handleClick}>Click me</button>
        </Tooltip>
      );
      
      const button = screen.getByText('Click me');
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalled();
    });

    it('works with forwardRef', () => {
      const ref = React.createRef<HTMLDivElement>();
      
      const { container } = render(
        <Tooltip content="Ref tooltip" ref={ref}>
          <button>Trigger</button>
        </Tooltip>
      );
      
      // Component renders successfully with ref
      expect(screen.getByText('Trigger')).toBeInTheDocument();
      const trigger = container.querySelector('.db-tooltip__trigger');
      expect(trigger).toBeInTheDocument();
    });
  });
});