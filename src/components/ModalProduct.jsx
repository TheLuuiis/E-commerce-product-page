import '../css/components/ModalProduct.css';
import ImgCloset from '../assets/images/icon-close.svg';
import IconNext from '../assets/images/icon-next.svg';
import IconPrevious from '../assets/images/icon-previous.svg';

const ModalProduct = ({
    bigImages,
    thumbnails,
    activeIndex,
    setActiveIndex,
    cerrarModal,
}) => {
    const irImagenAnterior = () => {
        setActiveIndex((prev) => (prev === 0 ? bigImages.length - 1 : prev - 1));
    };

    const irImagenSiguiente = () => {
        setActiveIndex((prev) => (prev === bigImages.length - 1 ? 0 : prev + 1));
    };

    return (  
        <div className="container__modal" onClick={cerrarModal}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                <button className="modal__close" onClick={cerrarModal} aria-label="Cerrar modal">
                    <img src={ImgCloset} alt="icon-closet"/>
                </button>
                <div className="modal__product">
                    <div className="modal__image">
                        <button className="modal__nav modal__nav--previous" onClick={irImagenAnterior} aria-label="Imagen anterior">
                            <img src={IconPrevious} alt="Anterior" />
                        </button>
                        <img src={bigImages[activeIndex]} alt="product"/>
                        <button className="modal__nav modal__nav--next" onClick={irImagenSiguiente} aria-label="Imagen siguiente">
                            <img src={IconNext} alt="Siguiente" />
                        </button>
                    </div>
                    <div className="modal__thumbnails">
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
            </div>
        </div>
    );
}
 
export default ModalProduct;