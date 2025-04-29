import { Image } from "expo-image";
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useUsersStore } from "../stores/useUsersStore"
import { useRouter } from "expo-router";

export default function CardUser({id, avatar, name, email}) {

    const { deleteUser: deleteUserStore, setUserToEditId  } = useUsersStore()
    const router = useRouter()

    const deleteUser = async () => {
        const result = await fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        if(result.ok) {
            const data = await result.json()
            console.log(data)
            deleteUserStore(id)
        } else {
            const error = await result?.json()
            console.log('Erro ao deletar usuário', error?.message)
            Alert.alert('Erro ao deletar usuário', error?.message || '')
        }
        
    }

    const editUser = async () => {
        setUserToEditId(id)
        router.push('/edit')
    }

    return (
        <View style={styles.card}>
            <Image 
                style={styles.avatar}
                source={avatar}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            <Pressable style={styles.trash} onPress={deleteUser}>
                <FontAwesome name="trash-o" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.edit} onPress={editUser}>
                <FontAwesome name="edit" size={24} color="black" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        minWidth: 200,
        height: 90,
        backgroundColor: '#FFF',
        border: '1px solid #CCC',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        gap: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#EEE'
    },
    info: {
        gap: 5
    },
    name: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    email: {
        color: '#999'
    },
    trash: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    edit: {
        position: 'absolute',
        right: 40,
        top: 10
    }
})