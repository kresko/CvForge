import './FormDataControllerDropdownSection.css';
import FormDataControllerDropdownItem from "../FormDataControllerDropdownItem/FormDataControllerDropdownItem";

function FormDataControllerDropdownSection({ className, label, itemLabel }) {
    return (
        <>
            <button className={`form-data-controller-dropdown-section ${className}`}>{label}</button>
            <div className="form-data-controller-dropdown-section">
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