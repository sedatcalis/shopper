import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
 const {addToBasket} = useContext(BasketContext)
  return (
    <div className="card py-2" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img
          className="object-fit-contain"
          height={120}
          src={product.image}
          alt=""
        />
      </div>
      <div className="card-body d-flex flex-column gap-1">
        <h4 className="text-truncate">  {product.title}</h4>
        <p>{product.descrition}</p>
        <p>{product.price}</p>
        <button onClick={()=> addToBasket(product)}>Sepete Ekle</button>
        <Link
          to={`/productDetail/${product.id}`}
          className="btn btn-warning w-100"
        >
          Ürün Detayı
        </Link>
      </div>
    </div>
  );
};

export default Card;
