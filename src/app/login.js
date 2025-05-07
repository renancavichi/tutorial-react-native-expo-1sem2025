import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useUsersStore } from '../stores/useUsersStore';

export default function HomeScreen() {

  const { users, setUsers } = useUsersStore()
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch('http://localhost:3000/user/list')
      const data = await result.json()
      console.log(data)
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Entrar no Projeto</Text>

      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />

      <Button title='Entrar' onPress={() => {}} />

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
