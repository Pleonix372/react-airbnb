import "./index.css";

export default function ListItem({ children, imageSrc, title, border }) {
  return (
    // <li className="list-item">
    <li className={`list-item ${border ? "list-item--border" : ""}`}>
      {imageSrc && (
        <img
          height={80}
          width={80}
          src={imageSrc}
          alt="Icon"
          className="list-image"
        />
      )}
      <div className="list-item__block">
        {title && <strong className="list-item__title">{title}</strong>}
        <div className="list-item__content">{children}</div>
      </div>
    </li>
  );
}
