import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { colors } from '../config/theme';

const ResourcesScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>Recursos e Referências</Text>

      <Text style={styles.sectionTitle}>Materiais Extras</Text>
      <TouchableOpacity onPress={() => openLink('https://www.unicef.org/brazil/combatendo-o-bullying')}>
        <Text style={styles.link}>• UNICEF - Combatendo o Bullying (cartilhas e vídeos)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.nopbullying.com/')}>
        <Text style={styles.link}>• No Bullying - Informações e suporte</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://safernet.org.br/')}>
        <Text style={styles.link}>• SaferNet Brasil - Segurança na internet e combate ao cyberbullying</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Glossário Básico</Text>
      <Text style={styles.listItem}>• Bullying: comportamento agressivo repetitivo que causa sofrimento.</Text>
      <Text style={styles.listItem}>• Cyberbullying: bullying através de meios digitais.</Text>
      <Text style={styles.listItem}>• Assédio: comportamento que causa desconforto ou intimidação.</Text>
      <Text style={styles.listItem}>• Empatia: capacidade de se colocar no lugar do outro.</Text>
      <Text style={styles.listItem}>• Testemunha: pessoa que presencia o bullying.</Text>
      <Text style={styles.listItem}>• Mediação: processo de resolução de conflitos com ajuda de terceiros.</Text>

      <Text style={styles.sectionTitle}>Fontes Citadas</Text>
      <Text style={styles.reference}>• UNICEF Brasil, “Combatendo o Bullying”, acesso em 10/09/2025. https://www.unicef.org/brazil/combatendo-o-bullying</Text>
      <Text style={styles.reference}>• Centers for Disease Control and Prevention (CDC), “Bullying Prevention”, acesso em 10/09/2025. https://www.cdc.gov/violenceprevention/youthviolence/bullying/index.html</Text>
      <Text style={styles.reference}>• SaferNet Brasil, “Segurança na Internet”, acesso em 10/09/2025. https://safernet.org.br/</Text>

      <Text style={styles.footerNote}>Agradecemos a todos os que trabalham para tornar a escola e a internet lugares mais seguros e respeitosos.</Text>
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
    color: '#333',
  },
  link: {
    fontSize: 16,
    color: colors.medium_slate_blue,
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 6,
    color: colors.ash_gray,
  },
  reference: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  footerNote: {
    marginTop: 30,
    fontStyle: 'italic',
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});

export default ResourcesScreen