import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/NOVA-LOGO.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Agenda Escolar</Text>
      </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 55,
    marginLeft: 20,
  },
  logo: {
    width: 50, // Ajuste o tamanho conforme necessário
    height: 50, // Ajuste o tamanho conforme necessário
    marginRight: 10,
  },
  title: {
    paddingLeft: 20,
    fontSize: 30,
    textAlign: 'center',
  },
});
