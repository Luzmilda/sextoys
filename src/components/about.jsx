// src/About.js
import '../../src/style/About.css';
import AboutImg from '../../public/img/template/sobre_nosotros.jpg';
import Heading from './Heading';
import Button from './Button';

const About = () => {
    return (
        <section className="about" id="about">
            <Heading title="Sobre" subtitle="nosotros" />
            {/*<h1 className="heading"><span>Sobre</span> Nosotros</h1>*/}

            <div className="row">
                <div className="video-container">
                <img src={AboutImg} alt="Sobre Nosotros" />
                    {/* Aquí puedes reemplazar la etiqueta <img> con un <video> si es necesario */}
                    {/* <video controls>
                        <source src="ruta/al/video.mp4" type="video/mp4" />
                        Tu navegador no soporta la etiqueta de video.
                    </video> */}
                    <h3>Todo lo que Necesitas para Encender la Pasión</h3>
                </div>

                <div className="content">
                    <h3>¿Por qué Elegirnos?</h3>
                    <p>En Euphoria SexToy, nos dedicamos a ofrecerte una experiencia única y satisfactoria en el mundo del placer. Nuestra amplia selección de productos de alta calidad, desde juguetes íntimos hasta lencería sensual, está diseñada para satisfacer todos tus deseos y necesidades. Nos enorgullece brindar un ambiente discreto y acogedor, donde puedes explorar y descubrir sin tabúes. Además, nuestro equipo de expertos está siempre disponible para asesorarte y ayudarte a encontrar lo que mejor se adapte a ti. Elige Explore & Enjoy y despierta tu pasión con confianza.</p>
                    <p>Te invitamos a visitarnos y descubrir todo lo que tenemos para ofrecerte. No olvides que tu satisfacción es nuestra prioridad, y estamos aquí para ayudarte a encontrar lo que realmente deseas. ¡Atrévete a vivir nuevas experiencias y haz de cada momento algo especial con nosotros!</p>
                    <Button 
                        buttonText="Leer más" 
                        buttonLink="#" 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;