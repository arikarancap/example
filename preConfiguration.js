import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function PreConfiguration() {
    return (
        <View style={styles.body}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30, margin: 20, marginTop: -100 }}>Pre-Configurations</Text>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText}>High Power</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Medium Power</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Text style={styles.buttonText}>Low Power</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4}>
                <Text style={styles.buttonText}>Custom</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#3C6255',
    },
    button1: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        margin: 10,
        width: '50%',

    },
    button2: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        margin: 10,
        width: '50%',
    },
    button3: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        margin: 10,
        width: '50%'
    },
    button4: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        margin: 10,
        width: '50%',
    },
    buttonText: {
        color: '#0A2647',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});