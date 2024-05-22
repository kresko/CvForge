import './FormDataHydrator.css'
import { FaTrash } from "react-icons/fa";
import FormDataHydratorButton from "../FormDataHydratorButton/FormDataHydratorButton";

function FormDataHydrator({ loadDefaultData, clearDefaultData }) {
    return (
        <>
            <div className="form-data-hydrator">
                <div className="form-data-hydrator-button-container">
                    <FormDataHydratorButton content={ 'Clear resume' } classname={'red'} icon={<FaTrash />} defaultDataClickHandler={clearDefaultData}/>
                    <FormDataHydratorButton content={ 'Load example' } defaultDataClickHandler={loadDefaultData}/>
                </div>
            </div>
        </>
    );
}

FormDataHydrator.propTypes;
export default FormDataHydrator;