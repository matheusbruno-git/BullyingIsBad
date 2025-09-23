import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';


const HelpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Report')}
            >
                <Text style={styles.buttonText}>Report Bullying</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Learn')}
            >
                <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Support')}
            >
                <Text style={styles.buttonText}>Get Support</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f7fb',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    button: {
        backgroundColor: '#ff6f61',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        marginVertical: 8,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default HelpScreen;