import PropTypes from "prop-types";
import "./textInput.css";

export default function TextInput({
  label,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
