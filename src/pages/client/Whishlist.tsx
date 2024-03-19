import { Component, For, createSignal } from "solid-js";

const Whishlist:Component = () => {
    const [favouriteData,setFavouriteData] = createSignal<any[]>([]);

    const handleRemoveAddress = () => {
        const value = 5;
        alert('remove favourite');
        setFavouriteData((prv) => ({...prv,value}))
    }

    return (
        <>
            <h1 class="text-xl">
                Wishlist
            </h1>
            {favouriteData().length > 0
                ?
                    <For each={favouriteData()}>{
                        (f) => <div class="w-full">
                            <div>
                                {f}
                            </div>
                        </div>
                    }</For>   
                :
                    <div class="w-full h-[70vh] flex">
                        <div class="m-auto">
                            No items in your wishlist at the current moment
                        </div>
                    </div>
            }
        </>
    )
}

export default Whishlist;
