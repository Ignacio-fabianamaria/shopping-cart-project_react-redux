import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    handleClick = () => {
        const { history } = this.props;
        history.push('/productsField')
    }
    render() {
        return(
            <section className='login-page'>
               <form className='form-login'>
                <h1 className='title-login'>
                    <strong style={{color: ' #FFD700'}}>
                    Shopping
                    </strong>
                    Cell
                    </h1>
                <input type='text' placeholder='Digite seu email' /><br />
                <input type='password' /><br />
                <button type='button' className='enter' onClick={this.handleClick}>Entrar</button>
               </form>
            </section>
        )
    }
}

export default Login;








