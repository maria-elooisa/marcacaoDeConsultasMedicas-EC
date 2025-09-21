import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import theme from '../../../styles/theme';
import { ViewStyle } from 'react-native';
import Header from '../../../components/Header';

type ProfileFormProps = {
  user: any;
  onBackPress: () => void;
  onSignOutPress: () => void;
  getRoleText: (role: string) => string;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ user, onBackPress, onSignOutPress, getRoleText }) => (
  <Container>
    <Header />
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Title>Meu Perfil</Title>

      <ProfileCard>
        <Avatar source={{ uri: user?.image || 'https://via.placeholder.com/150' }} />
        <Name>{user?.name}</Name>
        <Email>{user?.email}</Email>
        <RoleBadge role={user?.role || ''}>
          <RoleText>{getRoleText(user?.role || '')}</RoleText>
        </RoleBadge>

        {user?.role === 'doctor' && (
          <SpecialtyText>Especialidade: {user?.specialty}</SpecialtyText>
        )}
      </ProfileCard>

      <Button
        title="Voltar"
        onPress={onBackPress}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Sair"
        onPress={onSignOutPress}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.logoutButton}
      />
    </ScrollView>
  </Container>
);

const styles = {
  scrollContent: { padding: 20 },
  button: { marginBottom: 20, width: '100%' },
  buttonStyle: { backgroundColor: theme.colors.primary, paddingVertical: 12 },
  logoutButton: { backgroundColor: theme.colors.error, paddingVertical: 12 },
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

const ProfileCard = styled.View`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const Email = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;

const RoleBadge = styled.View<{ role: string }>`
  background-color: ${(props: { role: string }) => {
    switch (props.role) {
      case 'admin':
        return theme.colors.primary + '20';
      case 'doctor':
        return theme.colors.success + '20';
      default:
        return theme.colors.secondary + '20';
    }
  }};
  padding: 4px 12px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-top: 8px;
`;

export default ProfileForm;
