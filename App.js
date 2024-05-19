import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Player from './components/screens'
import ProgressBar from './components/ProgressBar'


export default function App() {
  return (
    <>
      <Player/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400
  }
})
