import "./CartPage.css";

import {Link} from 'react-router-dom';

export default function CartPage()
{
    return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <span className="logo">Mios Mio</span>
              <span className="cart-text">
                Tu Compra
              </span>
            </div>
          </nav>
    
          <main>
            <div className="cart-item-list">

                <div className="cart-item">
                    <div className="cart-item-title">Lorem Ipsum</div>
                    <div className="cart-item-details-list">
                        <span className="cart-detail">
                            <span className="title">Talle</span>
                            <span className="content">S</span>
                        </span>
                        <span className="cart-detail">
                            <span className="title">Color</span>
                            <span className="content">Negro</span>
                        </span>
                    </div>
                    <div className="cart-item-footer">
                        <span className="cart-item-price">1500</span>
                        <div className="cart-item-count">
                            <span className="subs">-</span>
                            <span className="qty">1</span>
                            <span className="add">+</span>
                        </div>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="cart-item-title">Lorem Ipsum</div>
                    <div className="cart-item-details-list">
                        <span className="cart-detail">
                            <span className="title">Talle</span>
                            <span className="content">S</span>
                        </span>
                        <span className="cart-detail">
                            <span className="title">Color</span>
                            <span className="content">Negro</span>
                        </span>
                    </div>
                    <div className="cart-item-footer">
                        <span className="cart-item-price">1500</span>
                        <div className="cart-item-count">
                            <span className="subs">-</span>
                            <span className="qty">2</span>
                            <span className="add">+</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="buttons">
                <Link to='/' className="btn-keep">seguir comprando</Link>
                <span className="btn-checkout">
                    <span>pagar</span> 
                    <span className="total">4500</span>
                </span>
            </div>
          </main>
        </div>
      );
}