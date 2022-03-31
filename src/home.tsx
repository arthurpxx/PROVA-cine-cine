import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filme da Semana</Text>
      <View style={styles.semana}>
        <View style={styles.dia}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700' }}>Seg-12</Text>
        </View>
        <View style={styles.dia}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700' }}>Ter-13</Text>
        </View>
        <View style={styles.dia}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700' }}>Qua-14</Text>
        </View>
        <View style={styles.dia}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '700' }}>Qui-15</Text>
        </View>
      </View>

      <View style={styles.cartaz}>
        <Image source={require('./img/bat.jpg')} style={styles.img} />
      </View>

      <View style={styles.container1}>
        <View style={styles.horario}>
          <Text style={{ color: 'white', textAlign: 'center' }}>14:30</Text>
        </View>
        <View style={styles.horario}>
          <Text style={{ color: 'white', textAlign: 'center' }}>14:30</Text>
        </View>
        <View style={styles.horario}>
          <Text style={{ color: 'white', textAlign: 'center' }}>14:30</Text>
        </View>
      </View>

      <View>
        <View>
          <Text></Text>
          <View></View>
        </View>

        <Text>Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.</Text>

        <View>
          <Text></Text>
        </View>
      </View>
      <View style={styles.pai}>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ingresso')}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
  },

  dia: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: 80,
    maxHeight: 70,
    backgroundColor: '#7A297A',
    margin: 12,
    borderRadius: 8,
    padding: 6,
  },

  semana: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    maxHeight: 80,
  },

  cartaz: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  img: {
    width: '75%',
    height: '90%',
    marginTop: 10,
  },

  container1: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  horario: {
    backgroundColor: '#7A297A',
    padding: 10,
    borderRadius: 8,
    width: '25%',
    color: 'white'
  },

  title: {
    fontSize: 40,
    textAlign: 'center'
  },

  pai: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    borderRadius: 8,
    backgroundColor: '#7A297A',
    color: 'white',
    width: '50%',
    padding: 10,
  }
});