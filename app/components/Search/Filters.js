import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { TextField } from '@material-ui/core';

import { stringifyParams } from 'utils/fetchers';
import history from 'utils/history';

import messages from './messages';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.params = queryString.parse(history.location.search);

    this.state = {
      title: this.params.title,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const params = {
      title: this.state.title,
    };

    history.push({
      search: stringifyParams(params),
    });

    this.props.onSubmit(params);
  }

  onSubmit(event) {
    event.preventDefault();

    this.fetchData();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="title"
          label={this.props.intl.formatMessage(messages.filterName)}
          type="search"
          margin="normal"
          variant="outlined"
          defaultValue={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
      </form>
    );
  }
}

Filters.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Filters);
