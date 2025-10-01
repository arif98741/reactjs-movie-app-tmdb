import React, { useState } from "react";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import { toast } from "react-toastify";

const initialCartItems = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        quantity: 1,
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 149.99,
        quantity: 2,
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 79.99,
        quantity: 1,
        image: "https://via.placeholder.com/150",
    }
    , {
        id: 4,
        name: "Wireless Mouse",
        price: 29.99,
        quantity: 1,
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 89.99,
        quantity: 1,
        image: "https://via.placeholder.com/150",
    }

];

const paymentMethods = ["Credit Card", "PayPal", "Cash on Delivery"];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);

    const shipping = 10;

    // Calculate subtotal dynamically
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = subtotal + shipping - discount;

    const updateQuantity = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) } // prevent <1
                    : item
            )
        );
    };

    const applyCoupon = () => {
        if (coupon.toUpperCase() === "SAVE10") {
            setDiscount(subtotal * 0.1);
        } else {
            setDiscount(0);
            alert("Invalid coupon");
        }
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        toast.success("Item removed from cart");
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300 transition"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="ml-4 text-red-500 hover:text-red-700 font-bold text-xl cursor-pointer"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}

                        {cartItems.length === 0 && (
                            <p className="text-gray-500 text-center mt-6">Your cart is empty.</p>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-xl shadow space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>

                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        {/* Coupon Input */}
                        <div className="mt-2 flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter coupon code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="flex-1 border border-gray-300 rounded-l-xl p-2 focus:outline-none"
                            />
                            <button
                                onClick={applyCoupon}
                                className="bg-blue-600 text-white px-4 py-2 rounded-r-xl hover:bg-blue-700 transition"
                            >
                                Apply
                            </button>
                        </div>

                        {/* Discount */}
                        {discount > 0 && (
                            <div className="flex justify-between text-green-600 font-semibold">
                                <span>Discount</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>

                        {/* Payment Method */}
                        <div className="mt-4">
                            <label className="block mb-2 font-semibold text-gray-700">Payment Method</label>
                            <select
                                value={selectedPayment}
                                onChange={(e) => setSelectedPayment(e.target.value)}
                                className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none"
                            >
                                {paymentMethods.map((method) => (
                                    <option key={method} value={method}>
                                        {method}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-gray-800 text-lg">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export { CartPage as Cart };