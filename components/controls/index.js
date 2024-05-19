import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ProgressBar from '../ProgressBar';

export default function Controls({ pausar, currentTime, maxTime, avancarOuVoltar, ativarFullScreen, isFullScreen }) {
  console.log(isFullScreen)
  function formatarTempo(seconds) {
    const horas = Math.floor(seconds / 3600);
    const minutos = Math.floor((seconds % 3600) / 60);
    const segundos = seconds % 60;

    const formatarHoras = String(horas).padStart(2, '0');
    const formatarMinutos = String(minutos).padStart(2, '0');
    const formatarSegundos = String(segundos).padStart(2, '0');

    return `${formatarHoras}:${formatarMinutos}:${formatarSegundos}`;
  }

  return (
    <View style={[isFullScreen ?{marginTop: 325,}:{marginTop: 275,},styles.container]}>
      <ProgressBar currentTime={currentTime} maxTime={maxTime} avancarOuVoltar={avancarOuVoltar} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => pausar()}>
          <Image source={require('../../assets/iconPlayed.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => avancarOuVoltar(currentTime + 15)}>
          <Image source={require('../../assets/iconAvancar10Sec.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => avancarOuVoltar(currentTime - 15)}>
          <Image source={require('../../assets/iconVoltar10Sec.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/volume.png')} />
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 150 }}>
          <Text style={{ color: '#959595' }}>
            {formatarTempo(Math.floor(currentTime))}
          </Text>
          <Text style={{ color: '#959595' }}>
            /
          </Text>
          <Text style={{ color: '#959595' }}>
            {formatarTempo(Math.floor(maxTime))}
          </Text>
        </View>
        <TouchableOpacity onPress={ativarFullScreen} style={{ marginLeft: 15, marginRight: 15 }}>
          <Image source={require('../../assets/iconTelaCheia.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnMeioPaused,isFullScreen ? {
          top: -200,
          left: '43%',
        } : {
          top: -200,
          left: 150,
        }]} onPress={() => pausar()}>
          <Image source={require('../../assets/iconBtnPauseMeio.png')} style={{width:80,height:80}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  btnMeioPaused: {
    position: 'absolute',
  },
});
