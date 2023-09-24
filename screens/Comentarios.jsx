import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Avaliacao from './components/Avaliacao';

export default function Comentarios({ route }) {
    const { produto } = route.params;

    return (
        <View style={styles.pageComentarios}>
            <View style={styles.containerComentarios}>
                <Text style={styles.title}>Comentários</Text>
                {produto.comentarios.map((comentario, id) => {
                    return (
                        <View style={styles.comentario} key={id}>
                            <View style={styles.flexRow}>
                                <Text style={styles.nome}>{comentario.usuario}</Text>
                                <Avaliacao nota={comentario.nota} />
                            </View>
                            <Text style={styles.texto}>{comentario.comentario}</Text>
                            <Text style={styles.texto}>{comentario.data}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageComentarios: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 16,
    },
    containerComentarios: {
        width: "100%",
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    comentario: {
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
});
