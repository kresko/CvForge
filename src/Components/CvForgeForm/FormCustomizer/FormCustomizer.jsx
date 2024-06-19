import FormCustomizerButtonLeft from '../FormCustomizerButton/FormCustomizerButtonLeft';
import FormCustomizerButtonRight from '../FormCustomizerButton/FormCustomizerButtonRight';
import FormCustomizerButtonTop from '../FormCustomizerButton/FormCustomizerButtonTop';
import FormCustomizerColorButtonRed from '../FormCustomizerColorButton/FormCustomizerColorButtonRed';
import FormCustomizerColorButtonBlue from '../FormCustomizerColorButton/FormCustomizerColorButtonBlue';
import FormCustomizerColorButtonGreen from '../FormCustomizerColorButton/FormCustomizerColorButtonGreen';
import FormCustomizerColorButtonPurple from '../FormCustomizerColorButton/FormCustomizerColorButtonPurple';
import FormCustomizerColorButtonBrown from '../FormCustomizerColorButton/FormCustomizerColorButtonBrown';
import './FormCustomizer.css';

function FormCustomizer({ layoutPosition, changeLayoutPosition, selectedColor, changeSelectedColor }) {
    return (
        <>
            <div className="form-customizer-layout">
                <h2>Layout</h2>

                <div className="layout-button-container">
                    <FormCustomizerButtonTop layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition}/>
                    <FormCustomizerButtonLeft layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition}/>
                    <FormCustomizerButtonRight layoutPosition={layoutPosition} changeLayoutPosition={changeLayoutPosition}/>
                </div>                
            </div>

            <div className="form-customizer-color">
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

            <div className="form-customizer-fonts">
                <h2>Fonts</h2>

                <div className="fonts-container">
                    <div className="font-block font-serif">
                        <p className='font-test'>Aa</p>
                        <p>Serif</p>
                    </div>

                    <div className="font-block font-sans">
                        <p className='font-test'>Aa</p>
                        <p>Sans</p>
                    </div>

                    <div className="font-block font-mono">
                        <p className='font-test'>Aa</p>
                        <p>Mono</p>
                    </div>
                </div>
            </div>
        </>
    );
}

FormCustomizer.propTypes;
export default FormCustomizer;