import { useEffect, useState } from 'react';
import '../css/components/Header.css';
import ShoppingCart from "./ShoppingCart";
import Logo from '../assets/images/logo.svg';
import ImgCart from '../assets/images/icon-cart.svg';
import IconClose from '../assets/images/icon-close.svg';
import IconMenu from '../assets/images/icon-menu.svg';
import UserProfile from '../assets/images/image-avatar.png';

const Header = ({
    carritoAbierto,
    alternarCarrito,
    cantidadCarrito,
    eliminarCarrito,
    precioUnitario
}) => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        const manejarResize = () => {
            if (window.innerWidth > 768) {
                setMenuAbierto(false);
            }
        };

        window.addEventListener('resize', manejarResize);

        return () => {
            window.removeEventListener('resize', manejarResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuAbierto ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuAbierto]);

    const abrirMenu = () => {
        setMenuAbierto(true);
    };

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    return (  
        <header>
            <div className="header__info">
                <div className="header__brand">
                    <button className="header__menu-toggle" onClick={abrirMenu} aria-label="Abrir menu">
                        <img src={IconMenu} alt="icono menu" />
                    </button>
                    <img src={Logo} className='logo' width="138px" alt="logo"/>
                </div>
                <div
                    className={`header__nav-backdrop ${menuAbierto ? 'is-open' : ''}`}
                    onClick={cerrarMenu}
                />
                <nav className={`header__nav ${menuAbierto ? 'is-open' : ''}`}>
                    <button className="header__menu-close" onClick={cerrarMenu} aria-label="Cerrar menu">
                        <img src={IconClose} alt="cerrar menu" />
                    </button>
                    <ul>
                        <li>
                            <a href="#" onClick={cerrarMenu}>Collections</a>
                        </li>
                        <li>
                            <a href="#" onClick={cerrarMenu}>Men</a>
                        </li>
                        <li>
                            <a href="#" onClick={cerrarMenu}>Women</a>
                        </li>
                        <li>
                            <a href="#" onClick={cerrarMenu}>About</a>
                        </li>
                        <li>
                            <a href="#" onClick={cerrarMenu}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__user">
                <img src={ImgCart} alt="cart" onClick={alternarCarrito}/>
                <img src={UserProfile} className="user__profile" alt="user__profile"/>
            </div>
            {carritoAbierto && (
                <ShoppingCart
                    cantidadCarrito={cantidadCarrito}
                    precioUnitario={precioUnitario}
                    eliminarCarrito={eliminarCarrito}
                />
            )
            }
        </header>
    );
}
 
export default Header;