<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import { useContext } from "react";
function RootNavigator() {
const { user } = useContext(AuthContext);
return user ? <AppDrawer /> : <LoginScreen />;
}
export default function App() {
return (
<AuthProvider>
<NavigationContainer>
<RootNavigator />
</NavigationContainer>
</AuthProvider>
);
}
=======
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AppBar from "./screens/AppBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ----- STACK POUR L’ONGLET MAISON -----
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// ----- APPLICATION PRINCIPALE -----
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>

          {/* BARRE HAUTE PERSONNALISÉE */}
          <AppBar />

          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarIcon: ({ color, size }) => {
                if (route.name === "Maison") {
                  return <Ionicons name="home" size={size} color={color} />;
                }
                if (route.name === "Paramètres") {
                  return <Ionicons name="settings" size={size} color={color} />;
                }
                return null;
              },
            })}
          >
            <Tab.Screen name="Maison" component={HomeStack} />
            <Tab.Screen name="Paramètres" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
>>>>>>> a1f7711 (Initial commit)
