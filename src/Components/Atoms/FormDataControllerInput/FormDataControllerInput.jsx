
function FormDataControllerInput({ label, placeholder }) {
    return(
        <div>
            <h2>{ label }</h2>

            <input type="text" placeholder={placeholder}/>
        </div>
    );
}

FormDataControllerInput.propTypes;
export default FormDataControllerInput;