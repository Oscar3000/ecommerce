import React from "react";
import "./style.scss";
interface Props {
    product: {
        name: string;
        price?: number;
        discount?: number;
        mainImg: string;
        imgs?: string[];
    };
    className?: string;
}
const ItemCard = ({ product }: Props) => {
    return (
        <div className="ProductCard col-sm-6">
            <div className="card-header">
                <figure className="ProductCard__image">
                    <img src={product.mainImg} />
                </figure>
            </div>
            <div className="card-content">
                <span className="ProductCard__title">{product.name}</span>
                <div className="ProductCard__metrics">Price: {product.price}$</div>
            </div>
        </div>
    );
};

export default ItemCard;
