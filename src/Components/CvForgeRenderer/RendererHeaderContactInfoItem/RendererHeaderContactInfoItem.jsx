import './RendererHeaderContactInfoItem.css';

function RendererHeaderContactInfoItem({ info, icon, layoutPosition}) {
    return (
        <>
            <div className={`renderer-header-contact-info-item ${layoutPosition}`}>
                <div>{icon}</div>
                <span>{info}</span>
            </div>
        </>
    );
}

RendererHeaderContactInfoItem.propTypes;
export default RendererHeaderContactInfoItem;