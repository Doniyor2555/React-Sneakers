import React from 'react';
import { useState, useContext } from 'react';

import ContentLoader from 'react-content-loader';
import AppContext from '../context';


import './card.scss';

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  setIncrease,
  favorited = false,
  added = false,
  loading = false
}) {

  
  
  const { isItemAdded, } = useContext(AppContext);
  
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
  }

  const onClickFavorite = () => {
    setFavorite(!isFavorite);
    onFavorite({ title, price, imageUrl })
  }


  const inceraseFavorite = () => {
    setIncrease(increase => increase + 1)
  }

  const dicreaseFavorite = () => {
    setIncrease(increase => increase - 1)
  }

  return (
    <div className="card">
      {
        loading ? (
          <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            <div className="favorite" onClick={isFavorite ? dicreaseFavorite : inceraseFavorite}>
              <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} onClick={onClickFavorite} alt="Unliked" />
            </div>
            <img src={imageUrl} style={{ marginBottom: '14px' }} width='100%' height={135} alt="sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <button className='add' style={{ border: 'none', background: 'none' }} >
                <img
                  onClick={onClickPlus}
                  src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                  className='cu-p'
                  alt="plus.svg" />
              </button>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Card

