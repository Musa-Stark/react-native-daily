import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  FlatList,
} from "react-native";

export default function App() {
  const pressed = (type) => {
    console.log(`Clicked: ${type}!`);
    Alert.alert("You clicked", `You clicked '${type}'`);
  };

  const orderPressed = (item) => {
    Alert.alert(`Order #${item.id}`, `${item.customer} - $${item.total.toFixed(2)}`);
  };

  const orders = [
    { id: "1", customer: "John Doe", total: 12.5 },
    { id: "2", customer: "Jane Smith", total: 9.0 },
    { id: "3", customer: "Alice Johnson", total: 14.75 },
    { id: "4", customer: "Bob Brown", total: 8.5 },
    { id: "5", customer: "Devloper Musa", total: 10.543 },
    { id: "6", customer: "Dr. Hira", total: 10.543 },
    { id: "7", customer: "Esa Jr", total: 85 },
    { id: "8", customer: "Maimoona", total: 5 },
    { id: "9", customer: "Nodi", total: 0.5 },
    { id: "10", customer: "Haseen", total: 4.5 },
  ];

  const renderOrder = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.orderItem,
        pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
      ]}
      onPress={() => orderPressed(item)}
    >
      <Text style={styles.orderNo}>#{item.id}</Text>
      <Text style={styles.orderText}>{item.customer}</Text>
      <Text style={styles.orderTotal}>${item.total.toFixed(2)}</Text>
    </Pressable>
  );

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

      <FlatList
        data={orders}
        renderItem={renderOrder}
        style={styles.ordersList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
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
  ordersList: {
    borderWidth: 1,
    width: "100%",
    marginTop: 30,
  },
  orderItem: {
    width: "90%",
    backgroundColor: "rgba(56, 56, 56, 0.77)",
    marginBottom: 12,
    margin: "auto",
    paddingVertical: 13,
    paddingHorizontal: 23,
    borderRadius: 15,
  },
  orderNo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orderText: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 4,
  },
  orderTotal: {
    marginTop: 2,
    color: "white",
    fontSize: 16,
  },
});
