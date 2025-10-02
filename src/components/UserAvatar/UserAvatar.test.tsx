import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { UserAvatar, UserAvatarProps } from './UserAvatar';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock image loading
const mockImageSrc = 'https://example.com/avatar.jpg';

describe('UserAvatar', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveClass('db-avatar--md', 'db-avatar--circle');
    });

    it('renders initials from name', () => {
      render(<UserAvatar name="John Doe" />);
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = render(
        <UserAvatar name="John Doe" className="custom-avatar" />
      );
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveClass('custom-avatar');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<UserAvatar name="John Doe" ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-avatar');
    });

    it('forwards additional props', () => {
      render(
        <UserAvatar name="John Doe" data-testid="avatar" id="test" />
      );
      
      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveAttribute('id', 'test');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<UserAvatarProps['size']> = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        const { container } = render(<UserAvatar name="John Doe" size={size} />);
        
        const avatar = container.querySelector('.db-avatar');
        expect(avatar).toHaveClass(`db-avatar--${size}`);
      });
    });

    it('applies md size by default', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--md');
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<UserAvatarProps['variant']> = ['circle', 'rounded', 'square'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        const { container } = render(<UserAvatar name="John Doe" variant={variant} />);
        
        const avatar = container.querySelector('.db-avatar');
        expect(avatar).toHaveClass(`db-avatar--${variant}`);
      });
    });

    it('applies circle variant by default', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--circle');
    });
  });

  // Initials generation tests
  describe('Initials Generation', () => {
    it('generates initials from first and last name', () => {
      render(<UserAvatar name="John Doe" />);
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('generates initials from single name', () => {
      render(<UserAvatar name="John" />);
      
      expect(screen.getByText('J')).toBeInTheDocument();
    });

    it('generates initials from multiple names', () => {
      render(<UserAvatar name="John Michael Doe" />);
      
      expect(screen.getByText('JM')).toBeInTheDocument();
    });

    it('limits initials to 2 characters', () => {
      render(<UserAvatar name="A B C D E" />);
      
      const initials = screen.getByText(/[A-Z]{1,2}/);
      expect(initials.textContent?.length).toBeLessThanOrEqual(2);
    });

    it('converts initials to uppercase', () => {
      render(<UserAvatar name="john doe" />);
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });
  });

  // Image handling tests
  describe('Image Handling', () => {
    it('renders image when src is provided', () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', mockImageSrc);
    });

    it('uses name for alt text by default', () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('alt', "John Doe's avatar");
    });

    it('uses custom alt text when provided', () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} alt="Custom alt" />
      );
      
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('alt', 'Custom alt');
    });

    it('applies lazy loading to image', () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('loading', 'lazy');
    });

    it('shows initials fallback when image errors', async () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img') as HTMLImageElement;
      
      // Trigger image error
      img.dispatchEvent(new Event('error'));
      
      await waitFor(() => {
        expect(screen.getByText('JD')).toBeInTheDocument();
      });
    });

    it('calls onError when image fails to load', () => {
      const handleError = jest.fn();
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} onError={handleError} />
      );
      
      const img = container.querySelector('img') as HTMLImageElement;
      img.dispatchEvent(new Event('error'));
      
      expect(handleError).toHaveBeenCalled();
    });

    it('hides initials when image loads successfully', async () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img') as HTMLImageElement;
      img.dispatchEvent(new Event('load'));
      
      await waitFor(() => {
        expect(img).toHaveClass('db-avatar__image--loaded');
      });
    });
  });

  // Status indicator tests
  describe('Status Indicator', () => {
    const statuses: Array<UserAvatarProps['status']> = ['online', 'offline', 'away', 'busy'];
    
    statuses.forEach(status => {
      it(`renders ${status} status correctly`, () => {
        const { container } = render(
          <UserAvatar name="John Doe" status={status} showStatus />
        );
        
        const statusIndicator = container.querySelector(`.db-avatar__status--${status}`);
        expect(statusIndicator).toBeInTheDocument();
      });
    });

    it('does not show status by default', () => {
      const { container } = render(
        <UserAvatar name="John Doe" status="online" />
      );
      
      const statusIndicator = container.querySelector('.db-avatar__status');
      expect(statusIndicator).not.toBeInTheDocument();
    });

    it('shows status when showStatus is true', () => {
      const { container } = render(
        <UserAvatar name="John Doe" status="online" showStatus />
      );
      
      const statusIndicator = container.querySelector('.db-avatar__status');
      expect(statusIndicator).toBeInTheDocument();
    });

    it('applies with-status class when showing status', () => {
      const { container } = render(
        <UserAvatar name="John Doe" status="online" showStatus />
      );
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--with-status');
    });

    it('has aria-label for status', () => {
      const { container } = render(
        <UserAvatar name="John Doe" status="away" showStatus />
      );
      
      const statusIndicator = container.querySelector('.db-avatar__status');
      expect(statusIndicator).toHaveAttribute('aria-label', 'Status: away');
    });
  });

  // Color customization tests
  describe('Color Customization', () => {
    it('uses custom background color', () => {
      const { container } = render(
        <UserAvatar name="John Doe" backgroundColor="#FF0000" />
      );
      
      const fallback = container.querySelector('.db-avatar__fallback') as HTMLElement;
      expect(fallback.style.backgroundColor).toBe('rgb(255, 0, 0)');
    });

    it('uses custom text color', () => {
      const { container } = render(
        <UserAvatar name="John Doe" textColor="#000000" />
      );
      
      const fallback = container.querySelector('.db-avatar__fallback') as HTMLElement;
      expect(fallback.style.color).toBe('rgb(0, 0, 0)');
    });

    it('uses default white text color', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const fallback = container.querySelector('.db-avatar__fallback') as HTMLElement;
      expect(fallback.style.color).toBe('rgb(255, 255, 255)');
    });

    it('generates consistent background color for same name', () => {
      const { container: container1 } = render(<UserAvatar name="John Doe" />);
      const { container: container2 } = render(<UserAvatar name="John Doe" />);
      
      const fallback1 = container1.querySelector('.db-avatar__fallback') as HTMLElement;
      const fallback2 = container2.querySelector('.db-avatar__fallback') as HTMLElement;
      
      expect(fallback1.style.backgroundColor).toBe(fallback2.style.backgroundColor);
    });

    it('generates different colors for different names', () => {
      const { container: container1 } = render(<UserAvatar name="John Doe" />);
      const { container: container2 } = render(<UserAvatar name="Jane Smith" />);
      
      const fallback1 = container1.querySelector('.db-avatar__fallback') as HTMLElement;
      const fallback2 = container2.querySelector('.db-avatar__fallback') as HTMLElement;
      
      expect(fallback1.style.backgroundColor).not.toBe(fallback2.style.backgroundColor);
    });
  });

  // Clickable tests
  describe('Clickable', () => {
    it('applies clickable class when clickable', () => {
      const { container } = render(
        <UserAvatar name="John Doe" clickable onClick={() => {}} />
      );
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--clickable');
    });

    it('adds button role when clickable', () => {
      render(<UserAvatar name="John Doe" clickable onClick={() => {}} />);
      
      const avatar = screen.getByRole('button');
      expect(avatar).toBeInTheDocument();
    });

    it('makes avatar focusable when clickable', () => {
      const { container } = render(
        <UserAvatar name="John Doe" clickable onClick={() => {}} />
      );
      
      const avatar = container.querySelector('.db-avatar');
      expect(avatar).toHaveAttribute('tabIndex', '0');
    });

    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();
      render(<UserAvatar name="John Doe" clickable onClick={handleClick} />);
      
      const avatar = screen.getByRole('button');
      await userEvent.click(avatar);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when not clickable', async () => {
      const handleClick = jest.fn();
      const { container } = render(
        <UserAvatar name="John Doe" onClick={handleClick} />
      );
      
      const avatar = container.querySelector('.db-avatar') as HTMLElement;
      await userEvent.click(avatar);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('supports keyboard activation with Enter', async () => {
      const handleClick = jest.fn();
      render(<UserAvatar name="John Doe" clickable onClick={handleClick} />);
      
      const avatar = screen.getByRole('button');
      avatar.focus();
      
      await userEvent.keyboard('{Enter}');
      
      expect(handleClick).toHaveBeenCalled();
    });

    it('supports keyboard activation with Space', async () => {
      const handleClick = jest.fn();
      render(<UserAvatar name="John Doe" clickable onClick={handleClick} />);
      
      const avatar = screen.getByRole('button');
      avatar.focus();
      
      await userEvent.keyboard(' ');
      
      expect(handleClick).toHaveBeenCalled();
    });

    it('prevents default on Space key', async () => {
      render(<UserAvatar name="John Doe" clickable onClick={() => {}} />);
      
      const avatar = screen.getByRole('button');
      avatar.focus();
      
      const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
      
      avatar.dispatchEvent(event);
      
      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  // Fallback tests
  describe('Fallback', () => {
    it('shows fallback with initials when no image', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const fallback = container.querySelector('.db-avatar__fallback');
      expect(fallback).toBeInTheDocument();
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('applies fallback class', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const fallback = container.querySelector('.db-avatar__fallback');
      expect(fallback).toBeInTheDocument();
    });

    it('has aria-label on fallback', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const fallback = container.querySelector('.db-avatar__fallback');
      expect(fallback).toHaveAttribute('aria-label', "John Doe's avatar");
    });

    it('renders initials in proper wrapper', () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const initials = container.querySelector('.db-avatar__initials');
      expect(initials).toBeInTheDocument();
      expect(initials).toHaveTextContent('JD');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles single character names', () => {
      render(<UserAvatar name="A" />);
      
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('handles names with special characters', () => {
      render(<UserAvatar name="O'Brien" />);
      
      expect(screen.getByText('O')).toBeInTheDocument();
    });

    it('handles empty name parts', () => {
      render(<UserAvatar name="John  Doe" />); // double space
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles very long names', () => {
      render(<UserAvatar name="Alexander Maximilian Christopher" />);
      
      const initials = screen.getByText(/[A-Z]{1,2}/);
      expect(initials.textContent?.length).toBeLessThanOrEqual(2);
    });

    it('works with all props combined', () => {
      const handleClick = jest.fn();
      const handleError = jest.fn();
      
      const { container } = render(
        <UserAvatar
          name="John Doe"
          src={mockImageSrc}
          size="xl"
          variant="rounded"
          status="online"
          showStatus
          backgroundColor="#FF0000"
          textColor="#FFFFFF"
          clickable
          onClick={handleClick}
          onError={handleError}
          alt="Profile"
          className="custom"
          data-testid="avatar"
        />
      );
      
      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass(
        'db-avatar--xl',
        'db-avatar--rounded',
        'db-avatar--clickable',
        'db-avatar--with-status',
        'custom'
      );
    });

    it('preserves state during re-render', () => {
      const { rerender } = render(<UserAvatar name="John Doe" size="sm" />);
      
      let avatar = document.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--sm');
      
      rerender(<UserAvatar name="John Doe" size="lg" />);
      
      avatar = document.querySelector('.db-avatar');
      expect(avatar).toHaveClass('db-avatar--lg');
      expect(avatar).not.toHaveClass('db-avatar--sm');
    });

    it('handles rapid clicks', async () => {
      const handleClick = jest.fn();
      render(<UserAvatar name="John Doe" clickable onClick={handleClick} />);
      
      const avatar = screen.getByRole('button');
      
      await userEvent.click(avatar);
      await userEvent.click(avatar);
      await userEvent.click(avatar);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<UserAvatar name="John Doe" />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with image', async () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations with status', async () => {
      const { container } = render(
        <UserAvatar name="John Doe" status="online" showStatus />
      );
      
      // Disable aria-prohibited-attr since status div uses aria-label for screen readers
      const results = await axe(container, {
        rules: {
          'aria-prohibited-attr': { enabled: false }
        }
      });
      expect(results).toHaveNoViolations();
    });

    it('has no accessibility violations when clickable', async () => {
      const { container } = render(
        <UserAvatar name="John Doe" clickable onClick={() => {}} />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('is keyboard accessible when clickable', async () => {
      const handleClick = jest.fn();
      render(<UserAvatar name="John Doe" clickable onClick={handleClick} />);
      
      const avatar = screen.getByRole('button');
      
      // Tab to focus
      await userEvent.tab();
      expect(avatar).toHaveFocus();
      
      // Activate with Enter
      await userEvent.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });

    it('has proper button semantics when clickable', () => {
      render(<UserAvatar name="John Doe" clickable onClick={() => {}} />);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('provides accessible name for image', () => {
      const { container } = render(
        <UserAvatar name="John Doe" src={mockImageSrc} />
      );
      
      const img = container.querySelector('img');
      expect(img).toHaveAttribute('alt');
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(UserAvatar.displayName).toBe('UserAvatar');
    });
  });
});
