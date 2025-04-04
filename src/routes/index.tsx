import { NavigationContainer } from '@react-navigation/native'; // Adicione isso
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler'; // Adicione isso antes de tudo
import CreateAppointmentScreen from '../screens/CreateAppointmentScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer> {/* Envolva o Navigator no NavigationContainer */}
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CreateAppointment" component={CreateAppointmentScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
