import { Component } from "solid-js"
import { useCartContext } from "../context/CartContext";

const CheckoutLayout:Component = () => {
    const {cart} = useCartContext();
    return (   
        <div class="w-11/12 m-auto pt-28 flex gap-5">
            <div class="w-2/3 m-auto p-5 h-[82vh] bg-customColor border border-gray-300 rounded-sm">
                <h1 class="text-2xl pb-3">Checkout</h1>
                <div class="w-full flex">
                    <div class="w-1/2 flex flex-col gap-3">
                        <div>
                            <h3 class="text-lg">Cart Summary:</h3>
                        </div>
                        <div>

                            Cart items: {cart().length}
                            Cart total: R 
                            Delivery: 
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col gap-2 relative h-[73vh]">
                        <div>
                            <h3 class="text-lg">Location:</h3>
                        </div>
                        <select
                            class="w-full max-w-[450px] h-10 border border-gray-300 outline-none"
                        >
                            <option value="select">Select</option>
                        </select>
                        <div>
                            <label>Recipient's Name</label>
                        </div>
                        <input type="text" class="w-full max-w-[450px] h-10 border border-gray-300"/>
                        <div>
                            <label>Contact number</label>
                        </div>
                        <input type="text" class="w-full max-w-[450px] h-10 border border-gray-300"/>
                        <div>
                            <label>Alternative number</label>
                        </div>
                        <input type="text" class="w-full max-w-[450px] h-10 border border-gray-300"/>
                        <button class="bg-black absolute bottom-5 h-10 text-white px-5 w-full max-w-[450px]">
                            Proceed to payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default CheckoutLayout;