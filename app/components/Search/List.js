import React from 'react';
import PropTypes from 'prop-types';

import { Divider, GridList, GridListTile, Paper } from '@material-ui/core';

export default function List(props) {
  const { items } = props;

  return (
    <GridList cellHeight={150} cols={1}>
      {items.map(item => (
        <GridListTile key={item.id}>
          <Paper>
            <h4>{item.name}</h4>
            <Divider />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </Paper>
        </GridListTile>
      ))}
    </GridList>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};
