import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { colors } from './config/theme';


const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Juntos Contra o Bullying</Text>
      </View>

      {/* Introdução */}
      <View style={styles.intro}>
        <Text style={styles.subtitle}>Juntos Podemos Combater o Bullying</Text>
        <Text style={styles.text}>
          Este portal tem como objetivo informar e ajudar todos a entenderem como o bullying afeta as pessoas e como agir para preveni-lo. Não estamos sozinhos nessa luta!
        </Text>
      </View>

      {/* Cards de Navegação */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('./screens/InfoScreen')}>
          <Text style={styles.cardTitle}>O que é Bullying</Text>
          <Text style={styles.cardText}>
            Entenda o que é bullying, suas diferenças em relação a conflitos e como identificar sinais de que alguém está sofrendo.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('./screens/TypesScreen')}>
          <Text style={styles.cardTitle}>Tipos de Bullying</Text>
          <Text style={styles.cardText}>
            Conheça os diferentes tipos de bullying: físico, verbal, social e virtual (cyberbullying).
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('./screens/ActingUpScreen')}>
          <Text style={styles.cardTitle}>Como Agir</Text>
          <Text style={styles.cardText}>
            Aprenda o que fazer se você é vítima, testemunha ou até mesmo se você está praticando bullying e quer mudar.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('./screens/ResourcesScreen')}>
          <Text style={styles.cardTitle}>Recursos e Referências</Text>
          <Text style={styles.cardText}>
            Acesse materiais extras, um glossário básico e as fontes citadas para aprofundar seu conhecimento.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('./screens/HelpScreen')}>
          <Text style={styles.cardTitle}>Ajuda Imediata</Text>
          <Text style={styles.cardText}>
            Encontre contatos de ajuda e suporte para situações de bullying.
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 | Todos os direitos reservados</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.electric_indigo,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  intro: {
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  cardsContainer: {
    marginTop: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    elevation: 5, // Para dar efeito de sombra
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: colors.ash_gray,
    marginTop: 10,
  },
  footer: {
    backgroundColor: colors.medium_slate_blue,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
