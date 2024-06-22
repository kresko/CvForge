import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerFontButton.css';

function FontCustomizerFontMonospaceButton({ selectedFont, changeSelectedFont }) {

    function handleChangeSelectedFont() {
        changeSelectedFont(defaultDataset.formCustomizerFonts.monospace);
    }

    return (
        <>
            <div className={`font-block font-mono ${selectedFont === defaultDataset.formCustomizerFonts.monospace ? 'selected-font' : ''}`} onClick={handleChangeSelectedFont}>
                <p className='font-test'>Aa</p>
                <p>Mono</p>
            </div>
        </>
    );
}

FontCustomizerFontMonospaceButton.propTypes;
export default FontCustomizerFontMonospaceButton;