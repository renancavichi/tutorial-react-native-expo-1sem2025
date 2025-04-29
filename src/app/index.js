import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import CardUser from '../components/CardUser';
import { Link, useRouter } from 'expo-router';
import { useUsersStore } from '../stores/useUsersStore';

export default function HomeScreen() {

  const { users, setUsers } = useUsersStore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [avatar, setAvatar] = useState('')

  const [userToEdit, setUserToEdit] = useState(null)

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

  //muda o usuário a ser editado
  useEffect(() => {
    console.log('userToEdit', userToEdit)
    if(userToEdit !== null) {
      const user = users.find((user) => user.id === userToEdit)  
      setName(user.name)
      setEmail(user.email)
      setPass(user.pass)
      setAvatar(user.avatar)
    }
  }, [userToEdit])

  const handleCreateUser = async () => {
    const result = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        avatar
      })
    })
    const data = await result.json()
    console.log(data)
    setUsers([...users, data.user]) // Adiciona o novo usuário no final da lista
    setName('')
    setEmail('')
    setPass('')
    setAvatar('')
  }

  const handleEditUser = async () => {
    const result = await fetch(`http://localhost:3000/user/${userToEdit}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        avatar
      })
    })
    const data = await result.json()
    console.log(data)
    const usersEdited = users.map((user) => {
      if(user.id === userToEdit) {
        return data.user
      }
      return user
    })
    setUsers(usersEdited)
    setUserToEdit(null)
    setName('')
    setEmail('')
    setPass('')
    setAvatar('')
  }

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
              users={users}
              setUsers={setUsers}
              setUserToEdit={setUserToEdit}
            />
         })
        }
      </View>
      {/* Exemplo navegação com Link */}
      <Link href='/create' style={styles.link}><Text>Ir para Criar Usuário</Text></Link>
      {/* Exemplo navegação com router (criado com o hook useRouter) */}
      <Button style={styles.button} title='Criar Usuário' onPress={() => router.push('/create')} />

      <Button style={styles.button} title='Ir para Home' onPress={() => router.push('/home')} />

      <View>
        <Text style={styles.h1}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} /> 
        <TextInput style={styles.input} placeholder="Senha" value={pass} onChangeText={setPass} /> 
        <TextInput style={styles.input} placeholder="Avatar" value={avatar} onChangeText={setAvatar} />
        <View style={styles.boxButtons}>
            <Button title="Cadastrar" onPress={handleCreateUser} />
            <Button title="Editar" onPress={handleEditUser} />    
        </View>
      </View>
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
