import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function InitializationScreen() {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // Aqui você pode fazer a lógica de inicialização do seu app
      router.replace('/login')
    }, 2000);
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Projeto</Text>
      <ActivityIndicator size="large" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  }
});
