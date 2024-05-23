import RendererBodySection from "../RendererBodySection/RendererBodySection";
import './RendererBody.css';

function RendererBody({ educationInfo, experienceInfo, bachelorDegreeEducationInfo, mastersDegreeEducationInfo, theoreticalPhysicistJobExperienceInfo, experimentalPhysicistJobExperienceInfo, isDefaultDataUsed }) {
    return (
        <>
            <div className="renderer-body-education">
                <h3>{educationInfo.label}</h3>

                <RendererBodySection 
                    startDate={educationInfo.bachelorDegree.startDate}
                    endDate={educationInfo.bachelorDegree.endDate}
                    location={educationInfo.bachelorDegree.location}
                    insitutionName={educationInfo.bachelorDegree.institutionName}
                    degree={educationInfo.bachelorDegree.degree}
                    resumeInfo={bachelorDegreeEducationInfo}
                    isDefaultDataUsed={isDefaultDataUsed}
                />

                <RendererBodySection 
                    startDate={educationInfo.mastersDegree.startDate}
                    endDate={educationInfo.mastersDegree.endDate}
                    location={educationInfo.mastersDegree.location}
                    insitutionName={educationInfo.mastersDegree.institutionName}
                    degree={educationInfo.mastersDegree.degree}
                    resumeInfo={mastersDegreeEducationInfo}
                    isDefaultDataUsed={isDefaultDataUsed}
                />
            </div>
            
            <div className="renderer-body-experience">
                <h3>{experienceInfo.label}</h3>

                <RendererBodySection 
                    startDate={experienceInfo.theoreticalPhysicistJob.startDate}
                    endDate={experienceInfo.theoreticalPhysicistJob.endDate}
                    location={experienceInfo.theoreticalPhysicistJob.location}
                    insitutionName={experienceInfo.theoreticalPhysicistJob.institutionName}
                    degree={experienceInfo.theoreticalPhysicistJob.degree}
                    description={experienceInfo.theoreticalPhysicistJob.jobDescription}
                    resumeInfo={theoreticalPhysicistJobExperienceInfo}
                    isDefaultDataUsed={isDefaultDataUsed}
                />

                <RendererBodySection 
                    startDate={experienceInfo.experimentalPhysicistJob.startDate}
                    endDate={experienceInfo.experimentalPhysicistJob.endDate}
                    location={experienceInfo.experimentalPhysicistJob.location}
                    insitutionName={experienceInfo.experimentalPhysicistJob.institutionName}
                    degree={experienceInfo.experimentalPhysicistJob.degree}
                    description={experienceInfo.experimentalPhysicistJob.jobDescription}
                    resumeInfo={experimentalPhysicistJobExperienceInfo}
                    isDefaultDataUsed={isDefaultDataUsed}
                />
            </div>
        </>
    );
}

RendererBody.propTypes;
export default RendererBody;