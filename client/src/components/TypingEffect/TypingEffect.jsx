import React, { useEffect, useState } from 'react';
import './TypingEffect.css'

const TypewriterEffect = ({ text, typingDelay, className }) => {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true)

    useEffect(() => {
        let typingTimeoutId;
        let blinkIntervalId;

        if (index < text.length) {
            typingTimeoutId = setTimeout(() => {
                setDisplayedText(text.substring(0, index + 1))
                setIndex(index + 1);
            }, typingDelay);
        } else {
            blinkIntervalId = setInterval(() => {
                setCursorVisible(prevVisible => !prevVisible)
            }, 700)
        }

        return () => {
            clearTimeout(typingTimeoutId);
            clearInterval(blinkIntervalId)
        };
    }, [index, text, typingDelay])

    return (
        <h1 className={className}>
            {displayedText}
            {cursorVisible && <span className="cursor">|</span>}
        </h1>
    );
};

export default TypewriterEffect;
