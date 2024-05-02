import './FormDataControllerDropdownSection.css';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";

function FormDataControllerDropdownSection({  label, itemLabel }) {
    let isDropDownFormHidden = true;

    function handleIsDropDownFormHidden() {
        isDropDownFormHidden = isDropDownFormHidden ? false : true;
        console.log(isDropDownFormHidden);
    }

    return (
        <>
            <button className={`form-data-controller-dropdown-section`} onClick={handleIsDropDownFormHidden}>{label}</button>
            <div className={`form-data-controller-dropdown-section ${isDropDownFormHidden ? 'is-hidden' : ''}`}>
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