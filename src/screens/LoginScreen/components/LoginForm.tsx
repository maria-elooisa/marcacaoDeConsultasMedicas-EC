// screens/LoginScreen/components/LoginForm.tsx
import React from 'react';
import styled from 'styled-components/native';
import { Input, Button, Text } from 'react-native-elements';
import theme from '../../../styles/theme';
import { ViewStyle } from 'react-native';

type LoginFormProps = {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onLoginPress: () => void;
  onRegisterPress: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onLoginPress,
  onRegisterPress,
}) => {
  return (
    <Container>
      <Title>App Marcação de Consultas</Title>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={onEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input as ViewStyle}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
        containerStyle={styles.input as ViewStyle}
      />

      {error ? <ErrorText>{error}</ErrorText> : null}

      <Button
        title="Entrar"
        onPress={onLoginPress}
        loading={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Cadastrar Novo Usuário"
        onPress={onRegisterPress}
        containerStyle={styles.registerButton as ViewStyle}
        buttonStyle={styles.registerButtonStyle}
      />

      <Text style={styles.hint}>
        Primeiro acesso? Cadastre-se como Admin ou Paciente.
      </Text>
    </Container>
  );
};

const styles = {
  input: { marginBottom: 15 },
  button: { marginTop: 10, width: '100%' },
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 },
  registerButton: { marginTop: 10, width: '100%' },
  registerButtonStyle: { backgroundColor: theme.colors.secondary, paddingVertical: 12 },
  hint: { marginTop: 20, textAlign: 'center' as const, color: theme.colors.text },
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export default LoginForm;
