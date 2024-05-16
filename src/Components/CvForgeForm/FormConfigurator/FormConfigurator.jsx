import './FormConfigurator.css';
import FormConfiguratorButton from '../FormConfiguratorButton/FormConfiguratorButton';
import { FaRegFileLines } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";
import defaultDataset from '../../../Data/DefaultDataset';


function FormConfigurator({ toggleForm }) {
    return (
        <>
            <div className='form-configurator'>
                <div className='vertical-align'>
                    <div className='form-configurator-button-container'>
                        <FormConfiguratorButton content={ 'Content' } icon={<FaRegFileLines />} toggleForm={toggleForm} id={defaultDataset.forms.formController}/>
                        <FormConfiguratorButton content={ 'Customize'} icon={<FaPenRuler />} toggleForm={toggleForm} id={defaultDataset.forms.formCustomizer}/>
                    </div>
                </div>
            </div>
        </>
    );
}

FormConfigurator.propTypes;
export default FormConfigurator;