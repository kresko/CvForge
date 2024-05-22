import './FormConfiguratorButton.css';

function FormConfiguratorButton({ content, icon, toggleForm, id }) {
    function useToggleForm() {
        toggleForm(id);
    }

    return (
        <>
            <button className={`form-configurator-button ${id}`} onClick={useToggleForm}>
                <div className='icon-container'>{icon}</div>
                <p>{content}</p>
            </button>
        </>
    );
}

FormConfiguratorButton.propTypes;
export default FormConfiguratorButton;