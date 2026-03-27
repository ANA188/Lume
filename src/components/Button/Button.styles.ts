import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#7B2D2D",
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: "center",
    shadowColor: "#5C1F1F",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.42,
    shadowRadius: 12,
    elevation: 10,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 3,
  },
  botaoContorno: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#7B2D2D",
  },
  botaoContornoTexto: {
    color: "#7B2D2D",
  },
});
