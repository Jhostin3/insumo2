import React from 'react';
import { Text, TextStyle } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  size?: 'title' | 'subtitle' | 'body' | 'button' | 'small';
  /**
   * Puede ser un color predefinido ('white', 'red', 'gray', 'dark')
   * o cualquier string personalizado (#HEX, rgb(), etc.)
   */
  color?: 'white' | 'red' | 'gray' | 'dark' | string;
  className?: string;
  bold?: boolean;
}

export const CustomText = ({ 
  children, 
  size = 'body', 
  color = 'dark', 
  className = '',
  bold = false
}: CustomTextProps) => {

  const getStyles = (): TextStyle => {
    const styles: TextStyle = {};

    // Tamaño del texto
    switch (size) {
      case 'title':
        styles.fontSize = 36;
        styles.fontWeight = 'bold';
        break;
      case 'subtitle':
        styles.fontSize = 24;
        break;
      case 'body':
        styles.fontSize = 16;
        break;
      case 'button':
        styles.fontSize = 18;
        styles.fontWeight = '600';
        break;
      case 'small':
        styles.fontSize = 14;
        break;
    }

    // Color del texto
    switch (color) {
      case 'white':
        styles.color = '#FFFFFF';
        break;
      case 'red':
        styles.color = '#DC2626';
        break;
      case 'gray':
        styles.color = '#6B7280';
        break;
      case 'dark':
        styles.color = '#1F2937';
        break;
      default:
        // ✅ color personalizado
        styles.color = color;
        break;
    }

    // Negrita
    if (bold) {
      styles.fontWeight = 'bold';
    }

    return styles;
  };

  return (
    <Text className={className} style={getStyles()}>
      {children}
    </Text>
  );
};
