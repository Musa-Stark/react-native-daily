import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import StatCard from "../components/StatCard";
import OrderItem from "../components/OrderItem";

export default function Home() {
  const router = useRouter();

  const orders = [
    { id: "1", customer: "John Doe", total: 12.5 },
    { id: "2", customer: "Jane Smith", total: 9.0 },
    { id: "3", customer: "Alice Johnson", total: 14.75 },
  ];

  const stats = [
    { number: 12, label: "Today Orders" },
    { number: "$204", label: "Revenue" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrewLab</Text>
      <Text style={styles.subtitle}>Fresh coffee, fast delivery</Text>

      <View style={styles.statsContainer}>
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            number={stat.number}
            label={stat.label}
            onPress={() => console.log(stat.label)}
          />
        ))}
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30, marginTop: 30 }}
        renderItem={({ item }) => (
          <OrderItem
            order={item}
            onPress={() => router.push(`/order/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", paddingTop: 20 },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  statsContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
