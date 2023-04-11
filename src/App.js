import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';


// liblaries 
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import AppContext from "./components/context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isCartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [increase, setIncrease] = useState(0);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get('https://642c0e2c208dfe254726b4cb.mockapi.io/cart');
      const itemsResponse = await axios.get('https://642c0e2c208dfe254726b4cb.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);

    }

    fetchData();

  }, []);


  const onAddToCart = (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://642c0e2c208dfe254726b4cb.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://642c0e2c208dfe254726b4cb.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const onAddToFavorites = (obj) => {
    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://642c0e2c208dfe254726b4cb.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const removeItemFromFavorites = () => {
    setFavorites((prev) => prev.filter((item, i) => i !== i));
  };

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };


  return (
    <AppContext.Provider value={{ /* cardItems */  items, cartItems, isItemAdded,
                                  /* Favorites */ favorites, increase, setIncrease, removeItemFromFavorites
    }}>
      <div className="wrapper clear">
        {
          isCartOpened
          &&
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemoveItem={onRemoveItem} />
        }
        <Header increase={increase} onCartOpened={() => setCartOpened(true)} />

        <Routes>
          <Route end path='/' element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSearchInput={onSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              increase={increase}
              setIncrease={setIncrease}
              isLoading={isLoading}
            />} />
          <Route path="/favorites" element={ <Favorites/> } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
