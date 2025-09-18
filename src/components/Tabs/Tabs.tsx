import React, { useState, HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import './Tabs.css';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Array of tabs */
  tabs: Tab[];
  /** Currently active tab */
  activeTab?: string;
  /** Tab change handler */
  onChange?: (tabId: string) => void;
  /** Tab variant */
  variant?: 'default' | 'pills' | 'underlined';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Full width tabs */
  fullWidth?: boolean;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      activeTab,
      onChange,
      variant = 'default',
      size = 'medium',
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = useState(
      activeTab || tabs[0]?.id
    );

    const currentTab = activeTab !== undefined ? activeTab : internalActiveTab;

    const handleTabClick = (tabId: string, disabled?: boolean) => {
      if (disabled) return;

      if (activeTab === undefined) {
        setInternalActiveTab(tabId);
      }
      onChange?.(tabId);
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'db-tabs',
          `db-tabs--${variant}`,
          `db-tabs--${size}`,
          {
            'db-tabs--full-width': fullWidth,
          },
          className
        )}
        role="tablist"
        {...props}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx('db-tabs__tab', {
              'db-tabs__tab--active': currentTab === tab.id,
              'db-tabs__tab--disabled': tab.disabled,
            })}
            role="tab"
            aria-selected={currentTab === tab.id}
            aria-disabled={tab.disabled}
            onClick={() => handleTabClick(tab.id, tab.disabled)}
            disabled={tab.disabled}
          >
            {tab.icon && (
              <span className="db-tabs__icon">{tab.icon}</span>
            )}
            <span className="db-tabs__label">{tab.label}</span>
            {tab.badge !== undefined && (
              <span className="db-tabs__badge">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Tab ID this panel belongs to */
  tabId: string;
  /** Currently active tab */
  activeTab: string;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ tabId, activeTab, children, className, ...props }, ref) => {
    if (activeTab !== tabId) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={clsx('db-tab-panel', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';