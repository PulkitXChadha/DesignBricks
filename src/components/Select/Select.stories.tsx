import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from './Select';
import React, { useState } from 'react';

const meta = {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select component for single or multiple option selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
      description: 'Visual variant',
      table: {
        defaultValue: { summary: 'outlined' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selection',
      table: {
        defaultValue: { summary: false },
      },
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search/filter',
      table: {
        defaultValue: { summary: false },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: false },
      },
    },
    error: {
      control: 'boolean',
      description: 'Error state',
      table: {
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions: SelectOption[] = [
  { value: 'python', label: 'Python' },
  { value: 'sql', label: 'SQL' },
  { value: 'scala', label: 'Scala' },
  { value: 'r', label: 'R' },
  { value: 'java', label: 'Java' },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    return (
      <Select
        options={basicOptions}
        value={value}
        onChange={setValue}
        placeholder="Select a language"
      />
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    return (
      <Select
        options={basicOptions}
        value={value}
        onChange={setValue}
        label="Programming Language"
        placeholder="Select a language"
        helperText="Choose your primary language"
      />
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    return (
      <Select
        options={basicOptions}
        value={value}
        onChange={setValue}
        label="Programming Language"
        placeholder="Select a language"
        required
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [small, setSmall] = useState<string | number>('');
    const [medium, setMedium] = useState<string | number>('');
    const [large, setLarge] = useState<string | number>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Select
          options={basicOptions}
          value={small}
          onChange={setSmall}
          placeholder="Small select"
          size="small"
        />
        <Select
          options={basicOptions}
          value={medium}
          onChange={setMedium}
          placeholder="Medium select"
          size="medium"
        />
        <Select
          options={basicOptions}
          value={large}
          onChange={setLarge}
          placeholder="Large select"
          size="large"
        />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [outlined, setOutlined] = useState<string | number>('');
    const [filled, setFilled] = useState<string | number>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Select
          options={basicOptions}
          value={outlined}
          onChange={setOutlined}
          placeholder="Outlined variant"
          variant="outlined"
          label="Outlined"
        />
        <Select
          options={basicOptions}
          value={filled}
          onChange={setFilled}
          placeholder="Filled variant"
          variant="filled"
          label="Filled"
        />
      </div>
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    const countryOptions: SelectOption[] = [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'mx', label: 'Mexico' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'es', label: 'Spain' },
      { value: 'it', label: 'Italy' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
      { value: 'in', label: 'India' },
      { value: 'au', label: 'Australia' },
    ];

    return (
      <Select
        options={countryOptions}
        value={value}
        onChange={setValue}
        placeholder="Search for a country"
        label="Country"
        searchable
        clearable
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<(string | number)[]>([]);

    const techOptions: SelectOption[] = [
      { value: 'spark', label: 'Apache Spark' },
      { value: 'databricks', label: 'Databricks' },
      { value: 'kafka', label: 'Apache Kafka' },
      { value: 'airflow', label: 'Apache Airflow' },
      { value: 'tensorflow', label: 'TensorFlow' },
      { value: 'pytorch', label: 'PyTorch' },
      { value: 'mlflow', label: 'MLflow' },
      { value: 'docker', label: 'Docker' },
      { value: 'kubernetes', label: 'Kubernetes' },
    ];

    return (
      <Select
        options={techOptions}
        value={value}
        onChange={setValue}
        placeholder="Select technologies"
        label="Technologies"
        multiple
        searchable
        clearable
      />
    );
  },
};

export const Grouped: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    const groupedOptions: SelectOption[] = [
      { value: 'notebook', label: 'Notebook', group: 'Resources' },
      { value: 'pipeline', label: 'Pipeline', group: 'Resources' },
      { value: 'dashboard', label: 'Dashboard', group: 'Resources' },
      { value: 'catalog', label: 'Data Catalog', group: 'Data' },
      { value: 'table', label: 'Table', group: 'Data' },
      { value: 'schema', label: 'Schema', group: 'Data' },
      { value: 'cluster', label: 'Cluster', group: 'Compute' },
      { value: 'warehouse', label: 'SQL Warehouse', group: 'Compute' },
      { value: 'pool', label: 'Instance Pool', group: 'Compute' },
    ];

    return (
      <Select
        options={groupedOptions}
        value={value}
        onChange={setValue}
        placeholder="Select a resource"
        label="Resource Type"
        searchable
      />
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    const environmentOptions: SelectOption[] = [
      { value: 'dev', label: 'Development' },
      { value: 'staging', label: 'Staging' },
      { value: 'prod', label: 'Production', disabled: true },
      { value: 'test', label: 'Testing' },
      { value: 'demo', label: 'Demo', disabled: true },
    ];

    return (
      <Select
        options={environmentOptions}
        value={value}
        onChange={setValue}
        placeholder="Select environment"
        label="Environment"
        helperText="Some environments require additional permissions"
      />
    );
  },
};

export const States: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <Select
          options={basicOptions}
          placeholder="Normal state"
          label="Normal"
        />
        <Select
          options={basicOptions}
          placeholder="Disabled state"
          label="Disabled"
          disabled
          value="python"
        />
        <Select
          options={basicOptions}
          placeholder="Error state"
          label="Error"
          error
          helperText="Please select a valid option"
        />
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');

    return (
      <div style={{ width: '400px' }}>
        <Select
          options={basicOptions}
          value={value}
          onChange={setValue}
          placeholder="Full width select"
          label="Language"
          fullWidth
        />
      </div>
    );
  },
};

export const RealWorldExample: Story = {
  render: () => {
    const [cluster, setCluster] = useState<string | number>('');
    const [runtime, setRuntime] = useState<string | number>('');
    const [nodeType, setNodeType] = useState<string | number>('');

    const clusterOptions: SelectOption[] = [
      { value: 'dev-cluster', label: 'Development Cluster (2 nodes)' },
      { value: 'prod-cluster', label: 'Production Cluster (10 nodes)' },
      { value: 'ml-cluster', label: 'ML Cluster (GPU enabled)' },
      { value: 'spark-cluster', label: 'Spark Cluster (High Memory)' },
    ];

    const runtimeOptions: SelectOption[] = [
      { value: '13.3-lts', label: '13.3 LTS (includes Apache Spark 3.4.1, Scala 2.12)' },
      { value: '14.0', label: '14.0 (includes Apache Spark 3.5.0, Scala 2.12)' },
      { value: '13.3-ml', label: '13.3 LTS ML (includes TensorFlow, PyTorch)' },
      { value: '13.3-gpu', label: '13.3 LTS GPU ML (CUDA 11.8)' },
    ];

    const nodeTypeOptions: SelectOption[] = [
      { value: 'standard_ds3', label: 'Standard_DS3_v2 (4 cores, 14 GB)', group: 'General Purpose' },
      { value: 'standard_ds4', label: 'Standard_DS4_v2 (8 cores, 28 GB)', group: 'General Purpose' },
      { value: 'standard_e4', label: 'Standard_E4s_v3 (4 cores, 32 GB)', group: 'Memory Optimized' },
      { value: 'standard_e8', label: 'Standard_E8s_v3 (8 cores, 64 GB)', group: 'Memory Optimized' },
      { value: 'standard_nc6', label: 'Standard_NC6s_v3 (6 cores, 112 GB, 1 GPU)', group: 'GPU Accelerated' },
    ];

    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: '500px',
      }}>
        <h3 style={{ margin: '0 0 20px 0' }}>Cluster Configuration</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Select
            options={clusterOptions}
            value={cluster}
            onChange={setCluster}
            placeholder="Select a cluster"
            label="Cluster"
            required
            fullWidth
            clearable
          />
          <Select
            options={runtimeOptions}
            value={runtime}
            onChange={setRuntime}
            placeholder="Select Databricks runtime"
            label="Databricks Runtime"
            required
            fullWidth
            searchable
          />
          <Select
            options={nodeTypeOptions}
            value={nodeType}
            onChange={setNodeType}
            placeholder="Select node type"
            label="Worker Type"
            helperText="Choose based on your workload requirements"
            fullWidth
            searchable
          />
        </div>
      </div>
    );
  },
};