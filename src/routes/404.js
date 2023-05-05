import { Container } from 'react-bootstrap';
import Navigation from '../navigation'

function NotFound() {
    return (
      <div>
        <Navigation />
        <Container>
            <h2 className='text-center'>ページが見つかりません</h2>
        </Container>
        
      </div>
    
    );
  }
  
  export default NotFound;