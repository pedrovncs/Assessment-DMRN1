import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Tabela from "./components/Tabela.jsx"
import { ScrollView } from 'react-native-gesture-handler';

export default function DescricaoScreen({ route }) {
  const { produto } = route.params;

  return (
    <ScrollView style={styles.paginaDescricao}>
      <Text style={styles.title}>{produto.nome}</Text>
      <View style={styles.containerDescricao}>
        <Text style={styles.title}>Descrição</Text>
        <Text style={styles.textoDescricao}>{produto.descricao}</Text>
      </View>
      <View style={styles.containerEspecificacoes}>
        <Tabela produto={produto} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paginaDescricao: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  containerDescricao: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  containerEspecificacoes: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textoDescricao: {
    fontSize: 18,
    lineHeight: 24,
  },
});

