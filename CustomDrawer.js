// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
// import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';

// const Drawer = createDrawerNavigator();
// function ScreenA({ navigation }) {

//   const onPressHandler = () => {
//     navigation.navigate('Screen_B');
//   }
//   return (
//     <View style={styles.body}>
//       <Text style={styles.text} >
//         Screen_A
//       </Text>
//       <Pressable
//         onPress={onPressHandler}
//         style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
//       >
//         <Text style={styles.text} >
//           Go to ScreenB
//         </Text>
//       </Pressable>
//     </View>
//   );

// }






// const CustomDrawerContent = () => {
//   return (
//     <DrawerContentScrollView
//       scrollEnabled={true}
//       contentContainerStyle={{ flex: 1 }}
//     >

//     </DrawerContentScrollView>
//   )
// }
// function CustomDrawer() {
//   return (
//     <Drawer.Navigator
    
//       drawerType="slide"
//       overlayColor="transparent"
//       initialRouteName="Screen_A"
//       drawerStyle={styles.drawer}
//       sceneContainerStyle={{ backgroundColor: 'green' }}
//       drawerContent={props => {
//         return (
//           <CustomDrawerContent
//             navigation={props.navigation}
//           />
//         )
//       }}


//     >
//       <Drawer.Screen
//         name="Screen_A"
//         component={ScreenA}
//         options={{
//           title: 'Screen A title',
//         }}
//       />


//     </Drawer.Navigator>
//   )

// }
// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//   },
//   drawer: {
//     flex: 1,
//     width: '65%',
//     paddingRight: 20,
//     backgroundColor: 'green',

//   }
// })
// export default CustomDrawer;