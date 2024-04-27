import './FormDataController.css';
import FormDataControllerInput from "../FormDataControllerInput/FormDataControllerInput";
import FormDataControllerDropdownSection from '../FormDataControllerDropdownSection/FormDataControllerDropdownSection';

function FormDataController({ onChange, fullName, email, phone, address }) {
    return (
        <>
            <div className='form-data-controller'>
                <div className="personal-details">
                <h1>Personal details</h1>

                    <FormDataControllerInput label={'Full name'} placeholder={fullName} onChange={onChange}/>
                    <FormDataControllerInput label={'Email'} placeholder={email} onChange={onChange}/>
                    <FormDataControllerInput label={'Phone number'} placeholder={phone} onChange={onChange}/>
                    <FormDataControllerInput label={'Address'} placeholder={address} onChange={onChange}/>
                </div>

                <div className='education-section'>
                    <FormDataControllerDropdownSection label={'Education'} itemLabel={'London City University'}/>
                </div>

                <div className='experience-section'>
                    <FormDataControllerDropdownSection label={'Experience'} itemLabel={'Hidden University'}/>
                </div>
            </div>


        </>
    );
}

FormDataController.propTypes;
export default FormDataController;