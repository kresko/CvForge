import './RendererHeader.css';
import RendererHeaderContactInfoItem from "../RendererHeaderContactInfoItem/RendererHeaderContactInfoItem";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function RendererHeader({ fullName, email, phone, address, layoutPosition }) {
    return (
        <>
            <div className={`renderer-header ${layoutPosition}`}>
                <h1 className="renderer-header-label">{ fullName }</h1>

                <div className={`renderer-header-contact-info ${layoutPosition}`}>
                    <RendererHeaderContactInfoItem icon={<FaEnvelope />} info={email} layoutPosition={layoutPosition}/>
                    <RendererHeaderContactInfoItem icon={<FaPhone />} info={phone} layoutPosition={layoutPosition}/>
                    <RendererHeaderContactInfoItem icon={<FaLocationDot />} info={address} layoutPosition={layoutPosition}/>
                </div>
            </div>
        </>
    );
}

RendererHeader.propTypes;
export default RendererHeader;