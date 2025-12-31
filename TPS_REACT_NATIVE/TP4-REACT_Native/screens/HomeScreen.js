<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
=======
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
>>>>>>> a1f7711 (Initial commit)

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Ionicons name="home" size={60} color="#fff" />
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Page d'accueil de l'application</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>Voir les détails</Text>
=======
      <Text style={styles.title}>🏠 Accueil</Text>
      <Text style={styles.subtitle}>
        Bienvenue dans l’application.  
        Appuie pour voir les détails.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { id: 42 })}
      >
        <Text style={styles.buttonText}>Voir les détails ➜</Text>
>>>>>>> a1f7711 (Initial commit)
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#e6e6e6',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#4A90E2',
    fontWeight: 'bold',
=======
    backgroundColor: "#F2F6FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0A84FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
>>>>>>> a1f7711 (Initial commit)
  },
});
