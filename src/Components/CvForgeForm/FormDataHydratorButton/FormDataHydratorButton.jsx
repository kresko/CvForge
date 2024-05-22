import './FormDataHydratorButton.css';

function FormDataHydratorButton({ content, classname='', icon, defaultDataClickHandler }) {
    return (
    <>
        <button className={`form-data-hydrator-button ${classname}`} onClick={defaultDataClickHandler}>{icon}<strong>{ content }</strong></button>
    </>);
}

FormDataHydratorButton.propTypes;
export default FormDataHydratorButton;