import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import RegisterForm from './components/RegisterForm';
import { useRegister } from './hooks/useRegister';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<RegisterScreenProps['navigation']>();
  const { registerUser, loading, error } = useRegister();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'PACIENTE' | 'ADMIN'>('PACIENTE');

  const handleRegister = async () => {
    const success = await registerUser({ name, email, password, userType });
    if (success) navigation.navigate('Login');
  };

  const handleBack = () => navigation.navigate('Login');

  return (
    <RegisterForm
      name={name}
      email={email}
      password={password}
      userType={userType}
      loading={loading}
      error={error}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onUserTypeChange={setUserType}
      onRegisterPress={handleRegister}
      onBackPress={handleBack}
    />
  );
};

export default RegisterScreen;
