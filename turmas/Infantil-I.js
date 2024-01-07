import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import API from './api';
import { useEffect } from 'react';
import apiAxios from './api';
// import { MdDateRange } from 'react-icons/md';

export default function App() {

  const [loading, setLoading] = useState(true);

  const [atividadesList, setAtividadesList] = useState([]);

  const [atividadeList, setAtividade] = useState({
    atividadeSerie: 'Infantil I',
    agendastatus: false,
    acolhida: '',
    materias: {
        portugues: {
            isSelect: false,
            materia: 'Português',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        matematica: {
            isSelect: false,
            materia: 'Matemática',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        ensinoReligioso: {
            isSelect: false,
            materia: 'Ensino Religioso',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        historia: {
            isSelect: false,
            materia: 'História',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        geografia: {
            isSelect: false,
            materia: 'Geografia',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        ciencias: {
            isSelect: false,
            materia: 'Ciências',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        ingles: {
            isSelect: false,
            materia: 'Inglês',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        musica: {
            isSelect: false,
            materia: 'Música',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        Linguagem: {
            isSelect: false,
            materia: 'Linguagem',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        sociedade: {
            isSelect: false,
            materia: 'Sociedade',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
        natureza: {
            isSelect: false,
            materia: 'Natureza',
            objetivoConhecimento: '',
            habilidades: '',
            metodologia: '',
            atividadeMaterial: '',
            links: '',
            atividadeMaterialCasa:  '',
            linksCasa: '',
        },
    },
  });
  

  useEffect(() => {
    const fetchAtividades = async () => {
        try {
            const response = await apiAxios.get('/api/agendaOnline/agenda');
            const filteredAtividades = response.data.filter(
                (atividade) => atividade.atividadeSerie === 'Infantil I'
                );
                console.log(response.data)
                console.log(filteredAtividades)
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
    <View style={styles.container}>
      <Text>Testando APP</Text>
      <div className="atv-agenda-item-all">
                                    {atividadesList
                                        .map((atividadeItem) => (
                                            <div
                                                className="atv-agenda-item-datas"
                                                key={atividadeItem.id}
                                            >
                                                <div className="atv-agenda-item-datas-data" style={{ textAlign: "center" }}>
                                                    {/* <MdDateRange /> {format(new Date(atividadeItem.date), 'dd/MM/yyyy, eeee', { locale: pt })} */}
                                                </div>
                                                <div className="atv-agenda-item-datas-content">
                                                    <div>
                                                        <strong>Série:</strong> {atividadeItem.atividadeSerie}
                                                    </div>
                                                    <div>
                                                        <strong>Matérias do dia:</strong>
                                                        <ul>
                                                            {Object.entries(atividadeItem.materias).map(([materiaKey, materia]) => (
                                                                materia.isSelect && (
                                                                    <div key={materiaKey}>
                                                                        {materia.materia}
                                                                        {materia.atividadeMaterial && (
                                                                            <li>
                                                                                <strong>Atividade:</strong> {materia.atividadeMaterial}
                                                                            </li>
                                                                        )}
                                                                    </div>
                                                                )
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
