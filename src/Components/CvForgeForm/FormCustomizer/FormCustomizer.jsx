import FormCustomizerButtonLeft from '../FormCustomizerButton/FormCustomizerButtonLeft';
import FormCustomizerButtonRight from '../FormCustomizerButton/FormCustomizerButtonRight';
import FormCustomizerButtonTop from '../FormCustomizerButton/FormCustomizerButtonTop';
import './FormCustomizer.css';

function FormCustomizer({ layoutPosition, changeLayoutPosition }) {
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
                    <div className="color-button red"></div>
                    <div className="color-button green"></div>
                    <div className="color-button blue"></div>
                    <div className="color-button purple"></div>
                    <div className="color-button brown"></div>
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