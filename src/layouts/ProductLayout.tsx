import { useParams } from "@solidjs/router";
import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { Component, For, createEffect, createSignal } from "solid-js";
import { db } from "../firebase/config";
import { BsHeart, BsShare } from "solid-icons/bs";
import cookie from "cookiejs";
import { useCartContext } from "../context/CartContext";
import LoadingScreen from "../components/general/LoadingScreen";

const ProductLayout:Component = () => {
    const [loading, setLoading] = createSignal(false);
    const {addToCart} = useCartContext();
    const [productData, setProductData] = createSignal<any>();
    const {id} = useParams();
    const userId = cookie.get('userId');

    createEffect(() => {
        getProductData(id)
    });
    
    const getProductData = async (e: any) => {
        const docRef = doc(db, "products", `${e}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let doc_id = {"id":docSnap.id}
            let doc_data = docSnap.data();
            let new_data = Object.assign(doc_id,doc_data);
            setProductData(new_data);
        } else {
            console.log("No such document!");
        }
        setLoading(true);
    }

    const addToWishlist = async () => {
        const docRef = await addDoc(collection(db, "whishlist"), {
            user_id: userId,
            product_id: productData().id,
            name: productData().name,
            image: productData().images[0],
            created_at: Timestamp.now()
        });
        if(docRef.id){
            alert('Product was added to your wish list');
        } else {
            alert('Your product was not added to your wish list');
        }
    }

    const addToShoppingCart = () => {
        addToCart(productData());
    }

    return (
        <>
            {loading() 
                ?
                    <div class="w-11/12 m-auto pt-16 md:pt-32 flex md:gap-5 flex-wrap md:flex-nowrap py-10">
                        <div class="w-full md:w-1/3">
                            <img src={productData()?.images[0]} alt={productData()?.title} class="h-96 m-auto" />
                        </div>
                        <div class="w-full md:w-1/3 flex flex-col gap-5">
                            <h1 class="text-2xl font-bold">{productData()?.name}</h1>
                            <h3 class="text-lg font-medium">
                                {productData()?.summary}
                            </h3>
                            <p>
                                {productData()?.details}
                            </p>
                            <div>
                                {productData()?.gender}
                            </div>
                            <div>
                                {productData()?.stock}
                            </div>
                            <div class="w-full border-b pb-2">
                                Colours
                            </div>
                            <div class="flex gap-5">
                                <For each={productData()?.colors}>{
                                    (c) => <div>
                                        <button class="py-1 border border-gray-300 w-24">
                                            {c}
                                        </button>
                                    </div>
                                }</For>
                            </div>
                            <div class="w-full border-b pb-2">
                                Sizes
                            </div>
                            <div class="flex gap-5">
                                <For each={productData()?.sizes}>{
                                    (s) => <div>
                                        <button class="py-1 border border-gray-300 w-24">
                                            {s}
                                        </button>
                                    </div>
                                }</For>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3">
                            <div class="text-2xl pb-5 flex justify-between">
                                <p>
                                    Purchase
                                </p>
                                <h3>
                                    R {productData()?.price}
                                </h3>
                            </div>
                            <div class="flex items-center gap-5">
                                <button
                                    onClick={addToShoppingCart} 
                                    class="w-full bg-black h-10 text-white px-10"
                                >
                                    Add to Cart
                                </button>
                                <button onClick={addToWishlist}>
                                    <BsHeart />
                                </button>
                                <button>
                                    <BsShare />
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <LoadingScreen />
            }
        </>
    )
}

export default ProductLayout;