import './FormDataController.css';
import FormDataControllerInput from "../FormDataControllerInput/FormDataControllerInput";
import FormDataControllerDropdownSection from '../FormDataControllerDropdownSection/FormDataControllerDropdownSection';
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import defaultDataset from "../../../Data/DefaultDataset";

function FormDataController({ onChange, fullName, email, phone, address }) {
    const educationArray = [defaultDataset.sections.education.bachelorDegree.institutionName, defaultDataset.sections.education.mastersDegree.institutionName];
    const professionalExperienceArray = [defaultDataset.sections.experience.theoreticalPhysicistJob.institutionName, defaultDataset.sections.experience.experimentalPhysicistJob.institutionName];

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
                    <FormDataControllerDropdownSection label={'Education'} itemLabel={educationArray} icon={<FaGraduationCap/>}/>
                </div>

                <div className='experience-section'>
                    <FormDataControllerDropdownSection label={'Experience'} itemLabel={professionalExperienceArray} icon={<FaBriefcase/>}/>
                </div>
            </div>


        </>
    );
}

FormDataController.propTypes;
export default FormDataController;