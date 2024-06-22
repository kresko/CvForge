import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerColorButton.css';

function FormCustomizerColorButtonBlue({ selectedColor, changeSelectedColor }) {

    function handleChangeSelectedColor() {
        changeSelectedColor(defaultDataset.formCustomizerColors.blue);
    }

    return (
        <>
            <div className={`color-button blue ${selectedColor === defaultDataset.formCustomizerColors.blue ? 'selected-color' : ''}`} onClick={handleChangeSelectedColor}></div>
        </>
    );
}

FormCustomizerColorButtonBlue.propTypes;
export default FormCustomizerColorButtonBlue;