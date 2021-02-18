import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishbleKey ='pk_test_51IM79HJFcj24mDPG3o05GMPhoGph62oK1nB0mutN5bcXPqYkTIuRmZCg3RBHVol1gJSg3WubVIJ629wZnIER3bdt00JMhA37c6';
    const onToken = token => {
        
        console.log(token);
        alert('Payment succesful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishbleKey}
        />
    );
};

export default StripeCheckoutButton;
