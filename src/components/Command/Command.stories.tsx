import type { Meta, StoryObj } from '@storybook/react';
import { Command, useCommand, type CommandItem } from './Command';
import { useState } from 'react';

const meta: Meta<typeof Command> = {
  title: 'Overlays/Command',
  component: Command,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    commands: {
      control: false,
      description: 'Array of command items',
    },
    open: {
      control: 'boolean',
      description: 'Whether the command palette is open',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for search input',
    },
    showShortcuts: {
      control: 'boolean',
      description: 'Whether to show keyboard shortcuts',
    },
    groupCommands: {
      control: 'boolean',
      description: 'Whether to group commands by category',
    },
    maxResults: {
      control: 'number',
      description: 'Maximum number of results to show',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCommands: CommandItem[] = [
  {
    id: 'new-file',
    label: 'New File',
    description: 'Create a new file',
    icon: '📄',
    shortcut: ['Cmd', 'N'],
    group: 'File',
    onSelect: () => console.log('New file created'),
  },
  {
    id: 'open-file',
    label: 'Open File',
    description: 'Open an existing file',
    icon: '📂',
    shortcut: ['Cmd', 'O'],
    group: 'File',
    onSelect: () => console.log('File opened'),
  },
  {
    id: 'save-file',
    label: 'Save File',
    description: 'Save the current file',
    icon: '💾',
    shortcut: ['Cmd', 'S'],
    group: 'File',
    onSelect: () => console.log('File saved'),
  },
  {
    id: 'copy',
    label: 'Copy',
    description: 'Copy selected content to clipboard',
    icon: '📋',
    shortcut: ['Cmd', 'C'],
    group: 'Edit',
    onSelect: () => console.log('Content copied'),
  },
  {
    id: 'paste',
    label: 'Paste',
    description: 'Paste content from clipboard',
    icon: '📄',
    shortcut: ['Cmd', 'V'],
    group: 'Edit',
    onSelect: () => console.log('Content pasted'),
  },
  {
    id: 'undo',
    label: 'Undo',
    description: 'Undo the last action',
    icon: '↶',
    shortcut: ['Cmd', 'Z'],
    group: 'Edit',
    onSelect: () => console.log('Action undone'),
  },
  {
    id: 'find',
    label: 'Find in File',
    description: 'Search for text in the current file',
    icon: '🔍',
    shortcut: ['Cmd', 'F'],
    group: 'Search',
    onSelect: () => console.log('Find dialog opened'),
  },
  {
    id: 'find-replace',
    label: 'Find and Replace',
    description: 'Search and replace text in the current file',
    icon: '🔄',
    shortcut: ['Cmd', 'Shift', 'F'],
    group: 'Search',
    onSelect: () => console.log('Find and replace opened'),
  },
  {
    id: 'settings',
    label: 'Open Settings',
    description: 'Open application settings',
    icon: '⚙️',
    shortcut: ['Cmd', ','],
    group: 'Tools',
    onSelect: () => console.log('Settings opened'),
  },
  {
    id: 'command-palette',
    label: 'Command Palette',
    description: 'Show all available commands',
    icon: '🎯',
    shortcut: ['Cmd', 'K'],
    group: 'Tools',
    disabled: true,
    onSelect: () => console.log('Command palette opened'),
  },
];

const databricksCommands: CommandItem[] = [
  {
    id: 'new-notebook',
    label: 'New Notebook',
    description: 'Create a new notebook',
    icon: '📓',
    shortcut: ['Cmd', 'N'],
    group: 'Workspace',
    keywords: ['create', 'notebook', 'python', 'scala', 'sql'],
    onSelect: () => console.log('New notebook created'),
  },
  {
    id: 'new-cluster',
    label: 'Create Cluster',
    description: 'Create a new compute cluster',
    icon: '☁️',
    group: 'Compute',
    keywords: ['cluster', 'compute', 'spark'],
    onSelect: () => console.log('New cluster created'),
  },
  {
    id: 'sql-editor',
    label: 'Open SQL Editor',
    description: 'Open the SQL editor',
    icon: '🗄️',
    shortcut: ['Cmd', 'Shift', 'S'],
    group: 'SQL',
    keywords: ['sql', 'query', 'database'],
    onSelect: () => console.log('SQL editor opened'),
  },
  {
    id: 'create-table',
    label: 'Create Table',
    description: 'Create a new table in the catalog',
    icon: '🗂️',
    group: 'Data',
    keywords: ['table', 'catalog', 'schema', 'database'],
    onSelect: () => console.log('Create table dialog opened'),
  },
  {
    id: 'ml-experiment',
    label: 'New ML Experiment',
    description: 'Create a machine learning experiment',
    icon: '🧪',
    group: 'AI/ML',
    keywords: ['ml', 'machine learning', 'experiment', 'mlflow'],
    onSelect: () => console.log('ML experiment created'),
  },
  {
    id: 'dashboard',
    label: 'Create Dashboard',
    description: 'Create a new dashboard',
    icon: '📊',
    group: 'Analytics',
    keywords: ['dashboard', 'visualization', 'chart', 'report'],
    onSelect: () => console.log('Dashboard created'),
  },
  {
    id: 'job',
    label: 'Create Job',
    description: 'Schedule a new job',
    icon: '⏰',
    group: 'Workflows',
    keywords: ['job', 'schedule', 'workflow', 'automation'],
    onSelect: () => console.log('Job created'),
  },
  {
    id: 'repo-clone',
    label: 'Clone Repository',
    description: 'Clone a Git repository',
    icon: '🔗',
    group: 'Version Control',
    keywords: ['git', 'clone', 'repository', 'version control'],
    onSelect: () => console.log('Repository clone dialog opened'),
  },
];

export const Default: Story = {
  args: {
    commands: sampleCommands,
    open: true,
  },
};

export const DatabricksStyle: Story = {
  args: {
    commands: databricksCommands,
    open: true,
    placeholder: 'Search data, notebooks, and more...',
  },
};

export const WithoutShortcuts: Story = {
  args: {
    commands: sampleCommands,
    open: true,
    showShortcuts: false,
  },
};

export const WithoutGroups: Story = {
  args: {
    commands: sampleCommands,
    open: true,
    groupCommands: false,
  },
};

export const Loading: Story = {
  args: {
    commands: [],
    open: true,
    loading: true,
  },
};

export const LimitedResults: Story = {
  args: {
    commands: databricksCommands,
    open: true,
    maxResults: 5,
  },
};

// Interactive example
export const Interactive: Story = {
  render: function InteractiveCommand() {
    const { isOpen, toggle, close } = useCommand();
    const [lastCommand, setLastCommand] = useState<string>('');
    
    const commandsWithActions = sampleCommands.map(cmd => ({
      ...cmd,
      onSelect: () => {
        setLastCommand(cmd.label);
        close();
      },
    }));
    
    return (
      <div style={{ padding: '20px', minHeight: '400px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={toggle}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007acc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '16px',
            }}
          >
            Open Command Palette
          </button>
          
          <div style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Or press <kbd style={{ background: '#f0f0f0', padding: '2px 4px', borderRadius: '3px' }}>Cmd/Ctrl + K</kbd>
          </div>
          
          {lastCommand && (
            <div style={{ 
              padding: '12px', 
              backgroundColor: '#f0f8ff', 
              borderRadius: '6px',
              border: '1px solid #bee5eb'
            }}>
              <strong>Last command:</strong> {lastCommand}
            </div>
          )}
        </div>
        
        <Command
          commands={commandsWithActions}
          open={isOpen}
          onOpenChange={close}
        />
      </div>
    );
  },
};

// Advanced search example
export const AdvancedSearch: Story = {
  render: function AdvancedSearchCommand() {
    const [isOpen, setIsOpen] = useState(true);
    
    // Custom filter that highlights matching text and searches keywords
    const customFilter = (commands: CommandItem[], query: string): CommandItem[] => {
      if (!query.trim()) return commands;
      
      const lowerQuery = query.toLowerCase();
      return commands
        .filter(command => {
          const searchText = [
            command.label,
            command.description,
            ...(command.keywords || []),
            command.group
          ].join(' ').toLowerCase();
          
          // Support multi-word search
          const queryWords = lowerQuery.split(' ').filter(Boolean);
          return queryWords.every(word => searchText.includes(word));
        })
        .sort((a, b) => {
          // Prioritize exact label matches
          const aLabelMatch = a.label.toLowerCase().includes(lowerQuery);
          const bLabelMatch = b.label.toLowerCase().includes(lowerQuery);
          
          if (aLabelMatch && !bLabelMatch) return -1;
          if (!aLabelMatch && bLabelMatch) return 1;
          
          return a.label.localeCompare(b.label);
        });
    };
    
    return (
      <div style={{ padding: '20px', position: 'relative', minHeight: '500px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007acc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Try Advanced Search
          </button>
          
          <div style={{ fontSize: '14px', color: '#666', marginTop: '12px' }}>
            Try searches like: "new notebook", "sql table", "ml experiment", "dashboard"
          </div>
        </div>
        
        <Command
          commands={databricksCommands}
          open={isOpen}
          onOpenChange={setIsOpen}
          filter={customFilter}
          placeholder="Search with keywords (try 'ml experiment' or 'sql table')..."
        />
      </div>
    );
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    commands: sampleCommands.slice(0, 6),
    open: true,
    className: 'custom-command-palette',
    style: {
      '--color-primary': '#6366f1',
      '--color-primary-bg': '#f0f0ff',
    } as React.CSSProperties,
  },
};

