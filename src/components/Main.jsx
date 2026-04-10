import { useState } from "react";
import '../css/components/Main.css';

import Add from '../assets/images/icon-plus.svg';
import Subtract from '../assets/images/icon-minus.svg';
import Cart from '../assets/images/icon-cart.svg';

import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

const Main = () => {

    const bigImages = [img1, img2, img3, img4];
    const thumbnails = [thumb1, thumb2, thumb3, thumb4];

    const [activeIndex, setActiveIndex] = useState(0);

    return (  
        <main className="container__main">
            <section>
                <div className="container__product">
                    <div className="img__product">
                        <img src={bigImages[activeIndex]} alt="product"/>
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
                            <button className="btn">
                                <img src={Subtract} alt="Subtract" />
                            </button>
                            <span>
                                0
                            </span>
                            <button className="btn">
                                <img src={Add} alt="Add"/>
                            </button>
                        </div>
                        <button className="buy">
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