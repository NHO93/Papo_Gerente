import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TextInputBase,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [setName, name] = React.useState("");
  const [setAdress, address] = React.useState("");
  const [setEmail, email] = React.useState("");
  const [setPassword, password] = React.useState("");
  const [setConfirm, confirm] = React.useState("");
  const save = () => {
    // lógica para salvar as alterações do perfil
    console.log("Salvando alterações...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
    
      <View style={styles.spacer} />

      <View 
      style={styles.form}
      >
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Nome"
          style={styles.input}
        />
        <TextInput
          value={address}
          onChangeText={setAdress}
          placeholder="Endereço"
          style={styles.input}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          value={confirm}
          onChangeText={setConfirm}
          placeholder="Confirmar Senha"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => save(alert("Alterações salvas com sucesso!"))}
        >
          <Text style={styles.buttonText}>Salvar alterações</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
  },
  body: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  form: {
    width: "100%",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
    padding: 12,
  },
});
