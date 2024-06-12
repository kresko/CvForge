import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerButton.css';

function FormCustomizerButtonTop({ layoutPosition, changeLayoutPosition }) {
    function handleLayoutPosition() {
        changeLayoutPosition(defaultDataset.layoutPosition.layoutPositionTop);
    }

    return (
        <>
            <button onClick={handleLayoutPosition} className={`${layoutPosition === defaultDataset.layoutPosition.layoutPositionTop ? 'selected' : ''}`}>
                <div className={`layout layout-top`}></div>
                Top
            </button>
        </>
    );
}

FormCustomizerButtonTop.propTypes;
export default FormCustomizerButtonTop;