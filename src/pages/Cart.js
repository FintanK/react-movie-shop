
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTitle } from "../hooks";
import { remove } from "../store/cartSlice";

export const Cart = () => {

    const cartList = useSelector(state => state.cartState.cartList);
    const dispatch = useDispatch();

    useTitle('Cart / React Web Shop');

    return (
        <div className="mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
                <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartList.length} Items</h2>
                    </div>

                    {cartList.length === 0 ? <p>There are no items in your cart!</p> : []}

                    {cartList.map((movie) => (
                        <div key="{movie.id}" className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Black Leather Purse" className="h-full object-center object-cover md:block" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p className="text-base font-black leading-none text-gray-800">{movie.title}</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{movie.overview}</p>
                                </div>
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex itemms-center">
                                        <button type="button" onClick={() => dispatch(remove(movie))} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-8">Remove from Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <NavLink to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </NavLink>
                </div>
                <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
                    <NavLink to="/checkout" className="border-t mt-8">
                        <button disabled={cartList.length === 0} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}