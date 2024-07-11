import React, { useState } from "react";
import { db, storage } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title || !price || !image) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const storageRef = ref(storage, `products/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress); // Update progress state
        },
        (error) => {
          console.error("Upload failed", error);
          setLoading(false);
        },
        async () => {
          const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
          const productRef = collection(db, "products");
          await addDoc(productRef, {
            title,
            price,
            imgUrl,
          });
          alert("Product added successfully!");
          setTitle("");
          setPrice("");
          setImage(null);
          setLoading(false);
          setUploadProgress(0); // Reset progress after upload
        }
      );
    } catch (error) {
      console.error("Error adding product", error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen px-5 mb-[112px]">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 block w-full text-sm text-gray-500"
            accept="image/*"
            required
          />
        </div>
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="relative pt-1 mt-2">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-xs font-semibold text-indigo-600">
                {uploadProgress.toFixed(2)}%
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
              <div
                style={{ width: `${uploadProgress}%` }}
                className="shadow-none h-full flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 border"
              ></div>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Add;
