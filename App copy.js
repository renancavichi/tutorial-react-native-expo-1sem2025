import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Product from './src/components/Product';
//import Message from './src/components/Message';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      {/* <Message avatar="https://github.com/renancavichi.png">Olá tudo bem?</Message>
      <Message avatar="https://avatars.githubusercontent.com/u/12842076?v=4">Por aqui beleza!</Message>
      <Message avatar="https://avatars.githubusercontent.com/u/4061891?v=4">Show!</Message>
      <Message avatar="https://github.com/renancavichi.png">Voltei...</Message> */}
      <View style={styles.products}>
        <Product foto="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtUvZ-5KQdekB-yI4AnM_7N8S_LNFFjZwtoLmlxcO7xd_LObb6PQbLkgHw8WLDzAS0Tp5ITQ" titulo="Mario Odyssey" preco="R$ 390,00" />
        <Product foto="https://m.media-amazon.com/images/I/618GR0WMoQL._AC_UF1000,1000_QL80_.jpg" titulo="Zelda" preco="R$ 490,00" />
        <Product foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQiy5QrSXpY8YTt3y3I-ZPwZP4oiJhkcgtg&s" titulo="Zelda Echoes of Wisdom" preco="R$ 390,00" />
        <Product foto="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtUvZ-5KQdekB-yI4AnM_7N8S_LNFFjZwtoLmlxcO7xd_LObb6PQbLkgHw8WLDzAS0Tp5ITQ" titulo="Mario Odyssey" preco="R$ 390,00" />
        <Product foto="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtUvZ-5KQdekB-yI4AnM_7N8S_LNFFjZwtoLmlxcO7xd_LObb6PQbLkgHw8WLDzAS0Tp5ITQ" titulo="Mario Odyssey" preco="R$ 390,00" />
      </View>
      
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
  }
});
