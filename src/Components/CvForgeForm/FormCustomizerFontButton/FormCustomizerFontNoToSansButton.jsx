import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerFontButton.css';

function FontCustomizerFontNoToSansButton({ selectedFont, changeSelectedFont }) {

    function handleChangeSelectedFont() {
        changeSelectedFont(defaultDataset.formCustomizerFonts.noToSans);
    }

    return (
        <>
            <div className={`font-block font-sans ${selectedFont === defaultDataset.formCustomizerFonts.noToSans ? 'selected-font' : ''}`} onClick={handleChangeSelectedFont}>
                <p className='font-test'>Aa</p>
                <p>Sans</p>
            </div>
        </>
    );
}

FontCustomizerFontNoToSansButton.propTypes;
export default FontCustomizerFontNoToSansButton;