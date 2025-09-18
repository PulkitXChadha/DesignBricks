import React, { useState } from 'react';
import {
  Button,
  Typography,
  TextField,
  Checkbox,
  Alert,
  Card,
} from '../src';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowAlert(true);
    }, 2000);
  };

  return (
    <div className="app">
      <div className="container">
        <Typography variant="h1" align="center">
          DesignBricks Components
        </Typography>
        <Typography variant="body1" color="secondary" align="center">
          Databricks Design System React Components Demo
        </Typography>

        {showAlert && (
          <Alert
            severity="info"
            title="Welcome to DesignBricks!"
            onClose={() => setShowAlert(false)}
          >
            This is a demonstration of the Databricks design system components.
          </Alert>
        )}

        <div className="grid">
          {/* Login Card Example */}
          <Card variant="elevated">
            <Typography variant="h3">Sign In</Typography>
            <Typography variant="body2" color="secondary">
              Enter your credentials to access your account
            </Typography>

            <form onSubmit={handleSubmit} className="form">
              <TextField
                label="Email Address"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />

              <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
                helperText="Must be at least 8 characters"
              />

              <Checkbox
                label="Remember me"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />

              <div className="button-group">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  loading={loading}
                >
                  Sign In
                </Button>
                <Button variant="tertiary" fullWidth>
                  Forgot Password?
                </Button>
              </div>
            </form>
          </Card>

          {/* Button Variants */}
          <Card>
            <Typography variant="h4">Button Variants</Typography>
            <div className="button-examples">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="danger">Danger</Button>
            </div>

            <Typography variant="h5">Sizes</Typography>
            <div className="button-examples">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>

            <Typography variant="h5">States</Typography>
            <div className="button-examples">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
            </div>
          </Card>

          {/* Typography Examples */}
          <Card>
            <Typography variant="h4">Typography</Typography>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">
              Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body2">
              Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="caption" color="secondary">
              Caption text with secondary color
            </Typography>
            <Typography variant="overline">Overline Text</Typography>
            <Typography variant="code">const code = "example";</Typography>
          </Card>

          {/* Alert Examples */}
          <Card>
            <Typography variant="h4">Alerts</Typography>
            <div className="alert-examples">
              <Alert severity="success">
                Success! Your changes have been saved.
              </Alert>
              <Alert severity="info" title="Information">
                This is an informational message.
              </Alert>
              <Alert severity="warning" variant="outlined">
                Warning: Please review before proceeding.
              </Alert>
              <Alert severity="error" variant="filled">
                Error: Something went wrong.
              </Alert>
            </div>
          </Card>

          {/* Form Controls */}
          <Card>
            <Typography variant="h4">Form Controls</Typography>
            <div className="form-controls">
              <TextField
                label="Standard Input"
                placeholder="Enter text..."
                fullWidth
              />
              <TextField
                label="With Error"
                error="This field is required"
                fullWidth
              />
              <TextField
                label="Disabled"
                value="Disabled input"
                disabled
                fullWidth
              />
              <div className="checkbox-group">
                <Checkbox label="Option 1" />
                <Checkbox label="Option 2" checked />
                <Checkbox label="Disabled" disabled />
                <Checkbox label="Disabled Checked" checked disabled />
              </div>
            </div>
          </Card>

          {/* Card Variants */}
          <Card variant="default">
            <Typography variant="h5">Default Card</Typography>
            <Typography variant="body2" color="secondary">
              This is a default card with standard styling.
            </Typography>
          </Card>

          <Card variant="outlined">
            <Typography variant="h5">Outlined Card</Typography>
            <Typography variant="body2" color="secondary">
              This card has a more prominent border.
            </Typography>
          </Card>

          <Card variant="elevated" clickable>
            <Typography variant="h5">Elevated Clickable Card</Typography>
            <Typography variant="body2" color="secondary">
              This card has elevation and is clickable.
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;