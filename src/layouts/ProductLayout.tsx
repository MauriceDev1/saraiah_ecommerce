import { useParams } from "@solidjs/router";
import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import { Component, For, createEffect, createSignal } from "solid-js";
import { db } from "../firebase/config";

const ProductLayout:Component = () => {
    const [productData,setProductData] = createSignal<any>();
    const {id} = useParams();

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
    }

    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5 py-10">
            <div class="w-1/2 border h-96">
                <img src={productData()?.images[0]} alt={productData()?.title} />
            </div>
            <div class="w-1/2 flex flex-col gap-5">
                <h1>{productData()?.name}</h1>
                <h3>
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
                <div class="flex gap-5">
                    <For each={productData()?.colors}>{
                        (c) => <div>
                            <button class="py-1 border border-gray-300 w-24">
                                {c}
                            </button>
                        </div>
                    }</For>
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
                <div>
                    R {productData()?.price}
                </div>
                <button class="bg-black h-10 text-white px-10">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductLayout;