import './FormDataControllerDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function FormDataControllerDropdownItem({ label }) {
    return (
        <>
            <button className='form-data-controller-dropdown-item'>
                <h3><strong>{label}</strong></h3>
                <i>test</i>
            </button>
        </>
    );
}

FormDataControllerDropdownItem.propTypes;
export default FormDataControllerDropdownItem;