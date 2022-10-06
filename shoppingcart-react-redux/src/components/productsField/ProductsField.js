import React, { Component } from 'react';
import { getRequest} from '../../redux/actions';
import { connect } from 'react-redux';
import './productsField.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { HiShoppingCart } from 'react-icons/hi';
// import PropTypes from 'prop-types';

class ProductsField extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getRequest());
      };

    render() {
      const { isLoading, productList } = this.props;

      if(isLoading) {
        return <h1>Loading...</h1>
      }
      return (
        <section className='container-product'>
          <Header />
          <ul className='items'>
            {productList.map((e) =>(
            <div className='item' key={e.id}>
                <img src={e.thumbnail} alt={e.title} />
                <p className='title-product'>{e.title}</p>
                <p>R$: {e.price}</p>
                <button
                type='button'
                className='add-cart'
                onClick={ console.log('teste')}>
                  <HiShoppingCart style={{ fontSize: '20px', color: ' rgb(205, 55, 0)' }} />
                  </button>
            </div>
          ))}
            </ul>
            <Footer />
        </section>
      );
    }
  }

  const mapStateToProps = ({products: {isLoading, productList}}) => ({
    isLoading,productList
  });
  
  export default connect(mapStateToProps)(ProductsField);
  