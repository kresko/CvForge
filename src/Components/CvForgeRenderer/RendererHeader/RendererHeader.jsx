import './RendererHeader.css';
import RendererHeaderContactInfoItem from "../RendererHeaderContactInfoItem/RendererHeaderContactInfoItem";

function RendererHeader({ fullName, email, phone, address }) {
    return (
        <>
            <div className="renderer-header">
                <h1 className="renderer-header-label">{ fullName }</h1>

                <div className="renderer-header-contact-info">
                    <RendererHeaderContactInfoItem icon={'icon'} info={email}/>
                    <RendererHeaderContactInfoItem icon={'icon'} info={phone}/>
                    <RendererHeaderContactInfoItem icon={'icon'} info={address}/>
                </div>
            </div>
        </>
    );
}

RendererHeader.propTypes;
export default RendererHeader;