import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TypesScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Tipos de Bullying</Text>

      {/* Bullying Físico */}
      <Text style={styles.sectionTitle}>Bullying Físico</Text>
      <Text style={styles.paragraph}>
        Envolve agressões corporais como empurrões, socos, chutes, ou qualquer contato físico que cause dor ou dano.
      </Text>
      <Text style={styles.example}>
        Exemplo: Empurrar repetidamente um colega no corredor da escola.
      </Text>

      {/* Bullying Verbal */}
      <Text style={styles.sectionTitle}>Bullying Verbal</Text>
      <Text style={styles.paragraph}>
        Uso de palavras para humilhar, insultar, ameaçar ou zombar de alguém.
      </Text>
      <Text style={styles.example}>
        Exemplo: Chamar um colega de apelidos ofensivos ou fazer comentários maldosos.
      </Text>

      {/* Bullying Social */}
      <Text style={styles.sectionTitle}>Bullying Social</Text>
      <Text style={styles.paragraph}>
        Exclusão, isolamento ou difamação que prejudica as relações sociais da vítima.
      </Text>
      <Text style={styles.example}>
        Exemplo: Ignorar alguém intencionalmente para que essa pessoa se sinta excluída.
      </Text>

      {/* Cyberbullying */}
      <Text style={styles.sectionTitle}>Cyberbullying (Bullying Virtual)</Text>
      <Text style={styles.paragraph}>
        Uso da internet, redes sociais, mensagens e outros meios digitais para atacar, ameaçar ou humilhar alguém.
      </Text>
      <Text style={styles.example}>
        Exemplo: Enviar mensagens ofensivas ou postar fotos embaraçosas de um colega nas redes sociais.
      </Text>

      <Text style={styles.footerNote}>Denuncie e apoie seus colegas. Juntos, podemos acabar com o bullying!</Text>
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
    marginBottom: 8,
    marginTop: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 6,
  },
  example: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#777',
    marginBottom: 10,
    marginLeft: 10,
  },
  footerNote: {
    marginTop: 30,
    fontStyle: 'italic',
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default TypesScreen;