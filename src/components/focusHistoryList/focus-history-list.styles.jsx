import {StyleSheet} from 'react-native'

import {spacing} from '../../styles/sizes'

export const focusHistoryStyles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    padding: spacing.md,
  },
  title:{
    flex:1,
    fontWeight:'bold',
  }
})

export const historyItemStyles = StyleSheet.create({
  container:{
    paddingTop:spacing.sm,
    paddingBottom:spacing.sm
  },
  text: {
    paddingTop:spacing.sm,
    paddingBottom:spacing.sm
  }
})