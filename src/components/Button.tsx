import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {fontWeight: 'bold', color: '#FFFFFF', fontSize: 17},
  button: {
    backgroundColor: '#A370F7',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20,
    padding: 15,
  },
});
