import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Ingresso() {
  return (
    <View style={styles.container}>
      <View style={styles.all}>
        <View style={styles.content}>
          <View style={styles.ingresso}>
            <Text style={styles.texto}>+</Text>
            <Text style={styles.texto}>1</Text>
            <Text style={styles.texto}>-</Text>
          </View>
          <Text style={{ marginHorizontal: 20, color: 'black', fontWeight: '700' }}>Ingresso Inteira</Text>
          <View style={styles.ticket}>
            <Text style={styles.texto}>R$ 15,00</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.ingresso}>
            <Text style={styles.texto}>+</Text>
            <Text style={styles.texto}>0</Text>
            <Text style={styles.texto}>-</Text>
          </View>
          <Text style={{ marginHorizontal: 20, color: 'black', fontWeight: '700' }}>Ingresso Meia</Text>
          <View style={styles.ticket}>
            <Text style={styles.texto}>R$ 7,50</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.ingresso}>
            <Text style={styles.texto}>+</Text>
            <Text style={styles.texto}>0</Text>
            <Text style={styles.texto}>-</Text>
          </View>
          <Text style={{ marginHorizontal: 20, color: 'black', fontWeight: '700' }}>3D Ingresso Inteira</Text>
          <View style={styles.ticket}>
            <Text style={styles.texto}>R$ 19,00</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.ingresso}>
            <Text style={styles.texto}>+</Text>
            <Text style={styles.texto}>0</Text>
            <Text style={styles.texto}>-</Text>
          </View>
          <Text style={{ marginHorizontal: 20, color: 'black', fontWeight: '700' }}>3D Ingresso Meia</Text>
          <View style={styles.ticket}>
            <Text style={styles.texto}>R$ 9,50</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  ingresso: {
    backgroundColor: '#7a297a',
    borderRadius: 20,
    padding: 20
  },

  texto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  ticket: {
    height: '50%',
    width: '30%',
    backgroundColor: '#7a297a',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  all: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }
});