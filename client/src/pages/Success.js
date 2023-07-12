import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';


function Success() {
    const { data } = useQuery(QUERY_CHECKOUT);
    const order = data?.checkout || {};

    useEffect(() => {
        async function saveOrder() {
            const productIds = data.checkout.products.map((p) => p._id);

            await saveOrder({
                variables: { products: productIds },
            });
        }

        if (data) {
            saveOrder();
        }
    }, [data, saveOrder]);

    return (
        <div>
            <h2>Thank you for your purchase!</h2>
            <h4>
                You will now be redirected to the homepage
            </h4>
        </div>
    );
}