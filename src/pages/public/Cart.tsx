import { Component, createEffect } from "solid-js";
import CartLayout from "../../layouts/CartLayout";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "@solidjs/router";

const Cart: Component = () => {
    const { cart } = useCartContext();
    const navigate = useNavigate();
    
    createEffect(() => {
        // Check if the cart is empty
        if (cart().length === 0) {
            // Redirect to another page, e.g., home page
            navigate('/');
        }
    });
  
    return (
        <CartLayout />
    )
}

export default Cart;