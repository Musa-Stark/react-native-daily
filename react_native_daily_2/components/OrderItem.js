import { Pressable, Text, StyleSheet } from "react-native";

export default function OrderItem({ order, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.item,
        pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
      ]}
      onPress={onPress}
      hitSlop={20}
    >
      <Text style={styles.id}>#{order.id}</Text>
      <Text style={styles.customer}>{order.customer}</Text>
      <Text style={styles.total}>${order.total.toFixed(2)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "90%",
    backgroundColor: "rgba(56, 56, 56, 0.77)",
    paddingVertical: 13,
    paddingHorizontal: 23,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 12,
  },
  id: { color: "white", fontSize: 18, fontWeight: "bold" },
  customer: { color: "#cbd5e1", fontSize: 16, marginTop: 4 },
  total: { color: "white", fontSize: 16, marginTop: 2 },
});
