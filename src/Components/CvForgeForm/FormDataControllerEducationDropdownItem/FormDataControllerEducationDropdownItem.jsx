import { useState } from 'react';
import './FormDataControllerEducationDropdownItem.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import defaultDataset from '../../../Data/DefaultDataset';

function FormDataControllerEducationDropdownItem({ label, resumeInfoClickHandler, resumeInfo, educationFormLabels, educationInfo, onChangeEducationInfo, removeDropDownItem, isItemRemoved}) {
    const [isToggled, setIsFormToggled] = useState(true);

    function toggleForm() {
        setIsFormToggled((isToggled) => !isToggled);
    }

    function removeItem() {
        setIsFormToggled(true);
        removeDropDownItem();
    }

    return (
        <>
            {isToggled ? 
                (!isItemRemoved ? 
                    <button className='form-data-controller-education-dropdown-item'>
                        <h3 onClick={toggleForm}><strong>{label}</strong></h3>
                        <div className='form-data-controller-education-dropdown-item-button' onClick={resumeInfoClickHandler}>
                            <i>{resumeInfo ? <FaEyeSlash /> : <FaEye />}</i>
                        </div>
                    </button>    
                : null)
            : 
                <form className='education-form'>
                    <label>
                        <h3>{educationFormLabels.school}</h3>
                        <input type="text" value={educationInfo.institutionName} onChange={onChangeEducationInfo} data-key={'institutionName'}/>
                    </label>

                    <label>
                        <h3>{educationFormLabels.degree}</h3>
                        <input type="text" value={educationInfo.degree} onChange={onChangeEducationInfo} data-key={'degree'}/>
                    </label>

                    <div className="label-container">
                        <label className='start-date'>
                            <h3>{educationFormLabels.startDate}</h3>
                            <input type="text" value={educationInfo.startDate} onChange={onChangeEducationInfo} data-key={'startDate'}/>
                        </label>

                        <label className='end-date'>
                            <h3>{educationFormLabels.endDate}</h3>
                            <input type="text" value={educationInfo.endDate} onChange={onChangeEducationInfo} data-key={'endDate'}/>
                        </label>
                    </div>

                    <label>
                        <h3>{educationFormLabels.address}</h3>
                        <input type="text" value={educationInfo.location} onChange={onChangeEducationInfo} data-key={'location'}/>
                    </label>

                    <div className="education-form-button-container">
                        <button className={defaultDataset.generalGlossaryClassNames.delete} onClick={removeItem}>{defaultDataset.generalGlossary.delete}</button>
                        <div className="position-right">
                            <button className={defaultDataset.generalGlossaryClassNames.cancel} onClick={toggleForm}>{defaultDataset.generalGlossary.cancel}</button>
                            <button className={defaultDataset.generalGlossaryClassNames.save} onClick={toggleForm}>{defaultDataset.generalGlossary.save}</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

FormDataControllerEducationDropdownItem.propTypes;
export default FormDataControllerEducationDropdownItem;