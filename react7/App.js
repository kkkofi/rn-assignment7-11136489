import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';


import ProductsScreen from "./Screens/productsScreen"
import Productdetail from "./Screens/ProductDetailsScreen";


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <>
      
        <Stack.Screen
          options={{ headerShown: false }}
          name="Products"
          component={ProductsScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Clothing"
          component={ClothingScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Electronic"
          component={ElectronicScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Jewellery"
          component={JewelleryScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Locations"
          component={LocationsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Blog"
          component={BlogScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Store"
          component={StoreScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Productdetail"
          component={Productdetail}
        />
      </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;