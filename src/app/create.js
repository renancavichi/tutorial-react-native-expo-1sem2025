import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'

export default function createScreen() {

      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')
      const [avatar, setAvatar] = useState('')

      const router = useRouter()

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
        router.back()
      }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Criar Usuário</Text>
        <Link href='/'>Ir para Home</Link>

        <View>
            <Text style={styles.h1}>Cadastrar</Text>
            <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} /> 
            <TextInput style={styles.input} placeholder="Senha" value={pass} onChangeText={setPass} /> 
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