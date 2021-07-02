import React from 'react'

import {timingsStyles} from './timings.styles.jsx'

import {View} from 'react-native'
import {Button} from '../button/button.component.jsx'

export const Timings = ({changeTime}) => {
  return(
    <View style={timingsStyles.container}>
      <Button title='1' variant='secondary' onPress={()=>{changeTime(1)}}/>
      <Button title='5' variant='secondary' onPress={()=>{changeTime(5)}}/>
      <Button title='10' variant='secondary' onPress={()=>{changeTime(10)}}/>
      <Button title='15' variant='secondary' onPress={()=>{changeTime(15)}}/>
      <Button title='20' variant='secondary' onPress={()=>{changeTime(20)}}/>
    </View>
  )
}