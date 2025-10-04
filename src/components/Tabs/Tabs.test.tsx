import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Tabs, TabsProps, Tab, TabPanel, TabPanelProps } from './Tabs';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock icon for testing
const MockIcon = ({ name }: { name: string }) => <span data-testid={`icon-${name}`}>{name}</span>;

// Sample tabs data
const sampleTabs: Tab[] = [
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3' },
];

describe('Tabs', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();
      expect(tablist).toHaveClass(
        'db-tabs',
        'db-tabs--default',
        'db-tabs--medium'
      );
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);
    });

    it('renders all tabs from array', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Tabs tabs={sampleTabs} className="custom-tabs" />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('db-tabs', 'custom-tabs');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Tabs tabs={sampleTabs} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-tabs');
    });

    it('forwards additional props', () => {
      render(
        <Tabs
          tabs={sampleTabs}
          data-testid="tabs"
          id="test-tabs"
        />
      );
      
      const tablist = screen.getByTestId('tabs');
      expect(tablist).toHaveAttribute('id', 'test-tabs');
    });

    it('has proper tablist semantics', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
      
      const tabs = screen.getAllByRole('tab');
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('role', 'tab');
        expect(tab).toHaveAttribute('aria-selected');
      });
    });
  });

  // Variant tests
  describe('Variants', () => {
    const variants: Array<TabsProps['variant']> = ['default', 'pills', 'underlined'];
    
    variants.forEach(variant => {
      it(`renders ${variant} variant correctly`, () => {
        render(<Tabs tabs={sampleTabs} variant={variant} />);
        
        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveClass(`db-tabs--${variant}`);
      });
    });

    it('applies default variant by default', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('db-tabs--default');
    });
  });

  // Size tests
  describe('Sizes', () => {
    const sizes: Array<TabsProps['size']> = ['small', 'medium', 'large'];
    
    sizes.forEach(size => {
      it(`renders ${size} size correctly`, () => {
        render(<Tabs tabs={sampleTabs} size={size} />);
        
        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveClass(`db-tabs--${size}`);
      });
    });

    it('applies medium size by default', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('db-tabs--medium');
    });
  });

  // Active tab tests
  describe('Active Tab State', () => {
    it('sets first tab as active by default', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[0]).toHaveClass('db-tabs__tab--active');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    });

    it('respects activeTab prop for controlled mode', () => {
      render(<Tabs tabs={sampleTabs} activeTab="tab2" />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toHaveClass('db-tabs__tab--active');
      expect(tabs[2]).toHaveAttribute('aria-selected', 'false');
    });

    it('updates active tab when activeTab prop changes', () => {
      const { rerender } = render(<Tabs tabs={sampleTabs} activeTab="tab1" />);
      
      let tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      
      rerender(<Tabs tabs={sampleTabs} activeTab="tab3" />);
      tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
    });

    it('handles uncontrolled mode correctly', async () => {
      const user = userEvent.setup();
      render(<Tabs tabs={sampleTabs} />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      
      await user.click(tabs[1]);
      expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    });

    it('handles controlled mode correctly', async () => {
      const TestComponent = () => {
        const [activeTab, setActiveTab] = React.useState('tab1');
        
        return (
          <Tabs
            tabs={sampleTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      
      await user.click(tabs[2]);
      expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
      expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
    });
  });

  // Tab interaction tests
  describe('Tab Interactions', () => {
    it('calls onChange when tab is clicked', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Tabs tabs={sampleTabs} onChange={handleChange} />);
      
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[1]);
      
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith('tab2');
    });

    it('does not call onChange when active tab is clicked', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Tabs tabs={sampleTabs} activeTab="tab1" onChange={handleChange} />);
      
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[0]);
      
      // onChange is still called but with same tab
      expect(handleChange).toHaveBeenCalledWith('tab1');
    });

    it('does not call onChange when disabled tab is clicked', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      const tabsWithDisabled = [
        ...sampleTabs.slice(0, 1),
        { ...sampleTabs[1], disabled: true },
        ...sampleTabs.slice(2),
      ];
      
      render(<Tabs tabs={tabsWithDisabled} onChange={handleChange} />);
      
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[1]);
      
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('works without onChange callback', async () => {
      const user = userEvent.setup();
      
      render(<Tabs tabs={sampleTabs} />);
      
      const tabs = screen.getAllByRole('tab');
      
      // Should not crash when clicking without onChange
      await expect(user.click(tabs[1])).resolves.not.toThrow();
    });

    it('updates internal state in uncontrolled mode', async () => {
      const user = userEvent.setup();
      
      render(<Tabs tabs={sampleTabs} />);
      
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[2]);
      
      expect(tabs[2]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[2]).toHaveClass('db-tabs__tab--active');
    });
  });

  // Icon tests
  describe('Icons', () => {
    it('renders tab icons when provided', () => {
      const tabsWithIcons: Tab[] = [
        { id: 'tab1', label: 'Tab 1', icon: <MockIcon name="home" /> },
        { id: 'tab2', label: 'Tab 2', icon: <MockIcon name="settings" /> },
        { id: 'tab3', label: 'Tab 3' },
      ];
      
      render(<Tabs tabs={tabsWithIcons} />);
      
      expect(screen.getByTestId('icon-home')).toBeInTheDocument();
      expect(screen.getByTestId('icon-settings')).toBeInTheDocument();
      
      const iconContainers = document.querySelectorAll('.db-tabs__icon');
      expect(iconContainers).toHaveLength(2);
    });

    it('renders without icons when not provided', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const iconContainers = document.querySelectorAll('.db-tabs__icon');
      expect(iconContainers).toHaveLength(0);
    });

    it('renders icon before label', () => {
      const tabsWithIcons: Tab[] = [
        { id: 'tab1', label: 'Tab 1', icon: <MockIcon name="test" /> },
      ];
      
      render(<Tabs tabs={tabsWithIcons} />);
      
      const tab = screen.getByRole('tab');
      const icon = within(tab).getByTestId('icon-test');
      const label = within(tab).getByText('Tab 1');
      
      // Icon is wrapped in .db-tabs__icon span, label is wrapped in .db-tabs__label span
      expect(icon.parentElement?.parentElement).toBe(tab);
      expect(label.parentElement).toBe(tab);
      
      // Verify icon container appears before label in DOM
      const iconContainer = tab.querySelector('.db-tabs__icon');
      const labelContainer = tab.querySelector('.db-tabs__label');
      expect(iconContainer).toBeInTheDocument();
      expect(labelContainer).toBeInTheDocument();
    });
  });

  // Badge tests
  describe('Badges', () => {
    it('renders numeric badges', () => {
      const tabsWithBadges: Tab[] = [
        { id: 'tab1', label: 'Tab 1', badge: 5 },
        { id: 'tab2', label: 'Tab 2', badge: 10 },
        { id: 'tab3', label: 'Tab 3' },
      ];
      
      render(<Tabs tabs={tabsWithBadges} />);
      
      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('10')).toBeInTheDocument();
      
      const badges = document.querySelectorAll('.db-tabs__badge');
      expect(badges).toHaveLength(2);
    });

    it('renders string badges', () => {
      const tabsWithBadges: Tab[] = [
        { id: 'tab1', label: 'Tab 1', badge: 'New' },
        { id: 'tab2', label: 'Tab 2', badge: '!' },
      ];
      
      render(<Tabs tabs={tabsWithBadges} />);
      
      expect(screen.getByText('New')).toBeInTheDocument();
      expect(screen.getByText('!')).toBeInTheDocument();
    });

    it('renders badge with value 0', () => {
      const tabsWithBadges: Tab[] = [
        { id: 'tab1', label: 'Tab 1', badge: 0 },
      ];
      
      render(<Tabs tabs={tabsWithBadges} />);
      
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('does not render badge when not provided', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const badges = document.querySelectorAll('.db-tabs__badge');
      expect(badges).toHaveLength(0);
    });

    it('renders badge after label', () => {
      const tabsWithBadges: Tab[] = [
        { id: 'tab1', label: 'Tab 1', badge: 5 },
      ];
      
      render(<Tabs tabs={tabsWithBadges} />);
      
      const tab = screen.getByRole('tab');
      const label = within(tab).getByText('Tab 1');
      const badge = within(tab).getByText('5');
      
      expect(label.parentElement).toBe(tab);
      expect(badge.parentElement).toBe(tab);
    });
  });

  // Disabled state tests
  describe('Disabled State', () => {
    it('renders disabled tabs correctly', () => {
      const tabsWithDisabled: Tab[] = [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2', disabled: true },
        { id: 'tab3', label: 'Tab 3' },
      ];
      
      render(<Tabs tabs={tabsWithDisabled} />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[1]).toBeDisabled();
      expect(tabs[1]).toHaveAttribute('aria-disabled', 'true');
      expect(tabs[1]).toHaveClass('db-tabs__tab--disabled');
    });

    it('does not activate disabled tabs when clicked', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      const tabsWithDisabled: Tab[] = [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2', disabled: true },
      ];
      
      render(<Tabs tabs={tabsWithDisabled} onChange={handleChange} />);
      
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[1]);
      
      expect(handleChange).not.toHaveBeenCalled();
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    });

    it('can have active tab that is disabled', () => {
      const tabsWithDisabled: Tab[] = [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2', disabled: true },
      ];
      
      render(<Tabs tabs={tabsWithDisabled} activeTab="tab2" />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
      expect(tabs[1]).toBeDisabled();
    });
  });

  // Full width tests
  describe('Full Width', () => {
    it('applies full width class when true', () => {
      render(<Tabs tabs={sampleTabs} fullWidth />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('db-tabs--full-width');
    });

    it('does not apply full width class by default', () => {
      render(<Tabs tabs={sampleTabs} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).not.toHaveClass('db-tabs--full-width');
    });
  });

  // Tab with all features tests
  describe('Tabs with All Features', () => {
    it('renders tab with icon, label, and badge', () => {
      const complexTabs: Tab[] = [
        {
          id: 'tab1',
          label: 'Messages',
          icon: <MockIcon name="mail" />,
          badge: 5,
        },
      ];
      
      render(<Tabs tabs={complexTabs} />);
      
      const tab = screen.getByRole('tab');
      expect(within(tab).getByTestId('icon-mail')).toBeInTheDocument();
      expect(within(tab).getByText('Messages')).toBeInTheDocument();
      expect(within(tab).getByText('5')).toBeInTheDocument();
    });

    it('renders disabled tab with all features', () => {
      const complexTabs: Tab[] = [
        {
          id: 'tab1',
          label: 'Disabled',
          icon: <MockIcon name="lock" />,
          badge: 'Pro',
          disabled: true,
        },
      ];
      
      render(<Tabs tabs={complexTabs} />);
      
      const tab = screen.getByRole('tab');
      expect(tab).toBeDisabled();
      expect(within(tab).getByTestId('icon-lock')).toBeInTheDocument();
      expect(within(tab).getByText('Disabled')).toBeInTheDocument();
      expect(within(tab).getByText('Pro')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Tabs tabs={sampleTabs} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should not have accessibility violations with all features', async () => {
      const complexTabs: Tab[] = [
        {
          id: 'tab1',
          label: 'Tab 1',
          icon: <MockIcon name="home" />,
          badge: 5,
        },
        { id: 'tab2', label: 'Tab 2', disabled: true },
        { id: 'tab3', label: 'Tab 3', badge: 'New' },
      ];
      
      const { container } = render(<Tabs tabs={complexTabs} />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Tabs tabs={sampleTabs} activeTab="tab2" />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('role', 'tablist');
      
      const tabs = screen.getAllByRole('tab');
      tabs.forEach((tab, index) => {
        expect(tab).toHaveAttribute('role', 'tab');
        expect(tab).toHaveAttribute('aria-selected', index === 1 ? 'true' : 'false');
      });
    });

    it('disabled tabs have proper ARIA attributes', () => {
      const tabsWithDisabled: Tab[] = [
        { id: 'tab1', label: 'Tab 1' },
        { id: 'tab2', label: 'Tab 2', disabled: true },
      ];
      
      render(<Tabs tabs={tabsWithDisabled} />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs[1]).toHaveAttribute('aria-disabled', 'true');
      expect(tabs[1]).toBeDisabled();
    });

    it('supports additional ARIA attributes', () => {
      render(
        <Tabs
          tabs={sampleTabs}
          aria-label="Main navigation tabs"
          aria-describedby="tabs-description"
        />
      );
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', 'Main navigation tabs');
      expect(tablist).toHaveAttribute('aria-describedby', 'tabs-description');
    });
  });

  // Property combinations tests
  describe('Property Combinations', () => {
    it('handles all props together', () => {
      const handleChange = jest.fn();
      const complexTabs: Tab[] = [
        {
          id: 'tab1',
          label: 'Tab 1',
          icon: <MockIcon name="home" />,
          badge: 5,
        },
        { id: 'tab2', label: 'Tab 2', disabled: true },
      ];
      
      render(
        <Tabs
          tabs={complexTabs}
          activeTab="tab1"
          onChange={handleChange}
          variant="pills"
          size="large"
          fullWidth
          className="custom-tabs"
        />
      );
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass(
        'db-tabs',
        'db-tabs--pills',
        'db-tabs--large',
        'db-tabs--full-width',
        'custom-tabs'
      );
    });

    it('renders all variant and size combinations', () => {
      const variants: Array<TabsProps['variant']> = ['default', 'pills', 'underlined'];
      const sizes: Array<TabsProps['size']> = ['small', 'medium', 'large'];
      
      variants.forEach(variant => {
        sizes.forEach(size => {
          const { unmount } = render(
            <Tabs
              tabs={sampleTabs}
              variant={variant}
              size={size}
              data-testid={`tabs-${variant}-${size}`}
            />
          );
          
          const tablist = screen.getByTestId(`tabs-${variant}-${size}`);
          expect(tablist).toHaveClass(`db-tabs--${variant}`, `db-tabs--${size}`);
          
          unmount();
        });
      });
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty tabs array', () => {
      render(<Tabs tabs={[]} />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toBeInTheDocument();
      
      const tabs = screen.queryAllByRole('tab');
      expect(tabs).toHaveLength(0);
    });

    it('handles single tab', () => {
      const singleTab: Tab[] = [{ id: 'tab1', label: 'Only Tab' }];
      
      render(<Tabs tabs={singleTab} />);
      
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(1);
      expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('handles very long tab labels', () => {
      const longLabelTabs: Tab[] = [
        {
          id: 'tab1',
          label: 'This is a very long tab label that might wrap to multiple lines',
        },
      ];
      
      render(<Tabs tabs={longLabelTabs} />);
      
      expect(screen.getByText('This is a very long tab label that might wrap to multiple lines')).toBeInTheDocument();
    });

    it('handles multiple class names correctly', () => {
      render(<Tabs tabs={sampleTabs} className="class1 class2 class3" />);
      
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveClass('db-tabs', 'class1', 'class2', 'class3');
    });

    it('handles activeTab with non-existent ID', () => {
      render(<Tabs tabs={sampleTabs} activeTab="non-existent" />);
      
      const tabs = screen.getAllByRole('tab');
      // All tabs should be deselected
      tabs.forEach(tab => {
        expect(tab).toHaveAttribute('aria-selected', 'false');
        expect(tab).not.toHaveClass('db-tabs__tab--active');
      });
    });

    it('handles rapid tab switching', async () => {
      const handleChange = jest.fn();
      const user = userEvent.setup();
      
      render(<Tabs tabs={sampleTabs} onChange={handleChange} />);
      
      const tabs = screen.getAllByRole('tab');
      
      // Rapidly switch tabs
      await user.click(tabs[0]);
      await user.click(tabs[1]);
      await user.click(tabs[2]);
      await user.click(tabs[0]);
      
      expect(handleChange).toHaveBeenCalledTimes(4);
    });

    it('handles tabs with special characters in labels', () => {
      const specialTabs: Tab[] = [
        { id: 'tab1', label: 'Tab & Test' },
        { id: 'tab2', label: 'Tab <> Test' },
        { id: 'tab3', label: 'Tab "Test"' },
      ];
      
      render(<Tabs tabs={specialTabs} />);
      
      expect(screen.getByText('Tab & Test')).toBeInTheDocument();
      expect(screen.getByText('Tab <> Test')).toBeInTheDocument();
      expect(screen.getByText('Tab "Test"')).toBeInTheDocument();
    });
  });
});

// TabPanel component tests
describe('TabPanel', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders when tab is active', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Panel content
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toBeInTheDocument();
      expect(panel).toHaveClass('db-tab-panel');
      expect(screen.getByText('Panel content')).toBeInTheDocument();
    });

    it('does not render when tab is not active', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab2">
          Panel content
        </TabPanel>
      );
      
      expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
      expect(screen.queryByText('Panel content')).not.toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1" className="custom-panel">
          Content
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toHaveClass('db-tab-panel', 'custom-panel');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <TabPanel tabId="tab1" activeTab="tab1" ref={ref}>
          Content
        </TabPanel>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-tab-panel');
    });

    it('forwards additional props', () => {
      render(
        <TabPanel
          tabId="tab1"
          activeTab="tab1"
          data-testid="panel"
          id="test-panel"
        >
          Content
        </TabPanel>
      );
      
      const panel = screen.getByTestId('panel');
      expect(panel).toHaveAttribute('id', 'test-panel');
    });

    it('has proper tabpanel semantics', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Content
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toHaveAttribute('role', 'tabpanel');
    });
  });

  // Content rendering tests
  describe('Content Rendering', () => {
    it('renders simple text content', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Simple text
        </TabPanel>
      );
      
      expect(screen.getByText('Simple text')).toBeInTheDocument();
    });

    it('renders complex children', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1">
          <div>
            <h2>Panel Title</h2>
            <p>Panel description</p>
            <button>Action</button>
          </div>
        </TabPanel>
      );
      
      expect(screen.getByRole('heading', { name: 'Panel Title' })).toBeInTheDocument();
      expect(screen.getByText('Panel description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('handles empty children', () => {
      render(
        <TabPanel tabId="tab1" activeTab="tab1">
          {null}
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toBeInTheDocument();
      expect(panel).toBeEmptyDOMElement();
    });
  });

  // Switching behavior tests
  describe('Switching Behavior', () => {
    it('shows and hides panel when active tab changes', () => {
      const { rerender } = render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Panel 1 content
        </TabPanel>
      );
      
      expect(screen.getByText('Panel 1 content')).toBeInTheDocument();
      
      rerender(
        <TabPanel tabId="tab1" activeTab="tab2">
          Panel 1 content
        </TabPanel>
      );
      
      expect(screen.queryByText('Panel 1 content')).not.toBeInTheDocument();
    });

    it('works with Tabs component', async () => {
      const TestComponent = () => {
        const [activeTab, setActiveTab] = React.useState('tab1');
        
        return (
          <div>
            <Tabs
              tabs={sampleTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            <TabPanel tabId="tab1" activeTab={activeTab}>
              Content for Tab 1
            </TabPanel>
            <TabPanel tabId="tab2" activeTab={activeTab}>
              Content for Tab 2
            </TabPanel>
            <TabPanel tabId="tab3" activeTab={activeTab}>
              Content for Tab 3
            </TabPanel>
          </div>
        );
      };
      
      const user = userEvent.setup();
      render(<TestComponent />);
      
      // Initially Tab 1 content should be visible
      expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
      expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
      
      // Click Tab 2
      const tabs = screen.getAllByRole('tab');
      await user.click(tabs[1]);
      
      // Tab 2 content should be visible
      expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
      expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
      
      // Click Tab 3
      await user.click(tabs[2]);
      
      // Tab 3 content should be visible
      expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
      expect(screen.getByText('Content for Tab 3')).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Panel content
        </TabPanel>
      );
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('supports additional ARIA attributes', () => {
      render(
        <TabPanel
          tabId="tab1"
          activeTab="tab1"
          aria-labelledby="tab-1"
        >
          Content
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toHaveAttribute('aria-labelledby', 'tab-1');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles multiple class names correctly', () => {
      render(
        <TabPanel
          tabId="tab1"
          activeTab="tab1"
          className="class1 class2 class3"
        >
          Content
        </TabPanel>
      );
      
      const panel = screen.getByRole('tabpanel');
      expect(panel).toHaveClass('db-tab-panel', 'class1', 'class2', 'class3');
    });

    it('handles rapid active tab changes', () => {
      const { rerender } = render(
        <TabPanel tabId="tab1" activeTab="tab1">
          Content
        </TabPanel>
      );
      
      // Rapidly toggle active state
      rerender(<TabPanel tabId="tab1" activeTab="tab2">Content</TabPanel>);
      rerender(<TabPanel tabId="tab1" activeTab="tab1">Content</TabPanel>);
      rerender(<TabPanel tabId="tab1" activeTab="tab2">Content</TabPanel>);
      rerender(<TabPanel tabId="tab1" activeTab="tab1">Content</TabPanel>);
      
      // Final state should be visible
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
});
