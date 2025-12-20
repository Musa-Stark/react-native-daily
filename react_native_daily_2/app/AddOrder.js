import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddOrder() {
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState("");
  const nameRef = useRef();
  const amountRef = useRef();

  const handleSubmit = async () => {
    if (!customer || !total)
      return Alert.alert("Error", "All fields are required");

    console.log(`${customer} - $${parseFloat(total).toFixed(2)}`);

    Alert.alert(
      "Order Added",
      `${customer} - $${parseFloat(total).toFixed(2)}`
    );
    await AsyncStorage.setItem("orders", JSON.stringify({ customer, total }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Place Order</Text>
      <TextInput
        placeholder="Customer Name"
        value={customer}
        onChangeText={setCustomer}
        style={styles.input}
        placeholderTextColor="#888"
        returnKeyType="go"
        keyboardType="visible-password"
        onSubmitEditing={() => amountRef.current.focus()}
        ref={nameRef}
      />
      <TextInput
        placeholder="Total Amount"
        value={total}
        onChangeText={setTotal}
        secureTextEntry={false}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#888"
        ref={amountRef}
        returnKeyType="go"
        onSubmitEditing={() => nameRef.current.focus()}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    backgroundColor: "#333",
    color: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1e40af",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
