import React from 'react';
import { colors } from '../../tokens/colors';
import './Colors.css';

export interface ColorsProps {
  /** Category of colors to display */
  category?: keyof typeof colors;
  /** Whether to show hex values */
  showHex?: boolean;
  /** Whether to show all categories */
  showAll?: boolean;
}

export const Colors: React.FC<ColorsProps> = ({ 
  category, 
  showHex = true, 
  showAll = false 
}) => {
  const renderColorPalette = (colorCategory: keyof typeof colors, categoryName: string) => {
    const palette = colors[colorCategory];
    
    return (
      <div key={colorCategory} className="db-colors-category">
        <h3 className="db-colors-category__title">{categoryName}</h3>
        <div className="db-colors-palette">
          {Object.entries(palette).map(([shade, value]) => (
            <div key={shade} className="db-colors-swatch">
              <div 
                className="db-colors-swatch__color"
                style={{ backgroundColor: value }}
                title={`${categoryName} ${shade}: ${value}`}
              />
              <div className="db-colors-swatch__info">
                <span className="db-colors-swatch__shade">{shade}</span>
                {showHex && (
                  <span className="db-colors-swatch__hex">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const categoryNames = {
    primary: 'Primary',
    secondary: 'Secondary',
    neutral: 'Neutral',
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
    info: 'Info',
    // Secondary Colors
    brown: 'Brown',
    coral: 'Coral',
    indigo: 'Indigo',
    lemon: 'Lemon',
    lime: 'Lime',
    pink: 'Pink',
    purple: 'Purple',
    teal: 'Teal',
    turquoise: 'Turquoise',
  };

  if (showAll || !category) {
    return (
      <div className="db-colors">
        <div className="db-colors-header">
          <h2>Databricks Design System Colors</h2>
          <p>Official color palette from the Databricks design system with primary blue, semantic colors, and secondary accent colors</p>
        </div>
        {Object.entries(categoryNames).map(([key, name]) => 
          renderColorPalette(key as keyof typeof colors, name)
        )}
      </div>
    );
  }

  return (
    <div className="db-colors">
      {renderColorPalette(category, categoryNames[category])}
    </div>
  );
};

Colors.displayName = 'Colors';
