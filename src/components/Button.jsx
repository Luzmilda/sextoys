import React from 'react';
import '../style/Button.css'; // Asegúrate de que esta ruta sea correcta

const Button = ({ buttonText, buttonLink }) => {
    return (
        <div className="button-container">
            {buttonText && buttonLink ?
            <a href={buttonLink} className="btn">{buttonText}</a>
            : null}
        </div>
    );
}

export default Button;