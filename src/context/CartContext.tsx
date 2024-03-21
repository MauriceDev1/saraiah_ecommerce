import { createContext, useContext, createSignal, createEffect, Accessor } from "solid-js";

interface Product {
    id: string;
    name: string;
    summary: string;
    price: string;
    images: string[];
    stock: string;
    store_id: string;
    details: string;
    sizes: string[];
    category: string;
    colors: string[];
    gender: string;
}

interface CartContextProps {
    cart: Accessor<Product[]>;
    setCart: (value: Product[]) => void;
    addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextProps>();

export function CartContextProvider(props: any) {
    const [cart, setCart] = createSignal<Product[]>([]);

    const addToCart = (product: Product) => {
        console.log("Adding to cart:", product);
        setCart(prevCart => {
            const newCart = prevCart ? [...prevCart, product] : [product];
            console.log("New cart:", newCart);
            return newCart;
        });
    };

    // Log the cart state whenever it changes
    createEffect(() => {
        cart()
        console.log("Current cart:", cart());
    })

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => useContext(CartContext)!;
