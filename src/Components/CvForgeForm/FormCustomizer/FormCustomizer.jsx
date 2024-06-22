import FormCustomizerButtonLeft from '../FormCustomizerButton/FormCustomizerButtonLeft';
import FormCustomizerButtonRight from '../FormCustomizerButton/FormCustomizerButtonRight';
import FormCustomizerButtonTop from '../FormCustomizerButton/FormCustomizerButtonTop';
import FormCustomizerColorButtonRed from '../FormCustomizerColorButton/FormCustomizerColorButtonRed';
import FormCustomizerColorButtonBlue from '../FormCustomizerColorButton/FormCustomizerColorButtonBlue';
import FormCustomizerColorButtonGreen from '../FormCustomizerColorButton/FormCustomizerColorButtonGreen';
import FormCustomizerColorButtonPurple from '../FormCustomizerColorButton/FormCustomizerColorButtonPurple';
import FormCustomizerColorButtonBrown from '../FormCustomizerColorButton/FormCustomizerColorButtonBrown';
import FontCustomizerFontNoToSansButton from '../FormCustomizerFontButton/FormCustomizerFontNoToSansButton';
import FontCustomizerFontSerifButton from '../FormCustomizerFontButton/FormCustomizerFontSerifButton';
import FontCustomizerFontMonospaceButton from '../FormCustomizerFontButton/FormCustomizerFontMonospaceButton';
import './FormCustomizer.css';

function FormCustomizer({ layoutPosition, changeLayoutPosition, selectedColor, changeSelectedColor, selectedFont, changeSelectedFont }) {
    return (
        <>
            <div className={`form-customizer-layout ${selectedFont}`}>
                <h2>Layout</h2>

                <div className="layout-button-container">
                    <FormCustomizerButtonTop layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition} selectedFont={selectedFont}/>
                    <FormCustomizerButtonLeft layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition} selectedFont={selectedFont}/>
                    <FormCustomizerButtonRight layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition} selectedFont={selectedFont}/>
                </div>                
            </div>

            <div className={`form-customizer-color ${selectedFont}`}>
                <h2>Color</h2>

                <div className="color-container">
                    <FormCustomizerColorButtonRed
                        selectedColor={selectedColor}
                        changeSelectedColor={changeSelectedColor}/>
                    <FormCustomizerColorButtonBlue
                        selectedColor={selectedColor}
                        changeSelectedColor={changeSelectedColor}/>
                    <FormCustomizerColorButtonGreen
                        selectedColor={selectedColor}
                        changeSelectedColor={changeSelectedColor}/>
                    <FormCustomizerColorButtonPurple
                        selectedColor={selectedColor}
                        changeSelectedColor={changeSelectedColor}/>
                    <FormCustomizerColorButtonBrown
                        selectedColor={selectedColor}
                        changeSelectedColor={changeSelectedColor}/>
                </div>
            </div>

            <div className={`form-customizer-fonts ${selectedFont}`}>
                <h2>Fonts</h2>

                <div className="fonts-container">
                    <FontCustomizerFontSerifButton
                        selectedFont={selectedFont}
                        changeSelectedFont={changeSelectedFont}/>
                    <FontCustomizerFontNoToSansButton
                        selectedFont={selectedFont}
                        changeSelectedFont={changeSelectedFont}/>
                    <FontCustomizerFontMonospaceButton
                        selectedFont={selectedFont}
                        changeSelectedFont={changeSelectedFont}/>
                </div>
            </div>
        </>
    );
}

FormCustomizer.propTypes;
export default FormCustomizer;