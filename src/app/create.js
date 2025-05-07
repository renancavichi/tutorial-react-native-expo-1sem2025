import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { useUsersStore } from '../stores/useUsersStore'

export default function createScreen() {

      const { addUser } = useUsersStore()

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')
      const [avatar, setAvatar] = useState('')

      const router = useRouter()

      const handleCreateUser = async () => {
        const result = await fetch('http://localhost:3000/auth/signup', {
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
        if(result.ok) {
          const data = await result.json()
          console.log(data)
          // add user to store
          addUser(data.user)
          router.back()
        } else {
          console.log('Erro ao cadastrar usuário')
          const error = await result?.json()
          Alert.alert('Erro ao cadastrar usuário', error?.message || '')
        }
      }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.h1}>Cadastrar</Text>
            <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} /> 
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={pass} onChangeText={setPass} /> 
            <TextInput style={styles.input} placeholder="Avatar" value={avatar} onChangeText={setAvatar} />
            <Button title="Cadastrar" onPress={handleCreateUser} />
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