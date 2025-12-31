<<<<<<< HEAD
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Ionicons name="settings" size={50} color="#333" />
      <Text style={styles.title}>Paramètres</Text>
=======
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Paramètres</Text>
      <Text style={styles.text}>
        Gérez vos préférences et options de l’application.
      </Text>
>>>>>>> a1f7711 (Initial commit)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
=======
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
>>>>>>> a1f7711 (Initial commit)
  },
});
