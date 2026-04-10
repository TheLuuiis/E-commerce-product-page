import '../css/components/ShoppingCart.css';
import IconDelete from '../assets/images/icon-delete.svg';
import Thumb from "../assets/images/image-product-1-thumbnail.jpg";

const ShoppingCart = ({
  cantidadCarrito,
  precioUnitario,
  eliminarCarrito,
}) => {
  const totalCarrito = precioUnitario * cantidadCarrito;

  return (
    <div className="container__shopping">
        <span className="title__shopping">Cart</span>

        {cantidadCarrito === 0 ? (
            <div className="container__shop">
                <p className="empty__cart">Your cart is empty.</p>
            </div>
        ) : (
        <div className="container__shop">
          <div className="shopping">
            <img
              src={Thumb}
              className="thum__shopping"
              alt="shoppingCart"
            />

            <div className="price__shopping">
              <p>Fall Limited Edition Sneakers</p>
              <span>
                {`$${precioUnitario.toFixed(2)} x${cantidadCarrito}`}
                <b>{`$${totalCarrito.toFixed(2)}`}</b>
              </span>
            </div>

            <img
              src={IconDelete}
              className="icon__delete"
              alt="iconDelete"
              onClick={eliminarCarrito}
            />
          </div>

          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;