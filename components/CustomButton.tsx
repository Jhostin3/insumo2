import { TouchableOpacity, ViewStyle } from 'react-native';
import { CustomText } from './ui/CustomText';
import React from 'react';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'first' | 'second';
  className?: string;
  disabled?: boolean;
  additionalStyle?: ViewStyle;
  children?: React.ReactNode;
  textColor?: string;
}

export const CustomButton = ({
  title,
  onPress,
  variant = 'first',
  className = '',
  disabled = false,
  additionalStyle,
  children,
  textColor,
}: CustomButtonProps) => {
  // 🔹 Estilo base del botón
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      width: '100%',
      paddingVertical: 16,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    };

    if (disabled) {
      return {
        ...baseStyle,
        borderWidth: 2,
        borderColor: 'transparent',
      };
    }

    if (variant === 'first') {
      return {
        ...baseStyle,
        borderWidth: 2,
        borderColor: 'white',
      };
    } else {
      return {
        ...baseStyle,
        borderWidth: 2,
        borderColor: 'transparent',
      };
    }
  };

  // 🔹 Determina el color final del texto
  const finalTextColor = textColor
    ? textColor
    : variant === 'second'
    ? 'red'
    : 'white';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={className}
      style={[
        getButtonStyle(),
        additionalStyle,
        disabled && { opacity: 0.5 },
      ]}
      activeOpacity={0.8}
    >
      {/* Icono u otros hijos */}
      {children}

      {/* Texto principal del botón */}
      <CustomText
        size="button"
        color={finalTextColor} // ✅ ahora acepta cualquier string de color
        bold
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};
