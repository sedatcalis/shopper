import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
  }, [id]);

  return (
    <div className="container mt-5">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1 className="text-primary">{product.title}</h1>
            <p className="text-muted mb-3">{product.category}</p>
            <p className="lead mb-4">{product.description}</p>
            <p className="text-primary">Fiyat: ${product.price}</p>
            <p className="text-warning mb-2">Değerlendirme: {product.rating.rate} / 5</p>
            <p className="text-success mb-4">Stokta Kalan Miktar: {product.amount}</p>
            <Link to={"/"} className="btn btn-danger">
              Geri Dön
            </Link>
          </div>
        </div>
      ) : (
        <p>Ürün bilgileri yükleniyor...</p>
      )}
    </div>
  );
};

export default ProductDetail;