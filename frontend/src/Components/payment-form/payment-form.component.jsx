import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles.jsx";


import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log("paymentHandler is WIP");

    //If no Stripe instance or Elements instance, exit
    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }), //testing for now
    }).then((res) => res.json());

    console.log(response);
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
