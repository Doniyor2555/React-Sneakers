import Card from "../card/Card";


function Home({ items,
  setSearchValue,
  onSearchInput,
  onAddToFavorites,
  onAddToCart,
  searchValue,
  increase,
  setIncrease,
  cartItems
}) {

  return (
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
                onFavorite={(item) => onAddToFavorites(item)}
                onPlus={(obj) => onAddToCart(obj)}
                key={i}
                increase={increase}
                setIncrease={setIncrease}
                added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                {...item}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Home;