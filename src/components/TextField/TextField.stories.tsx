import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import React from 'react';

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'A TextField (Input) component refactored to align with the Databricks design system. Features validation states, prefix/suffix content, read-only state, and enhanced accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the field',
    },
    validationState: {
      control: 'select',
      options: [undefined, 'error', 'warning', 'success'],
      description: 'Validation state',
    },
    message: {
      control: 'text',
      description: 'Message displayed below the field (typically with validation state)',
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Field size - small = 24px, default = 32px',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Take full width of container',
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator',
      table: {
        defaultValue: { summary: false },
      },
    },
    optional: {
      control: 'boolean',
      description: 'Optional field indicator',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the field',
      table: {
        defaultValue: { summary: false },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Read-only state (focusable but not editable)',
      table: {
        defaultValue: { summary: false },
      },
    },
    showClear: {
      control: 'boolean',
      description: 'Show clear button when input has value',
      table: {
        defaultValue: { summary: false },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    size: 'default',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'name@example.com',
    type: 'email',
  },
};

export const Basic: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Password',
    type: 'password',
    description: 'Must be at least 8 characters',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description text provides additional instructions for an Input.',
      },
    },
  },
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        label="Error State"
        value="invalid-email"
        validationState="error"
        message="Please enter a valid email address"
      />
      <TextField
        label="Warning State"
        value="password123"
        validationState="warning"
        message="Consider using a stronger password"
      />
      <TextField
        label="Success State"
        value="user@example.com"
        validationState="success"
        message="Email address is valid"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input supports error, warning, and success validation states aligned with the Databricks design system.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
  },
};

export const Optional: Story = {
  args: {
    label: 'Optional Field',
    optional: true,
    placeholder: 'This field is optional',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the optional prop to explicitly mark a field as optional.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Avoid using a disabled Input whenever possible. It is low-contrast and outside the tab order.',
      },
    },
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Field',
    value: 'You can select and copy this value',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use a read-only input to help users read and copy a value they can\'t edit. Read-only inputs can still receive focus in the tab order, unlike disabled inputs.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        size="small"
        label="Small (24px height)"
        placeholder="Small size field"
      />
      <TextField
        size="default"
        label="Default (32px height)"
        placeholder="Default size field"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Two sizes are available: small (24px) for constrained spaces, and default (32px) as the standard size.',
      },
    },
  },
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        label="Search"
        placeholder="Search..."
        prefix={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        }
      />
      <TextField
        label="Email"
        placeholder="Enter email"
        type="email"
        prefix={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
        }
      />
      <TextField
        label="Amount"
        placeholder="0.00"
        type="number"
        prefix={<span>$</span>}
        suffix={<span>USD</span>}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'An Input can have prefix or suffix content (icon or text). This is most helpful when the icon is commonly recognized.',
      },
    },
  },
};

const WithClearButtonComponent = () => {
  const [value, setValue] = React.useState('You can clear this text');
  
  return (
    <div style={{ width: '300px' }}>
      <TextField
        label="Clearable Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        showClear
        placeholder="Type something..."
      />
    </div>
  );
};

export const WithClearButton: Story = {
  render: () => <WithClearButtonComponent />,
  parameters: {
    docs: {
      description: {
        story: 'When showClear is true, a clear button appears when the input has a value.',
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        label="Text"
        type="text"
        placeholder="Regular text input"
      />
      <TextField
        label="Email"
        type="email"
        placeholder="name@example.com"
      />
      <TextField
        label="Password"
        type="password"
        placeholder="Enter password"
      />
      <TextField
        label="Number"
        type="number"
        placeholder="123"
      />
      <TextField
        label="Phone"
        type="tel"
        placeholder="+1 (555) 000-0000"
      />
      <TextField
        label="URL"
        type="url"
        placeholder="https://example.com"
      />
      <TextField
        label="Search"
        type="search"
        placeholder="Search..."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input types.',
      },
    },
  },
};

const OnPressEnterComponent = () => {
  const [log, setLog] = React.useState<string[]>([]);
  
  return (
    <div style={{ width: '300px' }}>
      <TextField
        label="Press Enter to Submit"
        placeholder="Type and press Enter..."
        onPressEnter={(e) => {
          const value = e.currentTarget.value;
          setLog([...log, value]);
          e.currentTarget.value = '';
        }}
      />
      {log.length > 0 && (
        <div style={{ marginTop: '16px', fontSize: '13px' }}>
          <strong>Submitted values:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            {log.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const OnPressEnter: Story = {
  render: () => <OnPressEnterComponent />,
  parameters: {
    docs: {
      description: {
        story: 'The onPressEnter callback is triggered when the user presses Enter.',
      },
    },
  },
};

const FormExampleComponent = () => {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [validationStates, setValidationStates] = React.useState<Record<string, {
    state?: 'error' | 'warning' | 'success';
    message?: string;
  }>>({});

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: e.target.value });
      setValidationStates({ ...validationStates, [field]: {} });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newValidation: Record<string, { state: 'error' | 'warning' | 'success'; message: string }> = {};

      if (!values.firstName) {
        newValidation.firstName = { state: 'error', message: 'First name is required' };
      }
      if (!values.lastName) {
        newValidation.lastName = { state: 'error', message: 'Last name is required' };
      }
      if (!values.email) {
        newValidation.email = { state: 'error', message: 'Email is required' };
      } else if (!values.email.includes('@')) {
        newValidation.email = { state: 'error', message: 'Invalid email format' };
      }
      if (!values.password) {
        newValidation.password = { state: 'error', message: 'Password is required' };
      } else if (values.password.length < 8) {
        newValidation.password = { state: 'error', message: 'Password must be at least 8 characters' };
      }

      setValidationStates(newValidation);

      if (Object.keys(newValidation).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <TextField
            label="First Name"
            required
            fullWidth
            value={values.firstName}
            onChange={handleChange('firstName')}
            validationState={validationStates.firstName?.state}
            message={validationStates.firstName?.message}
          />
          <TextField
            label="Last Name"
            required
            fullWidth
            value={values.lastName}
            onChange={handleChange('lastName')}
            validationState={validationStates.lastName?.state}
            message={validationStates.lastName?.message}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <TextField
            label="Email"
            type="email"
            required
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
            validationState={validationStates.email?.state}
            message={validationStates.email?.message}
            description="We'll never share your email"
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
            validationState={validationStates.password?.state}
            message={validationStates.password?.message}
            description="Must be at least 8 characters"
          />
        </div>
        <button type="submit" className="db-button db-button--primary db-button--medium">
          Submit
        </button>
      </form>
  );
};

export const FormExample: Story = {
  render: () => <FormExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive form example with validation using validationState and message props.',
      },
    },
  },
};