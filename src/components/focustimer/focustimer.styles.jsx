import {StyleSheet} from 'react-native'
import {spacing,textSize,borderRadius,borders} from '../../styles/sizes'

export const focusTimerStyles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    padding:spacing.md
  },
  title:{
    
  },
  subject:{
    fontWeight:'bold',
    marginTop:spacing.sm,
    fontSize:textSize.md,
  },
  controls:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  progressBar:{
    height:5,
    marginTop:spacing.md,
  }
})