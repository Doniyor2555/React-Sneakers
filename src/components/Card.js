import React from 'react'

function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="Unliked" />
      </div>
      <img src="/img/sneakers/1.jpg" style={{marginBottom: '14px'}} width={133} height={112} alt="sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
          <button className="button">
            <img width={11} height={11}  src="/img/plus.svg" alt="plus.svg"  />
          </button>
      </div>
    </div>
  )
}

export default Card