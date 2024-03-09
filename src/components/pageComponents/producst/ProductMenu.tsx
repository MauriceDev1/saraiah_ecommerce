import { useLocation, useParams } from "@solidjs/router";
import { Component } from "solid-js"

const ProductMenu: Component = () => {
    const { id } = useParams();
    
    return (
        <div class="w-[350px] border h-96 sticky top-32">
            <div class="w-full boredr">
                {id}
            </div>
        </div>
    )   
}

export default ProductMenu;