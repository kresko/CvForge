import './RendererHeader.css';
import RendererHeaderContactInfoItem from "../RendererHeaderContactInfoItem/RendererHeaderContactInfoItem";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function RendererHeader({ fullName, email, phone, address }) {
    return (
        <>
            <div className="renderer-header">
                <h1 className="renderer-header-label">{ fullName }</h1>

                <div className="renderer-header-contact-info">
                    <RendererHeaderContactInfoItem icon={<FaEnvelope />} info={email}/>
                    <RendererHeaderContactInfoItem icon={<FaPhone />} info={phone}/>
                    <RendererHeaderContactInfoItem icon={<FaLocationDot />} info={address}/>
                </div>
            </div>
        </>
    );
}

RendererHeader.propTypes;
export default RendererHeader;