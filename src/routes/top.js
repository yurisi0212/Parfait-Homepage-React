import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import Navigation from '../navigation'

function Top() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div>
            <Navigation />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <div id='index' className='text-center'>
                <Container className='bg-light p-3'>
                    <div className='mt-2'>
                        <h1>ようこそ</h1>
                        <h2>Welcome To Parfait Homepage!</h2>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <img src="/images/Valorant.png" className='w-100' />
                            </div>
                            <div>
                                <img src="/images/minecraft.png" className='w-100' />
                            </div>
                            <div>
                                <img src="/images/oekaki.png" className='w-100' />
                            </div>
                            <div>
                                <img src="/images/Siege.png" className='w-100' />
                            </div>
                            <div>
                                <img src="/images/GTA.png" className='w-100' />
                            </div>
                            <div>
                                <img src="/images/Apex.png" className='w-100' />
                            </div>
                        </Slider>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Top;