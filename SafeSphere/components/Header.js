import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Fala Sem Medo</Text>
        <Text style={styles.subtitle}>
            Diga não ao bullying. Diga sim ao respeito.
        </Text>
        <Image src={require('../assets/logo.png')} style={{ width: 100, height: 100, marginTop: 16 }} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 16,
        backgroundColor: '#4A90E2',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2d3e50',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        color: '#4a6572',
        textAlign: 'center',
        marginBottom: 32,
    },
});

export default Header;