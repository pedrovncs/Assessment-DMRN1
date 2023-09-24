import { StyleSheet, Text, View, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Avaliacao from './components/Avaliacao.jsx';
import React, { useState } from 'react'

export default function DetalhesProdutoScreen({ route }) {
  const { produto } = route.params;
  const [qtdProduto, setQtdProduto] = useState(0);

  return (
    <View style={styles.paginaDetalhes}>
      <Text style={styles.title}> {produto.nome} </Text>
      <Avaliacao nota={produto.nota} vendas={produto.vendas} />
      <Image style={styles.image} source={{ uri: produto.imagem }} />
      <Text style={styles.valor}>
        {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </Text>
      <Text style={styles.descricaoResumo}>{produto.descricaoBreve}</Text>
      <View style={styles.containerBtn}>
        <Button title="Comprar" color="green" />
        <Button title="Adicionar ao Carrinho" color="blue" onPress={() => { setQtdProduto(qtdProduto + 1) }} />
      </View>
      <View style={styles.meuCarrinho}>
      <Icon name="shopping-cart" size={20} color="black" />
        <Text>{qtdProduto.toString()}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  paginaDetalhes: {
    flex: 1,
    padding: 16,
    gap: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 200,
    margin: 10,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  btnComprar: {
    width: 150,
  },
  btnCarrinho: {
    width: 150,
  },
  meuCarrinho: {
    width: 50,
    height: 50,
    backgroundColor: "lightblue",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  descricaoResumo: {
    width: "90%",
    padding: 5,
  },
})