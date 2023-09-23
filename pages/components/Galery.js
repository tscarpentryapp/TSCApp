import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

export default function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
  const [mostrarCantidad, setMostrarCantidad] = useState(4);

  const imagenes = [
    "/assets/images/image0.jpeg",
    "/assets/images/image1.jpeg",
    "/assets/images/image2.jpeg",
    "/assets/images/image3.jpeg",
    "/assets/images/image4.jpeg",
    "/assets/images/image5.jpeg",
    "/assets/images/image6.jpeg",
    "/assets/images/image7.jpeg",
    "/assets/images/image8.jpeg",
    "/assets/images/image9.jpeg",
    "/assets/images/image10.jpeg",
    "/assets/images/image11.jpeg",
    "/assets/images/image12.jpeg",
    "/assets/images/image13.jpeg",
    "/assets/images/image14.jpeg",
    "/assets/images/image15.jpeg",
    "/assets/images/image16.jpeg",
    "/assets/images/image17.jpeg",
    "/assets/images/image18.jpeg",
    "/assets/images/image19.jpeg",
    "/assets/images/image21.jpeg",
    "/assets/images/image22.jpeg",
  ];

  const seleccionarImagen = (index) => {
    setImagenSeleccionada(index);
    setImagenIndex(index);
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  const mostrarMas = () => {
    setMostrarCantidad(mostrarCantidad + 4);
  };

  const mostrarMenos = () => {
    setMostrarCantidad(4);
    setImagenSeleccionada(null);
  };

  const avanzarImagen = () => {
    // Avanza al siguiente índice, asegurándote de no exceder el límite superior
    setImagenIndex((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const retrocederImagen = () => {
    // Retrocede al índice anterior, asegurándote de no ser menor que 0
    setImagenIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  const handleChangeIndex = (index) => {
    setImagenIndex(index);
  };

  return (
    <>
    <div className="GaleriaContainer">
    <SwipeableViews
      enableMouseEvents
      index={imagenIndex}
      onChangeIndex={handleChangeIndex}
      className="slideshow-container"
    >
      {imagenes.map((imagen, index) => (
        <div key={index} className="slide">
          <img src={imagen} alt={`Imagen ${index}`} />
        </div>
      ))}
    </SwipeableViews>
    <a className="prev" onClick={retrocederImagen}>&#10094;</a> {/* Flecha izquierda */}
    <a className="next" onClick={avanzarImagen}>&#10095;</a> {/* Flecha derecha */}
    </div>
        <style jsx>{`
            .GaleriaContainer
            {
                position: relative;
            }
        /* Estilo para el contenedor del carrusel */
            .slideshow-container {
            position: relative;
            max-width: 100%;
            margin: 0 auto;
            overflow: hidden;
            }

            /* Estilo para cada slide */
            .slide {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 360px; /* Ajusta la altura según tus preferencias */
            transition: transform 0.3s ease; /* Agrega una animación suave al deslizar */
            }

            /* Estilo para las imágenes dentro de los slides */
            .slide img {
                width: 100%;
                object-fit: cover; /* Ajusta el modo de ajuste de la imagen según tus preferencias */
            {/* max-width: 100%; */}
            {/* max-height: 100%; */}
            }

            /* Estilo para la imagen activa */
            .active {
            display: flex;
            }

            .BottomContainer {
            position: absolute;
            bottom: 20px;
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 20px;
            gap: 20px;
          }
          .FlechasContainer {
            display: flex;
            width: 100%;
            gap: 20px;
          }
          .flecha {
            display: flex;
            width: 100%;
            height: 60px;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            background: #fff;
            color: var(--tsc-color);
            border-radius: 20px;
            padding-bottom: 6px;
            cursor: pointer;
          }
          .izquierda {
            left: 20px;
          }
          .derecha {
            right: 20px;
          }

            .prev,
            .next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            cursor: pointer;
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.5);
            color: var(--tsc-color);
            padding: 10px;
            border-radius: 10px;
            transition: background-color 0.3s ease;
            }

            .prev:hover,
            .next:hover {
            background-color: rgba(255, 255, 255, 0.8);
            }

.prev {
  left: 10px; /* Ajusta la posición horizontal de la flecha de retroceso */
}

.next {
  right: 10px; /* Ajusta la posición horizontal de la flecha de avance */
}

        `}</style>
    </>
  );
}
