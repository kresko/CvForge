import defaultDataset from "../../../Data/DefaultDataset";
import RendererBodySection from "../RendererBodySection/RendererBodySection";
import './RendererBody.css';

function RendererBody({ 
    educationInfoBachelorDegree, educationInfoMastersDegree, experienceInfoTheoreticalPhysicistJob, experienceInfoExperimentalPhysicistJob, bachelorDegreeEducationInfo, 
    mastersDegreeEducationInfo, theoreticalPhysicistJobExperienceInfo, experimentalPhysicistJobExperienceInfo, isDefaultDataUsed, layoutPosition, selectedFont }) {
    return (
        <>
            <div className={`render-body-container ${layoutPosition} ${selectedFont}`}>
                <div className="renderer-body-education">
                    <h3>{defaultDataset.education.label}</h3>

                    <RendererBodySection 
                        startDate={educationInfoBachelorDegree.startDate}
                        endDate={educationInfoBachelorDegree.endDate}
                        location={educationInfoBachelorDegree.location}
                        insitutionName={educationInfoBachelorDegree.institutionName}
                        degree={educationInfoBachelorDegree.degree}
                        resumeInfo={bachelorDegreeEducationInfo}
                        isDefaultDataUsed={isDefaultDataUsed}
                    />

                    <RendererBodySection 
                        startDate={educationInfoMastersDegree.startDate}
                        endDate={educationInfoMastersDegree.endDate}
                        location={educationInfoMastersDegree.location}
                        insitutionName={educationInfoMastersDegree.institutionName}
                        degree={educationInfoMastersDegree.degree}
                        resumeInfo={mastersDegreeEducationInfo}
                        isDefaultDataUsed={isDefaultDataUsed}
                    />
                </div>
                
                <div className="renderer-body-experience">
                    <h3>{defaultDataset.experience.label}</h3>

                    <RendererBodySection 
                        startDate={experienceInfoTheoreticalPhysicistJob.startDate}
                        endDate={experienceInfoTheoreticalPhysicistJob.endDate}
                        location={experienceInfoTheoreticalPhysicistJob.location}
                        insitutionName={experienceInfoTheoreticalPhysicistJob.institutionName}
                        degree={experienceInfoTheoreticalPhysicistJob.occupation}
                        description={experienceInfoTheoreticalPhysicistJob.jobDescription}
                        resumeInfo={theoreticalPhysicistJobExperienceInfo}
                        isDefaultDataUsed={isDefaultDataUsed}
                    />

                    <RendererBodySection 
                        startDate={experienceInfoExperimentalPhysicistJob.startDate}
                        endDate={experienceInfoExperimentalPhysicistJob.endDate}
                        location={experienceInfoExperimentalPhysicistJob.location}
                        insitutionName={experienceInfoExperimentalPhysicistJob.institutionName}
                        degree={experienceInfoExperimentalPhysicistJob.occupation}
                        description={experienceInfoExperimentalPhysicistJob.jobDescription}
                        resumeInfo={experimentalPhysicistJobExperienceInfo}
                        isDefaultDataUsed={isDefaultDataUsed}
                    />
                </div>
            </div>
        </>
    );
}

RendererBody.propTypes;
export default RendererBody;