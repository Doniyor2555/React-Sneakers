import React from 'react';
import { useState } from "react";

import Info from "./Info";
import { useCart } from './hooks/useCart';

function Drawer({ onClose, onRemoveItem, items = [] }) {

  const { cartItems, setCartItems, totalPrice } = useCart();       

  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };


  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} /></h2>



        {
          items.length > 0 ?
            <div className='d-flex flex-column flex'>
                <div className='items'>
                  {
                    items.map((item) => (
                      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} >
                        <div key={item.id} className="cartItem d-flex align-center mb-20">
                          <div style={{ backgroundImage: `url(${item.imageUrl})` }} className="cartItemImg"></div>
                          <div className="mr-20 flex">
                            <p className="mb-5">{item.title}</p>
                            <b>{item.price} руб.</b>
                          </div>
                          <img onClick={() => onRemoveItem(item.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                      </div>



                    ))
                  }
                </div>

                <div className="cartTotalBlock">
                  <ul>
                    <li>
                      <span>Итого: </span>
                      <div></div>
                      <b>{totalPrice} руб. </b>
                    </li>
                    <li>
                      <span>Налог 5%: </span>
                      <div></div>
                      <b>{totalPrice / 100 * 5} руб. </b>
                    </li>
                  </ul>
                  <button className="greenButton" onClick={onClickOrder}>
                    Оформить заказ
                    <img src="/img/arrow.svg" alt="Arrow" />
                  </button>
                </div>
            </div>
            : <Info 
            title={isOrderComplete ? <div style={{marginTop: '30px', color: "#87C20A", fontSize: '22px', marginBottom: '9px'}}>Заказ оформлен!</div> : 'Корзина пустая'}
            description={isOrderComplete ? <div style={{opacity: '0.5'}}>Ваш заказ #18 скоро будет передан курьерской доставке</div> : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' }
            image={isOrderComplete ? '/img/complete-order.jpg' :'/img/empty-cart.jpg'} />
        }

      </div>
    </div>
  )
}

export default Drawer