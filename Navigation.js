import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import InfantilI from './turmas/Infantil-I';
import InfantilII from './turmas/Infantil-II';
import InfantilIII from './turmas/Infantil-III';
import InfantilIV from './turmas/Infantil-IV';
import InfantilV from './turmas/Infantil-V';
import PrimeiroAno from './turmas/PrimeiroAno';
import SegundoAno from './turmas/SegundoAno';
import TerceiroAno from './turmas/TerceiroAno';
import QuartoAno from './turmas/QuartoAno';
import QuintoAno from './turmas/QuintoAno';
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';
import Login from './Login';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Infantil I" component={InfantilI} />
        <Stack.Screen name="Infantil II" component={InfantilII} />
        <Stack.Screen name="Infantil III" component={InfantilIII} />
        <Stack.Screen name="Infantil IV" component={InfantilIV} />
        <Stack.Screen name="Infantil V" component={InfantilV} />
        <Stack.Screen name="1º Ano" component={PrimeiroAno} />
        <Stack.Screen name="2º Ano" component={SegundoAno} />
        <Stack.Screen name="3º Ano" component={TerceiroAno} />
        <Stack.Screen name="4º Ano" component={QuartoAno} />
        <Stack.Screen name="5º Ano" component={QuintoAno} />
        <Stack.Screen name="Sobre" component={About} />
        <Stack.Screen name="Política de Privacidade" component={PrivacyPolicy} />
        {/* Adicione outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleNavigate = (turma) => {
    navigation.navigate(turma);
  };

  const handleNavigateToAbout = () => {
    navigation.navigate('Sobre');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  const PrivacyPolicyStack = () => (
  navigation.navigate('Política de Privacidade')
);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {['Infantil I', 'Infantil II', 'Infantil III', 'Infantil IV', 'Infantil V',
       '1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano'].map((turma, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleNavigate(turma)}
        >
          <Text style={styles.buttonText}>{turma}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToAbout}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button}
          onPress={PrivacyPolicyStack} // Estava faltando as chaves aqui
        >
          <Text style={styles.buttonText}>Política de Privacidade</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',// cor de fundo
  },
  button: {
    backgroundColor: '#EB3337',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
