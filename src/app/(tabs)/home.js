import {View, Text, StyleSheet} from 'react-native'

export default function HomeScreen() {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
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