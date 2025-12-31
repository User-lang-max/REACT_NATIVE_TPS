<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={50} color="#4A90E2" />
      <Text style={styles.title}>Détails</Text>
      <Text style={styles.text}>
        Cet écran affiche des informations détaillées sur le contenu sélectionné.
        Il est conçu pour la lecture et la compréhension.
      </Text>
=======
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DetailsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Détails</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID reçu :</Text>
        <Text style={styles.value}>{route?.params?.id}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Retour</Text>
      </TouchableOpacity>
>>>>>>> a1f7711 (Initial commit)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    marginVertical: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
=======
    backgroundColor: "#FFF7E6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: "#888",
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF9500",
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: "#0A84FF",
>>>>>>> a1f7711 (Initial commit)
  },
});
