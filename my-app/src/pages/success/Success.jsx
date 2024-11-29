import './success.css';
import { useNavigate } from "react-router-dom";
import successImage from '../../img/success.png'; 

function Success() {
    const navigate = useNavigate();

    const goToCatalog = () => {
        navigate('/Catalog');
    };

    return (
        <section>
            <div className='success-box'>
                <img src={successImage} alt="Success" className='success__image' />
                <h2>Success!</h2><br />
                <a1>Your order was sent to processing!</a1>
                <a1>Check your email box for further information.</a1><br />
                <button className='button__to__catalog' onClick={goToCatalog}>Go back to Catalog</button>
            </div>
        </section>
    );
}

export default Success;

