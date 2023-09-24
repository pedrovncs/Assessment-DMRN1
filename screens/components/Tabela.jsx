import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

export default function Tabela({ produto }) {
  const tabelaData = [
    ['Marca', produto.especificacoes.marca],
    ['Modelo', produto.especificacoes.modelo],
    ['Cor', produto.especificacoes.cor],
    ['Material', produto.especificacoes.material],
    ['Dimensões', produto.especificacoes.dimensoes],
    ['Peso', produto.especificacoes.peso],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificações</Text>
      <Table borderStyle={styles.borda}>
        {tabelaData.map((data, index) => (
          <Row
            key={index}
            data={data}
            style={index % 2 === 0 ? styles.par: styles.impar}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:  "100%",
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  borda: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  par: {
    height: 65,
    backgroundColor: '#f0f0f0',
  },
  impar: {
    height: 65,
    backgroundColor: '#ffffff',
  },
  text: {
    textAlign: 'center', 
    lineHeight: 20,
  },
});
