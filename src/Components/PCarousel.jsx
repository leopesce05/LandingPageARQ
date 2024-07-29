import Carousel from 'react-bootstrap/Carousel';
import i2 from '../assets/images/i2.jpg';
import i3 from '../assets/images/i3.jpg';

function PCarousel() {
  return (
    <Carousel data-bs-theme="dark">

      
      <Carousel.Item interval={2000}>
      <img className='cImg' src={i2} />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img className='cImg' src={i3} />

      </Carousel.Item>
    </Carousel>
  );
}

export default PCarousel;