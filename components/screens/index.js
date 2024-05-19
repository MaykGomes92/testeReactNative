import { StyleSheet, TouchableHighlight, } from 'react-native';
import Video from 'react-native-video';
import React, { useRef, useState } from 'react';
import Controls from '../controls';
import Orientation from 'react-native-orientation-locker';

export default function Player() {
  const [isPaused, setPaused] = useState(true);
  const [maxTime, setMaxTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);

  function pausar() {
    setPaused(prevState => !prevState);
  }

  function avancarOuVoltar(tempo) {
    videoRef.current.seek(tempo);
  }

  function ativarFullScreen() {
    if (isFullScreen) {
      Orientation.unlockAllOrientations();
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setIsFullScreen(!isFullScreen);
  }

  return (
    <TouchableHighlight style={[isFullScreen ? {...StyleSheet.absoluteFillObject} : {width:400, height: 350, marginTop:25, borderRadius:25},styles.container]}>
      <>
        <Video
          source={require('../../videoteste2.mp4')}
          style={[StyleSheet.absoluteFillObject]}
          paused={isPaused}
          resizeMode='contain'
          controls={false}
          fullscreenAutorotate={true}
          onLoad={event => setMaxTime(event.duration)}
          onProgress={event => setCurrentTime(event.currentTime)}
          ref={videoRef}
        />
        <Controls
          pausar={() => pausar()}
          currentTime={currentTime}
          maxTime={maxTime}
          avancarOuVoltar={avancarOuVoltar}
          ativarFullScreen={ativarFullScreen}
          isFullScreen={isFullScreen}
        />
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    elevation: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
