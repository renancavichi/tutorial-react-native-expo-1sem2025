import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect } from 'react';
import CardUser from './src/components/CardUser';

export default function App() {

  const [users, setUsers] = useState([])

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
  }
});
