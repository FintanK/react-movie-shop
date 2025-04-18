import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks";

export const Checkout = () => {

    useTitle('Checkout / React Web Shop');

    const cartList = useSelector(state => state.cartState.cartList);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        navigate('/checkout/complete')
    }

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:max-w-5xl max-w-xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 max-md:order-1">
                            <h2 className="text-3xl font-bold dark:text-gray-100">Make a payment</h2>
                            <p className="text-sm mt-4 dark:text-gray-100">This is a demo app, valid CC details are not required.</p>

                            <div className="mt-12 max-w-lg">
                                <div className="grid gap-4">
                                    <div>
                                        <div className="text-red-500">{errors.cardHolderName && <span>This field is required</span>}</div>
                                        <input type="text" placeholder="Cardholder's Name"
                                            {...register("cardHolderName", { required: true })}
                                            className="px-4 py-3.5 bg-gray-100 focus:text-white text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                    </div>

                                    <div className="text-red-500">{errors.cardNumber && <span>This field is required</span>}</div>
                                    <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
                                            <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                                            <path fill="#fed049"
                                                d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                                                className="hovered-path" data-original="#fed049" />
                                        </svg>
                                        <input type="number" placeholder="Card Number"
                                            {...register("cardNumber", { required: true })}
                                            className="px-4 py-3.5 focus:text-white text-slate-900 w-full text-sm outline-none bg-transparent" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-red-500">{errors.expiryDate && <span>This field is required</span>}</div>
                                            <input type="number" placeholder="EXP."
                                                {...register("expiryDate", { required: true })}
                                                className="px-4 py-3.5 focus:text-white bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                        </div>
                                        <div>
                                            <div className="text-red-500">{errors.cvv && <span>This field is required</span>}</div>
                                            <input type="number" placeholder="CVV"
                                                {...register("cvv", { required: true })}
                                                className="px-4 py-3.5 bg-gray-100 focus:text-white text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-md">
                            <h2 className="text-3xl font-bold text-slate-900">Checkout</h2>

                            <ul className="text-slate-900 font-medium mt-12 space-y-4">
                                {cartList.map((movie) => (
                                    <li className="flex flex-wrap gap-4 text-sm">
                                        {movie.title}
                                    </li>
                                ))}
                            </ul>

                            <button type="submit" className="mt-8 w-40 py-3 text-[15px] font-medium bg-purple-500 rounded-md hover:bg-purple-600 tracking-wide">Checkout</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}