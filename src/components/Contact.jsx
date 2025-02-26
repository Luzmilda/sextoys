import React, { useState } from 'react';
import '../style/Contact.css'; 
import ContactImg from '../../public/img/themes/imagen_contactos.jpg';
import Heading from './Heading';
import Button from './Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu backend
        console.log('Datos enviados:', formData);
        alert('Mensaje enviado con éxito'); // Simulación de envío exitoso
        setFormData({ name: '', email: '', number: '', message: '' }); // Resetear el formulario
    };

    return (
        <section className="contact" id="contact">
            <Heading title="Contacta con" subtitle="nosotros" />
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="box"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="box"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Número"
                        className="box"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        className="box"
                        placeholder="Mensaje"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        required
                    ></textarea>
                    <Button 
                        buttonText="Enviar mensaje" 
                        buttonLink="#" 
                    />
                </form>

                <div className="image">
                    <img src={ContactImg} alt="Contacto Imagen" />
                </div>
            </div>
        </section>
    );
};

export default Contact;