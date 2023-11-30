import "./index.css";

import ListItem from "../list-item";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <ListItem title={`Господар - ${name}`} imageSrc={image}>
        <div className="contact__sub-block">
          <span className="contact__sub-value">{phone}</span>

          <span className="contact__sub-value">{response_time}</span>

          <span className="contact__sub-value">
            {response_rate}% швидкості відгуку
          </span>
        </div>
      </ListItem>
      <span>{info}</span>
    </div>
  );
}
