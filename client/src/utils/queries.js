export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        _id: item._id
    };
}

export function updateCartQuantity(_id, purchaseQuantity) {
    return {
        type: UPDATE_CART_QUANTITY,
        _id,
        purchaseQuantity
    };
}

export function toggleCart() {
    return {
        type: TOGGLE_CART
    };
}

export function addMultipleToCart(cartItems) {
    return {
        type: ADD_MULTIPLE_TO_CART,
        cartItems
    };
}
