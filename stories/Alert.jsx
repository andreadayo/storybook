import PropTypes from "prop-types";
import { useState } from "react";
import "./alert.css";

export default function Alert({ message, variant, onClose }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`alert alert-${variant}`}>
      <span className="alert-message">{message}</span>
      <button
        className="alert-close"
        onClick={() => {
          setVisible(false);
          onClose?.();
        }}
      >
        &times;
      </button>
    </div>
  );
}

Alert.propTypes = {
  /** The message displayed inside the alert */
  message: PropTypes.string.isRequired,
  /** The variant of the alert */
  variant: PropTypes.oneOf(["error", "warning", "success", "info", "neutral"])
    .isRequired,
  /** Function called when the alert is closed */
  onClose: PropTypes.func,
};
