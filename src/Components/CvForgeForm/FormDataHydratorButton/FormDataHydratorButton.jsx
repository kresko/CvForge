import './FormDataHydratorButton.css';

function FormDataHydratorButton({ content, classname='', icon }) {
    return (
    <>
        <button className={`form-data-hydrator-button ${classname}`}>{icon}<strong>{ content }</strong></button>
    </>);
}

FormDataHydratorButton.propTypes;
export default FormDataHydratorButton;