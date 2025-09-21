// screens/LoginScreen/hooks/useLogin.ts
import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

export const useLogin = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError('');
      await signIn({ email, password });
    } catch {
      setError('Email ou senha inválidos');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
