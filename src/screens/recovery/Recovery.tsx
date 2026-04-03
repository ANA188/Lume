import React, { useState } from 'react';
import {
  View, Text, Alert, KeyboardAvoidingView,
  Platform, ScrollView, ActivityIndicator, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavProps } from '../../Navigation/Types';
import { styles } from './Recovery.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function Recovery() {
  const navigation = useNavigation<NavProps>();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecovery = () => {
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'E-mail Enviado',
        'Instruções enviadas para: ' + email,
        [{ text: 'OK', onPress: () => navigation.navigate('ResetPassword') }]
      );
    }, 1000);
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
            <Text style={styles.slogan}>Recuperar conta</Text>
          </View>
          <View style={styles.cartao}>
            <Text style={styles.cartaoTitulo}>Esqueceu sua senha?</Text>
            <Text style={styles.cartaoSubtitulo}>Digite seu e-mail e enviaremos um link de recuperação.</Text>
            <Input
              rotulo="E-mail"
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {loading ? (
              <ActivityIndicator color="#742B1E" style={{ marginTop: 20 }} />
            ) : (
              <View style={{ marginTop: 20 }}>
                <Button titulo="ENVIAR CÓDIGO" onPress={handleRecovery} />
              </View>
            )}
            <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
              <Text style={styles.textoVoltar}>Voltar para o Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}