import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Sidebar, SidebarItem } from './Sidebar';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Sample icons
const HomeIcon = () => <svg data-testid="home-icon" />;
const SettingsIcon = () => <svg data-testid="settings-icon" />;
const ProfileIcon = () => <svg data-testid="profile-icon" />;

// Sample items
const sampleItems: SidebarItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <ProfileIcon />,
  },
];

const itemsWithChildren: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    children: [
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
  },
];

describe('Sidebar', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByRole('complementary')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders all items', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
    });

    it('renders item icons', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
      expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
    });

    it('renders header when provided', () => {
      render(<Sidebar items={sampleItems} header={<div>Sidebar Header</div>} />);
      
      expect(screen.getByText('Sidebar Header')).toBeInTheDocument();
    });

    it('renders footer when provided', () => {
      render(<Sidebar items={sampleItems} footer={<div>Sidebar Footer</div>} />);
      
      expect(screen.getByText('Sidebar Footer')).toBeInTheDocument();
    });

    it('has proper semantic structure', () => {
      render(<Sidebar items={sampleItems} />);
      
      const sidebar = screen.getByRole('complementary');
      const nav = screen.getByRole('navigation');
      
      expect(sidebar).toContainElement(nav);
    });
  });

  // Width and styling tests
  describe('Width and Styling', () => {
    it('applies custom width', () => {
      const { container } = render(<Sidebar items={sampleItems} width={300} />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveStyle({ width: '300px' });
    });

    it('applies default width', () => {
      const { container } = render(<Sidebar items={sampleItems} />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveStyle({ width: '240px' });
    });

    it('applies light variant by default', () => {
      const { container } = render(<Sidebar items={sampleItems} />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveClass('db-sidebar--light');
    });

    it('applies dark variant', () => {
      const { container } = render(<Sidebar items={sampleItems} variant="dark" />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveClass('db-sidebar--dark');
    });
  });

  // Active item tests
  describe('Active Item', () => {
    it('marks active item', () => {
      render(<Sidebar items={sampleItems} activeItem="settings" />);
      
      const buttons = screen.getAllByRole('button');
      const settingsButton = buttons.find(btn => btn.textContent?.includes('Settings'));
      
      expect(settingsButton).toHaveClass('db-sidebar__item--active');
    });

    it('does not mark inactive items', () => {
      render(<Sidebar items={sampleItems} activeItem="settings" />);
      
      const buttons = screen.getAllByRole('button');
      const homeButton = buttons.find(btn => btn.textContent?.includes('Home'));
      
      expect(homeButton).not.toHaveClass('db-sidebar__item--active');
    });
  });

  // Item interaction tests
  describe('Item Interaction', () => {
    it('calls onItemClick when item is clicked', async () => {
      const handleItemClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Sidebar items={sampleItems} onItemClick={handleItemClick} />);
      
      await user.click(screen.getByText('Home'));
      
      expect(handleItemClick).toHaveBeenCalledTimes(1);
      expect(handleItemClick).toHaveBeenCalledWith(sampleItems[0]);
    });

    it('calls item onClick handler', async () => {
      const handleClick = jest.fn();
      const itemsWithHandler: SidebarItem[] = [
        {
          id: 'test',
          label: 'Test',
          onClick: handleClick,
        },
      ];
      const user = userEvent.setup();
      
      render(<Sidebar items={itemsWithHandler} />);
      
      await user.click(screen.getByText('Test'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls both onClick and onItemClick', async () => {
      const handleClick = jest.fn();
      const handleItemClick = jest.fn();
      const itemsWithHandler: SidebarItem[] = [
        {
          id: 'test',
          label: 'Test',
          onClick: handleClick,
        },
      ];
      const user = userEvent.setup();
      
      render(<Sidebar items={itemsWithHandler} onItemClick={handleItemClick} />);
      
      await user.click(screen.getByText('Test'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleItemClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger click on disabled items', async () => {
      const handleItemClick = jest.fn();
      const disabledItems: SidebarItem[] = [
        {
          id: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ];
      const user = userEvent.setup();
      
      render(<Sidebar items={disabledItems} onItemClick={handleItemClick} />);
      
      await user.click(screen.getByText('Disabled'));
      
      expect(handleItemClick).not.toHaveBeenCalled();
    });

    it('applies disabled class to disabled items', () => {
      const disabledItems: SidebarItem[] = [
        {
          id: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ];
      
      render(<Sidebar items={disabledItems} />);
      
      const button = screen.getByRole('button', { name: 'Disabled' });
      expect(button).toHaveClass('db-sidebar__item--disabled');
      expect(button).toBeDisabled();
    });
  });

  // Badge tests
  describe('Badges', () => {
    it('renders badge with string value', () => {
      const itemsWithBadge: SidebarItem[] = [
        {
          id: 'inbox',
          label: 'Inbox',
          badge: 'New',
        },
      ];
      
      render(<Sidebar items={itemsWithBadge} />);
      
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('renders badge with number value', () => {
      const itemsWithBadge: SidebarItem[] = [
        {
          id: 'inbox',
          label: 'Inbox',
          badge: 5,
        },
      ];
      
      render(<Sidebar items={itemsWithBadge} />);
      
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('hides badge when collapsed', () => {
      const itemsWithBadge: SidebarItem[] = [
        {
          id: 'inbox',
          label: 'Inbox',
          badge: 5,
        },
      ];
      
      render(<Sidebar items={itemsWithBadge} collapsed />);
      
      expect(screen.queryByText('5')).not.toBeInTheDocument();
    });
  });

  // Nested items tests
  describe('Nested Items', () => {
    it('renders items with children', () => {
      render(<Sidebar items={itemsWithChildren} />);
      
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.queryByText('Analytics')).not.toBeInTheDocument(); // Hidden by default
    });

    it('expands children on click', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={itemsWithChildren} />);
      
      await user.click(screen.getByText('Dashboard'));
      
      expect(screen.getByText('Analytics')).toBeInTheDocument();
      expect(screen.getByText('Reports')).toBeInTheDocument();
    });

    it('collapses children on second click', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={itemsWithChildren} />);
      
      await user.click(screen.getByText('Dashboard'));
      expect(screen.getByText('Analytics')).toBeInTheDocument();
      
      await user.click(screen.getByText('Dashboard'));
      expect(screen.queryByText('Analytics')).not.toBeInTheDocument();
    });

    it('shows chevron icon for items with children', () => {
      const { container } = render(<Sidebar items={itemsWithChildren} />);
      
      const chevrons = container.querySelectorAll('.db-sidebar__item-chevron');
      expect(chevrons.length).toBeGreaterThan(0);
    });

    it('rotates chevron when expanded', async () => {
      const user = userEvent.setup();
      const { container } = render(<Sidebar items={itemsWithChildren} />);
      
      await user.click(screen.getByText('Dashboard'));
      
      const chevron = container.querySelector('.db-sidebar__item-chevron');
      expect(chevron).toHaveClass('db-sidebar__item-chevron--expanded');
    });

    it('applies correct level classes to nested items', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={itemsWithChildren} />);
      
      await user.click(screen.getByText('Dashboard'));
      
      const buttons = screen.getAllByRole('button');
      const analyticsButton = buttons.find(btn => btn.textContent === 'Analytics');
      
      expect(analyticsButton).toHaveClass('db-sidebar__item--level-1');
    });

    it('does not show children when collapsed', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={itemsWithChildren} collapsed />);
      
      await user.click(screen.getByRole('button', { name: /Dashboard/ }));
      
      expect(screen.queryByText('Analytics')).not.toBeInTheDocument();
    });
  });

  // Section headers tests
  describe('Section Headers', () => {
    it('renders section headers', () => {
      const itemsWithHeaders: SidebarItem[] = [
        { id: 'main', label: 'Main Menu', type: 'header' },
        { id: 'home', label: 'Home' },
      ];
      
      render(<Sidebar items={itemsWithHeaders} />);
      
      expect(screen.getByText('Main Menu')).toBeInTheDocument();
    });

    it('hides section headers when collapsed', () => {
      const itemsWithHeaders: SidebarItem[] = [
        { id: 'main', label: 'Main Menu', type: 'header' },
        { id: 'home', label: 'Home' },
      ];
      
      render(<Sidebar items={itemsWithHeaders} collapsed />);
      
      expect(screen.queryByText('Main Menu')).not.toBeInTheDocument();
    });
  });

  // Collapsed state tests
  describe('Collapsed State', () => {
    it('applies collapsed class', () => {
      const { container } = render(<Sidebar items={sampleItems} collapsed />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveClass('db-sidebar--collapsed');
    });

    it('changes width when collapsed', () => {
      const { container } = render(<Sidebar items={sampleItems} collapsed />);
      
      const sidebar = container.querySelector('.db-sidebar');
      expect(sidebar).toHaveStyle({ width: '64px' });
    });

    it('hides item labels when collapsed', () => {
      const { container } = render(<Sidebar items={sampleItems} collapsed />);
      
      const labels = container.querySelectorAll('.db-sidebar__item-label');
      expect(labels).toHaveLength(0);
    });

    it('shows title attribute on items when collapsed', () => {
      render(<Sidebar items={sampleItems} collapsed />);
      
      const buttons = screen.getAllByRole('button');
      const homeButton = buttons.find(btn => btn.querySelector('[data-testid="home-icon"]'));
      
      expect(homeButton).toHaveAttribute('title', 'Home');
    });

    it('does not show title attribute when expanded', () => {
      render(<Sidebar items={sampleItems} />);
      
      const buttons = screen.getAllByRole('button');
      const homeButton = buttons.find(btn => btn.textContent?.includes('Home'));
      
      expect(homeButton).not.toHaveAttribute('title');
    });
  });

  // Toggle functionality tests
  describe('Toggle Functionality', () => {
    it('shows toggle button by default', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByLabelText('Collapse sidebar')).toBeInTheDocument();
    });

    it('does not show toggle button when collapsible is false', () => {
      render(<Sidebar items={sampleItems} collapsible={false} />);
      
      expect(screen.queryByLabelText('Collapse sidebar')).not.toBeInTheDocument();
    });

    it('calls onCollapsedChange when toggle is clicked', async () => {
      const handleCollapsedChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Sidebar items={sampleItems} onCollapsedChange={handleCollapsedChange} />);
      
      await user.click(screen.getByLabelText('Collapse sidebar'));
      
      expect(handleCollapsedChange).toHaveBeenCalledWith(true);
    });

    it('updates toggle label when collapsed', () => {
      render(<Sidebar items={sampleItems} collapsed />);
      
      expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument();
    });

    it('toggles collapsed state', async () => {
      const handleCollapsedChange = jest.fn();
      const user = userEvent.setup();
      
      const { rerender } = render(
        <Sidebar items={sampleItems} collapsed={false} onCollapsedChange={handleCollapsedChange} />
      );
      
      await user.click(screen.getByLabelText('Collapse sidebar'));
      expect(handleCollapsedChange).toHaveBeenCalledWith(true);
      
      rerender(
        <Sidebar items={sampleItems} collapsed={true} onCollapsedChange={handleCollapsedChange} />
      );
      
      await user.click(screen.getByLabelText('Expand sidebar'));
      expect(handleCollapsedChange).toHaveBeenCalledWith(false);
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Sidebar items={sampleItems} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with nested items', async () => {
      const { container } = render(<Sidebar items={itemsWithChildren} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('toggle button has proper aria-label', () => {
      render(<Sidebar items={sampleItems} />);
      
      const toggle = screen.getByLabelText('Collapse sidebar');
      expect(toggle).toHaveAttribute('aria-label', 'Collapse sidebar');
    });

    it('uses semantic aside element', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByRole('complementary')).toBeInTheDocument();
    });

    it('uses semantic nav element', () => {
      render(<Sidebar items={sampleItems} />);
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('all items are keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<Sidebar items={sampleItems} />);
      
      // Tab through items
      await user.tab(); // Toggle button
      await user.tab(); // First item
      
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveFocus(); // First sidebar item (after toggle)
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty items array', () => {
      render(<Sidebar items={[]} />);
      
      expect(screen.getByRole('complementary')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('handles items without icons', () => {
      const itemsWithoutIcons: SidebarItem[] = [
        { id: 'item1', label: 'Item 1' },
        { id: 'item2', label: 'Item 2' },
      ];
      
      render(<Sidebar items={itemsWithoutIcons} />);
      
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('handles items without badges', () => {
      render(<Sidebar items={sampleItems} />);
      
      const badges = document.querySelectorAll('.db-sidebar__item-badge');
      expect(badges).toHaveLength(0);
    });

    it('handles deeply nested items', async () => {
      const deeplyNestedItems: SidebarItem[] = [
        {
          id: 'level1',
          label: 'Level 1',
          children: [
            {
              id: 'level2',
              label: 'Level 2',
              children: [
                { id: 'level3', label: 'Level 3' },
              ],
            },
          ],
        },
      ];
      const user = userEvent.setup();
      
      render(<Sidebar items={deeplyNestedItems} />);
      
      await user.click(screen.getByText('Level 1'));
      expect(screen.getByText('Level 2')).toBeInTheDocument();
      
      await user.click(screen.getByText('Level 2'));
      expect(screen.getByText('Level 3')).toBeInTheDocument();
    });

    it('handles multiple expanded items simultaneously', async () => {
      const multipleParents: SidebarItem[] = [
        {
          id: 'parent1',
          label: 'Parent 1',
          children: [{ id: 'child1', label: 'Child 1' }],
        },
        {
          id: 'parent2',
          label: 'Parent 2',
          children: [{ id: 'child2', label: 'Child 2' }],
        },
      ];
      const user = userEvent.setup();
      
      render(<Sidebar items={multipleParents} />);
      
      await user.click(screen.getByText('Parent 1'));
      await user.click(screen.getByText('Parent 2'));
      
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('handles mixed item types', () => {
      const mixedItems: SidebarItem[] = [
        { id: 'header', label: 'Section', type: 'header' },
        { id: 'item1', label: 'Item 1' },
        { id: 'item2', label: 'Item 2', disabled: true },
        { id: 'item3', label: 'Item 3', badge: 5 },
        {
          id: 'parent',
          label: 'Parent',
          children: [{ id: 'child', label: 'Child' }],
        },
      ];
      
      render(<Sidebar items={mixedItems} />);
      
      expect(screen.getByText('Section')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
      expect(screen.getByText('Parent')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('preserves expansion state during re-renders', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<Sidebar items={itemsWithChildren} />);
      
      await user.click(screen.getByText('Dashboard'));
      expect(screen.getByText('Analytics')).toBeInTheDocument();
      
      rerender(<Sidebar items={itemsWithChildren} activeItem="settings" />);
      expect(screen.getByText('Analytics')).toBeInTheDocument();
    });
  });
});



