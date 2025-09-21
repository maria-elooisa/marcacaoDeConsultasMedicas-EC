import React from 'react';
import styled from 'styled-components/native';
import { Input, Button, Text } from 'react-native-elements';
import theme from '../../../styles/theme';
import { ViewStyle } from 'react-native';

type RegisterFormProps = {
  name: string;
  email: string;
  password: string;
  userType: 'PACIENTE' | 'ADMIN';
  loading: boolean;
  error: string;
  onNameChange: (text: string) => void;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  onUserTypeChange: (type: 'PACIENTE' | 'ADMIN') => void;
  onRegisterPress: () => void;
  onBackPress: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  email,
  password,
  userType,
  loading,
  error,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onUserTypeChange,
  onRegisterPress,
  onBackPress,
}) => (
  <Container>
    <Title>Cadastro de Usuário</Title>

    <Input
      placeholder="Nome completo"
      value={name}
      onChangeText={onNameChange}
      autoCapitalize="words"
      containerStyle={styles.input as ViewStyle}
    />

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

    <SectionTitle>Tipo de Usuário</SectionTitle>
    <UserTypeContainer>
      <UserTypeButton selected={userType === 'PACIENTE'} onPress={() => onUserTypeChange('PACIENTE')}>
        <UserTypeText selected={userType === 'PACIENTE'}>👤 Paciente</UserTypeText>
      </UserTypeButton>

      <UserTypeButton selected={userType === 'ADMIN'} onPress={() => onUserTypeChange('ADMIN')}>
        <UserTypeText selected={userType === 'ADMIN'}>🔧 Administrador</UserTypeText>
      </UserTypeButton>
    </UserTypeContainer>

    {error ? <ErrorText>{error}</ErrorText> : null}

    <Button
      title="Cadastrar"
      onPress={onRegisterPress}
      loading={loading}
      containerStyle={styles.button as ViewStyle}
      buttonStyle={styles.buttonStyle}
    />

    <Button
      title="Voltar para Login"
      onPress={onBackPress}
      containerStyle={styles.backButton as ViewStyle}
      buttonStyle={styles.backButtonStyle}
    />
  </Container>
);

const styles = {
  input: { marginBottom: 15 },
  button: { marginTop: 10, width: '100%' },
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 },
  backButton: { marginTop: 10, width: '100%' },
  backButtonStyle: { backgroundColor: theme.colors.secondary, paddingVertical: 12 },
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

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 12px;
  margin-top: 8px;
`;

const UserTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UserTypeButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  margin: 0 4px;
  border-radius: 8px;
  border: 2px solid ${(props: { selected: boolean }) => (props.selected ? theme.colors.primary : theme.colors.border)};
  background-color: ${(props: { selected: boolean }) => (props.selected ? theme.colors.primary + '20' : theme.colors.background)};
  align-items: center;
`;

const UserTypeText = styled.Text<{ selected: boolean }>`
  color: ${(props: { selected: boolean }) => (props.selected ? theme.colors.primary : theme.colors.text)};
  font-weight: ${(props: { selected: boolean }) => (props.selected ? 'bold' : 'normal')};
  font-size: 14px;
`;

export default RegisterForm;
