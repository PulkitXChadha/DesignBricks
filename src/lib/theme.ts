/**
 * Theme utilities for Databricks Design System
 * Supports both light and dark themes with dark as the primary theme
 */

import React from 'react';

export type Theme = 'light' | 'dark' | 'auto';

/**
 * Theme detection and management utilities
 */
export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: Theme = 'auto';
  private listeners: Set<(_theme: Theme) => void> = new Set();

  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeTheme();
      this.setupMediaQueryListener();
    }
  }

  /**
   * Initialize theme based on saved preference or system preference
   */
  private initializeTheme(): void {
    const savedTheme = this.getSavedTheme();
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // Default to 'auto' which will detect system preference
      this.setTheme('auto');
    }
  }

  /**
   * Get saved theme from localStorage
   */
  private getSavedTheme(): Theme | null {
    try {
      const saved = localStorage.getItem('db-theme');
      return saved as Theme;
    } catch {
      return null;
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveTheme(theme: Theme): void {
    try {
      localStorage.setItem('db-theme', theme);
    } catch {
      // Ignore localStorage errors
    }
  }

  /**
   * Set up media query listener for system preference changes
   */
  private setupMediaQueryListener(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (this.currentTheme === 'auto') {
        this.applyTheme(this.getEffectiveTheme());
        this.notifyListeners(this.currentTheme);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Legacy browsers
      mediaQuery.addListener(handleChange);
    }
  }

  /**
   * Set the current theme
   */
  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.saveTheme(theme);
    this.applyTheme(this.getEffectiveTheme());
    this.notifyListeners(theme);
  }

  /**
   * Get the current theme setting
   */
  getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get the effective theme (resolves 'auto' to 'light' or 'dark')
   */
  getEffectiveTheme(): 'light' | 'dark' {
    if (this.currentTheme === 'auto') {
      return this.getSystemPreference();
    }
    return this.currentTheme;
  }

  /**
   * Get system color scheme preference
   */
  private getSystemPreference(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
      return 'light';
    }
    
    // Check for system preference, defaulting to dark (Databricks approach)
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  /**
   * Apply theme to document
   */
  private applyTheme(theme: 'light' | 'dark'): void {
    if (typeof document === 'undefined') return;

    const { body, documentElement } = document;

    // Remove existing theme classes
    body.classList.remove('light-mode', 'dark-mode');
    documentElement.classList.remove('light-mode', 'dark-mode');
    
    // Remove existing data-theme attributes
    documentElement.removeAttribute('data-theme');

    // Apply new theme - following Databricks pattern
    if (theme === 'dark') {
      body.classList.add('dark-mode', 'dark-mode-supported');
      documentElement.classList.add('dark-mode');
      documentElement.setAttribute('data-theme', 'dark');
    } else {
      body.classList.add('light-mode', 'dark-mode-supported');
      documentElement.classList.add('light-mode');
      documentElement.setAttribute('data-theme', 'light');
    }
  }

  /**
   * Toggle between light and dark theme (not auto)
   */
  toggleTheme(): void {
    const currentEffective = this.getEffectiveTheme();
    const newTheme = currentEffective === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Add theme change listener
   */
  addListener(listener: (_theme: Theme) => void): void {
    this.listeners.add(listener);
  }

  /**
   * Remove theme change listener
   */
  removeListener(listener: (_theme: Theme) => void): void {
    this.listeners.delete(listener);
  }

  /**
   * Notify all listeners of theme change
   */
  private notifyListeners(theme: Theme): void {
    this.listeners.forEach(listener => listener(theme));
  }

  /**
   * Check if current effective theme is dark
   */
  isDarkMode(): boolean {
    return this.getEffectiveTheme() === 'dark';
  }

  /**
   * Check if current effective theme is light
   */
  isLightMode(): boolean {
    return this.getEffectiveTheme() === 'light';
  }

  /**
   * Get CSS class name for current theme
   */
  getThemeClassName(): string {
    return this.getEffectiveTheme() === 'dark' ? 'dark-mode' : 'light-mode';
  }
}

/**
 * Default theme manager instance
 */
export const themeManager = ThemeManager.getInstance();

/**
 * React hook for theme management (if using React)
 */
export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(themeManager.getTheme());
  const [effectiveTheme, setEffectiveTheme] = React.useState<'light' | 'dark'>(
    themeManager.getEffectiveTheme()
  );

  React.useEffect(() => {
    const handleThemeChange = (newTheme: Theme) => {
      setTheme(newTheme);
      setEffectiveTheme(themeManager.getEffectiveTheme());
    };

    themeManager.addListener(handleThemeChange);
    return () => themeManager.removeListener(handleThemeChange);
  }, []);

  return {
    theme,
    effectiveTheme,
    setTheme: themeManager.setTheme.bind(themeManager),
    toggleTheme: themeManager.toggleTheme.bind(themeManager),
    isDarkMode: themeManager.isDarkMode.bind(themeManager),
    isLightMode: themeManager.isLightMode.bind(themeManager),
  };
}

// Helper functions for direct usage
export const setTheme = (_theme: Theme) => themeManager.setTheme(_theme);
export const getTheme = () => themeManager.getTheme();
export const getEffectiveTheme = () => themeManager.getEffectiveTheme();
export const toggleTheme = () => themeManager.toggleTheme();
export const isDarkMode = () => themeManager.isDarkMode();
export const isLightMode = () => themeManager.isLightMode();
