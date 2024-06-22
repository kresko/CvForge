import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerColorButton.css';

function FormCustomizerColorButtonRed({ selectedColor, changeSelectedColor }) {

    //promeni dodaj novu css klasu i promeni postojeci css
    function handleChangeSelectedColor() {
        changeSelectedColor(defaultDataset.formCustomizerColors.red);
    }

    return (
        <>
            <div className={`color-button red ${selectedColor === defaultDataset.formCustomizerColors.red ? 'selected-color' : ''}`} onClick={handleChangeSelectedColor}></div>
        </>
    );
}

FormCustomizerColorButtonRed.propTypes;
export default FormCustomizerColorButtonRed;