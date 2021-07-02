import {StyleSheet} from 'react-native'
import {spacing,textSize,borderRadius} from '../../styles/sizes'

export const countdownSyles = StyleSheet.create({
  container:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ff666e',
    borderRadius:borderRadius.smooth
  },
  timerText:{
    fontSize:textSize.xxl,
    padding: spacing.md,
    color:'#ffffff',
    fontWeight:'bold'
  }

})