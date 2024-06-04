import './FormDataController.css';
import FormDataControllerInput from "../FormDataControllerInput/FormDataControllerInput";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import FormDataControllerExperienceDropdownItem from '../FormDataControllerExperienceDropdownItem/FormDataControllerExperienceDropdownItem';
import FormDataControllerEducationDropdownItem from '../FormDataControllerEducationDropdownItem/FormDataControllerEducationDropdownItem';
import defaultDataset from '../../../Data/DefaultDataset';

function FormDataController({ onChange, fullName, email, phone, address, educationInfo, experienceInfo, bachelorDegreeEducationInfo, bachelorDegreeEducationInfoClickHandler, 
    mastersDegreeEducationInfo, mastersDegreeEducationInfoClickHandler, theoreticalPhysicistJobExperienceInfo, theoreticalPhysicistJobExperienceInfoClickHandler, 
    experimentalPhysicistJobExperienceInfo, experimentalPhysicistJobExperienceInfoClickHandler, isDefaultDataUsed, removeBachelorDegreeEducationItem, isbachelorDegreeEducationItemRemoved,
    removeMastersDegreeEducationItem, isMastersDegreeEducationItemRemoved, removeTheoreticalPhysicistJobExperienceItem, isTheoreticalPhysicistJobExperienceItemRemoved, removeExperimentalPhysicistJobExperienceItem,
    isExperimentalPhysicistJobExperienceItemRemoved}) {
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
                            <FormDataControllerEducationDropdownItem 
                                label={educationInfo.bachelorDegree.institutionName} 
                                resumeInfoClickHandler={bachelorDegreeEducationInfoClickHandler} 
                                resumeInfo={bachelorDegreeEducationInfo} 
                                educationFormLabels={defaultDataset.educationFormLabels} 
                                educationInfo={educationInfo.bachelorDegree} 
                                removeBachelorDegreeEducationItem={removeBachelorDegreeEducationItem} 
                                isbachelorDegreeEducationItemRemoved={isbachelorDegreeEducationItemRemoved}
                                removeMastersDegreeEducationItem={removeMastersDegreeEducationItem}
                                //nastavi dalje
                                />
                            <FormDataControllerEducationDropdownItem 
                            label={educationInfo.mastersDegree.institutionName} 
                            resumeInfoClickHandler={mastersDegreeEducationInfoClickHandler} 
                            resumeInfo={mastersDegreeEducationInfo} 
                            educationFormLabels={defaultDataset.educationFormLabels} 
                            educationInfo={educationInfo.mastersDegree} 
                            removeDropDownItem={removeDropDownItem} 
                            isItemRemoved={isItemRemoved}/>
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
                            <FormDataControllerExperienceDropdownItem 
                                label={experienceInfo.theoreticalPhysicistJob.institutionName} 
                                resumeInfoClickHandler={theoreticalPhysicistJobExperienceInfoClickHandler} 
                                resumeInfo={theoreticalPhysicistJobExperienceInfo} 
                                experienceFormLabels={defaultDataset.experienceFormLabels} 
                                experienceInfo={experienceInfo.theoreticalPhysicistJob} 
                                removeDropDownItem={removeDropDownItem} 
                                isItemRemoved={isItemRemoved}/>
                                
                            <FormDataControllerExperienceDropdownItem 
                                label={experienceInfo.experimentalPhysicistJob.institutionName} 
                                resumeInfoClickHandler={experimentalPhysicistJobExperienceInfoClickHandler} 
                                resumeInfo={experimentalPhysicistJobExperienceInfo} 
                                experienceFormLabels={defaultDataset.experienceFormLabels} 
                                experienceInfo={experienceInfo.experimentalPhysicistJob} 
                                removeDropDownItem={removeDropDownItem} 
                                isItemRemoved={isItemRemoved}/>
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