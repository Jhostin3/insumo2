import { TouchableOpacity, ViewStyle } from 'react-native'; //Poner opacidad al tocar,  aplicar estilos al view
import { CustomText } from './ui/CustomText';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'first' | 'second';
    className?: string;
    disabled?: boolean;
    additionalStyle?: ViewStyle; // Added for extra styling like margins
}
export const CustomButton = ({ 
    title, 
    onPress, 
    variant = 'first',
    className = '',
    disabled = false,
    additionalStyle
  }: CustomButtonProps) => {
    const getButtonStyle = (): ViewStyle => {
      const baseStyle: ViewStyle = {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      };
      if (disabled) {
        return {
          ...baseStyle,
          backgroundColor: '#D1D5DB',
          borderWidth: 2,
          borderColor: 'transparent',
        };
      }
      if (variant === 'first') {
        return {
          ...baseStyle,
          backgroundColor: '#991B1B',
          borderWidth: 2,
          borderColor: 'white',
        };
      } else {
        return {
          ...baseStyle,
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: 'transparent',
        };
      }
    };
    const textColor = variant === 'second' ? 'red' : 'white';
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          getButtonStyle(),
          additionalStyle,
          disabled && { opacity: 0.5 }
        ]}
        activeOpacity={0.8}
      >
        <CustomText size="button" color={textColor} bold>
          {title}
        </CustomText>
      </TouchableOpacity>
    );
  };