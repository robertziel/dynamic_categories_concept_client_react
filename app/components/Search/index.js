import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Divider, Grid } from '@material-ui/core';

import { stringifyParams } from 'utils/fetchers';

import CategoriesList from './CategoriesList';
import Filters from './Filters';

class Search extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(params) {
    console.log(`Search form submitted, params: ${stringifyParams(params)}`);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CategoriesList categoryId={this.props.categoryId} />
          <Divider />
          <Filters
            categoryId={this.props.categoryId}
            onSubmit={this.fetchData}
          />
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    );
  }
}

Search.propTypes = {
  categoryId: PropTypes.string,
};

export default Search;
