import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../inc/Header";
import Footer from "../inc/Footer";

export default function ProductDetails() {
    const { id } = useParams(); // Get the product ID from URL
    const [product, setProduct] = useState(null);
    const fetchProduct = async () => {
        try {
            const randomInteger = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            const productId = randomInteger(1, 1); // Default to 1 if id is undefined
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!res.ok) throw new Error('Network response was not ok');

            const data = await res.json();
            setProduct(data);
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <p className="text-center mt-10">Loading product...</p>;

    return (
        <>
            <Header />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full md:w-1/3 object-cover rounded-lg shadow"
                    />
                    <div className="flex-1">
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="text-xl font-semibold mb-4">${product.price}</p>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export { ProductDetails };