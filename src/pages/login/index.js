import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  function nextHome() {
    if (name === '') {
      Alert.alert(
        'Isso é apenas um Teste!',
        'Insira qualquer E-mail e Senha para Acessar.',
      );
    } else {
      navigation.navigate('Home');
    }
  }
  return (
    <View style={styles.conteiner}>
      <View>
        <Text style={styles.log}>Login</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Endereço de Email"
          placeholderTextColor="#18191F"
          autoCapitalize="none"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#18191F"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={nextHome}>
        <Text style={styles.buttonText}>Entrar ></Text>
      </TouchableOpacity>
    </View>
  );
}
