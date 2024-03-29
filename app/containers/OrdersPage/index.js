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

import messages from './messages';

export default function OrdersPage(props) {
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


            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
