import {Carousel} from 'react-bootstrap';
const CarouselSlider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.stationerybazaar.com/images/pzen_slideshow/colorful-stationery-multicolored-background_1623598949.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.stationerybazaar.com/images/pzen_slideshow/back-school-concept_1623598730.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.stationerybazaar.com/images/pzen_slideshow/stationery-art-items-copy-space-canvas_1623599098.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
 
}
export default CarouselSlider;
