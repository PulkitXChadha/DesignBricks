import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import React from 'react';

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Text fields allow users to enter and edit text content.',
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
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the field',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Field size',
      table: {
        defaultValue: { summary: 'medium' },
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
    disabled: {
      control: 'boolean',
      description: 'Disable the field',
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
    size: 'medium',
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

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        size="small"
        label="Small"
        placeholder="Small size field"
      />
      <TextField
        size="medium"
        label="Medium"
        placeholder="Medium size field"
      />
      <TextField
        size="large"
        label="Large"
        placeholder="Large size field"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different field sizes.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextField
        label="Search"
        placeholder="Search..."
        iconBefore={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        }
      />
      <TextField
        label="Email"
        placeholder="Enter email"
        type="email"
        iconBefore={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
          </svg>
        }
      />
      <TextField
        label="Amount"
        placeholder="0.00"
        type="number"
        iconBefore={<span>$</span>}
        iconAfter={<span>USD</span>}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text fields with icons.',
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

export const FormExample: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    const [errors, setErrors] = React.useState<Record<string, string>>({});

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: e.target.value });
      setErrors({ ...errors, [field]: '' });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!values.firstName) newErrors.firstName = 'First name is required';
      if (!values.lastName) newErrors.lastName = 'Last name is required';
      if (!values.email) newErrors.email = 'Email is required';
      if (values.email && !values.email.includes('@')) newErrors.email = 'Invalid email format';
      if (!values.password) newErrors.password = 'Password is required';
      if (values.password && values.password.length < 8) newErrors.password = 'Password must be at least 8 characters';

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
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
            error={errors.firstName}
          />
          <TextField
            label="Last Name"
            required
            fullWidth
            value={values.lastName}
            onChange={handleChange('lastName')}
            error={errors.lastName}
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
            error={errors.email}
            helperText="We'll never share your email"
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
            error={errors.password}
            helperText="Must be at least 8 characters"
          />
        </div>
        <button type="submit" className="db-button db-button--primary db-button--medium">
          Submit
        </button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive form example with validation.',
      },
    },
  },
};