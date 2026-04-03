import React, { useState } from 'react';
import {
  View, Text, Alert, KeyboardAvoidingView,
  Platform, ScrollView, ActivityIndicator, TouchableOpacity, Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavProps } from '../../Navigation/Types';
import { styles } from './ResetPassword.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function ResetPassword() {
  const navigation = useNavigation<NavProps>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Atenção', 'Por favor, preencha os dois campos de senha.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas digitadas não são iguais.');
      return;
    }
    setLoading(true);
    Keyboard.dismiss();
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Sucesso',
        'Sua senha foi redefinida! Agora você já pode acessar sua conta.',
        [{ text: 'Ir para o Login', onPress: () => navigation.navigate('Login') }]
      );
    }, 1500);
  };

  return (
    <View style={styles.conteiner}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.rolagem} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.cabecalho}>
            <View style={styles.circuloLogo}>
              <Text style={styles.textoLogo}>L</Text>
            </View>
            <Text style={styles.nomeMarca}>LUME</Text>
            <Text style={styles.slogan}>Nova senha</Text>
          </View>
          <View style={styles.cartao}>
            <Text style={styles.cartaoTitulo}>Redefinir sua senha</Text>
            <Text style={styles.cartaoSubtitulo}>Escolha uma senha segura para proteger sua conta.</Text>
            <Input
              rotulo="Nova Senha"
              placeholder="Digite a nova senha"
              ehSenha
              value={password}
              onChangeText={setPassword}
            />
            <Input
              rotulo="Confirmar Nova Senha"
              placeholder="Repita a nova senha"
              ehSenha
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {loading ? (
              <ActivityIndicator color="#742B1E" style={{ marginTop: 20 }} />
            ) : (
              <View style={{ marginTop: 20 }}>
                <Button titulo="ATUALIZAR SENHA" onPress={handleReset} />
              </View>
            )}
            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
              <Text style={styles.textoVoltar}>Cancelar e Voltar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}