import React from 'react';
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import * as Device from 'expo-device';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoData from '../assets/info.json';

export default function AppInfoScreen() {
  const deviceId = Device.deviceId;
  const deviceName = Device.deviceName;
  const deviceBrand = Device.brand;
  const deviceOS = Device.osName;


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Informações da Aplicação</Text>
        <Text>Nome da Aplicação: {InfoData.appInfo.nome}</Text>
        <Text>Versão da Aplicação: {InfoData.appInfo.versao}</Text>
        <Text>Desenvolvedor: {InfoData.appInfo.desenvolvedor}</Text>
        <Text>Email do Desenvolvedor: {InfoData.appInfo.emailDesenvolvedor}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Informações do Dispositivo</Text>
        <Text>Nome do Dispositivo: {deviceName}</Text>
        <Text>ID do Dispositivo: {deviceId}</Text>
        <Text>Marca do Dispositivo: {deviceBrand}</Text>
        <Text>Sistema Operacional: {deviceOS}</Text>
      </View>
      <Pressable onPress={ () => { Linking.openURL(InfoData.appInfo.github) } } >
      <Icon name="github-square" size={50} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    elevation: 4,
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
});
