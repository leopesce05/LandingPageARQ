import Carousel from 'react-bootstrap/Carousel';
import { archivos } from './../fotos';

function PCarousel() {
  return (
    <Carousel data-bs-theme="dark">
      {archivos.map((archivo, index) => {
        return (
          <Carousel.Item interval={2000} key={index}>
            {/* Acceder a las imágenes de la carpeta 'public' */}
            <img 
              className="cImg" 
              src={`./carrousel/${archivo}`} 
              alt={`imagen-${index}`} 
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default PCarousel;
