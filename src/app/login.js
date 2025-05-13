import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../stores/useAuthStore';

export default function LoginScreen() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()
  const { login } = useAuthStore()

  const handleLogin = async () => {
    console.log('Login', email, pass)
    const result = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, pass })
    })
    if(result.ok) {
      const data = await result.json()
      console.log(data)
      login(data) // Aqui você pode armazenar o token em um estado global e AsyncStorage
      return router.push('/home')// redirecionar para a tela home do user logado
    } else {
      console.log('Erro ao logar usuário')
      const error = await result?.json()
      Alert.alert('Erro ao logar usuário', error?.message || '')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Entrar no Projeto</Text>

      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='E-mail' />
      <TextInput style={styles.input} value={pass} onChangeText={setPass} placeholder='Senha' secureTextEntry={true} />

      <Button title='Entrar' onPress={() => handleLogin()} />

      <Text style={styles.p}>Não tem conta?</Text>
      <Button title='Cadastra-se' onPress={() => router.push('/create')} />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  p: {
    fontSize: 16,
    margin: 10
  },
  button: {
    margin: 15
  }
});
