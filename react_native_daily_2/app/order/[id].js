import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function OrderDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Order #{id}</Text>
      <Text style={styles.subtitle}>Order detail</Text>
      <Text style={styles.text}>Customer name goes here</Text>
      <Text style={styles.text}>Total, items, status, etc.</Text>
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
  title: { color: "white", fontSize: 28, fontWeight: "700" },
  subtitle: { color: "#94a3b8", fontSize: 16, marginTop: 15 },
  text: { color: "#cbd5e1", fontSize: 16, marginTop: 4 },
});
