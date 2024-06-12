import defaultDataset from '../../../Data/DefaultDataset';
import './FormConfiguratorCustomizeButton.css';

function FormConfiguratorCustomizeButton({ content, icon, toggleForm, id }) {
    function useToggleForm() {
        toggleForm(defaultDataset.forms.formCustomizer);
    }

    return (
        <>
            <button className={`form-configurator-customize-button ${id === defaultDataset.forms.formCustomizer ? 'selected' : ''}`} onClick={useToggleForm}>
                <div className='icon-container'>{icon}</div>
                <p>{content}</p>
            </button>
        </>
    );
}

FormConfiguratorCustomizeButton.propTypes;
export default FormConfiguratorCustomizeButton;