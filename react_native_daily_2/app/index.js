import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";
import StatCard from "../components/StatCard";
import { useEffect } from "react";
import OrderItem from "../components/OrderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const router = useRouter();

  const fetchOrders = async () => {
    const orders = (JSON.parse(await AsyncStorage.getItem("orders"))) || [];
    console.log("Orders:", JSON.stringify(orders, null, 2));

  };

  useEffect(() => {
    fetchOrders();
  }, []);

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
      <Pressable
        style={({ pressed }) => [
          styles.addBtn,
          pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
        ]}
        hitSlop={20}
        onPress={() => router.push("/AddOrder")}
      >
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>

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
        contentContainerStyle={{
          paddingBottom: 30,
          marginTop: 30,
        }}
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
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingTop: 20,
  },
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
  addBtn: {
    aspectRatio: 1 / 1,
    width: 65,
    position: "absolute",
    bottom: 24,
    zIndex: 999,
    right: 23,
    backgroundColor: "forestgreen",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  addBtnText: {
    alignSelf: "center",
    fontSize: 28,
    color: "white",
  },
});
