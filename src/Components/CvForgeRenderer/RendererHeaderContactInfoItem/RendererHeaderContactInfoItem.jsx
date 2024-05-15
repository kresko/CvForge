import './RendererHeaderContactInfoItem.css';

function RendererHeaderContactInfoItem({ info, icon}) {
    return (
        <>
            <div className="renderer-header-contact-info-item">
                <div>{icon}</div>
                <span>{info}</span>
            </div>
        </>
    );
}

RendererHeaderContactInfoItem.propTypes;
export default RendererHeaderContactInfoItem;