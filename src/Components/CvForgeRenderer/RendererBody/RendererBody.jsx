import defaultDataset from "../../../Data/DefaultDataset";
import RendererBodySection from "../RendererBodySection/RendererBodySection";

function RendererBody({ resumeInfo }) {
    return (
        <>
            <div className="renderer-body-education">
                <h2>{defaultDataset.sections.education.label}</h2>

                <RendererBodySection 
                    startDate={defaultDataset.sections.education.bachelorDegree.startDate}
                    endDate={defaultDataset.sections.education.bachelorDegree.endDate}
                    location={defaultDataset.sections.education.bachelorDegree.location}
                    insitutionName={defaultDataset.sections.education.bachelorDegree.institutionName}
                    degree={defaultDataset.sections.education.bachelorDegree.degree}
                    resumeInfo={resumeInfo}
                />

                <RendererBodySection 
                    startDate={defaultDataset.sections.education.mastersDegree.startDate}
                    endDate={defaultDataset.sections.education.mastersDegree.endDate}
                    location={defaultDataset.sections.education.mastersDegree.location}
                    insitutionName={defaultDataset.sections.education.mastersDegree.institutionName}
                    degree={defaultDataset.sections.education.mastersDegree.degree}
                    resumeInfo={resumeInfo}
                />
            </div>
            
            <div className="renderer-body-experience">
                <h2>{defaultDataset.sections.experience.label}</h2>

                <RendererBodySection 
                    startDate={defaultDataset.sections.experience.theoreticalPhysicistJob.startDate}
                    endDate={defaultDataset.sections.experience.theoreticalPhysicistJob.endDate}
                    location={defaultDataset.sections.experience.theoreticalPhysicistJob.location}
                    insitutionName={defaultDataset.sections.experience.theoreticalPhysicistJob.institutionName}
                    degree={defaultDataset.sections.experience.theoreticalPhysicistJob.degree}
                    description={defaultDataset.sections.experience.theoreticalPhysicistJob.jobDescription}
                    resumeInfo={resumeInfo}
                />

                <RendererBodySection 
                    startDate={defaultDataset.sections.experience.experimentalPhysicistJob.startDate}
                    endDate={defaultDataset.sections.experience.experimentalPhysicistJob.endDate}
                    location={defaultDataset.sections.experience.experimentalPhysicistJob.location}
                    insitutionName={defaultDataset.sections.experience.experimentalPhysicistJob.institutionName}
                    degree={defaultDataset.sections.experience.experimentalPhysicistJob.degree}
                    description={defaultDataset.sections.experience.experimentalPhysicistJob.jobDescription}
                    resumeInfo={resumeInfo}
                />
            </div>
        </>
    );
}

RendererBody.propTypes;
export default RendererBody;