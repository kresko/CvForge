import { useState } from 'react';
import './FormDataControllerExperienceDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import defaultDataset from '../../../Data/DefaultDataset';

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
                        <textarea cols="30" rows="10" value={'test'}></textarea>
                    </label>

                    <div className="experience-form-button-container">
                        <button className={defaultDataset.generalGlossaryClassNames.delete} onClick={toggleForm}>Delete</button>
                        <div className="position-right">
                            <button className={defaultDataset.generalGlossaryClassNames.cancel} onClick={toggleForm}>Cancel</button>
                            <button className={defaultDataset.generalGlossaryClassNames.save} onClick={toggleForm}>Save</button>
                        </div>
                    </div>                    
                </form>
            }
        </>
    );
}

FormDataControllerExperienceDropdownItem.propTypes;
export default FormDataControllerExperienceDropdownItem;