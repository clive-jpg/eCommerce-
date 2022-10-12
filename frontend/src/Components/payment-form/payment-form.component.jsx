import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log("paymentHandler is working");

    //   //If no Stripe instance or Elements instance, exit
    //   if (!stripe || !elements) {
    //     console.log("no Stripe instance or Elements instance, exiting");
    //     return;
    //   }

    //   const intent = await fetch("/.netlify/functions/create-payment-intent", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       amount: 4800,
    //       currency: "usd",
    //     })
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //     //   body: JSON.stringify({ amount: 10000 }), //testing for now
    //     // }).then((res) => {
    //     //   return res.json();
    //     // });
    //   });

    //   const {paymentIntent} = await intent.json();

    //   console.log("payment intent received ");
    //   console.log(intent);
    // };

    // PROCEED WITH CARD PROCESSING
    try {
      // Get the Payment Intent
      console.log(`Retrieving the payment intent.`);
      const intent = await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({
          amount: 4800,
          currency: "usd",
        }),
      });
      const { paymentIntent } = await intent.json();
      console.log(`Successfully retrieved the payment intent.`);

      // Confirm the Card Payment
      console.log(`Confirming Card Payment`);
    
      // // Get the client secret
      // const clientSecret = intent.paymentIntent.client_secret;
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

      console.log(clientSecret);

      
      const paymentResult = await stripe.confirmCardPayment(
        paymentIntent.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: "Clive Kam",
            },
          },
        }
      );

      if (paymentResult.error) {
        alert("Payment Not Successful");
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment successful");
        }
      }


      console.log(`Card Payment Successful`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
