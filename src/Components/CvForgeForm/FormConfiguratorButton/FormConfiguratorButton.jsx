import './FormConfiguratorButton.css';

function FormConfiguratorButton({ content, icon, toggleForm, id }) {
    function test() {
        toggleForm(id);
    }

    return (
        <>
            <button className={`form-configurator-button ${id}`} onClick={test}>
                <div className='icon-container'>{icon}</div>
                <p>{content}</p>
            </button>
        </>
    );
}

FormConfiguratorButton.propTypes;
export default FormConfiguratorButton;