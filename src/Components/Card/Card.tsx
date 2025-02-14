import { useState } from "react";
import styles from "./Card.module.css";


export type CardProps = {
    id: string;
    url: string;
    breeds?: string;
    favourite?: boolean;
    width?: number;
    height?: number;
    name?: string;
    breed_group?: string;
    life_span?: string;
    temperament?: string;
    reference_image_id?: string;
}

const Card = ({ id, url, breeds, favourite, breed_group, life_span, temperament} : CardProps) => {
    const [isFavourite, setIsFavourite] = useState(favourite ?? false);
    const [isRemove, setIsRemove] = useState(false);
    
    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    const handleRemove = () => {
        setIsRemove(!isRemove);
    };

    return (
        <div className={styles.card}>
            <img className={styles.image} src={url} alt="Dog"></img>
                <p className={styles.breeds}>
                    <b>Breeds:</b> {breeds} <br />
                    <b>Group:</b> {breed_group} <br />
                    <b>Life span:</b> {life_span} <br />
                    <b>Temperament:</b> {temperament} <br />
                </p>
            <input 
            type="checkbox" 
            id="heartCheckbox" 
            className={styles.heartCheckbox} 
            checked={isFavourite}
            />
            <label 
                htmlFor="heartCheckbox" 
                className={styles.heartLabel}
                onClick={handleFavourite}
            >
                ♥
            </label>
            <button 
                type="button" 
                className={styles.removeBtn} 
                onClick={handleRemove}
            >
                <img className={styles.trash} src="src/assets/images/trash.png" alt="Delete" />
            </button>
        </div>
    );
};

export default Card;
