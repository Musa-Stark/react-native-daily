import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrewLab</Text>
      <Text style={styles.subtitle}>Fresh coffee, fast delivery</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.cards}>
          <Text style={styles.cardNumber}>12</Text>
          <Text style={styles.cardText}>Today Orders</Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.cardNumber}>$204</Text>
          <Text style={styles.cardText}>Revenue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginTop: 15,
  },
  cardsContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
  cards: {
    backgroundColor: "rgba(56, 56, 56, 0.77)",
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  cardNumber: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  cardText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
  },
});
