
function FormDataControllerInput({ label, placeholder, onChange }) {
    return(
        <div>
            <h2>{ label }</h2>

            <input value={placeholder} onChange={onChange}/>
        </div>
    );
}

FormDataControllerInput.propTypes;
export default FormDataControllerInput;