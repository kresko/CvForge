import FormConfigurator from "../../Molecules/FormConfigurator/FormConfigurator";
import FormToggler from "../../Molecules/FormToggler/FormToggler";
import './CvForgeForm.css';


function CvForgeForm() {
    return (
        <>
            <div className="cv-forge-form">
                <FormConfigurator />
                <FormToggler />
            </div>
        </>
    );
}

export default CvForgeForm;