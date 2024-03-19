import { Component } from "solid-js";

const CartLayout:Component = () => {
    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5 py-10">
            <div class="w-2/3 m-auto p-5 h-[80vh] bg-customColor">
                <h1>
                    Cart Items
                </h1>
            </div>
        </div>
    )
}

export default CartLayout;
