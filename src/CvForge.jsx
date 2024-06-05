import './CvForge.css'
import FormConfigurator from './Components/CvForgeForm/FormConfigurator/FormConfigurator';
import RendererHeader from './Components/CvForgeRenderer/RendererHeader/RendererHeader';
import RendererBody from './Components/CvForgeRenderer/RendererBody/RendererBody';
import FormDataHydrator from './Components/CvForgeForm/FormDataHydrator/FormDataHydrator';
import FormDataController from './Components/CvForgeForm/FormDataController/FormDataController';
import FormCustomizer from './Components/CvForgeForm/FormCustomizer/FormCustomizer';
import defaultDataset from './Data/DefaultDataset';
import { useState } from 'react';

function CvForge() {
  const [personalInfo, setPersonalInfo] = useState(defaultDataset.personalInfo);
  const [educationInfo, setEducationInfo] = useState(defaultDataset.education);
  const [experienceInfo, setExperienceInfo] = useState(defaultDataset.experience);
  const [testInfo, setTestInfo] = useState(defaultDataset.experience.theoreticalPhysicistJob);
  const [isbachelorDegreeEducationInfoHidden, setIsbachelorDegreeEducationInfoHidden] = useState(false);
  const [isMastersDegreeEducationInfoHidden, setIsMastersDegreeEducationInfoHidden] = useState(false);
  const [isTheoreticalPhysicistJobExperienceInfoHidden, setIsTheoreticalPhysicistJobExperienceInfoHidden] = useState(false);
  const [isExperimentalPhysicistJobExperienceInfoHidden, setIsExperimentalPhysicistJobExperienceInfoHidden] = useState(false);
  const [isFormToggled, setIsFormToggled] = useState(defaultDataset.forms.formController);
  const [isDefaultDataUsed, setIsDefaultDataUsed] = useState(true); 
  const [isbachelorDegreeEducationItemRemoved, setIsbachelorDegreeEducationItemRemoved] = useState(false);
  const [isMastersDegreeEducationItemRemoved, setIsMastersDegreeEducationItemRemoved] = useState(false);
  const [isTheoreticalPhysicistJobExperienceItemRemoved, setIsTheoreticalPhysicistJobExperienceItemRemoved] = useState(false);
  const [isExperimentalPhysicistJobExperienceItemRemoved, setIsExperimentalPhysicistJobExperienceItemRemoved] = useState(false);

  function onChangePersonalInfo(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value })
  }

  function onChangeEducationInfo(e) {
    const { key } = e.target.dataset;
    setEducationInfo({ ...educationInfo, [key]: e.target.value });
  }

  function onChangeExperienceInfo(e) {
    const { key } = e.target.dataset;
    setExperienceInfo({ ...experienceInfo, [key]: e.target.value });
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

  function loadDefaultData() {
    setIsDefaultDataUsed(true)
    setPersonalInfo(defaultDataset.personalInfo);
    setEducationInfo(defaultDataset.education);
    setExperienceInfo(defaultDataset.experience);
    setIsbachelorDegreeEducationItemRemoved(false);
    setIsMastersDegreeEducationItemRemoved(false);
    setIsTheoreticalPhysicistJobExperienceItemRemoved(false);
    setIsExperimentalPhysicistJobExperienceItemRemoved(false);
  }

  function clearDefaultData() {
    setIsDefaultDataUsed(false);
    setPersonalInfo(defaultDataset.emptyPersonalInfo);
    setEducationInfo(defaultDataset.emptyEducation);
    setExperienceInfo(defaultDataset.emptyExperience);
  }

  function toggleForm(id) {
    setIsFormToggled(id);
  }

  function removeBachelorDegreeEducationItem() {
    setIsbachelorDegreeEducationItemRemoved(true);
  }

  function removeMastersDegreeEducationItem() {
    setIsMastersDegreeEducationItemRemoved(true);
  }

  function removeTheoreticalPhysicistJobExperienceItem() {
    setIsTheoreticalPhysicistJobExperienceItemRemoved(true);
  }

  function removeExperimentalPhysicistJobExperienceItem() {
    setIsExperimentalPhysicistJobExperienceItemRemoved(true);
  }

  return (
    <>
      <div className="cv-forge-form">
        <FormConfigurator toggleForm={toggleForm}/>

        <div className='form-toggler'>
          <FormDataHydrator 
            loadDefaultData={loadDefaultData}
            clearDefaultData={clearDefaultData} 
          />

          { isFormToggled == defaultDataset.forms.formController && ( 
            <FormDataController onChange={onChangePersonalInfo}
              onChangeEducationInfo={onChangeEducationInfo} 
              onChangeExperienceInfo={onChangeExperienceInfo}
              testInfo={testInfo}
              fullName={personalInfo.fullName} 
              email={personalInfo.email} 
              phone={personalInfo.phoneNumber} 
              address={personalInfo.address}
              educationInfo={educationInfo}
              experienceInfo={experienceInfo}
              bachelorDegreeEducationInfo={isbachelorDegreeEducationInfoHidden}
              bachelorDegreeEducationInfoClickHandler={hideBachelorDegreeEducationInfo}
              mastersDegreeEducationInfo={isMastersDegreeEducationInfoHidden}
              mastersDegreeEducationInfoClickHandler={hideMastersDegreeEducationInfo}
              theoreticalPhysicistJobExperienceInfo={isTheoreticalPhysicistJobExperienceInfoHidden}
              theoreticalPhysicistJobExperienceInfoClickHandler={hideTheoreticalPhysicistJobExperienceInfo}
              experimentalPhysicistJobExperienceInfo={isExperimentalPhysicistJobExperienceInfoHidden}
              experimentalPhysicistJobExperienceInfoClickHandler={hideExperimentalPhysicistJobExperienceInfo}
              isDefaultDataUsed={isDefaultDataUsed}
              removeBachelorDegreeEducationItem={removeBachelorDegreeEducationItem}
              isbachelorDegreeEducationItemRemoved={isbachelorDegreeEducationItemRemoved}
              removeMastersDegreeEducationItem={removeMastersDegreeEducationItem}
              isMastersDegreeEducationItemRemoved={isMastersDegreeEducationItemRemoved}
              removeTheoreticalPhysicistJobExperienceItem={removeTheoreticalPhysicistJobExperienceItem}
              isTheoreticalPhysicistJobExperienceItemRemoved={isTheoreticalPhysicistJobExperienceItemRemoved}
              removeExperimentalPhysicistJobExperienceItem={removeExperimentalPhysicistJobExperienceItem}
              isExperimentalPhysicistJobExperienceItemRemoved={isExperimentalPhysicistJobExperienceItemRemoved}
            /> )}

          { isFormToggled == defaultDataset.forms.formCustomizer && (<FormCustomizer />)}
        </div>
      </div>

      <div className="cv-forge-renderer">
        <RendererHeader fullName={personalInfo.fullName} 
            email={personalInfo.email} 
            phone={personalInfo.phoneNumber} 
            address={personalInfo.address}/>

        <RendererBody
          testInfo={testInfo}
          educationInfo={educationInfo} 
          experienceInfo={experienceInfo}
          bachelorDegreeEducationInfo={isbachelorDegreeEducationInfoHidden}
          mastersDegreeEducationInfo={isMastersDegreeEducationInfoHidden}
          theoreticalPhysicistJobExperienceInfo={isTheoreticalPhysicistJobExperienceInfoHidden}
          experimentalPhysicistJobExperienceInfo={isExperimentalPhysicistJobExperienceInfoHidden}
          isDefaultDataUsed={isDefaultDataUsed}
          />
      </div>
    </>
  )
}

export default CvForge
