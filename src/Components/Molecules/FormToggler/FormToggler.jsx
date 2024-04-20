import './FormToggler.css';
import FormDataHydrator from '../../Molecules/FormDataHydrator/FormDataHydrator';
import FormDataCotroller from '../../Molecules/FormDataController/FormDataController';

function FormToggler() {
    return (
        <>
            <div className='form-toggler'>
                <FormDataHydrator />
                <FormDataCotroller />
            </div>
        </>
    );
}

export default FormToggler;