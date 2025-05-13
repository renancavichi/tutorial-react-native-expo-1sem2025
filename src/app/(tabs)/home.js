import {View, Text, StyleSheet} from 'react-native'
import { useAuthStore } from '../../stores/useAuthStore'
import { useRouter } from 'expo-router'

export default function HomeScreen() {

  const router = useRouter()
  const { name } = useAuthStore()
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Bem-vindo {name}</Text>
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