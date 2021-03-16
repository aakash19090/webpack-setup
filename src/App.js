import './styles/index.scss';
import BannerImg from './images/banner.jpg';

const App = () => {
    return (
        <>
            <section>
                <div className='banner'>
                    <img src={BannerImg} alt="Banner"/>
                </div>
                <h2>Webpack Setup</h2>
            </section>
        </>
    )
}

export default App
