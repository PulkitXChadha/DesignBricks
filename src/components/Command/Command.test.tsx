import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Command, CommandProps, CommandItem } from './Command';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

// Mock data
const mockCommands: CommandItem[] = [
  {
    id: '1',
    label: 'New File',
    description: 'Create a new file',
    shortcut: ['Cmd', 'N'],
    group: 'File',
    onSelect: jest.fn(),
  },
  {
    id: '2',
    label: 'Open File',
    description: 'Open an existing file',
    shortcut: ['Cmd', 'O'],
    group: 'File',
    onSelect: jest.fn(),
  },
  {
    id: '3',
    label: 'Save',
    description: 'Save current file',
    shortcut: ['Cmd', 'S'],
    group: 'File',
    onSelect: jest.fn(),
  },
  {
    id: '4',
    label: 'Cut',
    description: 'Cut selected text',
    shortcut: ['Cmd', 'X'],
    group: 'Edit',
    onSelect: jest.fn(),
  },
  {
    id: '5',
    label: 'Copy',
    description: 'Copy selected text',
    shortcut: ['Cmd', 'C'],
    group: 'Edit',
    onSelect: jest.fn(),
  },
];

const mockCommandsWithIcons: CommandItem[] = [
  {
    id: '1',
    label: 'Home',
    icon: <span data-testid="icon-home">🏠</span>,
    onSelect: jest.fn(),
  },
  {
    id: '2',
    label: 'Settings',
    icon: <span data-testid="icon-settings">⚙️</span>,
    onSelect: jest.fn(),
  },
];

