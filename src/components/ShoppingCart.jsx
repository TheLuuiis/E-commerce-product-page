import '../css/components/ShoppingCart.css';
import IconDelete from '../assets/images/icon-delete.svg';
import Thumb from "../assets/images/image-product-1-thumbnail.jpg";

const ShoppingCart = () => {
    return (  
        <div className="container__shopping">
            <span className='title__shopping'>
                Cart
            </span>
            <div className="container__shop">
                <div className="shopping">
                    <img src={Thumb} className='thum__shopping' alt="shoppingCart"/>
                    <div className="price__shopping">
                        <p>
                            Fall Limited Edition Sneakers
                        </p>
                        <span>
                            
                            <b>
                                
                            </b>
                        </span>
                    </div>
                    <img src={IconDelete} className='icon__delete' alt="iconDelete"/>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    );
}
 
export default ShoppingCart;