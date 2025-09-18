import React, { HTMLAttributes, forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import './Modal.css';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Modal open state */
  open: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Modal title */
  title?: React.ReactNode;
  /** Modal size */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Show close button */
  closeButton?: boolean;
  /** Footer content */
  footer?: React.ReactNode;
  /** Prevent closing on backdrop click */
  disableBackdropClick?: boolean;
  /** Prevent closing on Escape key */
  disableEscapeKey?: boolean;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      size = 'medium',
      closeButton = true,
      footer,
      disableBackdropClick = false,
      disableEscapeKey = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (open && !disableEscapeKey) {
        const handleEscape = (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            onClose?.();
          }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
      }
    }, [open, onClose, disableEscapeKey]);

    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [open]);

    if (!open) return null;

    const handleBackdropClick = () => {
      if (!disableBackdropClick) {
        onClose?.();
      }
    };

    return (
      <div className="db-modal-backdrop" onClick={handleBackdropClick}>
        <div
          ref={ref}
          className={clsx(
            'db-modal',
            `db-modal--${size}`,
            className
          )}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {(title || closeButton) && (
            <div className="db-modal__header">
              {title && (
                <div className="db-modal__title">{title}</div>
              )}
              {closeButton && (
                <button
                  className="db-modal__close"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                </button>
              )}
            </div>
          )}

          <div className="db-modal__body">
            {children}
          </div>

          {footer && (
            <div className="db-modal__footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';