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
            </div>
        </>
    );
}

export default FormCustomizer;