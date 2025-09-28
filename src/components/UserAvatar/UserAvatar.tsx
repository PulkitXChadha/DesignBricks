import React, { useState, forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import './UserAvatar.css';

export interface UserAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onError'> {
  /** User's name - used for initials fallback */
  name: string;
  /** Avatar image source */
  src?: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Avatar variant */
  variant?: 'circle' | 'rounded' | 'square';
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** Whether to show status indicator */
  showStatus?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Custom text color */
  textColor?: string;
  /** Image loading error handler */
  onError?: () => void;
  /** Whether avatar is clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Alt text for image */
  alt?: string;
}

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

const generateBackgroundColor = (name: string): string => {
  const colors = [
    '#4299E0', '#8A63BF', '#B45091', '#C83243',
    '#A6630C', '#04867D', '#3BA65E', '#DE7921',
    '#E65B77', '#434A93', '#137DAE', '#308613'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
};

export const UserAvatar = forwardRef<HTMLDivElement, UserAvatarProps>(
  (
    {
      name,
      src,
      size = 'md',
      variant = 'circle',
      status,
      showStatus = false,
      backgroundColor,
      textColor = '#FFFFFF',
      onError,
      clickable = false,
      onClick,
      alt,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageError = () => {
      setImageError(true);
      onError?.();
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };

    const handleClick = () => {
      if (clickable && onClick) {
        onClick();
      }
    };

    const initials = getInitials(name);
    const bgColor = backgroundColor || generateBackgroundColor(name);
    const shouldShowImage = src && !imageError && imageLoaded;
    const shouldShowStatus = showStatus && status;

    return (
      <div
        ref={ref}
        className={clsx(
          'db-avatar',
          `db-avatar--${size}`,
          `db-avatar--${variant}`,
          {
            'db-avatar--clickable': clickable,
            'db-avatar--with-status': shouldShowStatus,
          },
          className
        )}
        onClick={handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={
          clickable
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick();
                }
              }
            : undefined
        }
        {...props}
      >
        <div className="db-avatar__container">
          {src && !imageError && (
            <img
              src={src}
              alt={alt || `${name}'s avatar`}
              className={clsx('db-avatar__image', {
                'db-avatar__image--loaded': imageLoaded,
              })}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          )}
          
          {!shouldShowImage && (
            <div
              className="db-avatar__fallback"
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
              aria-label={`${name}'s avatar`}
            >
              <span className="db-avatar__initials">{initials}</span>
            </div>
          )}
          
          {shouldShowStatus && (
            <div
              className={clsx(
                'db-avatar__status',
                `db-avatar__status--${status}`
              )}
              aria-label={`Status: ${status}`}
            />
          )}
        </div>
      </div>
    );
  }
);

UserAvatar.displayName = 'UserAvatar';
