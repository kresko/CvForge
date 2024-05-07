import './FormDataControllerDropdownSection.css';
import { useState } from 'react';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";
import { FaChevronUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function FormDataControllerDropdownSection({  label, itemLabel, icon='' }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    
    function handleIsDropDownFormHidden() {
        setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
    }

    return (
        <>
            <button className={`form-data-controller-dropdown-section-button`} onClick={handleIsDropDownFormHidden}>
                <span className='custom-icon'>{icon}<h2>{label}</h2></span>
                <span className='chevron'><FaChevronUp/></span>
            </button>
            <div className={`form-data-controller-dropdown-section ${isDropdownOpen ? 'is-hidden' : ''}`}>
                <div className="form-data-controller-dropdown-section-item-collection">
                    <FormDataControllerDropdownItem label={itemLabel[0]} />
                    <FormDataControllerDropdownItem label={itemLabel[1]} />
                </div>
                <div className='form-data-controller-dropdown-section-add-button-container'>
                    <button className='form-data-controller-dropdown-section-add-button'><FaPlus /><strong>Education</strong></button>
                </div>
            </div>
        </>
    );
}

FormDataControllerDropdownSection.propTypes;
export default FormDataControllerDropdownSection;