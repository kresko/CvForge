import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerButton.css';

function FormCustomizerButtonLeft({ layoutPosition, changeLayoutPosition, selectedFont }) {
    function handleLayoutPosition() {
        changeLayoutPosition(defaultDataset.layoutPosition.layoutPositionLeft);
    }

    return (
        <>
            <button onClick={handleLayoutPosition} className={`${layoutPosition === defaultDataset.layoutPosition.layoutPositionLeft ? 'selected' : ''} ${selectedFont}`}>
                <div className='layout layout-left'></div>
                Left
            </button>
        </>
    );
}

FormCustomizerButtonLeft.propTypes;
export default FormCustomizerButtonLeft;