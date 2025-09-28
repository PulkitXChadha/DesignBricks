import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import './Command.css';

export interface CommandItem {
  /** Unique identifier for the command */
  id: string;
  /** Display label */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Keyboard shortcut */
  shortcut?: string[];
  /** Category/group for the command */
  group?: string;
  /** Whether the command is disabled */
  disabled?: boolean;
  /** Command action callback */
  onSelect?: () => void;
  /** Search keywords for better matching */
  keywords?: string[];
}

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
  /** List of available commands */
  commands: CommandItem[];
  /** Placeholder text for the search input */
  placeholder?: string;
  /** Whether the command palette is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Custom filter function */
  filter?: (commands: CommandItem[], query: string) => CommandItem[];
  /** Maximum number of results to show */
  maxResults?: number;
  /** Whether to show keyboard shortcuts */
  showShortcuts?: boolean;
  /** Whether to group commands by category */
  groupCommands?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Loading state */
  loading?: boolean;
  /** Custom search input props */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const defaultFilter = (commands: CommandItem[], query: string): CommandItem[] => {
  if (!query.trim()) return commands;
  
  const lowerQuery = query.toLowerCase();
  return commands.filter(command => {
    const searchText = [
      command.label,
      command.description,
      ...(command.keywords || [])
    ].join(' ').toLowerCase();
    
    return searchText.includes(lowerQuery);
  });
};

const groupBy = <T,>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const group = (item[key] as string) || 'Other';
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

export const Command = forwardRef<HTMLDivElement, CommandProps>(
  ({
    commands = [],
    placeholder = 'Type a command or search...',
    open: controlledOpen,
    onOpenChange,
    filter = defaultFilter,
    maxResults = 10,
    showShortcuts = true,
    groupCommands = true,
    emptyMessage = 'No commands found',
    loading = false,
    inputProps = {},
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    
    // Filter and limit commands
    const filteredCommands = filter(commands, query).slice(0, maxResults);
    
    // Group commands if enabled
    const commandGroups = groupCommands 
      ? groupBy(filteredCommands, 'group')
      : { 'All': filteredCommands };
    
    // Flatten commands for keyboard navigation
    const flatCommands = filteredCommands.filter(cmd => !cmd.disabled);
    
    const setOpen = useCallback((open: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(open);
      }
      onOpenChange?.(open);
      
      if (open) {
        // Focus input when opening
        setTimeout(() => inputRef.current?.focus(), 0);
        setQuery('');
        setSelectedIndex(0);
      }
    }, [controlledOpen, onOpenChange]);
    
    const executeCommand = useCallback((command: CommandItem) => {
      if (command.disabled) return;
      
      command.onSelect?.();
      setOpen(false);
    }, [setOpen]);
    
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            Math.min(prev + 1, flatCommands.length - 1)
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (flatCommands[selectedIndex]) {
            executeCommand(flatCommands[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setOpen(false);
          break;
      }
    }, [flatCommands, selectedIndex, executeCommand, setOpen]);
    
    // Global keyboard shortcut to open command palette
    useEffect(() => {
      const handleGlobalKeyDown = (e: KeyboardEvent) => {
        // Cmd/Ctrl + K to open command palette
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          setOpen(true);
        }
      };
      
      document.addEventListener('keydown', handleGlobalKeyDown);
      return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }, [setOpen]);
    
    // Reset selection when query changes
    useEffect(() => {
      setSelectedIndex(0);
    }, [query]);
    
    // Scroll selected item into view
    useEffect(() => {
      if (!isOpen || !listRef.current) return;
      
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      ) as HTMLElement;
      
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }, [selectedIndex, isOpen]);
    
    if (!isOpen) {
      return null;
    }
    
    let currentIndex = -1;
    
    return (
      <div className="db-command-overlay">
        <div
          ref={ref}
          className={clsx('db-command', className)}
          {...props}
        >
          <div className="db-command__header">
            <div className="db-command__search">
              <div className="db-command__search-icon">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M8 1a7 7 0 1 0 4.39 12.453l2.55 2.55 1.06-1.06-2.55-2.55A7 7 0 0 0 8 1M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="db-command__input"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                {...inputProps}
              />
              <div className="db-command__shortcut">
                <kbd>Esc</kbd> to close
              </div>
            </div>
          </div>
          
          <div className="db-command__content" ref={listRef}>
            {loading ? (
              <div className="db-command__loading">
                <div className="db-command__spinner" />
                Loading commands...
              </div>
            ) : filteredCommands.length === 0 ? (
              <div className="db-command__empty">
                {emptyMessage}
              </div>
            ) : (
              <div className="db-command__list">
                {Object.entries(commandGroups).map(([groupName, groupCommands]) => (
                  <div key={groupName} className="db-command__group">
                    {groupCommands && groupName !== 'All' && (
                      <div className="db-command__group-title">
                        {groupName}
                      </div>
                    )}
                    {groupCommands?.map((command) => {
                      if (!command.disabled) {
                        currentIndex++;
                      }
                      
                      return (
                        <div
                          key={command.id}
                          data-index={currentIndex}
                          className={clsx(
                            'db-command__item',
                            {
                              'db-command__item--selected': currentIndex === selectedIndex && !command.disabled,
                              'db-command__item--disabled': command.disabled,
                            }
                          )}
                          onClick={() => executeCommand(command)}
                          onMouseEnter={() => !command.disabled && setSelectedIndex(currentIndex)}
                        >
                          {command.icon && (
                            <div className="db-command__item-icon">
                              {command.icon}
                            </div>
                          )}
                          <div className="db-command__item-content">
                            <div className="db-command__item-title">
                              {command.label}
                            </div>
                            {command.description && (
                              <div className="db-command__item-description">
                                {command.description}
                              </div>
                            )}
                          </div>
                          {showShortcuts && command.shortcut && (
                            <div className="db-command__item-shortcut">
                              {command.shortcut.map((key, index) => (
                                <kbd key={index}>{key}</kbd>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="db-command__footer">
            <div className="db-command__footer-hint">
              Use <kbd>↑</kbd><kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Command.displayName = 'Command';

// Hook for managing command palette state
export const useCommand = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  
  return {
    isOpen,
    toggle,
    open,
    close,
    setIsOpen,
  };
};

