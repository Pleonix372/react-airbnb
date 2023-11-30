import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AdditionalProperties({ ...rest }) {
  return (
    <Box shadow className="properties">
      <Heading border>Додаткові властивості</Heading>

      <List {...rest} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
}) {
  return (
    <ul className="properties__list">
      <ListItem border title="House rules">
        <span>{house_rules}</span>
      </ListItem>

      <ListItem border title="Cancellation policy">
        <span>{cancellation_policy}</span>
      </ListItem>

      <ListItem border title="Local transportation">
        <span>{local_transportation}</span>
      </ListItem>

      <ListItem border title="Host languages">
        <span>{host_languages}</span>
      </ListItem>

      <ListItem border title="Special offers">
        <span>{special_offers}</span>
      </ListItem>
    </ul>
  );
}
