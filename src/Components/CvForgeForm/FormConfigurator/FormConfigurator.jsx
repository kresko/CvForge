import './FormConfigurator.css';
import FormConfiguratorButton from '../FormConfiguratorButton/FormConfiguratorButton';
import { FaRegFileLines } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";


function FormConfigurator( setIsFormToggled ) {
    return (
        <>
            <div className='form-configurator'>
                <div className='vertical-align'>
                    <div className='form-configurator-button-container'>
                        <FormConfiguratorButton content={ 'Content' } icon={<FaRegFileLines />} toggleForm={setIsFormToggled}/>
                        <FormConfiguratorButton content={ 'Customize'} icon={<FaPenRuler />} toggleForm={setIsFormToggled}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormConfigurator;