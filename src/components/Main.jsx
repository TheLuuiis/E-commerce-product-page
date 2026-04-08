import { useState } from "react";
import '../css/components/Main.css';
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

                </div>
            </section>
        </main>
    );
}
 
export default Main;