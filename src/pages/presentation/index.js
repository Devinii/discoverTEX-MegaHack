import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
export default function Sobre() {
  const navigation = useNavigation();
  function next() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.conteiner}>
      <ImageBackground
        source={require('../../assets/back.jpg')}
        style={styles.ImageBackground}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.bemvindo}>Bem Vindo</Text>
        <Text style={styles.disco}>DISCOVERTEX</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Sua comunidade favorita de lojas,
        </Text>
        <Text style={styles.description}>
          compras online e produtos virtuais.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonIniciar} onPress={next}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
