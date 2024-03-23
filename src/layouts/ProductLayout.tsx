import { useParams } from "@solidjs/router";
import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { Component, For, createEffect, createSignal } from "solid-js";
import { db } from "../firebase/config";
import { BsHeart, BsShare } from "solid-icons/bs";
import cookie from "cookiejs";
import { useCartContext } from "../context/CartContext";
import LoadingScreen from "../components/general/LoadingScreen";
import { AiOutlineMinus, AiOutlinePlus } from "solid-icons/ai";

const ProductLayout:Component = () => {
    const [loading, setLoading] = createSignal(false);
    const {addToCart} = useCartContext();
    const [productData, setProductData] = createSignal<any>();
    const [selectedData,setSelectedData] = createSignal({
        color: '',
        size: '',
        quantity: 1,
    });
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
        alert('please select size and colour')
        const docRef = await addDoc(collection(db, "whishlist"), {
            user_id: userId,
            product_id: productData().id,
            name: productData().name,
            image: productData().images[0],
            summary: productData().summary,
            price: productData().price,
            created_at: Timestamp.now()
        });
        if(docRef.id){
            alert('Product was added to your wish list');
        } else {
            alert('Your product was not added to your wish list');
        }
    }

    const addToShoppingCart = () => {
        let {
            color,
            size
        } = selectedData();
        if(color === '' || size === ''){
            if(color === ''){

            }
            if(size === ''){

            }
            alert('need to select a color and size');
            return;
        }
        const newDataObj = Object.assign(productData(),selectedData());
        // console.log(newDataObj);
        addToCart(newDataObj);
        alert('product added to cart');
    }

    const selectColor = (e: string) => {
        setSelectedData((prv) => ({...prv,color:e}));
    }

    const selectSize = (e: string) => {
        setSelectedData((prv) => ({...prv,size:e}));
    }

    return (
        <>
            {loading() 
                ?
                    <div class="w-10/12 m-auto pt-16 md:pt-32 flex md:gap-5 flex-wrap md:flex-nowrap py-10">
                        <div class="w-full md:w-1/3 bg-gray-200 flex">
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
                            <div class="flex gap-4 items-center">
                                <span class="bg-green-600 text-white px-3 py-1 rounded-full">
                                    Gender: 
                                </span>
                                {productData()?.gender}
                            </div>
                            <div class="w-full border-b pb-2 border-gray-300">
                                Colours
                            </div>
                            <div class="flex gap-2">
                                <For each={productData()?.colors}>{
                                    (c) => <div>
                                        <button
                                            onclick={() => selectColor(c)} 
                                            class={`${c === selectedData().color ? "bg-sky-600 text-white" : null } py-1 border border-gray-300 w-24`}
                                        >
                                            {c}
                                        </button>
                                    </div>
                                }</For>
                            </div>
                            <div class="w-full border-b pb-2 border-gray-300">
                                Sizes
                            </div>
                            <div class="flex gap-2">
                                <For each={productData()?.sizes}>{
                                    (s) => <div>
                                        <button
                                            onClick={() => selectSize(s)} 
                                            class={`${selectedData().size === s ? "bg-sky-600 text-white" : null} py-1 border border-gray-300 w-24`}
                                        >
                                            {s}
                                        </button>
                                    </div>
                                }</For>
                            </div>
                            <div class="flex gap-4 items-center">
                                <span class="bg-green-600 text-white px-3 py-1 rounded-full">
                                    Stock Available: 
                                </span>
                                {productData()?.stock}
                            </div>
                        </div>
                        <div class="w-full md:w-1/3">
                            <div class="text-2xl pb-3 flex justify-between">
                                <p>
                                    Purchase
                                </p>
                                <h3>
                                    R {(Number(productData()?.price) * selectedData().quantity).toFixed(2)}
                                </h3>
                            </div>
                            <div class="pb-6">
                                <h3 class="text-xl text-center pb-3">
                                    Quantity
                                </h3>
                                <div class="w-full h-10 border border-gray-300 rounded-sm flex">
                                    <button
                                        onClick={() => setSelectedData((prv) => ({...prv,quantity: selectedData().quantity !== 1 ? selectedData().quantity - 1 : selectedData().quantity}))} 
                                        class="w-1/4 border-r h-10 border-gray-300 bg-gray-200 hover:bg-gray-300 duration-300"
                                    >
                                        <AiOutlineMinus class="m-auto" />
                                    </button>
                                    <div class="w-2/4 border-r flex h-10 border-gray-300">
                                        <p class="m-auto">{selectedData().quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedData((prv) => ({...prv,quantity: selectedData().quantity + 1}))} 
                                        class="w-1/4 h-10 flex bg-gray-200 hover:bg-gray-300 duration-300"
                                    >
                                        <AiOutlinePlus class="m-auto" />
                                    </button>
                                </div>
                            </div>
                            <div class="flex items-center gap-5">
                                <button
                                    onClick={addToShoppingCart} 
                                    class="w-full bg-black h-10 text-white px-10 rounded-sm"
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