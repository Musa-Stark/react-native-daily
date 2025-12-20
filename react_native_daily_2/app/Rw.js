import { View, Text, StyleSheet } from "react-native";
import Btn from "../components/Btn";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { useState } from "react";

export default function Rw() {
  const [imgInfo, setImgInfo] = useState({
    src: null,
    width: null,
    height: null,
  });

  console.log(imgInfo);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!result.canceled) {
      console.log(result);
      setImgInfo({
        src: result.assets[0].uri,
        width: result.assets[0].width,
        height: result.assets[0].height,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is RW page</Text>
      <Btn text="📷" onPress={pickImage} />
      {imgInfo.src !== null && (
        <Image source={`${imgInfo.src}`} style={{ width: 100, height: 100 }} />
      )}
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
});
