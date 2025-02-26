
import '../style/IconsInfo.css';
import EnviosImg from '../../public/icons/envios.jpg';
import DevolucionImg from '../../public/icons/devoluciones.jpg';
import OfertasImg from '../../public/icons/ofertas.jpg';
import PagoImg from '../../public/icons/pago.jpg';

const IconsContainer = () => {
    return (
        <section className="icons-container">
            <div className="icons">
                <img src={EnviosImg} alt="" />
                <div className="info">
                    <h3>Envío gratis</h3>
                    <span>Pedidos arriba de 30€</span>
                </div>
            </div>

            <div className="icons">
                <img src={DevolucionImg} alt="" />
                <div className="info">
                    <h3>5 días para devoluciones</h3>
                    <span>Devolución garantizada</span>
                </div>
            </div>

            <div className="icons">
                <img src={OfertasImg} alt="" />
                <div className="info">
                    <h3>Ofertas y regalos</h3>
                    <span>Todo lo mejor para ofrecerte</span>
                </div>
            </div>

            <div className="icons">
                <img src={PagoImg} alt="" />
                <div className="info">
                    <h3>Pago seguro</h3>
                    <span>Seguridad</span>
                </div>
            </div>
        </section>
    );
};

export default IconsContainer;