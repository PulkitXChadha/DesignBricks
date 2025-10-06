import userEvent from "@testing-library/user-event";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Alert, AlertProps } from './Alert';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock icon component for testing
const MockIcon = ({ name }: { name: string }) => <span data-testid={`mock-icon-${name}`}>{name}</span>;

describe('Alert', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Alert>Default alert message</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass(
        'db-alert',
        'db-alert--info',
        'db-alert--standard'
      );
      expect(alert).toHaveTextContent('Default alert message');
    });

    it('renders with custom className', () => {
      render(<Alert className="custom-alert">Alert</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert', 'custom-alert');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Alert ref={ref}>Alert</Alert>);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-alert');
    });

    it('forwards additional props', () => {
      render(
        <Alert data-testid="alert" id="test-alert">
          Alert message
        </Alert>
      );
      
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveAttribute('id', 'test-alert');
    });

    it('has proper alert semantics', () => {
      render(<Alert>Semantic alert</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert.tagName).toBe('DIV');
      expect(alert).toHaveAttribute('role', 'alert');
    });
  });

  // Severity tests
  describe('Severity', () => {
    const severities: Array<AlertProps['severity']> = ['success', 'info', 'warning', 'error'];
    
    severities.forEach(severity => {
      it(`renders ${severity} severity correctly`, () => {
        render(<Alert severity={severity}>Alert message</Alert>);
        
        const alert = screen.getByRole('alert');
        expect(alert).toHaveClass(`db-alert--${severity}`);
      });
    });

    it('applies info severity by default', () => {
      render(<Alert>Default severity</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert--info');
    });

    it('applies info severity when severity is undefined', () => {
      render(<Alert severity={undefined}>Undefined severity</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert--info');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<AlertProps['variant']> = ['filled', 'outlined', 'standard'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Alert variant={variant}>Variant alert</Alert>);
        
        const alert = screen.getByRole('alert');
        expect(alert).toHaveClass(`db-alert--${variant}`);
      });
    });

    it('applies standard variant by default', () => {
      render(<Alert>Default variant</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert--standard');
    });

    it('applies standard variant when variant is undefined', () => {
      render(<Alert variant={undefined}>Undefined variant</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert--standard');
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders default icon for each severity', () => {
      const severities: Array<AlertProps['severity']> = ['success', 'info', 'warning', 'error'];
      
      severities.forEach(severity => {
        const { unmount } = render(<Alert severity={severity}>Icon test</Alert>);
        
        const iconContainer = document.querySelector('.db-alert__icon');
        expect(iconContainer).toBeInTheDocument();
        expect(iconContainer?.querySelector('svg')).toBeInTheDocument();
        
        unmount();
      });
    });

    it('renders custom icon when provided', () => {
      render(
        <Alert icon={<MockIcon name="custom" />}>
          Custom icon alert
        </Alert>
      );
      
      const customIcon = screen.getByTestId('mock-icon-custom');
      expect(customIcon).toBeInTheDocument();
      
      const iconContainer = customIcon.closest('.db-alert__icon');
      expect(iconContainer).toBeInTheDocument();
    });

    it('does not render icon when icon is explicitly null', () => {
      render(<Alert icon={null}>No icon alert</Alert>);
      
      const iconContainer = document.querySelector('.db-alert__icon');
      expect(iconContainer).not.toBeInTheDocument();
    });

    it('does not render icon container when icon is empty string', () => {
      render(<Alert icon="">Empty icon alert</Alert>);
      
      const iconContainer = document.querySelector('.db-alert__icon');
      expect(iconContainer).not.toBeInTheDocument();
    });

    it('overrides default icon with custom icon', () => {
      render(
        <Alert severity="error" icon={<MockIcon name="custom-error" />}>
          Custom error icon
        </Alert>
      );
      
      // Should render custom icon, not default error icon
      expect(screen.getByTestId('mock-icon-custom-error')).toBeInTheDocument();
      
      // Should not render default SVG
      const iconContainer = document.querySelector('.db-alert__icon');
      expect(iconContainer?.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  // Title tests
  describe('Title', () => {
    it('renders title when provided', () => {
      render(<Alert title="Alert Title">Alert message</Alert>);
      
      const title = screen.getByText('Alert Title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('db-alert__title');
    });

    it('does not render title when not provided', () => {
      render(<Alert>Alert without title</Alert>);
      
      const titleElement = document.querySelector('.db-alert__title');
      expect(titleElement).not.toBeInTheDocument();
    });

    it('renders title with message', () => {
      render(
        <Alert title="Important Notice">
          This is the alert message content.
        </Alert>
      );
      
      const title = screen.getByText('Important Notice');
      const message = screen.getByText('This is the alert message content.');
      
      expect(title).toBeInTheDocument();
      expect(message).toBeInTheDocument();
      expect(title).toHaveClass('db-alert__title');
      expect(message.closest('.db-alert__message')).toBeInTheDocument();
    });

    it('does not render title when title is empty string', () => {
      render(<Alert title="">Alert with empty title</Alert>);
      
      const titleElement = document.querySelector('.db-alert__title');
      expect(titleElement).not.toBeInTheDocument();
    });

    it('renders long titles correctly', () => {
      const longTitle = 'This is a very long alert title that might wrap to multiple lines and should be handled gracefully by the component';
      
      render(<Alert title={longTitle}>Message</Alert>);
      
      const title = screen.getByText(longTitle);
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('db-alert__title');
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders message content correctly', () => {
      render(<Alert>Simple message content</Alert>);
      
      const message = screen.getByText('Simple message content');
      expect(message).toBeInTheDocument();
      expect(message.closest('.db-alert__message')).toBeInTheDocument();
    });

    it('renders complex children correctly', () => {
      render(
        <Alert>
          <p>Paragraph content</p>
          <strong>Bold text</strong>
          <a href="#link">Link</a>
        </Alert>
      );
      
      const messageContainer = document.querySelector('.db-alert__message');
      expect(messageContainer).toBeInTheDocument();
      
      expect(screen.getByText('Paragraph content')).toBeInTheDocument();
      expect(screen.getByText('Bold text')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Link' })).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      render(<Alert>{null}</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      
      const messageContainer = document.querySelector('.db-alert__message');
      expect(messageContainer).not.toBeInTheDocument();
    });

    it('renders title only without message', () => {
      render(<Alert title="Title Only" />);
      
      const title = screen.getByText('Title Only');
      expect(title).toBeInTheDocument();
      
      const messageContainer = document.querySelector('.db-alert__message');
      expect(messageContainer).not.toBeInTheDocument();
    });

    it('renders content container structure correctly', () => {
      render(
        <Alert title="Title" severity="success">
          Message content
        </Alert>
      );
      
      const contentContainer = document.querySelector('.db-alert__content');
      expect(contentContainer).toBeInTheDocument();
      
      const title = contentContainer?.querySelector('.db-alert__title');
      const message = contentContainer?.querySelector('.db-alert__message');
      
      expect(title).toBeInTheDocument();
      expect(message).toBeInTheDocument();
    });
  });

  // Close functionality tests
  describe('Close Functionality', () => {
    it('renders close button when onClose is provided', () => {
      const handleClose = jest.fn();
      render(<Alert onClose={handleClose}>Closable alert</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveClass('db-alert__close');
    });

    it('does not render close button when onClose is not provided', () => {
      render(<Alert>Non-closable alert</Alert>);
      
      const closeButton = screen.queryByRole('button', { name: 'Close alert' });
      expect(closeButton).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Alert onClose={handleClose}>Closable alert</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      await user.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('close button has proper accessibility attributes', () => {
      const handleClose = jest.fn();
      render(<Alert onClose={handleClose}>Closable alert</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      expect(closeButton).toHaveAttribute('aria-label', 'Close alert');
      expect(closeButton.tagName).toBe('BUTTON');
    });

    it('close button handles keyboard interaction', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Alert onClose={handleClose}>Closable alert</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      closeButton.focus();
      
      await user.keyboard('{Enter}');
      expect(handleClose).toHaveBeenCalledTimes(1);
      
      await user.keyboard(' ');
      expect(handleClose).toHaveBeenCalledTimes(2);
    });

    it('renders close button with SVG icon', () => {
      const handleClose = jest.fn();
      render(<Alert onClose={handleClose}>Closable alert</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      const svg = closeButton.querySelector('svg');
      
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Alert severity="warning" title="Warning Title">
          This is a warning message.
        </Alert>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with close button', async () => {
      const handleClose = jest.fn();
      const { container } = render(
        <Alert severity="error" onClose={handleClose}>
          Error message with close button.
        </Alert>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with custom icon', async () => {
      const { container } = render(
        <Alert 
          severity="success" 
          icon={<MockIcon name="custom" />}
          title="Success"
        >
          Custom icon alert message.
        </Alert>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper alert role', () => {
      render(<Alert>Alert message</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('role', 'alert');
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Alert
          aria-describedby="alert-description"
          aria-labelledby="alert-label"
        >
          ARIA enhanced alert
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('aria-describedby', 'alert-description');
      expect(alert).toHaveAttribute('aria-labelledby', 'alert-label');
    });

    it('close button is keyboard accessible', () => {
      const handleClose = jest.fn();
      render(<Alert onClose={handleClose}>Keyboard accessible</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      closeButton.focus();
      expect(closeButton).toHaveFocus();
    });

    it('maintains proper reading order', () => {
      render(
        <Alert title="Alert Title" onClose={() => {}}>
          Alert message content goes here.
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      const title = screen.getByText('Alert Title');
      const message = screen.getByText('Alert message content goes here.');
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      
      // Check DOM order
      expect(alert).toContainElement(title);
      expect(alert).toContainElement(message);
      expect(alert).toContainElement(closeButton);
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      const handleClose = jest.fn();
      
      render(
        <Alert
          severity="warning"
          variant="filled"
          title="Complex Alert"
          icon={<MockIcon name="warning" />}
          onClose={handleClose}
          className="custom-alert"
        >
          This alert has all possible properties set.
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'db-alert',
        'db-alert--warning',
        'db-alert--filled',
        'custom-alert'
      );
      
      expect(screen.getByText('Complex Alert')).toBeInTheDocument();
      expect(screen.getByTestId('mock-icon-warning')).toBeInTheDocument();
      expect(screen.getByText('This alert has all possible properties set.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Close alert' })).toBeInTheDocument();
    });

    it('renders all severity and variant combinations', () => {
      const severities: Array<AlertProps['severity']> = ['success', 'info', 'warning', 'error'];
      const variants: Array<AlertProps['variant']> = ['filled', 'outlined', 'standard'];
      
      severities.forEach(severity => {
        variants.forEach(variant => {
          const { unmount } = render(
            <Alert
              severity={severity}
              variant={variant}
              data-testid={`${severity}-${variant}`}
            >
              Test
            </Alert>
          );
          
          const alert = screen.getByTestId(`${severity}-${variant}`);
          expect(alert).toHaveClass(`db-alert--${severity}`, `db-alert--${variant}`);
          
          unmount();
        });
      });
    });

    it('handles title and close button together', () => {
      const handleClose = jest.fn();
      
      render(
        <Alert title="Closable Title Alert" onClose={handleClose}>
          Message content
        </Alert>
      );
      
      expect(screen.getByText('Closable Title Alert')).toBeInTheDocument();
      expect(screen.getByText('Message content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Close alert' })).toBeInTheDocument();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined and null props gracefully', () => {
      render(
        <Alert
          severity={undefined}
          variant={undefined}
          title={undefined}
          icon={undefined}
          onClose={undefined}
        >
          Edge case alert
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveClass('db-alert', 'db-alert--info', 'db-alert--standard');
    });

    it('handles empty string values properly', () => {
      render(
        <Alert title="" className="">
          
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      
      const titleElement = document.querySelector('.db-alert__title');
      expect(titleElement).not.toBeInTheDocument();
    });

    it('handles complex nested content', () => {
      render(
        <Alert>
          <div>
            <ul>
              <li>First item</li>
              <li>Second item with <em>emphasis</em></li>
            </ul>
            <p>
              Paragraph with <strong>bold</strong> and{' '}
              <code>code</code> elements.
            </p>
          </div>
        </Alert>
      );
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveTextContent('First item');
      expect(alert).toHaveTextContent('Second item with emphasis');
      expect(alert).toHaveTextContent('Paragraph with bold and code elements.');
      
      expect(alert.querySelector('ul')).toBeInTheDocument();
      expect(alert.querySelector('em')).toBeInTheDocument();
      expect(alert.querySelector('strong')).toBeInTheDocument();
      expect(alert.querySelector('code')).toBeInTheDocument();
    });

    it('handles multiple class names correctly', () => {
      render(<Alert className="class1 class2 class3">Multi-class alert</Alert>);
      
      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('db-alert', 'class1', 'class2', 'class3');
    });

    it('preserves event handler context', () => {
      const context = { value: 'test-context' };
      const handleClose = jest.fn(function(this: typeof context, _event: any) {
        return this.value;
      });
      
      render(<Alert onClose={handleClose.bind(context)}>Context test</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      closeButton.click();
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('handles rapid close button clicks', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Alert onClose={handleClose}>Rapid click test</Alert>);
      
      const closeButton = screen.getByRole('button', { name: 'Close alert' });
      
      // Rapid clicks
      await user.click(closeButton);
      await user.click(closeButton);
      await user.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(3);
    });
  });
});
