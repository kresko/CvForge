import './FormDataControllerDropdownSection.css';
import { useState } from 'react';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";

function FormDataControllerDropdownSection({  label, itemLabel }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    function handleIsDropDownFormHidden() {
        setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
    }

    return (
        <>
            <button className={`form-data-controller-dropdown-section`} onClick={handleIsDropDownFormHidden}>{label}</button>
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