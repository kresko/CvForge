import './FormDataController.css';
import FormDataControllerInput from "../FormDataControllerInput/FormDataControllerInput";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { useState } from 'react';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";
import { FaChevronUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FormDataController({ onChange, fullName, email, phone, address, educationInfo, experienceInfo, bachelorDegreeEducationInfo, bachelorDegreeEducationInfoClickHandler, 
    mastersDegreeEducationInfo, mastersDegreeEducationInfoClickHandler, theoreticalPhysicistJobExperienceInfo, theoreticalPhysicistJobExperienceInfoClickHandler, 
    experimentalPhysicistJobExperienceInfo, experimentalPhysicistJobExperienceInfoClickHandler, isDefaultDataUsed }) {
    const [isEducationDropdownOpen, setIsEducationDropdownOpen] = useState(true);
    const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(true);

    function handleIsEducationDropDownFormHidden() {
        setIsEducationDropdownOpen((isEducationDropdownOpen) => !isEducationDropdownOpen);
    }

    function handleIsExperienceDropDownFormHidden() {
        setIsExperienceDropdownOpen((isExperienceDropdownOpen) => !isExperienceDropdownOpen);
    }

    return (
        <>
            <div className='form-data-controller'>
                <div className="personal-details">
                <h2>Personal details</h2>

                    <FormDataControllerInput label={'Full name'} placeholder={fullName} onChange={onChange} dataKey="fullName"/>
                    <FormDataControllerInput label={'Email'} placeholder={email} onChange={onChange} dataKey="email" recommendedLabel={'recommended'}/>
                    <FormDataControllerInput label={'Phone number'} placeholder={phone} onChange={onChange} dataKey="phoneNumber" recommendedLabel={'recommended'}/>
                    <FormDataControllerInput label={'Address'} placeholder={address} onChange={onChange} dataKey="address" recommendedLabel={'recommended'}/>
                </div>

                <div className='education-section'>
                    <button className={`form-data-controller-dropdown-section-button`} onClick={handleIsEducationDropDownFormHidden}>
                        <span className='custom-icon'><FaGraduationCap/><h2>Education</h2></span>
                        <span className='chevron'><FaChevronUp/></span>
                    </button>
                    <div className={`form-data-controller-dropdown-section ${(isEducationDropdownOpen || !isDefaultDataUsed) ? 'is-hidden' : ''}`}>
                        <div className="form-data-controller-dropdown-section-item-collection">
                            <FormDataControllerDropdownItem label={educationInfo.bachelorDegree.institutionName} resumeInfoClickHandler={bachelorDegreeEducationInfoClickHandler} resumeInfo={bachelorDegreeEducationInfo} />
                            <FormDataControllerDropdownItem label={educationInfo.mastersDegree.institutionName} resumeInfoClickHandler={mastersDegreeEducationInfoClickHandler} resumeInfo={mastersDegreeEducationInfo} />
                        </div>
                        <div className='form-data-controller-dropdown-section-add-button-container'>
                            <button className='form-data-controller-dropdown-section-add-button'><FaPlus /><strong>Education</strong></button>
                        </div>
                    </div>
                </div>

                <div className='experience-section'>
                    <button className={`form-data-controller-dropdown-section-button`} onClick={handleIsExperienceDropDownFormHidden}>
                        <span className='custom-icon'><FaBriefcase/><h2>Experience</h2></span>
                        <span className='chevron'><FaChevronUp/></span>
                    </button>
                    <div className={`form-data-controller-dropdown-section ${(isExperienceDropdownOpen || !isDefaultDataUsed) ? 'is-hidden' : ''}`}>
                        <div className="form-data-controller-dropdown-section-item-collection">
                            <FormDataControllerDropdownItem label={experienceInfo.theoreticalPhysicistJob.institutionName} resumeInfoClickHandler={theoreticalPhysicistJobExperienceInfoClickHandler} resumeInfo={theoreticalPhysicistJobExperienceInfo} />
                            <FormDataControllerDropdownItem label={experienceInfo.experimentalPhysicistJob.institutionName} resumeInfoClickHandler={experimentalPhysicistJobExperienceInfoClickHandler} resumeInfo={experimentalPhysicistJobExperienceInfo} />
                        </div>
                        <div className='form-data-controller-dropdown-section-add-button-container'>
                            <button className='form-data-controller-dropdown-section-add-button'><FaPlus /><strong>Education</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

FormDataController.propTypes;
export default FormDataController;