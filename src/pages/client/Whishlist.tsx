import { collection, getDocs, query, where } from "firebase/firestore";
import { Component, For, createEffect, createSignal } from "solid-js";
import { db } from "../../firebase/config";
import cookie from "cookiejs";
import LoadingScreen from "../../components/general/LoadingScreen";

const Whishlist:Component = () => {
    const [favouriteData, setFavouriteData] = createSignal<any[]>([]);
    const [ loading, setLoadin] = createSignal(false);
    const userId = cookie.get('userId');

    createEffect(() => {
        getAllUserWhistlistItems(userId);
    }); 

    const getAllUserWhistlistItems = async (e: any) => {
        const q = query(collection(db, "whishlist"), where("user_id", "==", `${e}`));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            const doc_id = {"id": doc.id}
            const doc_data = doc.data();
            const new_data = Object.assign(doc_id,doc_data);
            setFavouriteData((prv) => [...prv,new_data]);
            setLoadin(true);
        });
    }

    return (
        <>
            <h1 class="text-xl mb-5">
                Wishlist
            </h1>
            <>
                {loading()
                    ?
                        <>
                        <div class="w-full bg-black text-white py-2 flex mt-3">
                            <div class="w-1/4 px-2">
                                Image
                            </div>
                            <div class="w-1/4 px-2">
                                Description
                            </div>
                            <div class="w-1/4 px-2">
                                Price
                            </div>
                            <div class="w-1/4 px-2">
                                Action
                            </div>
                        </div>
                            {favouriteData().length > 0
                                ?
                                <div class="w-full flex flex-col gap-2 overflow-y-scroll h-[50vh]">
                                    <For each={favouriteData()}>{
                                        (f) => 
                                            <div>
                                                <img src={f.image} alt="whishlist item" class="h-32"/>
                                                <h3>
                                                    {f.name}
                                                </h3>
                                            </div>
                                    }</For>   
                                </div>
                                :
                                    <div class="w-full h-[70vh] flex">
                                        <div class="m-auto">
                                            No items in your wishlist at the current moment
                                        </div>
                                    </div>
                            }
                        </>
                    :
                        <LoadingScreen />
                }
            </>
        </>
    )
}

export default Whishlist;
