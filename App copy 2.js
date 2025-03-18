import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Button, TextInput } from 'react-native';
import Header from './src/components/Header';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('Paulo')

  console.log('renderizou o componente App')

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text>{nome}</Text>
      <TextInput style={styles.input} placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  products: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    flexWrap: 'wrap'
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 10,
    margin: 10
  }
});
