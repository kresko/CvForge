import './FormConfigurator.css';
import FormConfiguratorContentButton from '../FormConfiguratorContentButton/FormConfiguratorContentButton';
import FormConfiguratorCustomizeButton from '../FormConfiguratorCustomizeButton/FormConfiguratorCustomizeButton';
import { FaRegFileLines } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";

function FormConfigurator({ toggleForm, isFormToggled, selectedFont }) {
    return (
        <>
            <div className={`form-configurator ${selectedFont}`}>
                <div className='vertical-align'>
                    <div className='form-configurator-button-container'>
                        <FormConfiguratorContentButton content={ 'Content' } icon={<FaRegFileLines />} toggleForm={toggleForm} id={isFormToggled} />
                        <FormConfiguratorCustomizeButton content={ 'Customize'} icon={<FaPenRuler />} toggleForm={toggleForm} id={isFormToggled} />
                    </div>
                </div>
            </div>
        </>
    );
}

FormConfigurator.propTypes;
export default FormConfigurator;