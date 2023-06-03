import './codeBox.css';

export default function CodeBox(props) {
    const code = props.code;

    return (
        <div className="codeBox">
            {code}
        </div>
    )
}