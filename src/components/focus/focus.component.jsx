import React,{useState,useEffect} from 'react'

// Styles
import focusStyles from './focus.styles'

// Views
import {View,Text,TextInput} from 'react-native'
import {Button} from '../button/button.component.jsx'



// Component
export const Focus = ({addSubject}) => {
  // State
  const [subject,setSubject] = useState('')

  // Member Methods
  const mAddSubject = () => {
    addSubject(subject)
  }

  return(
    <View style={focusStyles.container}>
      <Text style={focusStyles.title}>What would you like to focus on?</Text>
      <TextInput style={focusStyles.input} onChangeText={setSubject} value={subject} placeholder='Enter name for your focus here'/>
      
      <Button onPress={mAddSubject} title="Click to Add Subject"/>
    </View>
  )
}



