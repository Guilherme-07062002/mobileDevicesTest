import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

export default function WhatYourName({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Qual é o seu nome?</Text>

      <TextInput
        style={styles.input}
        multiline={false}
        placeholder="Nome completo"
      ></TextInput>

      <TouchableOpacity style={styles.btnEnter}>
        <Text style={{ color: "#fff" }}>Avançar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
