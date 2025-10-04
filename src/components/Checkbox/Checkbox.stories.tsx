import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React from 'react';

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkboxes allow users to select multiple options from a set.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Checkbox size',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: {
        defaultValue: { summary: false },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state',
      table: {
        defaultValue: { summary: false },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text below checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
    onChange: {
      action: 'changed',
      description: 'Change handler',
    },
  },
  args: {
    label: 'Checkbox',
    size: 'medium',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'I agree to the terms and conditions',
  },
};

export const Basic: Story = {
  args: {
    label: 'Basic checkbox',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox size="small" label="Small checkbox" />
      <Checkbox size="medium" label="Medium checkbox" />
      <Checkbox size="large" label="Large checkbox" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different checkbox sizes.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
      <Checkbox label="Error state" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various checkbox states.',
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox
        label="Accept terms"
        error
        helperText="You must accept the terms to continue"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with error state and helper text.',
      },
    },
  },
};

const CheckboxGroupComponent = () => {
  const [selected, setSelected] = React.useState<string[]>(['option2']);

  const handleChange = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, option]);
    } else {
      setSelected(selected.filter(item => item !== option));
    }
  };

  return (
    <div>
      <h4 style={{ margin: '0 0 12px 0' }}>Select your preferences:</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox
          label="Email notifications"
          checked={selected.includes('option1')}
          onChange={handleChange('option1')}
        />
        <Checkbox
          label="SMS notifications"
          checked={selected.includes('option2')}
          onChange={handleChange('option2')}
        />
        <Checkbox
          label="Push notifications"
          checked={selected.includes('option3')}
          onChange={handleChange('option3')}
        />
        <Checkbox
          label="Marketing emails"
          checked={selected.includes('option4')}
          onChange={handleChange('option4')}
          helperText="Receive updates about new features and promotions"
        />
      </div>
      <p style={{ marginTop: '16px', fontSize: '13px', color: '#6B7280' }}>
        Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
      </p>
    </div>
  );
};

export const CheckboxGroup: Story = {
  render: () => <CheckboxGroupComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes working together as a group.',
      },
    },
  },
};

const IndeterminateExampleComponent = () => {
  const [parentChecked, setParentChecked] = React.useState(false);
  const [parentIndeterminate, setParentIndeterminate] = React.useState(false);
  const [childChecked, setChildChecked] = React.useState([false, false, false]);

  React.useEffect(() => {
    const allChecked = childChecked.every(Boolean);
    const someChecked = childChecked.some(Boolean);

    setParentChecked(allChecked);
    setParentIndeterminate(someChecked && !allChecked);
  }, [childChecked]);

  const handleParentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setParentChecked(checked);
    setChildChecked([checked, checked, checked]);
    setParentIndeterminate(false);
  };

  const handleChildChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChildChecked = [...childChecked];
    newChildChecked[index] = e.target.checked;
    setChildChecked(newChildChecked);
  };

  return (
    <div>
      <Checkbox
        label="Select all"
        checked={parentChecked}
        indeterminate={parentIndeterminate}
        onChange={handleParentChange}
      />
      <div style={{ marginLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="Option 1"
          checked={childChecked[0]}
          onChange={handleChildChange(0)}
        />
        <Checkbox
          label="Option 2"
          checked={childChecked[1]}
          onChange={handleChildChange(1)}
        />
        <Checkbox
          label="Option 3"
          checked={childChecked[2]}
          onChange={handleChildChange(2)}
        />
      </div>
    </div>
  );
};

export const IndeterminateExample: Story = {
  render: () => <IndeterminateExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Indeterminate state example with parent-child checkboxes.',
      },
    },
  },
};

const FormExampleComponent = () => {
  const [formData, setFormData] = React.useState({
    terms: false,
    newsletter: false,
    updates: false,
  });

  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.terms) {
      setErrors({ terms: true });
      return;
    }

    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.checked });
    setErrors({ ...errors, [field]: false });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
      <h4 style={{ margin: '0 0 16px 0' }}>Complete your registration</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <Checkbox
          label="I accept the terms and conditions"
          checked={formData.terms}
          onChange={handleChange('terms')}
          error={errors.terms}
          helperText={errors.terms ? 'You must accept the terms to continue' : undefined}
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={handleChange('newsletter')}
          helperText="Get weekly updates about new features"
        />
        <Checkbox
          label="Receive product updates"
          checked={formData.updates}
          onChange={handleChange('updates')}
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
        story: 'Checkboxes in a form with validation.',
      },
    },
  },
};