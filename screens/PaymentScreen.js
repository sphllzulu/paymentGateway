import React from 'react';
import { View } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';

const Pay = ({ 
  amount, 
  billingEmail, 
  billingName, 
  onCancel, 
  onSuccess 
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_5f35a180bfaa14a47164a37e623cbde8520df5fd"
        amount={amount}
        billingEmail={billingEmail}
        billingName={billingName}
        currency='ZAR'
        activityIndicatorColor="green"
        onCancel={(e) => {
          console.log('Payment cancelled', e);
          onCancel();
        }}
        onSuccess={(res) => {
          console.log('Payment successful', res);
          onSuccess();
        }}
        autoStart={true}
      />
    </View>
  );
};

export default Pay;
