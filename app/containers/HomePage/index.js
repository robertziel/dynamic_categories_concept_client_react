/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import { Container, Grid, Paper } from '@material-ui/core';

import Cart from 'components/Cart';
import Search from 'components/Search';
import messages from './messages';

export default function HomePage(props) {
  const categoryId = props.match.params.id;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <div>
              <h1>
                <FormattedMessage {...messages.header} />
              </h1>

              <Cart />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Search categoryId={categoryId} />
    </Container>
  );
}

HomePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
