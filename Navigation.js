import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Infantil_I from './turmas/Infantil-I';
import Infantil_II from './turmas/Infantil-II';
import Infantil_III from './turmas/Infantil-III';
import Infantil_IV from './turmas/Infantil-IV';
import Infantil_V from './turmas/Infantil-V';
import Primeiro_Ano from './turmas/PrimeiroAno';
import Segundo_Ano from './turmas/SegundoAno';
import Terceiro_Ano from './turmas/TerceiroAno';
import Quarto_Ano from './turmas/QuartoAno';
import Quinto_Ano from './turmas/QuintoAno';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Infantil_I" component={Infantil_I} />
        <Stack.Screen name="Infantil_II" component={Infantil_II} />
        <Stack.Screen name="Infantil_III" component={Infantil_III} />
        <Stack.Screen name="Infantil_IV" component={Infantil_IV} />
        <Stack.Screen name="Infantil_V" component={Infantil_V} />
        <Stack.Screen name="Primeiro_Ano" component={Primeiro_Ano} />
        <Stack.Screen name="Segundo_Ano" component={Segundo_Ano} />
        <Stack.Screen name="Terceiro_Ano" component={Terceiro_Ano} />
        <Stack.Screen name="Quarto_Ano" component={Quarto_Ano} />
        <Stack.Screen name="Quinto_Ano" component={Quinto_Ano} />
        {/* Adicione outras telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleNavigate = (turma) => {
    navigation.navigate(turma);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {['Infantil_I', 'Infantil_II', 'Infantil_III', 'Infantil_IV', 'Infantil_V',
       'Primeiro_Ano', 'Segundo_Ano', 'Terceiro_Ano', 'Quarto_Ano', 'Quinto_Ano'].map((turma, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleNavigate(turma)}
        >
          <Text style={styles.buttonText}>{turma}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
