/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Grid, Paper } from '@material-ui/core';

import Search from 'components/Search';
import messages from './messages';

export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </Paper>
        </Grid>
      </Grid>
      <Search />
    </Container>
  );
}
