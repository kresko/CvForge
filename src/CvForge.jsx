import './CvForge.css'
import FormConfigurator from './Components/CvForgeForm/FormConfigurator/FormConfigurator';
import RendererHeader from './Components/CvForgeRenderer/RendererHeader/RendererHeader';
import RendererBody from './Components/CvForgeRenderer/RendererBody/RendererBody';
import FormDataHydrator from './Components/CvForgeForm/FormDataHydrator/FormDataHydrator';
import FormDataController from './Components/CvForgeForm/FormDataController/FormDataController';
import defaultDataset from './Data/DefaultDataset';
import { useState } from 'react';

function CvForge() {
  const [personalInfo, setPersonalInfo] = useState(defaultDataset.personalInfo);

  function onChangePersonalInfo(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <>
      <div className="cv-forge-form">
        <FormConfigurator />
        
        <div className='form-toggler'>
          <FormDataHydrator />
          <FormDataController onChange={onChangePersonalInfo} fullName={personalInfo.fullName} email={personalInfo.email} phone={personalInfo.phoneNumber} address={personalInfo.address}/>
        </div>
      </div>

      <div className="cv-forge-renderer">
        <RendererHeader fullName={personalInfo.fullName} email={personalInfo.email} phone={personalInfo.phoneNumber} address={personalInfo.address}/>
        <RendererBody />
      </div>
    </>
  )
}

export default CvForge
