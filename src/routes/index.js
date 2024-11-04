import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from '../screens/SplashScreen'
import { SignUpScreen } from '../screens/SignUpScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { MealAvaliationsScreen } from '../screens/MealAvaliationsScreen'

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Meals" component={MealAvaliationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
