import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import queryString from 'qs';

import { Button, Paper } from '@material-ui/core';

import { stringifyParams } from 'utils/fetchers';
import history from 'utils/history';

import { IntegerRangeField, StringField } from './filterFields';

import messages from './messages';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.params = queryString.parse(history.location.search.replace('?',''));

    this.state = {
      price: this.params.price,
      title: this.params.title,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {

    const params = {
      price: this.state.price,
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

  setValue(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <Paper>
        <form onSubmit={this.onSubmit}>
          <StringField
            fieldKey="title"
            label={this.props.intl.formatMessage(messages.filterName)}
            defaultValue={this.state.title}
            onChange={this.setValue}
          />
          <IntegerRangeField
            fieldKey="price"
            label={this.props.intl.formatMessage(messages.filterPrice)}
            defaultValue={this.state.price}
            onChange={this.setValue}
          />
          <Button type="submit">
            <FormattedMessage {...messages.filterButton} />
          </Button>
        </form>
      </Paper>
    );
  }
}

Filters.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Filters);
