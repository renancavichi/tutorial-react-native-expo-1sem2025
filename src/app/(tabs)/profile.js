import {View, Text, StyleSheet} from 'react-native'
import { useAuthStore } from '../../stores/useAuthStore'
import { Button } from 'react-native-web'
import { useRouter } from 'expo-router'

export default function ProfileScreen() {
    
  const { logout, refreshToken } = useAuthStore()
  const router = useRouter()

  const handleLogout = async () => {
    const result = await fetch('http://localhost:3000/auth/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken })
    })
    if (!result.ok) {
      const data = await result?.json()
      console.error('Logout failed', data?.message)
    }
    logout()
    return router.replace('/login')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Button title='Sair' onPress={() => handleLogout()} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
})