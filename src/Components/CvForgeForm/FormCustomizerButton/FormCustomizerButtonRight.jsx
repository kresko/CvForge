import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerButton.css';

function FormCustomizerButtonRight({ layoutPosition, changeLayoutPosition, selectedFont }) {
    function handleLayoutPosition() {
        changeLayoutPosition(defaultDataset.layoutPosition.layoutPositionRight);
    }

    return (
        <>
            <button onClick={handleLayoutPosition} className={`${layoutPosition === defaultDataset.layoutPosition.layoutPositionRight ? 'selected' : ''} ${selectedFont}`}>
                <div className='layout layout-right'></div>
                Right
            </button>
        </>
    );
}

FormCustomizerButtonRight.propTypes;
export default FormCustomizerButtonRight;