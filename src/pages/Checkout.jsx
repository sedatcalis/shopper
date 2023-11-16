import React from "react";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  // sepeteki toplam fiyat
  const totalPrice = basket.reduce((total, i) => total + i.amount * i.price, 0);

  // sepeteki toplam ürün sayısı
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

  return (
    <div className="container position-relative ">
      <div className="d-flex flex-column gap-5">
        {/* sepete ürün yoksa */}
        {basket.length === 0 && (
         <div className="text-center my-5">
         <p className="fs-4 text-white">Sepetiniz boş! Hemen alışverişe başlayın.</p>
         <Link className="btn btn-danger fs-5" to="/">
           Anasayfa
         </Link>
       </div>
        )}
        {/* sepete ürün varsa */}
        {basket.map((product) => (
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <div
              className="bg-white rounded"
              style={{ width: "100px", height: "100px" }}
            >
              <img
                className="rounded object-fit-contain shadow "
                style={{ width: "100px", height: "100px" }}
                src={product.image}
              />
            </div>
            <h4 className="text-truncate">{product.title}</h4>
            <h3 className="text">${product.price}</h3>
            <p className="text-sm text-nowrap">Miktar: {product.amount}</p>
            <div className="d-flex gap-3">
              <button
                onClick={() => removeFromBasket(product.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4 bg-white text-black ">
        <p>
          Sepetteki Ürün : <span className="text-warning"> {totalAmount}</span>
        </p>
        <p>
          Toplam Fiyat : <span className="text-success">${totalPrice.toFixed(2)}</span>
        </p>
        <p className="d-flex align-items-center ">İndirim Kodu <input className="bg-white border-none rounded mx-1 my-3 text-black justify-content-between" type="text" /><button onClick={()=> alert("İndirim Uygulandı")}>Onayla</button></p>
        
      </div>
    </div>
  );
};

export default Checkout;
