import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addCartItens } from '../../redux/actions';


class Cart extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const storageCartItens = JSON.parse(localStorage.getItem('cartItens')) || [];
        dispatch(addCartItens(storageCartItens));
    };
    render() {
        const { cartProductsAdd } = this.props;
        return (
            <section className='container-cart'>
                <ol className='cart-itens'>
                    {cartProductsAdd.map(({ id, thumbnail, title, price }) => (
                            <div className='item-cart' key={id}>
                                <img src={thumbnail} alt={title} style={{ width: '50px', height: '60px' }} />
                                <p className='title-product-cart'>{title}</p>
                                <p>R$: {price}</p>
                                <button type='button' className='clear-btn' onClick={ () => {console.log('vou remover')}}>
                                <FaTrashAlt style={{ fontSize: '18px', color: ' #4682B4' }} />
                                </button>
                            </div>
                        ))}
                </ol>
                <button type='button' className='clear-cart'><strong>Limpar carrinho</strong></button>
            </section>
        );
    }
}
const mapStateToProps = ({ cart: { cartProductsAdd } }) => ({
    cartProductsAdd,
});
export default connect(mapStateToProps)(Cart);