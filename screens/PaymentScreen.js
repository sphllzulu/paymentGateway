// import React, { useState } from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   SafeAreaView, 
//   ScrollView,
//   TextInput,
//   Alert
// } from 'react-native';
// import PaystackPaymentButton from '../components/PaystackPaymentButton';

// const PaymentScreen = () => {
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const [transactionDetails, setTransactionDetails] = useState(null);

//   const handlePaymentSuccess = (result) => {
//     setPaymentStatus('Success');
//     setTransactionDetails(result);

//     // Success actions
//     Alert.alert(
//       'Payment Successful', 
//       `Transaction Reference: ${result.transactionRef}`
//     );

//     // Recommended follow-up actions:
//     // 1. Send transaction details to your backend
//     // 2. Update order status
//     // 3. Navigate to confirmation screen
//   };

//   const handlePaymentFailure = (error) => {
//     setPaymentStatus('Failed');
//     setTransactionDetails(null);

//     // Error handling
//     Alert.alert(
//       'Payment Failed', 
//       error.message || 'Unable to complete payment'
//     );
//   };

//   const validatePayment = () => {
//     if (!email) {
//       Alert.alert('Validation Error', 'Please enter your email');
//       return false;
//     }
//     if (!amount || parseFloat(amount) <= 0) {
//       Alert.alert('Validation Error', 'Please enter a valid amount');
//       return false;
//     }
//     return true;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.title}>Complete Your Purchase</Text>

//         <View style={styles.formContainer}>
//           <TextInput
//             placeholder="Enter Email"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             style={styles.input}
//           />

//           <TextInput
//             placeholder="Amount (NGN)"
//             value={amount}
//             onChangeText={setAmount}
//             keyboardType="numeric"
//             style={styles.input}
//           />

//           <PaystackPaymentButton
//             email={email}
//             amount={parseFloat(amount)}
//             onPaymentSuccess={handlePaymentSuccess}
//             onPaymentFailure={handlePaymentFailure}
//           />
//         </View>

//         {paymentStatus === 'Success' && transactionDetails && (
//           <View style={styles.receiptContainer}>
//             <Text style={styles.receiptTitle}>Payment Receipt</Text>
//             <Text>Transaction Ref: {transactionDetails.transactionRef}</Text>
//             <Text>Amount: ₦{transactionDetails.amount}</Text>
//             <Text>Email: {transactionDetails.email}</Text>
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4'
//   },
//   content: {
//     padding: 20,
//     alignItems: 'center'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20
//   },
//   formContainer: {
//     width: '100%',
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 10
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5
//   },
//   receiptContainer: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     width: '100%'
//   },
//   receiptTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10
//   }
// });

// export default PaymentScreen;


import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';

export default function Pay() {
  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_5f35a180bfaa14a47164a37e623cbde8520df5fd"
        amount={'25000.00'}
        billingEmail="sphllzulu@gmail.com"
        billingName='Siphelele'
        currency='ZAR'
        activityIndicatorColor="green"
        onCancel={(e) => {
          
        }}
        onSuccess={(res) => {
          
        }}
        autoStart={true}
      />
    </View>
  );
}