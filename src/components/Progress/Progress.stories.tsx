import type { Meta, StoryObj } from '@storybook/react';
import { Progress, Spinner } from './Progress';
import { Button } from '../Button/Button';
import React, { useState, useEffect } from 'react';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Progress indicators show the completion status of a task or process.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        defaultValue: { summary: 100 },
      },
    },
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
      description: 'Progress variant',
      table: {
        defaultValue: { summary: 'linear' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
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
  },
  args: {
    value: 60,
    variant: 'linear',
    size: 'medium',
    color: 'primary',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {
  args: {
    value: 60,
    variant: 'linear',
  },
};

export const Circular: Story = {
  args: {
    value: 60,
    variant: 'circular',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>Linear</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Progress value={60} size="small" />
          <Progress value={60} size="medium" />
          <Progress value={60} size="large" />
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0' }}>Circular</h4>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Progress value={60} variant="circular" size="small" />
          <Progress value={60} variant="circular" size="medium" />
          <Progress value={60} variant="circular" size="large" />
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Progress value={60} color="primary" />
      <Progress value={70} color="success" />
      <Progress value={40} color="warning" />
      <Progress value={20} color="error" />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Progress value={75} showLabel />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Progress value={25} variant="circular" size="small" showLabel />
        <Progress value={50} variant="circular" size="medium" showLabel />
        <Progress value={75} variant="circular" size="large" showLabel />
      </div>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
      <Progress indeterminate />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Progress variant="circular" indeterminate size="small" />
        <Progress variant="circular" indeterminate size="medium" />
        <Progress variant="circular" indeterminate size="large" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleStart = () => {
      setValue(0);
      setLoading(true);

      const interval = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    };

    const handleReset = () => {
      setValue(0);
      setLoading(false);
    };

    return (
      <div style={{ width: '400px' }}>
        <Progress value={value} showLabel color={value === 100 ? 'success' : 'primary'} />
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <Button onClick={handleStart} disabled={loading}>
            {loading ? 'Processing...' : 'Start'}
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {value === 100 && (
          <p style={{ marginTop: '16px', color: '#00AF4B' }}>✓ Process completed successfully!</p>
        )}
      </div>
    );
  },
};

export const SpinnerVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="small" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="medium" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner size="large" />
        <p style={{ marginTop: '8px', fontSize: '12px' }}>Large</p>
      </div>
    </div>
  ),
};

export const SpinnerColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Spinner color="primary" />
      <div style={{ padding: '12px', backgroundColor: '#2272B4', borderRadius: '4px' }}>
        <Spinner color="white" />
      </div>
      <div style={{ color: '#00AF4B' }}>
        <Spinner color="inherit" />
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const simulateLoad = (setLoading: (value: boolean) => void) => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
        <div style={{
          padding: '16px',
          border: '1px solid #DDE0E5',
          borderRadius: '4px',
          position: 'relative',
        }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Loading Content</h4>
          {loading1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
              <Spinner size="large" />
              <p style={{ marginTop: '12px', color: '#6B7280' }}>Loading data...</p>
            </div>
          ) : (
            <p>Content loaded successfully!</p>
          )}
          <Button
            onClick={() => simulateLoad(setLoading1)}
            disabled={loading1}
            style={{ marginTop: '12px' }}
          >
            Load Content
          </Button>
        </div>

        <div style={{
          padding: '16px',
          border: '1px solid #DDE0E5',
          borderRadius: '4px',
        }}>
          <h4 style={{ margin: '0 0 8px 0' }}>Processing Task</h4>
          {loading2 ? (
            <Progress indeterminate color="primary" />
          ) : (
            <Progress value={100} color="success" />
          )}
          <Button
            onClick={() => simulateLoad(setLoading2)}
            disabled={loading2}
            style={{ marginTop: '12px' }}
          >
            Start Task
          </Button>
        </div>
      </div>
    );
  },
};

export const RealWorldExample: Story = {
  render: () => {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [files] = useState([
      { name: 'data-analysis.ipynb', size: '2.4 MB' },
      { name: 'model-training.py', size: '156 KB' },
      { name: 'dataset.csv', size: '45.8 MB' },
    ]);

    const handleUpload = () => {
      setUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 300);
    };

    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: '500px',
      }}>
        <h3 style={{ margin: '0 0 16px 0' }}>File Upload</h3>

        <div style={{
          backgroundColor: 'white',
          border: '1px solid #DDE0E5',
          borderRadius: '4px',
          padding: '16px',
        }}>
          <div style={{ marginBottom: '16px' }}>
            {files.map((file, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: index < files.length - 1 ? '1px solid #F6F7F9' : 'none',
                }}
              >
                <span style={{ fontSize: '13px' }}>{file.name}</span>
                <span style={{ fontSize: '12px', color: '#6B7280' }}>{file.size}</span>
              </div>
            ))}
          </div>

          {uploading && (
            <div style={{ marginBottom: '16px' }}>
              <Progress value={uploadProgress} showLabel color="primary" />
              <p style={{ marginTop: '8px', fontSize: '12px', color: '#6B7280' }}>
                Uploading {Math.round(uploadProgress)}% complete...
              </p>
            </div>
          )}

          {uploadProgress === 100 && !uploading && (
            <div style={{
              padding: '12px',
              backgroundColor: '#E6F7ED',
              borderRadius: '4px',
              marginBottom: '16px',
            }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#00692D' }}>
                ✓ Files uploaded successfully!
              </p>
            </div>
          )}

          <Button
            variant="primary"
            fullWidth
            onClick={handleUpload}
            disabled={uploading}
            loading={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload Files'}
          </Button>
        </div>
      </div>
    );
  },
};