import { Component } from "solid-js";

const Orders:Component = () => {
    return (
        <>
            <h1 class="text-xl">
                Orders
            </h1>
            <div class="w-full bg-white flex mt-3">
                <div class="w-1/6 border-r border-gray-300 py-2 text-center">
                    Order No
                </div>
                <div class="w-1/6 border-r border-gray-300 py-2 text-center">
                    Description                    
                </div>
                <div class="w-1/6 border-r border-gray-300 py-2 text-center">
                    Description                    
                </div>
                <div class="w-1/6 border-r border-gray-300 py-2 text-center">
                    Description                    
                </div>
                <div class="w-1/6 border-r border-gray-300 py-2 text-center">
                    Status
                </div>
                <div class="w-1/6 py-2 text-center">
                    Action                    
                </div>
            </div>
        </>
    )
}

export default Orders;