import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{title: "Home"}} />
      <Stack.Screen name="create" options={{title: "Criar Usuário"}} />
      <Stack.Screen name="edit" options={{title: "Editar Usuário"}} />
      <Stack.Screen name="(tabs)" options={{title: "Tabs", headerShown: false}} />
    </Stack>
  );
}
