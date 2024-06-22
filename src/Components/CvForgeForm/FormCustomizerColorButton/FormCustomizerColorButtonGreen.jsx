import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerColorButton.css';

function FormCustomizerColorButtonGreen({ selectedColor, changeSelectedColor }) {

    function handleChangeSelectedColor() {
        changeSelectedColor(defaultDataset.formCustomizerColors.green);
    }

    return (
        <>
            <div className={`color-button green ${selectedColor === defaultDataset.formCustomizerColors.green ? 'selected-color' : ''}`} onClick={handleChangeSelectedColor}></div>
        </>
    );
}

FormCustomizerColorButtonGreen.propTypes;
export default FormCustomizerColorButtonGreen;