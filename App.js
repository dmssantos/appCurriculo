import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import foto from './src/assets/foto.jpeg';

import Card from './src/components/Card';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://linkedin.com/in/davidsantos');
        break;
      case 'github':
        Alert.alert('Meu github', 'https://github.com/in/davidsantos');
        break;
      case 'facebook':
        Alert.alert('Meu facebook', 'https://facebook.com/in/davidsantos');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>DAVID SANTOS</Text>
          <Text style={style.funcao}>Desenvolvedor FullStack</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card title="Formação Academica">
          <Text style={style.card_content_text}>UNESA</Text>
          <Text style={style.card_content_text}>DIO</Text>
          <Text style={style.card_content_text}>RocketSeat</Text>
        </Card>
        <Card title="Experiências Profissional">
          <Text style={style.card_content_text}>Casa</Text>
          <Text style={style.card_content_text}>Trabalho</Text>
          <Text style={style.card_content_text}>outros</Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
