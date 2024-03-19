import { Component, For, createSignal } from "solid-js";

const Orders:Component = () => {
    const [orderData,setOrderData] = createSignal<any[]>([]);

    const handleOrderAddress = () => {
        const value = 5;
        alert('remove favourite');
        setOrderData((prv) => ({...prv,value}))
    }

    return (
        <>
            <h1 class="text-xl">
                Orders
            </h1>
            {orderData().length > 0
                ?
                    <>
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
                        <For each={orderData()}>{
                            (o) => <div class="w-full">
                                <div>
                                    {o}
                                </div>
                                <div>
                                    <button onClick={handleOrderAddress}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        }</For>{}
                    </>
                :
                    <div class="w-full h-[70vh] flex">
                        <div class="m-auto">
                            No orders at current moment
                        </div>
                    </div>
            }
        </>
    )
}

export default Orders;