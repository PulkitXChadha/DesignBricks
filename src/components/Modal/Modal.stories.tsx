import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import React, { useState } from 'react';

const meta = {
  title: 'Overlays/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Modals are overlays that require user interaction before they can be dismissed.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Open state',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Modal size',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    closeButton: {
      control: 'boolean',
      description: 'Show close button',
      table: {
        defaultValue: { summary: true },
      },
    },
    disableBackdropClick: {
      control: 'boolean',
      description: 'Prevent closing on backdrop click',
      table: {
        defaultValue: { summary: false },
      },
    },
    disableEscapeKey: {
      control: 'boolean',
      description: 'Prevent closing on Escape key',
      table: {
        defaultValue: { summary: false },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Close handler',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Basic Modal"
        >
          <p>This is a basic modal with a title and close button.</p>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smallOpen, setSmallOpen] = useState(false);
    const [mediumOpen, setMediumOpen] = useState(false);
    const [largeOpen, setLargeOpen] = useState(false);
    const [fullscreenOpen, setFullscreenOpen] = useState(false);

    return (
      <>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
          <Button onClick={() => setMediumOpen(true)}>Medium Modal</Button>
          <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
          <Button onClick={() => setFullscreenOpen(true)}>Fullscreen Modal</Button>
        </div>

        <Modal
          open={smallOpen}
          onClose={() => setSmallOpen(false)}
          title="Small Modal"
          size="small"
        >
          <p>This is a small modal, perfect for simple confirmations.</p>
        </Modal>

        <Modal
          open={mediumOpen}
          onClose={() => setMediumOpen(false)}
          title="Medium Modal"
          size="medium"
        >
          <p>This is a medium modal, the default size for most use cases.</p>
          <p>It provides a good balance between content space and focus.</p>
        </Modal>

        <Modal
          open={largeOpen}
          onClose={() => setLargeOpen(false)}
          title="Large Modal"
          size="large"
        >
          <p>This is a large modal, suitable for complex forms or detailed content.</p>
          <p>It provides more space for content while still maintaining focus.</p>
          <p>Use this size when you need to display tables, multiple form sections, or detailed information.</p>
        </Modal>

        <Modal
          open={fullscreenOpen}
          onClose={() => setFullscreenOpen(false)}
          title="Fullscreen Modal"
          size="fullscreen"
        >
          <p>This is a fullscreen modal that takes up most of the viewport.</p>
          <p>Use this for immersive experiences or when you need maximum space.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Footer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="tertiary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
          <p>This action cannot be undone.</p>
        </Modal>
      </>
    );
  },
};

export const Form: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      setOpen(false);
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Contact Form"
          footer={
            <>
              <Button variant="tertiary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              fullWidth
            />
            <TextField
              label="Message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              fullWidth
            />
          </div>
        </Modal>
      </>
    );
  },
};

export const NoBackdropClick: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Important Action"
          disableBackdropClick
          disableEscapeKey
          footer={
            <Button variant="primary" onClick={() => setOpen(false)}>
              I Understand
            </Button>
          }
        >
          <p>This modal cannot be closed by clicking outside or pressing Escape.</p>
          <p>You must click the button below to proceed.</p>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Processing"
          closeButton={false}
          disableBackdropClick
          disableEscapeKey
        >
          <p>Please wait while we process your request...</p>
          <p>This modal will close automatically when complete.</p>
          <Button
            variant="secondary"
            onClick={() => setOpen(false)}
            style={{ marginTop: '16px' }}
          >
            Cancel Operation
          </Button>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Scrollable Content</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Terms and Conditions"
          size="large"
          footer={
            <>
              <Button variant="tertiary" onClick={() => setOpen(false)}>
                Decline
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Accept
              </Button>
            </>
          }
        >
          <h3>1. Introduction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <h3>2. Terms of Use</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h3>3. Privacy Policy</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>

          <h3>4. Data Protection</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
          <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

          <h3>5. Limitations</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

          <h3>6. Contact Information</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        </Modal>
      </>
    );
  },
};