import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

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

  // state to manage the expanded phrase index
  const [expandedPhraseIndex, setExpandedPhraseIndex] = useState(null);

  const togglePhrase = (index) => {
    setExpandedPhraseIndex(expandedPhraseIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
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

      {/* Phrase List Section */}
      <View style={styles.phraseList}>
        {phrases.map((phrase, index) => (
          <View key={index} style={styles.phraseContainer}>
            <TouchableOpacity
              onPress={() => togglePhrase(index)}
              style={styles.phraseRow}
            >
              <Text style={styles.phraseText}>{phrase.phrase}</Text>
              <Text style={styles.dropDownButton}>
                {expandedPhraseIndex === index ? "-" : "+"}
              </Text>
            </TouchableOpacity>
            {expandedPhraseIndex === index && (
              <View style={styles.details}>
                <Text style={styles.detailsText}>
                  <Text style={styles.label}>Meaning: </Text>
                  {phrase.meaning}
                </Text>
                <Text style={styles.detailsText}>
                  <Text style={styles.label}>Pronunciation: </Text>
                  {phrase.pronunciation}
                </Text>
                <Text style={styles.detailsText}>
                  <Text style={styles.label}>Usage: </Text>
                  {phrase.usage}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
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
  phraseList: {
    padding: 16,
  },
  phraseContainer: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  phraseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E3F2FD",
  },
  phraseText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropDownButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200EE",
  },
});