describe('Command', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders with default props', () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      const command = container.querySelector('.db-command');
      expect(command).toBeInTheDocument();
    });

    it('renders search input with placeholder', () => {
      render(<Command commands={mockCommands} placeholder="Search commands" open />);
      
      expect(screen.getByPlaceholderText('Search commands')).toBeInTheDocument();
    });

    it('uses default placeholder', () => {
      render(<Command commands={mockCommands} open />);
      
      expect(screen.getByPlaceholderText(/Type a command or search/)).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Command commands={mockCommands} ref={ref} open />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('db-command');
    });

    it('applies custom className', () => {
      const { container } = render(
        <Command commands={mockCommands} className="custom-command" open />
      );
      
      const command = container.querySelector('.db-command');
      expect(command).toHaveClass('custom-command');
    });
  });

  // Open/Close state tests
  describe('Open/Close State', () => {
    it('renders when open is true', () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      expect(container.querySelector('.db-command')).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
      const { container } = render(<Command commands={mockCommands} open={false} />);
      
      expect(container.querySelector('.db-command')).not.toBeInTheDocument();
    });

    it('calls onOpenChange when closing via Escape', async () => {
      const handleOpenChange = jest.fn();
      render(<Command commands={mockCommands} open onOpenChange={handleOpenChange} />);
      
      const input = screen.getByRole('textbox');
      input.focus();
      
      await userEvent.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });

    it('renders input when opening', () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).not.toBeDisabled();
    });
  });

  // Command list tests
  describe('Command List', () => {
    it('renders all commands', () => {
      render(<Command commands={mockCommands} open />);
      
      expect(screen.getByText('New File')).toBeInTheDocument();
      expect(screen.getByText('Open File')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('renders command descriptions', () => {
      render(<Command commands={mockCommands} open />);
      
      expect(screen.getByText('Create a new file')).toBeInTheDocument();
      expect(screen.getByText('Open an existing file')).toBeInTheDocument();
    });

    it('renders command icons', () => {
      render(<Command commands={mockCommandsWithIcons} open />);
      
      expect(screen.getByTestId('icon-home')).toBeInTheDocument();
      expect(screen.getByTestId('icon-settings')).toBeInTheDocument();
    });

    it('renders keyboard shortcuts by default', () => {
      render(<Command commands={mockCommands} open />);
      
      const cmdKeys = screen.getAllByText('Cmd');
      expect(cmdKeys.length).toBeGreaterThan(0);
      expect(screen.getByText('N')).toBeInTheDocument();
    });

    it('hides shortcuts when showShortcuts is false', () => {
      const { container } = render(
        <Command commands={mockCommands} open showShortcuts={false} />
      );
      
      const shortcuts = container.querySelectorAll('.db-command__item-shortcut');
      expect(shortcuts).toHaveLength(0);
    });
  });

  // Filtering tests
  describe('Filtering', () => {
    it('filters commands by label', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'copy');
      
      await waitFor(() => {
        expect(screen.getByText('Copy')).toBeInTheDocument();
        expect(screen.queryByText('New File')).not.toBeInTheDocument();
      });
    });

    it('filters commands by description', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'create');
      
      await waitFor(() => {
        expect(screen.getByText('New File')).toBeInTheDocument();
        expect(screen.queryByText('Copy')).not.toBeInTheDocument();
      });
    });

    it('filters commands by keywords', async () => {
      const commandsWithKeywords: CommandItem[] = [
        { ...mockCommands[0], keywords: ['add', 'create', 'new'] },
        mockCommands[1],
      ];
      
      render(<Command commands={commandsWithKeywords} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'add');
      
      await waitFor(() => {
        expect(screen.getByText('New File')).toBeInTheDocument();
        expect(screen.queryByText('Open File')).not.toBeInTheDocument();
      });
    });

    it('shows all commands when query is empty', () => {
      render(<Command commands={mockCommands} open />);
      
      expect(screen.getByText('New File')).toBeInTheDocument();
      expect(screen.getByText('Copy')).toBeInTheDocument();
    });

    it('is case insensitive', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'COPY');
      
      await waitFor(() => {
        expect(screen.getByText('Copy')).toBeInTheDocument();
      });
    });

    it('uses custom filter function', async () => {
      const customFilter = jest.fn((commands, query) => 
        commands.filter(cmd => cmd.id === query)
      );
      
      render(<Command commands={mockCommands} open filter={customFilter} />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, '1');
      
      await waitFor(() => {
        expect(customFilter).toHaveBeenCalled();
      });
    });
  });

  // Grouping tests
  describe('Command Grouping', () => {
    it('groups commands by category when groupCommands is true', () => {
      const { container } = render(<Command commands={mockCommands} open groupCommands />);
      
      const groups = container.querySelectorAll('.db-command__group');
      expect(groups.length).toBeGreaterThan(0);
      
      expect(screen.getByText('File')).toBeInTheDocument();
      expect(screen.getByText('Edit')).toBeInTheDocument();
    });

    it('does not group commands when groupCommands is false', () => {
      const { container } = render(<Command commands={mockCommands} open groupCommands={false} />);
      
      const groups = container.querySelectorAll('.db-command__group');
      expect(groups).toHaveLength(1);
    });

    it('places ungrouped commands in Other category', () => {
      const ungroupedCommands: CommandItem[] = [
        { id: '1', label: 'Test', onSelect: jest.fn() },
      ];
      
      render(<Command commands={ungroupedCommands} open groupCommands />);
      
      expect(screen.getByText('Other')).toBeInTheDocument();
    });
  });

  // Selection tests
  describe('Selection', () => {
    it('calls onSelect when command is clicked', async () => {
      const handleSelect = jest.fn();
      const commands: CommandItem[] = [
        { id: '1', label: 'Test', onSelect: handleSelect },
      ];
      
      render(<Command commands={commands} open />);
      
      await userEvent.click(screen.getByText('Test'));
      
      expect(handleSelect).toHaveBeenCalled();
    });

    it('closes command palette after selection', async () => {
      const handleOpenChange = jest.fn();
      render(<Command commands={mockCommands} open onOpenChange={handleOpenChange} />);
      
      await userEvent.click(screen.getByText('Copy'));
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });

    it('does not execute disabled commands', async () => {
      const handleSelect = jest.fn();
      const commands: CommandItem[] = [
        { id: '1', label: 'Disabled', disabled: true, onSelect: handleSelect },
      ];
      
      render(<Command commands={commands} open />);
      
      await userEvent.click(screen.getByText('Disabled'));
      
      expect(handleSelect).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation tests
  describe('Keyboard Navigation', () => {
    it('marks first command as selected by default', () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      const selected = container.querySelector('.db-command__item--selected');
      expect(selected).toBeInTheDocument();
      expect(selected).toHaveTextContent('New File');
    });

    it('handles ArrowDown key', async () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      input.focus();
      
      await userEvent.keyboard('{ArrowDown}');
      
      const selected = container.querySelector('.db-command__item--selected');
      expect(selected).toBeInTheDocument();
    });

    it('executes command on click', async () => {
      const handleSelect = jest.fn();
      const commands: CommandItem[] = [
        { id: '1', label: 'Test Command', onSelect: handleSelect },
      ];
      
      render(<Command commands={commands} open />);
      
      await userEvent.click(screen.getByText('Test Command'));
      
      expect(handleSelect).toHaveBeenCalled();
    });

    it('closes on Escape key', async () => {
      const handleOpenChange = jest.fn();
      render(<Command commands={mockCommands} open onOpenChange={handleOpenChange} />);
      
      const input = screen.getByRole('textbox');
      input.focus();
      
      await userEvent.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });

    it('renders all commands when not filtered', () => {
      render(<Command commands={mockCommands} open />);
      
      expect(screen.getByText('New File')).toBeInTheDocument();
      expect(screen.getByText('Copy')).toBeInTheDocument();
    });

    it('handles keyboard input for search', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox') as HTMLInputElement;
      await userEvent.type(input, 'copy');
      
      expect(input.value).toBe('copy');
    });
  });

  // MaxResults tests
  describe('MaxResults', () => {
    it('limits displayed commands to maxResults', () => {
      const { container } = render(<Command commands={mockCommands} open maxResults={3} />);
      
      const items = container.querySelectorAll('.db-command__item');
      expect(items.length).toBeLessThanOrEqual(3);
    });

    it('applies maxResults after filtering', async () => {
      const { container } = render(<Command commands={mockCommands} open maxResults={2} />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'file');
      
      await waitFor(() => {
        const items = container.querySelectorAll('.db-command__item');
        expect(items.length).toBeLessThanOrEqual(2);
      });
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('shows loading indicator when loading', () => {
      render(<Command commands={mockCommands} open loading />);
      
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('hides commands when loading', () => {
      render(<Command commands={mockCommands} open loading />);
      
      expect(screen.queryByText('New File')).not.toBeInTheDocument();
    });
  });

  // Empty state tests
  describe('Empty State', () => {
    it('shows default empty message when no commands', () => {
      render(<Command commands={[]} open />);
      
      expect(screen.getByText('No commands found')).toBeInTheDocument();
    });

    it('shows custom empty message', () => {
      render(<Command commands={[]} open emptyMessage="Nothing to see here" />);
      
      expect(screen.getByText('Nothing to see here')).toBeInTheDocument();
    });

    it('shows empty message when filter returns no results', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'zzz');
      
      await waitFor(() => {
        expect(screen.getByText('No commands found')).toBeInTheDocument();
      });
    });
  });

  // Input props tests
  describe('Input Props', () => {
    it('forwards input props', () => {
      render(
        <Command
          commands={mockCommands}
          open
          inputProps={{ 'data-testid': 'custom-input', autoComplete: 'off' }}
        />
      );
      
      const input = screen.getByTestId('custom-input');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('autocomplete', 'off');
    });

    it('merges className from inputProps', () => {
      render(
        <Command
          commands={mockCommands}
          open
          inputProps={{ className: 'custom-input-class' }}
        />
      );
      
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('custom-input-class');
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty commands array', () => {
      render(<Command commands={[]} open />);
      
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getByText('No commands found')).toBeInTheDocument();
    });

    it('handles commands without descriptions', () => {
      const commands: CommandItem[] = [
        { id: '1', label: 'Test', onSelect: jest.fn() },
      ];
      
      render(<Command commands={commands} open />);
      
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('handles commands without groups', () => {
      const commands: CommandItem[] = [
        { id: '1', label: 'Test 1', onSelect: jest.fn() },
        { id: '2', label: 'Test 2', onSelect: jest.fn() },
      ];
      
      render(<Command commands={commands} open />);
      
      expect(screen.getByText('Test 1')).toBeInTheDocument();
      expect(screen.getByText('Test 2')).toBeInTheDocument();
    });

    it('handles commands without shortcuts', () => {
      const commands: CommandItem[] = [
        { id: '1', label: 'Test', onSelect: jest.fn() },
      ];
      
      render(<Command commands={commands} open />);
      
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('handles rapid search queries', async () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'abc');
      
      await waitFor(() => {
        expect(input).toHaveValue('abc');
      });
    });

    it('clears search when reopening', () => {
      const { rerender } = render(<Command commands={mockCommands} open={false} />);
      
      rerender(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      expect((input as HTMLInputElement).value).toBe('');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper input accessibility', () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('provides accessible command items', () => {
      const { container } = render(<Command commands={mockCommands} open />);
      
      const items = container.querySelectorAll('.db-command__item');
      expect(items.length).toBeGreaterThan(0);
    });

    it('is keyboard accessible', () => {
      render(<Command commands={mockCommands} open />);
      
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).not.toBeDisabled();
      
      // Should have commands visible for interaction
      expect(screen.getByText('New File')).toBeInTheDocument();
    });

    it('announces loading state', () => {
      render(<Command commands={mockCommands} open loading />);
      
      const loadingMessage = screen.getByText(/loading/i);
      expect(loadingMessage).toBeInTheDocument();
    });

    it('announces empty state', () => {
      render(<Command commands={[]} open />);
      
      const emptyMessage = screen.getByText('No commands found');
      expect(emptyMessage).toBeInTheDocument();
    });
  });

  // displayName test
  describe('Component Meta', () => {
    it('has correct displayName', () => {
      expect(Command.displayName).toBe('Command');
    });
  });
});
