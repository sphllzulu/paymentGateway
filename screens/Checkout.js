import React, { useState } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import Pay from './PaymentScreen';

const Cart = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [total, setTotal] = useState(0);

  const products = [
    { id: '1', name: 'Product 1', price: 5000 },
    { id: '2', name: 'Product 2', price: 7000 },
    { id: '3', name: 'Product 3', price: 8000 },
    { id: '4', name: 'Product 4', price: 10000 },
  ];

  const calculateTotal = () => {
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    setTotal(totalPrice);
  };

  const handlePay = () => {
    calculateTotal();
    setShowPayment(true);
  };

  const handleCancel = () => {
    Alert.alert('Payment Cancelled', 'You cancelled the payment process.');
    setShowPayment(false);
  };

  const handleSuccess = () => {
    Alert.alert('Payment Successful', 'Thank you for your purchase!');
    setShowPayment(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>ZAR {item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ZAR {total}</Text>
      {!showPayment ? (
        <Button title="Proceed to Pay" onPress={handlePay} />
      ) : (
        <Pay
          amount={total.toString()}
          billingEmail="sphllzulu@gmail.com"
          billingName="Siphelele"
          onCancel={handleCancel}
          onSuccess={handleSuccess}
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
