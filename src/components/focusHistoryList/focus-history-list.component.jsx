import React from 'react'

// Styles
import {focusHistoryStyles,historyItemStyles} from './focus-history-list.styles.jsx'
import {spacing} from '../../styles/sizes'

// Views
import {View, SafeAreaView,FlatList,Text} from 'react-native'
import {Button} from '../button/button.component.jsx'

export const FocusHistoryList = ({focusHistory,onClear}) => {
  // Member Functions
  const clearHistory = () => {
    onClear()
  }
  return (
    <>
      <View style={focusHistoryStyles.container}>
        <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={focusHistoryStyles.title}>Things you've focused on</Text>
          {focusHistory.length !== 0 && <Button title='Clear' variant='primary' onPress={clearHistory}/>}
        </View>
        
        {
          !!focusHistory.length && 
          <FlatList 
            style={{flex:1}}
            data={focusHistory}
            renderItem={HistoryItem}
          />
        }
      </View>
    </>
  )
}

// List Item Layout
const HistoryItem = ({item,index}) => {
  const statusStyle = item.status === 1 ? {color:'green'} : {color:'red'} 
  return(
    <Text style={[historyItemStyles.text,statusStyle]}>{item.focusSubject}</Text>
  )
}