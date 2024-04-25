import RendererHeaderContactInfoItem from "../../Atoms/RendererHeaderContactInfoItem/RendererHeaderContactInfoItem";

function RendererHeader() {
    return (
        <>
            <div className="renderer-header">
                <h1 className="renderer-header-label">Edo Kreš</h1>

                <div className="renderer-header-contact-info">
                    <RendererHeaderContactInfoItem />
                    <RendererHeaderContactInfoItem />
                    <RendererHeaderContactInfoItem />
                </div>
            </div>
        </>
    );
}

export default RendererHeader;