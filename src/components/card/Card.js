import { useState } from 'react';

import './card.scss';

function Card({title, price, imageUrl, onFavorite, onPlus}) {
  
  const [isAdded, setAdded] = useState(false);
  
  const onClickPlus = () => {
    setAdded(!isAdded);
    onPlus({title, price, imageUrl});
  }

  const pointeEvents = {
    pointerEvents: 'none'
  }
  const cursorPointer = {
    cursor: 'pointer'
  }
  
  return (
    <div className="card">
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/heart.svg" alt="Unliked" />
      </div>
      <img src={imageUrl} style={{marginBottom: '14px'}} width={133} height={112} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
              <button className='add' style={{border: 'none', background: 'none'}} >
                <img 
                onClick={onClickPlus} 
                src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                className='cu-p'
                style={isAdded ? pointeEvents : cursorPointer}
                alt="plus.svg" />
              </button>
      </div>
    </div>
  )
}

export default Card

