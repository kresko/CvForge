import { useState } from 'react';
import './FormConfiguratorButton.css';

function FormConfiguratorButton({ content, icon, setIsFormToggled }) {
    const [isFormSelected, setIsFormSelected] = useState(true);

    function toggleForm() {
        setIsFormSelected((isFormSelected) => !isFormSelected);
        setIsFormToggled(isFormSelected);
    }

    return (
        <>
            <button className={`form-configurator-button classNameAdditional`} onClick={toggleForm}>
                <div className='icon-container'>{icon}</div>
                <p>{content}</p>
            </button>
        </>
    );
}

FormConfiguratorButton.propTypes;
export default FormConfiguratorButton;