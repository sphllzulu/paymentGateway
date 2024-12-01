# React Native E-commerce Payment App with Paystack

## Overview

This React Native mobile application demonstrates a simple e-commerce payment flow integrated with Paystack, a popular payment gateway in Africa. The app provides a straightforward cart and payment experience that developers can use as a reference or starting point for their own mobile commerce applications.

## Features

- Dynamic product listing
- Cart total calculation
- Seamless Paystack payment integration
- Payment success and cancellation handling
- Responsive and clean user interface

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- React Native CLI
- npm or Yarn
- A Paystack account with test/live credentials

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-native-paystack-app.git
   cd react-native-paystack-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Install required native modules:
   ```bash
   npm install react-native-paystack-webview
   # Follow additional setup instructions for react-native-paystack-webview
   ```

## Configuration

### Paystack Integration

1. Replace the Paystack test key in `PaymentScreen.js`:
   ```javascript
   paystackKey="your_paystack_test_key"
   ```

2. Update billing information defaults in the component props

## Project Structure

```
/src
├── screens/
│   ├── Cart.js          # Main cart and product listing component
│   └── PaymentScreen.js # Paystack payment screen
└── App.js               # Main application entry point
```

## Key Components

### Cart Component
- Displays a list of products
- Calculates total price
- Manages payment screen visibility
- Handles payment callbacks

### PaymentScreen Component
- Integrates Paystack WebView
- Manages payment process
- Handles success and cancellation events

## Customization

- Modify `products` array in `Cart.js` to change product listings
- Adjust styles in `StyleSheet` for custom UI
- Implement your own success/failure logic in callback handlers

## Payment Flow

1. User views product list
2. Total is automatically calculated
3. User clicks "Proceed to Pay"
4. Paystack payment screen is displayed
5. On successful payment, a confirmation alert is shown
6. On cancellation, a cancellation alert is displayed

## Error Handling

The current implementation includes basic error handling:
- Console logging of payment events
- Alert dialogs for payment success/cancellation
- Consider adding more robust error tracking in a production app

## Testing

- Use Paystack test credentials
- Test various scenarios:
  - Successful payment
  - Payment cancellation
  - Different total amounts

## Security Considerations

- Never expose live Paystack keys in your code
- Use environment variables for sensitive information
- Implement server-side validation of transactions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Contact

Siphelele Zulu - sphllzulu@gmail.com

