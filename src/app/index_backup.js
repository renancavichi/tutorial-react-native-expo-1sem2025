import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, View } from 'react-native';
import Header from '../components/Header';
import { useEffect } from 'react';
import CardUser from '../components/CardUser';
import { Link, useRouter } from 'expo-router';
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
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.listUser}>
        {
         users.map((user)=>{
            return <CardUser
              key={user.id}
              id={user.id} 
              name={user.name}
              email={user.email}
              avatar={user.avatar}
            />
         })
        }
      </View>
      {/* Exemplo navegação com Link */}
      <Link href='/create' style={styles.link}><Text>Ir para Criar Usuário</Text></Link>
      {/* Exemplo navegação com router (criado com o hook useRouter) */}
      <Button style={styles.button} title='Criar Usuário' onPress={() => router.push('/create')} />

      <Button style={styles.button} title='Ir para Home' onPress={() => router.push('/home')} />

      <StatusBar style="auto" /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  },
  listUser: {
    gap: 20,
    marginVertical: 20,
    alignItems: 'center', 
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  link: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#2196f3',
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
  },
  boxButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    marginBottom: 40
  },
  button: {
    margin: 15
  }
});
