import React, { Component } from 'react';
import { addCartItens, getRequest} from '../../redux/actions';
import { connect } from 'react-redux';
import './productsField.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { HiShoppingCart } from 'react-icons/hi';
import Loading from '../loading/Loading';
import Cart from '../cart/Cart';
// import PropTypes from 'prop-types';

class ProductsField extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getRequest());
      };
 addCart=(product) => {
  const { dispatch } = this.props;
  console.log(product);
  const storageArea = JSON.parse(localStorage.getItem('cartItens')) || [];
  const cartList = [...storageArea, product];
  localStorage.setItem('cartItens', JSON.stringify(cartList));
  dispatch(addCartItens(cartList));
 }
    render() {
      const { isLoading, productList } = this.props;

      if(isLoading) {
        return <Loading />
      }
      return (
        <div>
           <Header />
          <section className='shopping-cell'>
        <section className='container-product'>
          <ul className='items'>
            {productList.map(({id, thumbnail, title, price}) =>(
            <div className='item' key={id}>
                <img src={thumbnail} alt={title} style={{width: '100px', height: '110px'}}/>
                <p className='title-product'>{title}</p>
                <p>R$: {price}</p>
                <button
                type='button'
                className='add-cart'
                onClick={ () => this.addCart({id, thumbnail, title, price})}>
                  <HiShoppingCart style={{ fontSize: '25px', color: '  #FFD700' }} />
                  <strong>Adicionar ao carrinho</strong>
                  </button>
            </div>
          ))}
            </ul> 
        </section> 
        <Cart />
        </section>
        <Footer />
        </div> 
        
      );
    }
  }

  const mapStateToProps = ({products: {isLoading, productList}}) => ({
    isLoading,productList
  });
  
  export default connect(mapStateToProps)(ProductsField);
  