import React, { forwardRef } from 'react';
import clsx from 'clsx';
import './Notification.css';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Notification variant */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Title of the notification */
  title?: string;
  /** Whether to show close button */
  closable?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Icon to display - if not provided, variant-appropriate icon is used */
  icon?: React.ReactNode;
  /** Position for toast notifications */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  ({
    variant = 'info',
    title,
    closable = false,
    onClose,
    icon,
    className,
    children,
    ...props
  }, ref) => {
    const defaultIcons = {
      info: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM8.75 4.5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4zM8 10.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      success: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm3.03-9.97L6.5 9.56 4.97 8.03l-1.06 1.06L6.5 11.69l5.59-5.59-1.06-1.07z"
            clipRule="evenodd"
          />
        </svg>
      ),
      warning: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.865.23a1 1 0 0 0-1.73 0L.632 13.346A1 1 0 0 0 1.498 15h13.004a1 1 0 0 0 .866-1.654L8.865.23zM8.75 5.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3zM8 10.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      error: (
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM5.47 5.47a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 0 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06z"
            clipRule="evenodd"
          />
        </svg>
      )
    };

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        className={clsx(
          'db-notification',
          `db-notification--${variant}`,
          className
        )}
        {...props}
      >
        <div className="db-notification__icon">
          {icon || defaultIcons[variant]}
        </div>
        <div className="db-notification__content">
          {title && (
            <div className="db-notification__title">
              {title}
            </div>
          )}
          {children && (
            <div className="db-notification__description">
              {children}
            </div>
          )}
        </div>
        {closable && (
          <button
            type="button"
            className="db-notification__close"
            onClick={onClose}
            aria-label="Close notification"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.97 4.47a.75.75 0 0 0-1.06-1.06L8 7.32 4.09 3.41a.75.75 0 1 0-1.06 1.06L6.94 8.5 3.03 12.41a.75.75 0 1 0 1.06 1.06L8 9.56l3.91 3.91a.75.75 0 1 0 1.06-1.06L9.06 8.5l3.91-3.91z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

