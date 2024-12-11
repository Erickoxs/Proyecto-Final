import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

// Definir una interfaz para los datos del producto
interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

const ProductDetails: React.FC = () => {
    // Usar tipos de estado para los datos del producto
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Definir el tipo de `id`

    // Obtener el producto cuando se carga el componente
    useEffect(() => {
        if (id) {
            handleGetProduct(id);
        }
    }, [id]);

    const handleGetProduct = async (id: string) => {
        try {
            const response = await api.get(`/products/${id}`);
            const product: Product = response.data; // Asignar la respuesta con el tipo Product
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setImageUrl(product.imageUrl);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    };

    return (
        <div className="font-sans">
            <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img src={imageUrl} alt="Product" className="w-4/5 rounded-md object-cover" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${price}</p>
                        </div>

                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-primary-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            {/* Más SVGs aquí */}
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Descripción</h3>
                            <p className="mt-2 text-gray-600">{description}</p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Categoría</h3>
                            <p className="mt-2 text-gray-600">{category}</p>
                        </div>

                        <button type="button" className="w-full mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-md">
                            Add to cart
                        </button>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                            {/* Aquí van las reseñas */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
