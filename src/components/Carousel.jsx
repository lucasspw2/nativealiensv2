import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./CarouselData";
import ethereum from '../assets/ethereum.png'
import { ContainerCarousel, CarouselCard, CarouselDetail, CarouselContentButton, CarouselButton, TitleCard } from './components';
import background2 from '../assets/borja_01.webp';
import Opensea from '../assets/opensea1.png'

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
                    <CarouselButton><a target="_blank" rel="noreferrer" href={`https://opensea.io/assets/ethereum/0xc08fdafc7d005b2b039703970f5c133e56ea31a7/${num.url}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>View on OpenSea <img src={Opensea} style={{width: '12%', marginLeft: '3%'}}/></a></CarouselButton>
                </CarouselContentButton>
            </div>
        ));

    return (
        <ContainerCarousel style={{background: `url(${background2})`}}>
            <Slider
                style={{ width: '96%'}}
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