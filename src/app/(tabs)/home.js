import {View, Text, StyleSheet} from 'react-native'
import { useAuthStore } from '../../stores/useAuthStore'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import CardUser from '../../components/CardUser'
import { useUsersStore } from '../../stores/useUsersStore'

export default function HomeScreen() {

  const router = useRouter()
  const { name, accessToken} = useAuthStore()
  const { users, setUsers } = useUsersStore()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch('http://localhost:3000/user/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application-json',
          'Authorization': `Bearer ${accessToken}`
        }
      })
      const data = await result.json()
      console.log(data)
      setUsers(data)
    }
    fetchUsers()
  }, [])
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Bem-vindo {name}</Text>

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
    listUser: {
      gap: 20,
      marginVertical: 20,
      alignItems: 'center',
      width: '100%' 
  }
})