import axios from "axios";
import { createContext, useState, useEffect } from "react";

/**
 * context api
 * uygulamada birden cok bileşenin ihtiyacı olan verileri
 * bilenlerden bagımsız bir şekilde konumlaann merkezlerde
 * yönetmeye yarar ve verileri degiştirmeye yarayan
 * fonksiyonları tutarız
 * context tuttugumuz bu degişkenleri bileşenlere dogrudan aktarım yapabir
 * merkezsi state yönetim aracıdır
 *
 */

// ! context yapısının temelini oluşturma

export const ProductContext = createContext();

// saglayıcı ve onun tuttugu verileri tanımlama
export function ProductProvider({ children }) {
  // verileri state tutuyoruz
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //   bileşen ekrana basıldıgı ilk anda
  useEffect(() => {
    // api verileri cekme
//! kategori yoksa atacagı istek linli:
// https://fakestoreapi.com/products

// !kategori varsa:
// https://fakestoreapi.com/products/category/category_ismi

    axios
      .get(
        `https://fakestoreapi.com/products${
          selectedCategory ? "/category/" + selectedCategory : ""
        }`
      )
      .then((res) => setProducts(res.data));
  }, [selectedCategory]);



  //  context yapısında tuttugumuz bütün belirledigimiz verileri bileşenlere saglar
  return (
    <ProductContext.Provider
      value={{ products, setSelectedCategory}}
    >
      {children}
    </ProductContext.Provider>
  );
}
