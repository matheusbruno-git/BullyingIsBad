import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../config/theme';

const ActingUpScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Como Agir</Text>

      <Text style={styles.sectionTitle}>Se você é vítima</Text>
      <Text style={styles.listItem}>• Procure um adulto de confiança (professor, coordenador ou familiar).</Text>
      <Text style={styles.listItem}>• Não responda com violência.</Text>
      <Text style={styles.listItem}>• Mantenha a calma e registre os episódios (anote datas, locais, pessoas envolvidas).</Text>
      <Text style={styles.listItem}>• Busque apoio dos amigos e colegas que respeitam você.</Text>

      <Text style={styles.sectionTitle}>Se você é colega ou testemunha</Text>
      <Text style={styles.listItem}>• Apoie a vítima, mostre que ela não está sozinha.</Text>
      <Text style={styles.listItem}>• Denuncie o bullying a um adulto responsável.</Text>
      <Text style={styles.listItem}>• Não incentive ou participe do bullying.</Text>
      <Text style={styles.listItem}>• Seja um exemplo de respeito e empatia.</Text>

      <Text style={styles.sectionTitle}>Se você pratica bullying e quer mudar</Text>
      <Text style={styles.listItem}>• Reconheça que suas ações machucam outras pessoas.</Text>
      <Text style={styles.listItem}>• Peça desculpas sinceras às vítimas.</Text>
      <Text style={styles.listItem}>• Procure ajuda para entender seus sentimentos e controlar suas atitudes.</Text>
      <Text style={styles.listItem}>• Comprometa-se a respeitar e tratar todos com dignidade.</Text>

      <Text style={styles.sectionTitle}>O que não fazer</Text>
      <Text style={styles.listItem}>• Não ignore a situação achando que vai se resolver sozinha.</Text>
      <Text style={styles.listItem}>• Não praticar ou incentivar o bullying.</Text>
      <Text style={styles.listItem}>• Não culpar a vítima ou minimizar o problema.</Text>
      <Text style={styles.listItem}>• Não compartilhar ou espalhar conteúdos que humilham outras pessoas.</Text>

      <Text style={styles.footerNote}>Denuncie, apoie e faça a diferença. Juntos, podemos construir um ambiente mais seguro e respeitoso.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.electric_indigo,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
    color: colors.black,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 8,
    color: colors.ash_gray,
  },
  footerNote: {
    marginTop: 30,
    fontStyle: 'italic',
    fontSize: 16,
    color: colors.ash_gray,
    textAlign: 'center',
  },
});

export default ActingUpScreen;