import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './TopBar.css';
import databricksLogoLight from '../../assets/small-scale-lockup-full-color-rgb.svg';
import databricksLogoDark from '../../assets/small-scale-lockup-full-color-white-rgb.svg';

// Default Databricks Brand Component
const DefaultBrand: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const logoSrc = variant === 'dark' ? databricksLogoDark : databricksLogoLight;
  
  return (
    <div className="db-topbar__default-brand">
      <img
        src={logoSrc}
        alt="Databricks"
        className={clsx(
          'db-topbar__logo-image',
          `db-topbar__logo-image--${variant}`
        )}
      />
    </div>
  );
};

// Internal UserAvatar component
const UserAvatar: React.FC<{ user: UserProfile; variant?: 'light' | 'dark' }> = ({ 
  user, 
  variant: _variant = 'light' 
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const initials = user.initials || getInitials(user.name);

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className={clsx(
        'db-topbar__user-profile',
        user.onClick && 'db-topbar__user-profile--clickable'
      )}
      onClick={user.onClick}
      role={user.onClick ? 'button' : undefined}
      tabIndex={user.onClick ? 0 : undefined}
      onKeyDown={user.onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          user.onClick?.();
        }
      } : undefined}
    >
      <div className="db-topbar__user-avatar">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="db-topbar__user-avatar-image"
          />
        ) : (
          <div className="db-topbar__user-avatar-initials">
            {initials}
          </div>
        )}
      </div>
      <div className="db-topbar__user-details">
        <span className="db-topbar__user-name">{user.name}</span>
        {user.email && (
          <span className="db-topbar__user-email">{user.email}</span>
        )}
        {user.role && (
          <span className="db-topbar__user-role">{user.role}</span>
        )}
      </div>
    </div>
  );
};

export interface UserProfile {
  /** User's full name */
  name: string;
  /** User's email address */
  email?: string;
  /** User's avatar image URL */
  avatar?: string;
  /** Custom initials (if no avatar provided, will auto-generate from name) */
  initials?: string;
  /** Additional user metadata */
  role?: string;
  /** Click handler for user profile */
  onClick?: () => void;
}

export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand name or logo to display. If not provided, shows the official Databricks logo (full-color for light mode, white for dark mode) */
  brand?: React.ReactNode;
  /** Whether to show the hamburger menu button */
  showMenuButton?: boolean;
  /** Callback when hamburger menu is clicked */
  onMenuClick?: () => void;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (_value: string) => void;
  /** Search submit handler */
  onSearchSubmit?: (_value: string) => void;
  /** User profile information */
  user?: UserProfile;
  /** Custom user section (overrides user prop if provided) */
  userSection?: React.ReactNode;
  /** Additional actions/buttons on the right */
  actions?: React.ReactNode;
  /** Notification count for notification icon */
  notificationCount?: number;
  /** Notification click handler */
  onNotificationClick?: () => void;
  /** Whether the sidebar is currently collapsed */
  sidebarCollapsed?: boolean;
  /** Height of the top bar */
  height?: number;
  /** Variant styling */
  variant?: 'light' | 'dark';
}

/**
 * TopBar component provides a flexible navigation header for Databricks applications.
 * 
 * Features:
 * - Official Databricks branding (full-color logo for light mode, white logo for dark mode)
 * - Hamburger menu integration with sidebar
 * - Global search functionality 
 * - Notification system with badge counts
 * - User profile section
 * - Custom action buttons
 * - Responsive design for all screen sizes
 * - Light and dark theme variants
 * 
 * @example
 * ```tsx
 * // Default with official Databricks logo (auto-switches based on theme)
 * <TopBar
 *   variant="light" // Uses full-color logo
 *   searchValue={searchValue}
 *   onSearchChange={setSearchValue}
 *   onMenuClick={() => toggleSidebar()}
 *   notificationCount={3}
 *   onNotificationClick={handleNotifications}
 *   user={{
 *     name: 'John Doe',
 *     email: 'john.doe@databricks.com',
 *     role: 'Data Scientist',
 *     onClick: () => openUserMenu()
 *   }}
 * />
 * 
 * // Dark mode with official white logo
 * <TopBar
 *   variant="dark"
 *   user={user}
 * />
 * 
 * // Custom brand override
 * <TopBar
 *   brand="My Company"
 *   user={user}
 * />
 * ```
 */
export const TopBar = forwardRef<HTMLElement, TopBarProps>(
  ({
    brand,
    showMenuButton = true,
    onMenuClick,
    searchPlaceholder = 'Search...',
    searchValue = '',
    onSearchChange,
    onSearchSubmit,
    user,
    userSection,
    actions,
    notificationCount,
    onNotificationClick,
    sidebarCollapsed = false,
    height = 64,
    variant = 'light',
    className,
    children,
    ...props
  }, ref) => {
    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearchSubmit?.(searchValue);
      }
    };

    const handleMenuClick = () => {
      onMenuClick?.();
    };

    return (
      <header
        ref={ref}
        className={clsx(
          'db-topbar',
          `db-topbar--${variant}`,
          className
        )}
        style={{ height }}
        {...props}
      >
        <div className="db-topbar__container">
          {/* Left Section - Menu Button and Brand */}
          <div className="db-topbar__left">
            {showMenuButton && (
              <button
                type="button"
                className={clsx(
                  'db-topbar__menu-button',
                  sidebarCollapsed && 'db-topbar__menu-button--collapsed'
                )}
                onClick={handleMenuClick}
                aria-label={sidebarCollapsed ? 'Open menu' : 'Close menu'}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            )}
            
            <div className="db-topbar__brand">
              {brand || <DefaultBrand variant={variant} />}
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="db-topbar__center">
            <div className="db-topbar__search">
              <svg
                className="db-topbar__search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                className="db-topbar__search-input"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
          </div>

          {/* Right Section - Actions and User */}
          <div className="db-topbar__right">
            {/* Notification Bell */}
            {onNotificationClick && (
              <button
                type="button"
                className="db-topbar__notification-button"
                onClick={onNotificationClick}
                aria-label="Notifications"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                {notificationCount && notificationCount > 0 && (
                  <span className="db-topbar__notification-badge">
                    {notificationCount > 99 ? '99+' : notificationCount}
                  </span>
                )}
              </button>
            )}

            {/* Custom Actions */}
            {actions && (
              <div className="db-topbar__actions">
                {actions}
              </div>
            )}

            {/* User Section */}
            {(userSection || user) && (
              <div className="db-topbar__user">
                {userSection || (user && <UserAvatar user={user} variant={variant} />)}
              </div>
            )}
          </div>
        </div>

        {/* Custom content */}
        {children && (
          <div className="db-topbar__content">
            {children}
          </div>
        )}
      </header>
    );
  }
);

TopBar.displayName = 'TopBar';
