
function FormDataControllerInput({ label, placeholder, onChange, dataKey }) {
    return(
        <div>
            <h2>{ label }</h2>

            <input value={placeholder} onChange={onChange} data-key={dataKey}/>
        </div>
    );
}

FormDataControllerInput.propTypes;
export default FormDataControllerInput;