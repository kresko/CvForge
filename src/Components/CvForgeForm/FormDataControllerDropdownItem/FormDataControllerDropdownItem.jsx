import './FormDataControllerDropdownItem.css';

function FormDataControllerDropdownItem({ label, icon}) {
    return (
        <>
            <button className='form-data-controller-dropdown-item'>
                <p>{label}</p>
                <i>{icon}</i>
            </button>
        </>
    );
}

FormDataControllerDropdownItem.propTypes;
export default FormDataControllerDropdownItem;