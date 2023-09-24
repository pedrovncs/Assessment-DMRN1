import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import axios from '../axios.js';

export default function ProdutosScreen({ navigation }) {
  const [inputSearch, setInputSearch] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFilter = (text) => {
    setInputSearch(text);
    const filteredprodutos = produtos.filter((evento) => {
      return evento.nome.toLowerCase().includes(text.toLowerCase());
    });
    setProdutosFiltrados(filteredprodutos);
  };

  const fetchData = async () => {
    setIsLoading(true);
    axios.get('/produtos.json').then((resp) => {
      const list = axios.converter(resp.data);
      setProdutos(list);
      setTimeout(() => {
        setIsLoading(false);
      }, 1200)
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar produto"
          value={inputSearch}
          onChangeText={handleFilter}
        />
      </View>
      {isLoading ? (
        <View style={styles.carregando}>
          <ActivityIndicator size="large" color='#77787d' />
          <Text>Carregando...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.lista}
          keyExtractor={(item) => item.id}
          data={inputSearch.length > 0 ? produtosFiltrados : produtos}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Tab', { produto: item })}
            >
              <View style={styles.cardProduto}>
                <Image
                  style={styles.imagemProduto}
                  source={{
                    uri: item.imagem,
                  }}
                />
                <View style={styles.textContainer}>
                  <Text>{item.nome}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  lista: {
    width: '100%',
  
    justifyContent: 'center',
  },
  cardProduto: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    margin: 10,
  },
  imagemProduto: {
    width: 300,
    height: 200,
  },
  textContainer: {
    padding: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginVertical: 12,
    marginHorizontal: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
  carregando: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  btnCadastro: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    zIndex: 1,
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
