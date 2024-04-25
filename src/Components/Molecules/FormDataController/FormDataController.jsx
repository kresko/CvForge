import './FormDataController.css';
import FormDataControllerInput from "../../Atoms/FormDataControllerInput/FormDataControllerInput";
import FormDataControllerDropdownSection from '../../Atoms/FormDataControllerDropdownSection/FormDataControllerDropdownSection';

function FormDataController() {
    return (
        <>
            <div className='form-data-controller'>
                <div className="personal-details">
                <h1>Personal details</h1>

                    <FormDataControllerInput label={'Full name'} placeholder={'Edo Kreš'}/>
                    <FormDataControllerInput label={'Email'} placeholder={'edo.kres@gmail.com'}/>
                    <FormDataControllerInput label={'Phone number'} placeholder={'+385 99 999 999'}/>
                    <FormDataControllerInput label={'Address'} placeholder={'Mane stani 6'}/>
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

export default FormDataController;