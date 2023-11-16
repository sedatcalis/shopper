
import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const MainPage = () => {
// context yapısına abone olma
// context yapısından value olarak belirlenen verilere erişim saglarım

const {products} =useContext(ProductContext)


  return (
    // divleri ortalama kücük ekranda alt alta gelmesini sagladım
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5" >
        {/* veriler gelmediyse yükleniyor */}
        {!products && <Loading/>}


        {/* veriler geldiyse her biri için kart bas */}
      {products?.map((product) => (
        <Card key={product.id} product={product}/>
        
      ))}
    </div>
  );
};

export default MainPage;
