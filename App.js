import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
})














































// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './src/screens/Home';
// import Details from './src/screens/Details';

// const AuthStackNavigator = () => {

//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="home" component={Home} />
//         <Stack.Screen name="details" component={Details} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default AuthStackNavigator

// const styles = StyleSheet.create({})