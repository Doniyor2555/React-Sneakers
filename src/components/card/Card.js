import { useState } from 'react';

import './card.scss';

function Card({ id, title, price, imageUrl, onFavorite, onPlus,  setIncrease,  favorited = false, added = false }) {

  const [isAdded, setAdded] = useState(added);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    setAdded(!isAdded);
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
      <div className="favorite" onClick={isFavorite ? dicreaseFavorite : inceraseFavorite}>
        <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} onClick={onClickFavorite} alt="Unliked" />
      </div>
      <img src={imageUrl} style={{ marginBottom: '14px' }} width={133} height={112} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className='add' style={{ border: 'none', background: 'none' }} >
          <img
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            className='cu-p'
            alt="plus.svg" />
        </button>
      </div>
    </div>
  )
}

export default Card

