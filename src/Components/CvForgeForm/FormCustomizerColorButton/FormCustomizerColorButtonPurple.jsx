import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerColorButton.css';

function FormCustomizerColorButtonPurple({ selectedColor, changeSelectedColor }) {

    function handleChangeSelectedColor() {
        changeSelectedColor(defaultDataset.formCustomizerColors.purple);
    }

    return (
        <>
            <div className={`color-button purple ${selectedColor === defaultDataset.formCustomizerColors.purple ? 'selected-color' : ''}`} onClick={handleChangeSelectedColor}></div>
        </>
    );
}

FormCustomizerColorButtonPurple.propTypes;
export default FormCustomizerColorButtonPurple;