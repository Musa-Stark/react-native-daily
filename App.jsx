import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

export default function App() {
  const pressed = (type) => {
    console.log(`Clicked: ${type}!`);
    Alert.alert("You clicked", `You clicked '${type}'`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrewLab</Text>
      <Text style={styles.subtitle}>Fresh coffee, fast delivery</Text>
      <View style={styles.cardsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.cards,
            pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
          ]}
          onPress={() => pressed("Today Orders")}
          hitSlop={44}
        >
          <Text style={styles.cardNumber}>12</Text>
          <Text style={styles.cardText}>Today Orders</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.cards,
            pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
          ]}
          onPress={() => pressed("Revenue")}
          hitSlop={44}
        >
          <Text style={styles.cardNumber}>$204</Text>
          <Text style={styles.cardText}>Revenue</Text>
        </Pressable>
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
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  cardText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
