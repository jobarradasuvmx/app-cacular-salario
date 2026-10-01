import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [diaslaborados, setDiasLaborados] = useState(0);
  const [salariopordia, setSalarioporDia] = useState(0);
  const [tipoempleado, setTipoEmpleado] = useState(0);
  const [resultado, SetResultado] = useState(0);
  function calcularSalario() {
    let dias = 0,
      salariod = 0,
      tipoE = 0,
      resultado = 0;
    dias = parseInt(diaslaborados);
    salariod = parseInt(salariopordia);
    tipoE = parseInt(tipoempleado);
    resultado = dias * salariod;
    if (tipoE == 1) {
      resultado = resultado + 200;
    }
    if (tipoE == 2) {
      resultado = resultado + 400;
    }
    if (tipoE == 3) {
      resultado = resultado + 600;
    }
    SetResultado(resultado);
  }
  return (
    <View style={styles.container}>
      <Text>Mi Esquina Favorita</Text>
      <TextInput
        placeholder="Ingrese los dias"
        value={diaslaborados}
        onChangeText={setDiasLaborados}
      />
      <TextInput
        placeholder="Ingrese el salario por dia"
        value={salariopordia}
        onChangeText={setSalarioporDia}
      />
      <TextInput
        placeholder="Ingrese el tipo de empleado"
        value={tipoempleado}
        onChangeText={setTipoEmpleado}
      />
      <Button title="Salario Total" onPress={calcularSalario} />
      <Text>Resultado Salario{resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
