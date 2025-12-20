import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Btn({
  onPress,
  style = { backgroundColor: "green", left: 23 },
  text = "+",
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        styles.Btn,
        pressed && { opacity: 0.6, transform: [{ scale: 0.97 }] },
      ]}
      hitSlop={20}
      onPress={onPress}
    >
      <Text style={styles.BtnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Btn: {
    aspectRatio: 1 / 1,
    width: 65,
    position: "absolute",
    bottom: 24,
    zIndex: 999,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  BtnText: {
    alignSelf: "center",
    fontSize: 28,
    color: "white",
  },
});
