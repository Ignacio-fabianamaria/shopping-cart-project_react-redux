import React, { Component } from 'react';
import { getRequest} from '../../redux/actions';
import { connect } from 'react-redux';
import './productsField.css'
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
          <ul className='items'>
            {productList.map((e) =>(
            <div className='item' key={e.id}>
                <img src={e.thumbnail} alt={e.title} />
                <p className='title-product'>{e.title}</p>
                <p>R$: {e.price}</p>
            </div>
          ))}
            </ul>
        </section>
      );
    }
  }

  const mapStateToProps = ({products: {isLoading, productList}}) => ({
    isLoading,productList
  });
  
  export default connect(mapStateToProps)(ProductsField);
  