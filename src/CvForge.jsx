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
  const [isbachelorDegreeEducationInfoHidden, setIsbachelorDegreeEducationInfoHidden] = useState(false);
  const [isMastersDegreeEducationInfoHidden, setIsMastersDegreeEducationInfoHidden] = useState(false);
  const [isTheoreticalPhysicistJobExperienceInfoHidden, setIsTheoreticalPhysicistJobExperienceInfoHidden] = useState(false);
  const [isExperimentalPhysicistJobExperienceInfoHidden, setIsExperimentalPhysicistJobExperienceInfoHidden] = useState(false);

  function onChangePersonalInfo(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  function hideBachelorDegreeEducationInfo() {
    setIsbachelorDegreeEducationInfoHidden((isbachelorDegreeEducationInfoHidden) => !isbachelorDegreeEducationInfoHidden);
  }

  function hideMastersDegreeEducationInfo() {
    setIsMastersDegreeEducationInfoHidden((isMastersDegreeEducationInfoHidden) => !isMastersDegreeEducationInfoHidden);
  }

  function hideTheoreticalPhysicistJobExperienceInfo() {
    setIsTheoreticalPhysicistJobExperienceInfoHidden((isTheoreticalPhysicistJobExperienceInfoHidden) => !isTheoreticalPhysicistJobExperienceInfoHidden);
  }

  function hideExperimentalPhysicistJobExperienceInfo() {
    setIsExperimentalPhysicistJobExperienceInfoHidden((isExperimentalPhysicistJobExperienceInfoHidden) => !isExperimentalPhysicistJobExperienceInfoHidden);
  }

  return (
    <>
      <div className="cv-forge-form">
        <FormConfigurator />

        <div className='form-toggler'>
          <FormDataHydrator />
          <FormDataController onChange={onChangePersonalInfo} 
              fullName={personalInfo.fullName} 
              email={personalInfo.email} 
              phone={personalInfo.phoneNumber} 
              address={personalInfo.address}
              bachelorDegreeEducationInfo={isbachelorDegreeEducationInfoHidden}
              bachelorDegreeEducationInfoClickHandler={hideBachelorDegreeEducationInfo}
              mastersDegreeEducationInfo={isMastersDegreeEducationInfoHidden}
              mastersDegreeEducationInfoClickHandler={hideMastersDegreeEducationInfo}
              theoreticalPhysicistJobExperienceInfo={isTheoreticalPhysicistJobExperienceInfoHidden}
              theoreticalPhysicistJobExperienceInfoClickHandler={hideTheoreticalPhysicistJobExperienceInfo}
              experimentalPhysicistJobExperienceInfo={isExperimentalPhysicistJobExperienceInfoHidden}
              experimentalPhysicistJobExperienceInfoClickHandler={hideExperimentalPhysicistJobExperienceInfo}
              />
        </div>
      </div>

      <div className="cv-forge-renderer">
        <RendererHeader fullName={personalInfo.fullName} 
            email={personalInfo.email} 
            phone={personalInfo.phoneNumber} 
            address={personalInfo.address}/>

        <RendererBody 
          bachelorDegreeEducationInfo={isbachelorDegreeEducationInfoHidden}
          mastersDegreeEducationInfo={isMastersDegreeEducationInfoHidden}
          theoreticalPhysicistJobExperienceInfo={isTheoreticalPhysicistJobExperienceInfoHidden}
          experimentalPhysicistJobExperienceInfo={isExperimentalPhysicistJobExperienceInfoHidden}
          />
      </div>
    </>
  )
}

export default CvForge
