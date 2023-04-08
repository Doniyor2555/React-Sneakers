import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';


// liblaries 
import axios from "axios";


import Card from "./components/card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setCartOpened] = useState(false);
  const [increase, setIncrease] = useState(0)

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
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id, e) => {
    e.preventDefault();
    axios.delete(`https://642c0e2c208dfe254726b4cb.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const removeItemFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item, i) => i !== i));
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };


  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemoveItem={onRemoveItem} />}
      <Header increase={increase} onCartOpened={() => setCartOpened(true)} />

      <Routes>
        <Route end path='/' element={<Home searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearchInput={onSearchInput}
          items={items}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          increase={increase}
          setIncrease={setIncrease}
        />} />
        <Route path="/favorites" element={<Favorites
          favorites={favorites}
          removeItemFromFavorites={removeItemFromFavorites}
          increase={increase}
          setIncrease={setIncrease} />} />
      </Routes>

    </div>
  );
}

export default App;
