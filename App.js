import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { useState } from 'react';
import CardUser from './src/components/CardUser';

export default function App() {

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.listUser}>
        <CardUser 
          avatar="https://github.com/renancavichi.png"
          name="Renan Cavichi"
          email="renancavichi@gmail.com"
        />
        <CardUser 
          avatar="https://github.com/jose.png"
          name="José da Silva"
          email="joses@gmail.com"
        />
        <CardUser 
          avatar="https://github.com/maria.png"
          name="Maria Souza"
          email="mariasouza@gmail.com"
        />
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
