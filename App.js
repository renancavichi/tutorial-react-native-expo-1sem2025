import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect, use } from 'react';
import CardUser from './src/components/CardUser';

export default function App() {

  const [users, setUsers] = useState([])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [avatar, setAvatar] = useState('')

  const [userToEdit, setUserToEdit] = useState(null)

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
      <View>
        <Text style={styles.h1}>Cadastrar</Text>
        <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} /> 
        <TextInput style={styles.input} placeholder="Senha" value={pass} onChangeText={setPass} /> 
        <TextInput style={styles.input} placeholder="Avatar" value={avatar} onChangeText={setAvatar} />
        <View style={styles.boxButtons}>
            <Button title="Cadastrar" onPress={handleCreateUser} />
            <Button title="Editar" onPress={() => {}} />    
        </View>
      </View> 
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
  boxButtons: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-around',
    marginBottom: 40
  }
});
