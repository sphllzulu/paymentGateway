// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import PaymentButton from './components/PaymentButton';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Checkout</Text>
//       <PaymentButton/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
// import { PaystackProvider } from '@paystack/react-native-paystack';
import PaymentScreen from './screens/PaymentScreen';
import Pay from './screens/PaymentScreen';
import Cart from './screens/Checkout';



export default function App() {
  return (
    <>
    {/* <Pay/> */}
    <Cart/>
    </>
  );
}