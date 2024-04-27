import FormDataHydratorButton from "../FormDataHydratorButton/FormDataHydratorButton";

function FormDataHydrator() {
    return (
        <>
            <div className="form-data-hydrator">
                <div className="form-data-hydrator-button-container">
                    <FormDataHydratorButton content={ 'clear resume' }/>
                    <FormDataHydratorButton content={ 'Load example' }/>
                </div>
            </div>
        </>
    );
}

export default FormDataHydrator;