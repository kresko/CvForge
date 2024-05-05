import './FormDataControllerDropdownItem.css';

function FormDataControllerDropdownItem({ label, icon}) {
    return (
        <>
            <button className='form-data-controller-dropdown-item'>
                <h3><strong>{label}</strong></h3>
                <i>{icon}</i>
            </button>
        </>
    );
}

FormDataControllerDropdownItem.propTypes;
export default FormDataControllerDropdownItem;