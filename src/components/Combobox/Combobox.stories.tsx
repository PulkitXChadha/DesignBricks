import type { Meta, StoryObj } from '@storybook/react';
import { Combobox, type ComboboxOption } from './Combobox';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'Inputs/Combobox',
  component: Combobox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of options to display',
    },
    value: {
      control: 'text',
      description: 'Current value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading state',
    },
    maxOptions: {
      control: 'number',
      description: 'Maximum number of options to display',
    },
    allowCreate: {
      control: 'boolean',
      description: 'Whether to allow creating new options',
    },
    showAllOnFocus: {
      control: 'boolean',
      description: 'Whether to show all options when focused',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions: ComboboxOption[] = [
  {
    value: 'apple',
    label: 'Apple',
    description: 'A crisp, sweet fruit',
    icon: '🍎',
  },
  {
    value: 'banana',
    label: 'Banana',
    description: 'A yellow tropical fruit',
    icon: '🍌',
  },
  {
    value: 'cherry',
    label: 'Cherry',
    description: 'A small, red stone fruit',
    icon: '🍒',
  },
  {
    value: 'date',
    label: 'Date',
    description: 'A sweet, brown fruit',
    icon: '📅',
    disabled: true,
  },
  {
    value: 'elderberry',
    label: 'Elderberry',
    description: 'A dark purple berry',
    icon: '🫐',
  },
];

const categorizedOptions: ComboboxOption[] = [
  {
    value: 'apple',
    label: 'Apple',
    description: 'A crisp, sweet fruit',
    category: 'Fruits',
    icon: '🍎',
  },
  {
    value: 'banana',
    label: 'Banana', 
    description: 'A yellow tropical fruit',
    category: 'Fruits',
    icon: '🍌',
  },
  {
    value: 'carrot',
    label: 'Carrot',
    description: 'An orange root vegetable',
    category: 'Vegetables',
    icon: '🥕',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
    description: 'A green cruciferous vegetable',
    category: 'Vegetables',
    icon: '🥦',
  },
  {
    value: 'chicken',
    label: 'Chicken',
    description: 'Lean white meat',
    category: 'Proteins',
    icon: '🐔',
  },
  {
    value: 'salmon',
    label: 'Salmon',
    description: 'A pink fish rich in omega-3',
    category: 'Proteins',
    icon: '🐟',
  },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select a fruit...',
  },
};

export const WithValue: Story = {
  args: {
    options: sampleOptions,
    value: 'apple',
    placeholder: 'Select a fruit...',
  },
};

export const Loading: Story = {
  args: {
    options: [],
    loading: true,
    placeholder: 'Searching...',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Select a fruit...',
  },
};

export const WithCategories: Story = {
  args: {
    options: categorizedOptions,
    placeholder: 'Search foods...',
  },
};

export const AllowCreate: Story = {
  args: {
    options: sampleOptions,
    allowCreate: true,
    placeholder: 'Search or create...',
  },
};

export const ShowAllOnFocus: Story = {
  args: {
    options: sampleOptions,
    showAllOnFocus: true,
    placeholder: 'Click to see all options...',
  },
};

export const LimitedOptions: Story = {
  args: {
    options: [
      ...sampleOptions,
      { value: 'fig', label: 'Fig', description: 'A sweet purple fruit' },
      { value: 'grape', label: 'Grape', description: 'Small round berries' },
      { value: 'kiwi', label: 'Kiwi', description: 'A fuzzy brown fruit' },
      { value: 'lemon', label: 'Lemon', description: 'A sour yellow citrus' },
      { value: 'mango', label: 'Mango', description: 'A tropical orange fruit' },
    ],
    maxOptions: 5,
    placeholder: 'Search fruits (max 5 shown)...',
  },
};

// Interactive example
export const Interactive: Story = {
  render: function InteractiveCombobox() {
    const [selectedValue, setSelectedValue] = useState('');
    const [options, setOptions] = useState(sampleOptions);
    
    const handleSelect = (option: ComboboxOption) => {
      setSelectedValue(option.value);
      console.log('Selected:', option);
    };
    
    const handleCreate = (value: string) => {
      const newOption: ComboboxOption = {
        value: value.toLowerCase().replace(/\s+/g, '-'),
        label: value,
        description: `Custom option: ${value}`,
        icon: '✨',
      };
      setOptions(prev => [...prev, newOption]);
      setSelectedValue(newOption.value);
      console.log('Created:', newOption);
    };
    
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Combobox
          options={options}
          value={selectedValue}
          onChange={setSelectedValue}
          onSelect={handleSelect}
          onCreate={handleCreate}
          allowCreate
          placeholder="Search or create a fruit..."
        />
        
        {selectedValue && (
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            <strong>Selected:</strong> {selectedValue}
          </div>
        )}
        
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          <p>Try typing "orange" and creating a new option, or search for existing fruits.</p>
          <p>Use arrow keys to navigate, Enter to select, Escape to close.</p>
        </div>
      </div>
    );
  },
};

// Search example with async behavior
export const AsyncSearch: Story = {
  render: function AsyncSearchCombobox() {
    const [query, setQuery] = useState('');
    const [options, setOptions] = useState<ComboboxOption[]>([]);
    const [loading, setLoading] = useState(false);
    
    // Simulate API search
    const searchItems = async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setOptions([]);
        return;
      }
      
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock search results
      const allItems = [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust', 'Swift',
        'Kotlin', 'PHP', 'Scala', 'Haskell', 'Clojure', 'Erlang', 'F#', 'Dart', 'R', 'MATLAB',
      ];
      
      const filtered = allItems
        .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 6)
        .map(item => ({
          value: item.toLowerCase(),
          label: item,
          description: `${item} programming language`,
          icon: '💻',
        }));
      
      setOptions(filtered);
      setLoading(false);
    };
    
    const handleChange = (value: string) => {
      setQuery(value);
      searchItems(value);
    };
    
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Combobox
          options={options}
          value={query}
          onChange={handleChange}
          loading={loading}
          placeholder="Search programming languages..."
          emptyMessage="No languages found"
        />
        
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          <p>Start typing to search programming languages with simulated async behavior.</p>
        </div>
      </div>
    );
  },
};

