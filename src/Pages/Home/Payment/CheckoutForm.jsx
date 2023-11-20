import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCarts from "../../../Hooks/useCarts";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
    const [error, setEroor] = useState('')
    const [clientSecure, setclientSecure] = useState('')
    const [transactionId, settransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [cart] = useCarts()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice > 0){
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setclientSecure(res.data.clientSecret)
            })
        }

    }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[ payment error]', error);
            setEroor(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setEroor('')
        }

        const { paymentIntent, error: confirmEroor } = await stripe.confirmCardPayment(clientSecure, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || 'anonymous',
                    name: user.displayName || 'anonymous'
                }
            }
        })
        if (confirmEroor) {
            console.log('confirmError')
        }
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {


                console.log('paymentIntent id', paymentIntent.id),
                    settransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    data: new Date(),
                    cartId: cart.map(item => item._id),
                    menuItemId: cart.map(item => item.menuId),
                    status: 'pending...'

                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment savet', res.data)
            }

        }

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm  btn-primary my-5" type="submit" disabled={!stripe || !clientSecure}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}  </p>}
            </form>
        </div>
    )
}

export default CheckoutForm
