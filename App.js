import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

import { spacing } from './src/styles/sizes';

import AsyncStorage from '@react-native-async-storage/async-storage'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Focus } from './src/components/focus/focus.component.jsx';
import { FocusTimer } from './src/components/focustimer/focustimer.component.jsx';
import { FocusHistoryList } from './src/components/focusHistoryList/focus-history-list.component.jsx';

export default function App() {
  // State
  const [focusSubject, setFocusSubject] = useState('');
  const [focusHistory, setFocusHistory] = useState([]);



  // Member Functions
  const onTimerEnd = () => {
    setFocusSubject('');
  };

  const onCancel = () => {
    setFocusSubject('');
  };

  const saveFocusSubjectToHistory = (focusSubject, status) => {
    setFocusHistory([
      ...focusHistory,
      { focusSubject: focusSubject, status: status },
    ]);
  };

  const saveHistoryToLocalStorage = async() => {
    try{
        await AsyncStorage.setItem('focusHistory',JSON.stringify(focusHistory))
        console.log("Write to storage successfull")
    }catch(e){
      console.log(e)
    }
  }

    const loadHistoryFromLocalStorage = async() => {
    try{
        const history = await AsyncStorage.getItem('focusHistory')
        setFocusHistory(JSON.parse(history)) 
    }catch(e){
      console.log(e)
    }
  }


  const onClear = () => {
    setFocusHistory([]);
  };

    // Effects
  useEffect(()=>{
    saveHistoryToLocalStorage()
  },[focusHistory])

  useEffect(()=>{
    loadHistoryFromLocalStorage()
  },[])

  const getFocusStatusFromCode = (code) => {
    let focusStatus = '';
    switch (code) {
      case 1:
        focusStatus = 'Completed';
        break;
      case 2:
        focusStatus = 'Cancelled';
        break;
      default:
        break;
    }

    return focusStatus;
  };

  // Render
  return (
    <View style={styles.container}>
      {focusSubject !== '' ? (
        <FocusTimer
          focusSubject={focusSubject}
          onTimerEnd={onTimerEnd}
          onCancel={onCancel}
          saveFocusSubjectToHistory={saveFocusSubjectToHistory}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistoryList focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
