import RendererBody from "../../Molecules/RendererBody/RendererBody";
import RendererHeader from "../../Molecules/RendererHeader/RendererHeader";
import './CvForgeRenderer.css';

function CvForgeRenderer() {
    return (
        <>
            <div className="cv-forge-renderer">
                <RendererHeader />
                <RendererBody />
            </div>
        </>
    );
}

export default CvForgeRenderer;