import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCarts from "../../../Hooks/useCarts";
import CheckoutForm from "./CheckoutForm";
import SectionsTitle from "../Shared/SectionsTitle/SectionsTitle";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_IMAGE_PAM_KEY);
const Payment = () => {
    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
          <SectionsTitle subHeading="please process" heading="Payment"></SectionsTitle>
          
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
