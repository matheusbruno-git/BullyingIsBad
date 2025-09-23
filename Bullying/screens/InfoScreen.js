import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const InfoScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>O que é Bullying</Text>

      <Text style={styles.sectionTitle}>Definição</Text>
      <Text style={styles.paragraph}>
        Bullying é um comportamento agressivo, intencional e repetitivo que causa dor ou desconforto a outra pessoa. Pode ser físico, verbal, social ou virtual e geralmente envolve um desequilíbrio de poder entre quem pratica e quem sofre.
      </Text>

      <Text style={styles.sectionTitle}>Diferença entre Conflito e Bullying</Text>
      <Text style={styles.paragraph}>
        Conflitos são desentendimentos normais entre pessoas com opiniões diferentes, onde ambas as partes têm poder semelhante e a situação geralmente é passageira.
      </Text>
      <Text style={styles.paragraph}>
        Bullying, por outro lado, envolve uma pessoa ou grupo que usa repetidamente sua força ou poder para machucar, intimidar ou excluir outra pessoa que tem menos poder.
      </Text>

      <Text style={styles.sectionTitle}>Sinais de que alguém pode estar sofrendo Bullying</Text>
      <Text style={styles.listItem}>• Mudanças repentinas no comportamento ou humor</Text>
      <Text style={styles.listItem}>• Evitar ir à escola ou a determinados lugares</Text>
      <Text style={styles.listItem}>• Quedas no rendimento escolar</Text>
      <Text style={styles.listItem}>• Ferimentos inexplicáveis</Text>
      <Text style={styles.listItem}>• Isolamento social ou perda de amigos</Text>
      <Text style={styles.listItem}>• Dificuldade para dormir ou ansiedade</Text>

      <Text style={styles.footerNote}>Procure um adulto de confiança se você ou alguém que conhece apresentar esses sinais.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 6,
    color: '#555',
  },
  footerNote: {
    marginTop: 30,
    fontStyle: 'italic',
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default InfoScreen;