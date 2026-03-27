import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./Button.styles";

interface BotaoProps extends TouchableOpacityProps {
  titulo: string;
  variante?: "solido" | "contorno";
}

export default function Button({ titulo, variante = "solido", ...resto }: BotaoProps) {
  return (
    <TouchableOpacity
      style={[styles.botao, variante === "contorno" && styles.botaoContorno]}
      activeOpacity={0.85}
      {...resto}
    >
      <Text style={[styles.botaoTexto, variante === "contorno" && styles.botaoContornoTexto]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}
