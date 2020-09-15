import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/logo.jpg';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HRijSBd8eTsa13HneuL0IaPEsslfI43TYza1I1dttR4NcKYCXDIgoDBPqXcWLKnN4TjkWiY0o7IMCE3wZnnl0Ic00bPQJvMyC';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			amount={priceForStripe}
			label="Pay Now"
			name="LevelUP Clothing"
			billingAddress
			shippingAddress
			// image="https://stripe.com/img/documentation/checkout/marketplace.png"
			description={`Your total is $${price}`}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			color
		/>
	);
};

export default StripeCheckoutButton;
