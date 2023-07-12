import react from 'react';
import stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Checkout = () => {
    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session', { method: 'POST' });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({ sessionId: session.id });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message
    };
    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
};

function OrderForm() {
    const [formState, setFormState] = useState({ name: '', email: '' });
    const [getOrder, { data }] = useMutation(ADD_ORDER);
    const stripe = useStripe();
    const elements = useElements();

function OrderHistory() {
    const { loading, data } = useQuery(QUERY_USER);
    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>
                {user.orderCount
                    ? `Viewing ${user.orderCount} saved ${user.orderCount === 1 ? 'order' : 'orders'}:`
                    : 'You have no saved orders!'}
            </h2>
            {user.orders?.map((order) => (
                <OrderItem key={order._id} order={order} />
            ))}
        </div>
    );
}

function OrderCheckout () {
    const { loading, data } = useQuery(QUERY_CHECKOUT);
    const stripe = useStripe();
    const elements = useElements();

    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function getCheckout() {
            const checkout = await loadCheckout();
            const lineItems = convertCartItemsToLineItems(checkout.products);

            stripe.redirectToCheckout({ sessionId: checkout.session });
        }

        if (!stripe || !elements) {
            return;
        } 

        if (data?.checkout?.session) {
            getCheckout();
        }
    }, [data, elements, stripe]);

    async function submitCheckout() {
        const lineItems = convertCartItemsToLineItems(data.checkout.products);

        const { error } = await stripe.redirectToCheckout({
            lineItems: lineItems,
            mode: 'payment',
            successUrl: window.location.origin + '/success',
            cancelUrl: window.location.origin + '/cancel',
        });

        if (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>
                        Checkout
                    </h2>
                    <h4>
                        Total: ${calculateTotal(data.checkout.products).toFixed(2)}
                    </h4>
                    <button onClick={submitCheckout}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

