import { useState } from 'react';
import './FormDataControllerEducationDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function FormDataControllerEducationDropdownItem({ label, resumeInfoClickHandler, resumeInfo, educationFormLabels }) {
    //implementirati logiku za togglanje buttona i forme
    const [isToggled, setIsFormToggled] = useState(true);

    function toggleForm() {
        setIsFormToggled((isToggled) => !isToggled);
    }

    return (
        <>
            {isToggled ? 
                <button className='form-data-controller-education-dropdown-item' onClick={toggleForm}>
                    <h3><strong>{label}</strong></h3>
                    <div className='form-data-controller-education-dropdown-item-button' onClick={resumeInfoClickHandler}>
                        <i>{resumeInfo ? <FaEyeSlash /> : <FaEye />}</i>
                    </div>
                </button>
            : 
                <div className='' onClick={toggleForm}>
                    <h1>Test form</h1>
                </div>
            }
        </>
    );
}

FormDataControllerEducationDropdownItem.propTypes;
export default FormDataControllerEducationDropdownItem;