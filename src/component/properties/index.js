import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import Guests from "./guests.svg";
import Bedrooms from "./bedrooms.svg";
import Beds from "./beds.svg";
import Baths from "./baths.svg";

export default function Properties({ ...rest }) {
  return (
    <Box shadow className="properties">
      <Heading border>Детальні властивості</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="properties__list">
      <ListItem border>
        <img src={Guests} alt="Guests" height={24} />
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem border>
        <img src={Bedrooms} alt="Bedrooms" height={24} />
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem border>
        <img src={Beds} alt="Beds" height={24} />
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem border>
        <img src={Baths} alt="Baths" height={24} />
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
