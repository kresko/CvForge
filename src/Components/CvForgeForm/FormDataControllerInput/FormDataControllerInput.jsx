
import './FormDataControllerInput.css';

function FormDataControllerInput({ label, placeholder, onChange, dataKey, recommendedLabel='' }) {
    return(
        <div className='form-data-controller-input'>
            <div className='label-container'>
                <h3>{ label }</h3>
                <span>{ recommendedLabel }</span>
            </div>

            <input value={placeholder} onChange={onChange} data-key={dataKey}/>
        </div>
    );
}

FormDataControllerInput.propTypes;
export default FormDataControllerInput;