import React from "react";
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { styles } from "./Input.styles";

interface CampoProps extends TextInputProps {
  rotulo: string;
  ehSenha?: boolean;
}

export default function Input({ rotulo, ehSenha = false, ...resto }: CampoProps) {
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <View style={styles.involucro}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <View style={styles.campoConteiner}>
        <TextInput
          style={[styles.entrada, ehSenha && styles.entradaComIcone]}
          placeholderTextColor="#A89880"
          secureTextEntry={ehSenha && !mostrarSenha}
          autoCapitalize="none"
          {...resto}
        />
        {ehSenha && (
          <TouchableOpacity
            style={styles.botaoOlho}
            onPress={() => setMostrarSenha((anterior) => !anterior)}
          >
            <Text style={styles.iconeOlho}>{mostrarSenha ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
