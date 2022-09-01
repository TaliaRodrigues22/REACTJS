import './IndexPage.css';

import {Link} from 'react-router-dom';

export default function IndexPage()
{
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <span className='logo'>MioMio</span>
                    <Link to="/cart" className="cart-button">Carrito</Link>
                </div>
            </nav>

            <main>

                <div className="search-box-wrapper">
                    <input type="text" placeholder='Tu busqueda...' className="search-box" />
                </div>

                <div className="list-wrapper">
                    <section className="list">
                        <Link to='/details/1' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt='Foto' />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </Link>

                        <Link to='/details/1' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt='Foto' />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </Link>

                        <Link to='/details/1' className="list-item">
                            <img src="Fotos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg" alt='Foto' />
                            <div className="list-item-box">
                                <span>Hola</span>
                            </div>
                        </Link>
                    </section>

                </div>

            </main>
        </div>
    );
}