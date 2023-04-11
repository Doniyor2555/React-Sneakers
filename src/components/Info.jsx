import React from 'react'
import AppContext from './context';

function Info({title, image, description}) {
  const {setCartOpened} = React.useContext(AppContext)
  return (
    <div className="cartEmpty d-flex">
      <img width={150} min-height={150} src={image} alt="empty-cart" />
      <span>{title}</span>
      <p>{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton"><img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад</button>
    </div>
  )
}

export default Info;