'use client';

import { MOCK_PRODUCTS } from "../data/products";

export function BlockRenderer({ name, image, products }: { name: string; image: string; products: string }) {
    const productList = products
        .split(',')
        .map((sku) => MOCK_PRODUCTS.find((p) => p.sku === sku))
        .filter(Boolean);

    return (
        <div className="border p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <img src={image} alt={name} className="w-full h-48 object-cover mb-2" />
            <div className="grid grid-cols-2 gap-4">
                {productList.map((prod) => (
                    <div key={prod?.sku} className="border p-2">
                        <img src={prod?.image} className="h-24 mx-auto" alt={prod?.name} />
                        <p>{prod?.name}</p>
                        <p className="text-sm text-gray-500">{prod?.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
