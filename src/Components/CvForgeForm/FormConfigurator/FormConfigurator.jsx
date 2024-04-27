import './FormConfigurator.css';
import FormConfiguratorButton from '../FormConfiguratorButton/FormConfiguratorButton';

function FormConfigurator() {
    return (
        <>
            <div className='form-configurator'>
                <div className='form-configurator-button-container'>
                    <FormConfiguratorButton content={ 'Content' }/>
                    <FormConfiguratorButton content={ 'Customize' }/>
                </div>
            </div>
        </>
    );
}

export default FormConfigurator;