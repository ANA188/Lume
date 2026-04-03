import { StyleSheet } from 'react-native';

const colors = {
  background: '#D9C8A9',
  primary: '#742B1E',
  textBody: '#736346',
};

export const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: colors.background,
  },
  rolagem: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 30,
  },
  circuloLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textoLogo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  nomeMarca: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 4,
  },
  slogan: {
    fontSize: 14,
    color: colors.textBody,
    marginTop: 4,
  },
  cartao: {
    backgroundColor: '#f7f3f2',
    padding: 30,
    borderRadius: 24,
    elevation: 5,
  },
  cartaoTitulo: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  cartaoSubtitulo: {
    fontSize: 14,
    color: colors.textBody,
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  botaoVoltar: {
    marginTop: 25,
    alignItems: 'center',
  },
  textoVoltar: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});