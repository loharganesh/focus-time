import * as React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from "react-native"

import {buttonStyles} from './button.styles.jsx'

// Component
export const Button = ({title,onPress,styles,variant}) => {
  const buttonVariant = variant === 'primary' ? buttonStyles.buttonPrimary : buttonStyles.buttonSecondary
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={[buttonStyles.container,styles,buttonVariant]} >
        <Text style={buttonStyles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}



