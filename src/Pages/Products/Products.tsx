import { useState, useEffect } from 'react';
import { productsApiService } from '../../api/ProductsApiService';
import { CardProps } from '../../Components/Card/Card';
import Card from '../../Components/Card/Card';
import styles from './Products.module.css';


export default function Products () {
    const [items, setItems] = useState<CardProps[]>([]);
    useEffect(() => {
        productsApiService.fetchProducts()
        .then(data => {
            if (data) {
                const transformedData = data.map((item: any) => ({
                    id: item.id,
                    url: item.url,
                    breeds: item.breeds[0]?.name,
                    favourite: false, // Assuming favourite is not provided by the API
                    width: item.width,
                    height: item.height,
                    name: item.breeds[0]?.name,
                    breed_group: item.breeds[0]?.breed_group,
                    life_span: item.breeds[0]?.life_span,
                    temperament: item.breeds[0]?.temperament,
                    reference_image_id: item.breeds[0]?.reference_image_id,
                }));
                setItems(transformedData);
            } else {
                console.warn("No products found in the response");
            }
        })
        .catch(error => {
            console.error("Error while fetching products:", error);
        });
    }, []);

    return (
        <div className={styles.products}>
            {items.map(item => (
                <Card 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
};
