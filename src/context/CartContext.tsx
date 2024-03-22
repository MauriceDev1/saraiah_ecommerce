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
    category: string;
    colors: string[];
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
            // Check if the product already exists in the cart
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // Product already exists in the cart, update its quantity
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1; // Increase quantity
                
                return updatedCart;
            } else {
                // Product doesn't exist in the cart, add it with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prevCart => {
            // Filter out the product with the specified ID
            const updatedCart = prevCart.filter(item => item.id !== productId);
            return updatedCart;
        });
    };

    // Log the cart state whenever it changes
    createEffect(() => {
        cart()
        console.log("Current cart:", cart());
    })

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => useContext(CartContext)!;
