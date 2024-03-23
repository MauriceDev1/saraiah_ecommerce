import { createContext, useContext, createSignal, createEffect, Accessor } from "solid-js";

interface Product {
    id: string;
    name: string;
    summary: string;
    price: string;
    images: string[];
    stock: string;
    store_id: string;
    quantity: number;
    details: string;
    sizes: string[];
    size: string;
    category: string;
    colors: string[];
    color: string;
    gender: string;
}

interface CartContextProps {
    cart: Accessor<Product[]>;
    setCart: (value: Product[]) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (product: string) => void;
}

const CartContext = createContext<CartContextProps>();

export function CartContextProvider(props: any) {
    const [cart, setCart] = createSignal<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1; 
                
                return updatedCart;
            } else {
                return [...prevCart, { ...product}];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.id !== productId);
            return updatedCart;
        });
    };
    createEffect(() => {
        cart()
    })

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => useContext(CartContext)!;
