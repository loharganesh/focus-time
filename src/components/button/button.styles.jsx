import {StyleSheet} from 'react-native'
import {spacing,borderRadius,borders} from '../../styles/sizes'

export const buttonStyles = StyleSheet.create({
    container:{
      height:35,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingRight:spacing.md,
      paddingLeft:spacing.md,
      borderRadius:borderRadius.smooth,
    },
    buttonPrimary:{
      backgroundColor:'#ff666e',
    },
    buttonSecondary:{
      backgroundColor:'#373737',
    },
    title:{
      color:'#ffffff',
      fontWeight:'bold'
    }
})