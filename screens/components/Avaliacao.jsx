import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Avaliacao({ nota, vendas }) {
  const estrelasArr = [];
  const estrelas = Math.floor(nota);
  const meiaEstrela = nota - estrelas;

  const EstrelasCheia = () => {
    const estrelasCheias = [];
    for (let i = 0; i < estrelas; i++) {
      estrelasCheias.push(
        <Icon key={`estrela-cheia-${i}`} name="star" style={styles.estrela} />
      );
    }
    return estrelasCheias;
  };

  const EstrelaMetade = () => {
    if (meiaEstrela > 0.5) {
      return <Icon key="estrela-metade" name="star-half" style={styles.estrela} />;
    }
    return null;
  };

  const renderTextoVendas = () => {
    if (vendas !== undefined) {
      return (
        <Text style={styles.notaTexto}>
          | {vendas} vendidos
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.avaliacao}>
      <View style={styles.nota}>
        {EstrelasCheia()}
        {EstrelaMetade()}
        <Text style={styles.notaTexto}>{`${nota}`}</Text>
        {renderTextoVendas()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nota: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  estrela: {
    fontSize: 20,
    color: 'gold',
  },
  notaTexto: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
