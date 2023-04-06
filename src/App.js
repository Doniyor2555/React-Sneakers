import { useState, useEffect } from "react";

import Card from "./components/card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://642c0e2c208dfe254726b4cb.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
        setItems(json);
    })
  }, []);
  
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const deleteItemFromDrawer = (obj) => {
    const items = document.querySelector(".items")
    const cartItems = document.querySelector(".cartItem");

    items.removeChild(cartItems);
  }

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onDelete={(obj) => deleteItemFromDrawer(obj)}/>}
      <Header onCartOpened={() => setCartOpened(true)}/>
     
      <div className="content p-40">

        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'> 
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..."/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, i) => {
            return (
            <Card
             title={item.title}
             price={item.price}
             imageUrl={item.imageUrl}
             onFavorite={() => console.log('favorite')}
             onPlus={(obj) => onAddToCart(obj)}
             key={i} 
             />
            )
          })}
        </div>
      </div>  
    </div>
  );
}

export default App;
