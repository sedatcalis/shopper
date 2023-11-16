import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // ürünü alır sepete ekler
  const addToBasket = (product) => {
    // sepete bu ürünü daha önce eklenmiş kontrol etme
    const found = basket.find((i) => i.id === product.id);
    //    miktarı + 1
    if (found) {
      const updated = { ...found, amount: found.amount + 1 };

      // sepet dizisinden eski elemanı cıkartıcaz yenisi ekle
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

    //   state güncelleme
    setBasket(newBasket)
    } else {
      // sepete ekle
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  const removeFromBasket = (delete_id) => {
    // sepete ürünü bulacagız
    const found = basket.find((i) => i.id == delete_id)

    if(found.amount > 1){
// miktarı 1 azalt
const updated = { ...found, amount: found.amount - 1 };

      // sepet dizisinden eski elemanı cıkartıcaz yenisi ekle
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      setBasket(newBasket)
    }else{
// sepetten kaldır
const filtred = basket.filter((i) => i.id !== delete_id)
setBasket(filtred)
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
