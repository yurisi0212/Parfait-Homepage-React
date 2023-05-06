import Navigation from '../navigation'
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';

function Contact() {
    return (
      <div>
      <Navigation />
      <Container className='text-center bg-light p-5' style={{ "z-index": 100 }}>
        <div className='title'>
          <h2><b>お問い合わせ</b></h2>
        </div>
        <div className='content'>
          <p className='mt-4'>質問や、支部への加入申請等は運営のツイッターから承っております。</p>
          <p>メンバーページから話しやすそうな人にDMを送ってみてください。(みんな優しいです。)</p>
        </div>
      </Container>
      <Footer />
    </div>
    
    );
  }
  
  export default Contact;