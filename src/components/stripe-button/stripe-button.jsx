import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100 ;
    const PublishableKey = "pk_test_51J19xbSJyLwmKjkhKkXMQdJrpOwnle9J4W9wb1jQ5wSGLWigZ3i1rRKetQgwTY8cXtBi2wrNtYY0XRgqIuoj8A6J00XhsZCJDp";
    const onToken = (token) =>  {
        console.log(token);
        alert('payment Successfull');
    }
    return (
        <StripeCheckout
            label='pay now'
            name='crwn-clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={` your total is $${price}`}
            amount={PriceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PublishableKey}
        />
    )
}

export default StripeCheckoutButton;