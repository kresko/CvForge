import defaultDataset from '../../../Data/DefaultDataset';
import './FormCustomizerButton.css';

function FormCustomizerButtonRight({ layoutPosition, changeLayoutPosition }) {
    function handleLayoutPosition() {
        changeLayoutPosition(defaultDataset.layoutPosition.layoutPositionRight);
    }

    return (
        <>
            <button onClick={handleLayoutPosition} className={`${layoutPosition === defaultDataset.layoutPosition.layoutPositionRight ? 'selected' : ''}`}>
                <div className='layout layout-right'></div>
                Right
            </button>
        </>
    );
}

FormCustomizerButtonRight.propTypes;
export default FormCustomizerButtonRight;