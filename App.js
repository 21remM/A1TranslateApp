import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function App() {
  // array for phrases
  const phrases = [
    {
      phrase: "Kumusta?",
      meaning: "How are you?",
      pronunciation: "koo-moos-TAH",
      usage: 'Casual greeting, like "Hello" or "How are you?"',
    },
    {
      phrase: "Salamat.",
      meaning: "Thank you.",
      pronunciation: "sa-LA-mat",
      usage: "To express gratitude.",
    },
    {
      phrase: "Magandang araw.",
      meaning: "Good day.",
      pronunciation: "ma-gan-DANG A-rao",
      usage:
        'A formal or polite greeting during the day. Variations include "Magandang umaga" (Good morning), "Magandang hapon" (Good afternoon), and "Magandang gabi" (Good evening).',
    },
    {
      phrase: "Pasensya na.",
      meaning: "Sorry / Please be patient with me.",
      pronunciation: "pa-SEN-sya na",
      usage: "When apologizing lightly or asking for understanding.",
    },
    {
      phrase: "Ingat ka.",
      meaning: "Take care.",
      pronunciation: "EENG-at ka",
      usage: "Often said when someone is leaving.",
    },
  ];

  return (
    <View style={styles.header}>
      <Image
        source={require("./assets/filipiknow.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>
        Select a phrase to find out its meaning and pronunciation.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    marginTop: 50,
    height: 200,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
});
