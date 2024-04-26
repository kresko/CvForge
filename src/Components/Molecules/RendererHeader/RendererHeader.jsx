import './RendererHeader.css';
import RendererHeaderContactInfoItem from "../../Atoms/RendererHeaderContactInfoItem/RendererHeaderContactInfoItem";

function RendererHeader() {
    return (
        <>
            <div className="renderer-header">
                <h1 className="renderer-header-label">Edo Kreš</h1>

                <div className="renderer-header-contact-info">
                    <RendererHeaderContactInfoItem icon={'icon'} info={'edo.kres@gmail.com'}/>
                    <RendererHeaderContactInfoItem icon={'icon'} info={'+38599999999'}/>
                    <RendererHeaderContactInfoItem icon={'icon'} info={'Zagreb'}/>
                </div>
            </div>
        </>
    );
}

export default RendererHeader;