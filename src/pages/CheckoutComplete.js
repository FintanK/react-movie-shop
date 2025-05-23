import { useDispatch } from "react-redux";
import { useTitle } from "../hooks";
import { emptyCart } from "../store/cartSlice";

export const CheckoutComplete = () => {

    useTitle('Thank you for your order!');
    useDispatch(emptyCart());

    return (
        <div class="h-screen text-center p-10">
            <h1 className="dark:text-gray-100">Checkout Complete!</h1>
            <p className="dark:text-gray-100">Thank you for your order.</p>
        </div>
    )
}