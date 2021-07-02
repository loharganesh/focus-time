import React,{useState,useEffect} from 'react'

// Styles
import {countdownSyles} from './countdown.styles.jsx'

// Views
import {View,Text} from 'react-native'

const getMilliseconds = (min) => min*1000*60
const getSeconds = (milliseconds) =>{return Math.floor(milliseconds/1000)%60}
const getMinutes = (milliseconds) => {return Math.floor(milliseconds/1000/60)%60}

const formatTime = (time) => time < 10 ?`0${time}`:time

export const CountDown = ({minutes=1,paused=true,onProgress,onEnd}) => {

  // State
  const [millis,setMillis] = useState(null)

  // Member Functions
  const countDown = () => {
    setMillis((time)=>{
      if(time === 0){
        // Do something
        clearInterval(interval.current)
        return time
      }
      const timeLeft = time-1000
      // Report the progress
      return timeLeft

    })
  }

  const interval = React.useRef(null)

  // Effects
  useEffect(()=>{
    setMillis(getMilliseconds(minutes))

  },[minutes])

  useEffect(()=>{
    if(paused){
      if(interval.current) clearInterval( interval.current)
      return
    }
    interval.current = setInterval(countDown,1000)

    return () => clearInterval(interval.current)
  },[paused])

  useEffect(()=>{
    onProgress(millis/getMilliseconds(minutes))
    if(millis === 0) onEnd()
  },[millis])


  return(
    <View style={countdownSyles.container}>
      <Text style={countdownSyles.timerText}>{formatTime(getMinutes(millis))}:{formatTime(getSeconds(millis))}</Text>
    </View>
  )
}