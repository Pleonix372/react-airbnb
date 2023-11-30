import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import Pool from "./pool.svg";
import Gym from "./gym.svg";
import FreeBreakfast from "./free-breakfast.svg";
import FreeWiFi from "./free-wifi.svg";
import Parking from "./parking.svg";
import PetsAllowed from "./pets-allowed.svg";
import AirportShuttle from "./airport-shuttle.svg";
import ConciergeService from "./concierge-service.svg";
import RoomService from "./room-service.svg";
import ChildFriendly from "./child-friendly.svg";

export default function Comfort({ ...rest }) {
  return (
    <Box shadow className="comfort">
      <Heading border>Зручності</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="comfort__list">
      <div className={`${!hasPool ? "false" : ""}`}>
        <ListItem border>
          <img src={Pool} alt="Pool" height={24} />
          <span className={`${!hasPool ? "false" : ""}`}>Басейн</span>
        </ListItem>
      </div>

      <div className={`${!hasGym ? "false" : ""}`}>
        <ListItem border>
          <img src={Gym} alt="Gym" height={24} />
          <span>Спортивний зал</span>
        </ListItem>
      </div>

      <div className={`${!hasFreeBreakfast ? "false" : ""}`}>
        <ListItem border>
          <img src={FreeBreakfast} alt="FreeBreakfast" height={24} />
          <span>Безкоштовний сніданок</span>
        </ListItem>
      </div>

      <div className={`${!hasFreeWiFi ? "false" : ""}`}>
        <ListItem border>
          <img src={FreeWiFi} alt="FreeBreakfast" height={24} />
          <span>Безкоштовний WI-FI</span>
        </ListItem>
      </div>

      <div className={`${!hasParking ? "false" : ""}`}>
        <ListItem border>
          <img src={Parking} alt="FreeBreakfast" height={24} />
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      </div>

      <div className={`${!hasPetsAllowed ? "false" : ""}`}>
        <ListItem border>
          <img src={PetsAllowed} alt="FreeBreakfast" height={24} />
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      </div>

      <div className={`${!hasAirportShuttle ? "false" : ""}`}>
        <ListItem border>
          <img src={AirportShuttle} alt="FreeBreakfast" height={24} />
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      </div>

      <div className={`${!hasConciergeService ? "false" : ""}`}>
        <ListItem border>
          <img src={ConciergeService} alt="FreeBreakfast" height={24} />
          <span>Консьєрж-сервіс</span>
        </ListItem>
      </div>

      <div className={`${!hasRoomService ? "false" : ""}`}>
        <ListItem border>
          <img src={RoomService} alt="FreeBreakfast" height={24} />
          <span>Обслуговування номерів</span>
        </ListItem>
      </div>

      <div className={`${!hasChildFriendly ? "false" : ""}`}>
        <ListItem border>
          <img src={ChildFriendly} alt="FreeBreakfast" height={24} />
          <span>Підходить для дітей</span>
        </ListItem>
      </div>
    </ul>
  );
}
