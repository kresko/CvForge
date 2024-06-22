import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerFontButton.css';

function FontCustomizerFontSerifButton({ selectedFont, changeSelectedFont }) {

    function handleChangeSelectedFont() {
        changeSelectedFont(defaultDataset.formCustomizerFonts.serif);
    }

    return (
        <>
            <div className={`font-block font-serif ${selectedFont === defaultDataset.formCustomizerFonts.serif ? 'selected-font' : ''}`} onClick={handleChangeSelectedFont}>
                <p className='font-test'>Aa</p>
                <p>Serif</p>
            </div>
        </>
    );
}

FontCustomizerFontSerifButton.propTypes;
export default FontCustomizerFontSerifButton;