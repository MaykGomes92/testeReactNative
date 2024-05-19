import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'

  export default function ProgressBar({currentTime, maxTime, avancarOuVoltar }) {
    return (
    <View style={styles.container}>
      <Slider
        style={[StyleSheet.absoluteFillObject, { elevation: 1, zIndex: 99, height: 40 }]}
        minimumValue={0}
        maximumValue={Math.floor(maxTime)}
        value={currentTime}
        minimumTrackTintColor="#514BF2"
        maximumTrackTintColor="#979797"
        thumbTintColor='#514BF2'
        tapToSeek
        onSlidingComplete={avancarOuVoltar}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
  }
})