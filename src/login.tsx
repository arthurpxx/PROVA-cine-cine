import { useState } from "react";
import React from 'react'
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [error, setError] = useState(false);

    const navigation = useNavigation<any>()

    const login = (email: string , password: string) => {
      console.log(email,password)
        if (email && password){
            navigation.navigate('home')
        } else {
            setError(true)
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cine-Cine</Text>

      {error && <Text>Login ou senha inválidos</Text>}
      <TextInput
        style={styles.input}
        placeholder="Seu Email"
        placeholderTextColor={'white'}
        onChangeText={onChangeEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Sua Senha"
        placeholderTextColor={'white'}
        onChangeText={onChangePassword}
        value={password}
      />
      <TouchableOpacity style={styles.btn} onPress={() => login(email, password)}>
      <Text style={styles.btn}>Conectar</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  btn:{
    borderRadius:8,
    backgroundColor: '#7A297A',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 35,
  },

  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#7A297A',
    color: 'white',
  },

  title:{
    fontSize: 40,
  }
});