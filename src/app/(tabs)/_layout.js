import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#b15300'
        }}
    >
      <Tabs.Screen 
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="contact"
        options={{
            title: "Contatos",
            tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({color}) => <FontAwesome5 name="user-circle" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
