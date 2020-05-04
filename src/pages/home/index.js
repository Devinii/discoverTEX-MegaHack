import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
//import LogoImg from '../../assets/dev.jpg';
export default function Home({navigation}) {
  function AlertBotton() {
    Alert.alert('Ops!', 'Em Desenvolvimento.');
  }
  return (
    <View style={styles.conteiner}>
      <View>
        <Image
          source={require('../../assets/bolsa.jpg')}
          style={styles.Image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Estudante</Text>
      </View>
      <View>
        <Text style={styles.Subtext}>Genbai Benno</Text>
      </View>
      <View>
        <Text style={styles.textDescription}>
          Oii pessoal, passei aqui pra falar sobre essa bolsa da
          <Text style={styles.textbold}> Imaginarium</Text>
          show de bola, vale muito a pena !!!!
        </Text>
      </View>
      <View style={styles.conteinerBotton}>
        <TouchableOpacity style={styles.buttonIniciar} onPress={AlertBotton}>
          <Text style={styles.buttonText}>Seguir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMessangem} onPress={AlertBotton}>
          <Text style={styles.buttonTextM}>Menssagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
