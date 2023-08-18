import { useState } from "react";
import "../../style/herofaq.css";
import { AiOutlinePlus } from "react-icons/ai";

const Herofaq = (props) => {
  const { question, answer } = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccrodian = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`herofaq-wrapper ${isOpen ? "open" : ""}`}>
      <div className={`question-wrapper`}>
        <span className="herofaq-question">{question}</span>
        <div
          onClick={toggleAccrodian}
          className={` plus-icon ${isOpen ? "open" : ""}`}
        >
          <AiOutlinePlus />
        </div>
      </div>
      {isOpen && <span className="herofaq-answer">{answer}</span>}
    </div>
  );
};

export default Herofaq;
