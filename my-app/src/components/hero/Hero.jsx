import './hero.css';
import anfieldImg from './../../img/anfield.png'; 

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <div className='hero__text'>
                        <h1 className='hero__title'>
                            Welcome to Anfield!
                        </h1>
                        <p className='hero__paragraph'>
                            Anfield is a legendary stadium in Liverpool, famous for its incredible atmosphere, especially during the performance of the national anthem "You'll Never Walk Alone". The stadium has a distinctive look, including the famous "Kop" tribune.
                        </p>
                    </div>
                    <div className='hero__image'>
                        <img src={anfieldImg} alt="Anfield Stadium" className='hero__img' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
