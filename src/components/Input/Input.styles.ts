import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  involucro: {
    marginBottom: 18,
  },
  rotulo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5A4A3A",
    marginBottom: 7,
    letterSpacing: 0.3,
  },
  campoConteiner: {
    position: "relative",
    justifyContent: "center",
  },
  entrada: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 18,
    fontSize: 15,
    color: "#3A2A1A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  entradaComIcone: {
    paddingRight: 52,
  },
  botaoOlho: {
    position: "absolute",
    right: 14,
    padding: 6,
  },
  iconeOlho: {
    fontSize: 16,
  },
});
