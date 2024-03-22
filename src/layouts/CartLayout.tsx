import { Component, For } from "solid-js";
import { useCartContext } from "../context/CartContext";
import { ImBin } from "solid-icons/im";
import { useNavigate } from "@solidjs/router";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "solid-icons/ai";

const CartLayout:Component = () => {
    const { cart, removeFromCart } = useCartContext();
    const navigate = useNavigate();

    const procceedToCheckout = () => {
        navigate('/checkout');
    }

    const getTotal = () => {
        let total = 0
        cart().map((p) => {
            let itemTota = Number(p.price) * p.quantity
            total = itemTota + total
        });
        return total
    }

    return (
        <div class="w-11/12 m-auto pt-28 flex gap-5">
            <div class="w-2/3 m-auto p-5 h-[82vh] bg-customColor border border-gray-300 rounded-sm">
                <div class="w-full flex justify-between">
                    <h1 class="text-2xl font-semibold">Cart Items</h1>
                    <button class="bg-black h-9 px-5 text-white rounded-sm">
                        Continue Shopping
                    </button>
                </div>
                <div class="w-full bg-black text-white py-2 flex mt-3">
                    <div class="w-1/6 px-2">
                        Image
                    </div>
                    <div class="w-1/6 px-2">
                        Description
                    </div>
                    <div class="w-1/6 px-8">
                        QTY
                    </div>
                    <div class="w-1/6 px-2">
                        Price
                    </div>
                    <div class="w-1/6 px-2">
                        Total
                    </div>
                    <div class="w-1/6 px-2">
                        Action
                    </div>
                </div>
                <div class="w-full flex flex-col gap-3 mt-2 h-[50vh] overflow-y-auto">
                    <For each={cart()}>{
                        (i) => <div  class="w-full flex items-center bg-white">
                            <div class="w-1/6 px-2">
                                <img src={i.images[0]} alt={i.name} class="w-14"/>
                            </div>
                            <div class="w-1/6 px-2">{i.name}</div>
                            <div class="w-1/6 px-2 flex">
                                <button>
                                    <AiOutlineMinusCircle />
                                </button>
                                <div class="w-1/3 text-center">
                                    {i.quantity}
                                </div>
                                <button>
                                    <AiOutlinePlusCircle />
                                </button>
                            </div>
                            <div class="w-1/6 px-2">{i.price}</div>
                            <div class="w-1/6 px-2">R {Number(i.price) * i.quantity }</div>
                            <div class="w-1/6 px-2">
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
                <div class="w-full">
                    <div class="w-full flex justify-end items-center">
                        <div class="w-1/6 bg-white">
                            <h3 class="text-lg py-2 px-3 border-l">
                                Total
                            </h3>
                        </div>
                        <div class="w-1/6 text-lg bg-white py-2">
                            {getTotal()}
                        </div>
                    </div>
                    <button
                        onClick={procceedToCheckout} 
                        class="bg-black h-9 px-5 text-white"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;