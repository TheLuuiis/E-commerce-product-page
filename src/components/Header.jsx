import '../css/components/Header.css';
import Logo from '../assets/images/logo.svg';
import ImgCart from '../assets/images/icon-cart.svg';
import UserProfile from '../assets/images/image-avatar.png';

const Header = () => {
    return (  
        <header>
            <div className="header__info">
                <img src={Logo} className='logo' width="138px" alt="logo"/>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
            </nav>
            </div>
            <div className="header__user">
                <img src={ImgCart} alt="cart"/>
                <img src={UserProfile} className='user__profile' alt="user__profile"/>
            </div>
        </header>
    );
}
 
export default Header;