import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { TopBar, UserProfile } from './TopBar';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock SVG imports
jest.mock('../../assets/small-scale-lockup-full-color-rgb.svg', () => 'databricks-logo-light.svg');
jest.mock('../../assets/small-scale-lockup-full-color-white-rgb.svg', () => 'databricks-logo-dark.svg');

const mockUser: UserProfile = {
  name: 'John Doe',
  email: 'john.doe@databricks.com',
  role: 'Data Scientist',
};

const mockUserWithAvatar: UserProfile = {
  ...mockUser,
  avatar: 'https://example.com/avatar.jpg',
};

describe('TopBar', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<TopBar />);
      
      const topbar = container.querySelector('.db-topbar');
      expect(topbar).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<TopBar ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe('HEADER');
    });

    it('applies custom className', () => {
      const { container } = render(<TopBar className="custom-topbar" />);
      
      const topbar = container.querySelector('.db-topbar');
      expect(topbar).toHaveClass('custom-topbar');
    });

    it('renders as header element', () => {
      const { container } = render(<TopBar />);
      
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
    });

    it('applies custom height', () => {
      const { container } = render(<TopBar height={80} />);
      
      const topbar = container.querySelector('.db-topbar') as HTMLElement;
      expect(topbar.style.height).toBe('80px');
    });

    it('uses default height of 64px', () => {
      const { container } = render(<TopBar />);
      
      const topbar = container.querySelector('.db-topbar') as HTMLElement;
      expect(topbar.style.height).toBe('64px');
    });
  });

  // Variant tests
  describe('Variants', () => {
    it('applies light variant by default', () => {
      const { container } = render(<TopBar />);
      
      const topbar = container.querySelector('.db-topbar');
      expect(topbar).toHaveClass('db-topbar--light');
    });

    it('applies dark variant', () => {
      const { container } = render(<TopBar variant="dark" />);
      
      const topbar = container.querySelector('.db-topbar');
      expect(topbar).toHaveClass('db-topbar--dark');
    });
  });

  // Brand tests
  describe('Brand', () => {
    it('renders default Databricks logo when no brand provided', () => {
      const { container } = render(<TopBar />);
      
      const logo = container.querySelector('.db-topbar__default-brand');
      expect(logo).toBeInTheDocument();
    });

    it('renders light logo for light variant', () => {
      const { container } = render(<TopBar variant="light" />);
      
      const logo = container.querySelector('.db-topbar__logo-image--light');
      expect(logo).toBeInTheDocument();
    });

    it('renders dark logo for dark variant', () => {
      const { container } = render(<TopBar variant="dark" />);
      
      const logo = container.querySelector('.db-topbar__logo-image--dark');
      expect(logo).toBeInTheDocument();
    });

    it('renders custom brand when provided', () => {
      render(<TopBar brand="My Company" />);
      
      expect(screen.getByText('My Company')).toBeInTheDocument();
    });

    it('renders custom brand component', () => {
      render(<TopBar brand={<div data-testid="custom-brand">Custom Brand</div>} />);
      
      expect(screen.getByTestId('custom-brand')).toBeInTheDocument();
    });

    it('overrides default logo with custom brand', () => {
      const { container } = render(<TopBar brand="Custom" />);
      
      expect(container.querySelector('.db-topbar__default-brand')).not.toBeInTheDocument();
    });
  });

  // Menu button tests
  describe('Menu Button', () => {
    it('shows menu button by default', () => {
      render(<TopBar />);
      
      const menuButton = screen.getByLabelText(/menu/i);
      expect(menuButton).toBeInTheDocument();
    });

    it('hides menu button when showMenuButton is false', () => {
      render(<TopBar showMenuButton={false} />);
      
      expect(screen.queryByLabelText(/menu/i)).not.toBeInTheDocument();
    });

    it('calls onMenuClick when clicked', async () => {
      const handleMenuClick = jest.fn();
      render(<TopBar onMenuClick={handleMenuClick} />);
      
      await userEvent.click(screen.getByLabelText(/menu/i));
      
      expect(handleMenuClick).toHaveBeenCalled();
    });

    it('shows "Open menu" label when sidebar is collapsed', () => {
      render(<TopBar sidebarCollapsed />);
      
      expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    });

    it('shows "Close menu" label when sidebar is not collapsed', () => {
      render(<TopBar sidebarCollapsed={false} />);
      
      expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    });

    it('applies collapsed class when sidebar is collapsed', () => {
      const { container } = render(<TopBar sidebarCollapsed />);
      
      const menuButton = container.querySelector('.db-topbar__menu-button--collapsed');
      expect(menuButton).toBeInTheDocument();
    });
  });

  // Search tests
  describe('Search', () => {
    it('renders search input', () => {
      render(<TopBar />);
      
      const searchInput = screen.getByPlaceholderText('Search...');
      expect(searchInput).toBeInTheDocument();
    });

    it('uses custom search placeholder', () => {
      render(<TopBar searchPlaceholder="Search Databricks..." />);
      
      expect(screen.getByPlaceholderText('Search Databricks...')).toBeInTheDocument();
    });

    it('displays search value', () => {
      render(<TopBar searchValue="test query" />);
      
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
      expect(input.value).toBe('test query');
    });

    it('calls onSearchChange when typing', async () => {
      const handleSearchChange = jest.fn();
      render(<TopBar onSearchChange={handleSearchChange} />);
      
      const input = screen.getByPlaceholderText('Search...');
      await userEvent.type(input, 'a');
      
      expect(handleSearchChange).toHaveBeenCalledWith('a');
    });

    it('calls onSearchSubmit on Enter key', async () => {
      const handleSearchSubmit = jest.fn();
      render(<TopBar searchValue="query" onSearchSubmit={handleSearchSubmit} />);
      
      const input = screen.getByPlaceholderText('Search...');
      await userEvent.type(input, '{Enter}');
      
      expect(handleSearchSubmit).toHaveBeenCalledWith('query');
    });

    it('renders search icon', () => {
      const { container } = render(<TopBar />);
      
      const searchIcon = container.querySelector('.db-topbar__search-icon');
      expect(searchIcon).toBeInTheDocument();
    });
  });

  // User profile tests
  describe('User Profile', () => {
    it('renders user profile when provided', () => {
      render(<TopBar user={mockUser} />);
      
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders user email', () => {
      render(<TopBar user={mockUser} />);
      
      expect(screen.getByText('john.doe@databricks.com')).toBeInTheDocument();
    });

    it('renders user role', () => {
      render(<TopBar user={mockUser} />);
      
      expect(screen.getByText('Data Scientist')).toBeInTheDocument();
    });

    it('does not render user section when no user provided', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__user-profile')).not.toBeInTheDocument();
    });

    it('renders user avatar image when provided', () => {
      render(<TopBar user={mockUserWithAvatar} />);
      
      const avatar = screen.getByAltText("John Doe's avatar");
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    });

    it('renders user initials when no avatar', () => {
      render(<TopBar user={mockUser} />);
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('generates initials from name', () => {
      const user: UserProfile = { name: 'Alice Smith' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('AS')).toBeInTheDocument();
    });

    it('uses custom initials when provided', () => {
      const user: UserProfile = { name: 'John Doe', initials: 'XX' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('XX')).toBeInTheDocument();
    });

    it('calls user onClick when clicked', async () => {
      const handleUserClick = jest.fn();
      const user: UserProfile = { ...mockUser, onClick: handleUserClick };
      
      render(<TopBar user={user} />);
      
      await userEvent.click(screen.getByText('John Doe'));
      
      expect(handleUserClick).toHaveBeenCalled();
    });

    it('handles keyboard navigation for user profile', async () => {
      const handleUserClick = jest.fn();
      const user: UserProfile = { ...mockUser, onClick: handleUserClick };
      
      const { container } = render(<TopBar user={user} />);
      
      const userProfile = container.querySelector('.db-topbar__user-profile');
      userProfile?.focus();
      
      await userEvent.keyboard('{Enter}');
      
      expect(handleUserClick).toHaveBeenCalled();
    });

    it('handles Space key for user profile', async () => {
      const handleUserClick = jest.fn();
      const user: UserProfile = { ...mockUser, onClick: handleUserClick };
      
      const { container } = render(<TopBar user={user} />);
      
      const userProfile = container.querySelector('.db-topbar__user-profile');
      userProfile?.focus();
      
      await userEvent.keyboard(' ');
      
      expect(handleUserClick).toHaveBeenCalled();
    });

    it('applies clickable class when user has onClick', () => {
      const user: UserProfile = { ...mockUser, onClick: jest.fn() };
      const { container } = render(<TopBar user={user} />);
      
      const userProfile = container.querySelector('.db-topbar__user-profile--clickable');
      expect(userProfile).toBeInTheDocument();
    });

    it('renders only email without role', () => {
      const user: UserProfile = { name: 'John Doe', email: 'john@example.com' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.queryByText('Data Scientist')).not.toBeInTheDocument();
    });
  });

  // User section tests
  describe('Custom User Section', () => {
    it('renders custom userSection', () => {
      render(<TopBar userSection={<div data-testid="custom-user">Custom User</div>} />);
      
      expect(screen.getByTestId('custom-user')).toBeInTheDocument();
    });

    it('overrides user prop with userSection', () => {
      render(
        <TopBar
          user={mockUser}
          userSection={<div data-testid="custom-user">Custom</div>}
        />
      );
      
      expect(screen.getByTestId('custom-user')).toBeInTheDocument();
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });
  });

  // Notifications tests
  describe('Notifications', () => {
    it('renders notification button when handler provided', () => {
      render(<TopBar onNotificationClick={jest.fn()} />);
      
      expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    });

    it('does not render notification button without handler', () => {
      render(<TopBar />);
      
      expect(screen.queryByLabelText('Notifications')).not.toBeInTheDocument();
    });

    it('calls onNotificationClick when clicked', async () => {
      const handleNotificationClick = jest.fn();
      render(<TopBar onNotificationClick={handleNotificationClick} />);
      
      await userEvent.click(screen.getByLabelText('Notifications'));
      
      expect(handleNotificationClick).toHaveBeenCalled();
    });

    it('displays notification badge with count', () => {
      render(<TopBar onNotificationClick={jest.fn()} notificationCount={5} />);
      
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('displays 99+ for counts over 99', () => {
      render(<TopBar onNotificationClick={jest.fn()} notificationCount={150} />);
      
      expect(screen.getByText('99+')).toBeInTheDocument();
    });

    it('does not display badge when count is 0', () => {
      const { container } = render(
        <TopBar onNotificationClick={jest.fn()} notificationCount={0} />
      );
      
      expect(container.querySelector('.db-topbar__notification-badge')).not.toBeInTheDocument();
    });

    it('does not display badge when count is undefined', () => {
      const { container } = render(<TopBar onNotificationClick={jest.fn()} />);
      
      expect(container.querySelector('.db-topbar__notification-badge')).not.toBeInTheDocument();
    });
  });

  // Actions tests
  describe('Actions', () => {
    it('renders custom actions', () => {
      render(
        <TopBar actions={<button data-testid="custom-action">Action</button>} />
      );
      
      expect(screen.getByTestId('custom-action')).toBeInTheDocument();
    });

    it('renders multiple actions', () => {
      render(
        <TopBar
          actions={
            <>
              <button>Action 1</button>
              <button>Action 2</button>
            </>
          }
        />
      );
      
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('does not render actions section when not provided', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__actions')).not.toBeInTheDocument();
    });
  });

  // Children/custom content tests
  describe('Custom Content', () => {
    it('renders children in content section', () => {
      render(
        <TopBar>
          <div data-testid="custom-content">Custom Content</div>
        </TopBar>
      );
      
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('does not render content section when no children', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__content')).not.toBeInTheDocument();
    });
  });

  // Structure tests
  describe('Structure', () => {
    it('renders left section', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__left')).toBeInTheDocument();
    });

    it('renders center section with search', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__center')).toBeInTheDocument();
      expect(container.querySelector('.db-topbar__search')).toBeInTheDocument();
    });

    it('renders right section', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__right')).toBeInTheDocument();
    });

    it('renders container div', () => {
      const { container } = render(<TopBar />);
      
      expect(container.querySelector('.db-topbar__container')).toBeInTheDocument();
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('renders complete topbar with all features', () => {
      const handleMenuClick = jest.fn();
      const handleSearchChange = jest.fn();
      const handleSearchSubmit = jest.fn();
      const handleNotificationClick = jest.fn();
      const handleUserClick = jest.fn();
      
      render(
        <TopBar
          variant="light"
          onMenuClick={handleMenuClick}
          searchValue="query"
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
          notificationCount={3}
          onNotificationClick={handleNotificationClick}
          user={{ ...mockUser, onClick: handleUserClick }}
          actions={<button>Settings</button>}
        />
      );
      
      expect(screen.getByLabelText(/menu/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
      expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('works in dark mode with custom brand', () => {
      const { container } = render(
        <TopBar
          variant="dark"
          brand="Custom Brand"
          user={mockUser}
        />
      );
      
      expect(container.querySelector('.db-topbar--dark')).toBeInTheDocument();
      expect(screen.getByText('Custom Brand')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles user with only name', () => {
      const user: UserProfile = { name: 'John' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('John')).toBeInTheDocument();
    });

    it('handles single word name for initials', () => {
      const user: UserProfile = { name: 'Madonna' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('M')).toBeInTheDocument();
    });

    it('handles three word name for initials', () => {
      const user: UserProfile = { name: 'John Paul Doe' };
      render(<TopBar user={user} />);
      
      expect(screen.getByText('JP')).toBeInTheDocument();
    });

    it('handles empty search value', () => {
      render(<TopBar searchValue="" />);
      
      const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
      expect(input.value).toBe('');
    });

    it('handles rapid clicks on menu button', async () => {
      const handleMenuClick = jest.fn();
      render(<TopBar onMenuClick={handleMenuClick} />);
      
      const menuButton = screen.getByLabelText(/menu/i);
      await userEvent.click(menuButton);
      await userEvent.click(menuButton);
      await userEvent.click(menuButton);
      
      expect(handleMenuClick).toHaveBeenCalledTimes(3);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<TopBar />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no violations with user and notifications', async () => {
      const { container } = render(
        <TopBar
          user={mockUser}
          onNotificationClick={jest.fn()}
          notificationCount={5}
        />
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('menu button has proper aria-label', () => {
      render(<TopBar />);
      
      const menuButton = screen.getByLabelText('Close menu');
      expect(menuButton).toHaveAttribute('type', 'button');
    });

    it('notification button has proper aria-label', () => {
      render(<TopBar onNotificationClick={jest.fn()} />);
      
      const notificationButton = screen.getByLabelText('Notifications');
      expect(notificationButton).toHaveAttribute('type', 'button');
    });

    it('user profile has proper role when clickable', () => {
      const { container } = render(
        <TopBar user={{ ...mockUser, onClick: jest.fn() }} />
      );
      
      const userProfile = container.querySelector('.db-topbar__user-profile');
      expect(userProfile).toHaveAttribute('role', 'button');
      expect(userProfile).toHaveAttribute('tabIndex', '0');
    });

    it('user profile has no role when not clickable', () => {
      const { container } = render(<TopBar user={mockUser} />);
      
      const userProfile = container.querySelector('.db-topbar__user-profile');
      expect(userProfile).not.toHaveAttribute('role');
      expect(userProfile).not.toHaveAttribute('tabIndex');
    });

    it('search input is keyboard accessible', () => {
      render(<TopBar />);
      
      const searchInput = screen.getByPlaceholderText('Search...');
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).not.toBeDisabled();
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(TopBar.displayName).toBe('TopBar');
    });
  });
});
