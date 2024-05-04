import './FormDataControllerDropdownSection.css';
import { useState } from 'react';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";
import { FaChevronUp } from "react-icons/fa";


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
                    <FormDataControllerDropdownItem label={itemLabel} icon={'icon'}/>
                    <FormDataControllerDropdownItem label={itemLabel} icon={'icon'}/>
                </div>
                <button>Create form</button>
            </div>
        </>
    );
}

FormDataControllerDropdownSection.propTypes;
export default FormDataControllerDropdownSection;