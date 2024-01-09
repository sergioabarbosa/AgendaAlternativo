import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import apiAxios from '../api';
import moment from 'moment';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [atividadesList, setAtividadesList] = useState([]);

  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const response = await apiAxios.get('/api/agendaOnline/agenda');
        const filteredAtividades = response.data.filter((atividade) => atividade.atividadeSerie === 'Terceiro Ano');
        setAtividadesList(filteredAtividades.reverse());
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar atividades:', error);
        setLoading(false);
      }
    };
    fetchAtividades();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Testando APP</Text>
          <View style={styles.atividadeList}>
            {atividadesList.map((atividadeItem) => (
              <View style={styles.atvAgendaItem} key={atividadeItem._id}>
                <View style={styles.atvAgendaItemData}>
                  <Text>{moment(atividadeItem.date).format('DD/MM/YYYY HH:mm:ss')}</Text>
                </View>
                <View style={styles.atvAgendaItemStatus}>
                  <Text>Status: {atividadeItem.agendastatus ? 'Atividade agendada' : 'Atividade não agendada'}</Text>
                </View>
                <View style={styles.id}>
                  <Text>ID da postagem: {atividadeItem._id}</Text>
                </View>
                <View style={styles.atvAgendaItemContent}>
                  <Text>Série: {atividadeItem.atividadeSerie}</Text>
                  <Text>Matérias do dia:</Text>
                  {Object.entries(atividadeItem.materias).map(([materiaKey, materia]) => (
                    materia.isSelect && (
                      <View key={materiaKey}>
                        <Text>{materia.materia}</Text>
                        {materia.atividadeMaterial && (
                          <Text>Atividade: {materia.atividadeMaterial}</Text>
                        )}
                      </View>
                    )
                  ))}
                </View>
              </View>
            ))}
          </View>
          <StatusBar style="auto" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  atividadeList: {
    marginVertical: 10,
  },
  atvAgendaItem: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginVertical: 5,
  },
  atvAgendaItemData: {
    textAlign: 'left',
  },
  atvAgendaItemStatus: {
    textAlign: 'left',
  },
  id: {
    textAlign: 'left',
  },
  atvAgendaItemContent: {
    textAlign: 'left',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
