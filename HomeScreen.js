import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleProfile = () => navigation.navigate("Profile");
  const handleChat = () => navigation.navigate("Chat");
  const handleLogout = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () =>
          navigation.reset({ index: 0, routes: [{ name: "Welcome" }] }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("./img/Papo_de_Gerente_1.jpg")}
          resizeMode="contain"
        />
      
        <TouchableOpacity style={styles.action} onPress={handleProfile}>
          <FontAwesome name="user-circle" size={36} color="#2c3e50" />
          <Text style={styles.actionText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={handleChat}>
          <Ionicons name="chatbubble-ellipses" size={34} color="#2c3e50" />
          <Text style={styles.actionText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.action, styles.logout]} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={28} color="#fff" />
          <Text style={[styles.actionText, styles.logoutText]}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HomeScreen}>
        <View style={styles.container}
        >
          

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
   
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
  },
  action: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "transparent",
    marginTop: 12,
  },
  actionText: {
    marginLeft: 12,
    fontSize: 18,
    color: "#2c3e50",
    fontWeight: "600",
  },
  logout: {
    backgroundColor: "#e74c3c",
    justifyContent: "flex-start",
  },
  logoutText: {
    color: "#fff",
    textShadowColor: "#000000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
});