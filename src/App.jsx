import './css/globals.css';
import { useState } from "react";
import Header from "./components/Header"
import Main from './components/Main';
import ModalProduct from './components/ModalProduct';

import img1 from "./assets/images/image-product-1.jpg";
import img2 from "./assets/images/image-product-2.jpg";
import img3 from "./assets/images/image-product-3.jpg";
import img4 from "./assets/images/image-product-4.jpg";

import thumb1 from "./assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "./assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "./assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "./assets/images/image-product-4-thumbnail.jpg";

const PRECIO_UNITARIO = 125;

function App() {
  const bigImages = [img1, img2, img3, img4];
  const thumbnails = [thumb1, thumb2, thumb3, thumb4];

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

    const aumentarCantidad = () => {
      setCantidadSeleccionada((prev) => prev + 1);
    };

    const disminuirCantidad = () => {
      setCantidadSeleccionada ((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const agregarAlCarrito = () => {
      if(cantidadSeleccionada === 0) return;

      setCantidadCarrito((prev) => prev + cantidadSeleccionada);
      setCantidadSeleccionada(0);
      setCarritoAbierto(true);
    }

    const eliminarCarrito = () => {
      setCantidadCarrito(0);
    }

    const alternarCarrito = () => {
      setCarritoAbierto((prev) => !prev);
    }

    const abrirModal = () => {
      setModalOpen(true);
    }

    const cerrarModal = () => {
      setModalOpen(false);
    }

  return (
    <div className='container__app'>
      <Header 
        carritoAbierto={carritoAbierto}
        alternarCarrito={alternarCarrito}
        cantidadCarrito={cantidadCarrito}
        eliminarCarrito={eliminarCarrito}
        precioUnitario={PRECIO_UNITARIO}
      />
      <Main
        cantidadSeleccionada={cantidadSeleccionada}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        agregarAlCarrito={agregarAlCarrito}
        bigImages={bigImages}
        thumbnails={thumbnails}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        abrirModal={abrirModal}
      />
      {modalOpen && (
        <ModalProduct
          bigImages={bigImages}
          thumbnails={thumbnails}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          cerrarModal={cerrarModal}
        />
      )}
    </div>
  )
}

export default App
