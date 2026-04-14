import '../css/components/Main.css';

import Add from '../assets/images/icon-plus.svg';
import Subtract from '../assets/images/icon-minus.svg';
import Cart from '../assets/images/icon-cart.svg';

const Main = ({
    cantidadSeleccionada,
    aumentarCantidad,
    disminuirCantidad,
    agregarAlCarrito,
    bigImages,
    thumbnails,
    activeIndex,
    setActiveIndex,
    abrirModal,
}) => {

    return (  
        <main className="container__main">
            <section>
                <div className="container__product">
                    <div className="img__product">
                        <img src={bigImages[activeIndex]} onClick={abrirModal} alt="product"/>
                    </div>
                    <div className="thumbails">
                        {thumbnails.map((thumb, index) => (
                            <img 
                                key={index}
                                src={thumb}
                                alt="thumbails" 
                                onClick={() => setActiveIndex(index)}
                                className={activeIndex === index ? "active" : ""}
                            />  
                        ))}
                    </div>
                </div>
                <div className="container__info">
                    <div className="info">
                        <span>Sneaker company</span>
                        <h2>Fall limited edition sneakers</h2>
                        <p>
                            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </p>
                    </div>
                    <div className="info__price">
                        <div className="container__price">
                            <span className="price">
                                $125.00
                            </span>
                            <span className="percentage">
                                50
                                %
                            </span>
                        </div>
                        <span className="discount">
                            $250.00
                        </span>
                    </div>
                    <div className="container__buy">
                        <div className="amount">
                            <button className="btn" onClick={disminuirCantidad}>
                                <img src={Subtract} alt="Subtract" />
                            </button>
                            <span>
                                {cantidadSeleccionada}
                            </span>
                            <button className="btn" onClick={aumentarCantidad}>
                                <img src={Add} alt="Add"/>
                            </button>
                        </div>
                        <button className="buy" onClick={agregarAlCarrito}>
                            <img src={Cart} alt="Cart"/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Main;