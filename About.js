import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function About() {
  return (
  <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/NOVA-LOGO.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Agenda Escolar </Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutText}>
          O aplicativo Agenda Escolar foi desenvolvido para facilitar a
          comunicação entre pais e professores. Através dele, os professores
          poderão enviar atividades e avisos para os pais, que poderão
          visualizar e confirmar o recebimento das atividades.
        </Text>
        <Text style={styles.aboutText}>
          O aplicativo foi desenvolvido por alunos pela equipe de Engenaria do colégio Alternativo Colaço.
        </Text>
        <Text style={styles.aboutText}>
          Desenvolvido por: Sérgio Alves Barbosa. Analista de Sistemas e Programador.
          Para suporte e contato poor Whatsapp: (85)999924744
        </Text>
      </View>
      {/* add a copirygth */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  about: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 20,
    justifyContent: 'center',
    textAlign: 'justify',
  },
});