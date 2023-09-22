import React, { useState } from "react";

// export default function Galeria({ imagenes }) {
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

  const avanzarImagen = () => {
    const siguienteIndex = (imagenIndex + 1) % imagenes.length;
    setImagenIndex(siguienteIndex);
  };

  const retrocederImagen = () => {
    const anteriorIndex = (imagenIndex - 1 + imagenes.length) % imagenes.length;
    setImagenIndex(anteriorIndex);
  };

  const mostrarMas = () => {
    setMostrarCantidad(mostrarCantidad + 4);
  };

  const mostrarMenos = () => {
    setMostrarCantidad(4);
    setImagenSeleccionada(null);
  };

//   const descargarImagen = async () => {
//     try {
//       const imagenURL = imagenes[imagenIndex];
//       const response = await fetch(imagenURL);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `manantial-transformados${imagenIndex + 1}.jpg`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error al descargar la imagen", error);
//     }
//   };

  return (
    <div className="GaleriaContainer">
      <div className="galeria">
        {imagenes.slice(0, mostrarCantidad).map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt={`Imagen ${index}`}
            onClick={() => seleccionarImagen(index)}
          />
        ))}
      </div>
      {imagenSeleccionada !== null && (
        <div className="imagen-grande">
          <span className="cerrar" onClick={cerrarImagen}>
            &times;
          </span>
          <img
            src={imagenes[imagenIndex]}
            alt={`Imagen seleccionada ${imagenIndex}`}
          />
          <div className="BottomContainer">
            <div className="FlechasContainer">
              <span className="flecha izquierda" onClick={retrocederImagen}>
                &#8249;
              </span>
              <span className="flecha derecha" onClick={avanzarImagen}>
                &#8250;
              </span>
            </div>

          </div>
        </div>
      )}
      <div className="ButtonsContainer">
      {mostrarCantidad < imagenes.length ? (
        <button className="boton-mostrar" onClick={mostrarMas}>
          See more
        </button>
      ) : (
        <button className="boton-mostrar" onClick={mostrarMenos}>
          See less
        </button>
      )}
      </div>
      <style jsx>
        {`
          .GaleriaContainer {
            display: flex;
            flex-direction: column;
            text-align: center;
            background: var(--dark-transparent);
            {/* padding: 20px 20px 0; */}
            {/* gap: 20px; */}
          }
          p {
            font-size: 10px;
          }
          .galeria {
            display: grid;
            grid-template-columns: repeat(4, minmax(150px, 1fr));
            {/* gap: 20px; */}
          }
          .galeria img {
            width: 100%;
            height: 100%;
            cursor: pointer;
            object-fit: cover;
            {/* border-radius: 20px; */}
            aspect-ratio: 1/1;
          }
          .imagen-grande {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-color: var(--dark-transparent);
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(20px);
          }
          .imagen-grande img {
            width: fit-content;
            max-width: 90%;
            height: fit-content;
            max-height: 60%;
            object-fit: contain;
            {/* border-radius: 20px; */}
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
             {
              /* position: relative;
            top: 50%; */
            }
             {
              /* transform: translateY(-50%); */
            }
          }
          .izquierda {
            left: 20px;
          }
          .derecha {
            right: 20px;
          }
          .cerrar {
            position: absolute;
            z-index: 99999999999999;
            top: 84px;
            right: 20px;
            font-size: 50px;
            color: #fff;
            cursor: pointer;
          }
          .ButtonsContainer
          {
            width: 100%;
            height: auto;
            padding: 20px 20px 0;
          }
          .boton-mostrar {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 20px;
            padding: 10px;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 700;
            background-color: #fff;
            color: var(--tsc-color);
          }
          .descargar-boton {
            bottom: 120px;
            width: 100%;
            height: 60px;
            border: none;
            border-radius: 20px;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 700;
            background-color: var(--mid-grey);
            color: var(--secondary-color);
             {
              /* position: absolute; */
            }
             {
              /* margin-top: 10px; */
            }
          }
          @media only screen and (max-width: 860px) {
            .galeria {
              display: grid;
              grid-template-columns: repeat(2, minmax(150px, 1fr));
              {/* gap: 20px; */}
            }
          }
        `}
      </style>
    </div>
  );
}
