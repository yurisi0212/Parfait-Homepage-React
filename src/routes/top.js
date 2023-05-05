import Container from 'react-bootstrap/Container';
import Navigation from '../navigation'
import { Helmet } from "react-helmet";

function Top() {
    return (
        <div>
            <Navigation />
            <div id='index' className='text-center'>
                <Helmet>
                    <link rel="stylesheet" href="top.css" />
                </Helmet>
                <div className='top-container'>
                    <div>
                        <h3>Welcome To Parfait Homepage!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;