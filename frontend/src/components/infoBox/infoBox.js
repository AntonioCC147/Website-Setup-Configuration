import './infoBox.css';

export default function InfoBox(props) {
    const text = props.text;

    return (
        <>
            <div className="info-container">
                <div className="vertical-info">{text}</div>
            </div>
        </>
    )
}