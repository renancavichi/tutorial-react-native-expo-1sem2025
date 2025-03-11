import { Image } from 'expo-image'
import {View, Text, StyleSheet} from 'react-native'

export default function Product({foto, titulo, preco}) {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.foto}
                source={foto}
            />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.preco}>{preco}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        padding: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        alignItems: 'center',
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    preco: {
        fontSize: 14,
        color: 'green'
    }
})