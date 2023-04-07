import { useState, useEffect } from "react";

// liblaries 
import axios from "axios";


import Card from "./components/card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://642c0e2c208dfe254726b4cb.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://642c0e2c208dfe254726b4cb.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://642c0e2c208dfe254726b4cb.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorites = (obj) => {
    axios.post('https://642c0e2c208dfe254726b4cb.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://642c0e2c208dfe254726b4cb.mockapi.io/cart/${id}`);
    console.log(id)
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemoveItem={onRemoveItem} />}
      <Header onCartOpened={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}</h1>
          <div className='search-block d-flex'>
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img
              className="clear removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
              onClick={() => setSearchValue('')}
            />}
            <input onChange={onSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, i) => {
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
