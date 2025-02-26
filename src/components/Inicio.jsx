import '../style/Inicio.css'
import Button from './Button';

function Inicio(){
    return (
        <section className="home" id="home">

            <div className="content">
                <span>Bienvenidos a Euphoria SexToys</span>
                <h3>JUGUETES Y LENCERIA</h3>
                <p>Explora un mundo de placer en nuestra tienda de juguetes y lencería para adultos. Ofrecemos una cuidada selección de vibradores, consoladores y lencería exquisita, todos elegidos por su calidad y seguridad. Ya sea que busques nuevas sensaciones o desees sorprender a tu pareja, aquí encontrarás todo lo necesario para encender la pasión y disfrutar de momentos inolvidables.</p>
                <Button 
                    buttonText="Comprar Ahora" 
                    buttonLink="#" 
                />
            </div>
        </section>
    )
}

export default Inicio;