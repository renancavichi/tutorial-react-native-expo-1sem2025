import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { useUsersStore } from '../stores/useUsersStore'

export default function EditScreen() {

      const { userToEditId, users, updateUser } = useUsersStore()

      const [ userToEdit ] = users.filter((user) => user.id === userToEditId)
      console.log('userToEditId', userToEditId)
      console.log('users', users)
      console.log('userToEdit', userToEdit)

      const [name, setName] = useState(userToEdit?.name || '')
      const [email, setEmail] = useState(userToEdit?.email || '')
      const [avatar, setAvatar] = useState(userToEdit?.avatar || '')

      const router = useRouter()

      const handleEditUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${userToEditId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            avatar
          })
        })
        if(result.ok) {
          const data = await result.json()
          console.log(data)
          updateUser(data.user)
          router.back()
        } else {
          console.log('Erro ao editar usuário')
          const error = await result?.json()
          Alert.alert('Erro ao editar usuário', error?.message || '')
        }
      }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Editar Usuário</Text>
        <Link href='/'>Ir para Home</Link>

        <View>
            <Text style={styles.h1}>Editar</Text>
            <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />  
            <TextInput style={styles.input} placeholder="Avatar" value={avatar} onChangeText={setAvatar} />
            <Button title="Editar" onPress={handleEditUser} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 20
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        padding: 10,
        margin: 10
      }
})