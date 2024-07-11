import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ViewAll = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false); // Handle error state
      }
    };

    fetchProducts();
  }, []);

  const limitTitleLength = (text) => {
    const limitedText = text.length > 15 ? text.substring(0, 15) + "..." : text;
    return limitedText;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-screen px-5 mb-[112px]">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-xl">
            <img
              src={product.imgUrl} // Use product.imgUrl for the image source
              alt={product.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="mt-2">
              <h2 className="font-bold text-lg">
                {limitTitleLength(product.title)}
              </h2>
              <p className="text-gray-700">R {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
