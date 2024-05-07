import React, { useState, useEffect } from "react";


const Typewriter = ({ text, delayBeforeDeleting }) => {
  const [displayText, setDisplayText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cursorPosition < text.length && !isDeleting) {
        setDisplayText((prevText) => prevText + text[cursorPosition]);
        setCursorPosition((prevPosition) => prevPosition + 1);
      } else if (cursorPosition > 0 && isDeleting) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCursorPosition((prevPosition) => prevPosition - 1);
      } else if (!isDeleting) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDeleting);
      } else {
        setIsDeleting(false);
        setCursorPosition(0);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [cursorPosition, isDeleting, text, delayBeforeDeleting]);

  return <div>{displayText}</div>;
};

const LetreiroFinal = () => {
  return (
    <div className="text">
      <Typewriter text="Conheça a Fatec!" delayBeforeDeleting={1000} />
    </div>
  );
};

export default LetreiroFinal;

//Código feito com auxilio do aluno José Victor