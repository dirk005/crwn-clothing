import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I0mwrDnaahVel5pDnDi6OtGlKL8cEfuKSmmzVxglGBpouEAJxUichjgh1X8S3gvmDDF2aWA6nvfwvG5iPjGYiBl00CwUkQPwO";

  const onToken = (token) => {
    fetch("payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: priceForStripe,
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
