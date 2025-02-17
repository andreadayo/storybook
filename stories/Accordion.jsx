import PropTypes from "prop-types";
import { useState } from "react";
import "./accordion.css";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};
