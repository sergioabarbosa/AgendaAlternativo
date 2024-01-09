import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Infantil_I from './turmas/Infantil-I';
import Infantil_II from './turmas/Infantil-II';
import Infantil_III from './turmas/Infantil-III';
import Infantil_IV from './turmas/Infantil-IV';
import Infantil_V from './turmas/Infantil-V';

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
      {['Infantil_I', 'Infantil_II', 'Infantil_III', 'Infantil_IV', 'Infantil_V'].map((turma, index) => (
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
    backgroundColor: '#3498db',
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
