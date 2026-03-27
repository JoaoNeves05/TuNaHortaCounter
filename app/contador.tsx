// App.js
import { onValue, ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { Button, ImageBackground, Text, View } from "react-native";
import { db } from "../.expo/lib/firebase";

export default function Contador() {
  const [count, setCount] = useState(0);

  const countRef = ref(db, "contador");

  useEffect(() => {
    const unsubscribe = onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setCount(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const increment = (amount: number) => {
    runTransaction(countRef, (current) => {
        return (current || 0) + amount;
        });
    };

  const decrement = () => {
    runTransaction(countRef, (current) => {
      if (current > 0) {
        return (current || 0) - 1;
      }
      return current;
    });
  };

  return (
    <ImageBackground
    source={require("../assets/images/bgImage.jpg")} // or local image
    style={{ flex: 1, width: "100%", height: "100%" }}
    resizeMode="cover"
  >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)", // optional overlay
      }}
    >
      <Text style={{ fontSize: 50, color: "#fff" }}>{count} 🍺</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Fino" onPress={() => increment(1)} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Caneca" onPress={() => increment(2)} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Enganei-me" onPress={decrement} />
      </View>
    </View>
  </ImageBackground>
  );
}