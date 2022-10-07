import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='container-title'>
          <span className='title'>
            <strong style={{color: ' #FFD700'}}>Shopping</strong>Cart
          </span>
        </div>
        <HiShoppingCart style={{ fontSize: '50px', color: ' #FFD700' }} />
        <div className='container-cartTitle'>
          <span className='cart__title'>Meu carrinho</span>
        </div>
      </header>
    );
  }
}

export default Header;