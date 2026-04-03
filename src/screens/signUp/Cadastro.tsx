import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavProps } from "../../Navigation/Types";
import { styles } from "./Cadastro.styles";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Cadastro() {
const navigation = useNavigation<NavProps>();
  return (
    <View style={styles.conteiner}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView 
          contentContainerStyle={styles.rolagem} 
          keyboardShouldPersistTaps="handled" 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.cabecalho}>
            <View style={styles.circuloLogo}>
              <Text style={styles.textoLogo}>L</Text>
            </View>
            <Text style={styles.nomeMarca}>LUME</Text>
            <Text style={styles.slogan}>Crie sua conta</Text>
          </View>

          <View style={styles.cartao}>
            <Text style={styles.cartaoTitulo}>Novo Cadastro</Text>
            <Text style={styles.cartaoSubtitulo}>Preencha as informações abaixo</Text>

            <Input 
              rotulo="Nome" 
              placeholder="Digite seu nome completo" 
              autoCapitalize="words"
            />

            <Input 
              rotulo="E-mail" 
              placeholder="Digite seu e-mail" 
              keyboardType="email-address" 
              autoCapitalize="none"
            />

            <Input 
              rotulo="Senha" 
              placeholder="Crie uma senha segura" 
              ehSenha 
            />

            <Input 
              rotulo="Confirmar Senha" 
              placeholder="Repita a senha" 
              ehSenha 
            />

            <View style={{ marginTop: 20 }}>
              <Button titulo="CADASTRAR" onPress={() => navigation.navigate('Home')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}