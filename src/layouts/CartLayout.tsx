import { Component, For } from "solid-js";
import { useCartContext } from "../context/CartContext";

const CartLayout:Component = () => {
    const { cart } = useCartContext();

    // Log the cart data to console
    console.log("Cart:", cart());

    return (
        <div class="w-11/12 m-auto pt-28 flex gap-5">
            <div class="w-2/3 m-auto p-5 h-[80vh] bg-customColor">
                <h1>Cart Items</h1>
                <div class="w-full bg-white py-2 flex mt-5">
                    <div class="w-1/6">
                        Image
                    </div>
                    <div class="w-1/6">
                        Product
                    </div>
                    <div class="w-1/6">
                        QTY
                    </div>
                    <div class="w-1/6">
                        Price
                    </div>
                    <div class="w-1/6">
                        Total
                    </div>
                    <div class="w-1/6">
                        Action
                    </div>
                </div>
                <div>
                    <For each={cart()}>{
                        (i) => <div  class="w-full flex">
                            <div class="w-1/6">
                                <img src={i.images[0]} alt={i.name} class="w-28"/>
                            </div>
                            <div class="w-1/6">{i.name}</div>
                            <div class="w-1/6">1</div>
                            <div class="w-1/6">{i.price}</div>
                            <div class="w-1/6"></div>
                            <div class="w-1/6"></div>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;