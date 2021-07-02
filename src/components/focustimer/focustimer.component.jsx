import React,{useState} from 'react'
import {useKeepAwake} from 'expo-keep-awake'

// Views
import {View,Text,Vibration,Platform} from 'react-native'
import {ProgressBar} from 'react-native-paper'

// Styles
import {focusTimerStyles} from './focustimer.styles.jsx'

// Components
import {CountDown} from '../countdown/countdown.component.jsx'
import {Button} from '../button/button.component.jsx'
import {Timings} from '../timings/timings.component.jsx'

const DEFAULT_TIME = 0.1

const FOCUS_STATUS = {
  INPROGRESS:0,
  COMPLETED:1,
  CANCELLED:2,
}

export const FocusTimer = ({focusSubject,onTimerEnd,onCancel,saveFocusSubjectToHistory}) => {
  
  // Keep Phone Awake
  useKeepAwake();
  
  // State
  const [minutes,setMinutes] = useState(DEFAULT_TIME)
  const [started,startCountDown] = useState(false)
  const [progress,setProgress] = useState(1)

  

  // Member Functions
  const toggleCountdownState = () => {
    startCountDown(!started)
  }

const onProgress = (progress) => {
  setProgress(progress)
}

const changeTime = (minutes) => {
  reset(minutes)
}

const onEnd = () => {
  vibrate()
  saveFocusSubjectToHistory(focusSubject,FOCUS_STATUS.COMPLETED)
  reset(DEFAULT_TIME)
  onTimerEnd()
}


const reset = (minutes) => {
  setMinutes(minutes)
  setProgress(1)
  startCountDown(false)
}

const cancel = () => {
  reset(DEFAULT_TIME)
  saveFocusSubjectToHistory(focusSubject,FOCUS_STATUS.CANCELLED)
  onCancel();
}

const vibrate = () => {
  if(Platform.OS === 'ios'){
    const interval = setInterval(()=>Vibration.vibrate(),1000)
    setTimeout(()=>clearInterval(interval),10000)
  }else{
    Vibration.vibrate(10000)
  }
}

  return(
    <View style={focusTimerStyles.container}>
    <Text>Focusing on</Text>
      <Text style={focusTimerStyles.subject}>{focusSubject}</Text>
      <CountDown paused={!started} onProgress={onProgress} minutes={minutes} onEnd={onEnd}/>
      <ProgressBar color='#FFA3A9' progress={progress} style={focusTimerStyles.progressBar}/>
      <Timings changeTime={changeTime}/>
      <View style={focusTimerStyles.controls}>
        <Button title={started ?'Pause' : 'Start'}  variant='primary' onPress={toggleCountdownState}/>
        <Button title='Cancel' variant='secondary' onPress={cancel}/>
      </View>
      
    </View>
  )
}