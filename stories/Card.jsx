import PropTypes from "prop-types";
import "./card.css";

export default function Card({ title, description, image, author, date }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-author">{author}</span>
          <span className="card-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  /** Title of the blog post */
  title: PropTypes.string.isRequired,
  /** Description of the blog post */
  description: PropTypes.string.isRequired,
  /** URL of the blog post image (optional) */
  image: PropTypes.string,
  /** Name of the blog author */
  author: PropTypes.string.isRequired,
  /** Date of publication */
  date: PropTypes.string.isRequired,
};
