import RendererBodySection from "../RendererBodySection/RendererBodySection";

function RendererBody() {
    return (
        <>
            <div className="renderer-body-education">
                <RendererBodySection />
            </div>
            
            <div className="renderer-body-experience">
                <RendererBodySection />
            </div>
        </>
    );
}

export default RendererBody;