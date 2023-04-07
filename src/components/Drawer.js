function Drawer({ onClose, onRemoveItem, items = [] }) {
  console.log(items)
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" onClick={onClose} /></h2>



        {
          items.length > 0 ? <div className="items" >
            {
              items.map((item, i) => (
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div className="cartItem d-flex align-center mb-20" key={i}>
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
            : <div className="cartEmpty d-flex">
              <img width={150} height={150} src="/img/empty-cart.jpg" alt="empty-cart" />
              <span>Корзина пустая</span>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button onClick={onClose} className="greenButton"><img src="/img/arrow.svg" alt="Arrow" /> Вернуться назад</button>
            </div>
        }

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
        </div>

      </div>
    </div>
  )
}

export default Drawer