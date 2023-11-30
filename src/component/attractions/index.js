import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import { Fragment } from "react";

export default function Attractions({ list }) {
  return (
    <Box shadow className="properties">
      <Heading border>Пам'ятки поблизу</Heading>

      <ul className="properties__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </ul>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem border>
      <a href={link} className="link">
        {name}
      </a>
    </ListItem>
  );
}
