import './css/globals.css';
import { useState } from "react";
import Header from "./components/Header"
import Main from './components/Main';

const PRECIO_UNITARIO = 125;

function App() {

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
    const [cantidadCarrito, setCantidadCarrito] = useState(0);
    const [carritoAbierto, setCarritoAbierto] = useState(false);

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
      />
    </div>
  )
}

export default App
