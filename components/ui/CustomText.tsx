
import React from 'react';
import { Text, TextStyle } from 'react-native';

interface CustomTextProps {
  children: React.ReactNode;
  size?: 'title' | 'subtitle' | 'body' | 'button' | 'small';
  color?: 'white' | 'red' | 'gray' | 'dark';
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
    //Tamaño
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
    //Color
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
    }
    //Negrita
    if (bold) {
      styles.fontWeight = 'bold';
    }
    return styles;
  };
  return (
    <Text style={getStyles()}>
      {children}
    </Text>
  );
};