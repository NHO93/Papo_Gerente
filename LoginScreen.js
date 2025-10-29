import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.outer}>
      <View style={styles.card}>
        <Image
          source={require("./img/Papo_de_Gerente_1.jpg")}
          style={styles.cardLogo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Bem vindo ao Papo de Gerente!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9AA4B2"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#9AA4B2"
          secureTextEntry={true}
        />

        <Pressable onPress={() => {}} style={{ alignSelf: "flex-end" }}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.btnPressed,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.primaryButtonText}>Entrar</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.createAccountText}>Criar uma nova conta</Text>
        </Pressable>

        <Text style={styles.orText}>Ou continue com</Text>
        <View style={styles.socialIconsRow}>
          <Pressable
            style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]}
            android_ripple={{ color: '#e6e6e6' }}
            onPress={() => { /* Google placeholder */ }}
            accessibilityLabel="Entrar com Google"
          >
            <FontAwesome name="google" size={18} color="#444" />
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]}
            android_ripple={{ color: '#e6e6e6' }}
            onPress={() => { /* Facebook placeholder */ }}
            accessibilityLabel="Entrar com Facebook"
          >
            <FontAwesome name="facebook" size={18} color="#3b5998" />
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]}
            android_ripple={{ color: '#e6e6e6' }}
            onPress={() => { /* Apple placeholder */ }}
            accessibilityLabel="Entrar com Apple"
          >
            <Ionicons name="logo-apple" size={18} color="#000" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
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
  header: {
    marginBottom: 40,
  },
  cardLogo: { width: 140, height: 140, marginBottom: 6 },
  title: { fontSize: 22, fontWeight: "700", color: "#1a4f86", marginTop: 8 },
  subtitle: {
    fontSize: 13,
    color: "#55606b",
    marginBottom: 12,
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#f3f5fb",
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6eefb",
  },
  forgotPasswordText: { color: "#3b6aa1", fontSize: 13, marginBottom: 6 },
  primaryButton: {
    width: "100%",
    backgroundColor: "#255c92",
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButtonText: { color: "#fff", fontWeight: "700" },
  btnPressed: { opacity: 0.85 },
  createAccountText: { textAlign: "center", color: "#666", marginTop: 10 },
  orText: { color: "#9aa4b2", marginTop: 14 },
  socialIconsRow: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "center",
  },
  iconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  iconPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
});
