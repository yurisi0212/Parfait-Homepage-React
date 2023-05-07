import Navigation from '../navigation'
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';


function About() {
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
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Navigation />
        <Container className='text-center bg-light p-5' style={{"z-index": 100}}>
        <div className='title'>
          <h2><b>ぱふぇとは？</b></h2>
        </div>
        <div className='description mt-4'>
          <p>Parfait(パフェ)は完全エンジョイでゲームをする数人で建てられたクランです。</p>
          <p>完全招待制のクランになっており、入るには運営人の承認が必要です。</p>
          <p>ゲームはコアなFPSからゆるいRPGなど幅広く気分で遊んでいます。</p>
        </div>
        <div className='mt-5 p-4'>
          <h4>主に遊んでいるゲーム等</h4>
          <Slider {...settings}>
            <div>
              <img src="/Parfait/images/Valorant.jpg" className='w-100' alt='valorant' />
              <h5>Valorant</h5>
            </div>
            <div>
              <img src="/Parfait/images/minecraft.png" className='w-100' alt='minecraft' />
              <h5>Minecraft</h5>
            </div>
            <div>
              <img src="/Parfait/images/monster_hunter.jpg" className='w-100' alt='monster_hunter'/>
              <h5>MonsterHunterシリーズ</h5>
            </div>
            <div>
              <img src="/Parfait/images/oekaki.jpg" className='w-100' alt='oekaki no mori'/>
              <h5>お絵かきの森</h5>
            </div>
            <div>
              <img src="/Parfait/images/Siege.png" className='w-100' alt='rainbow six siege'/>
              <h5>Rainbow Six:Siege</h5>
            </div>
            <div>
              <img src="/Parfait/images/GTA.png" className='w-100' alt='gtav'/>
              <h5>GTAV</h5>
            </div>
            <div>
              <img src="/Parfait/images/Apex.png" className='w-100' alt='apex legends'/>
              <h5>Apex Legends</h5>
            </div>
          </Slider>
        </div>
        
      </Container>
      <Footer />
    </div>

  );
}

export default About;