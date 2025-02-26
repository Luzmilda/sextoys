import '../style/Heading.css'; // Asegúrate de importar el archivo CSS

const Heading = ({ title, subtitle }) => {
    return (
        <>
            {title && subtitle ?
                <h1 className="heading">
                    <span>{title}</span> {subtitle}
                </h1>
            :null}
        </>
    );
};
export default Heading;