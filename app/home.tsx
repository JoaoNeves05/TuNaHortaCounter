import { get, ref } from "firebase/database";
import { useState } from "react";
import { Alert, Button, ImageBackground, Text, TextInput, View } from "react-native";
import { db } from "./firebase";
import { router } from "expo-router";

export default function Home() {
  const [code, setCode] = useState("");

  const codigoRef = ref(db, "codigo");

  const handleLogin = async () => {
    try {
      const snapshot = await get(codigoRef);
      const CORRECT_CODE = snapshot.val();
      if (code == CORRECT_CODE) {
        code == "";
        router.push("/contador");
      } else {
        code == "";
        Alert.alert("Erro", "Código incorreto ❌");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível verificar o código");
    }
  };

  return (
    <ImageBackground
  source={require("../assets/images/bgImage.jpg")}
  style={{ flex: 1, width: "100%", height: "100%" }}
  resizeMode="cover"
>
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}
  >
    <View
      pointerEvents="none"
      style={{
        position: "absolute",
        width: 350,
        height: 250,
        backgroundColor: "rgba(0, 47, 255, 0.24)", // semi-transparente
        borderRadius: 20,
        zIndex: -1,
      }}
    />

    <Text style={{ fontSize: 28, marginBottom: 20 }}>
      Introduz o código 🔐
    </Text>

    <TextInput
      placeholder="Código"
      value={code}
      onChangeText={setCode}
      secureTextEntry
      style={{
        borderWidth: 1,
        width: "80%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: "#fff",
      }}
    />

    <Button title="Entrar" 
    onPress={handleLogin}
    />
  </View>
</ImageBackground>
  );
}