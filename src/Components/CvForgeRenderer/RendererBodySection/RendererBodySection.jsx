import './RendererBodySection.css';

function RendererBodySection({ testInfo, startDate, endDate, location, insitutionName, degree, description='', resumeInfo, isDefaultDataUsed }) {
    return (
        <>
            <div className={`renderer-body-section ${(resumeInfo || !isDefaultDataUsed) ? 'hidden' : ''}`}>
                <div className="date-location">
                    <p className="date"><span>{startDate}</span> - <span>{endDate}</span></p>
                    <p className="location">{location}</p>
                </div>
                <div className="institution">
                    <p className="institution-name"><strong>{insitutionName}</strong></p> 
                    <p className="title">{degree}</p>
                    <p className="institution-descrption">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

RendererBodySection.propTypes;
export default RendererBodySection;