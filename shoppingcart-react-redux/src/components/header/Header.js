import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='container-title'>
          <span className='title'>
            <strong>Shopping</strong>Cart
          </span>
        </div>
        <HiShoppingCart style={{ fontSize: '50px', color: ' rgb(205, 55, 0)' }} />
        <div className='container-cartTitle'>
          <span className='cart__title'>Meu carrinho</span>
        </div>
      </header>
    );
  }
}

export default Header;