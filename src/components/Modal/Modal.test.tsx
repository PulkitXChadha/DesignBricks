import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Modal, ModalProps } from './Modal';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock focus management for tests
const mockFocus = jest.fn();
const mockBlur = jest.fn();

// Helper function to create modal component
const ModalWrapper = ({ children, ...props }: Partial<ModalProps> & { children?: React.ReactNode }) => (
  <Modal open={false} {...props}>
    {children}
  </Modal>
);

describe('Modal', () => {
  // Cleanup after each test
  afterEach(() => {
    // Clear any event listeners
    jest.clearAllMocks();
  });
  
  // Reset body overflow after all tests
  afterAll(() => {
    // Reset body overflow style
    document.body.style.overflow = '';
  });

  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('does not render when open is false', () => {
      render(<Modal open={false}>Modal content</Modal>);
      
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
    });

    it('renders when open is true', () => {
      render(<Modal open={true}>Modal content</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toBeInTheDocument();
      expect(modal).toHaveClass('db-modal', 'db-modal--medium');
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(
        <Modal open={true} className="custom-modal">
          Content
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('db-modal', 'custom-modal');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Modal open={true} ref={ref}>
          Content
        </Modal>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-modal');
    });

    it('forwards additional props', () => {
      render(
        <Modal
          open={true}
          data-testid="modal"
          id="test-modal"
        >
          Content
        </Modal>
      );
      
      const modal = screen.getByTestId('modal');
      expect(modal).toHaveAttribute('id', 'test-modal');
    });

    it('has proper modal semantics', () => {
      render(<Modal open={true}>Modal content</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('role', 'dialog');
      expect(modal).toHaveAttribute('aria-modal', 'true');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<ModalProps['size']> = ['small', 'medium', 'large', 'fullscreen'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Modal open={true} size={size}>Size test</Modal>);
        
        const modal = screen.getByRole('dialog');
        expect(modal).toHaveClass(`db-modal--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Modal open={true}>Default size</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('db-modal--medium');
    });

    it('applies medium size when size is undefined', () => {
      render(<Modal open={true} size={undefined}>Undefined size</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('db-modal--medium');
    });
  });

  // Title and header tests
  describe('Title and Header', () => {
    it('renders title when provided', () => {
      render(<Modal open={true} title="Modal Title">Content</Modal>);
      
      const title = screen.getByText('Modal Title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('db-modal__title');
      
      const header = title.closest('.db-modal__header');
      expect(header).toBeInTheDocument();
    });

    it('renders complex title content', () => {
      render(
        <Modal
          open={true}
          title={<><strong>Important:</strong> Modal Title</>}
        >
          Content
        </Modal>
      );
      
      const titleContainer = screen.getByText('Important:').closest('.db-modal__title');
      expect(titleContainer).toBeInTheDocument();
      expect(screen.getByText('Important:')).toBeInTheDocument();
      expect(screen.getByText('Modal Title')).toBeInTheDocument();
    });

    it('does not render header when no title and no close button', () => {
      render(
        <Modal open={true} closeButton={false}>
          Content without header
        </Modal>
      );
      
      const header = document.querySelector('.db-modal__header');
      expect(header).not.toBeInTheDocument();
    });

    it('renders header when title is provided even without close button', () => {
      render(
        <Modal open={true} title="Title Only" closeButton={false}>
          Content
        </Modal>
      );
      
      const header = document.querySelector('.db-modal__header');
      expect(header).toBeInTheDocument();
      expect(screen.getByText('Title Only')).toBeInTheDocument();
    });

    it('does not render title when title is empty string', () => {
      render(<Modal open={true} title="">Content</Modal>);
      
      const titleElement = document.querySelector('.db-modal__title');
      expect(titleElement).not.toBeInTheDocument();
    });

    it('handles long titles correctly', () => {
      const longTitle = 'This is a very long modal title that might wrap to multiple lines and should be handled gracefully by the modal layout system';
      
      render(<Modal open={true} title={longTitle}>Content</Modal>);
      
      const title = screen.getByText(longTitle);
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('db-modal__title');
    });
  });

  // Close button tests
  describe('Close Button', () => {
    it('renders close button by default', () => {
      render(<Modal open={true}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveClass('db-modal__close');
    });

    it('does not render close button when closeButton is false', () => {
      render(<Modal open={true} closeButton={false}>Content</Modal>);
      
      const closeButton = screen.queryByRole('button', { name: 'Close modal' });
      expect(closeButton).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      await user.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('close button has proper accessibility attributes', () => {
      render(<Modal open={true}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      expect(closeButton).toHaveAttribute('aria-label', 'Close modal');
      expect(closeButton.tagName).toBe('BUTTON');
    });

    it('close button contains SVG icon', () => {
      render(<Modal open={true}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      const svg = closeButton.querySelector('svg');
      
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('width', '20');
      expect(svg).toHaveAttribute('height', '20');
      expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
    });
  });

  // Footer tests
  describe('Footer', () => {
    it('renders footer when provided', () => {
      render(
        <Modal open={true} footer={<button>OK</button>}>
          Content
        </Modal>
      );
      
      const footer = document.querySelector('.db-modal__footer');
      expect(footer).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
    });

    it('does not render footer when not provided', () => {
      render(<Modal open={true}>Content</Modal>);
      
      const footer = document.querySelector('.db-modal__footer');
      expect(footer).not.toBeInTheDocument();
    });

    it('renders complex footer content', () => {
      const footerContent = (
        <div>
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      );
      
      render(<Modal open={true} footer={footerContent}>Content</Modal>);
      
      const footer = document.querySelector('.db-modal__footer');
      expect(footer).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    });

    it('does not render footer when footer is empty string', () => {
      render(<Modal open={true} footer="">Content</Modal>);
      
      const footer = document.querySelector('.db-modal__footer');
      expect(footer).not.toBeInTheDocument();
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders body content correctly', () => {
      render(<Modal open={true}>Simple content</Modal>);
      
      const body = document.querySelector('.db-modal__body');
      expect(body).toBeInTheDocument();
      expect(screen.getByText('Simple content')).toBeInTheDocument();
    });

    it('renders complex children correctly', () => {
      render(
        <Modal open={true}>
          <p>Paragraph content</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <button>Action Button</button>
        </Modal>
      );
      
      const body = document.querySelector('.db-modal__body');
      expect(body).toBeInTheDocument();
      
      expect(screen.getByText('Paragraph content')).toBeInTheDocument();
      expect(screen.getByText('List item 1')).toBeInTheDocument();
      expect(screen.getByText('List item 2')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action Button' })).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      render(<Modal open={true}>{null}</Modal>);
      
      const modal = screen.getByRole('dialog');
      const body = document.querySelector('.db-modal__body');
      
      expect(modal).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(body).toBeEmptyDOMElement();
    });

    it('renders modal structure correctly', () => {
      render(
        <Modal
          open={true}
          title="Test Modal"
          footer={<button>OK</button>}
        >
          Modal body content
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      const header = document.querySelector('.db-modal__header');
      const body = document.querySelector('.db-modal__body');
      const footer = document.querySelector('.db-modal__footer');
      
      expect(modal).toContainElement(header);
      expect(modal).toContainElement(body);
      expect(modal).toContainElement(footer);
    });
  });

  // Backdrop interaction tests
  describe('Backdrop Interaction', () => {
    it('closes modal when backdrop is clicked by default', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      const backdrop = document.querySelector('.db-modal-backdrop');
      expect(backdrop).toBeInTheDocument();
      
      await user.click(backdrop!);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not close when clicking inside modal content', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      const modal = screen.getByRole('dialog');
      await user.click(modal);
      
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('does not close when disableBackdropClick is true', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Modal open={true} onClose={handleClose} disableBackdropClick={true}>
          Content
        </Modal>
      );
      
      const backdrop = document.querySelector('.db-modal-backdrop');
      await user.click(backdrop!);
      
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('stops propagation when clicking modal content', async () => {
      const handleClose = jest.fn();
      const handleBackdropClick = jest.fn();
      const user = userEvent.setup();
      
      render(
        <div onClick={handleBackdropClick}>
          <Modal open={true} onClose={handleClose}>
            <button>Modal button</button>
          </Modal>
        </div>
      );
      
      const button = screen.getByRole('button', { name: 'Modal button' });
      await user.click(button);
      
      expect(handleClose).not.toHaveBeenCalled();
      expect(handleBackdropClick).not.toHaveBeenCalled();
    });
  });

  // Keyboard interaction tests
  describe('Keyboard Interaction', () => {
    it('closes modal when Escape key is pressed', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      await user.keyboard('{Escape}');
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not close when disableEscapeKey is true', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Modal open={true} onClose={handleClose} disableEscapeKey={true}>
          Content
        </Modal>
      );
      
      await user.keyboard('{Escape}');
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('does not respond to other keyboard keys', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      await user.keyboard('{Enter}');
      await user.keyboard(' ');
      await user.keyboard('{Tab}');
      
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('handles multiple rapid escape presses', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      await user.keyboard('{Escape}');
      await user.keyboard('{Escape}');
      await user.keyboard('{Escape}');
      
      // Should only call once per press
      expect(handleClose).toHaveBeenCalledTimes(3);
    });
  });

  // Body overflow management tests
  describe('Body Overflow Management', () => {
    it('sets body overflow to hidden when modal opens', () => {
      const { rerender } = render(<Modal open={false}>Content</Modal>);
      expect(document.body.style.overflow).toBe('');
      
      rerender(<Modal open={true}>Content</Modal>);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('restores body overflow when modal closes', () => {
      const { rerender } = render(<Modal open={true}>Content</Modal>);
      expect(document.body.style.overflow).toBe('hidden');
      
      rerender(<Modal open={false}>Content</Modal>);
      expect(document.body.style.overflow).toBe('');
    });

    it('restores body overflow on unmount', () => {
      const { unmount } = render(<Modal open={true}>Content</Modal>);
      expect(document.body.style.overflow).toBe('hidden');
      
      unmount();
      expect(document.body.style.overflow).toBe('');
    });

    it('properly manages body overflow during modal lifecycle', () => {
      const { rerender } = render(<Modal open={false}>Content</Modal>);
      
      rerender(<Modal open={true}>Content</Modal>);
      expect(document.body.style.overflow).toBe('hidden');
      
      rerender(<Modal open={false}>Content</Modal>);
      // Component cleans up by setting to empty string
      expect(document.body.style.overflow).toBe('');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Modal open={true} title="Accessible Modal" aria-label="Accessible Modal">
          This is modal content.
        </Modal>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with footer', async () => {
      const { container } = render(
        <Modal
          open={true}
          title="Modal with Footer"
          aria-label="Modal with Footer"
          footer={<button>Close</button>}
        >
          Modal content with footer.
        </Modal>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations without close button', async () => {
      const { container } = render(
        <Modal 
          open={true} 
          title="No Close Button" 
          closeButton={false}
          aria-label="No Close Button"
        >
          Modal content without close button.
        </Modal>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper dialog role and aria attributes', () => {
      render(<Modal open={true}>Accessible modal</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('role', 'dialog');
      expect(modal).toHaveAttribute('aria-modal', 'true');
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Modal
          open={true}
          aria-describedby="modal-description"
          aria-labelledby="modal-title"
        >
          Modal with ARIA attributes
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('aria-describedby', 'modal-description');
      expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
    });

    it('close button is accessible', () => {
      render(<Modal open={true}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      closeButton.focus();
      expect(closeButton).toHaveFocus();
    });

    it('maintains focus within modal', () => {
      render(
        <Modal open={true} title="Focus Test">
          <button>Button 1</button>
          <button>Button 2</button>
        </Modal>
      );
      
      const button1 = screen.getByRole('button', { name: 'Button 1' });
      button1.focus();
      expect(button1).toHaveFocus();
    });

    it('announces modal to screen readers', () => {
      render(<Modal open={true} title="Screen Reader Test">Content</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('aria-modal', 'true');
    });
  });

  // State management tests
  describe('State Management', () => {
    it('handles controlled open state', async () => {
      const TestComponent = () => {
        const [isOpen, setIsOpen] = React.useState(false);
        
        return (
          <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              Controlled modal content
            </Modal>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      
      const openButton = screen.getByText('Open Modal');
      await user.click(openButton);
      
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Controlled modal content')).toBeInTheDocument();
    });

    it('handles onClose callback correctly', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(<Modal open={true} onClose={handleClose}>Content</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      await user.click(closeButton);
      
      expect(handleClose).toHaveBeenCalledTimes(1);
      // Close button handler receives click event
      expect(handleClose).toHaveBeenCalledWith(expect.objectContaining({
        type: 'click'
      }));
    });

    it('works without onClose callback', async () => {
      const user = userEvent.setup();
      
      render(<Modal open={true}>Content without callback</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      
      // Should not crash when clicking without onClose
      await expect(user.click(closeButton)).resolves.not.toThrow();
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      const handleClose = jest.fn();
      
      render(
        <Modal
          open={true}
          onClose={handleClose}
          title="Complex Modal"
          size="large"
          closeButton={true}
          footer={<button>Action</button>}
          disableBackdropClick={false}
          disableEscapeKey={false}
          className="custom-modal"
        >
          Complex modal content
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass(
        'db-modal',
        'db-modal--large',
        'custom-modal'
      );
      
      expect(screen.getByText('Complex Modal')).toBeInTheDocument();
      expect(screen.getByText('Complex modal content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Close modal' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('handles disabled interactions together', async () => {
      const handleClose = jest.fn();
      const user = userEvent.setup();
      
      render(
        <Modal
          open={true}
          onClose={handleClose}
          disableBackdropClick={true}
          disableEscapeKey={true}
        >
          Protected modal
        </Modal>
      );
      
      // Try backdrop click
      const backdrop = document.querySelector('.db-modal-backdrop');
      await user.click(backdrop!);
      expect(handleClose).not.toHaveBeenCalled();
      
      // Try escape key
      await user.keyboard('{Escape}');
      expect(handleClose).not.toHaveBeenCalled();
      
      // Close button should still work
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('renders all size variants correctly', () => {
      const sizes: Array<ModalProps['size']> = ['small', 'medium', 'large', 'fullscreen'];
      
      sizes.forEach(size => {
        const { unmount } = render(
          <Modal
            open={true}
            size={size}
            title={`${size} modal`}
            data-testid={`modal-${size}`}
          >
            Content
          </Modal>
        );
        
        const modal = screen.getByTestId(`modal-${size}`);
        expect(modal).toHaveClass(`db-modal--${size}`);
        
        unmount();
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles undefined and null props gracefully', () => {
      render(
        <Modal
          open={true}
          onClose={undefined}
          title={undefined}
          size={undefined}
          closeButton={undefined}
          footer={undefined}
          disableBackdropClick={undefined}
          disableEscapeKey={undefined}
        >
          Edge case modal
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toBeInTheDocument();
      expect(modal).toHaveClass('db-modal', 'db-modal--medium');
    });

    it('handles empty string values properly', () => {
      render(
        <Modal
          open={true}
          title=""
          footer=""
          className=""
        >
          Empty strings modal
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toBeInTheDocument();
      
      const titleElement = document.querySelector('.db-modal__title');
      const footerElement = document.querySelector('.db-modal__footer');
      
      // Empty strings are falsy, so these elements won't render
      expect(titleElement).not.toBeInTheDocument();
      expect(footerElement).not.toBeInTheDocument();
    });

    it('handles multiple class names correctly', () => {
      render(<Modal open={true} className="class1 class2 class3">Content</Modal>);
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveClass('db-modal', 'class1', 'class2', 'class3');
    });

    it('handles rapid open/close state changes', () => {
      const { rerender } = render(<Modal open={false}>Content</Modal>);
      
      // Rapidly toggle state
      rerender(<Modal open={true}>Content</Modal>);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      
      rerender(<Modal open={false}>Content</Modal>);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      
      rerender(<Modal open={true}>Content</Modal>);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('preserves event handler context', () => {
      const context = { value: 'test-context' };
      const handleClose = jest.fn(function(this: typeof context) {
        return this.value;
      });
      
      render(<Modal open={true} onClose={handleClose.bind(context)}>Context test</Modal>);
      
      const closeButton = screen.getByRole('button', { name: 'Close modal' });
      closeButton.click();
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('handles complex nested content', () => {
      render(
        <Modal open={true}>
          <div>
            <form>
              <fieldset>
                <legend>Form Legend</legend>
                <input type="text" placeholder="Text input" />
                <textarea placeholder="Textarea"></textarea>
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </fieldset>
            </form>
          </div>
        </Modal>
      );
      
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveTextContent('Form Legend');
      expect(modal.querySelector('form')).toBeInTheDocument();
      expect(modal.querySelector('fieldset')).toBeInTheDocument();
      expect(modal.querySelector('input')).toBeInTheDocument();
      expect(modal.querySelector('textarea')).toBeInTheDocument();
      expect(modal.querySelector('select')).toBeInTheDocument();
    });

    it('handles event cleanup correctly', () => {
      const { unmount } = render(<Modal open={true}>Content</Modal>);
      
      // Add spy on removeEventListener to verify cleanup
      const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
      
      unmount();
      
      // Should clean up event listeners
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      
      removeEventListenerSpy.mockRestore();
    });
  });
});
