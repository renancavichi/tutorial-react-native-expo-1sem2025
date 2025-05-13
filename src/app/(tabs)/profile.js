import {View, Text, StyleSheet} from 'react-native'
import { useAuthStore } from '../../stores/useAuthStore'
import { Button } from 'react-native-web'
import { useRouter } from 'expo-router'

export default function ProfileScreen() {
    
  const { logout } = useAuthStore()
  const router = useRouter()

  const handleLogout = async () => {
    // Aqui você pode fazer a chamada para o logout na API
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