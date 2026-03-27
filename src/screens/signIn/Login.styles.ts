import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#C8B89A",
  },
  rolagem: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingBottom: 48,
    justifyContent: "center",
  },
  cabecalho: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 64,
  },
  circuloLogo: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#7B2D2D",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    shadowColor: "#5C1F1F",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.38,
    shadowRadius: 12,
    elevation: 10,
  },
  textoLogo: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: 2,
  },
  nomeMarca: {
    fontSize: 30,
    fontWeight: "800",
    color: "#7B2D2D",
    letterSpacing: 8,
    marginBottom: 6,
  },
  slogan: {
    fontSize: 14,
    color: "#6B5A4A",
    letterSpacing: 0.5,
  },
  cartao: {
    backgroundColor: "rgb(248, 243, 243)",
    borderRadius: 28,
    padding: 30,
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.55)",
    shadowColor: "#3A2A1A",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.13,
    shadowRadius: 24,
    elevation: 8,
  },
  cartaoTitulo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7B2D2D",
    marginBottom: 4,
  },
  cartaoSubtitulo: {
    fontSize: 13,
    color: "#6B5A4A",
    marginBottom: 30,
    lineHeight: 20,
  },
  botaoEsqueceuSenha: {
    alignSelf: "flex-end",
    marginBottom: 26,
    marginTop: -6,
  },
  textoEsqueceuSenha: {
    color: "#7B2D2D",
    fontSize: 13,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  linhaDivisorConteiner: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  linhaDivisor: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(123,45,45,0.18)",
  },
  textoDivisor: {
    marginHorizontal: 14,
    color: "#6B5A4A",
    fontSize: 13,
  },
  botaoCadastro: {
    alignItems: "center",
  },
  textoCadastro: {
    fontSize: 14,
    color: "#6B5A4A",
  },
  linkCadastro: {
    color: "#7B2D2D",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
});
