import defaultDataset from '../../../Data/DefaultDataset';
import './FormConfiguratorContentButton.css';

function FormConfiguratorContentButton({ content, icon, toggleForm, id }) {
    function useToggleForm() {
        toggleForm(defaultDataset.forms.formController);
    }

    return (
        <>
            <button className={`form-configurator-content-button ${id === defaultDataset.forms.formController ? 'selected' : ''}`} onClick={useToggleForm}>
                <div className='icon-container'>{icon}</div>
                <p>{content}</p>
            </button>
        </>
    );
}

FormConfiguratorContentButton.propTypes;
export default FormConfiguratorContentButton;