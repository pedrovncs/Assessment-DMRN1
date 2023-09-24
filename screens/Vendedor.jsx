import { View, Text, StyleSheet, Platform } from 'react-native';
import Avaliacao from './components/Avaliacao';
import React from 'react';

export default function Vendedor({route}) {
  const {produto} = route.params;
  const {nome, avaliacao, numeroDeVendas, endereco, telefone, email} = produto.vendedor;
  return (
    <View style={styles.paginaVendedor}>
      <Text style={styles.nome}>{nome}</Text>
      <Avaliacao nota={avaliacao} vendas={numeroDeVendas} />
      <Text style={styles.endereco}>{endereco}</Text>
      <Text style={styles.telefone}>{telefone}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paginaVendedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    padding: 16,
    gap: 16,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  endereco: {
    fontSize: 18,
    lineHeight: 24,
  },
  telefone: {
    fontSize: 18,
    lineHeight: 24,
  },
  email: {
    fontSize: 18,
    lineHeight: 24,
  },
});
