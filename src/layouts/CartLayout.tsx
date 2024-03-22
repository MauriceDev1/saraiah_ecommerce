import { Component, For } from "solid-js";
import { useCartContext } from "../context/CartContext";
import { ImBin } from "solid-icons/im";

const CartLayout:Component = () => {
    const { cart, removeFromCart } = useCartContext();

    return (
        <div class="w-11/12 m-auto pt-28 flex gap-5">
            <div class="w-2/3 m-auto p-5 h-[80vh] bg-customColor">
                <div class="w-full flex justify-between">
                    <h1 class="text-2xl">Cart Items</h1>
                    <button class="bg-black h-9 px-5 text-white rounded-sm">
                        Continue Shopping
                    </button>
                </div>
                <div class="w-full bg-black text-white py-2 flex mt-5">
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
                <div class="w-full flex flex-col gap-3 mt-2 h-[50vh] overflow-y-auto">
                    <For each={cart()}>{
                        (i) => <div  class="w-full flex items-center bg-white">
                            <div class="w-1/6">
                                <img src={i.images[0]} alt={i.name} class="w-20"/>
                            </div>
                            <div class="w-1/6">{i.name}</div>
                            <div class="w-1/6">{i.quantity}</div>
                            <div class="w-1/6">{i.price}</div>
                            <div class="w-1/6">R {Number(i.price) * i.quantity }</div>
                            <div class="w-1/6">
                                <button
                                    onclick={() => removeFromCart(i.id)} 
                                    class="text-gray-500 hover:text-red-500"
                                >
                                    <ImBin />
                                </button>
                            </div>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;