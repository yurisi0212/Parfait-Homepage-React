import Navigation from '../navigation'
import Container from 'react-bootstrap/Container';
import Particle from './components/particle';
import Footer from './components/footer';

function Join() {
  return (
    <div>
      <Navigation />
      <Particle />
      <Container className='text-center bg-light p-5' style={{ "z-index": 100 }}>
        <div className='title'>
          <h2><b>加入方法</b></h2>
        </div>
        <div className='content'>
          <p className='mt-4'>基本的に本部はこちらから招待されます。</p>
          <p>支部のApex部門、Valorant部門なら誰でも入れますのでお気軽にお声掛けください。</p>
        </div>
      </Container>
      <Footer />
    </div>

  );
}

export default Join;