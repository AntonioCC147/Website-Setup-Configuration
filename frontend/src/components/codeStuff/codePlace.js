import React, { useEffect, useRef } from 'react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CodeWorkspace = ({ code, language }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        Prism.highlightElement(codeRef.current);
    }, [code]);

    return (
        <div className="codeBox">
            <pre style={{background: "#323131"}}>
                <code ref={codeRef} className={`language-${language}`} style={{color: "white", textShadow: "none"}}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeWorkspace;