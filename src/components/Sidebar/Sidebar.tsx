import React, { useState } from 'react';
import './Sidebar.css';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  children?: SidebarItem[];
  badge?: string | number;
  disabled?: boolean;
  type?: 'item' | 'header';
}

export interface SidebarProps {
  items: SidebarItem[];
  activeItem?: string;
  onItemClick?: (_item: SidebarItem) => void;
  collapsed?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  variant?: 'light' | 'dark';
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeItem,
  onItemClick,
  collapsed = false,
  header,
  footer,
  width = 240,
  variant = 'light',
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleItemClick = (item: SidebarItem) => {
    if (item.disabled) return;

    if (item.children && item.children.length > 0) {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(item.id)) {
          newSet.delete(item.id);
        } else {
          newSet.add(item.id);
        }
        return newSet;
      });
    }

    if (item.onClick) {
      item.onClick();
    }

    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderItem = (item: SidebarItem, level: number = 0): React.ReactNode => {
    const isExpanded = expandedItems.has(item.id);
    const isActive = activeItem === item.id;
    const hasChildren = item.children && item.children.length > 0;

    // Render section headers
    if (item.type === 'header') {
      if (collapsed) return null; // Hide headers when collapsed
      return (
        <div key={item.id} className="db-sidebar__section-header">
          <span className="db-sidebar__section-title">{item.label}</span>
        </div>
      );
    }

    return (
      <div key={item.id} className="db-sidebar__item-wrapper">
        <button
          className={`db-sidebar__item db-sidebar__item--level-${level} ${
            isActive ? 'db-sidebar__item--active' : ''
          } ${item.disabled ? 'db-sidebar__item--disabled' : ''}`}
          onClick={() => handleItemClick(item)}
          disabled={item.disabled}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && (
            <span className="db-sidebar__item-icon">{item.icon}</span>
          )}
          {!collapsed && (
            <>
              <span className="db-sidebar__item-label">{item.label}</span>
              {item.badge && (
                <span className="db-sidebar__item-badge">{item.badge}</span>
              )}
              {hasChildren && (
                <svg
                  className={`db-sidebar__item-chevron ${
                    isExpanded ? 'db-sidebar__item-chevron--expanded' : ''
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </>
          )}
        </button>
        {hasChildren && isExpanded && !collapsed && (
          <div className="db-sidebar__children">
            {item.children!.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`db-sidebar db-sidebar--${variant} ${
        collapsed ? 'db-sidebar--collapsed' : ''
      }`}
      style={{ width: collapsed ? 64 : width }}
    >
      {header && <div className="db-sidebar__header">{header}</div>}

      <nav className="db-sidebar__nav">
        {items.map((item) => renderItem(item))}
      </nav>

      {footer && <div className="db-sidebar__footer">{footer}</div>}
    </aside>
  );
};