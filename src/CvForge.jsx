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
  const [educationInfoBachelorDegree, setEducationInfoBachelorDegree] = useState(defaultDataset.education.bachelorDegree);
  const [educationInfoMastersDegree, setEducationInfoMastersDegree] = useState(defaultDataset.education.mastersDegree);
  const [experienceInfoTheoreticalPhysicistJob, setExperienceInfoTheoreticalPhysicistJob] = useState(defaultDataset.experience.theoreticalPhysicistJob);
  const [experienceInfoExperimentalPhysicistJob, setExperienceInfoExperimentalPhysicistJob] = useState(defaultDataset.experience.experimentalPhysicistJob);
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

  function onChangeEducationInfoBachelorDegree(e) {
    const { key } = e.target.dataset;
    setEducationInfoBachelorDegree({ ...educationInfoBachelorDegree, [key]: e.target.value });
  }

  function onChangeEducationInfoMastersDegree(e) {
    const { key } = e.target.dataset;
    setEducationInfoMastersDegree({ ...educationInfoMastersDegree, [key]: e.target.value });
  }

  function onChangeExperienceInfoTheoreticalPhysicistJob(e) {
    const { key } = e.target.dataset;
    setExperienceInfoTheoreticalPhysicistJob({ ...experienceInfoTheoreticalPhysicistJob, [key]: e.target.value });
  }

  function onChangeExperienceInfoExperimentalPhysicistJob(e) {
    const { key } = e.target.dataset;
    setExperienceInfoExperimentalPhysicistJob({ ...experienceInfoExperimentalPhysicistJob, [key]: e.target.value });
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
    setEducationInfoBachelorDegree(defaultDataset.education.bachelorDegree);
    setEducationInfoMastersDegree(defaultDataset.education.mastersDegree);
    setExperienceInfoTheoreticalPhysicistJob(defaultDataset.experience.theoreticalPhysicistJob);
    setExperienceInfoExperimentalPhysicistJob(defaultDataset.experience.experimentalPhysicistJob);
    setIsbachelorDegreeEducationItemRemoved(false);
    setIsMastersDegreeEducationItemRemoved(false);
    setIsTheoreticalPhysicistJobExperienceItemRemoved(false);
    setIsExperimentalPhysicistJobExperienceItemRemoved(false);
  }

  function clearDefaultData() {
    setIsDefaultDataUsed(false);
    setPersonalInfo(defaultDataset.emptyPersonalInfo);
    setEducationInfoBachelorDegree(defaultDataset.education.bachelorDegree);
    setEducationInfoMastersDegree(defaultDataset.education.mastersDegree);
    setExperienceInfoTheoreticalPhysicistJob(defaultDataset.experience.theoreticalPhysicistJob);
    setExperienceInfoExperimentalPhysicistJob(defaultDataset.experience.experimentalPhysicistJob);
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
              onChangeEducationInfoBachelorDegree={onChangeEducationInfoBachelorDegree} 
              onChangeEducationInfoMastersDegree={onChangeEducationInfoMastersDegree}
              onChangeExperienceInfoTheoreticalPhysicistJob={onChangeExperienceInfoTheoreticalPhysicistJob}
              onChangeExperienceInfoExperimentalPhysicistJob={onChangeExperienceInfoExperimentalPhysicistJob}
              educationInfoBachelorDegree={educationInfoBachelorDegree}
              educationInfoMastersDegree={educationInfoMastersDegree}
              experienceInfoTheoreticalPhysicistJob={experienceInfoTheoreticalPhysicistJob}
              experienceInfoExperimentalPhysicistJob={experienceInfoExperimentalPhysicistJob}
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
          educationInfoBachelorDegree={educationInfoBachelorDegree} 
          educationInfoMastersDegree={educationInfoMastersDegree}
          experienceInfoTheoreticalPhysicistJob={experienceInfoTheoreticalPhysicistJob}
          experienceInfoExperimentalPhysicistJob={experienceInfoExperimentalPhysicistJob}
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
