import { Component, For } from "solid-js"
import ProductMenu from "../components/pageComponents/producst/ProductMenu"

const ProductsLayout: Component = () => {
    const data = [1,2,3,4,5,6,7,8,9,0,1]
    return (
        <div class="w-11/12 m-auto pt-32 flex gap-5 py-10">
            <ProductMenu />
            <div class="w-full flex flex-wrap">
                <For each={data}>{
                    (d) => 
                        <div class="w-1/4 p-2">
                            <a href={`/product/${d}`}>
                                <div class="w-full bg-gray-200 h-56">

                                </div>
                            </a>
                        </div>
                }</For>
            </div>
        </div>
    )
}

export default ProductsLayout;