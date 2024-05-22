import { Text, SafeAreaView, StyleSheet } from "react-native";
import Botao from "./src/components/Botao10";

export default props => {
    return(
        <SafeAreaView style={estilos.container}>
          <Botao />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center"
  }
})