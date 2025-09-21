import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export const useRegister = () => {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const registerUser = async ({
    name,
    email,
    password,
    userType,
  }: {
    name: string;
    email: string;
    password: string;
    userType: 'PACIENTE' | 'ADMIN';
  }) => {
    try {
      setLoading(true);
      setError('');

      if (!name || !email || !password) {
        setError('Por favor, preencha todos os campos');
        return false;
      }

      await register({ name, email, password, userType });
      return true;
    } catch {
      setError('Erro ao criar conta. Tente novamente.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};
