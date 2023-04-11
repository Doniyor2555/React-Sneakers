import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './context';

function Header(props) {
  const { cartItems } = useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, current) => current.price + sum, 0);


  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to='/'>
        <div className="headerLeft d-flex align-center">

          <img width={40} height={40} src='/img/logo.png' style={{ marginRight: '16px' }} alt='logo-type' />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Mагазин лучшиш кроссоок</p>
          </div>

        </div>
      </Link>

      <ul className='headerRight d-flex '>
        <li className="mr-30 cu-p" onClick={props.onCartOpened}>
          <img width={18} height={18} src='/img/cart.svg' style={{ marginRight: '10px' }} alt='cart.svg' />
          <span>{totalPrice} руб.</span>
        </li>
        <Link to='/favorites'>
          <li className="mr-30 cu-p" style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', fontSize: '14px', left: '16px', top: '-6px', color: 'red', fontWeight: 'bold' }}>{props.increase}</span>
            <img width={18} height={18} src='/img/heart.svg' alt='heart.png' />
          </li>
        </Link>
        <li >
          <img width={18} height={18} src='/img/user.svg' alt='user-img' />
        </li>
      </ul>
    </header>
  )
}

export default Header