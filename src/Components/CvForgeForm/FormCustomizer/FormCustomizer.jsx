import './FormCustomizer.css';

function FormCustomizer() {
    return (
        <>
            <div className="form-customizer-layout">
                <h2>Layout</h2>

                <div className="layout-button-container">
                    <button>
                        <div className='layout layout-top'></div>
                        Top
                    </button>

                    <button>
                        <div className='layout layout-left'></div>
                        Left
                    </button>

                    <button>
                        <div className='layout layout-right'></div>
                        Right
                    </button>
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

export default FormCustomizer;