// screens/ProfileScreen/index.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import ProfileForm from './components/ProfileForm';
import { useProfile } from './hooks/useProfile';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenProps['navigation']>();
  const { user, signOut, getRoleText } = useProfile();

  const handleBack = () => navigation.goBack();
  const handleSignOut = () => signOut();

  return (
    <ProfileForm
      user={user}
      onBackPress={handleBack}
      onSignOutPress={handleSignOut}
      getRoleText={getRoleText}
    />
  );
};

export default ProfileScreen;
