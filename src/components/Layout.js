// import { Header } from "@react-navigation/stack";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Layout({ children }) {
  return (
    <View style={{flex:1}}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{console.log("Botão Clicado")}}>
          <Icon name="person" size={30} color="white"/>
        </TouchableOpacity>
      </View>
      {/* Conteúdo principal */}
      <View style={styles.container}>{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "violet",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
});
