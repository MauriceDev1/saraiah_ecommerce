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
                            {favouriteData().length > 0
                                ?
                                <div>
                                    <For each={favouriteData()}>{
                                        (f) => 
                                            <div>
                                                <img src={f.image} alt="whishlist item" class="w-1/5"/>
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
