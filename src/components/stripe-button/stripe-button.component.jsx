import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LVKg3HZvMnTrCNZzbeYQ88ufHKjn4MBzwWRgpVLb2d5Qcc2x62U7NXi0CNakKaigL9QtjokoBd04RomX5THeWFJ00SwYJg5wO";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='EnAscuas Forja'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
