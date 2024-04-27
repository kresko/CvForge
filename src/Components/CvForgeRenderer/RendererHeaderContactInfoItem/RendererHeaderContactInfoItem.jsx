import './RendererHeaderContactInfoItem.css';

function RendererHeaderContactInfoItem({ info, icon}) {
    return (
        <>
            <div className="renderer-header-contact-info-item">
                <p>{icon}</p>
                <span>{info}</span>
            </div>
        </>
    );
}

RendererHeaderContactInfoItem.propTypes;
export default RendererHeaderContactInfoItem;