import { useState } from 'react';
import './FormDataControllerExperienceDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function FormDataControllerExperienceDropdownItem({ label, resumeInfoClickHandler, resumeInfo, experienceFormLabels }) {
    //implementirati logiku za togglanje buttona i forme
    const [isToggled, setIsFormToggled] = useState(true);

    function toggleForm() {
        setIsFormToggled((isToggled) => !isToggled);
    }

    return (
        <>
            {isToggled ? 
                <button className='form-data-controller-experience-dropdown-item' onClick={toggleForm}>
                    <h3><strong>{label}</strong></h3>
                    <div className='form-data-controller-experience-dropdown-item-button' onClick={resumeInfoClickHandler}>
                        <i>{resumeInfo ? <FaEyeSlash /> : <FaEye />}</i>
                    </div>
                </button>
            : 
                <form className='experience-form'>
                    <label>
                        {experienceFormLabels.companyName}
                        <input type="text" value={'test'}/>
                    </label>

                    <label>
                        {experienceFormLabels.positionTitle}
                        <input type="text" value={'test'}/>
                    </label>

                    <div className="label-container">
                        <label className='start-date'>
                            {experienceFormLabels.startDate}
                            <input type="text" value={'test'}/>
                        </label>

                        <label className='end-date'>
                            {experienceFormLabels.endDate}
                            <input type="text" value={'test'}/>
                        </label>
                    </div>

                    <label>
                        {experienceFormLabels.location}
                        <input type="text" value={'test'}/>
                    </label>

                    <label className='label-area-container'>
                        {experienceFormLabels.description}
                        <textarea cols="30" rows="10"></textarea>
                    </label>

                    <button onClick={toggleForm}>Delete</button>
                    <button onClick={toggleForm}>Cancel</button>
                    <button onClick={toggleForm}>Save</button>
                </form>
            }
        </>
    );
}

FormDataControllerExperienceDropdownItem.propTypes;
export default FormDataControllerExperienceDropdownItem;