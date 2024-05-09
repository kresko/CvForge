import './FormDataControllerDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function FormDataControllerDropdownItem({ label, resumeInfoClickHandler, resumeInfo }) {
    return (
        <>
            <button className='form-data-controller-dropdown-item'>
                <h3><strong>{label}</strong></h3>
                <div className='form-data-controller-dropdown-item-button' onClick={resumeInfoClickHandler}>
                    <i>{resumeInfo ? <FaEyeSlash /> : <FaEye />}</i>
                </div>
            </button>
        </>
    );
}

FormDataControllerDropdownItem.propTypes;
export default FormDataControllerDropdownItem;