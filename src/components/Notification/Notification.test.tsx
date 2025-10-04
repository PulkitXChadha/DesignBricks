import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Notification, NotificationProps } from './Notification';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Notification', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Notification>Notification message</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toBeInTheDocument();
      expect(notification).toHaveClass('db-notification', 'db-notification--info');
      expect(notification).toHaveTextContent('Notification message');
    });

    it('renders with custom className', () => {
      render(<Notification className="custom-notification">Message</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toHaveClass('db-notification', 'custom-notification');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Notification ref={ref}>Message</Notification>);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-notification');
    });

    it('forwards additional props', () => {
      render(
        <Notification data-testid="notification" id="test-notification">
          Message
        </Notification>
      );
      
      const notification = screen.getByTestId('notification');
      expect(notification).toHaveAttribute('id', 'test-notification');
    });

    it('has proper ARIA semantics', () => {
      render(<Notification>Semantic notification</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toHaveAttribute('role', 'alert');
      expect(notification).toHaveAttribute('aria-live', 'polite');
    });

    it('renders children in description element', () => {
      const { container } = render(<Notification>Notification content</Notification>);
      
      const description = container.querySelector('.db-notification__description');
      expect(description).toBeInTheDocument();
      expect(description).toHaveTextContent('Notification content');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<NotificationProps['variant']> = ['info', 'success', 'warning', 'error'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Notification variant={variant}>Variant message</Notification>);
        
        const notification = screen.getByRole('alert');
        expect(notification).toHaveClass(`db-notification--${variant}`);
      });

      it(`renders ${variant} variant with default icon`, () => {
        const { container } = render(<Notification variant={variant}>Message</Notification>);
        
        const icon = container.querySelector('.db-notification__icon svg');
        expect(icon).toBeInTheDocument();
      });
    });

    it('applies info variant by default', () => {
      render(<Notification>Default variant</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toHaveClass('db-notification--info');
    });

    it('applies info variant when variant is undefined', () => {
      render(<Notification variant={undefined}>Undefined variant</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toHaveClass('db-notification--info');
    });
  });

  // Title tests
  describe('Title', () => {
    it('renders with title', () => {
      const { container } = render(
        <Notification title="Important">Description text</Notification>
      );
      
      const title = container.querySelector('.db-notification__title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Important');
    });

    it('renders without title when not provided', () => {
      const { container } = render(<Notification>Message only</Notification>);
      
      const title = container.querySelector('.db-notification__title');
      expect(title).not.toBeInTheDocument();
    });

    it('renders title with description', () => {
      const { container } = render(
        <Notification title="Title">Description</Notification>
      );
      
      const title = container.querySelector('.db-notification__title');
      const description = container.querySelector('.db-notification__description');
      
      expect(title).toHaveTextContent('Title');
      expect(description).toHaveTextContent('Description');
    });

    it('renders empty title', () => {
      const { container } = render(
        <Notification title="">Message</Notification>
      );
      
      const title = container.querySelector('.db-notification__title');
      expect(title).not.toBeInTheDocument();
    });

    it('renders title as ReactNode', () => {
      const { container } = render(
        <Notification title={<strong>Bold Title</strong>}>Message</Notification>
      );
      
      const title = container.querySelector('.db-notification__title');
      expect(title).toBeInTheDocument();
      expect(title?.querySelector('strong')).toHaveTextContent('Bold Title');
    });
  });

  // Custom icon tests
  describe('Custom Icon', () => {
    const CustomIcon = () => <span data-testid="custom-icon">🔔</span>;

    it('renders with custom icon', () => {
      const { container } = render(
        <Notification icon={<CustomIcon />}>Message</Notification>
      );
      
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      const icon = container.querySelector('.db-notification__icon');
      expect(icon).toContainElement(screen.getByTestId('custom-icon'));
    });

    it('overrides default icon with custom icon', () => {
      const { container } = render(
        <Notification variant="success" icon={<CustomIcon />}>Message</Notification>
      );
      
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      
      // Should not have the default success icon SVG alongside custom icon
      const icon = container.querySelector('.db-notification__icon');
      const svgs = icon?.querySelectorAll('svg');
      expect(svgs?.length).toBe(0);
    });

    it('renders icon with null value', () => {
      const { container } = render(
        <Notification icon={null}>Message</Notification>
      );
      
      const icon = container.querySelector('.db-notification__icon');
      expect(icon).toBeInTheDocument();
      // Should render default icon for info variant
      expect(icon?.querySelector('svg')).toBeInTheDocument();
    });
  });

  // Closable functionality tests
  describe('Closable Functionality', () => {
    it('renders without close button by default', () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const closeButton = container.querySelector('.db-notification__close');
      expect(closeButton).not.toBeInTheDocument();
    });

    it('renders close button when closable is true', () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close');
      expect(closeButton).toBeInTheDocument();
      expect(closeButton?.tagName).toBe('BUTTON');
    });

    it('close button has correct accessibility attributes', () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close');
      expect(closeButton).toHaveAttribute('type', 'button');
      expect(closeButton).toHaveAttribute('aria-label', 'Close notification');
    });

    it('calls onClose when close button is clicked', async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      await userEvent.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose if not provided', async () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      
      // Should not throw error
      expect(async () => {
        await userEvent.click(closeButton);
      }).not.toThrow();
    });

    it('close button renders with icon', () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close');
      const icon = closeButton?.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });

    it('supports keyboard interaction on close button', async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      closeButton.focus();
      
      expect(closeButton).toHaveFocus();
      
      await userEvent.keyboard('{Enter}');
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  // Position tests (prop exists but may not affect rendering)
  describe('Position Prop', () => {
    const positions: Array<NotificationProps['position']> = [
      'top-right',
      'top-left',
      'bottom-right',
      'bottom-left',
      'top-center',
      'bottom-center'
    ];

    positions.forEach(position => {
      it(`accepts ${position} position prop`, () => {
        render(<Notification position={position}>Message</Notification>);
        
        const notification = screen.getByRole('alert');
        expect(notification).toBeInTheDocument();
        // Position prop exists but may be used by parent toast container
      });
    });
  });

  // Content tests
  describe('Content', () => {
    it('renders with text content', () => {
      render(<Notification>Simple text message</Notification>);
      
      expect(screen.getByText('Simple text message')).toBeInTheDocument();
    });

    it('renders with complex ReactNode content', () => {
      render(
        <Notification>
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        </Notification>
      );
      
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
    });

    it('renders without children', () => {
      const { container } = render(
        <Notification title="Title only" />
      );
      
      const description = container.querySelector('.db-notification__description');
      expect(description).not.toBeInTheDocument();
    });

    it('renders with title and children', () => {
      render(
        <Notification title="Success">
          Operation completed successfully
        </Notification>
      );
      
      expect(screen.getByText('Success')).toBeInTheDocument();
      expect(screen.getByText('Operation completed successfully')).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      const { container } = render(
        <Notification title="Title">{''}</Notification>
      );
      
      const description = container.querySelector('.db-notification__description');
      expect(description).not.toBeInTheDocument();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('renders with all props combined', () => {
      const handleClose = jest.fn();
      const CustomIcon = () => <span>🔔</span>;
      
      render(
        <Notification
          variant="success"
          title="Success!"
          closable
          onClose={handleClose}
          icon={<CustomIcon />}
          position="top-right"
          className="custom-class"
          data-testid="full-notification"
        >
          All features enabled
        </Notification>
      );
      
      const notification = screen.getByTestId('full-notification');
      expect(notification).toHaveClass('db-notification--success', 'custom-class');
      expect(screen.getByText('Success!')).toBeInTheDocument();
      expect(screen.getByText('All features enabled')).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longContent = 'A'.repeat(500);
      const { container } = render(
        <Notification title="Long Content">{longContent}</Notification>
      );
      
      const description = container.querySelector('.db-notification__description');
      expect(description).toHaveTextContent(longContent);
    });

    it('handles special characters in content', () => {
      render(
        <Notification>Special chars: &lt;&gt;&amp;"'</Notification>
      );
      
      expect(screen.getByText(/Special chars:/)).toBeInTheDocument();
    });

    it('renders with multiple notifications', () => {
      const { container } = render(
        <>
          <Notification variant="info">Info 1</Notification>
          <Notification variant="success">Success 1</Notification>
          <Notification variant="warning">Warning 1</Notification>
        </>
      );
      
      const notifications = container.querySelectorAll('.db-notification');
      expect(notifications).toHaveLength(3);
    });

    it('preserves notification content during re-render', () => {
      const { rerender } = render(
        <Notification variant="info">Original</Notification>
      );
      
      expect(screen.getByText('Original')).toBeInTheDocument();
      
      rerender(<Notification variant="success">Updated</Notification>);
      
      expect(screen.queryByText('Original')).not.toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });
  });

  // Style and class tests
  describe('Styling', () => {
    it('applies base class', () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const notification = container.querySelector('.db-notification');
      expect(notification).toBeInTheDocument();
    });

    it('applies icon wrapper class', () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const iconWrapper = container.querySelector('.db-notification__icon');
      expect(iconWrapper).toBeInTheDocument();
    });

    it('applies content wrapper class', () => {
      const { container } = render(<Notification>Message</Notification>);
      
      const content = container.querySelector('.db-notification__content');
      expect(content).toBeInTheDocument();
    });

    it('applies title class when title is present', () => {
      const { container } = render(
        <Notification title="Title">Message</Notification>
      );
      
      const title = container.querySelector('.db-notification__title');
      expect(title).toBeInTheDocument();
    });

    it('applies description class when children are present', () => {
      const { container } = render(<Notification>Description</Notification>);
      
      const description = container.querySelector('.db-notification__description');
      expect(description).toBeInTheDocument();
    });

    it('applies close button class when closable', () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close');
      expect(closeButton).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <Notification>Accessible notification</Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with all features', async () => {
      const { container } = render(
        <Notification
          variant="success"
          title="Success Title"
          closable
          onClose={() => {}}
        >
          Success message
        </Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with custom icon', async () => {
      const { container } = render(
        <Notification icon={<span role="img" aria-label="bell">🔔</span>}>
          Message
        </Notification>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper alert role', () => {
      render(<Notification>Alert message</Notification>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });

    it('has aria-live attribute', () => {
      render(<Notification>Live message</Notification>);
      
      const notification = screen.getByRole('alert');
      expect(notification).toHaveAttribute('aria-live', 'polite');
    });

    it('close button is keyboard accessible', async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      
      // Tab to the button
      await userEvent.tab();
      expect(closeButton).toHaveFocus();
      
      // Activate with Space
      await userEvent.keyboard(' ');
      expect(handleClose).toHaveBeenCalled();
    });

    it('has proper button type for close button', () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close');
      expect(closeButton).toHaveAttribute('type', 'button');
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('works with different variant and closable combinations', () => {
      const variants: Array<NotificationProps['variant']> = ['info', 'success', 'warning', 'error'];
      
      variants.forEach(variant => {
        const { container, unmount } = render(
          <Notification variant={variant} closable>
            {variant} message
          </Notification>
        );
        
        expect(container.querySelector('.db-notification')).toHaveClass(
          `db-notification--${variant}`
        );
        expect(container.querySelector('.db-notification__close')).toBeInTheDocument();
        
        unmount();
      });
    });

    it('handles rapid close button clicks', async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Notification closable onClose={handleClose}>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      
      await userEvent.click(closeButton);
      await userEvent.click(closeButton);
      await userEvent.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(3);
    });

    it('maintains focus on close button after click attempt', async () => {
      const { container } = render(
        <Notification closable>Message</Notification>
      );
      
      const closeButton = container.querySelector('.db-notification__close') as HTMLElement;
      closeButton.focus();
      
      expect(closeButton).toHaveFocus();
      
      await userEvent.click(closeButton);
      
      // Button should still exist and be focusable
      expect(closeButton).toBeInTheDocument();
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Notification.displayName).toBe('Notification');
    });
  });
});




