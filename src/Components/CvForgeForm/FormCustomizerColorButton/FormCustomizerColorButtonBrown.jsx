import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerColorButton.css';

function FormCustomizerColorButtonBrown({ selectedColor, changeSelectedColor }) {

    function handleChangeSelectedColor() {
        changeSelectedColor(defaultDataset.formCustomizerColors.brown);
    }

    return (
        <>
            <div className={`color-button brown ${selectedColor === defaultDataset.formCustomizerColors.brown ? 'selected-color' : ''}`} onClick={handleChangeSelectedColor}></div>
        </>
    );
}

FormCustomizerColorButtonBrown.propTypes;
export default FormCustomizerColorButtonBrown;