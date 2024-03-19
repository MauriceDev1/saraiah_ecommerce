import { Component, For, createSignal } from "solid-js";

const Address:Component = () => {
    const [address,setAddress] = createSignal<string>();
    const [addresses,setAddresses] = createSignal<any[]>([]);

    const handleAddress = (e: any) => {
        const {value} = e.currentTarget;
        setAddress(value);
    }

    const handleAddressError = (e:any) => {
        const {name}  = e.currentTarget;
        console.log(name);
    }

    const addAddress = () => {
        setAddresses(prv => [...prv,address()]);
    }

    return (
        <>
            <h1 class="text-xl">
                Address
            </h1>
            <div class="w-full flex mt-3">
                <input
                    type="text"
                    name="address"
                    class="w-full max-w-[450px] h-9 border border-black"
                    onChange={handleAddress}
                    onInput={handleAddressError}
                />
                <button
                    onClick={addAddress}
                    class="w-24 text-sm bg-black text-white"
                >
                    Add
                </button>
            </div>
            {addresses().length > 0
                ?
                <>
                    <div class="w-full flex bg-white mt-5">
                        <div class="w-3/4 border-r border-gray-300 px-5 py-2">
                            Address
                        </div>
                        <div class="w-1/4 py-2 px-5">
                            Action
                        </div>
                    </div>
                    <For each={addresses()}>{
                        (a) => <div class="w-full flex">
                            <div class="w-3/4">
                                {a}
                            </div>
                            <div class="w-1/4">

                            </div>
                        </div>
                    }</For>
                </>
                :
                <div class="w-full h-[60vh] flex">
                    <div class="m-auto">
                        No address at moment
                    </div>
                </div>
            }
        </>
    )
}

export default Address;
