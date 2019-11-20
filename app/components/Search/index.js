import React, { Component } from 'react';

import { Grid, Paper } from '@material-ui/core';

import { stringifyParams } from 'utils/fetchers';

import Filters from './Filters';

class Search extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(params) {
    console.log(`Search form submitted, params: ${stringifyParams(params)}`);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Filters onSubmit={this.fetchData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    );
  }
}

export default Search;
