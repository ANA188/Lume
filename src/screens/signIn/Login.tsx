import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavProps } from "../../Navigation/Types";
import { styles } from "./Login.styles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Login() {
 const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.conteiner}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.rolagem} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.cabecalho}>
            <View style={styles.circuloLogo}>
              <Text style={styles.textoLogo}>L</Text>
            </View>
            <Text style={styles.nomeMarca}>LUME</Text>
            <Text style={styles.slogan}>Bem-vindo de volta</Text>
          </View>

          <View style={styles.cartao}>
            <Text style={styles.cartaoTitulo}>Entrar na sua conta</Text>
            <Text style={styles.cartaoSubtitulo}>Insira seus dados para continuar</Text>

            <Input rotulo="E-mail" placeholder="Digite seu e-mail" keyboardType="email-address" />
            <Input rotulo="Senha" placeholder="Digite sua senha" ehSenha />

            <TouchableOpacity style={styles.botaoEsqueceuSenha} onPress={() => navigation.navigate('Recovery')}>
              <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <Button titulo="ENTRAR" onPress={() => navigation.navigate('Home')} />

            <View style={styles.linhaDivisorConteiner}>
              <View style={styles.linhaDivisor} />
              <Text style={styles.textoDivisor}>ou</Text>
              <View style={styles.linhaDivisor} />
            </View>

            <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.textoCadastro}>
                Não tem uma conta?{" "}
                <Text style={styles.linkCadastro}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}