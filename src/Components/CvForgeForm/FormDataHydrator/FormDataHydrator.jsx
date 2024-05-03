import './FormDataHydrator.css'
import { FaTrash } from "react-icons/fa";
import FormDataHydratorButton from "../FormDataHydratorButton/FormDataHydratorButton";

function FormDataHydrator() {
    return (
        <>
            <div className="form-data-hydrator">
                <div className="form-data-hydrator-button-container">
                    <FormDataHydratorButton content={ 'Clear resume' } classname={'red'} icon={<FaTrash />}/>
                    <FormDataHydratorButton content={ 'Load example' }/>
                </div>
            </div>
        </>
    );
}

export default FormDataHydrator;