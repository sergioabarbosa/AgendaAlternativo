// Importe as bibliotecas necessárias do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiAxios from './api';

// Crie o componente funcional da página de login
const LoginPage = ({ navigation }) => {
  // Estados para armazenar o nome de usuário e senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o envio do formulário de login
  const handleLogin = async () => {
    try {
      // Simulando uma chamada à API para verificar as credenciais
      const response = await apiAxios.post('/api/signin', {
        username,
        password,
      });

      console.log(response);

      // Substitua este trecho com a lógica real de autenticação
      if (response.data.authenticated) {
        // Salve o nome de usuário no AsyncStorage para uso posterior
        await AsyncStorage.setItem('username', username);

        // Redirecione o usuário para a home
        navigation.replace('Home');
      } else {
        // Exiba uma mensagem de erro em caso de credenciais inválidas
        console.log('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App</Text>

      {/* Campos de entrada para nome de usuário e senha */}
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Botão para enviar o formulário de login */}
      <Button title="Login" onPress={handleLogin} />

      {/* Pode adicionar links para redefinir senha ou registrar-se */}
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '100%',
  },
});

// Exporte o componente
export default LoginPage;
