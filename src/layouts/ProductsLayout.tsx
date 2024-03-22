import { Component, For, createEffect, createSignal } from "solid-js"
import ProductMenu from "../components/pageComponents/producst/ProductMenu"
import { useParams } from "@solidjs/router"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ProductsLayout: Component = () => {
    const [productsList,setProductsList] = createSignal<any[]>([]);
    const [loading, setLoading] = createSignal(false);
    const {id} = useParams();
    createEffect(() => {
        getListOfProducts(id);
    });

    const getListOfProducts = async (e: string) => {
        const q = query(collection(db, "products"), where("store_id", "==", `${e}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc:any) => {
            let doc_id = {"id": doc.id}
            let doc_data = doc.data();
            let new_data = Object.assign(doc_id,doc_data);
            
            setProductsList((prv) => [...prv,new_data]);
        });
        setLoading(true);
    };

    return (
        <div class="w-11/12 m-auto pt-16 lg:pt-32 flex gap-5 py-10">
            {/* <ProductMenu /> */}
            <div class="w-full flex flex-wrap">
            
                {productsList().length > 0 
                    ?
                        <For each={productsList()}>{
                            (d) => 
                                <a href={`/product/${d.id}`} class="w-full lg:w-1/6">
                                    <div class="w-full shadow bg-white">
                                        <div class="w-full bg-gray-200">
                                            <img src={d.images[0]} alt={d.title}/>
                                        </div>
                                        <div class="px-2 pb-2">
                                            <h3 class="text-center text-md pt-2 pb-1">
                                                {d.name}
                                            </h3>
                                            <p class="text-sm text-center">
                                                {d.summary}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                        }</For>
                    :
                        <div class="w-full h-full flex">
                            <div class="m-auto">
                                This store currently has no products
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductsLayout;