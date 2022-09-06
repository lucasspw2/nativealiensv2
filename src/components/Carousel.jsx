import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./CarouselData";
import ethereum from '../assets/ethereum.png'
import { ContainerCarousel, CarouselCard, CarouselDetail, CarouselContentButton, CarouselButton, TitleCard } from './components';

export default function Carousel() {

    const renderSlides = () =>
        Data.map(num => (
            <div>
                <CarouselCard>
                    <TitleCard>{num.nome}</TitleCard>
                    <img src={num.img} style={{ width: '98%' }} alt={num.nome} />

                </CarouselCard>
                <CarouselDetail>
                    <img src={ethereum} style={{ width: '12%' }} alt="ethereum" />
                    <p>Price 0.25</p>

                </CarouselDetail>
                <CarouselContentButton>
                    <CarouselButton><a target="_blank" rel="noreferrer" href={`https://opensea.io/assets/ethereum/0xc08fdafc7d005b2b039703970f5c133e56ea31a7/${num.url}`}>View on OpenSea</a></CarouselButton>
                </CarouselContentButton>
            </div>
        ));

    return (
        <ContainerCarousel>
            <Slider
                style={{ width: '96%', paddingTop: '1%'}}
                slidesToShow={5}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                infinite={true}
                speed={2000}
            >
                {renderSlides()}
            </Slider>
        </ContainerCarousel>

    )
}