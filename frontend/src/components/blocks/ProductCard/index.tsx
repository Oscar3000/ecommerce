import React from "react";
import Link from "../../elements/Link";
import "./style.scss";
import Label from "../../elements/Label";
interface Props {
    product: {
        name: string;
        price?: number;
        discount?: number;
        mainImg: string;
        imgs?: string[];
        labels?: string[];
    };
    className?: string;
}
const ItemCard = ({ product }: Props) => {
    return (
        <div className="ProductCard col-sm-6">
            <div className="card-header">
                <Link route={"#"}>
                    <figure className="ProductCard__image">
                        <img src={product.mainImg} />
                    </figure>
                </Link>
                {product.labels && (
                    <div className="ProductCard__labels">
                        {product.labels.map((label, i) => (
                            <Label className={label} key={label + `${i}`}>
                                {label}
                            </Label>
                        ))}
                    </div>
                )}
                <div className="ProductCard__cart">
                    <span>
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div className="card-content">
                <span className="ProductCard__title">{product.name}</span>
                <div className="ProductCard__metrics">
                    <span>Price: {product.price}$</span>
                    <br />
                    {product.discount && <span>Discount: {product.discount}</span>}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
