import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("./img/Papo_de_Gerente_1.jpg")}
          style={styles.cardLogo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Crie sua conta</Text>
        <Text style={styles.subtitle}>
          Crie uma conta para que você possa manter contatos com todas as empresas ao redor.
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nome da empresa"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          value={confirm}
          onChangeText={setConfirm}
          placeholder="Confirme a senha"
          style={styles.input}
          secureTextEntry
        />

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.btnPressed,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text 
          style={styles.primaryButtonText}>Cadastrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Já tem uma conta?</Text>
        </Pressable>

        <Text style={styles.orText}>Ou continue com</Text>
        <View style={styles.socialIconsRow}>
          <Pressable
            style={({ pressed }) => [
              styles.iconPlaceholder,
              pressed && styles.iconPressed,
            ]}
            android_ripple={{ color: "#e6e6e6" }}
            onPress={() => {}}
          >
            <FontAwesome name="google" size={18} color="#444" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.iconPlaceholder,
              pressed && styles.iconPressed,
            ]}
            android_ripple={{ color: "#e6e6e6" }}
            onPress={() => {}}
          >
            <FontAwesome name="facebook" size={18} color="#3b5998" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.iconPlaceholder,
              pressed && styles.iconPressed,
            ]}
            android_ripple={{ color: "#e6e6e6" }}
            onPress={() => {}}
          >
            <Ionicons name="logo-apple" size={18} color="#000" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
   width: 320,
    minHeight: 640,
    backgroundColor: "#fff",
    padding: 24,
    alignItems: "center",
  },
  cardLogo: { width: 120, height: 120, marginBottom: 6 },
  title: { fontSize: 22, fontWeight: "700", color: "#17318b", marginTop: 8 },
  subtitle: {
    fontSize: 13,
    color: "#333",
    marginVertical: 12,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "#f3f5fb",
    paddingHorizontal: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e6eefb",
  },
  primaryButton: {
    width: "100%",
    paddingVertical: 13,
    backgroundColor: "#1836d3",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButtonText: { color: "#fff", fontWeight: "700" },
  link: { color: "#666", marginTop: 12 },
  orText: { color: "#9aa4b2", marginTop: 14 },
  socialIconsRow: { flexDirection: "row", marginTop: 8 },
  iconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  iconPressed: { opacity: 0.6, transform: [{ scale: 0.98 }] },

});
