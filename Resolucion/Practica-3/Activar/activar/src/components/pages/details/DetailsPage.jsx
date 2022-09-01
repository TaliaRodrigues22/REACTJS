import "./DetailsPage.css";

import {Link} from 'react-router-dom';

export default function DetailsPage() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <span className="logo">MioMio</span>
          <Link to="/cart" className="cart-button">Carrito</Link>
        </div>
      </nav>

        <div className="back-button">
            <Link to='/'>Volver</Link>
        </div>

      <main>
            <div className="details-wrapper">

                <div className="image-wrapper">
                    <img src="/Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt="Foto detalle" />
                </div>

                <h2 className="title">Lorem Ipsum</h2>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi ullam atque expedita, totam, dolorum obcaecati accusamus dolorem ut unde architecto rerum earum facilis, magni sapiente inventore error aliquid molestias!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae dicta ab aut odio aliquam suscipit labore cupiditate eum quidem eos quisquam autem nesciunt distinctio, rem fugiat temporibus mollitia quos.</p>
                </div>

                <div className="product-info">
                    <div className="colors">
                        <span>Colores</span>
                        <ul className="colors-list">
                            <li>Rojo</li>
                            <li>Negro</li>
                            <li>Blanco</li>
                        </ul>
                    </div>

                    <div className="sizes">
                        <span>Talles</span>
                        <ul className="sizes-list">
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                        </ul>
                    </div>

                    <div className="price">
                        <span className="price-text">Precio</span>
                        <span className="price-value">1500</span>
                    </div>
                </div>
            </div>

            <div className="add-to-cart-wrapper">
                <Link to='/cart' className="add-to-cart-button">lo quiero</Link>
            </div>
      </main>
    </div>
  );
}
