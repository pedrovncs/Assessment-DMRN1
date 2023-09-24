import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ({ route }) {
    const { produto } = route.params;
    return (
        <View style={styles.pagePerguntas}>
            <View style={styles.containerPerguntas}>
                <Text style={styles.title}>Perguntas</Text>
                {produto.perguntas.map((pergunta, id) => {
                    return (
                        <View style={styles.pergunta} key={id}>
                            <View style={styles.flexRow}>
                                <Text style={styles.nome}>{pergunta.usuario}</Text>
                                <Text style={styles.nome}>{pergunta.data}</Text>
                            </View>
                            <Text style={styles.texto}>{pergunta.pergunta}</Text>
                            <Text style={styles.resposta}>R: {pergunta.resposta}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pagePerguntas: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 16,
    },
    containerPerguntas: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    pergunta: {
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 18,
        lineHeight: 20,
    },
    resposta: {
        marginTop: 15,
        fontSize: 18,
        lineHeight: 20,
        color: '#666',
        fontWeight: 'bold',
    }
})