import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
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

  // state to manage quiz answer and feedback
  const [isEnglishToFilipino, setIsEnglishToFilipino] = useState(true);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  // quiz answer validation
  const checkAnswer = () => {
    const correctAnswer = isEnglishToFilipino
      ? phrases.find(
          (p) => p.meaning.toLowerCase() === quizAnswer.toLowerCase()
        )
      : phrases.find((p) => p.word.toLowerCase() === quizAnswer.toLowerCase());

    if (correctAnswer) {
      setQuizFeedback("Correct!");
    } else {
      setQuizFeedback("Incorrect! Try again.");
    }
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

      {/* Quiz Section */}
      <View style={styles.quizSection}>
        <Text style={styles.quizTitle}>Quiz Section</Text>
        <View style={styles.switchRow}>
          <Text>
            {isEnglishToFilipino
              ? "English to Filipino"
              : "Filipino to English"}
          </Text>
          <Switch
            value={isEnglishToFilipino}
            onValueChange={(value) => setIsEnglishToFilipino(value)}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder={
            isEnglishToFilipino
              ? "Type the Filipino word for the English phrase..."
              : "Type the English word for the Filipino phrase..."
          }
          onChangeText={(text) => setQuizAnswer(text)}
          value={quizAnswer}
        />
        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {quizFeedback ? (
          <Text style={styles.feedback}>{quizFeedback}</Text>
        ) : null}
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
  details: {
    padding: 16,
    backgroundColor: "#EDE7F6",
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  quizSection: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    marginTop: 16,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  feedback: {
    marginTop: 8,
    fontSize: 16,
    color: "#00796B",
  },
});
