import { View, Text, Pressable, StyleSheet } from "react-native";

export default function StatCard({ number, label, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
      ]}
      onPress={onPress}
      hitSlop={20}
    >
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(56, 56, 56, 0.77)",
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  number: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
  },
});
