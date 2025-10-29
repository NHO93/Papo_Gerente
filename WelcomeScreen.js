import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("./img/Papo_de_Gerente_1.jpg")}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.title}>Bem Vindo!</Text>
        </View>

        {/* <View style={styles.spacer} /> */}

        <View style={styles.buttonsRow}>
          <Pressable
            style={({ pressed }) => [styles.btn, styles.btnPrimary, pressed && styles.btnPressed]}
            onPress={() => navigation.navigate('Login')}
            accessibilityLabel="Ir para Login"
          >
            <Text style={styles.btnText}>Login</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [styles.btn, styles.btnSecondary, pressed && styles.btnPressed]}
            onPress={() => navigation.navigate('Register')}
            accessibilityLabel="Ir para Cadastro"
          >
            <Text style={styles.btnText}>Register</Text>
          </Pressable>
        </View>

        <View style={styles.orRow}>

          <Text style={styles.orText}>Ou continue com</Text>

          <View style={styles.socialIcons}>

            <Pressable style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]} 
            android_ripple={{ color: '#e6e6e6' }} onPress={() => {}} accessibilityLabel="Entrar com Google">
              <FontAwesome name="google" size={18} color="#444" />
            </Pressable>

            <Pressable style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]} 
            android_ripple={{ color: '#e6e6e6' }} onPress={() => {}} accessibilityLabel="Entrar com Facebook">
              <FontAwesome name="facebook" size={18} color="#3b5998" />
            </Pressable>

            <Pressable style={({ pressed }) => [styles.iconPlaceholder, pressed && styles.iconPressed]} 
            android_ripple={{ color: '#e6e6e6' }} onPress={() => {}} accessibilityLabel="Entrar com Apple">
              <Ionicons name="logo-apple" size={18} color="#000" />

            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 320,
    height: 640,
    backgroundColor: "#fff",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
   
  },
  logo: {
    width: 220,
    height: 220,
    borderRadius: 12,
  },
  spacer: { flex: 1 },
  orRow: { alignItems: 'center', marginTop: 8 },
  orText: { color: '#888', marginBottom: 8 },
  socialIcons: { flexDirection: 'row' },
  iconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  iconPressed: { opacity: 0.6, transform: [{ scale: 0.98 }] },
  buttonsRow: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnPrimary: {
    backgroundColor: "#255c92",
  },
  btnSecondary: {
    backgroundColor: "#2fa24b",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    height: 40,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    margin: 12,
    color: "#333",
  },
  welcomeText: {
    height: 40,
    textAlign: "center",
    margin: 12,
    fontSize: 18,
    color: "#333",
  },
});
